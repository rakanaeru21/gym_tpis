// ============================================================
// GYM TRACKER — Complete Application Script
// ============================================================

// ==================== 1. WORKOUT DATA MODEL ====================

const WORKOUT_DATA = [
  {
    day: 0, dayName: 'Senin', name: 'Push Day', type: 'push', muscles: 'Dada, Bahu, Trisep',
    estimatedDuration: 75,
    exercises: [
      { id: 'incline-chest-press', name: 'Incline Chest Press', sets: 3, reps: '8–12', muscle: 'chest', targetMuscle: 'Dada Atas' },
      { id: 'pec-deck-fly', name: 'Pec Deck Fly', sets: 3, reps: '8–12', muscle: 'chest', targetMuscle: 'Dada' },
      { id: 'shoulder-press', name: 'Shoulder Press', sets: 3, reps: '8–12', muscle: 'shoulders', targetMuscle: 'Bahu' },
      { id: 'lateral-raises', name: 'Lateral Raises', sets: 3, reps: '8–12', muscle: 'shoulders', targetMuscle: 'Bahu Samping' },
      { id: 'overhead-triceps-ext', name: 'Overhead Tricep Extension', sets: 3, reps: '8–12', muscle: 'arms', targetMuscle: 'Trisep' },
      { id: 'triceps-pushdown', name: 'Tricep Pushdown', sets: 3, reps: '8–12', muscle: 'arms', targetMuscle: 'Trisep' }
    ]
  },
  {
    day: 1, dayName: 'Selasa', name: 'Pull Day', type: 'pull', muscles: 'Punggung, Bisep',
    estimatedDuration: 70,
    exercises: [
      { id: 'lat-pulldown', name: 'Lat Pulldown', sets: 3, reps: '10–12', muscle: 'back', targetMuscle: 'Punggung' },
      { id: 'seated-cable-row', name: 'Seated Cable Row', sets: 3, reps: '10–12', muscle: 'back', targetMuscle: 'Punggung Tengah' },
      { id: 'one-arm-db-row', name: 'One Arm Dumbbell Row', sets: 3, reps: '10', muscle: 'back', targetMuscle: 'Punggung' },
      { id: 'face-pull', name: 'Face Pull', sets: 2, reps: '12–15', muscle: 'shoulders', targetMuscle: 'Bahu Belakang' },
      { id: 'db-bicep-curl', name: 'Dumbbell Bicep Curl', sets: 3, reps: '10–12', muscle: 'arms', targetMuscle: 'Bisep' },
      { id: 'hammer-curl', name: 'Hammer Curl', sets: 2, reps: '12', muscle: 'arms', targetMuscle: 'Bisep' }
    ]
  },
  {
    day: 2, dayName: 'Rabu', name: 'Leg Day', type: 'legs', muscles: 'Kaki & Core',
    estimatedDuration: 70,
    exercises: [
      { id: 'goblet-squat', name: 'Goblet Squat', sets: 3, reps: '10', muscle: 'legs', targetMuscle: 'Paha Depan' },
      { id: 'leg-press', name: 'Leg Press', sets: 3, reps: '10–12', muscle: 'legs', targetMuscle: 'Paha' },
      { id: 'romanian-deadlift', name: 'Romanian Deadlift', sets: 3, reps: '10', muscle: 'legs', targetMuscle: 'Paha Belakang' },
      { id: 'leg-curl', name: 'Leg Curl', sets: 3, reps: '12', muscle: 'legs', targetMuscle: 'Paha Belakang' },
      { id: 'standing-calf-raise', name: 'Standing Calf Raise', sets: 3, reps: '15', muscle: 'legs', targetMuscle: 'Betis' },
      { id: 'plank', name: 'Plank', sets: 3, reps: '30 detik', muscle: 'core', targetMuscle: 'Core' }
    ]
  },
  {
    day: 3, dayName: 'Kamis', name: 'Rest Day', type: 'rest', muscles: 'Istirahat',
    estimatedDuration: 0, exercises: []
  },
  {
    day: 4, dayName: 'Jumat', name: 'Upper Body', type: 'upper', muscles: 'Atas (Dada, Punggung, Bahu, Lengan)',
    estimatedDuration: 80,
    exercises: [
      { id: 'incline-bench-press', name: 'Incline Bench Press', sets: 3, reps: '10', muscle: 'chest', targetMuscle: 'Dada Atas' },
      { id: 'chest-supported-row', name: 'Chest Supported Row', sets: 3, reps: '10', muscle: 'back', targetMuscle: 'Punggung' },
      { id: 'db-chest-press', name: 'Dumbbell Chest Press', sets: 2, reps: '12', muscle: 'chest', targetMuscle: 'Dada' },
      { id: 'lat-pulldown-2', name: 'Lat Pulldown', sets: 3, reps: '10', muscle: 'back', targetMuscle: 'Punggung' },
      { id: 'lateral-raise', name: 'Lateral Raise', sets: 2, reps: '15', muscle: 'shoulders', targetMuscle: 'Bahu' },
      { id: 'db-curl', name: 'Dumbbell Curl', sets: 2, reps: '12', muscle: 'arms', targetMuscle: 'Bisep' },
      { id: 'triceps-pushdown-2', name: 'Triceps Pushdown', sets: 2, reps: '12', muscle: 'arms', targetMuscle: 'Trisep' }
    ]
  },
  {
    day: 5, dayName: 'Sabtu', name: 'Lower Body', type: 'lower', muscles: 'Kaki & Core',
    estimatedDuration: 80,
    exercises: [
      { id: 'squat', name: 'Squat', sets: 3, reps: '10', muscle: 'legs', targetMuscle: 'Paha Depan' },
      { id: 'romanian-deadlift-2', name: 'Romanian Deadlift', sets: 3, reps: '10', muscle: 'legs', targetMuscle: 'Paha Belakang' },
      { id: 'bulgarian-split-squat', name: 'Bulgarian Split Squat', sets: 2, reps: '10 per kaki', muscle: 'legs', targetMuscle: 'Paha' },
      { id: 'leg-extension', name: 'Leg Extension', sets: 2, reps: '12', muscle: 'legs', targetMuscle: 'Paha Depan' },
      { id: 'leg-curl-2', name: 'Leg Curl', sets: 2, reps: '12', muscle: 'legs', targetMuscle: 'Paha Belakang' },
      { id: 'calf-raise', name: 'Calf Raise', sets: 3, reps: '15', muscle: 'legs', targetMuscle: 'Betis' },
      { id: 'dead-bug', name: 'Dead Bug', sets: 2, reps: '10 per sisi', muscle: 'core', targetMuscle: 'Core' }
    ]
  },
  {
    day: 6, dayName: 'Minggu', name: 'Rest Day', type: 'rest', muscles: 'Istirahat',
    estimatedDuration: 0, exercises: []
  }
];

// ==================== 2. STORAGE KEYS ====================

const STORAGE_KEYS = {
  WEEKLY_PROGRESS: 'gym_weekly_progress',
  WORKOUT_SETS: 'gym_workout_sets',
  HISTORY: 'gym_history',
  WEIGHT_LOG: 'gym_weight_log',
  USER_NAME: 'gym_user_name',
  NOTES: 'gym_notes'
};

// ==================== 3. STATE ====================

