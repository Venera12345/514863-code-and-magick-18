'use strict';
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COLOR_EYES = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var COLOR_COATS = ['black', 'red', 'blue', 'yellow', 'green'];
var COLOR_FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var AMOUNT_WIZARDS = 4;
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var setupElement = document.querySelector('.setup');
var setupOpenElement = document.querySelector('.setup-open');
var setupCloseElement = setupElement.querySelector('.setup-close');
var setupSimilarElement = document.querySelector('.setup-similar');
var setupUserNameElement = setupElement.querySelector('.setup-user-name');
var templateElement = document.querySelector('#similar-wizard-template').content;
var wizardTemplateElement = templateElement.querySelector('.setup-similar-item');
var setupSimilarListElement = setupSimilarElement.querySelector('.setup-similar-list');
var setupSubmitElement = setupElement.querySelector('.setup-submit');
var setupWizardEyesElement = setupElement.querySelector('.setup-wizard .wizard-eyes');
var setupWizardCoatElement = setupElement.querySelector('.setup-wizard .wizard-coat');
var setupWizardFireballElement = setupElement.querySelector('.setup-fireball-wrap');
var inputWizardFireballElement = setupElement.querySelector('input[name=fireball-color]');
var inputWizardCoatElement = setupElement.querySelector('input[name=coat-color]');
var inputWizardEyesElement = setupElement.querySelector('input[name=eyes-color]');

var fragment = document.createDocumentFragment();
var wizards = [];
var valueWizards = [];
var getRandomIndex = function (max) {
  return Math.floor(Math.random() * max);
};
var createName = function (numFirst, numSecond) {
  return NAMES[numFirst] + ' ' + SURNAMES[numSecond];
};
var createWizards = function (eyesColor, coatsColor, name) {
  var element = wizardTemplateElement.cloneNode(true);
  element.querySelector('.wizard-eyes').style.fill = eyesColor;
  element.querySelector('.wizard-coat').style.fill = coatsColor;
  element.querySelector('.setup-similar-label').textContent = name;
  return element;
};
var createWizardValue = function (index) {
  for (var j = 0; j < index; j++) {
    var textNameWizards = getRandomIndex(NAMES.length);
    var textNameWizardsSecond = getRandomIndex(NAMES.length);
    var colorEyasWizards = getRandomIndex(COLOR_EYES.length);
    var colorCoatsWizards = getRandomIndex(COLOR_COATS.length);
    var objectWizards = {};
    objectWizards = {
      wizardEyesColor: COLOR_EYES[colorEyasWizards],
      wizardCoatColor: COLOR_COATS[colorCoatsWizards],
      name: createName(textNameWizards, textNameWizardsSecond)
    };
    valueWizards.push(objectWizards);
  }
};
var onClickSetupCloseElement = function () {
  setupElement.classList.add('hidden');
  document.removeEventListener('keydown', onClickSetupCloseElement);
  setupCloseElement.removeEventListener('keydown', onClickSetupCloseElement);
};
var onClickSetupOpenElement = function () {
  setupElement.classList.remove('hidden');
  setupCloseElement.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      onClickSetupCloseElement();
    }
  });
  setupCloseElement.addEventListener('click', onClickSetupCloseElement);
  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      onClickSetupCloseElement();
    }
  });
};
var onClickSetupWizardEyesElement = function (element, color, inputElement) {
  var colorElement = getRandomIndex(color.length);
  element.style.fill = color[colorElement];
  inputElement.value = color[colorElement];
};
createWizardValue(AMOUNT_WIZARDS);
for (var i = 0; i < AMOUNT_WIZARDS; i++) {
  var wizardEyesColorValue = valueWizards[i].wizardEyesColor;
  var wizardCoatColorValue = valueWizards[i].wizardCoatColor;
  var wizardNameValue = valueWizards[i].name;
  var newWizard = createWizards(wizardEyesColorValue, wizardCoatColorValue, wizardNameValue);
  wizards.push(newWizard);
  fragment.appendChild(wizards[i]);
}
setupSimilarListElement.appendChild(fragment);
setupSimilarElement.classList.remove('hidden');
setupOpenElement.addEventListener('click', onClickSetupOpenElement);
setupOpenElement.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    onClickSetupOpenElement();
  }
});
setupWizardEyesElement.addEventListener('click', function () {
  onClickSetupWizardEyesElement(setupWizardEyesElement, COLOR_COATS, inputWizardEyesElement);
});

setupWizardCoatElement.addEventListener('click', function () {
  onClickSetupWizardEyesElement(setupWizardCoatElement, COLOR_EYES, inputWizardCoatElement);
});
setupWizardFireballElement.addEventListener('click', function () {
  var color = getRandomIndex(COLOR_FIREBALL.length);
  setupWizardFireballElement.style.backgroundColor = COLOR_FIREBALL[color];
  inputWizardFireballElement.value = COLOR_FIREBALL[color];
});

