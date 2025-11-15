// ==================== ЛОКАЛИЗАЦИЯ ====================
const translations = {
  ru: {
    // Меню
    start_game: "Начать игру",
    highscores: "Рекорды",
    rules: "Правила",
    rewarded_ad_text: "+1 жизнь (реклама)",
    game_description_1: "Редактируй видео как профессионал!",
    game_description_2: "Собирай нужные правки, режь лишние",
    ad_banner: "Рекламный баннер",
    
    // Правила
    rules_title: "Правила игры",
    rule1_title: "Собирай нужные правки",
    rule1_text: "Тапай на зеленые правки с нужным эмодзи",
    rule2_title: "Режь плохие правки",
    rule2_text: "Проводи пальцем по красным правкам",
    rule3_title: "Избегай ошибок",
    rule3_text: "Не режь нужные зеленые правки - потеряешь пазл",
    rule4_title: "Следи за жизнями",
    rule4_text: "Пропустишь 7 плохих правок - потеряешь жизнь",
    rule5_title: "Время ограничено",
    rule5_text: "Собери все пазлы до окончания таймера",
    rule6_title: "Прокачивайся",
    rule6_text: "5 уровней сложности ждут тебя!",
    understand: "Понятно!",
    
    // Игра
    start: "Старт",
    pause: "Пауза",
    to_menu: "В меню",
    score: "Очки",
    level: "Ур",
    missed: "Пропущено",
    wrong_cuts: "Не те правки",
    current_project: "Текущий проект",
    need_to_collect: "Нужно собрать",
    progress: "Прогресс",
    
    // Экраны
    game_over: "ПОТРАЧЕНО",
    restart: "Начать заново",
    paused: "ПАУЗА",
    resume: "Продолжить",
    level_complete: "Уровень",
    completed: "завершен!",
    next_level: "Следующий уровень",
    highscores_table: "Таблица рекордов",
    close: "Закрыть",
    
    // Сообщения уровней
    level1_message: "Отличный старт! Ты освоил базовые инструменты монтажа.",
    level2_message: "Великолепно! Твои навыки цветокоррекции на высоте.",
    level3_message: "Потрясающе! Ты виртуоз VFX и анимации.",
    level4_message: "Невероятно! Ты достиг уровня Senior Video Editor.",
    level5_message: "Легенда! Ты - гуру видео продакшена!"
  },
  en: {
    // Menu
    start_game: "Start Game",
    highscores: "Highscores",
    rules: "Rules",
    rewarded_ad_text: "+1 Life (Watch Ad)",
    game_description_1: "Edit videos like a pro!",
    game_description_2: "Collect needed edits, cut the bad ones",
    ad_banner: "Ad Banner",
    
    // Rules
    rules_title: "Game Rules",
    rule1_title: "Collect Needed Edits",
    rule1_text: "Tap on green edits with the right emoji",
    rule2_title: "Cut Bad Edits",
    rule2_text: "Swipe through red edits",
    rule3_title: "Avoid Mistakes",
    rule3_text: "Don't cut needed green edits - you'll lose puzzle pieces",
    rule4_title: "Watch Your Lives",
    rule4_text: "Miss 7 bad edits - lose a life",
    rule5_title: "Time is Limited",
    rule5_text: "Collect all puzzles before time runs out",
    rule6_title: "Level Up",
    rule6_text: "5 difficulty levels await you!",
    understand: "Got it!",
    
    // Game
    start: "Start",
    pause: "Pause",
    to_menu: "To Menu",
    score: "Score",
    level: "Lvl",
    missed: "Missed",
    wrong_cuts: "Wrong cuts",
    current_project: "Current Project",
    need_to_collect: "Need to collect",
    progress: "Progress",
    
    // Screens
    game_over: "GAME OVER",
    restart: "Start Over",
    paused: "PAUSED",
    resume: "Resume",
    level_complete: "Level",
    completed: "completed!",
    next_level: "Next Level",
    highscores_table: "Leaderboard",
    close: "Close",
    
    // Level messages
    level1_message: "Great start! You've mastered basic editing tools.",
    level2_message: "Excellent! Your color grading skills are top-notch.",
    level3_message: "Amazing! You're a VFX and animation virtuoso.",
    level4_message: "Incredible! You've reached Senior Video Editor level.",
    level5_message: "Legendary! You're a video production guru!"
  }
};

let currentLanguage = 'ru';

// Функция установки языка
function setLanguage(lang) {
  currentLanguage = lang;
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
}

// Эмодзи для пазлов и правок
const puzzleEmojis = ['🎬', '📹', '🎞️', '⚡', '✨', '🎭', '🌟', '💫', '🎪', '🎨'];

// Пул правок с привязанными эмодзи
const feedbackPool = [
  // Хорошие правки с эмодзи
  { text: "Добавь мягкое освещение", type: "good", emoji: "🎬" },
  { text: "Сделай тень под объект", type: "good", emoji: "📹" },
  { text: "Добавь glow на текст", type: "good", emoji: "🎞️" },
  { text: "Исправь цвет кожи", type: "good", emoji: "⚡" },
  { text: "Убери шум на видео", type: "good", emoji: "✨" },
  { text: "Сделай вау-эффект", type: "good", emoji: "🎭" },
  { text: "Добавь частицы", type: "good", emoji: "🌟" },
  { text: "Улучши композицию", type: "good", emoji: "💫" },
  { text: "Добавь глубину резкости", type: "good", emoji: "🎪" },
  { text: "Скорректируй баланс белого", type: "good", emoji: "🎨" },
  { text: "Улучши контраст", type: "good", emoji: "🎬" },
  { text: "Добавь кинематографичный вид", type: "good", emoji: "📹" },
  { text: "Сделай плавные переходы", type: "good", emoji: "🎞️" },
  { text: "Улучши синхронизацию звука", type: "good", emoji: "⚡" },
  { text: "Добавь атмосферные эффекты", type: "good", emoji: "✨" },
  
  // Плохие правки (без эмодзи)
  { text: "Сделай логотип побольше!", type: "bad" },
  { text: "Переделай всё в 3D!", type: "bad" },
  { text: "Можно быстрее?", type: "bad" },
  { text: "Сделай как в примере (нет примера)", type: "bad" },
  { text: "Добавь больше бликов!", type: "bad" },
  { text: "Измени всю концепцию", type: "bad" },
  { text: "Перерисуй с нуля", type: "bad" },
  { text: "Сделай покруче!", type: "bad" },
  { text: "Убери всё и начни заново", type: "bad" },
  { text: "Это не то, что я хотел", type: "bad" }
];

const levelConfig = {
  1: { 
    pieces: 5, 
    speed: 800, 
    message: "level1_message",
    maxMissed: 7,
    time: 60,
    gridColumns: 2
  },
  2: { 
    pieces: 8, 
    speed: 700, 
    message: "level2_message",
    maxMissed: 6,
    time: 75,
    gridColumns: 3
  },
  3: { 
    pieces: 12, 
    speed: 600, 
    message: "level3_message",
    maxMissed: 5,
    time: 90,
    gridColumns: 4
  },
  4: { 
    pieces: 16, 
    speed: 500, 
    message: "level4_message",
    maxMissed: 4,
    time: 105,
    gridColumns: 4
  },
  5: { 
    pieces: 20, 
    speed: 400, 
    message: "level5_message",
    maxMissed: 3,
    time: 120,
    gridColumns: 5
  }
};

// Элементы интерфейса
const mainMenu = document.getElementById("main-menu");
const gameInterface = document.getElementById("game-interface");
const rulesScreen = document.getElementById("rules-screen");
const menuStartBtn = document.getElementById("menu-start-btn");
const menuHighscoresBtn = document.getElementById("menu-highscores-btn");
const menuRulesBtn = document.getElementById("menu-rules-btn");
const closeRulesBtn = document.getElementById("close-rules");
const menuFromGameoverBtn = document.getElementById("menu-from-gameover");
const rewardedAdBtn = document.getElementById("rewarded-ad-btn");
const gameRewardedAdBtn = document.getElementById("game-rewarded-ad-btn");
const gameoverRewardedAdBtn = document.getElementById("gameover-rewarded-ad-btn");