let currentWorkoutDay = null;
let exerciseDetailReturnPage = 'exercises';
let weeklyChartInstance = null;
let monthlyChartInstance = null;

// ==================== 4. HELPER FUNCTIONS ====================

function getTodayDayIndex() {
  // JS getDay: 0=Sunday. Convert to 0=Monday ... 6=Sunday
  return (new Date().getDay() + 6) % 7;
}

function getWeekNumber(date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
}

function getWeekId() {
  const now = new Date();
  const weekNum = getWeekNumber(now);
  const d = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const year = d.getUTCFullYear();
  return `${year}-W${String(weekNum).padStart(2, '0')}`;
}

function formatDate(dateStr) {
  try {
    const d = new Date(dateStr);
    if (Number.isNaN(d.getTime())) return dateStr;
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return d.toLocaleDateString('id-ID', options);
  } catch {
    return dateStr;
  }
}

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function getDayGradient(type) {
  const gradients = {
    push: 'linear-gradient(135deg, #22C55E, #14532d)',
    pull: 'linear-gradient(135deg, #3B82F6, #1E3A5F)',
    legs: 'linear-gradient(135deg, #F59E0B, #78350F)',
    upper: 'linear-gradient(135deg, #8B5CF6, #4C1D95)',
    lower: 'linear-gradient(135deg, #EF4444, #7F1D1D)',
    rest: 'linear-gradient(135deg, #6B7280, #374151)'
  };
  return gradients[type] || gradients.rest;
}

function getMuscleGradient(muscle) {
  const gradients = {
    chest: 'linear-gradient(135deg, #22C55E, #14532d)',
    back: 'linear-gradient(135deg, #3B82F6, #1E3A5F)',
    shoulders: 'linear-gradient(135deg, #8B5CF6, #4C1D95)',
    legs: 'linear-gradient(135deg, #F59E0B, #78350F)',
    arms: 'linear-gradient(135deg, #EC4899, #831843)',
    core: 'linear-gradient(135deg, #F97316, #7C2D12)'
  };
  return gradients[muscle] || 'linear-gradient(135deg, #6B7280, #374151)';
}

function getMuscleIcon(muscle) {
  const icons = {
    chest: 'fa-dumbbell',
    back: 'fa-arrows-alt-v',
    shoulders: 'fa-male',
    legs: 'fa-walking',
    arms: 'fa-hand-rock',
    core: 'fa-shield-alt'
  };
  return icons[muscle] || 'fa-dumbbell';
}

function calculateTotalSets(exercises) {
  return exercises.reduce((sum, ex) => sum + ex.sets, 0);
}

// ==================== 5. LOCAL STORAGE MANAGEMENT ====================

function loadWeeklyProgress() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEYS.WEEKLY_PROGRESS));
    const currentWeek = getWeekId();
    if (data && data.weekId === currentWeek) {
      return data;
    }
    // New week, create fresh progress
    const fresh = { weekId: currentWeek, completed: {} };
    saveWeeklyProgress(fresh);
    return fresh;
  } catch {
    const fresh = { weekId: getWeekId(), completed: {} };
    saveWeeklyProgress(fresh);
    return fresh;
  }
}

function saveWeeklyProgress(data) {
  try {
    localStorage.setItem(STORAGE_KEYS.WEEKLY_PROGRESS, JSON.stringify(data));
  } catch { /* silent */ }
}

function loadWorkoutSets() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.WORKOUT_SETS)) || {};
  } catch {
    return {};
  }
}

function saveWorkoutSets(data) {
  try {
    localStorage.setItem(STORAGE_KEYS.WORKOUT_SETS, JSON.stringify(data));
  } catch { /* silent */ }
}

function loadHistory() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.HISTORY)) || [];
  } catch {
    return [];
  }
}

function addHistoryEntry(entry) {
  try {
    const history = loadHistory();
    history.unshift(entry);
    localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(history));
  } catch { /* silent */ }
}

function loadWeightLog() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.WEIGHT_LOG)) || {};
  } catch {
    return {};
  }
}

function saveWeightEntry(exerciseId, weight) {
  try {
    const log = loadWeightLog();
    if (!log[exerciseId]) {
      log[exerciseId] = [];
    }
    const today = new Date().toISOString().slice(0, 10);
    // Update today's entry or add new
    const existingIdx = log[exerciseId].findIndex(e => e.date === today);
    if (existingIdx >= 0) {
      log[exerciseId][existingIdx].weight = weight;
    } else {
      log[exerciseId].push({ date: today, weight: weight });
    }
    localStorage.setItem(STORAGE_KEYS.WEIGHT_LOG, JSON.stringify(log));
  } catch { /* silent */ }
}

function loadUserName() {
  try {
    return localStorage.getItem(STORAGE_KEYS.USER_NAME) || 'Raka';
  } catch {
    return 'Raka';
  }
}

function saveUserName(name) {
  try {
    localStorage.setItem(STORAGE_KEYS.USER_NAME, name);
  } catch { /* silent */ }
}

function loadNotes() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.NOTES)) || {};
  } catch {
    return {};
  }
}

function saveNote(dayIndex, note) {
  try {
    const notes = loadNotes();
    notes[dayIndex] = note;
    localStorage.setItem(STORAGE_KEYS.NOTES, JSON.stringify(notes));
  } catch { /* silent */ }
}

function resetWeeklyProgress() {
  try {
    const fresh = { weekId: getWeekId(), completed: {} };
    saveWeeklyProgress(fresh);
    // Also clear workout sets for this week
    localStorage.removeItem(STORAGE_KEYS.WORKOUT_SETS);
  } catch { /* silent */ }
}

function resetAllData() {
  try {
    Object.values(STORAGE_KEYS).forEach(key => {
      localStorage.removeItem(key);
    });
  } catch { /* silent */ }
}

// ==================== 6. EXERCISE IMAGE GENERATION ====================

