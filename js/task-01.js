const categoriesListRef = document.querySelector('#categories');

console.log("Numer of categories:",categoriesListRef.children.length);

[...categoriesListRef.children].forEach( element => {
    console.log("Category:",element.firstElementChild.textContent);
    console.log("Elements:",element.lastElementChild.children.length);
    });