const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");
const pauseBtn = document.getElementById("pause-btn");
const endBtn = document.getElementById("end-btn");
const resumeBtn = document.getElementById("resume-btn");
const quitBtn = document.getElementById("quit-btn");
const nextLevelBtn = document.getElementById("next-level-btn");
const highscoresBtn = document.getElementById("highscores-btn");
const closeHighscoresBtn = document.getElementById("close-highscores");
const targetEmojiDisplay = document.getElementById("target-emoji");

const gameArea = document.getElementById("game-area");
const scoreDisplay = document.getElementById("score");
const levelDisplay = document.getElementById("level");
const timerDisplay = document.getElementById("timer");
const livesDisplay = document.getElementById("lives");
const missedCounterDisplay = document.getElementById("missed-counter");
const wrongCutsCounterDisplay = document.getElementById("wrong-cuts-counter");
const puzzleGrid = document.getElementById("puzzle-grid");
const puzzleProgress = document.getElementById("puzzle-progress");

// Экраны
const gameOverScreen = document.getElementById("game-over");
const pauseScreen = document.getElementById("pause-screen");
const levelCompleteScreen = document.getElementById("level-complete");
const highscoresScreen = document.getElementById("highscores-screen");

// Элементы для отображения информации
const finalLevelDisplay = document.getElementById("final-level");
const finalScoreDisplay = document.getElementById("final-score");
const completedLevelDisplay = document.getElementById("completed-level");
const levelMessageDisplay = document.getElementById("level-message");
const highscoresList = document.getElementById("highscores-list");

// Аудио элементы
const backgroundMusic = document.getElementById("background-music");
const tickSound = document.getElementById("tick-sound");
const heartbeatSound = document.getElementById("heartbeat-sound");
const collectSound = document.getElementById("collect-sound");
const wrongSound = document.getElementById("wrong-sound");
const cutSound = document.getElementById("cut-sound");
const levelCompleteSound = document.getElementById("level-complete-sound");
const gameOverSound = document.getElementById("game-over-sound");

// Игровые переменные
let score = 0;
let gameRunning = false;
let gamePaused = false;
let spawnInterval;
let forcedSpawnInterval;
let isSwiping = false;
let swipeStartPoint = null;
let swipeLine = null;
let trailPoints = [];
let timerInterval;
let timeLeft;

// Система игры
let currentLevel = 1;
let collectedPieces = 0;
let missedBadFeedbacks = 0;
let consecutiveMissed = 0;
let lives = 2;
let maxLives = 3;

// Система штрафов за неправильные разрезы
let wrongGreenCuts = 0;
const MAX_WRONG_GREEN_CUTS = 4;

// Система рекордов
let highscores = JSON.parse(localStorage.getItem('cutFeedbackHighscores')) || [];

// Система пазлов с эмодзи
let currentLevelEmojis = [];
let currentTargetIndex = 0;

// Комбо-система
let combo = 0;
let comboMultiplier = 1;
let comboTimeout = null;

// Настройки звука
let soundEnabled = true;
let musicEnabled = true;
let heartbeatPlaying = false;

// Web Audio API
let audioContext = null;
let gainNode = null;
let soundBuffers = new Map();

// Yandex Games SDK
let yandexSDK = null;
let isYandexPlatform = false;

// ==================== WEB AUDIO API ====================

async function initAudio() {
  try {
    // Создаем AudioContext
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    gainNode = audioContext.createGain();
    gainNode.connect(audioContext.destination);
    
    // Загружаем звуки
    await loadAllSounds();
    
    console.log('Web Audio API initialized successfully');
  } catch (error) {
    console.log('Web Audio API not available, using fallback:', error);
    audioContext = null;
  }
}

async function loadAllSounds() {
  if (!audioContext) return;
  
  const soundFiles = {
    background: 'sounds/background-music.mp3',
    tick: 'sounds/tick.wav',
    heartbeat: 'sounds/heartbeat.wav',
    collect: 'sounds/collect.wav',
    wrong: 'sounds/wrong.wav',
    cut: 'sounds/cut.wav',
    levelComplete: 'sounds/level-complete.wav',
    gameOver: 'sounds/game-over.wav'
  };
  
  for (const [name, url] of Object.entries(soundFiles)) {
    try {
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();
      const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
      soundBuffers.set(name, audioBuffer);
    } catch (error) {
      console.log(`Failed to load sound ${name}:`, error);
    }
  }
}

function playWebSound(soundName, volume = 1.0, loop = false) {
  if (!audioContext || !soundEnabled || !soundBuffers.has(soundName)) {
    return null;
  }
  
  try {
    const source = audioContext.createBufferSource();
    const soundGain = audioContext.createGain();
    
    source.buffer = soundBuffers.get(soundName);
    source.loop = loop;
    
    soundGain.gain.value = volume;
    
    source.connect(soundGain);
    soundGain.connect(gainNode);
    
    source.start();
    
    if (!loop) {
      source.onended = () => {
        source.disconnect();
        soundGain.disconnect();
      };
    }
    
    return source;
  } catch (error) {
    console.log('Web Audio play error:', error);
    return null;
  }
}

function stopWebSound(source) {
  if (source) {
    try {
      source.stop();
      source.disconnect();
    } catch (error) {
      console.log('Web Audio stop error:', error);
    }
  }
}

// ==================== УПРАВЛЕНИЕ ВИДИМОСТЬЮ СТРАНИЦЫ ====================

function setupPageVisibilityHandlers() {
  // Обработчики для паузы при скрытии страницы
  document.addEventListener('visibilitychange', handleVisibilityChange);
  window.addEventListener('blur', handleWindowBlur);
  window.addEventListener('focus', handleWindowFocus);
  
  // Обработчики для полноэкранного режима
  document.addEventListener('fullscreenchange', handleFullscreenChange);
  document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
}

function handleVisibilityChange() {
  if (document.hidden) {
    pauseAudio();
    if (gameRunning && !gamePaused) {
      pauseGame();
    }
  } else {
    resumeAudio();
  }
}

function handleWindowBlur() {
  pauseAudio();
  if (gameRunning && !gamePaused) {
    pauseGame();
  }
}

function handleWindowFocus() {
  resumeAudio();
}

function handleFullscreenChange() {
  // Перерасчет размеров при изменении полноэкранного режима
  setTimeout(adjustLayout, 100);
}

function pauseAudio() {
  if (audioContext) {
    audioContext.suspend().catch(console.error);
  }
  // Останавливаем HTML5 audio
  document.querySelectorAll('audio').forEach(audio => {
    audio.pause();
  });
}

function resumeAudio() {
  if (audioContext && soundEnabled) {
    audioContext.resume().catch(console.error);
  }
}

// ==================== ПРЕДОТВРАЩЕНИЕ ВЫДЕЛЕНИЯ И КОНТЕКСТНОГО МЕНЮ ====================

function preventSelectionAndContextMenu() {
  // Предотвращаем выделение текста
  document.addEventListener('selectstart', (e) => {
    e.preventDefault();
    return false;
  });
  
  // Предотвращаем контекстное меню
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
  });
  
  // Предотвращаем перетаскивание
  document.addEventListener('dragstart', (e) => {
    e.preventDefault();
    return false;
  });
  
  // CSS для предотвращения выделения
  document.body.style.userSelect = 'none';
  document.body.style.webkitUserSelect = 'none';
  document.body.style.mozUserSelect = 'none';
  document.body.style.msUserSelect = 'none';
  
  document.body.style.webkitTouchCallout = 'none';
  document.body.style.webkitTapHighlightColor = 'transparent';
}

// ==================== АДАПТИВНАЯ ВЕРСТКА ====================

function adjustLayout() {
  const gameArea = document.getElementById('game-area');
  const leftPanel = document.querySelector('.left-panel');
  const gameInterface = document.getElementById('game-interface');
  
  if (!gameArea || !leftPanel) return;
  
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  
  // Для мобильных устройств
  if (windowWidth <= 768) {
    leftPanel.style.height = '35vh';
    gameArea.style.height = '65vh';
    gameArea.style.width = '100%';
  } else {
    // Для десктопов
    leftPanel.style.width = '280px';
    gameArea.style.width = 'calc(100% - 280px)';
    gameArea.style.height = '100vh';
  }
  
  // Предотвращаем появление скролла
  document.body.style.overflow = 'hidden';
  document.documentElement.style.overflow = 'hidden';
}

// ==================== YANDEX SDK ИНТЕГРАЦИЯ ====================

