const inputName = document.querySelector(`#name-input`);
const outputName = document.querySelector(`#name-output`);

inputName.addEventListener('input', event => {
  const value = event.currentTarget.value;
  outputName.textContent = value ? value : 'Anonymous';
});