function getExerciseImage(muscle) {
  const colors = {
    chest: ['#22C55E', '#14532d'],
    back: ['#3B82F6', '#1E3A5F'],
    shoulders: ['#8B5CF6', '#4C1D95'],
    legs: ['#F59E0B', '#78350F'],
    arms: ['#EC4899', '#831843'],
    core: ['#F97316', '#7C2D12']
  };
  const pair = colors[muscle] || ['#6B7280', '#374151'];
  const label = muscle ? muscle.charAt(0).toUpperCase() + muscle.slice(1) : 'Exercise';

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${pair[0]}"/>
        <stop offset="100%" style="stop-color:${pair[1]}"/>
      </linearGradient>
    </defs>
    <rect width="400" height="300" fill="url(#bg)" rx="12"/>
    <g transform="translate(200,130)" fill="white" opacity="0.3">
      <rect x="-60" y="-8" width="120" height="16" rx="8"/>
      <rect x="-80" y="-24" width="20" height="48" rx="6"/>
      <rect x="60" y="-24" width="20" height="48" rx="6"/>
    </g>
    <text x="200" y="260" text-anchor="middle" fill="white" font-family="Inter,sans-serif" font-size="18" font-weight="600" opacity="0.9">${label}</text>
  </svg>`;

  return 'data:image/svg+xml,' + encodeURIComponent(svg);
}

function getExerciseReference(exercise) {
  const illustrationIds = {
    'incline-chest-press': 'Leverage_Incline_Chest_Press',
    'pec-deck-fly': 'Butterfly',
    'bench-press': 'Incline_Dumbbell_Press',
    'incline-db-press': 'Incline_Dumbbell_Press',
    'shoulder-press': 'Face_Pull',
    'db-lateral-raise': 'Lateral_Raise_-_With_Bands',
    'lateral-raises': 'Side_Lateral_Raise',
    'triceps-pushdown': 'Triceps_Pushdown',
    'overhead-triceps-ext': 'Cable_Rope_Overhead_Triceps_Extension',
    'lat-pulldown': 'Pullups',
    'seated-cable-row': 'Seated_Cable_Rows',
    'one-arm-db-row': 'One-Arm_Dumbbell_Row',
    'face-pull': 'Face_Pull',
    'db-bicep-curl': 'Dumbbell_Bicep_Curl',
    'hammer-curl': 'Hammer_Curls',
    'goblet-squat': 'Goblet_Squat',
    'leg-press': 'Leg_Press',
    'romanian-deadlift': 'Romanian_Deadlift',
    'leg-curl': 'Lying_Leg_Curls',
    'standing-calf-raise': 'Standing_Calf_Raises',
    'plank': 'Plank',
    'incline-bench-press': 'Incline_Dumbbell_Press',
    'chest-supported-row': 'Seated_Cable_Rows',
    'db-chest-press': 'Incline_Dumbbell_Press',
    'lat-pulldown-2': 'Pullups',
    'lateral-raise': 'Lateral_Raise_-_With_Bands',
    'db-curl': 'Dumbbell_Bicep_Curl',
    'triceps-pushdown-2': 'Triceps_Pushdown',
    'squat': 'Goblet_Squat',
    'romanian-deadlift-2': 'Romanian_Deadlift',
    'bulgarian-split-squat': 'Goblet_Squat',
    'leg-extension': 'Single-Leg_Leg_Extension',
    'leg-curl-2': 'Lying_Leg_Curls',
    'calf-raise': 'Standing_Calf_Raises',
    'dead-bug': 'Plank'
  };
  const illustrationId = illustrationIds[exercise.id] || 'Incline_Dumbbell_Press';

  return {
    image: `https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/${illustrationId}/0.jpg`,
    source: 'https://github.com/yuhonas/free-exercise-db',
    tiktok: `https://www.tiktok.com/search?q=${encodeURIComponent(`${exercise.name} tutorial`)}`,
  };
}

function openTikTokApp(event) {
  const link = event.target instanceof Element
    ? event.target.closest('[data-tiktok-search]')
    : null;
  if (!link || !/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) return;

  event.preventDefault();
  const query = encodeURIComponent(link.dataset.tiktokSearch);
  const webUrl = link.href;
  let appOpened = false;

  const handleVisibilityChange = () => {
    if (document.hidden) appOpened = true;
  };

  document.addEventListener('visibilitychange', handleVisibilityChange, { once: true });
  window.location.href = `tiktok://search?keyword=${query}`;

  window.setTimeout(() => {
    document.removeEventListener('visibilitychange', handleVisibilityChange);
    if (!appOpened) window.location.href = webUrl;
  }, 1200);
}

