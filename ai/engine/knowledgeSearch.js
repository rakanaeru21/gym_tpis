(function () {
  'use strict';

  function allEntries() {
    const knowledge = window.GymAIKnowledge;
    const exercises = (knowledge.exercises || []).map(function (item) {
      return {
        title: item.name, aliases: item.aliases || [], category: 'exercise',
        content: [item.target, item.secondary, item.category, item.equipment, item.technique, item.mistakes, item.guidance, item.safety].join(' ')
      };
    });
    return exercises
      .concat(knowledge.nutritionEntries || [])
      .concat(knowledge.programEntries || [])
      .concat(knowledge.recoveryEntries || [])
      .concat(knowledge.supplementEntries || [])
      .concat(knowledge.beginnerEntries || []);
  }

  function search(query, limit, category) {
    const terms = window.GymAISynonyms.termsFor(query);
    return allEntries().map(function (entry) {
      const haystack = window.GymAISynonyms.normalize([entry.title].concat(entry.aliases || []).concat(entry.content || []).join(' '));
      let score = 0;
      terms.forEach(function (term) {
        if (haystack.indexOf(window.GymAISynonyms.normalize(term)) !== -1) score += term.length > 3 ? 2 : 1;
      });
      if (haystack.indexOf(window.GymAISynonyms.normalize(query)) !== -1) score += 5;
      return { entry: entry, score: score };
    }).filter(function (result) { return result.score > 0; })
      .filter(function (result) { return !category || result.entry.category === category; })
      .sort(function (a, b) { return b.score - a.score; })
      .slice(0, limit || 5);
  }

  window.GymAIKnowledgeSearch = { allEntries: allEntries, search: search };
}());
