// Основные константы и настройки
const puzzleEmojis = ['🎬', '📹', '🎞️', '⚡', '✨', '🎭', '🌟', '💫', '🎪', '🎨'];

// Система переводов
const translations = {
  ru: {
    // Главное меню
    start_game: "🎬 Начать игру",
    leaderboard: "🏆 Рекорды",
    rules: "📖 Правила",
    watch_ad_for_life: "🎁 Посмотреть рекламу за +1 жизнь",
    game_description_1: "Редактируй видео как профессионал!",
    game_description_2: "Собирай нужные правки, режь лишние",
    
    // Правила
    rules_title: "📖 Правила игры",
    rule1_title: "Собирай нужные правки",
    rule1_description: "Тапай на зеленые правки с нужным эмодзи",
    rule2_title: "Режь плохие правки",
    rule2_description: "Проводи пальцем по красным правкам",
    rule3_title: "Избегай ошибок",
    rule3_description: "Не режь нужные зеленые правки - потеряешь пазл",
    rule4_title: "Следи за жизнями",
    rule4_description: "Пропустишь 7 плохих правок - потеряешь жизнь",
    got_it: "Понятно!",
    
    // Игровой интерфейс
    collect: "Собрать:",
    start: "🎬",
    pause: "⏸️",
    menu: "⏹️",
    watch_ad: "🎁",
    
    // Меню паузы
    paused: "⏸️ ПАУЗА",
    continue: "▶️ Продолжить",
    quit_to_menu: "🏠 Выйти в меню",
    
    // Конец игры
    game_over: "💀 КОНЕЦ ИГРЫ",
    level: "🎯 Уровень:",
    score: "🏆 Очки:",
    restart: "🔄 Начать заново",
    main_menu: "🏠 Главное меню",
    
    // Завершение уровня
    level_complete: "🎉 Уровень {level} завершен!",
    next_level: "🚀 Следующий уровень",
    
    // Сообщения уровней
    level1_message: "Отличный старт! Ты освоил базовые инструменты монтажа.",
    level2_message: "Великолепно! Твои навыки цветокоррекции на высоте.",
    level3_message: "Потрясающе! Ты виртуоз VFX и анимации.",
    level4_message: "Невероятно! Ты достиг уровня Senior Video Editor.",
    level5_message: "Легенда! Ты - гуру видео продакшена!",
    
    // Таблица рекордов
    close: "✖️ Закрыть",
    
    // Уведомления
    extra_life_received: "+1 жизнь получена! 🎁",
    max_lives: "У вас максимальное количество жизней! ❤️",
    continue_playing: "+1 жизнь получена! Продолжайте играть! 🎁",
    ad_error: "Ошибка загрузки рекламы",
    ad_unavailable: "Реклама временно недоступна",
    
    // Системные сообщения
    wrong_edits_warning: "Вы режете не те правки! Потерян пазл!",
    congratulations: "Поздравляем! Введите ваше имя для таблицы рекордов:",
    default_player_name: "Игрок",
    
    // Экран победы
    you_win: "🏆 ВЫ ПОБЕДИЛИ!",
    win_message: "Вы прошли все 5 уровней!",
    win_score_label: "Итоговый счёт",
    enter_name_placeholder: "Введите ваше имя",
    save_and_menu: "💾 Сохранить и в меню",
    skip_to_menu: "Пропустить"
  },
  en: {
    // Main menu
    start_game: "🎬 Start Game",
    leaderboard: "🏆 Leaderboard",
    rules: "📖 Rules",
    watch_ad_for_life: "🎁 Watch ad for +1 life",
    game_description_1: "Edit videos like a pro!",
    game_description_2: "Collect needed edits, cut unnecessary ones",
    
    // Rules
    rules_title: "📖 Game Rules",
    rule1_title: "Collect needed edits",
    rule1_description: "Tap on green edits with the right emoji",
    rule2_title: "Cut bad edits",
    rule2_description: "Swipe through red edits",
    rule3_title: "Avoid mistakes",
    rule3_description: "Don't cut needed green edits - you'll lose a puzzle piece",
    rule4_title: "Watch your lives",
    rule4_description: "Miss 7 bad edits - lose a life",
    got_it: "Got it!",
    
    // Game interface
    collect: "Collect:",
    start: "🎬",
    pause: "⏸️",
    menu: "⏹️",
    watch_ad: "🎁",
    
    // Pause menu
    paused: "⏸️ PAUSED",
    continue: "▶️ Continue",
    quit_to_menu: "🏠 Quit to Menu",
    
    // Game over
    game_over: "💀 GAME OVER",
    level: "🎯 Level:",
    score: "🏆 Score:",
    restart: "🔄 Restart",
    main_menu: "🏠 Main Menu",
    
    // Level complete
    level_complete: "🎉 Level {level} Complete!",
    next_level: "🚀 Next Level",
    
    // Level messages
    level1_message: "Great start! You've mastered basic editing tools.",
    level2_message: "Excellent! Your color correction skills are top notch.",
    level3_message: "Amazing! You're a VFX and animation virtuoso.",
    level4_message: "Incredible! You've reached Senior Video Editor level.",
    level5_message: "Legendary! You're a video production guru!",
    
    // Leaderboard
    close: "✖️ Close",
    
    // Notifications
    extra_life_received: "+1 life received! 🎁",
    max_lives: "You have maximum lives! ❤️",
    continue_playing: "+1 life received! Continue playing! 🎁",
    ad_error: "Error loading ad",
    ad_unavailable: "Ad temporarily unavailable",
    
    // System messages
    wrong_edits_warning: "You're cutting wrong edits! Lost a puzzle piece!",
    congratulations: "Congratulations! Enter your name for the leaderboard:",
    default_player_name: "Player",
    
    // Win screen
    you_win: "🏆 YOU WIN!",
    win_message: "You completed all 5 levels!",
    win_score_label: "Final score",
    enter_name_placeholder: "Enter your name",
    save_and_menu: "💾 Save & Menu",
    skip_to_menu: "Skip"
  }
};

const feedbackPool = {
  ru: [
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
  ],
  en: [
    { text: "Add soft lighting", type: "good", emoji: "🎬" },
    { text: "Add shadow under object", type: "good", emoji: "📹" },
    { text: "Add glow to text", type: "good", emoji: "🎞️" },
    { text: "Fix skin color", type: "good", emoji: "⚡" },
    { text: "Remove video noise", type: "good", emoji: "✨" },
    { text: "Add wow effect", type: "good", emoji: "🎭" },
    { text: "Add particles", type: "good", emoji: "🌟" },
    { text: "Improve composition", type: "good", emoji: "💫" },
    { text: "Add depth of field", type: "good", emoji: "🎪" },
    { text: "Adjust white balance", type: "good", emoji: "🎨" },
    
    { text: "Make logo bigger!", type: "bad" },
    { text: "Redo everything in 3D!", type: "bad" },
    { text: "Can you do it faster?", type: "bad" },
    { text: "Do it like in example (no example)", type: "bad" },
    { text: "Add more highlights!", type: "bad" },
    { text: "Change entire concept", type: "bad" },
    { text: "Redraw from scratch", type: "bad" },
    { text: "Make it cooler!", type: "bad" },
    { text: "Remove everything and start over", type: "bad" },
    { text: "This is not what I wanted", type: "bad" }
  ]
};