function getDayImage(type) {
  const colors = {
    push: ['#22C55E', '#14532d'],
    pull: ['#3B82F6', '#1E3A5F'],
    legs: ['#F59E0B', '#78350F'],
    upper: ['#8B5CF6', '#4C1D95'],
    lower: ['#EF4444', '#7F1D1D'],
    rest: ['#6B7280', '#374151']
  };
  const pair = colors[type] || colors.rest;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
    <defs>
      <linearGradient id="bg2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${pair[0]}"/>
        <stop offset="100%" style="stop-color:${pair[1]}"/>
      </linearGradient>
    </defs>
    <rect width="400" height="300" fill="url(#bg2)" rx="12"/>
    <g transform="translate(200,150)" fill="white" opacity="0.25">
      <rect x="-60" y="-8" width="120" height="16" rx="8"/>
      <rect x="-80" y="-24" width="20" height="48" rx="6"/>
      <rect x="60" y="-24" width="20" height="48" rx="6"/>
    </g>
  </svg>`;

  return 'data:image/svg+xml,' + encodeURIComponent(svg);
}

// ==================== 7. TOAST SYSTEM ====================

function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  let icon = 'fa-check-circle';
  if (type === 'error') icon = 'fa-times-circle';
  else if (type === 'warning') icon = 'fa-exclamation-circle';
  toast.innerHTML = `<i class="fas ${icon}"></i> <span>${message}</span>`;
  container.appendChild(toast);
  // Force reflow for animation
  toast.offsetHeight;
  setTimeout(() => {
    toast.classList.add('toast-hide');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ==================== 8. MODAL SYSTEM ====================

function showModal(title, bodyHTML, buttons) {
  const overlay = document.getElementById('modalOverlay');
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalBody').innerHTML = bodyHTML;
  const footerEl = document.getElementById('modalFooter');
  footerEl.innerHTML = buttons.map(btn =>
    `<button class="btn ${btn.class}" id="${btn.id}">${btn.text}</button>`
  ).join('');
  overlay.classList.add('active');

  buttons.forEach(btn => {
    const btnEl = document.getElementById(btn.id);
    if (btnEl) {
      btnEl.addEventListener('click', () => {
        if (btn.onClick) btn.onClick();
        closeModal();
      });
    }
  });
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
}

// ==================== 9. PAGE NAVIGATION ====================

function navigateTo(pageName) {
  const target = document.getElementById(`page-${pageName}`);
  if (!target) return;

  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

  // Show target page
  target.classList.add('active');

  // Update sidebar nav active state
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.getAttribute('data-page') === pageName);
  });

  // Update topbar nav active state
  document.querySelectorAll('.topbar-link').forEach(item => {
    item.classList.toggle('active', item.getAttribute('data-page') === pageName);
  });

  // Close mobile sidebar
  closeMobileSidebar();

  // Call render function
  switch (pageName) {
    case 'dashboard':
      renderDashboard();
      break;
    case 'program':
      renderProgramPage();
      break;
    case 'exercises':
      renderExercisesPage();
      break;
    case 'progress':
      renderProgressPage();
      break;
    case 'settings':
      renderSettingsPage();
      break;
  }

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==================== 10. MOBILE NAVIGATION ====================

function closeMobileSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  if (sidebar) sidebar.classList.remove('open');
  if (overlay) overlay.classList.remove('active');
}

function initMobileMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      overlay.classList.toggle('active');
    });
  }

  if (overlay) {
    overlay.addEventListener('click', () => {
      closeMobileSidebar();
    });
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
      closeMobileSidebar();
    }
  });
}

// ==================== 11. NAVIGATION INIT ====================

function initNavigation() {
  // Sidebar nav items
  document.querySelectorAll('.nav-item[data-page]').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo(item.getAttribute('data-page'));
    });
  });

  // Topbar nav items
  document.querySelectorAll('.topbar-link[data-page]').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo(item.getAttribute('data-page'));
    });
  });

  // Section links (e.g., "Lihat semua program")
  document.querySelectorAll('.section-link[data-page]').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo(item.getAttribute('data-page'));
    });
  });
}

// ==================== 12. MODAL HANDLERS ====================

function initModalHandlers() {
  const modalClose = document.getElementById('modalClose');
  const modalOverlay = document.getElementById('modalOverlay');

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
}

// ==================== 13. DASHBOARD RENDERING ====================

function renderDashboard() {
  updateGreeting();
  renderWeeklySchedule();
  renderProgressRing();
  renderTodayWorkout();
  renderProgramCards();
}

function updateGreeting() {
  const name = loadUserName();
  const hour = new Date().getHours();
  let greeting;
  if (hour < 12) greeting = 'Selamat Pagi';
  else if (hour < 17) greeting = 'Selamat Siang';
  else if (hour < 21) greeting = 'Selamat Sore';
  else greeting = 'Selamat Malam';

  const dashGreeting = document.getElementById('dashboardGreeting');
  if (dashGreeting) dashGreeting.textContent = `${greeting}, ${name}`;

  const sidebarGreeting = document.getElementById('sidebarGreeting');
  if (sidebarGreeting) sidebarGreeting.textContent = `${greeting},`;

  const sidebarName = document.getElementById('sidebarName');
  if (sidebarName) sidebarName.textContent = name;
}

function renderWeeklySchedule() {
  const container = document.getElementById('weeklySchedule');
  if (!container) return;

  const progress = loadWeeklyProgress();
  const todayIdx = getTodayDayIndex();

  container.innerHTML = WORKOUT_DATA.map(day => {
    const isToday = day.day === todayIdx;
    const isRest = day.type === 'rest';
    const isCompleted = progress.completed[day.day] === true;

    let statusClass = '';
    let statusIcon = '';
    if (isCompleted) {
      statusClass = 'completed';
      statusIcon = '<i class="fas fa-check"></i>';
    } else if (isRest) {
      statusClass = 'rest';
      statusIcon = '<i class="fas fa-minus"></i>';
    } else {
      statusClass = 'pending';
      statusIcon = '<i class="far fa-circle"></i>';
    }

    return `
      <div class="schedule-item">
        <span class="schedule-day ${isToday ? 'today' : ''}">${day.dayName}</span>
        <span class="schedule-name">${day.name}</span>
        <span class="schedule-status ${statusClass}">${statusIcon}</span>
      </div>
    `;
  }).join('');
}

function renderProgressRing() {
  const progress = loadWeeklyProgress();
  const totalWorkoutDays = 5; // Mon, Tue, Wed, Fri, Sat
  const workoutDayIndices = [0, 1, 2, 4, 5];
  let completedCount = 0;

  workoutDayIndices.forEach(idx => {
    if (progress.completed[idx] === true) {
      completedCount++;
    }
  });

  const percent = totalWorkoutDays > 0 ? Math.round((completedCount / totalWorkoutDays) * 100) : 0;
  const circumference = 2 * Math.PI * 70; // ~439.82

  const ring = document.getElementById('progressRingFill');
  if (ring) {
    ring.style.strokeDasharray = circumference;
    ring.style.strokeDashoffset = circumference - (percent / 100) * circumference;
  }

  const percentEl = document.getElementById('progressPercent');
  if (percentEl) percentEl.textContent = `${percent}%`;

  const labelEl = document.getElementById('progressLabel');
  if (labelEl) labelEl.textContent = `${completedCount} / ${totalWorkoutDays} Selesai`;
}

function renderTodayWorkout() {
  const container = document.getElementById('todayWorkout');
  if (!container) return;

  const todayIdx = getTodayDayIndex();
  const today = WORKOUT_DATA[todayIdx];

  if (today.type === 'rest') {
    container.innerHTML = `
      <div class="today-rest">
        <i class="fas fa-bed today-rest-icon"></i>
        <h4>Hari Istirahat</h4>
        <p>Nikmati istirahatmu! Recovery sama pentingnya dengan latihan.</p>
      </div>
    `;
  } else {
    const progress = loadWeeklyProgress();
    const isCompleted = progress.completed[todayIdx] === true;

    container.innerHTML = `
      <div class="today-workout-info">
        <div class="today-workout-badge" style="background: ${getDayGradient(today.type)}">
          <i class="fas fa-dumbbell"></i>
        </div>
        <div class="today-workout-details">
          <h4 class="today-workout-name">${today.name}</h4>
          <p class="today-workout-muscles"><i class="fas fa-crosshairs"></i> ${today.muscles}</p>
          <p class="today-workout-duration"><i class="fas fa-clock"></i> ~${today.estimatedDuration} menit</p>
        </div>
      </div>
      ${isCompleted
        ? '<div class="today-completed"><i class="fas fa-check-circle"></i> Latihan hari ini sudah selesai!</div>'
        : `<button class="btn btn-primary btn-start-today" id="btnStartToday">
            <i class="fas fa-play"></i> Mulai Latihan
          </button>`
      }
    `;

    if (!isCompleted) {
      const btnStart = document.getElementById('btnStartToday');
      if (btnStart) {
        btnStart.addEventListener('click', () => startWorkout(todayIdx));
      }
    }
  }
}

function renderProgramCards() {
  const container = document.getElementById('programCards');
  if (!container) return;

  container.innerHTML = WORKOUT_DATA
    .filter(day => day.type !== 'rest')
    .map(day => {
      const totalSets = calculateTotalSets(day.exercises);
      return `
        <div class="program-card" data-day="${day.day}">
          <div class="program-card-image" style="background: ${getDayGradient(day.type)}">
            <div class="program-card-overlay">
              <i class="fas fa-dumbbell"></i>
            </div>
          </div>
          <div class="program-card-body">
            <h4 class="program-card-title">${day.name}</h4>
            <p class="program-card-muscles">${day.muscles}</p>
            <span class="program-card-sets">${totalSets} Set</span>
          </div>
        </div>
      `;
    }).join('');

  // Click handlers
  container.querySelectorAll('.program-card').forEach(card => {
    card.addEventListener('click', () => {
      const dayIndex = card.getAttribute('data-day');
      navigateTo('program');
      const dayCard = document.getElementById(`program-day-${dayIndex}`);
      if (dayCard) dayCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

// ==================== 14. PROGRAM PAGE ====================

function renderProgramPage() {
  const container = document.getElementById('programDays');
  if (!container) return;

  const notes = loadNotes();

  container.innerHTML = WORKOUT_DATA.map(day => {
    if (day.type === 'rest') {
      return `
        <div class="program-day-card rest-day-card">
          <div class="program-day-header rest-header" style="background: ${getDayGradient('rest')}">
            <span class="day-badge rest-badge">${day.dayName}</span>
            <div>
              <h3 class="day-name">${day.name}</h3>
              <p class="day-type">Istirahat & Pemulihan</p>
            </div>
          </div>
          <div class="rest-day-content">
            <i class="fas fa-bed"></i>
            <p>Hari istirahat. Gunakan waktu ini untuk recovery.</p>
          </div>
        </div>
      `;
    }

    const savedNote = notes[day.day] || '';
    return `
      <div class="program-day-card" id="program-day-${day.day}">
        <div class="program-day-header" style="background: ${getDayGradient(day.type)}">
          <span class="day-badge">${day.dayName}</span>
          <div>
            <h3 class="day-name">${day.name}</h3>
            <p class="day-type">${day.muscles}</p>
          </div>
          <button class="btn btn-primary btn-start-day" data-day="${day.day}">
            <i class="fas fa-play"></i> Mulai
          </button>
        </div>
        <div class="program-exercise-list">
          ${day.exercises.map((ex, i) => `
            <div class="program-exercise-item" data-exercise="${ex.id}">
              <span class="exercise-number">${i + 1}</span>
              <div class="exercise-info">
                <span class="exercise-name">${ex.name}</span>
                <span class="exercise-target">${ex.targetMuscle}</span>
              </div>
              <span class="exercise-sets">${ex.sets} × ${ex.reps}</span>
            </div>
          `).join('')}
        </div>
        <div class="program-day-notes">
          <textarea class="input note-input" data-day="${day.day}" placeholder="Tambahkan catatan...">${escapeHTML(savedNote)}</textarea>
          <button class="btn btn-secondary btn-save-note" data-day="${day.day}">
            <i class="fas fa-save"></i> Simpan Catatan
          </button>
        </div>
      </div>
    `;
  }).join('');

  // Wire up "Mulai" buttons
  container.querySelectorAll('.btn-start-day').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const dayIdx = parseInt(btn.getAttribute('data-day'));
      startWorkout(dayIdx);
    });
  });

  // Wire up exercise items → exercise detail
  container.querySelectorAll('.program-exercise-item').forEach(item => {
    item.addEventListener('click', () => {
      const exId = item.getAttribute('data-exercise');
      exerciseDetailReturnPage = 'program';
      showExerciseDetail(exId);
    });
  });

  // Wire up note save buttons
  container.querySelectorAll('.btn-save-note').forEach(btn => {
    btn.addEventListener('click', () => {
      const dayIdx = btn.getAttribute('data-day');
      const textarea = container.querySelector(`.note-input[data-day="${dayIdx}"]`);
      if (textarea) {
        saveNote(dayIdx, textarea.value);
        showToast('Catatan disimpan!');
      }
    });
  });
}

// ==================== 15. EXERCISES PAGE ====================

function renderExercisesPage() {
  const container = document.getElementById('exerciseGrid');
  if (!container) return;

  // Collect unique exercises by name
  const seen = new Set();
  const uniqueExercises = [];

  WORKOUT_DATA.forEach(day => {
    day.exercises.forEach(ex => {
      if (!seen.has(ex.name)) {
        seen.add(ex.name);
        uniqueExercises.push(ex);
      }
    });
  });

  container.innerHTML = uniqueExercises.map(ex => `
    <div class="exercise-card" data-muscle="${ex.muscle}" data-exercise-id="${ex.id}">
      <div class="exercise-card-image" style="background: ${getMuscleGradient(ex.muscle)}">
        <img class="exercise-reference-image" src="${getExerciseReference(ex).image}" alt="Contoh gerakan ${ex.name}" loading="lazy">
        <i class="fas ${getMuscleIcon(ex.muscle)}"></i>
      </div>
      <div class="exercise-card-body">
        <h4 class="exercise-card-name">${ex.name}</h4>
        <p class="exercise-card-muscle"><i class="fas fa-crosshairs"></i> ${ex.targetMuscle}</p>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.exercise-reference-image').forEach(image => {
    image.addEventListener('load', () => {
      image.parentElement.classList.add('has-reference-image');
    });
    image.addEventListener('error', () => {
      image.remove();
    });
  });

  // Click handlers for cards
  container.querySelectorAll('.exercise-card').forEach(card => {
    card.addEventListener('click', () => {
      const exId = card.getAttribute('data-exercise-id');
      exerciseDetailReturnPage = 'exercises';
      showExerciseDetail(exId);
    });
  });

  // Setup filter buttons
  initExerciseFilters();
}

