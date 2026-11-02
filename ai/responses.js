(function () {
  'use strict';

  function normalize(value) {
    return String(value || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^\w\s-]/g, ' ').replace(/\s+/g, ' ').trim();
  }

  function findExercise(query) {
    const text = normalize(query);
    let bestMatch = null;
    let bestScore = 0;
    window.GymAIKnowledge.exercises.forEach(function (exercise) {
      [exercise.name].concat(exercise.aliases).forEach(function (alias) {
        const normalizedAlias = normalize(alias);
        if (normalizedAlias && text.indexOf(normalizedAlias) !== -1 && normalizedAlias.length > bestScore) {
          bestMatch = exercise;
          bestScore = normalizedAlias.length;
        }
      });
    });
    return bestMatch;
  }

  function parseBudget(query) {
    const text = normalize(query).replace(/\s/g, '');
    const match = text.match(/(\d+(?:[.,]\d+)?)\s*(k|rb|ribu|000|rupiah|rp)/);
    if (!match) return null;
    let amount = Number(match[1].replace(',', '.'));
    if (match[2] === 'k' || match[2] === 'rb' || match[2] === 'ribu') amount *= 1000;
    if (match[2] === '000') amount *= 1000;
    return Number.isFinite(amount) ? Math.round(amount) : null;
  }

  function parseDuration(query) {
    const text = normalize(query);
    const match = text.match(/(\d+)\s*(hari|day|minggu|pekan)/);
    if (!match) return null;
    const value = Number(match[1]);
    return match[2] === 'minggu' || match[2] === 'pekan' ? value * 7 : value;
  }

  function detectIntent(query) {
    const text = normalize(query);
    if (!text) return 'empty';
    if (/(makan|makanan|nutrisi|gizi|protein|sarapan|lauk|menu|diet|kalori|budget|anggaran|minum|hidrasi|air putih|sebelum latihan|sehabis latihan|setelah latihan|pre workout|post workout)/.test(text)) return 'nutrition';
    if (/(beda|perbedaan|banding|vs|versus)/.test(text)) return 'compare';
    if (/(kombinasi|gabung|susun|buatkan|rangkaian)/.test(text) && /(latih|dada|chest|push|pull|legs)/.test(text)) return 'combination';
    if (/(recovery|recover|istirahat|rest|pulih|berapa lama)/.test(text) && /(otot|muscle|latih|recovery|pulih|istirahat)/.test(text)) return 'recovery';
    if (/(push pull legs|ppl|upper lower|split|jadwal|schedule)/.test(text)) return 'split';
    if (/(program|hari ini|today|jadwal saya|workout saya|latihan saya)/.test(text)) return 'program';
    if (/(fungsi|manfaat|target|melatih|cara|teknik|aman|salah|kesalahan|set|repetisi|rep)/.test(text) || findExercise(text)) return 'exercise';
    if (/(apa itu|bagaimana|kenapa|tips|jelaskan|boleh|perlu|baik|cocok|fitness|gym|latihan)/.test(text)) return 'general';
    return 'fallback';
  }

  function exerciseResponse(exercise) {
    return '<strong>' + exercise.name + '</strong><br>' +
      '<span class="ai-label">Target:</span> ' + exercise.target + '<br>' +
      '<span class="ai-label">Sekunder:</span> ' + exercise.secondary + '<br>' +
      '<span class="ai-label">Kategori:</span> ' + exercise.category + '<br><br>' +
      '<span class="ai-label">Teknik aman:</span> ' + exercise.safety + '<br><br>' +
      '<span class="ai-label">Hindari:</span> ' + exercise.mistakes + '<br><br>' +
      '<span class="ai-label">Panduan umum:</span> ' + exercise.guidance + '. Sesuaikan dengan level dan teknikmu.';
  }

  function scheduleContext() {
    if (!Array.isArray(window.WORKOUT_DATA)) return '';
    const dayIndex = (new Date().getDay() + 6) % 7;
    const today = window.WORKOUT_DATA[dayIndex];
    if (!today) return '';
    if (today.type === 'rest') return 'Hari ini adalah <strong>' + today.dayName + ' — ' + today.name + '</strong>. Recovery juga bagian dari program.';
    const names = today.exercises.slice(0, 4).map(function (exercise) { return exercise.name; }).join(', ');
    return 'Hari ini adalah <strong>' + today.dayName + ' — ' + today.name + '</strong> (' + today.muscles + '). Latihan utama: ' + names + (today.exercises.length > 4 ? ', dan lainnya.' : '.');
  }

  function formatRupiah(value) {
    return 'Rp' + Math.round(value).toLocaleString('id-ID');
  }

  function budgetMealPlan(query) {
    const budget = parseBudget(query);
    const days = parseDuration(query) || 7;
    if (!budget) return null;

    const basePlan = [
      { name: 'Beras 2 kg', price: 30000, note: 'dibagi sesuai kebutuhan makan' },
      { name: 'Telur 10 butir', price: 22000, note: 'telur rebus atau telur dadar dengan sedikit minyak' },
      { name: 'Tempe 7 potong', price: 14000, note: 'bisa ditumis atau dikukus' },
      { name: 'Tahu 10 potong', price: 10000, note: 'pilih olahan tidak terlalu berminyak' },
      { name: 'Pisang 1 sisir kecil', price: 14000, note: 'camilan atau sebelum latihan' },
      { name: 'Sayur lokal', price: 10000, note: 'pilih kangkung, kol, wortel, atau sayur musiman' }
    ];
    const baseTotal = basePlan.reduce(function (sum, item) { return sum + item.price; }, 0);
    const ratio = days / 7;
    const plan = days === 7 ? basePlan : basePlan.map(function (item) {
      return { name: item.name, price: Math.round(item.price * ratio), note: item.note };
    });
    const total = plan.reduce(function (sum, item) { return sum + item.price; }, 0);
    const budgetText = formatRupiah(budget);
    const totalText = formatRupiah(total);
    const dailyText = formatRupiah(budget / days);
    const items = plan.map(function (item) { return item.name + ' (' + formatRupiah(item.price) + ')'; }).join(', ');
    const warning = budget < total
      ? 'Budget ini lebih rendah dari perkiraan belanja dasar (' + totalText + '). Jika beras sudah tersedia di rumah, alokasikan sisa uang untuk telur, tempe, tahu, dan sayur.'
      : 'Perkiraan belanja dasar: ' + totalText + ', sekitar ' + dailyText + ' per hari.';
    return '<strong>Rencana makan hemat ' + days + ' hari</strong><br>' +
      'Budget: <strong>' + budgetText + '</strong> (sekitar ' + dailyText + ' per hari).<br><br>' +
      '<span class="ai-label">Belanja perkiraan:</span> ' + items + '.<br><br>' +
      '<span class="ai-label">Contoh pola harian:</span><br>' +
      '• Pagi: nasi atau roti + telur/tempe + air putih.<br>' +
      '• Siang: nasi + tahu/tempe atau telur + sayur.<br>' +
      '• Sebelum latihan: 1 pisang atau sebagian nasi, 1–3 jam sebelum latihan.<br>' +
      '• Malam setelah latihan: nasi + telur/tempe/tahu + sayur.<br><br>' +
      warning + '<br><br>' +
      '<em>' + window.GymAIKnowledge.nutrition.budgetNote + ' Ini pilihan hemat, bukan target gizi personal; kebutuhan protein dan energi bergantung pada tubuh, aktivitas, serta makanan yang sudah tersedia di rumah.</em>';
  }

  function nutritionResponse(query) {
    const text = normalize(query);
    const budgetPlan = budgetMealPlan(query);
    if (budgetPlan) return budgetPlan;
    if (/(sebelum|pre workout|pra latihan)/.test(text)) return '<strong>Makan sebelum latihan</strong><br>' + window.GymAIKnowledge.nutrition.preWorkout;
    if (/(setelah|sehabis|post workout|pasca latihan)/.test(text)) return '<strong>Makan setelah latihan</strong><br>' + window.GymAIKnowledge.nutrition.postWorkout;
    if (/(minum|hidrasi|air putih|haus)/.test(text)) return '<strong>Hidrasi</strong><br>' + window.GymAIKnowledge.nutrition.hydration;
    if (/(protein murah|murah|hemat|terjangkau)/.test(text)) return '<strong>Sumber protein terjangkau</strong><br>' + window.GymAIKnowledge.nutrition.proteinSources + '<br><br>' + window.GymAIKnowledge.nutrition.budgetNote;
    if (/(protein|otot berkembang|otot|tinggi protein)/.test(text)) return '<strong>Pilihan makanan untuk mendukung latihan</strong><br>' + window.GymAIKnowledge.nutrition.proteinSources + '<br><br>Makan cukup dan teratur membantu pemulihan, tetapi tidak ada satu makanan yang menjamin pertumbuhan otot. Latihan progresif, tidur, dan total asupan harian juga berpengaruh.';
    return '<strong>Pola makan untuk gym</strong><br>' + window.GymAIKnowledge.nutrition.proteinSources + '<br><br>Usahakan tiap makan punya sumber protein, karbohidrat, sayur atau buah, dan cukup air. Kalau kamu punya budget serta jumlah hari, aku bisa buat contoh rencana hemat. ' + window.GymAIKnowledge.nutrition.budgetNote;
  }

  function buildResponse(query, context) {
    const intent = detectIntent(query);
    const exercise = findExercise(query) || (context && context.exercise);

    if (intent === 'empty') return { text: 'Tulis pertanyaan tentang latihan, teknik, recovery, atau programmu. Aku siap membantu.', exercise: null };
    if (intent === 'nutrition') return { text: nutritionResponse(query), exercise: null };
    if (intent === 'exercise' && exercise) return { text: exerciseResponse(exercise), exercise: exercise };
    if (intent === 'compare') {
      const lower = normalize(query);
      if (lower.indexOf('bench') !== -1 && lower.indexOf('incline') !== -1) {
        return { text: '<strong>Bench Press vs Incline Bench Press</strong><br>Bench Press lebih menekankan dada bagian tengah secara umum. Incline Bench Press menggunakan sudut bangku sehingga dada atas dan bahu depan lebih banyak bekerja. Keduanya bisa dikombinasikan, tetapi prioritaskan gerakan yang sesuai tujuan dan jangan menambah volume berlebihan.', exercise: null };
      }
      return { text: 'Sebutkan dua nama latihan yang ingin dibandingkan, misalnya “Bench Press vs Incline”.', exercise: null };
    }
    if (intent === 'combination') {
      const chest = window.GymAIKnowledge.exercises.filter(function (item) { return /dada/i.test(item.target); }).slice(0, 4);
      return { text: '<strong>Kombinasi latihan dada</strong><br>1. ' + chest[0].name + ' — gerakan utama<br>2. ' + chest[1].name + ' — tekan dengan sudut berbeda<br>3. ' + chest[2].name + ' — isolasi terkontrol<br>4. ' + chest[3].name + ' — finisher ringan<br><br>Mulai dari 3–4 set per gerakan dengan teknik rapi. Programmu saat ini sudah memiliki Incline Chest Press dan Pec Deck Fly pada Push Day, serta Dumbbell Chest Press pada Upper Body.', exercise: null };
    }
    if (intent === 'recovery') return { text: window.GymAIKnowledge.recovery + '<br><br>' + window.GymAIKnowledge.safety, exercise: null };
    if (intent === 'split') return { text: '<strong>Split latihan</strong><br>' + window.GymAIKnowledge.split.push + '<br>' + window.GymAIKnowledge.split.pull + '<br>' + window.GymAIKnowledge.split.legs + '<br><br>Upper/Lower membagi latihan tubuh atas dan bawah. Pilih split yang memberi recovery cukup dan bisa kamu jalankan konsisten.', exercise: null };
    if (intent === 'program') return { text: scheduleContext() || 'Program latihan belum tersedia untuk dibaca.', exercise: null };
    if (intent === 'general') return { text: 'Untuk tujuan fitness, fokus pada latihan yang konsisten, teknik yang bisa dikontrol, progres bertahap, makan seimbang, hidrasi, dan tidur cukup. Aku bisa membantu topik latihan, nutrisi, recovery, atau program Gym Tracker.', exercise: null };
    return { text: 'Topik itu belum ada di database pengetahuan lokal Gym AI. Aku bisa membantu dengan latihan, nutrisi sederhana, pilihan protein murah, rencana makan berbasis budget, recovery, hidrasi, atau jadwal Gym Tracker.', exercise: null };
  }

  window.GymAIResponses = { normalize: normalize, detectIntent: detectIntent, findExercise: findExercise, parseBudget: parseBudget, parseDuration: parseDuration, buildResponse: buildResponse };
}());