// Инициализация Yandex Games SDK
function initYandexSDK() {
  if (typeof YaGames !== 'undefined') {
    YaGames.init().then(ysdk => {
      yandexSDK = ysdk;
      isYandexPlatform = true;
      console.log('Yandex SDK initialized');
      
      // Автоматическое определение языка
      const language = ysdk.environment.i18n.lang || 'ru';
      setLanguage(language);
      
      // Game Ready API
      ysdk.gameReady();
      
      // Инициализация рекламы
      initAds();
      
      // Инициализация лидербордов
      initLeaderboard();
      
    }).catch(error => {
      console.log('Yandex SDK init error:', error);
      isYandexPlatform = false;
      setLanguage('ru');
    });
  } else {
    console.log('Yandex SDK not available');
    isYandexPlatform = false;
    setLanguage('ru');
  }
}

// Инициализация рекламы
function initAds() {
  if (!isYandexPlatform) return;
  
  // Баннерная реклама
  try {
    yandexSDK.adv.showBannerAdv({
      blockId: 'R-A-XXXXXX-XX', // Замените на реальный ID блока
      type: 'adaptive',
      platform: 'mobile'
    });
  } catch (error) {
    console.log('Banner ad error:', error);
  }
}

// Показать rewarded рекламу
function showRewardedAd(onRewardedCallback) {
  if (!isYandexPlatform) {
    // Для локального тестирования
    onRewardedCallback();
    return;
  }
  
  try {
    // Ставим звук на паузу перед показом рекламы
    pauseAudio();
    gamePaused = true;
    
    yandexSDK.adv.showRewardedVideo({
      callbacks: {
        onOpen: () => {
          console.log('Rewarded ad opened');
          pauseAudio();
          gamePaused = true;
        },
        onClose: () => {
          console.log('Rewarded ad closed');
          resumeAudio();
          gamePaused = false;
        },
        onError: (error) => {
          console.log('Rewarded ad error:', error);
          resumeAudio();
          gamePaused = false;
          showNotification('Ошибка загрузки рекламы');
        },
        onRewarded: () => {
          console.log('Rewarded ad completed');
          onRewardedCallback();
        }
      }
    });
  } catch (error) {
    console.log('Rewarded ad error:', error);
    showNotification('Реклама временно недоступна');
    resumeAudio();
    gamePaused = false;
  }
}

// Добавление дополнительной жизни
function addExtraLife() {
  if (lives < maxLives) {
    lives++;
    updateLivesDisplay();
    showNotification('+1 жизнь получена! 🎁');
    playSound(collectSound);
    
    // Если мы в game over, продолжаем игру
    if (gameOverScreen && !gameOverScreen.classList.contains('hidden')) {
      gameOverScreen.classList.add('hidden');
      startGame();
    }
  } else {
    showNotification('У вас максимальное количество жизней! ❤️');
  }
}

// Показать уведомление
function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    if (notification.parentNode) {
      notification.parentNode.removeChild(notification);
    }
  }, 3000);
}

// Инициализация лидербордов
function initLeaderboard() {
  if (!isYandexPlatform) return;
  
  try {
    yandexSDK.getLeaderboards().then(leaderboards => {
      console.log('Leaderboards initialized');
    });
  } catch (error) {
    console.log('Leaderboards error:', error);
  }
}

// Сохранение результата в лидерборд
function saveToLeaderboard(scoreValue) {
  if (!isYandexPlatform) return;
  
  try {
    yandexSDK.getLeaderboards().then(leaderboards => {
      leaderboards.setLeaderboardScore('cut_feedback_leaderboard', scoreValue, {
        // Дополнительные данные
      });
    });
  } catch (error) {
    console.log('Save to leaderboard error:', error);
  }
}

// Показать лидерборд
function showYandexLeaderboard() {
  if (!isYandexPlatform) {
    showHighscores();
    return;
  }
  
  try {
    yandexSDK.getLeaderboards().then(leaderboards => {
      leaderboards.getLeaderboardEntries('cut_feedback_leaderboard', {
        quantityTop: 10,
        quantityAround: 5,
        includeUser: true
      }).then(entries => {
        displayYandexLeaderboard(entries);
      });
    });
  } catch (error) {
    console.log('Show leaderboard error:', error);
    showHighscores();
  }
}

// Отображение лидерборда Yandex
function displayYandexLeaderboard(entries) {
  highscoresList.innerHTML = '';
  
  if (!entries || entries.entries.length === 0) {
    highscoresList.innerHTML = '<div class="highscore-item" style="justify-content: center;">Пока нет рекордов</div>';
    return;
  }
  
  entries.entries.forEach((entry, index) => {
    const item = document.createElement('div');
    item.className = 'highscore-item';
    
    item.innerHTML = `
      <div class="highscore-position">${index + 1}</div>
      <div class="highscore-name">${entry.player.publicName || 'Игрок'}</div>
      <div class="highscore-score">${entry.score}</div>
      <div class="highscore-level">${Math.floor(entry.score / 100) + 1}</div>
    `;
    
    highscoresList.appendChild(item);
  });
}

// ==================== ОСНОВНОЙ КОД ИГРЫ ====================

// Инициализация звуков
function initSounds() {
  // Устанавливаем базовые настройки звуков для fallback
  backgroundMusic.volume = 0.3;
  tickSound.volume = 0.3;
  heartbeatSound.volume = 0.4;
  collectSound.volume = 0.6;
  wrongSound.volume = 0.5;
  cutSound.volume = 0.4;
  levelCompleteSound.volume = 0.7;
  gameOverSound.volume = 0.6;
  
  // Зацикливаем звуки
  heartbeatSound.loop = true;
  backgroundMusic.loop = true;
  
  // Предзагружаем звуки
  const sounds = [backgroundMusic, tickSound, heartbeatSound, collectSound, wrongSound, cutSound, levelCompleteSound, gameOverSound];
  sounds.forEach(sound => {
    sound.load();
  });
}

// Функции управления звуком
function playSound(soundElement) {
  if (!soundEnabled) return;
  
  // Пробуем Web Audio API сначала
  const soundMap = {
    'background-music': 'background',
    'tick-sound': 'tick',
    'heartbeat-sound': 'heartbeat',
    'collect-sound': 'collect',
    'wrong-sound': 'wrong',
    'cut-sound': 'cut',
    'level-complete-sound': 'levelComplete',
    'game-over-sound': 'gameOver'
  };
  
  const soundId = soundElement.id;
  if (soundMap[soundId]) {
    const webSound = playWebSound(soundMap[soundId], 0.3, soundElement.loop);
    if (webSound) return webSound;
  }
  
  // Fallback на HTML5 Audio
  try {
    soundElement.currentTime = 0;
    const playPromise = soundElement.play();
    
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.log('Audio play error:', error);
      });
    }
  } catch (error) {
    console.log('Audio play exception:', error);
  }
  
  return null;
}

function stopSound(soundElement) {
  soundElement.pause();
  soundElement.currentTime = 0;
}

function toggleSound() {
  soundEnabled = !soundEnabled;
  const soundIcon = document.getElementById('sound-toggle');
  if (soundIcon) {
    soundIcon.textContent = soundEnabled ? '🔊' : '🔇';
  }
  
  if (!soundEnabled) {
    stopSound(tickSound);
    stopSound(heartbeatSound);
    heartbeatPlaying = false;
    
    if (audioContext) {
      gainNode.gain.value = 0;
    }
  } else {
    if (audioContext) {
      gainNode.gain.value = 1;
    }
  }
}

function toggleMusic() {
  musicEnabled = !musicEnabled;
  const musicIcon = document.getElementById('music-toggle');
  if (musicIcon) {
    musicIcon.textContent = musicEnabled ? '🎵' : '🎵❌';
  }
  
  if (musicEnabled) {
    backgroundMusic.volume = 0.3;
    if (gameRunning || mainMenu.classList.contains('hidden')) {
      backgroundMusic.play().catch(e => console.log('Music play error:', e));
    }
  } else {
    backgroundMusic.pause();
  }
}

// Комбо-система
function addCombo() {
  combo++;
  
  if (combo >= 3) {
    comboMultiplier = Math.min(5, Math.floor(combo / 3) + 1);
    showComboEffect();
  }
  
  updateComboDisplay();
  
  if (comboTimeout) clearTimeout(comboTimeout);
  comboTimeout = setTimeout(() => {
    combo = 0;
    comboMultiplier = 1;
    updateComboDisplay();
  }, 5000);
}