function initExerciseFilters() {
  const filterGroup = document.getElementById('filterGroup');
  if (!filterGroup) return;

  filterGroup.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      filterGroup.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      const cards = document.querySelectorAll('#exerciseGrid .exercise-card');

      cards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-muscle') === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// ==================== 16. WORKOUT SESSION ====================

function startWorkout(dayIndex) {
  if (!Number.isInteger(dayIndex) || !WORKOUT_DATA[dayIndex] || WORKOUT_DATA[dayIndex].type === 'rest') {
    showToast('Hari istirahat tidak memiliki sesi latihan.', 'warning');
    return;
  }

  currentWorkoutDay = dayIndex;
  const workout = WORKOUT_DATA[dayIndex];
  navigateTo('workout');
  renderWorkoutSession(workout);
}

function renderWorkoutSession(workout) {
  const titleEl = document.getElementById('workoutTitle');
  const subtitleEl = document.getElementById('workoutSubtitle');
  const container = document.getElementById('workoutExercises');

  if (titleEl) titleEl.textContent = workout.name;
  if (subtitleEl) subtitleEl.textContent = `${workout.dayName} — ${workout.muscles}`;

  if (!container) return;

  const setsData = loadWorkoutSets();
  container.innerHTML = workout.exercises.map((ex, i) => {
    const setRows = [];
    let completedSets = 0;

    for (let s = 1; s <= ex.sets; s++) {
      const setKey = `${ex.id}_${s}`;
      const isCompleted = setsData[setKey] && setsData[setKey].completed;
      const savedWeight = (setsData[setKey] && setsData[setKey].weight) || '';
      if (isCompleted) completedSets++;

      setRows.push(`
        <div class="set-row" data-exercise="${ex.id}" data-set="${s}">
          <div class="set-number ${isCompleted ? 'completed' : ''}">${s}</div>
          <div class="set-info">
            <span class="set-reps">${ex.reps}</span>
          </div>
          <div class="set-weight">
            <input type="number" class="set-weight-input" value="${savedWeight}"
                   placeholder="kg" min="0" step="0.5"
                   data-exercise="${ex.id}" data-set="${s}">
            <span class="weight-unit">kg</span>
          </div>
          <label class="set-checkbox-label">
            <input type="checkbox" class="set-checkbox" ${isCompleted ? 'checked' : ''}
                   data-exercise="${ex.id}" data-set="${s}">
            <span class="checkmark"><i class="fas fa-check"></i></span>
          </label>
        </div>
      `);
    }

    return `
      <div class="workout-exercise-card open">
        <div class="workout-exercise-header" data-toggle="exercise-body-${i}">
          <div>
            <div class="exercise-name">${ex.name}</div>
            <div class="exercise-muscle">${ex.targetMuscle}</div>
          </div>
          <div class="exercise-header-right">
            <span class="exercise-progress-badge" id="badge-${i}">${completedSets}/${ex.sets}</span>
            <i class="fas fa-chevron-down toggle-icon"></i>
          </div>
        </div>
        <div class="workout-exercise-body" id="exercise-body-${i}">
          <div class="exercise-image-small" style="background: ${getMuscleGradient(ex.muscle)}">
            <img class="exercise-reference-image" src="${getExerciseReference(ex).image}" alt="Contoh gerakan ${ex.name}" loading="lazy">
            <i class="fas ${getMuscleIcon(ex.muscle)}"></i>
            <a class="workout-tiktok-link" href="${getExerciseReference(ex).tiktok}" data-tiktok-search="${escapeHTML(`${ex.name} tutorial`)}" rel="noopener noreferrer" aria-label="Lihat tutorial ${ex.name} di TikTok">
              <i class="fab fa-tiktok"></i> Tutorial TikTok
            </a>
          </div>
          ${setRows.join('')}
        </div>
      </div>
    `;
  }).join('');

  container.querySelectorAll('.exercise-reference-image').forEach(image => {
    image.addEventListener('load', () => {
      image.parentElement.classList.add('has-reference-image');
    });
    image.addEventListener('error', () => {
      image.remove();
    });
  });

  // Wire up toggle headers
  container.querySelectorAll('.workout-exercise-header').forEach(header => {
    header.addEventListener('click', () => {
      const targetId = header.getAttribute('data-toggle');
      const body = document.getElementById(targetId);
      if (body) {
        const card = header.closest('.workout-exercise-card');
        if (card) card.classList.toggle('open');
        const icon = header.querySelector('.toggle-icon');
        if (icon) {
          icon.classList.toggle('fa-chevron-down');
          icon.classList.toggle('fa-chevron-up');
        }
      }
    });
  });

  // Wire up checkboxes
  container.querySelectorAll('.set-checkbox').forEach(cb => {
    cb.addEventListener('change', () => {
      const exId = cb.getAttribute('data-exercise');
      const setNum = cb.getAttribute('data-set');
      const setKey = `${exId}_${setNum}`;
      const data = loadWorkoutSets();

      if (!data[setKey]) data[setKey] = {};
      data[setKey].completed = cb.checked;

      // Also save the weight if present
      const row = cb.closest('.set-row');
      const weightInput = row ? row.querySelector('.set-weight-input') : null;
      if (weightInput && weightInput.value) {
        data[setKey].weight = parseFloat(weightInput.value);
        if (cb.checked) {
          saveWeightEntry(exId, parseFloat(weightInput.value));
        }
      }

      saveWorkoutSets(data);

      // Update set-number visual
      const setNumberEl = row ? row.querySelector('.set-number') : null;
      if (setNumberEl) {
        setNumberEl.classList.toggle('completed', cb.checked);
      }

      // Update progress badge for this exercise
      updateExerciseBadge(container, exId);
      // Update overall progress bar
      updateWorkoutProgressBar(workout);
    });
  });

  // Wire up weight inputs
  container.querySelectorAll('.set-weight-input').forEach(input => {
    input.addEventListener('change', () => {
      const exId = input.getAttribute('data-exercise');
      const setNum = input.getAttribute('data-set');
      const setKey = `${exId}_${setNum}`;
      const data = loadWorkoutSets();

      if (!data[setKey]) data[setKey] = {};
      data[setKey].weight = parseFloat(input.value) || 0;
      saveWorkoutSets(data);

      // Save to weight log if set is completed
      if (data[setKey].completed && input.value) {
        saveWeightEntry(exId, parseFloat(input.value));
      }
    });
  });

  // Wire up finish button
  const btnFinish = document.getElementById('btnFinishWorkout');
  if (btnFinish) {
    // Remove old listeners by cloning
    const newBtn = btnFinish.cloneNode(true);
    btnFinish.parentNode.replaceChild(newBtn, btnFinish);

    newBtn.addEventListener('click', () => {
      finishWorkout(workout);
    });
  }

  // Wire up back button
  const btnBack = document.getElementById('btnBackWorkout');
  if (btnBack) {
    const newBack = btnBack.cloneNode(true);
    btnBack.parentNode.replaceChild(newBack, btnBack);

    newBack.addEventListener('click', () => {
      navigateTo('program');
    });
  }

  // Initial progress bar update
  updateWorkoutProgressBar(workout);
}

function updateExerciseBadge(container, exerciseId) {
  // Find the exercise in current workout
  const workout = WORKOUT_DATA[currentWorkoutDay];
  if (!workout) return;

  const exIdx = workout.exercises.findIndex(ex => ex.id === exerciseId);
  if (exIdx < 0) return;

  const ex = workout.exercises[exIdx];
  const data = loadWorkoutSets();
  let completed = 0;
  for (let s = 1; s <= ex.sets; s++) {
    const key = `${ex.id}_${s}`;
    if (data[key] && data[key].completed) completed++;
  }

  const badge = document.getElementById(`badge-${exIdx}`);
  if (badge) {
    badge.textContent = `${completed}/${ex.sets}`;
  }
}

function updateWorkoutProgressBar(workout) {
  const data = loadWorkoutSets();
  let totalSets = 0;
  let completedSets = 0;

  workout.exercises.forEach(ex => {
    totalSets += ex.sets;
    for (let s = 1; s <= ex.sets; s++) {
      const key = `${ex.id}_${s}`;
      if (data[key] && data[key].completed) completedSets++;
    }
  });

  const percent = totalSets > 0 ? Math.round((completedSets / totalSets) * 100) : 0;

  const fill = document.getElementById('workoutProgressFill');
  if (fill) fill.style.width = `${percent}%`;

  const text = document.getElementById('workoutProgressText');
  if (text) text.textContent = `${percent}% selesai`;
}

function finishWorkout(workout) {
  // Count completed sets
  const data = loadWorkoutSets();
  let totalSets = 0;
  let completedSets = 0;

  workout.exercises.forEach(ex => {
    totalSets += ex.sets;
    for (let s = 1; s <= ex.sets; s++) {
      const key = `${ex.id}_${s}`;
      if (data[key] && data[key].completed) completedSets++;
    }
  });

  showModal(
    'Selesaikan Latihan',
    `<p>Selesaikan latihan <strong>${workout.name}</strong>?</p><p>Progress akan disimpan. (${completedSets}/${totalSets} set selesai)</p>`,
    [
      {
        id: 'modal-btn-cancel',
        text: 'Batal',
        class: 'btn-secondary',
        onClick: () => {}
      },
      {
        id: 'modal-btn-confirm',
        text: 'Selesaikan',
        class: 'btn-primary',
        onClick: () => {
          // Mark day as completed
          const progress = loadWeeklyProgress();
          progress.completed[currentWorkoutDay] = true;
          saveWeeklyProgress(progress);

          // Add history entry
          addHistoryEntry({
            date: new Date().toISOString(),
            dayName: workout.dayName,
            workoutName: workout.name,
            exerciseCount: workout.exercises.length,
            completedSets: completedSets,
            totalSets: totalSets
          });

          showToast(`Latihan ${workout.name} selesai! 💪`);
          navigateTo('dashboard');
        }
      }
    ]
  );
}

// ==================== 17. EXERCISE DETAIL ====================

function showExerciseDetail(exerciseId) {
  // Find exercise in all workout days
  let foundExercise = null;
  const appearsInDays = [];

  WORKOUT_DATA.forEach(day => {
    day.exercises.forEach(ex => {
      if (ex.id === exerciseId) {
        foundExercise = ex;
        appearsInDays.push(day);
      }
    });
  });

  if (!foundExercise) return;

  navigateTo('exercise-detail');
  renderExerciseDetail(foundExercise, appearsInDays);
}

function renderExerciseDetail(exercise, appearsInDays) {
  const container = document.getElementById('exerciseDetail');
  if (!container) return;

  const weightLog = loadWeightLog();
  const exerciseWeights = weightLog[exercise.id] || [];
  const lastWeight = exerciseWeights.length > 0 ? exerciseWeights[exerciseWeights.length - 1].weight : null;
  const reference = getExerciseReference(exercise);

  // Weight history HTML
  let weightHistoryHTML = '';
  if (exerciseWeights.length > 0) {
    weightHistoryHTML = exerciseWeights
      .slice()
      .reverse()
      .slice(0, 10)
      .map(entry => `
        <div class="weight-history-entry">
          <span class="weight-history-date">${formatDate(entry.date)}</span>
          <span class="weight-history-value">${entry.weight} kg</span>
        </div>
      `).join('');
  } else {
    weightHistoryHTML = '<p class="empty-message">Belum ada data</p>';
  }

  // Programs HTML
  const programsHTML = appearsInDays.map(day => `
    <div class="detail-program-item">
      <span class="detail-program-day" style="background: ${getDayGradient(day.type)}">${day.dayName}</span>
      <span class="detail-program-name">${day.name}</span>
    </div>
  `).join('');

  container.innerHTML = `
    <div class="exercise-detail-hero" style="background: ${getMuscleGradient(exercise.muscle)}">
      <img class="exercise-reference-image" src="${reference.image}" alt="Contoh gerakan ${exercise.name}">
      <i class="fas ${getMuscleIcon(exercise.muscle)} detail-hero-icon"></i>
    </div>
    <div class="exercise-detail-info">
      <h1 class="detail-title">${exercise.name}</h1>
      <span class="detail-muscle-badge"><i class="fas fa-crosshairs"></i> ${exercise.targetMuscle}</span>
      <div class="detail-stats-grid">
        <div class="detail-stat">
          <div class="detail-stat-value">${exercise.sets}</div>
          <div class="detail-stat-label">Set</div>
        </div>
        <div class="detail-stat">
          <div class="detail-stat-value">${exercise.reps}</div>
          <div class="detail-stat-label">Repetisi</div>
        </div>
        <div class="detail-stat">
          <div class="detail-stat-value">${lastWeight !== null ? lastWeight : '-'} kg</div>
          <div class="detail-stat-label">Beban Terakhir</div>
        </div>
      </div>
      <div class="detail-section">
        <p class="detail-reference">
          <i class="fas fa-info-circle"></i>
          Gunakan gambar ini sebagai referensi visual. <a href="${reference.source}" target="_blank" rel="noopener noreferrer">Lihat sumber dan contoh lainnya</a>.
        </p>
        <a class="btn btn-tiktok" href="${reference.tiktok}" data-tiktok-search="${escapeHTML(`${exercise.name} tutorial`)}" rel="noopener noreferrer">
          <i class="fab fa-tiktok"></i> Lihat tutorial di TikTok
        </a>
      </div>
      <div class="detail-section">
        <h3>Riwayat Beban</h3>
        <div class="detail-weight-history" id="detailWeightHistory">
          ${weightHistoryHTML}
        </div>
      </div>
      <div class="detail-section">
        <h3>Digunakan dalam Program</h3>
        <div class="detail-programs">
          ${programsHTML}
        </div>
      </div>
    </div>
  `;

  const heroImage = container.querySelector('.exercise-detail-hero .exercise-reference-image');
  if (heroImage) {
    heroImage.addEventListener('load', () => {
      heroImage.parentElement.classList.add('has-reference-image');
    });
    heroImage.addEventListener('error', () => heroImage.remove());
  }

  // Back button
  const btnBack = document.getElementById('btnBackExercise');
  if (btnBack) {
    const newBack = btnBack.cloneNode(true);
    btnBack.parentNode.replaceChild(newBack, btnBack);

    newBack.addEventListener('click', () => {
      navigateTo(exerciseDetailReturnPage);
    });
  }
}

// ==================== 18. PROGRESS PAGE ====================

function renderProgressPage() {
  renderProgressStats();
  renderWeeklyChart();
  renderMonthlyChart();
  renderHistory();
  renderWeightLogSection();
}

function renderProgressStats() {
  const history = loadHistory();
  const progress = loadWeeklyProgress();
  const weightLog = loadWeightLog();

  // Total sessions
  const totalSessionsEl = document.getElementById('totalSessions');
  if (totalSessionsEl) totalSessionsEl.textContent = history.length;

  // This week sessions
  const currentWeek = getWeekId();
  const thisWeekCount = history.filter(entry => {
    const entryDate = new Date(entry.date);
    const entryWeek = `${entryDate.getFullYear()}-W${String(getWeekNumber(entryDate)).padStart(2, '0')}`;
    // Adjust year for ISO week
    const d2 = new Date(Date.UTC(entryDate.getFullYear(), entryDate.getMonth(), entryDate.getDate()));
    const dayNum2 = d2.getUTCDay() || 7;
    d2.setUTCDate(d2.getUTCDate() + 4 - dayNum2);
    const isoYear = d2.getUTCFullYear();
    const wn = getWeekNumber(entryDate);
    const ew = `${isoYear}-W${String(wn).padStart(2, '0')}`;
    return ew === currentWeek;
  }).length;

  const thisWeekEl = document.getElementById('thisWeekSessions');
  if (thisWeekEl) thisWeekEl.textContent = thisWeekCount;

  // Completion rate
  const workoutDays = [0, 1, 2, 4, 5];
  let completedCount = 0;
  workoutDays.forEach(idx => {
    if (progress.completed[idx] === true) completedCount++;
  });
  const rate = workoutDays.length > 0 ? Math.round((completedCount / workoutDays.length) * 100) : 0;
  const rateEl = document.getElementById('completionRate');
  if (rateEl) rateEl.textContent = `${rate}%`;

  // Total volume (sum of all weights in weight log)
  let totalVol = 0;
  Object.values(weightLog).forEach(entries => {
    entries.forEach(e => {
      totalVol += (e.weight || 0);
    });
  });
  const volEl = document.getElementById('totalVolume');
  if (volEl) volEl.textContent = `${totalVol} kg`;
}

function renderWeeklyChart() {
  const canvas = document.getElementById('weeklyChart');
  if (!canvas) return;

  // Destroy old chart
  if (weeklyChartInstance) {
    weeklyChartInstance.destroy();
    weeklyChartInstance = null;
  }

  restoreChartCanvas(canvas);
  if (typeof Chart === 'undefined') {
    renderChartUnavailable(canvas);
    return;
  }

  const progress = loadWeeklyProgress();
  const dayLabels = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];
  const dataValues = [0, 1, 2, 3, 4, 5, 6].map(i => {
    if (WORKOUT_DATA[i].type === 'rest') return 0;
    return progress.completed[i] ? 1 : 0;
  });

  Chart.defaults.color = '#9CA3AF';
  Chart.defaults.borderColor = '#1E2530';

  weeklyChartInstance = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: dayLabels,
      datasets: [{
        label: 'Latihan Selesai',
        data: dataValues,
        backgroundColor: 'rgba(34, 197, 94, 0.7)',
        borderColor: '#22C55E',
        borderWidth: 1,
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 1,
          ticks: {
            stepSize: 1,
            callback: (val) => val === 1 ? 'Selesai' : 'Belum'
          },
          grid: { color: 'rgba(255,255,255,0.05)' }
        },
        x: {
          grid: { display: false }
        }
      }
    }
  });
}

