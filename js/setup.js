'use strict';
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COLOREYES = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var COLORCOATS = ['black', 'red', 'blue', 'yellow', 'green'];
var AMOUNTWIZARD = 4;
var setupElement = document.querySelector('.setup');
var setupSimilarElement = document.querySelector('.setup-similar');
var templatElement = document.querySelector('#similar-wizard-template').content;
var wizardTemplatElement = templatElement.querySelector('.setup-similar-item');
var setupSimilarListElement = setupSimilarElement.querySelector('.setup-similar-list');
var fragment = document.createDocumentFragment();
var wizards = [];
var valueWizards = [];
var getRandomIndex = function (max) {
  return Math.floor(Math.random() * max);
};
var createName = function (numFirst, numSecond) {
  return NAMES[numFirst] + ' ' + SURNAMES[numSecond];
};
var createWizards = function (eyes, coats, name) {
  var element = wizardTemplatElement.cloneNode(true);
  element.querySelector('.wizard-eyes').style.fill = eyes;
  element.querySelector('.wizard-coat').style.fill = coats;
  element.querySelector('.setup-similar-label').textContent = name;
  return element;
};
var createWizardValue = function (index) {
  for (var j = 0; j < index; j++) {
    var textNameWizards = getRandomIndex(NAMES.length);
    var textNameWizardsSecond = getRandomIndex(NAMES.length);
    var colorEyasWizards = getRandomIndex(COLOREYES.length);
    var colorCoatsWizards = getRandomIndex(COLORCOATS.length);
    var objectWizards = {};
    objectWizards = {
      eyesColor: COLOREYES[colorEyasWizards],
      coatColor: COLORCOATS[colorCoatsWizards],
      name: createName(textNameWizards, textNameWizardsSecond)
    };
    valueWizards.push(objectWizards);
  }
};
createWizardValue(AMOUNTWIZARD);
for (var i = 0; i < AMOUNTWIZARD; i++) {
  var newWizard = createWizards(valueWizards[i].eyesColor, valueWizards[i].coatColor, valueWizards[i].name);
  wizards.push(newWizard);
  fragment.appendChild(wizards[i]);
}
setupSimilarListElement.appendChild(fragment);
setupElement.classList.remove('hidden');
setupSimilarElement.classList.remove('hidden');
