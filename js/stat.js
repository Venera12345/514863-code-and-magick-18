var CLOUSE_WIDTH = 420;
var CLOUSE_HEIGHT = 270;
var WIDTH_COLUMN = 40;
var MAXHIEGHT_COLUMN = 150;
var DISTANCE = 50;
var TEXT_Y_NAME = 270;

window.renderStatistics = function(ctx, names, times) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(110, 20, CLOUSE_WIDTH, CLOUSE_HEIGHT);
    ctx.fillStyle = 'white';
    ctx.fillRect(100, 10, CLOUSE_WIDTH, CLOUSE_HEIGHT);
    ctx.font = '16px PT Mono';
    ctx.fillStyle = '#000000';
    ctx.fillText('Ура вы победили!', 120, 30);
    ctx.fillText('Список результатов:', 120, 50);
    var XColumn = 140;
    var criatYColumn = function(hieghtColumn) {
        return CLOUSE_HEIGHT - hieghtColumn - 20;
    };
    var criatXColumn = function(XColumn) {
        return XColumn + WIDTH_COLUMN + DISTANCE;
    };
    var max = Math.round(times[0]);
    for (var i = 0; i < times.length; i++) {
        if (max < Math.round(times[i])) {
            max = Math.round(times[i]);
        }
    };
    var criatHeightColumn = function(max, timeColumnNumber) {
        return MAXHIEGHT_COLUMN * timeColumnNumber / max;
    };
    for (var i = 0; i < times.length; i++) {
        if (names[i] === 'Вы') {
            ctx.fillStyle = 'rgba(255, 0, 0, 1)';
        } else {
            ctx.fillStyle = 'rgba(0,0,153,' + Math.random() + ')';
        };
        ctx.fillRect(XColumn, criatYColumn(criatHeightColumn(max, Math.round(times[i]))), WIDTH_COLUMN, criatHeightColumn(max, Math.round(times[i])));
        ctx.fillStyle = 'black';
        ctx.fillText(names[i], XColumn, TEXT_Y_NAME);
        ctx.fillText(Math.round(times[i]), XColumn, criatYColumn(criatHeightColumn(max, Math.round(times[i]))) - 10);
        XColumn = criatXColumn(XColumn);
    };
};
