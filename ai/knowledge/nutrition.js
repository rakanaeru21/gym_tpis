(function () {
  'use strict';

  const entries = [
    ['protein', ['protein', 'tinggi protein', 'protein murah'], 'Protein membantu perbaikan dan pemeliharaan jaringan. Sumber praktis: telur, ayam, ikan, susu, tempe, tahu, dan kacang-kacangan. Kebutuhan personal berbeda; jangan menjanjikan hasil otot tertentu.'],
    ['karbohidrat', ['karbo', 'nasi', 'carbs'], 'Karbohidrat adalah sumber energi latihan. Nasi, kentang, oats, roti, jagung, dan ubi dapat disesuaikan dengan porsi serta kebutuhan aktivitas.'],
    ['lemak sehat', ['lemak sehat', 'healthy fat', 'lemak'], 'Lemak membantu fungsi tubuh dan rasa kenyang. Pilih ikan, kacang, alpukat, telur, dan minyak secukupnya; lemak tetap padat energi sehingga porsi perlu diperhatikan.'],
    ['serat', ['serat', 'fiber', 'sayur'], 'Sayur, buah, kacang, dan biji-bijian memberi serat untuk pola makan seimbang. Naikkan serat bertahap dan sertakan cukup air.'],
    ['hidrasi', ['hidrasi', 'minum', 'air putih'], 'Minum air secara berkala sepanjang hari dan tambah saat berkeringat. Kebutuhan dipengaruhi cuaca, durasi latihan, dan banyaknya keringat.'],
    ['telur', ['telur', 'egg'], 'Telur adalah sumber protein dan lemak yang praktis. Telur dapat menjadi bagian pola makan harian yang bervariasi; cara masak dan total porsi tetap perlu disesuaikan.'],
    ['ayam', ['ayam', 'dada ayam', 'chicken'], 'Ayam merupakan sumber protein yang mudah dipadukan dengan nasi dan sayur. Pilih olahan tidak selalu digoreng dan sesuaikan porsi dengan kebutuhan.'],
    ['ikan', ['ikan', 'fish', 'kembung', 'lele'], 'Ikan seperti kembung, lele, tongkol, dan sarden dapat menjadi sumber protein; beberapa juga menyediakan lemak omega-3. Harga dan ketersediaan berbeda menurut daerah.'],
    ['daging sapi', ['daging sapi', 'beef', 'sapi'], 'Daging sapi mengandung protein, zat besi, dan nutrisi lain. Pilih bagian dan cara masak sesuai anggaran, lalu seimbangkan dengan sumber protein lain.'],
    ['tempe', ['tempe', 'soy cake'], 'Tempe adalah sumber protein nabati dan dapat dipadukan dengan nasi, sayur, atau tahu. Nilai gizi dan harga bergantung ukuran serta merek.'],
    ['tahu', ['tahu', 'tofu'], 'Tahu ekonomis dan serbaguna. Padukan dengan tempe, telur, atau ikan untuk variasi sumber protein, bukan mengandalkan satu bahan saja.'],
    ['susu', ['susu', 'milk', 'susu UHT'], 'Susu dapat menambah protein dan energi bila cocok dengan tubuh. Pilih jenis tanpa gula tambahan berlebihan jika itu sesuai kebutuhan.'],
    ['kacang', ['kacang', 'beans', 'kacang tanah', 'kacang hijau'], 'Kacang dan kacang hijau menyediakan protein nabati, karbohidrat, serta serat. Perhatikan porsi dan cara masak.'],
    ['makanan Indonesia hemat', ['makanan murah', 'makanan hemat', 'makanan lokal', 'makanan gym'], 'Pilihan hemat dapat berupa nasi, telur, tempe, tahu, ikan lokal, sayur musiman, pisang, dan kacang hijau. Harga adalah perkiraan dan berbeda menurut daerah.'],
    ['pre-workout', ['sebelum gym', 'sebelum latihan', 'pre workout', 'pra latihan'], 'Makan 1–3 jam sebelum latihan: nasi dan telur/tempe, pisang dan susu, atau roti dan tahu/tempe. Pilih porsi yang nyaman dicerna.'],
    ['post-workout', ['setelah gym', 'setelah latihan', 'post workout', 'sehabis latihan'], 'Setelah latihan, gabungkan protein dan karbohidrat dalam beberapa jam, misalnya nasi dengan telur/ayam/tempe dan sayur. Tidak ada keharusan suplemen khusus.'],
    ['meal planning', ['rencana makan', 'meal plan', 'susun menu', 'menu mingguan'], 'Susun menu dari bahan yang bisa dipakai berulang, tetapkan sumber protein tiap makan, belanja sesuai daftar, dan sisakan sayur atau buah.'],
    ['budget', ['budget makanan', 'anggaran makan', 'budget gym', '100 ribu'], 'Hitung budget harian dari total budget dibagi hari, lalu prioritaskan bahan pokok, protein terjangkau, sayur, dan air. Budget sangat terbatas mungkin tidak mencukupi seluruh kebutuhan energi dan gizi.'],
    ['sarapan', ['sarapan', 'breakfast'], 'Sarapan tidak wajib dengan menu khusus; pilih kombinasi yang membuatmu nyaman, misalnya nasi dan telur/tempe, oats dan susu, atau roti dan telur plus buah.'],
    ['makan malam', ['makan malam', 'dinner'], 'Makan malam tetap boleh setelah latihan. Fokus pada porsi seimbang dan rasa kenyang, bukan larangan makan setelah jam tertentu.'],
    ['camilan', ['snack', 'camilan', 'ngemil'], 'Camilan dapat berupa pisang, susu, telur rebus, kacang secukupnya, atau roti. Pilih sesuai rasa lapar dan total makan harian.'],
    ['kalori', ['kalori', 'calorie', 'energi'], 'Kalori adalah energi dari makanan. Kebutuhan dipengaruhi tubuh dan aktivitas; hindari target ekstrem tanpa penilaian personal.'],
    ['defisit energi', ['defisit kalori', 'cutting', 'menurunkan berat'], 'Penurunan berat biasanya memerlukan defisit energi yang moderat dan berkelanjutan, bukan kelaparan. Pertahankan protein, latihan, dan konsultasikan kondisi medis.'],
    ['surplus energi', ['surplus kalori', 'bulking', 'menaikkan berat'], 'Menaikkan berat dapat dilakukan dengan tambahan energi bertahap dan latihan kekuatan. Tidak perlu makan berlebihan atau mengejar kenaikan cepat.'],
    ['makanan seimbang', ['makan seimbang', 'balanced nutrition', 'gizi seimbang'], 'Pola seimbang mencakup sumber protein, karbohidrat, lemak, sayur, buah, dan cairan dengan variasi yang realistis.'],
    ['gula', ['gula', 'minuman manis'], 'Minuman manis mudah menambah kalori tetapi rendah zat gizi. Nikmati sewajarnya dan prioritaskan air sebagai minuman utama.'],
    ['garam', ['garam', 'sodium'], 'Garam dibutuhkan tubuh tetapi berlebihan tidak ideal. Batasi makanan ultra-proses dan sesuaikan perhatian pada garam bila ada anjuran tenaga kesehatan.'],
    ['omega 3', ['omega 3', 'omega-3'], 'Ikan berlemak seperti kembung dan sarden dapat menyediakan omega-3. Pilihan makanan sebaiknya menjadi dasar sebelum mempertimbangkan suplemen.'],
    ['vegetarian', ['vegetarian', 'vegan'], 'Pola vegetarian dapat mendukung latihan bila direncanakan dengan protein beragam seperti tempe, tahu, kacang, susu, atau telur sesuai pola yang dipilih.'],
    ['makan sebelum tidur', ['sebelum tidur', 'late night eating'], 'Makan sebelum tidur tidak otomatis merusak hasil. Pilih porsi yang nyaman dan perhatikan total makan serta kualitas tidur.'],
    ['frekuensi makan', ['berapa kali makan', 'frekuensi makan'], 'Tidak ada angka wajib untuk semua orang. Tiga kali makan plus camilan bila perlu dapat membantu memenuhi energi dan protein secara nyaman.'],
    ['protein per makanan', ['protein tiap makan', 'protein per meal'], 'Membagi sumber protein ke beberapa kali makan dapat lebih praktis daripada menumpuk semuanya pada satu waktu.'],
    ['bahan pokok hemat', ['belanja hemat', 'bahan murah'], 'Beras, telur, tempe, tahu, sayur lokal, pisang, dan kacang hijau sering menjadi dasar menu hemat; cek harga pasar setempat.'],
    ['keamanan makanan', ['food safety', 'keamanan makanan', 'makanan basi'], 'Cuci bahan, masak telur dan daging dengan baik, simpan makanan sesuai suhu, dan jangan konsumsi makanan yang berbau atau berubah secara mencurigakan.'],
    ['porsi', ['porsi makan', 'portion'], 'Gunakan rasa lapar, aktivitas, dan komposisi piring sebagai panduan. Isi sebagian besar piring dengan makanan utuh dan sesuaikan porsi secara bertahap.'],
    ['suplemen dan makanan', ['suplemen makanan', 'perlu suplemen'], 'Suplemen bukan pengganti pola makan. Pertimbangkan hanya bila ada kebutuhan jelas dan sumber tepercaya atau anjuran profesional.'],
    ['alergi makanan', ['alergi', 'intoleransi'], 'Jika makanan memicu reaksi, jangan memaksakan konsumsi. Cari alternatif dan konsultasikan dengan tenaga kesehatan untuk gejala serius.'],
    ['kafein dari makanan', ['kopi sebelum gym', 'kafein makanan'], 'Kopi dapat mengandung kafein yang memengaruhi energi dan tidur. Hindari terlalu dekat waktu tidur dan sesuaikan dengan toleransi.'],
    ['makan saat recovery', ['makan recovery', 'recovery nutrition'], 'Saat recovery, tetap makan cukup dan bervariasi. Protein, karbohidrat, cairan, dan tidur bekerja bersama untuk mendukung pemulihan.'],
    ['harga makanan', ['harga makanan', 'harga pasar'], 'Harga bahan berubah menurut kota, musim, ukuran, dan tempat belanja. Semua angka dalam rekomendasi lokal harus dianggap estimasi, bukan harga tetap.']
  ];

  window.GymAIKnowledge.nutritionEntries = entries.map(function (row) {
    return { title: row[0], aliases: row[1], content: row[2], category: 'nutrition' };
  });
}());