const levelConfig = {
  1: { pieces: 5, speed: 800, time: 60, gridColumns: 5, maxMissed: 7 },
  2: { pieces: 8, speed: 700, time: 75, gridColumns: 8, maxMissed: 6 },
  3: { pieces: 12, speed: 600, time: 90, gridColumns: 12, maxMissed: 5 },
  4: { pieces: 16, speed: 500, time: 105, gridColumns: 16, maxMissed: 4 },
  5: { pieces: 20, speed: 400, time: 120, gridColumns: 20, maxMissed: 3 }
};

// Состояние игры
let gameState = {
  score: 0,
  gameRunning: false,
  gamePaused: false,
  currentLevel: 1,
  collectedPieces: 0,
  missedBadFeedbacks: 0,
  consecutiveMissed: 0,
  lives: 2,
  maxLives: 3,
  wrongGreenCuts: 0,
  MAX_WRONG_GREEN_CUTS: 4,
  currentLevelEmojis: [],
  currentTargetIndex: 0,
  combo: 0,
  comboMultiplier: 1,
  comboTimeout: null,
  soundEnabled: true,
  musicEnabled: true,
  heartbeatPlaying: false,
  savedGameState: null,
  language: 'ru'
};

// DOM элементы
const elements = {
  mainMenu: document.getElementById("main-menu"),
  gameInterface: document.getElementById("game-interface"),
  rulesScreen: document.getElementById("rules-screen"),
  gameOverScreen: document.getElementById("game-over"),
  pauseScreen: document.getElementById("pause-screen"),
  levelCompleteScreen: document.getElementById("level-complete"),
  highscoresScreen: document.getElementById("highscores-screen"),
  
  // Кнопки меню
  menuStartBtn: document.getElementById("menu-start-btn"),
  menuHighscoresBtn: document.getElementById("menu-highscores-btn"),
  menuRulesBtn: document.getElementById("menu-rules-btn"),
  closeRulesBtn: document.getElementById("close-rules"),
  languageBtn: document.getElementById("language-btn"),
  
  // Кнопки игры
  startBtn: document.getElementById("start-btn"),
  pauseBtn: document.getElementById("pause-btn"),
  endBtn: document.getElementById("end-btn"),
  resumeBtn: document.getElementById("resume-btn"),
  quitBtn: document.getElementById("quit-btn"),
  restartBtn: document.getElementById("restart-btn"),
  menuFromGameoverBtn: document.getElementById("menu-from-gameover"),
  nextLevelBtn: document.getElementById("next-level-btn"),
  highscoresBtn: document.getElementById("highscores-btn"),
  closeHighscoresBtn: document.getElementById("close-highscores"),
  
  // Рекламные кнопки
  rewardedAdBtn: document.getElementById("rewarded-ad-btn"),
  gameRewardedAdBtn: document.getElementById("game-rewarded-ad-btn"),
  gameoverRewardedAdBtn: document.getElementById("gameover-rewarded-ad-btn"),
  
  // Отображение информации
  scoreDisplay: document.getElementById("score"),
  levelDisplay: document.getElementById("level"),
  timerDisplay: document.getElementById("timer"),
  livesDisplay: document.getElementById("lives"),
  missedCounterDisplay: document.getElementById("missed-counter"),
  targetEmojiDisplay: document.getElementById("target-emoji"),
  puzzleGrid: document.getElementById("puzzle-grid"),
  
  // Финальные результаты
  finalLevelDisplay: document.getElementById("final-level"),
  finalScoreDisplay: document.getElementById("final-score"),
  completedLevelDisplay: document.getElementById("completed-level"),
  levelMessageDisplay: document.getElementById("level-message"),
  highscoresList: document.getElementById("highscores-list"),
  
  // Игровая зона
  gameArea: document.getElementById("game-area"),
  
  // Экран победы
  winScreen: document.getElementById("win-screen"),
  winNameInput: document.getElementById("win-name-input")
};

// Аудио элементы
const audioElements = {
  backgroundMusic: document.getElementById("background-music"),
  tickSound: document.getElementById("tick-sound"),
  heartbeatSound: document.getElementById("heartbeat-sound"),
  collectSound: document.getElementById("collect-sound"),
  wrongSound: document.getElementById("wrong-sound"),
  cutSound: document.getElementById("cut-sound"),
  levelCompleteSound: document.getElementById("level-complete-sound"),
  gameOverSound: document.getElementById("game-over-sound")
};

// Переменные для интервалов
let spawnInterval, forcedSpawnInterval, timerInterval;
let swipeLine = null;
let isSwiping = false;
let swipeStartPoint = null;
let trailPoints = [];
let timeLeft;

// Yandex SDK
let yandexSDK = null;
let isYandexPlatform = false;
let isShowingAd = false;

// Инициализация игры
function initGame() {
  // Загружаем настройки звука
  const savedSound = localStorage.getItem('soundEnabled');
  const savedMusic = localStorage.getItem('musicEnabled');
  
  if (savedSound !== null) {
    gameState.soundEnabled = savedSound === 'true';
  }
  if (savedMusic !== null) {
    gameState.musicEnabled = savedMusic === 'true';
  }
  
  setupEventListeners();
  initSounds();
  createSoundControls();
  initializePuzzle();
  updateHighscoresDisplay();
  initYandexSDK();
  
  // Загрузка языка из localStorage
  const savedLanguage = localStorage.getItem('gameLanguage');
  if (savedLanguage) {
    gameState.language = savedLanguage;
  }
  
  applyLanguage();
  
  // Настройка бесконечного воспроизведения музыки
  setupInfiniteMusic();
  
  preventSelectionAndContextMenu();
  setupPageVisibilityHandlers();
  
  // Обновляем иконки звука
  updateSoundIcons();
  
  // Game Ready API
  if (isYandexPlatform && yandexSDK) {
    yandexSDK.gameReady();
  }
}

// Применение языка
function applyLanguage() {
  // Обновляем текст кнопки переключения языка
  elements.languageBtn.textContent = gameState.language === 'ru' ? '🌐 Русский / English' : '🌐 English / Русский';
  
  // Применяем перевод ко всем элементам с data-i18n
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[gameState.language][key]) {
      let text = translations[gameState.language][key];
      if (key === 'level_complete' && elements.completedLevelDisplay) {
        text = text.replace('{level}', elements.completedLevelDisplay.textContent);
      }
      element.textContent = text;
    }
  });
  
  // Применяем placeholder для input-полей с data-i18n-placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    if (translations[gameState.language][key]) {
      element.placeholder = translations[gameState.language][key];
    }
  });
  
  // Сохраняем язык в localStorage
  localStorage.setItem('gameLanguage', gameState.language);
}

