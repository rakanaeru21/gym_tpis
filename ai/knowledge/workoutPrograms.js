(function () {
  'use strict';
  const programs = [
    ['Push Pull Legs', ['ppl', 'push pull legs'], 'Membagi sesi menjadi dorong, tarik, dan kaki. Fleksibel untuk 3–6 hari, tetapi volume dan recovery harus disesuaikan.'],
    ['Upper Lower', ['upper lower', 'atas bawah'], 'Membagi tubuh atas dan bawah, biasanya 4 hari. Efisien untuk melatih tiap kelompok sekitar dua kali per minggu.'],
    ['Full Body', ['full body', 'seluruh tubuh'], 'Melatih pola tubuh utama dalam satu sesi, cocok untuk pemula atau jadwal 2–3 hari. Sesi bisa lebih padat bila terlalu banyak gerakan.'],
    ['Bro Split', ['bro split', 'satu otot sehari'], 'Memfokuskan kelompok otot berbeda tiap hari. Sederhana, tetapi frekuensi tiap otot dapat lebih rendah.'],
    ['Push Pull', ['push pull split'], 'Membagi gerakan dorong dan tarik; kaki dapat dimasukkan ke kedua sesi atau hari tambahan.'],
    ['Three Day Split', ['three day split', '3 day split', 'split 3 hari'], 'Contoh: full body Senin-Rabu-Jumat atau push/pull/legs. Memberi jeda recovery dan mudah dijalankan.'],
    ['Four Day Split', ['four day split', '4 day split', 'split 4 hari'], 'Contoh: upper-lower-upper-lower dengan hari istirahat di antaranya. Cocok untuk konsistensi dan volume moderat.'],
    ['Five Day Split', ['five day split', '5 day split', 'split 5 hari'], 'Memberi ruang volume lebih besar dengan satu atau dua hari recovery. Tidak otomatis lebih baik bila kualitas tidur rendah.'],
    ['Beginner Program', ['program pemula', 'latihan pemula', 'beginner workout'], 'Mulai 2–3 hari full body, kuasai pola gerak, pilih beban ringan-menengah, dan tambah beban secara bertahap.'],
    ['Strength Training', ['strength training', 'latihan kekuatan', 'program kekuatan'], 'Mengutamakan gerakan compound, repetisi moderat, jeda cukup, dan progres beban atau kualitas teknik.'],
    ['Hypertrophy Structure', ['hipertrofi', 'muscle building', 'membangun otot'], 'Menggunakan volume dan repetisi moderat dengan kedekatan ke lelah yang terkontrol; tidak menjamin hasil tanpa konsistensi dan recovery.']
  ];
  window.GymAIKnowledge.programEntries = programs.map(function (row) {
    return { title: row[0], aliases: row[1], content: row[2], category: 'workout_program' };
  });
}());