function renderMonthlyChart() {
  const canvas = document.getElementById('monthlyChart');
  if (!canvas) return;

  if (monthlyChartInstance) {
    monthlyChartInstance.destroy();
    monthlyChartInstance = null;
  }

  restoreChartCanvas(canvas);
  if (typeof Chart === 'undefined') {
    renderChartUnavailable(canvas);
    return;
  }

  const history = loadHistory();

  // Get last 4 weeks
  const weekLabels = [];
  const weekCounts = [];
  const now = new Date();

  for (let w = 3; w >= 0; w--) {
    const d = new Date(now);
    d.setDate(d.getDate() - (w * 7));
    const d2 = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    const dayNum = d2.getUTCDay() || 7;
    d2.setUTCDate(d2.getUTCDate() + 4 - dayNum);
    const isoYear = d2.getUTCFullYear();
    const wn = getWeekNumber(d);
    const weekId = `${isoYear}-W${String(wn).padStart(2, '0')}`;
    weekLabels.push(`Minggu ${4 - w}`);

    // Count sessions in this week
    const count = history.filter(entry => {
      const eDate = new Date(entry.date);
      const ed = new Date(Date.UTC(eDate.getFullYear(), eDate.getMonth(), eDate.getDate()));
      const eDayNum = ed.getUTCDay() || 7;
      ed.setUTCDate(ed.getUTCDate() + 4 - eDayNum);
      const eYear = ed.getUTCFullYear();
      const eWn = getWeekNumber(eDate);
      const eWeekId = `${eYear}-W${String(eWn).padStart(2, '0')}`;
      return eWeekId === weekId;
    }).length;

    weekCounts.push(count);
  }

  monthlyChartInstance = new Chart(canvas, {
    type: 'line',
    data: {
      labels: weekLabels,
      datasets: [{
        label: 'Sesi Latihan',
        data: weekCounts,
        borderColor: '#22C55E',
        backgroundColor: 'rgba(34, 197, 94, 0.15)',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#22C55E',
        pointBorderColor: '#22C55E',
        pointRadius: 5
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: { stepSize: 1 },
          grid: { color: 'rgba(255,255,255,0.05)' }
        },
        x: {
          grid: { display: false }
        }
      }
    }
  });
}

