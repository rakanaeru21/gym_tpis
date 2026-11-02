(function () {
  'use strict';
  const topics = [
    ['First gym session', ['pertama kali gym', 'first gym', 'baru gym'], 'Mulai dengan pemanasan, kenali alat, pilih beban ringan, dan fokus pada teknik. Tidak perlu mencoba semua alat dalam satu hari.'],
    ['Gym etiquette', ['etika gym', 'gym etiquette'], 'Bersihkan alat setelah dipakai, kembalikan beban, beri ruang, dan jangan merebut alat yang sedang digunakan.'],
    ['Choosing weights', ['memilih beban', 'beban berapa', 'berat badan latihan'], 'Pilih beban yang memungkinkan semua repetisi dengan teknik rapi dan masih menyisakan kontrol. Naikkan bertahap, bukan karena ego.'],
    ['Equipment usage', ['cara pakai alat gym', 'menggunakan alat'], 'Baca petunjuk alat, atur kursi atau pin, lakukan satu repetisi percobaan, dan minta staf membantu bila ragu.'],
    ['Exercise order', ['urutan latihan', 'latihan dulu mana'], 'Umumnya gerakan compound yang membutuhkan energi dan teknik dikerjakan sebelum isolasi, tetapi tujuan dan alat yang tersedia juga berpengaruh.'],
    ['Training consistency', ['konsisten gym', 'rutin latihan'], 'Tetapkan jadwal realistis dan catat latihan. Konsistensi beberapa bulan lebih penting daripada sesi ekstrem sesekali.'],
    ['Workout duration', ['durasi workout', 'berapa lama gym'], 'Sesi 45–75 menit sudah cukup untuk banyak orang. Kualitas pemanasan, set utama, dan recovery lebih penting dari durasi panjang.'],
    ['Rest between sets', ['jeda antar set', 'istirahat set'], 'Mulai 1–3 menit sesuai berat gerakan dan kebutuhan napas. Tambah jeda bila teknik atau repetisi turun.'],
    ['Exercise technique', ['teknik latihan', 'form latihan'], 'Gunakan rentang gerak nyaman, tempo terkendali, dan postur stabil. Rekam video atau minta pelatih untuk evaluasi.'],
    ['Beginner mistakes', ['kesalahan pemula', 'salah pemula'], 'Kesalahan umum: terlalu berat, mengabaikan pemanasan, meniru program orang lain, sering berganti program, dan tidak mencatat progres.'],
    ['Spotter', ['spotter', 'minta bantuan bench'], 'Gunakan spotter pada angkatan yang berisiko gagal, sepakati bantuan sebelum set, dan tetap gunakan pengaman alat.'],
    ['Breathing', ['napas saat latihan', 'cara bernapas'], 'Tarik napas dan brace sebelum fase berat, buang napas saat melewati bagian sulit. Jangan menahan napas terlalu lama.'],
    ['Progressive overload', ['progressive overload', 'tambah beban'], 'Progres dapat berupa tambahan repetisi, beban, set, atau teknik lebih baik secara bertahap. Tidak perlu menambah semuanya sekaligus.'],
    ['Tracking workouts', ['catat latihan', 'log workout'], 'Catat gerakan, set, repetisi, beban, dan catatan teknik agar progres dapat dievaluasi.'],
    ['Training clothes', ['baju gym', 'pakaian gym'], 'Gunakan pakaian yang nyaman, sepatu sesuai latihan, dan bawa air serta handuk bila diperlukan.'],
    ['Warm-up beginner', ['pemanasan pemula'], 'Mulai dengan gerak ringan lalu lakukan set pemanasan untuk gerakan utama. Pemanasan bukan perlombaan kardio.'],
    ['Gym anxiety', ['malu di gym', 'takut gym', 'insecure gym'], 'Mulai di jam sepi, bawa rencana sederhana, dan ingat bahwa pemula adalah bagian normal dari gym.'],
    ['Machines versus free weights', ['mesin atau beban bebas', 'machine vs free weight'], 'Mesin lebih mudah distabilkan, beban bebas melatih koordinasi. Keduanya berguna dan dapat dipilih sesuai tujuan.'],
    ['Training to failure', ['sampai gagal', 'failure set'], 'Tidak semua set harus sampai gagal. Sisakan kontrol dan gunakan failure secara terbatas, terutama pada pemula.'],
    ['Gym frequency beginner', ['pemula gym berapa kali', 'gym pemula berapa hari'], 'Dua atau tiga sesi full body per minggu adalah awal yang masuk akal dengan hari istirahat di antaranya.'],
    ['Cardio benefit', ['manfaat cardio', 'cardio untuk gym'], 'Cardio mendukung kesehatan jantung, stamina, dan pemulihan umum. Pilih intensitas yang tidak mengganggu latihan kekuatan.'],
    ['Stretching', ['stretching', 'peregangan'], 'Peregangan ringan setelah atau terpisah dari latihan dapat membantu mobilitas, tetapi jangan memaksa area yang sakit.'],
    ['Shoes', ['sepatu gym', 'sepatu latihan'], 'Pilih sepatu stabil untuk latihan beban dan sepatu nyaman untuk cardio. Hindari alas yang licin atau tidak stabil.'],
    ['Warm-up sets', ['set pemanasan', 'warm up set'], 'Set pemanasan menggunakan beban lebih ringan untuk melatih pola gerak sebelum set kerja.'],
    ['Rest day activity', ['aktivitas hari istirahat'], 'Jalan ringan atau mobilitas boleh dilakukan bila terasa menyegarkan, tetapi hindari mengubah rest day menjadi sesi berat.'],
    ['Program change', ['ganti program', 'ubah workout'], 'Pertahankan program cukup lama untuk menilai progres, kecuali ada nyeri, alat tidak tersedia, atau kebutuhan berubah.'],
    ['Trainer help', ['tanya personal trainer', 'pelatih gym'], 'Pelatih berkualifikasi dapat membantu teknik dan program, terutama bila kamu memiliki cedera atau kebutuhan khusus.'],
    ['Workout motivation', ['motivasi gym', 'malas gym'], 'Gunakan target kecil, jadwal tetap, dan catatan progres. Motivasi naik turun; sistem yang sederhana membantu konsistensi.'],
    ['Rest after soreness', ['pegal boleh latihan', 'latihan saat pegal'], 'Pegal ringan boleh diikuti latihan area lain atau intensitas lebih ringan. Jangan melatih keras area yang masih nyeri atau geraknya terbatas.'],
    ['Gym safety', ['keamanan gym', 'aman di gym'], 'Periksa pengaman, area latihan, pin mesin, dan jalur beban. Hentikan latihan bila teknik hilang atau muncul nyeri tajam.']
  ];
  window.GymAIKnowledge.beginnerEntries = topics.map(function (row) {
    return { title: row[0], aliases: row[1], content: row[2], category: 'beginner' };
  });
}());
