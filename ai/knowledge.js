(function () {
  'use strict';

  const exercises = [
    ['Bench Press', 'Dada', 'Trisep, bahu depan', 'compound', 'Berbaring stabil, tarik bahu ke belakang, turunkan bar ke dada dengan kontrol, lalu dorong tanpa mengunci siku secara agresif.', 'Pantat terangkat, siku terlalu melebar, memantulkan bar, dan memakai beban tanpa spotter.', '3–4 set × 6–12 repetisi', ['bench press', 'barbell bench', 'bench']],
    ['Incline Bench Press', 'Dada atas', 'Trisep, bahu depan', 'compound', 'Atur bangku sekitar 30–45 derajat, rapatkan tulang belikat, turunkan bar ke dada atas, lalu dorong dengan kontrol.', 'Sudut terlalu curam, bahu terangkat, dan memendekkan rentang gerak.', '3–4 set × 8–12 repetisi', ['incline', 'incline bench', 'incline chest press', 'dada atas']],
    ['Decline Bench Press', 'Dada bawah', 'Trisep, bahu depan', 'compound', 'Kunci kaki pada bantalan, jaga bahu tetap stabil, turunkan beban perlahan ke dada bawah, lalu dorong terkontrol.', 'Turun terlalu cepat, grip terlalu sempit, dan melepas pengaman tanpa bantuan.', '3 set × 8–12 repetisi', ['decline', 'decline bench']],
    ['Dumbbell Chest Press', 'Dada', 'Trisep, bahu depan', 'compound', 'Pegang dumbbell di sisi dada, stabilkan pergelangan, dorong ke atas tanpa membenturkan dumbbell, lalu turunkan penuh dengan kontrol.', 'Beban terlalu berat, bahu maju, dan rentang gerak tidak seimbang.', '3 set × 8–12 repetisi', ['dumbbell press', 'db chest press', 'chest press']],
    ['Pec Deck Fly', 'Dada', 'Bahu depan', 'isolation', 'Sesuaikan tinggi kursi, pertahankan dada terbuka, satukan lengan dengan siku sedikit menekuk, lalu kembali perlahan.', 'Mengayun, menekan dengan tangan, atau membuka terlalu jauh sampai bahu terasa sakit.', '2–3 set × 10–15 repetisi', ['pec deck', 'chest fly machine', 'fly machine']],
    ['Cable Fly', 'Dada', 'Bahu depan, core', 'isolation', 'Berdiri stabil, tarik handle membentuk busur ke depan dada, tahan kontraksi singkat, dan kembalikan perlahan.', 'Beban berlebihan, siku terkunci, dan kehilangan posisi bahu.', '2–3 set × 10–15 repetisi', ['cable fly', 'cable crossover', 'crossover']],
    ['Lat Pulldown', 'Punggung lebar', 'Bisep, bahu belakang', 'compound', 'Duduk dengan paha terkunci, tarik bar ke arah dada atas sambil menurunkan bahu, lalu lepaskan perlahan.', 'Menarik di belakang leher, mengayun, dan memakai momentum.', '3–4 set × 8–12 repetisi', ['lat pulldown', 'pulldown', 'tarik punggung']],
    ['Seated Cable Row', 'Punggung tengah', 'Bisep, bahu belakang', 'compound', 'Duduk tegak, tarik handle ke arah perut sambil merapatkan tulang belikat, lalu luruskan lengan tanpa membungkuk.', 'Punggung membulat, menarik dengan lengan saja, dan menyentak beban.', '3 set × 8–12 repetisi', ['seated row', 'cable row', 'seated cable row']],
    ['Dumbbell Row', 'Punggung', 'Bisep, bahu belakang, core', 'compound', 'Sangga tubuh dengan posisi netral, tarik dumbbell ke arah pinggul, dan turunkan sampai lengan memanjang dengan kontrol.', 'Memutar badan, mengangkat bahu, dan menarik ke arah dada secara berlebihan.', '3 set × 8–12 per sisi', ['dumbbell row', 'one arm row', 'db row']],
    ['Shoulder Press', 'Bahu depan dan samping', 'Trisep, core', 'compound', 'Duduk atau berdiri dengan core aktif, tekan beban ke atas dalam jalur stabil, lalu turunkan sampai nyaman.', 'Punggung melengkung berlebihan, siku terlalu ke samping, dan memaksa saat nyeri.', '3 set × 8–12 repetisi', ['shoulder press', 'overhead press', 'military press']],
    ['Lateral Raise', 'Bahu samping', 'Trapezius', 'isolation', 'Angkat beban ke samping sampai sekitar setinggi bahu dengan siku lembut, lalu turunkan perlahan.', 'Mengayun, mengangkat terlalu tinggi, dan memakai beban yang tidak bisa dikontrol.', '3 set × 12–20 repetisi', ['lateral raise', 'lateral raises', 'side raise']],
    ['Bicep Curl', 'Bisep', 'Lengan bawah', 'isolation', 'Jaga siku dekat badan, curl tanpa mengayun, kontraksikan bisep, lalu turunkan sampai hampir lurus.', 'Badan bergoyang, siku maju, dan menjatuhkan beban pada fase turun.', '3 set × 8–12 repetisi', ['bicep curl', 'dumbbell curl', 'curl']],
    ['Hammer Curl', 'Bisep dan brachialis', 'Lengan bawah', 'isolation', 'Gunakan grip netral seperti memegang palu, jaga siku tetap, dan lakukan fase turun secara perlahan.', 'Memutar pergelangan, mengayun, dan menurunkan beban tanpa kontrol.', '2–3 set × 10–15 repetisi', ['hammer curl', 'neutral curl']],
    ['Triceps Pushdown', 'Trisep', 'Core, lengan bawah', 'isolation', 'Siku tetap di sisi badan, tekan handle ke bawah sampai lengan hampir lurus, lalu kembali tanpa mengangkat bahu.', 'Siku bergerak maju-mundur, badan membungkuk, dan beban terlalu berat.', '3 set × 10–15 repetisi', ['triceps pushdown', 'tricep pushdown', 'pushdown']],
    ['Squat', 'Paha depan dan glute', 'Paha belakang, core', 'compound', 'Kaki stabil, brace core, duduk ke bawah dengan lutut mengikuti arah jari kaki, lalu berdiri dengan kontrol.', 'Tumit terangkat, lutut ambruk ke dalam, dan kehilangan posisi punggung.', '3–4 set × 6–12 repetisi', ['squat', 'barbell squat']],
    ['Leg Press', 'Paha dan glute', 'Paha belakang', 'compound', 'Punggung menempel pada sandaran, turunkan platform sejauh nyaman, lalu dorong melalui telapak tanpa mengunci lutut.', 'Lutut mengunci, pinggul terangkat dari bantalan, dan rentang gerak dipaksakan.', '3–4 set × 8–15 repetisi', ['leg press', 'press kaki']],
    ['Romanian Deadlift', 'Paha belakang dan glute', 'Punggung bawah, core', 'compound', 'Dorong pinggul ke belakang dengan lutut sedikit menekuk, jaga beban dekat paha, lalu kembali dengan glute.', 'Punggung membulat, beban menjauh dari tubuh, dan turun terlalu rendah.', '3 set × 8–12 repetisi', ['romanian deadlift', 'rdl', 'stiff leg deadlift']],
    ['Leg Curl', 'Paha belakang', 'Betis', 'isolation', 'Atur bantalan sesuai sendi lutut, curl dengan kontrol, tahan singkat, lalu kembali perlahan.', 'Mengangkat pinggul, menyentak, dan rentang gerak terlalu pendek.', '3 set × 10–15 repetisi', ['leg curl', 'hamstring curl']],
    ['Leg Extension', 'Paha depan', '—', 'isolation', 'Sesuaikan bantalan pada tulang kering, luruskan lutut dengan tempo terkontrol, lalu turunkan perlahan.', 'Menendang beban, mengunci lutut keras, dan memakai beban berlebihan.', '2–3 set × 10–15 repetisi', ['leg extension', 'quad extension']],
    ['Calf Raise', 'Betis', '—', 'isolation', 'Naikkan tumit setinggi nyaman, tahan kontraksi, lalu turunkan sampai mendapat regangan terkontrol.', 'Memantul cepat, rentang gerak pendek, dan posisi kaki tidak stabil.', '3–4 set × 12–20 repetisi', ['calf raise', 'standing calf raise', 'betis']]
  ].map(function (item) {
    return {
      name: item[0], target: item[1], secondary: item[2], category: item[3],
      safety: item[4], mistakes: item[5], guidance: item[6], aliases: item[7]
    };
  });

  window.GymAIKnowledge = {
    exercises: exercises,
    muscleAliases: {
      dada: ['dada', 'chest', 'pectorals', 'pec', 'upper chest', 'dada atas', 'dada bawah'],
      punggung: ['punggung', 'back', 'lats', 'latihan tarik'],
      bahu: ['bahu', 'shoulder', 'deltoid', 'delts'],
      lengan: ['lengan', 'arms', 'bisep', 'biceps', 'trisep', 'triceps'],
      kaki: ['kaki', 'legs', 'paha', 'quad', 'quadriceps', 'hamstring', 'betis'],
      core: ['core', 'perut', 'abs', 'abdominal']
    },
    split: {
      push: 'Push melatih dada, bahu, dan trisep.',
      pull: 'Pull melatih punggung, bahu belakang, dan bisep.',
      legs: 'Legs melatih paha depan, paha belakang, glute, betis, dan core.'
    },
    recovery: 'Sebagian besar kelompok otot membutuhkan sekitar 48–72 jam sebelum dilatih keras lagi. Tidur cukup, makan seimbang, dan lihat performa serta rasa lelah sebagai panduan.',
    safety: 'Gunakan beban yang dapat dikontrol, lakukan pemanasan, naikkan beban bertahap, dan hentikan gerakan bila terasa nyeri tajam. Konsultasikan kondisi khusus kepada profesional kesehatan atau pelatih berkualifikasi.',
    nutrition: {
      proteinSources: 'Telur, tempe, tahu, ayam, ikan kembung, susu, dan kacang-kacangan adalah pilihan protein yang mudah ditemukan. Variasikan sumbernya dan tetap sertakan nasi atau sumber karbohidrat, sayur, serta buah.',
      budgetNote: 'Harga makanan adalah perkiraan dan bisa berbeda menurut kota, musim, ukuran kemasan, serta tempat belanja.',
      preWorkout: 'Sebelum latihan 1–3 jam, pilih karbohidrat yang mudah dicerna dengan protein ringan, misalnya nasi dan telur, pisang dengan susu, atau roti dan tempe. Sesuaikan porsi dengan toleransi perut.',
      postWorkout: 'Setelah latihan, makan dalam beberapa jam dengan kombinasi protein dan karbohidrat, misalnya nasi, telur atau tempe, dan sayur. Tidak perlu mengejar makanan khusus atau suplemen agar latihan tetap bermanfaat.',
      hydration: 'Minum air secara berkala sepanjang hari dan tambah saat berkeringat. Warna urine yang sangat pekat dapat menjadi tanda untuk lebih memperhatikan asupan cairan; kebutuhan tiap orang berbeda.'
    }
  };
}());
