//Utwórz zmienną counterValue w której będzie przechowywana aktualna wartość licznika i nadaj jej początkową wartość wartość 0.
//Dodaj click listeners do przycisków, i przy ich pomocy zwiększaj i zmniejszaj wartość licznika.
//Aktualizuj interfejs (widok HTML) nową wartością zmiennej counterValue po każdej jej zmianie.

const buttonLess = document.querySelector('[data-action="decrement"]');
const buttonMore = document.querySelector('[data-action="increment"]');

let counterValue = 0;

function currentCounter() {
  document.getElementById("value").innerText = counterValue;
}

buttonLess.addEventListener("click", () => {
  counterValue -= 1;
  currentCounter();
});

buttonMore.addEventListener("click", () => {
  counterValue += 1;
  currentCounter();
});








