/*const categoriesListRef = document.querySelectorAll('li.item');
console.log("Number of categories:", categoriesListRef.length);

const titles = document.querySelectorAll('li.item h2');

for (let i = 0; i < titles.length; i += 1) {
    
    console.log("Category:", titles[i].textContent);

    const newSelector = titles[i].textContent.toLowerCase();

    categoriesListRef[i].classList.add(`${newSelector}`);

    console.log("Elements:", document.querySelectorAll(`.${newSelector} ul li`).length);
}*/

const categoriesListRef = document.querySelector('#categories');

console.log(categoriesListRef.children.length);

[...categoriesListRef.children].forEach(function (element, index, array) {
    console.log("Category:", element.children[0].innerHTML);
    console.log("Elements:",element.children[1].childElementCount);
    });

