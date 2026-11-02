(function () {
  'use strict';

  const STORAGE_KEY = 'gym_ai_context';
  let context = load();

  function load() {
    try {
      const saved = typeof localStorage === 'undefined'
        ? {}
        : JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      return {
        lastQuery: saved.lastQuery || '',
        lastIntent: saved.lastIntent || '',
        lastExercise: saved.lastExercise || null,
        lastResults: Array.isArray(saved.lastResults) ? saved.lastResults.slice(0, 5) : []
      };
    } catch (error) {
      return { lastQuery: '', lastIntent: '', lastExercise: null, lastResults: [] };
    }
  }

  function get() {
    return context;
  }

  function update(query, intent, exercise, results) {
    context = {
      lastQuery: query,
      lastIntent: intent,
      lastExercise: exercise || context.lastExercise,
      lastResults: results || context.lastResults
    };
    try {
      if (typeof localStorage !== 'undefined') localStorage.setItem(STORAGE_KEY, JSON.stringify(context));
    } catch (error) {
      // Chat history remains available even when storage quota is unavailable.
    }
  }

  function reset() {
    context = { lastQuery: '', lastIntent: '', lastExercise: null, lastResults: [] };
    if (typeof localStorage !== 'undefined') localStorage.removeItem(STORAGE_KEY);
  }

  window.GymAIContext = { get: get, update: update, reset: reset };
}());
