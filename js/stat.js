'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var BAR_GAP = 50;
var FONT_GAP = 20;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];
  
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
	  maxElement = arr[i];
	}  
  }
  
  return maxElement;
};

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + BAR_GAP, CLOUD_Y + GAP + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + BAR_GAP, CLOUD_Y + GAP + FONT_GAP * 2); 
  
  var maxTime = getMaxElement(times);

  var getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };
    
  for (var i = 0; i < names.length; i++) {
	var heightOfRect = times[i] / maxTime * BAR_HEIGHT;
	
	ctx.fillStyle = '#000';
	ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - GAP - 
	FONT_GAP - heightOfRect - GAP);
	
	names[i] === 'Вы' ? ctx.fillStyle = 'rgba(255, 0, 0, 1)' : ctx.fillStyle = 'rgb(0, 0, ' + getRandomInt(1, 256) + ')';
	
	ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - GAP - FONT_GAP - heightOfRect,
	BAR_WIDTH, heightOfRect);
	
	ctx.fillStyle = '#000';
	ctx.fillText(names[i], CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - GAP);
  }
};