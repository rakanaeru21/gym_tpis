(function () {
  'use strict';

  function detect(query, context) {
    const text = window.GymAISynonyms.normalize(query);
    const compact = text.replace(/\s/g, '');
    if (!text) return 'empty';
    if (/^(halo|hai|hi|hey|pagi|siang|sore|malam|permisi|assalamualaikum)\b/.test(text)) return 'greeting';
    if (/mulai gym|baru mulai|pertama kali gym|pemula/.test(text)) return 'fitness_beginner';
    if (context && context.lastIntent === 'muscle_recovery' &&
      /^(kalau|kalo|terus|lalu|boleh|bagaimana|gimana)/.test(text) &&
      /boleh|lanjut|latih|gym|upper body|push|pull|legs/.test(text)) {
      return 'muscle_recovery';
    }

    const signals = [
      {
        intent: 'food_budget',
        weight: 5,
        patterns: [/\d+(?:[.,]\d+)?\s*(k|rb|ribu|000|rupiah|rp)/, /budget|anggaran|uang makan|menu hemat|makanan murah|biaya makan|seminggu|per hari|untuk \d+ hari/]
      },
      {
        intent: 'supplement',
        weight: 5,
        patterns: [/creatine|kreatin|whey|suplemen|supplement|kafein|caffeine|elektrolit|bcaa|steroid|doping/]
      },
      {
        intent: 'muscle_recovery',
        weight: 4,
        patterns: [/recovery|recover|istirahat|rest day|pulih|pegal|nyeri otot|soreness|doms|belum pulih|tidur|lelah|fatigue|pemanasan|pendinginan|cool down|overtraining|antar.?set|jeda set|cedera|cidera/]
      },
      {
        intent: 'workout_program',
        weight: 4,
        patterns: [/push pull legs|ppl|upper lower|full body|bro split|split|program|jadwal|schedule|hari ke[- ]?\d/]
      },
      {
        intent: 'nutrition',
        weight: 3,
        patterns: [/makan|makanan|nutrisi|gizi|protein|karbo|lemak|serat|telur|ayam|ikan|daging|tempe|tahu|susu|kacang|sarapan|menu|diet|kalori|hidrasi|air putih|sebelum gym|setelah gym|pre workout|post workout/]
      },
      {
        intent: 'fitness_beginner',
        weight: 3,
        patterns: [/pertama kali|pemula|baru mulai|etika gym|alat gym|memilih beban|berapa lama gym|cardio|kesalahan|spotter|napas|malu di gym/]
      },
      {
        intent: 'exercise_knowledge',
        weight: 3,
        patterns: [/bench|press|curl|squat|deadlift|row|fly|raise|pulldown|pushdown|latihan|exercise|fungsi|teknik|target|perbedaan|beda|vs|kombinasi|gabung/]
      },
      {
        intent: 'general_fitness',
        weight: 1,
        patterns: [/fitness|gym|workout|manfaat|sehat|kebugaran|latih/]
      }
    ];

    let winner = null;
    let winnerScore = 0;
    signals.forEach(function (signal) {
      const matches = signal.patterns.reduce(function (count, pattern) {
        return count + (pattern.test(text) ? 1 : 0);
      }, 0);
      const score = matches * signal.weight;
      if (score > winnerScore) {
        winner = signal.intent;
        winnerScore = score;
      }
    });

    if (winner) return winner;
    if (context && context.lastIntent && /^(exercise_knowledge|workout_program|muscle_recovery|nutrition|food_budget|supplement|fitness_beginner|general_fitness)$/.test(context.lastIntent) && /^(kalau|kalo|terus|lalu|yang|boleh|bagaimana|gimana|terus kalau)/.test(text)) {
      return context.lastIntent;
    }
    return 'general_fitness';
  }

  window.GymAIIntentDetector = { detect: detect };
}());