function resetCombo() {
  combo = 0;
  comboMultiplier = 1;
  updateComboDisplay();
}

function showComboEffect() {
  const comboDisplay = document.createElement('div');
  comboDisplay.className = 'combo-display';
  comboDisplay.textContent = `COMBO x${comboMultiplier}!`;
  document.body.appendChild(comboDisplay);
  
  setTimeout(() => {
    if (comboDisplay.parentNode) {
      comboDisplay.parentNode.removeChild(comboDisplay);
    }
  }, 1000);
}

function updateComboDisplay() {
  let comboIndicator = document.getElementById('combo-indicator');
  
  if (combo >= 3) {
    if (!comboIndicator) {
      comboIndicator = document.createElement('div');
      comboIndicator.id = 'combo-indicator';
      comboIndicator.className = 'combo-indicator';
      document.body.appendChild(comboIndicator);
    }
    comboIndicator.textContent = `COMBO x${comboMultiplier}`;
    comboIndicator.style.display = 'block';
  } else if (comboIndicator) {
    comboIndicator.style.display = 'none';
  }
}

// Обновление счетчика неправильных разрезов
function updateWrongCutsCounter() {
  const text = translations[currentLanguage].wrong_cuts || "Не те правки";
  wrongCutsCounterDisplay.textContent = `❌ ${text}: ${wrongGreenCuts}/${MAX_WRONG_GREEN_CUTS}`;
  
  if (wrongGreenCuts > 0) {
    wrongCutsCounterDisplay.style.display = 'block';
  } else {
    wrongCutsCounterDisplay.style.display = 'none';
  }
}

// Создаем элемент для линии свайпа
function createSwipeLine() {
  const line = document.createElement('div');
  line.className = 'swipe-line';
  line.style.display = 'none';
  gameArea.appendChild(line);
  return line;
}

// Инициализация пазла для уровня
function initializePuzzle() {
  puzzleGrid.innerHTML = '';
  collectedPieces = 0;
  currentTargetIndex = 0;
  wrongGreenCuts = 0;
  updateWrongCutsCounter();
  
  const totalPieces = levelConfig[currentLevel].pieces;
  
  puzzleGrid.className = 'puzzle-grid-' + levelConfig[currentLevel].gridColumns;
  
  currentLevelEmojis = [];
  for (let i = 0; i < totalPieces; i++) {
    currentLevelEmojis.push(puzzleEmojis[i % puzzleEmojis.length]);
  }
  
  for (let i = 0; i < totalPieces; i++) {
    const piece = document.createElement('div');
    piece.className = 'puzzle-piece';
    piece.dataset.index = i;
    piece.dataset.emoji = currentLevelEmojis[i];
    puzzleGrid.appendChild(piece);
  }
  
  updatePuzzleProgress();
  updateTargetEmoji();
  resetCombo();
}

// Обновление отображаемого целевого эмодзи
function updateTargetEmoji() {
  if (currentTargetIndex < currentLevelEmojis.length) {
    targetEmojiDisplay.textContent = currentLevelEmojis[currentTargetIndex];
    
    document.querySelectorAll('.puzzle-piece').forEach(piece => {
      piece.classList.remove('current');
    });
    
    const currentPiece = document.querySelector(`.puzzle-piece[data-index="${currentTargetIndex}"]`);
    if (currentPiece) {
      currentPiece.classList.add('current');
    }
  }
}

// Обновление прогресса пазла
function updatePuzzleProgress() {
  const totalPieces = levelConfig[currentLevel].pieces;
  const progressText = translations[currentLanguage].progress || "Прогресс";
  puzzleProgress.textContent = `📈 ${progressText}: ${collectedPieces}/${totalPieces}`;
}

// Добавление кусочка пазла
function addPuzzlePiece() {
  if (collectedPieces < levelConfig[currentLevel].pieces) {
    const pieces = document.querySelectorAll('.puzzle-piece');
    pieces[collectedPieces].classList.add('collected');
    collectedPieces++;
    currentTargetIndex++;
    updatePuzzleProgress();
    updateTargetEmoji();
    
    addCombo();
    playSound(collectSound);
    
    if (collectedPieces >= levelConfig[currentLevel].pieces) {
      completeLevel();
    }
  }
}

// Удаление кусочка пазла
function removePuzzlePiece() {
  if (collectedPieces > 0) {
    const pieces = document.querySelectorAll('.puzzle-piece');
    collectedPieces--;
    currentTargetIndex--;
    pieces[collectedPieces].classList.remove('collected');
    updatePuzzleProgress();
    updateTargetEmoji();
    
    resetCombo();
    
    showWarningMessage("Вы режете не те правки! Потерян пазл!");
  }
}

// Показать предупреждение
function showWarningMessage(message) {
  const warning = document.createElement('div');
  warning.className = 'warning-message';
  warning.textContent = message;
  document.body.appendChild(warning);
  
  setTimeout(() => {
    if (warning.parentNode) {
      warning.parentNode.removeChild(warning);
    }
  }, 2000);
}

// Взрыв оставшихся пазлов
function explodeRemainingPuzzles() {
  const pieces = document.querySelectorAll('.puzzle-piece:not(.collected)');
  pieces.forEach(piece => {
    const rect = piece.getBoundingClientRect();
    const explosion = document.createElement('div');
    explosion.className = 'puzzle-explosion';
    
    const targetX = (Math.random() - 0.5) * 200;
    const targetY = (Math.random() - 0.5) * 200;
    
    explosion.style.setProperty('--ex', targetX + 'px');
    explosion.style.setProperty('--ey', targetY + 'px');
    explosion.style.left = rect.left + rect.width / 2 + 'px';
    explosion.style.top = rect.top + rect.height / 2 + 'px';
    
    document.body.appendChild(explosion);
    
    setTimeout(() => {
      if (explosion.parentNode) {
        explosion.parentNode.removeChild(explosion);
      }
    }, 1000);
  });
}

// Взрыв оставшихся правок на экране
function explodeRemainingFeedbacks() {
  const feedbacks = document.querySelectorAll('.feedback:not([data-sliced]):not([data-collected])');
  feedbacks.forEach(fb => {
    const rect = fb.getBoundingClientRect();
    
    for (let i = 0; i < 8; i++) {
      const explosion = document.createElement('div');
      explosion.className = 'feedback-explosion';
      
      const targetX = (Math.random() - 0.5) * 150;
      const targetY = (Math.random() - 0.5) * 150;
      
      explosion.style.setProperty('--fx', targetX + 'px');
      explosion.style.setProperty('--fy', targetY + 'px');
      explosion.style.left = rect.left + rect.width / 2 + 'px';
      explosion.style.top = rect.top + rect.height / 2 + 'px';
      
      explosion.style.animationDelay = (Math.random() * 0.3) + 's';
      
      document.body.appendChild(explosion);
      
      setTimeout(() => {
        if (explosion.parentNode) {
          explosion.parentNode.removeChild(explosion);
        }
      }, 1200);
    }
    
    if (fb.parentNode) {
      fb.parentNode.removeChild(fb);
    }
  });
}

// Завершение уровня
function completeLevel() {
  gameRunning = false;
  clearInterval(spawnInterval);
  clearInterval(forcedSpawnInterval);
  clearInterval(timerInterval);
  
  stopSound(tickSound);
  stopSound(heartbeatSound);
  heartbeatPlaying = false;
  
  playSound(levelCompleteSound);
  
  explodeRemainingPuzzles();
  explodeRemainingFeedbacks();
  
  if (missedBadFeedbacks === 0 && lives < maxLives) {
    lives++;
    updateLivesDisplay();
  }
  
  if (comboMultiplier > 1) {
    const comboBonus = 100 * comboMultiplier;
    score += comboBonus;
    scoreDisplay.textContent = `🎯 ${translations[currentLanguage].score || "Очки"}: ${score}`;
  }
  
  showLevelCompleteScreen();
}

// Показ экрана завершения уровня
function showLevelCompleteScreen() {
  completedLevelDisplay.textContent = currentLevel;
  const messageKey = levelConfig[currentLevel].message;
  levelMessageDisplay.textContent = translations[currentLanguage][messageKey] || translations.ru[messageKey];
  levelCompleteScreen.classList.remove('hidden');
}

