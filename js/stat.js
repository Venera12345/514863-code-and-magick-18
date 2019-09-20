var CLOUSE_WIDTH = 420;
var CLOUSE_HEIGHT = 170;
var WIDTH_COLUMN = 40;
var MAXHIEGHT_COLUMN = 150;
var DISTANCE = 50;

window.renderStatistics(function(ctx, names, times) {
    ctx.fillStyle = rgba(0, 0, 0, 0.7);
    ctx.fillRect(110, 20, WIDTH, HEIGHT);
    /* ctx.fillStyle = "white";
    ctx.fillRect(100, 10, WIDTH, HEIGHT);
    ctx.font = '16px PT Mono';
    ctx.fillStyle = "black";
    ctx.fillText('Ура вы победили!', 120, 30);
    ctx.fillText('Список результатов:', 120, 30);
     var max = times[0];
    var XColumn = 40;

    for (var i = 0; i < times.length; i++) {
        if (max < times[i]) {
            max = times[i];
        }
    }
    for (var i = 0; i < times.length; i++) {
        if (i === 0) {
            ctx.fillStyle = rgba(255, 0, 0, 1);
            ctx.fillRect(XColumn, criatYColumn(criatHeightColumn(max, times[i])), criatHeightColumn(max, times[i]), WIDTH_COLUMN);
        }
        ctx.fillStyle = 'blue';
        ctx.fillRect(criatXColumn(XColumn), criatYColumn(criatHeightColumn(max, times[i])), criatHeightColumn(max, times[i]), WIDTH_COLUMN);
        XColumn = criatXColumn(criatXColumn(XColumn));
    }
    var criatHeightColumn = function(max, timeColumnNumber) {
        return MAXHIEGHT_COLUMN * timeColumnNumber / max;
    }
    var criatYColumn = function(hieghtColumn) {
        return CLOUSE_HEIGHT - hieghtColumn;
    }
    var criatXText = function(XText) {
        return XText + WIDTH_COLUMN + DISTANCE;

    }
    var criatXColumn = function(XColumn) {
        return XColumn + WIDTH_COLUMN + DISTANCE;
    }


    ctx.fillText('Вы', 170, 30);
*/

})