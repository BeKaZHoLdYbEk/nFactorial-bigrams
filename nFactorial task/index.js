const nameList = document.getElementById('name-list');
const letterInput = document.getElementById('input');

letterInput.addEventListener('input', () => {
  const letter = letterInput.value.trim().toLowerCase();

  nameList.innerHTML = '';

  if (letter === '') {
    return;
  }

  fetch('names.txt')
    .then((response) => response.text())
    .then((text) => {
      const names = text.split('\n');

      const filteredNames = names.filter((name) =>
        name.trim().toLowerCase().startsWith(letter)
      );

      filteredNames.forEach((name) => {
        const li = document.createElement('li');
        li.textContent = name;
        nameList.appendChild(li);
      });
    })
    .catch((error) => {
      console.error(error);
    });
});

/*
const fs = require('fs');
var names = fs.readFileSync('names.txt', 'utf8');
var nameArray = names.split(/\r?\n/);
var lenArr = nameArray.length;
var bigrams;
var i;
for (i = 0; i < lenArr; i++) {
  var j = nameArray[i].length;
  for (var l = 0; l < j; l++) {
    var name = nameArray[i];
    biname = nameArray[i][l];
    bigrams = { name: i };
  }
}
console.log(bigrams);
*/