function renderChartUnavailable(canvas) {
  const container = canvas.closest('.chart-container');
  if (!container) return;
  canvas.style.display = 'none';
  if (!container.querySelector('.chart-unavailable')) {
    const message = document.createElement('p');
    message.className = 'empty-message chart-unavailable';
    message.textContent = 'Grafik tidak tersedia saat ini. Muat ulang halaman atau periksa koneksi internet.';
    container.appendChild(message);
  }
}

function restoreChartCanvas(canvas) {
  const container = canvas.closest('.chart-container');
  if (!container) return;
  const message = container.querySelector('.chart-unavailable');
  if (message) message.remove();
  canvas.style.display = '';
}

function renderHistory() {
  const historyList = document.getElementById('historyList');
  const emptyHistory = document.getElementById('emptyHistory');
  if (!historyList || !emptyHistory) return;

  const history = loadHistory();

  if (history.length === 0) {
    historyList.style.display = 'none';
    emptyHistory.style.display = '';
    return;
  }

  emptyHistory.style.display = 'none';
  historyList.style.display = '';

  historyList.innerHTML = history.slice(0, 20).map(entry => `
    <div class="history-item">
      <div class="history-left">
        <div class="history-icon"><i class="fas fa-dumbbell"></i></div>
        <div>
          <div class="history-workout">${entry.workoutName}</div>
          <div class="history-date">${formatDate(entry.date)}</div>
        </div>
      </div>
      <div class="history-right">
        <span class="history-badge">${entry.completedSets}/${entry.totalSets} set</span>
      </div>
    </div>
  `).join('');
}