// Переход на следующий уровень
function goToNextLevel() {
  levelCompleteScreen.classList.add('hidden');
  
  if (currentLevel < 5) {
    currentLevel++;
    levelDisplay.textContent = `📊 ${translations[currentLanguage].level || "Ур"}: ${currentLevel}/5`;
    
    setTimeout(() => {
      initializePuzzle();
      startGame();
    }, 500);
  } else {
    endGame(true);
  }
}

// Обновление счетчика пропущенных
function updateMissedCounter() {
  const maxMissed = levelConfig[currentLevel].maxMissed;
  const missedText = translations[currentLanguage].missed || "Пропущено";
  missedCounterDisplay.textContent = `⚠️ ${missedText}: ${consecutiveMissed}/${maxMissed}`;
  
  if (consecutiveMissed >= maxMissed) {
    loseLife();
    consecutiveMissed = 0;
    updateMissedCounter();
  }
}

// Обновление отображения жизней
function updateLivesDisplay() {
  let hearts = '';
  for (let i = 0; i < lives; i++) {
    hearts += '❤️ ';
  }
  livesDisplay.textContent = hearts;
}

// Потеря жизни
function loseLife() {
  lives--;
  updateLivesDisplay();
  
  resetCombo();
  playSound(wrongSound);
  
  gameArea.style.animation = 'shakeError 0.6s ease-in-out';
  setTimeout(() => {
    gameArea.style.animation = '';
  }, 600);
  
  if (lives <= 0) {
    endGame(false);
  }
}

// Создаем шлейф из сфер
function createTrailSphere(x, y) {
  const gameAreaRect = gameArea.getBoundingClientRect();
  const relativeX = x - gameAreaRect.left;
  const relativeY = y - gameAreaRect.top;
  
  const sphere = document.createElement('div');
  sphere.className = 'trail-sphere';
  
  sphere.style.left = relativeX + 'px';
  sphere.style.top = relativeY + 'px';
  
  const size = 4 + Math.random() * 6;
  sphere.style.width = size + 'px';
  sphere.style.height = size + 'px';
  
  gameArea.appendChild(sphere);
  
  setTimeout(() => {
    if (sphere.parentNode) {
      sphere.parentNode.removeChild(sphere);
    }
  }, 600);
}

// Функция для расчета расстояния между точками
function distance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

// Функция для расчета угла между точками
function angle(x1, y1, x2, y2) {
  return Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
}

// Обновление линии свайпа
function updateSwipeLine(x1, y1, x2, y2) {
  const gameAreaRect = gameArea.getBoundingClientRect();
  const relativeX1 = x1 - gameAreaRect.left;
  const relativeY1 = y1 - gameAreaRect.top;
  const relativeX2 = x2 - gameAreaRect.left;
  const relativeY2 = y2 - gameAreaRect.top;
  
  const dist = distance(relativeX1, relativeY1, relativeX2, relativeY2);
  const ang = angle(relativeX1, relativeY1, relativeX2, relativeY2);
  
  swipeLine.style.width = dist + 'px';
  swipeLine.style.left = relativeX1 + 'px';
  swipeLine.style.top = relativeY1 + 'px';
  swipeLine.style.transform = `rotate(${ang}deg)`;
  swipeLine.style.display = 'block';
}

// Создание эффекта дыма с завихрениями
function createSmoke(x, y, cutAngle, count = 25) {
  const gameAreaRect = gameArea.getBoundingClientRect();
  const relativeX = x - gameAreaRect.left;
  const relativeY = y - gameAreaRect.top;
  
  for (let i = 0; i < count; i++) {
    const smoke = document.createElement('div');
    
    const sizeType = Math.random();
    if (sizeType < 0.15) {
      smoke.className = 'smoke-particle large';
    } else if (sizeType < 0.4) {
      smoke.className = 'smoke-particle medium';
    } else if (sizeType < 0.8) {
      smoke.className = 'smoke-particle small';
    } else {
      smoke.className = 'smoke-particle tiny';
    }
    
    const oppositeAngle = cutAngle + Math.PI;
    const spread = (Math.random() - 0.5) * Math.PI;
    const finalAngle = oppositeAngle + spread;
    
    const speed = 25 + Math.random() * 40;
    const distance = speed * (0.8 + Math.random() * 0.8);
    
    const tx = Math.cos(finalAngle) * distance;
    const ty = Math.sin(finalAngle) * distance;
    
    smoke.style.setProperty('--px', tx + 'px');
    smoke.style.setProperty('--py', ty + 'px');
    smoke.style.left = relativeX + 'px';
    smoke.style.top = relativeY + 'px';
    
    const startOffsetX = (Math.random() - 0.5) * 40;
    const startOffsetY = (Math.random() - 0.5) * 40;
    smoke.style.transform = `translate(${startOffsetX}px, ${startOffsetY}px) scale(0.8)`;
    
    gameArea.appendChild(smoke);
    
    setTimeout(() => {
      if (smoke.parentNode) {
        smoke.parentNode.removeChild(smoke);
      }
    }, 1200);
  }
}

// Создание взрыва частиц во все стороны
function createExplosion(x, y, count = 20) {
  const gameAreaRect = gameArea.getBoundingClientRect();
  const relativeX = x - gameAreaRect.left;
  const relativeY = y - gameAreaRect.top;
  
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    
    const sizeType = Math.random();
    if (sizeType < 0.2) {
      particle.className = 'explosion-particle large';
    } else if (sizeType < 0.6) {
      particle.className = 'explosion-particle medium';
    } else {
      particle.className = 'explosion-particle small';
    }
    
    const angle = Math.random() * Math.PI * 2;
    const speed = 60 + Math.random() * 120;
    const distance = speed * (0.7 + Math.random() * 0.6);
    
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance;
    
    const rotation = Math.random() * 720;
    
    particle.style.setProperty('--px', tx + 'px');
    particle.style.setProperty('--py', ty + 'px');
    particle.style.setProperty('--pr', rotation + 'deg');
    particle.style.left = relativeX + 'px';
    particle.style.top = relativeY + 'px';
    
    particle.style.animationDelay = (Math.random() * 0.2) + 's';
    
    gameArea.appendChild(particle);
    
    setTimeout(() => {
      if (particle.parentNode) {
        particle.parentNode.removeChild(particle);
      }
    }, 800);
  }
}

// Эффект сбора хорошей правки
function createCollectEffect(x, y) {
  const gameAreaRect = gameArea.getBoundingClientRect();
  const relativeX = x - gameAreaRect.left;
  const relativeY = y - gameAreaRect.top;
  
  const effect = document.createElement('div');
  effect.className = 'collect-effect';
  effect.style.left = relativeX + 'px';
  effect.style.top = relativeY + 'px';
  
  gameArea.appendChild(effect);
  
  setTimeout(() => {
    if (effect.parentNode) {
      effect.parentNode.removeChild(effect);
    }
  }, 500);
}

// Разделение правки на две части
function splitFeedback(fb, cutAngle, cutX, cutY) {
  const gameAreaRect = gameArea.getBoundingClientRect();
  const rect = fb.getBoundingClientRect();
  const relativeLeft = rect.left - gameAreaRect.left;
  const relativeTop = rect.top - gameAreaRect.top;
  const relativeCutX = cutX - gameAreaRect.left;
  const relativeCutY = cutY - gameAreaRect.top;
  
  const text = fb.textContent;
  const type = fb.dataset.type;
  
  const leftHalf = document.createElement('div');
  leftHalf.className = 'feedback-half left';
  leftHalf.textContent = text;
  leftHalf.style.left = relativeLeft + 'px';
  leftHalf.style.top = relativeTop + 'px';
  leftHalf.style.width = rect.width / 2 + 'px';
  leftHalf.style.height = rect.height + 'px';
  
  const rightHalf = document.createElement('div');
  rightHalf.className = 'feedback-half right';
  rightHalf.textContent = text;
  rightHalf.style.left = relativeLeft + rect.width / 2 + 'px';
  rightHalf.style.top = relativeTop + 'px';
  rightHalf.style.width = rect.width / 2 + 'px';
  rightHalf.style.height = rect.height + 'px';
  
  const perpendicularAngle = cutAngle + Math.PI / 2;
  
  const leftTx = Math.cos(perpendicularAngle) * 150;
  const leftTy = Math.sin(perpendicularAngle) * 150;
  const leftRot = perpendicularAngle * 180 / Math.PI;
  
  const rightTx = Math.cos(perpendicularAngle + Math.PI) * 150;
  const rightTy = Math.sin(perpendicularAngle + Math.PI) * 150;
  const rightRot = (perpendicularAngle + Math.PI) * 180 / Math.PI;
  
  leftHalf.style.setProperty('--tx', leftTx + 'px');
  leftHalf.style.setProperty('--ty', leftTy + 'px');
  leftHalf.style.setProperty('--rot', leftRot + 'deg');
  
  rightHalf.style.setProperty('--tx', rightTx + 'px');
  rightHalf.style.setProperty('--ty', rightTy + 'px');
  rightHalf.style.setProperty('--rot', rightRot + 'deg');
  
  gameArea.appendChild(leftHalf);
  gameArea.appendChild(rightHalf);
  
  setTimeout(() => {
    if (leftHalf.parentNode) leftHalf.parentNode.removeChild(leftHalf);
    if (rightHalf.parentNode) rightHalf.parentNode.removeChild(rightHalf);
  }, 1000);
  
  return { leftHalf, rightHalf };
}