// Переключение языка
function toggleLanguage() {
  gameState.language = gameState.language === 'ru' ? 'en' : 'ru';
  applyLanguage();
}

// Получение перевода по ключу
function getTranslation(key) {
  return translations[gameState.language][key] || key;
}

// Настройка бесконечного воспроизведения музыки
function setupInfiniteMusic() {
  if (gameState.musicEnabled) {
    audioElements.backgroundMusic.volume = 0.3;
    
    // Обеспечиваем бесконечное воспроизведение
    audioElements.backgroundMusic.addEventListener('ended', function() {
      this.currentTime = 0;
      if (gameState.musicEnabled && !shouldPauseMusic()) {
        this.play().catch(e => console.log('Music restart error:', e));
      }
    });
    
    // Запускаем музыку если можно
    if (!shouldPauseMusic()) {
      audioElements.backgroundMusic.play().catch(e => console.log('Music play error:', e));
    }
  }
}

// Проверка, должна ли музыка быть на паузе
function shouldPauseMusic() {
  // Музыка должна останавливаться только в этих случаях:
  // 1. Когда страница не видима (свернута или другая вкладка)
  // 2. Когда игра на паузе (но мы можем оставить музыку в меню)
  // 3. При показе рекламы
  return document.hidden || 
         (gameState.gamePaused && gameState.gameRunning) ||
         isShowingAd;
}

// Новая функция - пауза всех звуков кроме музыки
function pauseAllAudioExceptMusic() {
  Object.values(audioElements).forEach(audio => {
    if (audio !== audioElements.backgroundMusic) {
      audio.pause();
    }
  });
}

// Функция обновления иконок звука
function updateSoundIcons() {
  const soundIcon = document.getElementById('sound-toggle');
  const musicIcon = document.getElementById('music-toggle');
  
  soundIcon.textContent = gameState.soundEnabled ? '🔊' : '🔇';
  musicIcon.textContent = gameState.musicEnabled ? '🎵' : '🎵❌';
}

// Настройка обработчиков событий
function setupEventListeners() {
  // Меню
  elements.menuStartBtn.addEventListener("click", startGameFromMenu);
  elements.menuHighscoresBtn.addEventListener("click", showHighscores);
  elements.menuRulesBtn.addEventListener("click", showRules);
  elements.closeRulesBtn.addEventListener("click", closeRules);
  elements.languageBtn.addEventListener("click", toggleLanguage);
  
  // Игра
  elements.startBtn.addEventListener("click", startGame);
  elements.pauseBtn.addEventListener("click", pauseGame);
  elements.endBtn.addEventListener("click", returnToMenu);
  elements.resumeBtn.addEventListener("click", resumeGame);
  elements.quitBtn.addEventListener("click", returnToMenu);
  elements.restartBtn.addEventListener("click", restartGame);
  elements.menuFromGameoverBtn.addEventListener("click", returnToMenu);
  elements.nextLevelBtn.addEventListener("click", goToNextLevel);
  elements.highscoresBtn.addEventListener("click", showHighscores);
  elements.closeHighscoresBtn.addEventListener("click", closeHighscores);
  
  // Реклама
  elements.rewardedAdBtn.addEventListener('click', () => showRewardedAd(addExtraLife));
  elements.gameRewardedAdBtn.addEventListener('click', () => showRewardedAd(addExtraLife));
  elements.gameoverRewardedAdBtn.addEventListener('click', () => showRewardedAd(continueAfterGameOver));
  
  // Экран победы
  document.getElementById('win-save-btn').addEventListener('click', () => closeWinScreen(true));
  document.getElementById('win-skip-btn').addEventListener('click', () => closeWinScreen(false));
  
  // Свайп-контролы
  setupSwipeControls();
}

function setupSwipeControls() {
  elements.gameArea.addEventListener('touchstart', handleTouchStart, { passive: false });
  elements.gameArea.addEventListener('touchmove', handleTouchMove, { passive: false });
  elements.gameArea.addEventListener('touchend', handleTouchEnd);
  
  elements.gameArea.addEventListener('mousedown', handleMouseDown);
  elements.gameArea.addEventListener('mousemove', handleMouseMove);
  elements.gameArea.addEventListener('mouseup', handleMouseUp);
  elements.gameArea.addEventListener('mouseleave', handleMouseUp);
}

function handleTouchStart(e) {
  e.preventDefault();
  const touch = e.touches[0];
  startSwipe({ clientX: touch.clientX, clientY: touch.clientY });
}

function handleTouchMove(e) {
  e.preventDefault();
  const touch = e.touches[0];
  continueSwipe({ clientX: touch.clientX, clientY: touch.clientY });
}

function handleTouchEnd(e) {
  e.preventDefault();
  endSwipe();
}

function handleMouseDown(e) {
  e.preventDefault();
  startSwipe({ clientX: e.clientX, clientY: e.clientY });
}

function handleMouseMove(e) {
  e.preventDefault();
  if (isSwiping) {
    continueSwipe({ clientX: e.clientX, clientY: e.clientY });
  }
}

function handleMouseUp(e) {
  e.preventDefault();
  endSwipe();
}

// Инициализация звуков
function initSounds() {
  Object.values(audioElements).forEach(audio => {
    audio.volume = 0.5;
    audio.preload = 'auto';
  });
  
  audioElements.heartbeatSound.loop = true;
  audioElements.backgroundMusic.loop = true;
}

// Управление звуком
function playSound(soundElement) {
  if (!gameState.soundEnabled || !soundElement) return;
  
  try {
    soundElement.currentTime = 0;
    const playPromise = soundElement.play();
    if (playPromise !== undefined) {
      playPromise.catch(error => console.log('Audio play error:', error));
    }
  } catch (error) {
    console.log('Audio play exception:', error);
  }
}

function stopSound(soundElement) {
  if (!soundElement) return;
  soundElement.pause();
  soundElement.currentTime = 0;
}

function createSoundControls() {
  const soundToggle = document.getElementById('sound-toggle');
  const musicToggle = document.getElementById('music-toggle');
  
  soundToggle.addEventListener('click', toggleSound);
  musicToggle.addEventListener('click', toggleMusic);
}

function toggleSound() {
  gameState.soundEnabled = !gameState.soundEnabled;
  const soundIcon = document.getElementById('sound-toggle');
  soundIcon.textContent = gameState.soundEnabled ? '🔊' : '🔇';
  
  if (!gameState.soundEnabled) {
    stopSound(audioElements.tickSound);
    stopSound(audioElements.heartbeatSound);
    gameState.heartbeatPlaying = false;
  }
  
  // Сохраняем настройку
  localStorage.setItem('soundEnabled', gameState.soundEnabled);
}

