


const itemEl = document.querySelectorAll(`.item`);

console.log(`Number of categories:  ${ itemEl.length }`);


for (const elements of itemEl) {
    console.log(`Category: ${elements.children[0].innerText}`);

    console.log(`Elements: ${elements.children[1].children.length}`);
}

