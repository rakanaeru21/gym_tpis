(function () {
  'use strict';

  const groups = {
    dada: ['dada', 'chest', 'pectorals', 'pec', 'pecs'],
    punggung: ['punggung', 'back', 'lats', 'lat'],
    bahu: ['bahu', 'shoulder', 'deltoid', 'delts'],
    lengan: ['lengan', 'arm', 'arms', 'bisep', 'biceps', 'trisep', 'triceps'],
    kaki: ['kaki', 'legs', 'leg', 'paha', 'quad', 'quadriceps', 'hamstring', 'glute', 'betis'],
    core: ['core', 'perut', 'abs', 'abdominal'],
    makanan: ['makan', 'makanan', 'food', 'nutrisi', 'gizi', 'lauk', 'menu'],
    latihan: ['gym', 'workout', 'latihan', 'latihan beban', 'ngegym'],
    pegal: ['pegal', 'soreness', 'doms', 'nyeri otot', 'capek otot']
  };

  function normalize(value) {
    return String(value || '').toLowerCase().normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^\w\s-]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function termsFor(value) {
    const text = normalize(value);
    let terms = [text].concat(text.split(/\s+/));
    Object.keys(groups).forEach(function (key) {
      if (groups[key].some(function (term) { return text.indexOf(normalize(term)) !== -1; })) {
        terms.push(key);
        terms = terms.concat(groups[key]);
      }
    });
    return Array.from(new Set(terms.filter(Boolean)));
  }

  function hasAny(value, candidates) {
    const text = normalize(value);
    return candidates.some(function (candidate) {
      return text.indexOf(normalize(candidate)) !== -1;
    });
  }

  window.GymAISynonyms = { normalize: normalize, termsFor: termsFor, hasAny: hasAny, groups: groups };
}());