function toggleMusic() {
  gameState.musicEnabled = !gameState.musicEnabled;
  const musicIcon = document.getElementById('music-toggle');
  musicIcon.textContent = gameState.musicEnabled ? '🎵' : '🎵❌';
  
  if (gameState.musicEnabled) {
    audioElements.backgroundMusic.volume = 0.3;
    if (!shouldPauseMusic()) {
      audioElements.backgroundMusic.play().catch(e => console.log('Music play error:', e));
    }
  } else {
    audioElements.backgroundMusic.pause();
  }
  
  // Сохраняем настройку
  localStorage.setItem('musicEnabled', gameState.musicEnabled);
}

// Инициализация пазла
function initializePuzzle() {
  elements.puzzleGrid.innerHTML = '';
  gameState.collectedPieces = 0;
  gameState.currentTargetIndex = 0;
  gameState.wrongGreenCuts = 0;
  
  const totalPieces = levelConfig[gameState.currentLevel].pieces;
  gameState.currentLevelEmojis = [];
  
  for (let i = 0; i < totalPieces; i++) {
    gameState.currentLevelEmojis.push(puzzleEmojis[i % puzzleEmojis.length]);
  }
  
  for (let i = 0; i < totalPieces; i++) {
    const piece = document.createElement('div');
    piece.className = 'puzzle-piece';
    piece.dataset.index = i;
    piece.dataset.emoji = gameState.currentLevelEmojis[i];
    piece.textContent = gameState.currentLevelEmojis[i];
    elements.puzzleGrid.appendChild(piece);
  }
  
  updateTargetEmoji();
  resetCombo();
}

function updateTargetEmoji() {
  if (gameState.currentTargetIndex < gameState.currentLevelEmojis.length) {
    elements.targetEmojiDisplay.textContent = gameState.currentLevelEmojis[gameState.currentTargetIndex];
    
    document.querySelectorAll('.puzzle-piece').forEach(piece => {
      piece.classList.remove('current');
    });
    
    const currentPiece = document.querySelector(`.puzzle-piece[data-index="${gameState.currentTargetIndex}"]`);
    if (currentPiece) {
      currentPiece.classList.add('current');
    }
  }
}

// Комбо-система
function addCombo() {
  gameState.combo++;
  
  if (gameState.combo >= 3) {
    gameState.comboMultiplier = Math.min(5, Math.floor(gameState.combo / 3) + 1);
    showComboEffect();
  }
  
  updateComboDisplay();
  
  if (gameState.comboTimeout) clearTimeout(gameState.comboTimeout);
  gameState.comboTimeout = setTimeout(() => {
    gameState.combo = 0;
    gameState.comboMultiplier = 1;
    updateComboDisplay();
  }, 5000);
}

function resetCombo() {
  gameState.combo = 0;
  gameState.comboMultiplier = 1;
  updateComboDisplay();
}

function showComboEffect() {
  const comboDisplay = document.createElement('div');
  comboDisplay.className = 'combo-indicator';
  comboDisplay.textContent = `COMBO x${gameState.comboMultiplier}!`;
  document.body.appendChild(comboDisplay);
  
  setTimeout(() => {
    if (comboDisplay.parentNode) {
      comboDisplay.parentNode.removeChild(comboDisplay);
    }
  }, 1000);
}

function updateComboDisplay() {
  let comboIndicator = document.getElementById('combo-indicator');
  
  if (gameState.combo >= 3) {
    if (!comboIndicator) {
      comboIndicator = document.createElement('div');
      comboIndicator.id = 'combo-indicator';
      comboIndicator.className = 'combo-indicator';
      comboIndicator.textContent = `COMBO x${gameState.comboMultiplier}`;
      document.body.appendChild(comboIndicator);
    }
    comboIndicator.style.display = 'block';
  } else if (comboIndicator) {
    comboIndicator.style.display = 'none';
  }
}

// Обновление интерфейса
function updateMissedCounter() {
  const maxMissed = levelConfig[gameState.currentLevel].maxMissed;
  elements.missedCounterDisplay.innerHTML = `⚠️ <span>${gameState.consecutiveMissed}/${maxMissed}</span>`;
  
  if (gameState.consecutiveMissed >= maxMissed) {
    loseLife();
    gameState.consecutiveMissed = 0;
    updateMissedCounter();
  }
}

function updateLivesDisplay() {
  let hearts = '';
  for (let i = 0; i < gameState.lives; i++) {
    hearts += '❤️ ';
  }
  elements.livesDisplay.textContent = hearts;
}

function updateScoreDisplay() {
  elements.scoreDisplay.textContent = `🎯 ${gameState.score}`;
}

function updateLevelDisplay() {
  elements.levelDisplay.textContent = `📊 ${gameState.currentLevel}/5`;
}

// Игровая логика
function addPuzzlePiece() {
  if (gameState.collectedPieces < levelConfig[gameState.currentLevel].pieces) {
    const pieces = document.querySelectorAll('.puzzle-piece');
    pieces[gameState.collectedPieces].classList.add('collected');
    gameState.collectedPieces++;
    gameState.currentTargetIndex++;
    
    addCombo();
    playSound(audioElements.collectSound);
    
    if (gameState.collectedPieces >= levelConfig[gameState.currentLevel].pieces) {
      completeLevel();
    }
    
    updateTargetEmoji();
  }
}

function removePuzzlePiece() {
  if (gameState.collectedPieces > 0) {
    const pieces = document.querySelectorAll('.puzzle-piece');
    gameState.collectedPieces--;
    gameState.currentTargetIndex--;
    pieces[gameState.collectedPieces].classList.remove('collected');
    
    resetCombo();
    showWarningMessage(getTranslation('wrong_edits_warning'));
    
    updateTargetEmoji();
  }
}

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

function loseLife() {
  gameState.lives--;
  updateLivesDisplay();
  
  resetCombo();
  playSound(audioElements.wrongSound);
  
  elements.gameArea.style.animation = 'shakeError 0.6s ease-in-out';
  setTimeout(() => {
    elements.gameArea.style.animation = '';
  }, 600);
  
  if (gameState.lives <= 0) {
    endGame(false);
  }
}

// Управление игрой
function startGameFromMenu() {
  hideAllScreens();
  elements.gameInterface.classList.remove('hidden');
  startGame();
}

function startGame() {
  if (gameState.gameRunning) return;
  
  gameState.gameRunning = true;
  gameState.gamePaused = false;
  gameState.score = 0;
  gameState.consecutiveMissed = 0;
  gameState.missedBadFeedbacks = 0;
  gameState.wrongGreenCuts = 0;
  
  updateScoreDisplay();
  updateMissedCounter();
  updateLivesDisplay();
  resetCombo();
  
  elements.gameArea.innerHTML = '';
  if (swipeLine) {
    swipeLine.remove();
  }
  swipeLine = createSwipeLine();
  
  const spawnSpeed = levelConfig[gameState.currentLevel].speed;
  spawnInterval = setInterval(spawnFeedback, spawnSpeed);
  forcedSpawnInterval = setInterval(spawnNeededFeedback, 6000);
  
  startTimer();
  
  // Музыка продолжает играть, только меняем громкость
  if (gameState.musicEnabled) {
    audioElements.backgroundMusic.volume = 0.2;
    if (!shouldPauseMusic()) {
      audioElements.backgroundMusic.play().catch(e => console.log('Music play error:', e));
    }
  }
}

