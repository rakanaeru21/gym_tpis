(function () {
  'use strict';
  const topics = [
    ['Whey protein', ['whey', 'whey protein'], 'Whey adalah cara praktis menambah protein, bukan keharusan. Gunakan bila membantu memenuhi pola makan dan pilih produk tepercaya.'],
    ['Creatine', ['creatine', 'kreatin'], 'Creatine monohydrate memiliki bukti untuk membantu performa latihan tertentu bila digunakan konsisten. Efek dan kecocokan berbeda; bukan pengganti latihan atau makan.'],
    ['Protein powder', ['protein powder', 'bubuk protein'], 'Bubuk protein hanya makanan praktis. Periksa label, alergi, dan total asupan; makanan biasa tetap dapat mencukupi.'],
    ['Caffeine', ['caffeine', 'kafein', 'kopi sebelum gym'], 'Kafein dapat meningkatkan kewaspadaan pada sebagian orang, tetapi dapat mengganggu tidur, memicu berdebar, atau membuat cemas.'],
    ['Electrolytes', ['elektrolit', 'oralit olahraga'], 'Elektrolit lebih relevan saat keringat banyak atau sesi panjang. Untuk latihan biasa, air dan makanan seimbang sering cukup.'],
    ['Supplement safety', ['keamanan suplemen', 'suplemen aman'], 'Pilih produk dengan label jelas, jangan melebihi aturan, dan tanyakan profesional bila punya kondisi medis atau minum obat.'],
    ['Supplement myths', ['mitos suplemen', 'suplemen ajaib'], 'Tidak ada suplemen yang menggantikan latihan, tidur, dan pola makan. Klaim hasil instan perlu dicurigai.'],
    ['BCAA', ['bcaa', 'amino'], 'BCAA tidak wajib bila asupan protein total sudah cukup. Prioritaskan makanan seimbang atau sumber protein lengkap.'],
    ['Pre-workout', ['pre workout supplement', 'suplemen preworkout'], 'Produk pre-workout sering mengandung kafein dan bahan lain. Periksa label dan hindari bila mengganggu tidur atau menimbulkan keluhan.'],
    ['Multivitamin', ['multivitamin', 'vitamin gym'], 'Multivitamin bukan pengganti sayur, buah, dan makanan beragam. Gunakan berdasarkan kebutuhan yang jelas.'],
    ['Omega 3 supplement', ['suplemen omega 3', 'fish oil'], 'Suplemen omega-3 tidak selalu diperlukan bila sering makan ikan; konsultasikan bila punya obat atau kondisi khusus.'],
    ['Mass gainer', ['mass gainer', 'penambah berat'], 'Mass gainer hanya sumber kalori praktis dan tidak wajib. Makan nasi, telur, tempe, susu, dan kacang bisa lebih terjangkau.'],
    ['Collagen', ['kolagen', 'collagen supplement'], 'Kolagen bukan pengganti protein lengkap untuk membangun otot. Klaim manfaatnya harus dilihat secara realistis.'],
    ['Performance enhancers', ['steroid', 'doping', 'obat pembesar otot'], 'Jangan menggunakan steroid atau zat peningkat performa tanpa pengawasan medis. Risiko kesehatan dapat serius dan ini bukan rekomendasi latihan.'],
    ['Supplements for minors', ['suplemen untuk remaja', 'suplemen anak'], 'Remaja sebaiknya memprioritaskan makanan, tidur, dan latihan yang diawasi; jangan memakai zat peningkat performa atau suplemen tanpa orang tua dan tenaga kesehatan.']
  ];
  window.GymAIKnowledge.supplementEntries = topics.map(function (row) {
    return { title: row[0], aliases: row[1], content: row[2], category: 'supplement' };
  });
}());