// Проверка пересечения линии с элементом
function checkLineIntersection(lineStart, lineEnd, element) {
  const rect = element.getBoundingClientRect();
  const elementCenter = {
    x: rect.left + rect.width / 2,
    y: rect.top + rect.height / 2
  };
  
  const distanceToLine = pointToLineDistance(
    elementCenter.x, elementCenter.y,
    lineStart.x, lineStart.y,
    lineEnd.x, lineEnd.y
  );
  
  return distanceToLine < Math.min(rect.width, rect.height) * 0.6;
}

// Расчет расстояния от точки до линии
function pointToLineDistance(px, py, x1, y1, x2, y2) {
  const A = px - x1;
  const B = py - y1;
  const C = x2 - x1;
  const D = y2 - y1;

  const dot = A * C + B * D;
  const lenSq = C * C + D * D;
  let param = -1;
  
  if (lenSq !== 0) {
    param = dot / lenSq;
  }

  let xx, yy;

  if (param < 0) {
    xx = x1;
    yy = y1;
  } else if (param > 1) {
    xx = x2;
    yy = y2;
  } else {
    xx = x1 + param * C;
    yy = y1 + param * D;
  }

  const dx = px - xx;
  const dy = py - yy;
  
  return Math.sqrt(dx * dx + dy * dy);
}

// Обработка разрезания правки
function cutFeedback(fb, cutX, cutY, cutAngle) {
  if (fb.dataset.sliced || fb.dataset.collected) return;
  
  fb.dataset.sliced = true;
  const itemType = fb.dataset.type;
  
  playSound(cutSound);
  
  createSmoke(cutX, cutY, cutAngle, 25);
  createExplosion(cutX, cutY, 20);
  splitFeedback(fb, cutAngle, cutX, cutY);
  
  setTimeout(() => {
    if (fb.parentNode) {
      fb.parentNode.removeChild(fb);
    }
  }, 50);
  
  if (itemType === "bad") {
    // Правильное действие - режем плохую правку
    score += 10 * comboMultiplier;
    consecutiveMissed = 0;
    updateMissedCounter();
    
    // Сбрасываем счетчик неправильных разрезов зеленых
    wrongGreenCuts = 0;
    updateWrongCutsCounter();
    
    addCombo();
  } else if (itemType === "good") {
    // Режем зеленую правку - проверяем, нужная ли она
    const feedbackEmoji = fb.dataset.emoji;
    const targetEmoji = currentLevelEmojis[currentTargetIndex];
    
    if (feedbackEmoji === targetEmoji) {
      // Режем нужную зеленую правку - это ошибка!
      score -= 5;
      resetCombo();
      
      // Увеличиваем счетчик неправильных разрезов
      wrongGreenCuts++;
      updateWrongCutsCounter();
      
      // Если достигли максимума - снимаем пазл
      if (wrongGreenCuts >= MAX_WRONG_GREEN_CUTS) {
        removePuzzlePiece();
        wrongGreenCuts = 0;
        updateWrongCutsCounter();
      }
    } else {
      // Режем ненужную зеленую правку - тоже ошибка, но меньшая
      score -= 2;
      resetCombo();
      
      wrongGreenCuts++;
      updateWrongCutsCounter();
      
      if (wrongGreenCuts >= MAX_WRONG_GREEN_CUTS) {
        removePuzzlePiece();
        wrongGreenCuts = 0;
        updateWrongCutsCounter();
      }
    }
  }
  
  const scoreText = translations[currentLanguage].score || "Очки";
  scoreDisplay.textContent = `🎯 ${scoreText}: ${score}`;
}

// Обработка сбора хорошей правки
function collectFeedback(fb, x, y) {
  if (fb.dataset.sliced || fb.dataset.collected) return;
  
  const feedbackEmoji = fb.dataset.emoji;
  const targetEmoji = currentLevelEmojis[currentTargetIndex];
  
  if (feedbackEmoji !== targetEmoji) {
    // Неправильная правка - эффект ошибки
    playSound(wrongSound);
    fb.classList.add('shake-error');
    setTimeout(() => {
      fb.classList.remove('shake-error');
    }, 500);
    
    resetCombo();
    return;
  }
  
  fb.dataset.collected = true;
  
  const gameAreaRect = gameArea.getBoundingClientRect();
  const relativeX = x - gameAreaRect.left;
  const relativeY = y - gameAreaRect.top;
  
  createCollectEffect(x, y);
  
  const puzzleRect = puzzleGrid.getBoundingClientRect();
  const targetX = puzzleRect.left + puzzleRect.width / 2;
  const targetY = puzzleRect.top + puzzleRect.height / 2;
  
  const fbRect = fb.getBoundingClientRect();
  const startX = fbRect.left + fbRect.width / 2;
  const startY = fbRect.top + fbRect.height / 2;
  
  const collectX = targetX - startX;
  const collectY = targetY - startY;
  
  fb.style.setProperty('--collect-x', collectX + 'px');
  fb.style.setProperty('--collect-y', collectY + 'px');
  fb.classList.add('collecting');
  
  // Сбрасываем счетчик неправильных разрезов при правильном сборе
  wrongGreenCuts = 0;
  updateWrongCutsCounter();
  
  addPuzzlePiece();
  score += 15 * comboMultiplier;
  const scoreText = translations[currentLanguage].score || "Очки";
  scoreDisplay.textContent = `🎯 ${scoreText}: ${score}`;
  
  setTimeout(() => {
    if (fb.parentNode) {
      fb.parentNode.removeChild(fb);
    }
  }, 800);
}

// Функция создания обычных правок
function spawnFeedback() {
  if (!gameRunning || gamePaused) return;

  const fb = document.createElement("div");
  
  let item;
  const randomValue = Math.random();
  
  // 60% шанс хорошей правки, 40% шанс плохой
  if (randomValue < 0.6) {
    const goodFeedbacks = feedbackPool.filter(fb => fb.type === "good");
    item = goodFeedbacks[Math.floor(Math.random() * goodFeedbacks.length)];
  } else {
    const badFeedbacks = feedbackPool.filter(fb => fb.type === "bad");
    item = badFeedbacks[Math.floor(Math.random() * badFeedbacks.length)];
  }
  
  fb.className = "feedback";
  fb.dataset.type = item.type;
  
  if (item.type === "good" && item.emoji) {
    fb.dataset.emoji = item.emoji;
    fb.innerHTML = `
      <div class="feedback-emoji">${item.emoji}</div>
      <div class="feedback-text">${item.text}</div>
    `;
    
    fb.addEventListener('click', (e) => {
      collectFeedback(fb, e.clientX, e.clientY);
    });
    
    fb.addEventListener('touchend', (e) => {
      e.preventDefault();
      const touch = e.changedTouches[0];
      collectFeedback(fb, touch.clientX, touch.clientY);
    });
  } else {
    fb.textContent = item.text;
    
    fb.addEventListener('click', (e) => {
      const rect = fb.getBoundingClientRect();
      const cutX = rect.left + rect.width / 2;
      const cutY = rect.top + rect.height / 2;
      const cutAngle = Math.PI / 4;
      cutFeedback(fb, cutX, cutY, cutAngle);
    });
  }
  
  const gameAreaRect = gameArea.getBoundingClientRect();
  const maxLeft = gameAreaRect.width - 150;
  const leftPosition = Math.random() * maxLeft;
  
  fb.style.left = leftPosition + "px";
  fb.style.top = "-50px";
  
  gameArea.appendChild(fb);

  const lifetime = item.type === "good" ? 5000 : 4000;

  setTimeout(() => {
    if (fb.parentNode && !fb.dataset.sliced && !fb.dataset.collected) {
      if (item.type === "good") {
        score -= 2;
        const scoreText = translations[currentLanguage].score || "Очки";
        scoreDisplay.textContent = `🎯 ${scoreText}: ${score}`;
        resetCombo();
      } else if (item.type === "bad") {
        consecutiveMissed++;
        missedBadFeedbacks++;
        updateMissedCounter();
        resetCombo();
      }
      fb.parentNode.removeChild(fb);
    }
  }, lifetime);
}