function pauseGame() {
  if (!gameState.gameRunning) return;
  
  gameState.gamePaused = true;
  elements.pauseScreen.classList.remove('hidden');
  
  stopSound(audioElements.tickSound);
  stopSound(audioElements.heartbeatSound);
  gameState.heartbeatPlaying = false;
  
  document.querySelectorAll('.feedback').forEach(fb => {
    fb.style.animationPlayState = 'paused';
  });
}

function resumeGame() {
  gameState.gamePaused = false;
  elements.pauseScreen.classList.add('hidden');
  
  if (timeLeft <= 15 && gameState.gameRunning) {
    playSound(audioElements.heartbeatSound);
    gameState.heartbeatPlaying = true;
  }
  
  // Возобновляем музыку если нужно
  if (gameState.musicEnabled && !shouldPauseMusic()) {
    audioElements.backgroundMusic.play().catch(e => console.log('Music resume error:', e));
  }
  
  document.querySelectorAll('.feedback').forEach(fb => {
    fb.style.animationPlayState = 'running';
  });
}

function restartGame() {
  resetGame();
  startGame();
}

function completeLevel() {
  gameState.gameRunning = false;
  clearInterval(spawnInterval);
  clearInterval(forcedSpawnInterval);
  clearInterval(timerInterval);
  
  stopSound(audioElements.tickSound);
  stopSound(audioElements.heartbeatSound);
  gameState.heartbeatPlaying = false;
  
  playSound(audioElements.levelCompleteSound);
  
  if (gameState.missedBadFeedbacks === 0 && gameState.lives < gameState.maxLives) {
    gameState.lives++;
    updateLivesDisplay();
  }
  
  if (gameState.comboMultiplier > 1) {
    const comboBonus = 100 * gameState.comboMultiplier;
    gameState.score += comboBonus;
    updateScoreDisplay();
  }
  
  showLevelCompleteScreen();
}

function showLevelCompleteScreen() {
  elements.completedLevelDisplay.textContent = gameState.currentLevel;
  elements.levelMessageDisplay.textContent = getLevelMessage(gameState.currentLevel);
  elements.levelCompleteScreen.classList.remove('hidden');
}

function getLevelMessage(level) {
  const messages = {
    1: getTranslation('level1_message'),
    2: getTranslation('level2_message'),
    3: getTranslation('level3_message'),
    4: getTranslation('level4_message'),
    5: getTranslation('level5_message')
  };
  return messages[level] || messages[1];
}

function goToNextLevel() {
  elements.levelCompleteScreen.classList.add('hidden');
  
  if (gameState.currentLevel < 5) {
    gameState.currentLevel++;
    updateLevelDisplay();
    
    setTimeout(() => {
      initializePuzzle();
      startGame();
    }, 500);
  } else {
    endGame(true);
  }
}

function endGame(isWin) {
  gameState.gameRunning = false;
  gameState.gamePaused = false;
  clearInterval(spawnInterval);
  clearInterval(forcedSpawnInterval);
  clearInterval(timerInterval);
  
  stopSound(audioElements.tickSound);
  stopSound(audioElements.heartbeatSound);
  gameState.heartbeatPlaying = false;
  
  if (isWin) {
    playSound(audioElements.levelCompleteSound);
  } else {
    playSound(audioElements.gameOverSound);
  }
  
  if (isWin || gameState.score > 0) {
    saveToLeaderboard(gameState.score);
  }
  
  if (!isWin) {
    document.body.classList.add('game-over');
    elements.gameOverScreen.classList.remove('hidden');
    elements.finalLevelDisplay.textContent = gameState.currentLevel;
    elements.finalScoreDisplay.textContent = gameState.score;
  } else {
    showWinScreen(gameState.score);
  }
}

function returnToMenu() {
  resetGame();
  hideAllScreens();
  elements.mainMenu.classList.remove('hidden');
  
  // В меню музыка играет с нормальной громкостью
  if (gameState.musicEnabled) {
    audioElements.backgroundMusic.volume = 0.3;
    if (!shouldPauseMusic()) {
      audioElements.backgroundMusic.play().catch(e => console.log('Music play error:', e));
    }
  }
}

function resetGame() {
  gameState.gameRunning = false;
  gameState.gamePaused = false;
  clearInterval(spawnInterval);
  clearInterval(forcedSpawnInterval);
  clearInterval(timerInterval);
  
  stopSound(audioElements.tickSound);
  stopSound(audioElements.heartbeatSound);
  gameState.heartbeatPlaying = false;
  
  gameState.currentLevel = 1;
  gameState.lives = 2;
  gameState.score = 0;
  gameState.collectedPieces = 0;
  gameState.consecutiveMissed = 0;
  gameState.missedBadFeedbacks = 0;
  gameState.wrongGreenCuts = 0;
  gameState.currentLevelEmojis = [];
  gameState.currentTargetIndex = 0;
  gameState.combo = 0;
  gameState.comboMultiplier = 1;
  
  updateScoreDisplay();
  updateLevelDisplay();
  updateLivesDisplay();
  updateMissedCounter();
  updateComboDisplay();
  
  elements.gameArea.innerHTML = '';
  document.body.classList.remove('game-over');
  elements.gameOverScreen.classList.add('hidden');
  elements.pauseScreen.classList.add('hidden');
  elements.levelCompleteScreen.classList.add('hidden');
  
  initializePuzzle();
  if (swipeLine) {
    swipeLine.remove();
  }
  swipeLine = createSwipeLine();
}

// Таймер
function startTimer() {
  timeLeft = levelConfig[gameState.currentLevel].time;
  elements.timerDisplay.textContent = `⏱ ${timeLeft}`;
  
  if (timerInterval) {
    clearInterval(timerInterval);
  }
  
  timerInterval = setInterval(() => {
    if (!gameState.gamePaused && gameState.gameRunning) {
      timeLeft--;
      elements.timerDisplay.textContent = `⏱ ${timeLeft}`;
      
      if (timeLeft <= 15 && !gameState.heartbeatPlaying) {
        playSound(audioElements.heartbeatSound);
        gameState.heartbeatPlaying = true;
        audioElements.tickSound.volume = 0.6;
      } else if (timeLeft > 15) {
        const volume = 0.3 + (45 - timeLeft) * 0.015;
        audioElements.tickSound.volume = Math.min(0.6, volume);
        
        if (timeLeft % 2 === 0) {
          playSound(audioElements.tickSound);
        }
      }
      
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        stopSound(audioElements.tickSound);
        stopSound(audioElements.heartbeatSound);
        gameState.heartbeatPlaying = false;
        
        if (gameState.collectedPieces < levelConfig[gameState.currentLevel].pieces) {
          loseLife();
          if (gameState.lives > 0) {
            startGame();
          }
        } else {
          completeLevel();
        }
      }
    }
  }, 1000);
}

