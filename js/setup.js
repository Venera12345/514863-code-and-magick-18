'use strict';
var setup = document.querySelector('.setup');
var setupSimilar = document.querySelector('.setup-similar');
var templat = document.querySelector('#similar-wizard-template').content;
var wizardTemplat = templat.querySelector('.setup-similar-item');
var setupSimilarList = setupSimilar.querySelector('.setup-similar-list');
var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var colorEyes = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var colorCoats = ['black', 'red', 'blue', 'yellow', 'green'];
var fragment = document.createDocumentFragment();
var AMOUNTWIZARD = 4;
var wizards = [];
var valueWizards = [];
var object = {};
var getRandomIndex = function (max) {
  return Math.floor(Math.random() * Math.floor(max));
};
var createName = function (index) {
  return names[index] + ' ' + surnames[index];
};
var createWizards = function (eyes, coats, name) {
  var element = wizardTemplat.cloneNode(true);
  element.querySelector('.wizard-eyes').style.fill = eyes;
  element.querySelector('.wizard-coat').style.fill = coats;
  element.querySelector('.setup-similar-label').textContent = name;
  return element;
};
var addElement = function (Node, element) {
  Node.appendChild(element);
};
var createWizardValue = function (index) {
  for (var j = 0; j < index; j++) {
    object = {
      eyesColor: colorEyes[getRandomIndex(6)],
      coatColor: colorCoats[getRandomIndex(6)],
      name: createName(getRandomIndex(8))
    };
    valueWizards.push(object);
  }
};
createWizardValue(AMOUNTWIZARD);
for (var i = 0; i < AMOUNTWIZARD; i++) {
  var newWizard = createWizards(valueWizards[i].eyesColor, valueWizards[i].coatColor, valueWizards[i].name);
  wizards.push(newWizard);
  addElement(fragment, wizards[i]);
}
addElement(setupSimilarList, fragment);
setup.classList.remove('hidden');
setupSimilar.classList.remove('hidden');
