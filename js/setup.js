'use strict';
var setup = document.querySelector('.setup');
var setupSimilar = document.querySelector('.setup-similar');
var templat = document.querySelector('#similar-wizard-template').content;
var wizardTemplat = templat.querySelector('.setup-similar-item');
setup.classList.remove('hidden');

var arrNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var arrSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var arrColorEyes = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var arrColorCoats = ['black', 'red', 'blue', 'yellow', 'green'];
var creatName = function (i) {
  return arrNames[i] + ' ' + arrSurnames[i];
};
var fragment = document.createDocumentFragment();

var creatWizards = function (colorEyes, colorCoats, name) {

  var element = wizardTemplat.cloneNode(true);

  element.querySelector('.wizard-eyes').style.fill = colorEyes;
  element.querySelector('.wizard-coat').style.fill = colorCoats;
  element.querySelector('.setup-similar-label').textContent = name;
  return element;
};
var arrWizards = [
  {
    name: creatName(0),
    coatColor: arrColorCoats[0],
    eyesColor: arrColorEyes[0]
  },
  {
    name: creatName(1),
    coatColor: arrColorCoats[1],
    eyesColor: arrColorEyes[1]
  },
  {
    name: creatName(2),
    coatColor: arrColorCoats[2],
    eyesColor: arrColorEyes[2]
  },
  {
    name: creatName(3),
    coatColor: arrColorCoats[3],
    eyesColor: arrColorEyes[3]
  }
];
for (var i = 0; i < arrWizards.length; i++) {
  var newWizard = creatWizards(arrWizards[i].eyesColor, arrWizards[i].coatColor, arrWizards[i].name);
  fragment.appendChild(newWizard);
}
setupSimilar.querySelector('.setup-similar-list').appendChild(fragment);

setupSimilar.classList.remove('hidden');