// Спавн правок
function spawnFeedback() {
  if (!gameState.gameRunning || gameState.gamePaused) return;

  const fb = document.createElement("div");
  
  let item;
  const randomValue = Math.random();
  const currentFeedbackPool = feedbackPool[gameState.language];
  
  if (randomValue < 0.6) {
    const goodFeedbacks = currentFeedbackPool.filter(fb => fb.type === "good");
    item = goodFeedbacks[Math.floor(Math.random() * goodFeedbacks.length)];
  } else {
    const badFeedbacks = currentFeedbackPool.filter(fb => fb.type === "bad");
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
  
  const gameAreaRect = elements.gameArea.getBoundingClientRect();
  const maxLeft = gameAreaRect.width - 110;
  const leftPosition = Math.random() * maxLeft;
  
  fb.style.left = leftPosition + "px";
  fb.style.top = "-50px";
  
  elements.gameArea.appendChild(fb);

  const lifetime = item.type === "good" ? 5000 : 4000;

  setTimeout(() => {
    if (fb.parentNode && !fb.dataset.sliced && !fb.dataset.collected) {
      if (item.type === "good") {
        gameState.score = Math.max(0, gameState.score - 2);
        updateScoreDisplay();
        resetCombo();
      } else if (item.type === "bad") {
        gameState.consecutiveMissed++;
        gameState.missedBadFeedbacks++;
        updateMissedCounter();
        resetCombo();
      }
      fb.parentNode.removeChild(fb);
    }
  }, lifetime);
}

function spawnNeededFeedback() {
  if (!gameState.gameRunning || gameState.gamePaused) return;
  
  const count = Math.random() < 0.5 ? 1 : 2;
  const currentFeedbackPool = feedbackPool[gameState.language];
  
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      if (!gameState.gameRunning || gameState.gamePaused) return;
      
      const fb = document.createElement("div");
      const targetEmoji = gameState.currentLevelEmojis[gameState.currentTargetIndex];
      
      const neededFeedback = currentFeedbackPool.find(f => 
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
      
      const gameAreaRect = elements.gameArea.getBoundingClientRect();
      const maxLeft = gameAreaRect.width - 110;
      const leftPosition = Math.random() * maxLeft;
      
      fb.style.left = leftPosition + "px";
      fb.style.top = "-50px";
      
      elements.gameArea.appendChild(fb);
      
      setTimeout(() => {
        if (fb.parentNode && !fb.dataset.sliced && !fb.dataset.collected) {
          gameState.score = Math.max(0, gameState.score - 2);
          updateScoreDisplay();
          resetCombo();
          fb.parentNode.removeChild(fb);
        }
      }, 5000);
      
    }, i * 500);
  }
}

// Обработка взаимодействий
function collectFeedback(fb, x, y) {
  if (fb.dataset.sliced || fb.dataset.collected) return;
  
  const feedbackEmoji = fb.dataset.emoji;
  const targetEmoji = gameState.currentLevelEmojis[gameState.currentTargetIndex];
  
  if (feedbackEmoji !== targetEmoji) {
    playSound(audioElements.wrongSound);
    fb.classList.add('shake-error');
    setTimeout(() => {
      fb.classList.remove('shake-error');
    }, 500);
    
    resetCombo();
    return;
  }
  
  fb.dataset.collected = true;
  
  const gameAreaRect = elements.gameArea.getBoundingClientRect();
  const relativeX = x - gameAreaRect.left;
  const relativeY = y - gameAreaRect.top;
  
  createCollectEffect(relativeX, relativeY);
  
  const puzzleRect = elements.puzzleGrid.getBoundingClientRect();
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
  
  gameState.wrongGreenCuts = 0;
  
  addPuzzlePiece();
  gameState.score += 15 * gameState.comboMultiplier;
  updateScoreDisplay();
  
  setTimeout(() => {
    if (fb.parentNode) {
      fb.parentNode.removeChild(fb);
    }
  }, 800);
}

function cutFeedback(fb, cutX, cutY, cutAngle) {
  if (fb.dataset.sliced || fb.dataset.collected) return;
  
  fb.dataset.sliced = true;
  const itemType = fb.dataset.type;
  
  playSound(audioElements.cutSound);
  
  createSmoke(cutX, cutY, cutAngle, 15);
  createExplosion(cutX, cutY, 12);
  
  setTimeout(() => {
    if (fb.parentNode) {
      fb.parentNode.removeChild(fb);
    }
  }, 50);
  
  if (itemType === "bad") {
    gameState.score += 10 * gameState.comboMultiplier;
    gameState.consecutiveMissed = 0;
    updateMissedCounter();
    
    gameState.wrongGreenCuts = 0;
    
    addCombo();
  } else if (itemType === "good") {
    const feedbackEmoji = fb.dataset.emoji;
    const targetEmoji = gameState.currentLevelEmojis[gameState.currentTargetIndex];
    
    if (feedbackEmoji === targetEmoji) {
      gameState.score = Math.max(0, gameState.score - 5);
      resetCombo();
      
      gameState.wrongGreenCuts++;
      
      if (gameState.wrongGreenCuts >= gameState.MAX_WRONG_GREEN_CUTS) {
        removePuzzlePiece();
        gameState.wrongGreenCuts = 0;
      }
    } else {
      gameState.score = Math.max(0, gameState.score - 2);
      resetCombo();
      
      gameState.wrongGreenCuts++;
      
      if (gameState.wrongGreenCuts >= gameState.MAX_WRONG_GREEN_CUTS) {
        removePuzzlePiece();
        gameState.wrongGreenCuts = 0;
      }
    }
  }
  
  updateScoreDisplay();
}

// Эффекты
function createSwipeLine() {
  const line = document.createElement('div');
  line.className = 'swipe-line';
  line.style.display = 'none';
  elements.gameArea.appendChild(line);
  return line;
}

function createTrailSphere(x, y) {
  const gameAreaRect = elements.gameArea.getBoundingClientRect();
  const relativeX = x - gameAreaRect.left;
  const relativeY = y - gameAreaRect.top;
  
  const sphere = document.createElement('div');
  sphere.className = 'trail-sphere';
  
  sphere.style.left = relativeX + 'px';
  sphere.style.top = relativeY + 'px';
  
  const size = 3 + Math.random() * 5;
  sphere.style.width = size + 'px';
  sphere.style.height = size + 'px';
  
  elements.gameArea.appendChild(sphere);
  
  setTimeout(() => {
    if (sphere.parentNode) {
      sphere.parentNode.removeChild(sphere);
    }
  }, 600);
}

