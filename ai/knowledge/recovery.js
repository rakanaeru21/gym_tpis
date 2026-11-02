(function () {
  'use strict';
  const topics = [
    ['Muscle recovery', ['muscle recovery', 'pemulihan otot'], 'Sebagian besar otot memerlukan sekitar 48–72 jam setelah sesi keras, tetapi kebutuhan berbeda menurut volume, tidur, dan pengalaman.'],
    ['DOMS', ['doms', 'pegal setelah gym', 'pegal'], 'DOMS adalah rasa pegal yang sering muncul 12–72 jam setelah aktivitas baru atau berat. Kurangi intensitas bila mengganggu gerak dan jangan memaksa melalui nyeri tajam.'],
    ['Rest days', ['rest day', 'hari istirahat'], 'Hari istirahat membantu adaptasi. Istirahat tidak berarti gagal; aktivitas ringan boleh dilakukan bila tubuh terasa baik.'],
    ['Sleep', ['tidur', 'sleep'], 'Tidur cukup mendukung pemulihan, energi, dan konsistensi latihan. Jadwal tidur teratur lebih penting daripada mencari angka sempurna.'],
    ['Training frequency', ['frekuensi latihan', 'berapa kali gym'], 'Frekuensi ideal bergantung program dan recovery. Mulai dari jadwal yang dapat dipertahankan, lalu evaluasi performa dan kelelahan.'],
    ['Muscle soreness', ['nyeri otot', 'soreness'], 'Pegal ringan berbeda dari nyeri cedera. Gerak ringan dan pemanasan dapat membantu, tetapi nyeri tajam atau memburuk perlu perhatian profesional.'],
    ['Fatigue', ['lelah', 'fatigue', 'capek latihan'], 'Kelelahan berkelanjutan dapat menandakan volume, tidur, energi, atau stres yang perlu dievaluasi. Kurangi beban atau ambil istirahat bila performa turun terus.'],
    ['Warm-up', ['pemanasan', 'warm up'], 'Pemanasan 5–10 menit dan beberapa set ringan membantu menyiapkan gerak tanpa menghabiskan energi utama.'],
    ['Cool-down', ['pendinginan', 'cool down'], 'Pendinginan dengan jalan ringan dan napas teratur dapat membantu transisi setelah latihan; peregangan tidak harus dipaksakan.'],
    ['Active recovery', ['active recovery', 'recovery aktif'], 'Jalan santai, mobilitas ringan, atau bersepeda mudah dapat menjadi recovery aktif selama tidak menambah kelelahan.'],
    ['Overtraining signs', ['overtraining', 'tanda overtraining'], 'Waspadai penurunan performa berkepanjangan, tidur terganggu, mood buruk, denyut istirahat berubah, dan nyeri berulang. Evaluasi program dan cari bantuan profesional.'],
    ['Deload', ['deload', 'minggu ringan'], 'Deload adalah periode mengurangi volume atau intensitas untuk memberi kesempatan tubuh pulih, terutama setelah beberapa minggu latihan konsisten.'],
    ['Rest between sets', ['istirahat antar set', 'jeda set'], 'Untuk gerakan berat, 2–3 menit atau lebih bisa membantu; isolasi sering cukup 60–120 detik. Gunakan performa dan teknik sebagai panduan.'],
    ['Pain versus effort', ['latihan saat sakit', 'nyeri tajam', 'sakit saat gym'], 'Sensasi lelah otot berbeda dari nyeri tajam, menusuk, atau sendi tidak stabil. Hentikan gerakan yang menyakitkan dan konsultasikan bila menetap.'],
    ['Mobility recovery', ['mobilitas', 'mobility'], 'Mobilitas ringan pada area yang kaku dapat membantu kenyamanan, tetapi jangan memaksa rentang gerak saat nyeri.'],
    ['Hydration recovery', ['recovery hidrasi', 'minum setelah latihan'], 'Ganti cairan secara bertahap setelah berkeringat dan sertakan makanan seimbang. Elektrolit tidak selalu diperlukan untuk sesi biasa.'],
    ['Recovery nutrition', ['nutrisi recovery', 'makan untuk recovery'], 'Protein, karbohidrat, cairan, dan kalori yang cukup mendukung recovery; tidak ada satu makanan ajaib.'],
    ['Stress and recovery', ['stres recovery', 'stress latihan'], 'Stres non-latihan memengaruhi energi dan tidur. Saat stres tinggi, pilih volume yang lebih realistis.'],
    ['Rest week', ['minggu istirahat', 'break latihan'], 'Minggu lebih ringan atau jeda singkat dapat dipertimbangkan ketika akumulasi lelah mengganggu performa.'],
    ['Consistency', ['konsistensi latihan', 'rutin gym'], 'Program sederhana yang dilakukan konsisten lebih berguna daripada program sempurna yang sering terlewat.']
  ];
  window.GymAIKnowledge.recoveryEntries = topics.map(function (row) {
    return { title: row[0], aliases: row[1], content: row[2], category: 'recovery' };
  });
}());