// Функция: Принудительное появление нужных пазлов
function spawnNeededFeedback() {
  if (!gameRunning || gamePaused) return;
  
  // Создаем 1-2 нужных пазла
  const count = Math.random() < 0.5 ? 1 : 2;
  
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      if (!gameRunning || gamePaused) return;
      
      const fb = document.createElement("div");
      const targetEmoji = currentLevelEmojis[currentTargetIndex];
      
      // Находим правку с нужным эмодзи
      const neededFeedback = feedbackPool.find(f => 
        f.type === "good" && f.emoji === targetEmoji
      );
      
      if (!neededFeedback) return;
      
      fb.className = "feedback needed-feedback";
      fb.dataset.type = "good";
      fb.dataset.emoji = targetEmoji;
      fb.innerHTML = `
        <div class="feedback-emoji">${targetEmoji}</div>
        <div class="feedback-text">${neededFeedback.text}</div>
      `;
      
      fb.addEventListener('click', (e) => {
        collectFeedback(fb, e.clientX, e.clientY);
      });
      
      fb.addEventListener('touchend', (e) => {
        e.preventDefault();
        const touch = e.changedTouches[0];
        collectFeedback(fb, touch.clientX, touch.clientY);
      });
      
      const gameAreaRect = gameArea.getBoundingClientRect();
      const maxLeft = gameAreaRect.width - 150;
      const leftPosition = Math.random() * maxLeft;
      
      fb.style.left = leftPosition + "px";
      fb.style.top = "-50px";
      
      gameArea.appendChild(fb);
      
      // Время жизни нужной правки
      setTimeout(() => {
        if (fb.parentNode && !fb.dataset.sliced && !fb.dataset.collected) {
          score -= 2;
          const scoreText = translations[currentLanguage].score || "Очки";
          scoreDisplay.textContent = `🎯 ${scoreText}: ${score}`;
          resetCombo();
          fb.parentNode.removeChild(fb);
        }
      }, 5000);
      
    }, i * 500); // Небольшая задержка между появлением
  }
}

// Таймер игры
function startTimer() {
  timeLeft = levelConfig[currentLevel].time;
  timerDisplay.textContent = `⏱ ${timeLeft}`;
  
  if (timerInterval) {
    clearInterval(timerInterval);
  }
  
  timerInterval = setInterval(() => {
    if (!gamePaused && gameRunning) {
      timeLeft--;
      timerDisplay.textContent = `⏱ ${timeLeft}`;
      
      // Управление звуками таймера
      if (timeLeft <= 15 && !heartbeatPlaying) {
        // Включаем сердцебиение
        playSound(heartbeatSound);
        heartbeatPlaying = true;
        tickSound.volume = 0.6; // Увеличиваем громкость тиканья
      } else if (timeLeft > 15) {
        // Регулируем громкость тиканья в зависимости от оставшегося времени
        const volume = 0.3 + (45 - timeLeft) * 0.015;
        tickSound.volume = Math.min(0.6, volume);
        
        // Воспроизводим тиканье каждую секунду
        if (timeLeft % 2 === 0) {
          playSound(tickSound);
        }
      }
      
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        stopSound(tickSound);
        stopSound(heartbeatSound);
        heartbeatPlaying = false;
        
        // Время вышло
        if (collectedPieces < levelConfig[currentLevel].pieces) {
          // Не собрали достаточно пазлов
          loseLife();
          if (lives > 0) {
            // Есть еще жизни - продолжаем
            startGame();
          }
        } else {
          // Собрали достаточно пазлов до окончания времени
          completeLevel();
        }
      }
    }
  }, 1000);
}

// Пауза игры
function pauseGame() {
  if (!gameRunning) return;
  
  gamePaused = true;
  pauseScreen.classList.remove('hidden');
  
  // Останавливаем звуки
  stopSound(tickSound);
  stopSound(heartbeatSound);
  heartbeatPlaying = false;
  
  // Останавливаем анимации правок
  document.querySelectorAll('.feedback').forEach(fb => {
    const style = window.getComputedStyle(fb);
    const animation = style.animation;
    fb.style.animationPlayState = 'paused';
  });
}

// Продолжить игру
function resumeGame() {
  gamePaused = false;
  pauseScreen.classList.add('hidden');
  
  // Возобновляем звуки таймера если нужно
  if (timeLeft <= 15 && gameRunning) {
    playSound(heartbeatSound);
    heartbeatPlaying = true;
  }
  
  // Возобновляем анимации правок
  document.querySelectorAll('.feedback').forEach(fb => {
    fb.style.animationPlayState = 'running';
  });
}

// Завершить игру
function endGame(isWin) {
  gameRunning = false;
  gamePaused = false;
  clearInterval(spawnInterval);
  clearInterval(forcedSpawnInterval);
  clearInterval(timerInterval);
  
  // Останавливаем все звуки
  stopSound(tickSound);
  stopSound(heartbeatSound);
  heartbeatPlaying = false;
  
  if (isWin) {
    playSound(levelCompleteSound);
  } else {
    playSound(gameOverSound);
  }
  
  // Сохраняем рекорд
  if (isWin || score > 0) {
    saveHighscore(score, currentLevel);
    saveToLeaderboard(score); // Сохраняем в лидерборд Yandex
  }
  
  if (!isWin) {
    // Проигрыш
    document.body.classList.add('game-over');
    gameOverScreen.classList.remove('hidden');
    finalLevelDisplay.textContent = currentLevel;
    finalScoreDisplay.textContent = score;
    explodeRemainingPuzzles();
    explodeRemainingFeedbacks();
  } else {
    // Победа
    alert(`🎉 Поздравляем! Вы прошли все уровни с результатом ${score} очков!`);
    returnToMenu();
  }
}

// Возврат в главное меню
function returnToMenu() {
  resetGame();
  hideAllScreens();
  mainMenu.classList.remove('hidden');
  
  // Запускаем фоновую музыку в меню
  if (musicEnabled) {
    backgroundMusic.volume = 0.3;
    backgroundMusic.play().catch(e => console.log('Music play error:', e));
  }
}

// Скрыть все экраны
function hideAllScreens() {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.add('hidden');
  });
}

// Сброс игры
function resetGame() {
  gameRunning = false;
  gamePaused = false;
  clearInterval(spawnInterval);
  clearInterval(forcedSpawnInterval);
  clearInterval(timerInterval);
  
  // Останавливаем все звуки
  stopSound(tickSound);
  stopSound(heartbeatSound);
  heartbeatPlaying = false;
  
  currentLevel = 1;
  lives = 2;
  score = 0;
  collectedPieces = 0;
  consecutiveMissed = 0;
  missedBadFeedbacks = 0;
  wrongGreenCuts = 0;
  currentLevelEmojis = [];
  currentTargetIndex = 0;
  combo = 0;
  comboMultiplier = 1;
  
  const scoreText = translations[currentLanguage].score || "Очки";
  const levelText = translations[currentLanguage].level || "Ур";
  scoreDisplay.textContent = `🎯 ${scoreText}: 0`;
  levelDisplay.textContent = `📊 ${levelText}: 1/5`;
  updateLivesDisplay();
  updateMissedCounter();
  updateWrongCutsCounter();
  updateComboDisplay();
  
  gameArea.innerHTML = '';
  document.body.classList.remove('game-over');
  gameOverScreen.classList.add('hidden');
  pauseScreen.classList.add('hidden');
  levelCompleteScreen.classList.add('hidden');
  
  initializePuzzle();
  if (swipeLine) {
    swipeLine.remove();
  }
  swipeLine = createSwipeLine();
}

