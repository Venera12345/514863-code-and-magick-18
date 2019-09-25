'use strict';
var CLOUSE_WIDTH = 420;
var CLOUSE_HEIGHT = 270;
var WIDTH_COLUMN = 40;
var MAXHIEGHT_COLUMN = 150;
var DISTANCE = 50;
var TEXT_Y_NAME = 270;
var CLOUSE_X = 100;
var CLOUSE_Y = 10;
var TEXT_X = 120;
var TEXT_Y = 30;
var creatYColumn = function (hieghtColumn) {
  return CLOUSE_HEIGHT - hieghtColumn - CLOUSE_Y - CLOUSE_Y;
};
var creatXColumn = function (xItem) {
  return xItem + WIDTH_COLUMN + DISTANCE;
};
var creatHeightColumn = function (maxValue, timeColumnNumber) {
  return MAXHIEGHT_COLUMN * timeColumnNumber / maxValue;
};
var creatRect = function (ctx, color, x, y, width, height) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};
var creatText = function (ctx, color, name, x, y) {
  ctx.font = '16px PT Mono';
  ctx.fillStyle = color;
  ctx.fillText(name, x, y);
};
window.renderStatistics = function (ctx, names, times) {
  creatRect(ctx, 'rgba(0, 0, 0, 0.7)', CLOUSE_X + CLOUSE_Y, CLOUSE_Y + CLOUSE_Y, CLOUSE_WIDTH, CLOUSE_HEIGHT);
  creatRect(ctx, 'white', CLOUSE_X, CLOUSE_Y, CLOUSE_WIDTH, CLOUSE_HEIGHT);
  creatText(ctx, '#000000', 'Ура вы победили!', TEXT_X, TEXT_Y);
  creatText(ctx, '#000000', 'Список результатов:', TEXT_X, TEXT_Y + CLOUSE_Y + CLOUSE_Y);
  var columnX = 140;
  var max = Math.round(times[0]);

  for (var i = 0; i < times.length; i++) {
    if (max < Math.round(times[i])) {
      max = Math.round(times[i]);
    }
  }
  var colorStyle;
  for (var j = 0; j < times.length; j++) {
    if (names[j] === 'Вы') {
      colorStyle = 'rgba(255, 0, 0, 1)';
    } else {
      colorStyle = 'rgba(0, 0, 153,' + Math.random() + ')';
    }
    creatRect(ctx, colorStyle, columnX, creatYColumn(creatHeightColumn(max, Math.round(times[j]))), WIDTH_COLUMN, creatHeightColumn(max, Math.round(times[j])));
    creatText(ctx, 'black', names[j], columnX, TEXT_Y_NAME);
    creatText(ctx, 'black', Math.round(times[j]), columnX, creatYColumn(creatHeightColumn(max, Math.round(times[j]))) - CLOUSE_Y);
    columnX = creatXColumn(columnX);
  }
};