function createSmoke(x, y, cutAngle, count = 15) {
  const gameAreaRect = elements.gameArea.getBoundingClientRect();
  const relativeX = x - gameAreaRect.left;
  const relativeY = y - gameAreaRect.top;
  
  for (let i = 0; i < count; i++) {
    const smoke = document.createElement('div');
    smoke.className = 'smoke-particle';
    
    const oppositeAngle = cutAngle + Math.PI;
    const spread = (Math.random() - 0.5) * Math.PI;
    const finalAngle = oppositeAngle + spread;
    
    const speed = 20 + Math.random() * 30;
    const distance = speed * (0.8 + Math.random() * 0.8);
    
    const tx = Math.cos(finalAngle) * distance;
    const ty = Math.sin(finalAngle) * distance;
    
    smoke.style.setProperty('--px', tx + 'px');
    smoke.style.setProperty('--py', ty + 'px');
    smoke.style.left = relativeX + 'px';
    smoke.style.top = relativeY + 'px';
    
    elements.gameArea.appendChild(smoke);
    
    setTimeout(() => {
      if (smoke.parentNode) {
        smoke.parentNode.removeChild(smoke);
      }
    }, 1200);
  }
}

function createExplosion(x, y, count = 12) {
  const gameAreaRect = elements.gameArea.getBoundingClientRect();
  const relativeX = x - gameAreaRect.left;
  const relativeY = y - gameAreaRect.top;
  
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.className = 'explosion-particle';
    
    const angle = Math.random() * Math.PI * 2;
    const speed = 50 + Math.random() * 100;
    const distance = speed * (0.7 + Math.random() * 0.6);
    
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance;
    
    particle.style.setProperty('--px', tx + 'px');
    particle.style.setProperty('--py', ty + 'px');
    particle.style.left = relativeX + 'px';
    particle.style.top = relativeY + 'px';
    
    elements.gameArea.appendChild(particle);
    
    setTimeout(() => {
      if (particle.parentNode) {
        particle.parentNode.removeChild(particle);
      }
    }, 800);
  }
}

function createCollectEffect(x, y) {
  const effect = document.createElement('div');
  effect.className = 'collect-effect';
  effect.style.left = x + 'px';
  effect.style.top = y + 'px';
  
  elements.gameArea.appendChild(effect);
  
  setTimeout(() => {
    if (effect.parentNode) {
      effect.parentNode.removeChild(effect);
    }
  }, 500);
}

// Свайп-контролы
function startSwipe(e) {
  if (!gameState.gameRunning || gameState.gamePaused) return;
  
  isSwiping = true;
  swipeStartPoint = { x: e.clientX, y: e.clientY };
  trailPoints = [swipeStartPoint];
  if (swipeLine) {
    swipeLine.style.display = 'block';
    updateSwipeLine(e.clientX, e.clientY, e.clientX, e.clientY);
  }
}

function continueSwipe(e) {
  if (!isSwiping || !swipeStartPoint || gameState.gamePaused || !swipeLine) return;
  
  const currentPoint = { x: e.clientX, y: e.clientY };
  
  trailPoints.push(currentPoint);
  
  if (trailPoints.length >= 2) {
    const lastPoint = trailPoints[trailPoints.length - 2];
    const currentPoint = trailPoints[trailPoints.length - 1];
    
    const steps = 2;
    for (let i = 0; i < steps; i++) {
      const t = i / steps;
      const x = lastPoint.x + (currentPoint.x - lastPoint.x) * t;
      const y = lastPoint.y + (currentPoint.y - lastPoint.y) * t;
      createTrailSphere(x, y);
    }
  }
  
  if (trailPoints.length > 6) {
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

function updateSwipeLine(x1, y1, x2, y2) {
  const gameAreaRect = elements.gameArea.getBoundingClientRect();
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

function distance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function angle(x1, y1, x2, y2) {
  return Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
}

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

// Вспомогательные функции
function hideAllScreens() {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.add('hidden');
  });
  const winScreen = document.getElementById('win-screen');
  if (winScreen) winScreen.classList.add('hidden');
}

function showRules() {
  hideAllScreens();
  elements.rulesScreen.classList.remove('hidden');
}

function closeRules() {
  hideAllScreens();
  elements.mainMenu.classList.remove('hidden');
}

function showHighscores() {
  updateHighscoresDisplay();
  hideAllScreens();
  elements.highscoresScreen.classList.remove('hidden');
}

function closeHighscores() {
  hideAllScreens();
  if (gameState.gameRunning) {
    elements.gameInterface.classList.remove('hidden');
  } else {
    elements.mainMenu.classList.remove('hidden');
  }
}

// Экран победы (вместо alert)
function showWinScreen(score) {
  const screen = document.getElementById('win-screen');
  document.getElementById('win-final-score').textContent = score;
  applyLanguage();
  screen.classList.remove('hidden');
}

function closeWinScreen(saveName) {
  const screen = document.getElementById('win-screen');
  const nameInput = document.getElementById('win-name-input');
  const name = (nameInput ? nameInput.value.trim() : '') || getTranslation('default_player_name');
  
  if (saveName && name) {
    saveHighscoreEntry(name, gameState.score, gameState.currentLevel);
  }
  
  screen.classList.add('hidden');
  returnToMenu();
}

// Рекорды
function saveHighscoreEntry(name, score, level) {
  const highscores = JSON.parse(localStorage.getItem('cutFeedbackHighscores')) || [];
  highscores.push({
    name: name.substring(0, 15),
    score: score,
    level: level,
    date: new Date().toLocaleDateString()
  });
  highscores.sort((a, b) => b.score - a.score);
  const topHighscores = highscores.slice(0, 10);
  localStorage.setItem('cutFeedbackHighscores', JSON.stringify(topHighscores));
  updateHighscoresDisplay();
}

function saveHighscore(score, level) {
  const promptText = getTranslation('congratulations');
  const defaultName = getTranslation('default_player_name');
  const name = prompt(promptText, defaultName);
  if (name) {
    saveHighscoreEntry(name.substring(0, 15), score, level);
  }
}

function updateHighscoresDisplay() {
  const highscores = JSON.parse(localStorage.getItem('cutFeedbackHighscores')) || [];
  elements.highscoresList.innerHTML = '';
  
  if (highscores.length === 0) {
    const noRecordsText = gameState.language === 'ru' ? 'Пока нет рекордов' : 'No records yet';
    elements.highscoresList.innerHTML = `<div class="highscore-item" style="justify-content: center;">${noRecordsText}</div>`;
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
    
    elements.highscoresList.appendChild(item);
  });
}

// Yandex SDK
function initYandexSDK() {
  if (typeof YaGames !== 'undefined') {
    YaGames.init().then(ysdk => {
      yandexSDK = ysdk;
      isYandexPlatform = true;
      console.log('Yandex SDK initialized');
      
      // Автоопределение языка из SDK
      try {
        const sdkLanguage = ysdk.environment.i18n.lang;
        if (sdkLanguage && (sdkLanguage === 'ru' || sdkLanguage.startsWith('ru'))) {
          gameState.language = 'ru';
        } else {
          gameState.language = 'en';
        }
        applyLanguage();
      } catch (e) {
        console.log('Language detection from SDK failed, using saved language');
      }
      
    }).catch(error => {
      console.log('Yandex SDK init error:', error);
      isYandexPlatform = false;
    });
  } else {
    console.log('Yandex SDK not available');
    isYandexPlatform = false;
  }
}