// Сохранение рекорда
function saveHighscore(score, level) {
  const name = prompt('Поздравляем! Введите ваше имя для таблицы рекордов:', 'Игрок');
  if (name) {
    highscores.push({
      name: name.substring(0, 15),
      score: score,
      level: level,
      date: new Date().toLocaleDateString()
    });
    
    highscores.sort((a, b) => b.score - a.score);
    highscores = highscores.slice(0, 10);
    localStorage.setItem('cutFeedbackHighscores', JSON.stringify(highscores));
    updateHighscoresDisplay();
  }
}

// Обновление отображения таблицы рекордов
function updateHighscoresDisplay() {
  highscoresList.innerHTML = '';
  
  if (highscores.length === 0) {
    highscoresList.innerHTML = '<div class="highscore-item" style="justify-content: center;">Пока нет рекордов</div>';
    return;
  }
  
  highscores.forEach((highscore, index) => {
    const item = document.createElement('div');
    item.className = 'highscore-item';
    
    item.innerHTML = `
      <div class="highscore-position">${index + 1}</div>
      <div class="highscore-name">${highscore.name}</div>
      <div class="highscore-score">${highscore.score}</div>
      <div class="highscore-level">${highscore.level}</div>
    `;
    
    highscoresList.appendChild(item);
  });
}

// Показать таблицу рекордов
function showHighscores() {
  updateHighscoresDisplay();
  hideAllScreens();
  highscoresScreen.classList.remove('hidden');
}

// Создание элементов управления звуком
function createSoundControls() {
  const soundControls = document.querySelector('.sound-controls');
  
  const soundToggle = document.getElementById('sound-toggle');
  soundToggle.addEventListener('click', toggleSound);
  
  const musicToggle = document.getElementById('music-toggle');
  musicToggle.addEventListener('click', toggleMusic);
}

function startGame() {
  if (gameRunning) return;
  
  gameRunning = true;
  gamePaused = false;
  score = 0;
  const scoreText = translations[currentLanguage].score || "Очки";
  scoreDisplay.textContent = `🎯 ${scoreText}: 0`;
  consecutiveMissed = 0;
  missedBadFeedbacks = 0;
  wrongGreenCuts = 0;
  updateMissedCounter();
  updateWrongCutsCounter();
  updateLivesDisplay();
  resetCombo();
  
  gameArea.innerHTML = '';
  if (swipeLine) {
    swipeLine.remove();
  }
  swipeLine = createSwipeLine();
  
  const spawnSpeed = levelConfig[currentLevel].speed;
  spawnInterval = setInterval(spawnFeedback, spawnSpeed);
  
  // Принудительное появление нужных пазлов каждые 6 секунд
  forcedSpawnInterval = setInterval(spawnNeededFeedback, 6000);
  
  // Запускаем таймер
  startTimer();
  
  // Запускаем фоновую музыку если включена
  if (musicEnabled) {
    backgroundMusic.volume = 0.2; // Немного тише во время игры
    backgroundMusic.play().catch(e => console.log('Music play error:', e));
  }
}

// Инициализация при загрузке
async function initGame() {
  // Предотвращаем выделение и контекстное меню
  preventSelectionAndContextMenu();
  
  // Настраиваем обработчики видимости страницы
  setupPageVisibilityHandlers();
  
  // Инициализируем Web Audio API
  await initAudio();
  
  // Настраиваем адаптивную верстку
  adjustLayout();
  window.addEventListener('resize', adjustLayout);
  
  initSounds();
  createSoundControls();
  initializePuzzle();
  updateHighscoresDisplay();
  initYandexSDK(); // Инициализируем Yandex SDK
  
  // Запускаем фоновую музыку в меню
  if (musicEnabled) {
    backgroundMusic.volume = 0.3;
    backgroundMusic.play().catch(e => console.log('Music play error:', e));
  }
}

// Обработчики событий для меню
menuStartBtn.addEventListener("click", () => {
  hideAllScreens();
  gameInterface.classList.remove('hidden');
  startGame();
});

menuHighscoresBtn.addEventListener("click", showYandexLeaderboard);

menuRulesBtn.addEventListener("click", () => {
  hideAllScreens();
  rulesScreen.classList.remove('hidden');
});

closeRulesBtn.addEventListener("click", () => {
  hideAllScreens();
  mainMenu.classList.remove('hidden');
});

menuFromGameoverBtn.addEventListener("click", returnToMenu);

// Обработчики событий для игры
startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", () => {
  resetGame();
  startGame();
});
pauseBtn.addEventListener("click", pauseGame);
endBtn.addEventListener("click", returnToMenu);
resumeBtn.addEventListener("click", resumeGame);
quitBtn.addEventListener("click", returnToMenu);
nextLevelBtn.addEventListener("click", goToNextLevel);
highscoresBtn.addEventListener("click", showYandexLeaderboard);
closeHighscoresBtn.addEventListener("click", () => {
  hideAllScreens();
  gameInterface.classList.remove('hidden');
});

// Обработчики для rewarded рекламы
rewardedAdBtn.addEventListener('click', () => {
  showRewardedAd(addExtraLife);
});
gameRewardedAdBtn.addEventListener('click', () => {
  showRewardedAd(addExtraLife);
});
gameoverRewardedAdBtn.addEventListener('click', () => {
  showRewardedAd(addExtraLife);
});

// Обработчики событий для свайпа
gameArea.addEventListener('mousedown', startSwipe);
gameArea.addEventListener('mousemove', continueSwipe);
gameArea.addEventListener('mouseup', endSwipe);
gameArea.addEventListener('mouseleave', endSwipe);

gameArea.addEventListener('touchstart', (e) => {
  e.preventDefault();
  const touch = e.touches[0];
  startSwipe({ clientX: touch.clientX, clientY: touch.clientY });
});
gameArea.addEventListener('touchmove', (e) => {
  e.preventDefault();
  const touch = e.touches[0];
  continueSwipe({ clientX: touch.clientX, clientY: touch.clientY });
});
gameArea.addEventListener('touchend', endSwipe);

function startSwipe(e) {
  if (!gameRunning || gamePaused) return;
  
  isSwiping = true;
  swipeStartPoint = { x: e.clientX, y: e.clientY };
  trailPoints = [swipeStartPoint];
  if (swipeLine) {
    swipeLine.style.display = 'block';
    updateSwipeLine(e.clientX, e.clientY, e.clientX, e.clientY);
  }
}

function continueSwipe(e) {
  if (!isSwiping || !swipeStartPoint || gamePaused || !swipeLine) return;
  
  const currentPoint = { x: e.clientX, y: e.clientY };
  
  trailPoints.push(currentPoint);
  
  if (trailPoints.length >= 2) {
    const lastPoint = trailPoints[trailPoints.length - 2];
    const currentPoint = trailPoints[trailPoints.length - 1];
    
    const steps = 3;
    for (let i = 0; i < steps; i++) {
      const t = i / steps;
      const x = lastPoint.x + (currentPoint.x - lastPoint.x) * t;
      const y = lastPoint.y + (currentPoint.y - lastPoint.y) * t;
      createTrailSphere(x, y);
    }
  }
  
  if (trailPoints.length > 8) {
    trailPoints.shift();
  }
  
  updateSwipeLine(swipeStartPoint.x, swipeStartPoint.y, currentPoint.x, currentPoint.y);
  
  const cutAngle = Math.atan2(currentPoint.y - swipeStartPoint.y, currentPoint.x - swipeStartPoint.x);
  
  const feedbacks = document.querySelectorAll('.feedback:not([data-sliced]):not([data-collected])');
  feedbacks.forEach(fb => {
    if (checkLineIntersection(swipeStartPoint, currentPoint, fb)) {
      cutFeedback(fb, currentPoint.x, currentPoint.y, cutAngle);
    }
  });
  
  swipeStartPoint = currentPoint;
}

function endSwipe() {
  isSwiping = false;
  swipeStartPoint = null;
  trailPoints = [];
  if (swipeLine) {
    swipeLine.style.display = 'none';
  }
}

// Запуск инициализации при загрузке страницы
window.addEventListener('load', initGame);