let input = document.getElementById(`validation-input`);
const inputLength = input.dataset.length;

input.addEventListener(`blur`, () => {
    input.value.length === Number(inputLength)
? (input.className = 'valid')
: (input.className = 'invalid');
})