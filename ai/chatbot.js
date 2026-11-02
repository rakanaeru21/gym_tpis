(function () {
  'use strict';

  const HISTORY_KEY = 'gym_ai_chat_history';
  const suggestions = [
    'Apa fungsi Incline Bench Press?',
    'Apa perbedaan Bench Press dan Incline?',
    'Buatkan kombinasi latihan dada.',
    'Apa itu Push Pull Legs?',
    'Berapa lama otot perlu recovery?'
  ];

  function escapeHTML(value) {
    return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
  }

  function init() {
    const launcher = document.createElement('button');
    launcher.className = 'gym-ai-launcher';
    launcher.type = 'button';
    launcher.setAttribute('aria-label', 'Buka Gym AI Assistant');
    launcher.innerHTML = '<i class="fas fa-sparkles"></i><span>Gym AI</span>';

    const panel = document.createElement('section');
    panel.className = 'gym-ai-panel';
    panel.setAttribute('aria-label', 'Gym AI Assistant');
    panel.innerHTML = '<header class="gym-ai-header"><div><div class="gym-ai-title"><span class="gym-ai-avatar"><i class="fas fa-dumbbell"></i></span>Gym AI Assistant</div><p><span class="gym-ai-status"></span> Lokal • siap membantu</p></div><button type="button" class="gym-ai-clear" aria-label="Hapus percakapan"><i class="fas fa-trash"></i></button></header><div class="gym-ai-messages" role="log" aria-live="polite"></div><div class="gym-ai-suggestions"></div><form class="gym-ai-form"><input class="gym-ai-input" maxlength="500" autocomplete="off" placeholder="Tanyakan tentang latihanmu..." aria-label="Pertanyaan untuk Gym AI"><button class="gym-ai-send" type="submit" aria-label="Kirim"><i class="fas fa-arrow-up"></i></button></form><p class="gym-ai-disclaimer">Berbasis pengetahuan lokal, bukan diagnosis medis.</p>';
    document.body.appendChild(launcher);
    document.body.appendChild(panel);

    const messages = panel.querySelector('.gym-ai-messages');
    const input = panel.querySelector('.gym-ai-input');
    const suggestionsEl = panel.querySelector('.gym-ai-suggestions');

    function save() {
      const items = Array.from(messages.querySelectorAll('.gym-ai-message')).map(function (item) {
        return { role: item.classList.contains('user') ? 'user' : 'assistant', html: item.querySelector('.gym-ai-bubble').innerHTML };
      });
      localStorage.setItem(HISTORY_KEY, JSON.stringify(items.slice(-40)));
    }
    function addMessage(role, html, persist) {
      const item = document.createElement('div');
      item.className = 'gym-ai-message ' + role;
      item.innerHTML = '<div class="gym-ai-bubble">' + html + '</div>';
      messages.appendChild(item);
      messages.scrollTop = messages.scrollHeight;
      if (persist !== false) save();
    }
    function ask(question) {
      const clean = question.trim();
      if (!clean) return;
      addMessage('user', escapeHTML(clean));
      input.value = '';
      const typing = document.createElement('div');
      typing.className = 'gym-ai-message assistant';
      typing.innerHTML = '<div class="gym-ai-bubble gym-ai-typing"><span></span><span></span><span></span></div>';
      messages.appendChild(typing);
      messages.scrollTop = messages.scrollHeight;
      window.setTimeout(function () {
        typing.remove();
        const context = window.GymAIContext ? window.GymAIContext.get() : {};
        const response = window.GymAIResponses.buildResponse(clean, context);
        addMessage('assistant', response.text);
      }, 420);
    }

    suggestions.forEach(function (question) {
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = question;
      button.addEventListener('click', function () { ask(question); });
      suggestionsEl.appendChild(button);
    });

    let history = [];
    try { history = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]'); } catch (error) { history = []; }
    if (Array.isArray(history) && history.length) history.forEach(function (item) { addMessage(item.role === 'user' ? 'user' : 'assistant', item.html, false); });
    else addMessage('assistant', 'Halo! Aku <strong>Gym AI Assistant</strong>, asisten fitness lokalmu. Aku bisa membaca program Gym Tracker dan menjelaskan teknik, otot target, recovery, atau kombinasi latihan.', false);

    launcher.addEventListener('click', function () { panel.classList.toggle('open'); if (panel.classList.contains('open')) input.focus(); });
    panel.querySelector('.gym-ai-form').addEventListener('submit', function (event) { event.preventDefault(); ask(input.value); });
    panel.querySelector('.gym-ai-clear').addEventListener('click', function () {
      messages.innerHTML = '';
      localStorage.removeItem(HISTORY_KEY);
      if (window.GymAIContext) window.GymAIContext.reset();
      addMessage('assistant', 'Percakapan sudah dibersihkan. Apa yang ingin kamu pelajari?', false);
    });
  }

  document.addEventListener('DOMContentLoaded', init);
}());