function renderWeightLogSection() {
  const weightLogEl = document.getElementById('weightLog');
  const emptyWeightLog = document.getElementById('emptyWeightLog');
  if (!weightLogEl || !emptyWeightLog) return;

  const weightLog = loadWeightLog();
  const entries = Object.entries(weightLog).filter(([, arr]) => arr.length > 0);

  if (entries.length === 0) {
    weightLogEl.style.display = 'none';
    emptyWeightLog.style.display = '';
    return;
  }

  emptyWeightLog.style.display = 'none';
  weightLogEl.style.display = '';

  // Find exercise names by ID
  const exerciseNameMap = {};
  WORKOUT_DATA.forEach(day => {
    day.exercises.forEach(ex => {
      exerciseNameMap[ex.id] = ex.name;
    });
  });

  weightLogEl.innerHTML = entries.map(([exId, logs]) => {
    const latest = logs[logs.length - 1];
    const name = exerciseNameMap[exId] || exId;
    return `
      <div class="weight-log-item">
        <div class="weight-log-exercise">${name}</div>
        <div class="weight-log-latest">${latest.weight} kg</div>
        <div class="weight-log-date">${formatDate(latest.date)}</div>
      </div>
    `;
  }).join('');
}

// ==================== 19. SETTINGS ====================

function renderSettingsPage() {
  const nameInput = document.getElementById('settingName');
  if (nameInput) {
    nameInput.value = loadUserName();
  }
}

function initSettingsHandlers() {
  // Save name
  const btnSave = document.getElementById('btnSaveName');
  if (btnSave) {
    btnSave.addEventListener('click', () => {
      const nameInput = document.getElementById('settingName');
      if (nameInput && nameInput.value.trim()) {
        saveUserName(nameInput.value.trim());
        updateGreeting();
        showToast('Nama berhasil disimpan!');
      }
    });
  }

  // Reset weekly progress
  const btnResetProgress = document.getElementById('btnResetProgress');
  if (btnResetProgress) {
    btnResetProgress.addEventListener('click', () => {
      showModal(
        'Reset Progress Mingguan',
        '<p>Apakah kamu yakin ingin mereset progress latihan minggu ini? Data yang dihapus tidak dapat dikembalikan.</p>',
        [
          {
            id: 'modal-cancel-reset',
            text: 'Batal',
            class: 'btn-secondary',
            onClick: () => {}
          },
          {
            id: 'modal-confirm-reset',
            text: 'Reset',
            class: 'btn-danger',
            onClick: () => {
              resetWeeklyProgress();
              showToast('Progress mingguan direset!');
              renderDashboard();
            }
          }
        ]
      );
    });
  }

  // Reset all data
  const btnResetAll = document.getElementById('btnResetAll');
  if (btnResetAll) {
    btnResetAll.addEventListener('click', () => {
      showModal(
        'Reset Semua Data',
        '<p><strong>⚠️ Peringatan:</strong> Semua data termasuk riwayat latihan, catatan beban, dan pengaturan akan dihapus secara permanen. Tindakan ini tidak dapat dibatalkan.</p>',
        [
          {
            id: 'modal-cancel-resetall',
            text: 'Batal',
            class: 'btn-secondary',
            onClick: () => {}
          },
          {
            id: 'modal-confirm-resetall',
            text: 'Hapus Semua',
            class: 'btn-danger',
            onClick: () => {
              resetAllData();
              showToast('Semua data telah dihapus!');
              setTimeout(() => location.reload(), 500);
            }
          }
        ]
      );
    });
  }
}

// ==================== 20. INITIALIZATION ====================

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', openTikTokApp);
  initNavigation();
  initMobileMenu();
  initModalHandlers();
  initSettingsHandlers();
  renderDashboard();
});
