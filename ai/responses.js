(function () {
  'use strict';

  function normalize(value) {
    return window.GymAISynonyms ? window.GymAISynonyms.normalize(value) : String(value || '').toLowerCase();
  }

  function findExercise(query) {
    const text = normalize(query);
    let bestMatch = null;
    let bestScore = 0;
    (window.GymAIKnowledge.exercises || []).forEach(function (exercise) {
      [exercise.name].concat(exercise.aliases || []).forEach(function (alias) {
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
    const match = text.match(/(?:rp)?(\d+(?:[.,]\d+)?)\s*(k|rb|ribu|000|rupiah)?/);
    if (!match || !/(rp|k|rb|ribu|000|rupiah)/.test(match[0])) return null;
    let amount = Number(match[1].replace(',', '.'));
    const suffix = match[2] || '';
    if (suffix === 'k' || suffix === 'rb' || suffix === 'ribu') amount *= 1000;
    if (suffix === '000') amount *= 1000;
    return Number.isFinite(amount) ? Math.round(amount) : null;
  }

  function parseDuration(query) {
    const text = normalize(query);
    const match = text.match(/(\d+)\s*(hari|day|minggu|pekan)/);
    if (!match) return null;
    return match[2] === 'minggu' || match[2] === 'pekan' ? Number(match[1]) * 7 : Number(match[1]);
  }

  function formatRupiah(value) {
    return 'Rp' + Math.round(value).toLocaleString('id-ID');
  }

  function exerciseResponse(exercise) {
    return '<strong>' + exercise.name + '</strong><br>' +
      '<span class="ai-label">Target:</span> ' + exercise.target + '<br>' +
      '<span class="ai-label">Sekunder:</span> ' + exercise.secondary + '<br>' +
      '<span class="ai-label">Kategori:</span> ' + exercise.category + '<br>' +
      '<span class="ai-label">Peralatan:</span> ' + exercise.equipment + '<br><br>' +
      '<span class="ai-label">Teknik:</span> ' + (exercise.technique || exercise.safety) + '<br><br>' +
      '<span class="ai-label">Hindari:</span> ' + exercise.mistakes + '<br><br>' +
      '<span class="ai-label">Panduan:</span> ' + exercise.guidance + '<br>' +
      '<span class="ai-label">Keamanan:</span> ' + exercise.safety;
  }

  function compareResponse(query, context) {
    const text = normalize(query);
    const current = findExercise(query);
    const previous = context.lastExercise;
    if ((text.indexOf('yang biasa') !== -1 || text.indexOf('kalau biasa') !== -1) && previous && /incline/i.test(previous.name)) {
      return '<strong>Flat Bench Press vs Incline Bench Press</strong><br>Flat Bench Press lebih menekankan keseluruhan dada dengan penekanan relatif lebih besar pada bagian tengah. Incline Bench Press menggunakan sudut 30–45 derajat sehingga dada atas dan bahu depan lebih banyak bekerja. Keduanya melatih dada; pilih sesuai tujuan dan gunakan teknik yang dapat dikontrol.';
    }
    if (text.indexOf('bench') !== -1 && text.indexOf('incline') !== -1) {
      return '<strong>Bench Press vs Incline Bench Press</strong><br>Bench Press lebih menekankan keseluruhan dada, sedangkan Incline Bench Press memberi penekanan relatif lebih besar pada dada atas dan bahu depan. Incline bukan otomatis lebih baik; keduanya dapat dipakai dalam program dengan volume yang sesuai.';
    }
    if (text.indexOf('hammer') !== -1 && text.indexOf('bicep') !== -1) {
      return '<strong>Hammer Curl vs Bicep Curl</strong><br>Hammer Curl memakai grip netral dan lebih banyak melibatkan brachialis serta lengan bawah. Bicep Curl klasik memakai telapak menghadap ke atas dan lebih menekankan bisep. Keduanya dapat dipakai dengan beban yang bisa dikontrol.';
    }
    if (current && previous && current.name !== previous.name) {
      return '<strong>' + previous.name + ' vs ' + current.name + '</strong><br>' + previous.name + ' menargetkan ' + previous.target.toLowerCase() + ', sedangkan ' + current.name + ' menargetkan ' + current.target.toLowerCase() + '. Pilih berdasarkan tujuan, alat, dan gerakan yang paling nyaman dikontrol.';
    }
    return 'Sebutkan dua latihan yang ingin dibandingkan, misalnya “Bench sama Incline bedanya apa?”';
  }

  function budgetMealPlan(query) {
    const budget = parseBudget(query);
    if (!budget) return null;
    const days = parseDuration(query) || 7;
    const basePlan = [
      { name: 'Beras 2 kg', price: 30000 },
      { name: 'Telur 10 butir', price: 22000 },
      { name: 'Tempe 7 potong', price: 14000 },
      { name: 'Tahu 10 potong', price: 10000 },
      { name: 'Pisang 1 sisir kecil', price: 14000 },
      { name: 'Sayur lokal musiman', price: 10000 }
    ];
    const ratio = days / 7;
    const plan = days === 7 ? basePlan : basePlan.map(function (item) {
      return { name: item.name, price: Math.round(item.price * ratio) };
    });
    const total = plan.reduce(function (sum, item) { return sum + item.price; }, 0);
    const daily = budget / days;
    const shopping = plan.map(function (item) { return item.name + ' (' + formatRupiah(item.price) + ')'; }).join(', ');
    const limitation = budget < total
      ? 'Budget ini lebih rendah dari perkiraan belanja dasar ' + formatRupiah(total) + '. Jika beras sudah tersedia, prioritaskan telur, tempe, tahu, dan sayur; tetap pahami bahwa budget ini mungkin belum mencukupi seluruh kebutuhan energi dan gizi.'
      : 'Perkiraan belanja dasar sekitar ' + formatRupiah(total) + '. Sisa budget dapat dipakai menyesuaikan porsi atau menambah ikan/ayam bila harga lokal memungkinkan.';
    return '<strong>Rencana makanan gym ' + days + ' hari</strong><br>' +
      'Budget <strong>' + formatRupiah(budget) + '</strong> atau sekitar ' + formatRupiah(daily) + ' per hari.<br><br>' +
      '<span class="ai-label">Belanja perkiraan:</span> ' + shopping + '.<br><br>' +
      '<span class="ai-label">Contoh pola harian:</span><br>' +
      '• Pagi: nasi atau roti + telur/tempe.<br>' +
      '• Siang: nasi + tahu/tempe atau telur + sayur.<br>' +
      '• Sebelum latihan: pisang atau sebagian nasi, 1–3 jam sebelumnya.<br>' +
      '• Malam/setelah latihan: nasi + telur/tempe/tahu + sayur.<br><br>' +
      limitation + '<br><br><em>Harga adalah estimasi dan dapat berubah menurut kota, musim, ukuran, dan tempat belanja. Ini contoh edukasi, bukan target gizi personal.</em>';
  }

  function nutritionResponse(query) {
    const text = normalize(query);
    const budget = budgetMealPlan(query);
    if (budget) return budget;
    if (/sebelum|pra latihan|pre workout/.test(text)) return '<strong>Makanan sebelum gym</strong><br>1–3 jam sebelum latihan, pilih karbohidrat dan protein ringan seperti nasi + telur/tempe, pisang + susu, atau roti + telur. Sesuaikan porsi dengan toleransi perut.';
    if (/setelah|sehabis|post workout/.test(text)) return '<strong>Makanan setelah gym</strong><br>Dalam beberapa jam setelah latihan, pilih kombinasi protein dan karbohidrat seperti nasi + telur/ayam/tempe + sayur. Tidak ada kewajiban memakai suplemen khusus.';
    if (/minum|hidrasi|air putih/.test(text)) return '<strong>Hidrasi</strong><br>Minum air berkala sepanjang hari dan tambah saat berkeringat. Kebutuhan berbeda menurut cuaca, durasi, dan banyaknya keringat.';
    if (/protein|tinggi protein|otot berkembang/.test(text)) return '<strong>Makanan tinggi protein</strong><br>Telur, ayam, ikan kembung atau lele, susu, tempe, tahu, dan kacang-kacangan adalah pilihan praktis. Variasikan sumbernya, sertakan karbohidrat serta sayur, dan jangan menganggap satu makanan menjamin pertumbuhan otot.';
    const results = window.GymAIKnowledgeSearch.search(query, 3).filter(function (result) { return result.entry.category === 'nutrition'; });
    if (results.length) return '<strong>' + results[0].entry.title + '</strong><br>' + results[0].entry.content + '<br><br><em>Nilai gizi dan harga dapat berbeda menurut bahan, merek, porsi, dan daerah.</em>';
    return '<strong>Pola makan untuk gym</strong><br>Usahakan tiap makan punya sumber protein, karbohidrat, sayur atau buah, dan cukup air. Pilihan lokal yang praktis: telur, tempe, tahu, ayam, ikan, nasi, pisang, dan kacang.';
  }

  function programResponse(query) {
    const results = window.GymAIKnowledgeSearch.search(query, 3).filter(function (result) { return result.entry.category === 'workout_program'; });
    if (results.length) return '<strong>' + results[0].entry.title + '</strong><br>' + results[0].entry.content;
    if (Array.isArray(window.WORKOUT_DATA)) {
      const index = (new Date().getDay() + 6) % 7;
      const today = window.WORKOUT_DATA[index];
      if (today) return 'Hari ini adalah <strong>' + today.dayName + ' — ' + today.name + '</strong> (' + today.muscles + ').';
    }
    return 'Program latihan belum tersedia untuk dibaca.';
  }

  function recoveryResponse(query, context) {
    const text = normalize(query);
    if (/antar set|antar-set|jeda set|istirahat set/.test(text)) {
      return '<strong>Istirahat antar-set</strong><br>Untuk gerakan compound yang berat, mulai sekitar 2–3 menit atau lebih bila napas dan teknik belum pulih. Untuk gerakan isolasi, 60–120 detik sering cukup. Prioritaskan kualitas set berikutnya.';
    }
    if ((/boleh|masih pegal|lanjut/.test(text) && /pegal|soreness|doms|upper body|latihan|gym/.test(text)) ||
      (context && context.lastIntent === 'muscle_recovery' && /boleh|lanjut|latih|upper body/.test(text))) {
      return '<strong>Masih pegal, boleh latihan?</strong><br>Jika hanya pegal ringan dan gerak tetap normal, kamu bisa melatih area lain atau menurunkan intensitas. Jangan memaksa area yang masih nyeri, bengkak, lemah, atau geraknya terbatas. Nyeri tajam atau menetap sebaiknya diperiksa oleh tenaga kesehatan.';
    }
    if (/belum pulih|belum recovery|belum recover/.test(text)) {
      return '<strong>Otot belum pulih</strong><br>Sebaiknya jangan melatih area tersebut dengan intensitas tinggi. Pilih rest day atau latih area lain bila tidak menimbulkan nyeri, lalu kembali bertahap saat gerak dan teknik sudah normal.';
    }
    if (/doms/.test(text) && /cedera|cidera|injury|beda|perbedaan/.test(text)) {
      return '<strong>DOMS vs cedera otot</strong><br>DOMS biasanya berupa pegal tumpul yang muncul 12–72 jam setelah latihan dan membaik bertahap. Cedera lebih mungkin terasa tajam atau terlokalisasi, disertai bengkak, memar, kelemahan, atau gerak terbatas. Jangan memaksa area yang dicurigai cedera dan cari evaluasi profesional bila gejalanya berat atau menetap.';
    }
    const results = window.GymAIKnowledgeSearch.search(query, 3).filter(function (result) { return result.entry.category === 'recovery'; });
    return results.length ? '<strong>' + results[0].entry.title + '</strong><br>' + results[0].entry.content : 'Recovery membutuhkan tidur cukup, makanan seimbang, hidrasi, dan jeda latihan yang sesuai.';
  }

  function supplementResponse(query) {
    const text = normalize(query);
    if (/whey/.test(text) && /creatine|kreatin/.test(text)) {
      return '<strong>Whey protein vs creatine</strong><br>Whey adalah sumber protein praktis untuk membantu memenuhi asupan protein. Creatine adalah senyawa yang dapat membantu performa pada latihan intensitas tinggi bila cocok dan digunakan konsisten. Keduanya bukan pengganti makan seimbang, latihan, dan tidur.';
    }
    const results = window.GymAIKnowledgeSearch.search(query, 3).filter(function (result) { return result.entry.category === 'supplement'; });
    return results.length ? '<strong>' + results[0].entry.title + '</strong><br>' + results[0].entry.content : 'Suplemen bukan pengganti latihan, tidur, dan pola makan. Pilih dengan hati-hati dan konsultasikan kebutuhan khusus.';
  }

  function beginnerResponse(query) {
    const text = normalize(query);
    if (/cardio/.test(text)) {
      return '<strong>Manfaat cardio</strong><br>Cardio mendukung kesehatan jantung, stamina, dan kapasitas kerja. Pilih intensitas yang tidak mengganggu latihan kekuatan dan tingkatkan durasi secara bertahap.';
    }
    if (/pertama kali|first gym|baru gym/.test(text)) {
      return '<strong>Pertama kali gym</strong><br>Mulai dengan pemanasan, kenali alat, pilih beban ringan yang bisa dikontrol, lakukan beberapa gerakan dasar, dan minta staf membantu bila ragu. Tidak perlu mencoba semua alat dalam satu sesi.';
    }
    const results = window.GymAIKnowledgeSearch.search(query, 3).filter(function (result) { return result.entry.category === 'beginner'; });
    return results.length ? '<strong>' + results[0].entry.title + '</strong><br>' + results[0].entry.content : 'Mulai dengan pemanasan, beban yang dapat dikontrol, teknik rapi, dan jadwal yang konsisten.';
  }

  function buildResponse(query, suppliedContext) {
    const context = suppliedContext || window.GymAIContext.get();
    const intent = window.GymAIIntentDetector.detect(query, context);
    const exercise = findExercise(query) || (context && context.lastExercise);
    const categoryByIntent = {
      exercise_knowledge: 'exercise',
      workout_program: 'workout_program',
      muscle_recovery: 'recovery',
      nutrition: 'nutrition',
      food_budget: 'nutrition',
      supplement: 'supplement',
      fitness_beginner: 'beginner'
    };
    const results = window.GymAIKnowledgeSearch.search(query, 5, categoryByIntent[intent]);
    let text;
    if (intent === 'empty') text = 'Tulis pertanyaan tentang latihan, nutrisi, program, recovery, atau suplemen.';
    else if (intent === 'greeting') text = 'Halo! Aku Gym AI Assistant lokal. Kamu bisa bertanya tentang latihan, program, recovery, nutrisi, budget makanan, atau suplemen.';
    else if (intent === 'food_budget') text = budgetMealPlan(query) || nutritionResponse(query);
    else if (intent === 'nutrition') text = nutritionResponse(query);
    else if (intent === 'exercise_knowledge') {
      if (/(beda|perbedaan|banding|vs|versus|yang biasa|kalau biasa)/.test(normalize(query))) {
        text = compareResponse(query, context);
      } else if (/(kombinasi|gabung|susun|rangkaian)/.test(normalize(query))) {
        text = '<strong>Kombinasi latihan dada</strong><br>1. Bench Press atau Incline Bench Press sebagai gerakan utama.<br>2. Dumbbell Chest Press untuk volume tambahan.<br>3. Pec Deck Fly atau Cable Fly sebagai isolasi terkontrol.<br><br>Mulai dari 2–4 set per gerakan sesuai level, jaga teknik, dan jangan memaksa bila bahu atau dada terasa nyeri.';
      } else if (exercise) {
        text = exerciseResponse(exercise);
      } else {
        text = results.length && results[0].score >= 4 ? '<strong>' + results[0].entry.title + '</strong><br>' + results[0].entry.content : 'Maaf, gua belum punya informasi yang cukup untuk menjawab pertanyaan itu. Coba jelaskan sedikit lebih detail.';
      }
    }
    else if (intent === 'workout_program') text = programResponse(query);
    else if (intent === 'muscle_recovery') text = recoveryResponse(query, context);
    else if (intent === 'supplement') text = supplementResponse(query);
    else if (intent === 'fitness_beginner') text = beginnerResponse(query);
    else if (intent === 'general_fitness') text = 'Fokus pada latihan konsisten, teknik yang bisa dikontrol, progres bertahap, makan seimbang, hidrasi, dan tidur cukup. Aku bisa membantu topik latihan, nutrisi, jadwal, recovery, atau suplemen.';
    else text = 'Maaf, gua belum punya informasi yang cukup untuk menjawab pertanyaan itu. Coba jelaskan sedikit lebih detail.';
    window.GymAIContext.update(query, intent, findExercise(query) || null, results);
    return { text: text, intent: intent, results: results, exercise: exercise };
  }

  window.GymAIResponses = {
    normalize: normalize,
    findExercise: findExercise,
    parseBudget: parseBudget,
    parseDuration: parseDuration,
    buildResponse: buildResponse
  };
}());
