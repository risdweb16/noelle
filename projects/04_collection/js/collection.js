////FOR PAGE 1COLORING PAGE https://jsfiddle.net/wkgq0h77/

window.onload = function(){
  canvas = document.getElementById('canvas'),
  ctx = canvas.getContext('2d'),
  isDown = false,
  radius = 15,
  pi2 = Math.PI * 2,
  img = new Image;

  /// load top image backgroud is set with CSS, se CSS corner)
  img.onload = start;
  img.src = 'images/map.png';
}

/// start: setup graphics, comp mode and handlers
function start() {
  ctx.drawImage(this, -.1, -.1, canvas.width, canvas.height);

  /// key, this will earse where next drawing is drawn
  ctx.globalCompositeOperation = 'destination-out';

  canvas.onmousedown = handleMouseDown;
  canvas.onmousemove = handleMouseMove;
  window.onmouseup = handleMouseUp;
}

function handleMouseDown(e) {
  isDown = true;
  var pos = getXY(e);
  erase(pos.x, pos.y);
}

function handleMouseUp(e) {
  isDown = false;
}

function handleMouseMove(e) {
  if (!isDown) return;
  var pos = getXY(e);
  erase(pos.x, pos.y);
}

function getXY(e) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  }
}

/// simply draws an arc in any color - due to comp mode
/// it will erase rather than draw
function erase(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, pi2);
  ctx.fill();
}