function showRewardedAd(onRewardedCallback) {
  if (!isYandexPlatform) {
    // Для тестирования без SDK
    onRewardedCallback();
    return;
  }
  
  try {
    isShowingAd = true;
    
    // Сохраняем состояние игры перед показом рекламы
    gameState.savedGameState = {
      gameRunning: gameState.gameRunning,
      gamePaused: gameState.gamePaused,
      score: gameState.score,
      currentLevel: gameState.currentLevel,
      collectedPieces: gameState.collectedPieces,
      lives: gameState.lives,
      timeLeft: timeLeft
    };
    
    // При показе рекламы ставим музыку на паузу
    if (gameState.musicEnabled) {
      audioElements.backgroundMusic.pause();
    }
    pauseAllAudioExceptMusic();
    
    yandexSDK.adv.showRewardedVideo({
      callbacks: {
        onOpen: () => {
          console.log('Rewarded ad opened');
          isShowingAd = true;
          if (gameState.musicEnabled) {
            audioElements.backgroundMusic.pause();
          }
          pauseAllAudioExceptMusic();
          gameState.gamePaused = true;
        },
        onClose: () => {
          console.log('Rewarded ad closed');
          isShowingAd = false;
          // После закрытия рекламы возобновляем музыку если нужно
          if (gameState.musicEnabled && !shouldPauseMusic()) {
            audioElements.backgroundMusic.play().catch(e => console.log('Music resume error:', e));
          }
          gameState.gamePaused = false;
        },
        onError: (error) => {
          console.log('Rewarded ad error:', error);
          isShowingAd = false;
          if (gameState.musicEnabled && !shouldPauseMusic()) {
            audioElements.backgroundMusic.play().catch(e => console.log('Music resume error:', e));
          }
          gameState.gamePaused = false;
          showNotification(getTranslation('ad_error'));
        },
        onRewarded: () => {
          console.log('Rewarded ad completed');
          isShowingAd = false;
          onRewardedCallback();
        }
      }
    });
  } catch (error) {
    console.log('Rewarded ad error:', error);
    isShowingAd = false;
    showNotification(getTranslation('ad_unavailable'));
    if (gameState.musicEnabled && !shouldPauseMusic()) {
      audioElements.backgroundMusic.play().catch(e => console.log('Music resume error:', e));
    }
    gameState.gamePaused = false;
  }
}

function addExtraLife() {
  if (gameState.lives < gameState.maxLives) {
    gameState.lives++;
    updateLivesDisplay();
    showNotification(getTranslation('extra_life_received'));
    playSound(audioElements.collectSound);
  } else {
    showNotification(getTranslation('max_lives'));
  }
}

function continueAfterGameOver() {
  if (gameState.lives < gameState.maxLives) {
    gameState.lives++;
  }
  
  // Восстанавливаем состояние игры
  if (gameState.savedGameState) {
    gameState.gameRunning = gameState.savedGameState.gameRunning;
    gameState.gamePaused = gameState.savedGameState.gamePaused;
    gameState.score = gameState.savedGameState.score;
    gameState.currentLevel = gameState.savedGameState.currentLevel;
    gameState.collectedPieces = gameState.savedGameState.collectedPieces;
    timeLeft = gameState.savedGameState.timeLeft;
    
    updateScoreDisplay();
    updateLevelDisplay();
    updateLivesDisplay();
    updateMissedCounter();
    
    elements.gameOverScreen.classList.add('hidden');
    
    // Продолжаем игру
    if (gameState.gameRunning) {
      resumeGame();
    }
    
    showNotification(getTranslation('continue_playing'));
    playSound(audioElements.collectSound);
  }
}

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

function saveToLeaderboard(scoreValue) {
  if (!isYandexPlatform) return;
  
  try {
    yandexSDK.getLeaderboards().then(leaderboards => {
      leaderboards.setLeaderboardScore('cut_feedback_leaderboard', scoreValue);
    });
  } catch (error) {
    console.log('Save to leaderboard error:', error);
  }
}

// Вспомогательные функции
function preventSelectionAndContextMenu() {
  document.addEventListener('selectstart', (e) => e.preventDefault());
  document.addEventListener('contextmenu', (e) => e.preventDefault());
  document.addEventListener('dragstart', (e) => e.preventDefault());
  
  // Предотвращение масштабирования на мобильных устройствах
  document.addEventListener('touchstart', function(e) {
    if (e.touches.length > 1) {
      e.preventDefault();
    }
  }, { passive: false });
  
  let lastTouchEnd = 0;
  document.addEventListener('touchend', function(e) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
      e.preventDefault();
    }
    lastTouchEnd = now;
  }, false);
  
  document.body.style.userSelect = 'none';
  document.body.style.webkitUserSelect = 'none';
}

function setupPageVisibilityHandlers() {
  document.addEventListener('visibilitychange', handleVisibilityChange);
  window.addEventListener('blur', handleWindowBlur);
  window.addEventListener('focus', handleWindowFocus);
}

function handleVisibilityChange() {
  if (document.hidden) {
    pauseAllAudio();
    if (gameState.gameRunning && !gameState.gamePaused) {
      pauseGame();
    }
  } else {
    // При возвращении на страницу возобновляем только музыку
    // если она включена и не должна быть на паузе
    if (gameState.musicEnabled && !shouldPauseMusic()) {
      audioElements.backgroundMusic.play().catch(e => console.log('Music resume error:', e));
    }
  }
}

function handleWindowBlur() {
  // При потере фокуса паузим только звуковые эффекты, музыку оставляем
  pauseAllAudioExceptMusic();
}

function handleWindowFocus() {
  if (!document.hidden) {
    // При возвращении фокуса возобновляем только музыку если нужно
    if (gameState.musicEnabled && !shouldPauseMusic()) {
      audioElements.backgroundMusic.play().catch(e => console.log('Music resume error:', e));
    }
  }
}

function pauseAllAudio() {
  Object.values(audioElements).forEach(audio => {
    audio.pause();
  });
}

function resumeAllAudio() {
  if (gameState.soundEnabled || gameState.musicEnabled) {
    Object.values(audioElements).forEach(audio => {
      if ((gameState.musicEnabled && audio === audioElements.backgroundMusic) || 
          (gameState.soundEnabled && audio !== audioElements.backgroundMusic)) {
        audio.play().catch(e => console.log('Audio resume error:', e));
      }
    });
  }
}

// Запуск игры
window.addEventListener('load', initGame);
window.addEventListener('resize', function() {
  // Пересчитываем размеры при изменении размера окна
  if (gameState.gameRunning) {
    // Можно добавить логику пересчета позиций элементов
  }
});

// Предотвращение поведения по умолчанию для жестов
document.addEventListener('gesturestart', function(e) {
  e.preventDefault();
});
document.addEventListener('gesturechange', function(e) {
  e.preventDefault();
});
document.addEventListener('gestureend', function(e) {
  e.preventDefault();
});