function() {
var TIMEOUT_IN_SECS = 3 * 60;
var TEMPLATE = '<h1><span id="timer-minutes">00</span>:<span id="timer-seconds">00</span></h1>';
var QUOTES = ['Любишь ты жизнь? Тогда не теряй времени; ибо время — ткань, из которой состоит жизнь.',
'Каждое потерянное мгновение — потерянное дело, потерянная польза.',
'Что ты делаешь сейчас? Это приближает тебя к достижению целей?',
'Время — деньги.',
'Если хочешь иметь досуг, не теряй времени даром.',
'Мудрое распределение времени есть основа для деятельности.',
'Время — это простор для развития способностей...',
'Хорошее употребление времени делает время еще более драгоценным.'];

// adds HTML tag to current page
var timerContainer = document.createElement('div');
timerContainer.setAttribute("style", "height: 100px;");
var bodyTag = document.body;
bodyTag.insertBefore(timerContainer, bodyTag.firstChild);
timerContainer.innerHTML = TEMPLATE;

function getTimestampInSecs(){
  var timestampInMilliseconds = new Date().getTime();
  return Math.round(timestampInMilliseconds/1000);
}

function padZero(number){
  return ("00" + String(number)).slice(-2);
}

var timestampOnStart = getTimestampInSecs();

function displayTimer(){
  var currentTimestamp = getTimestampInSecs();
  var secsGone = currentTimestamp - timestampOnStart;
  var secsLeft = Math.max(TIMEOUT_IN_SECS - secsGone, 0);

  var minutes = Math.floor(secsLeft / 60);
  var seconds = secsLeft - minutes * 60;

  document.getElementById('timer-minutes').innerHTML = padZero(minutes);
  document.getElementById('timer-seconds').innerHTML = padZero(seconds);
}
setInterval(displayTimer, 300);
}();