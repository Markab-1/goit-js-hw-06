const categoriesList = document.querySelectorAll('li.item');
console.log("Number of categories:", categoriesList.length);

const titles = document.querySelectorAll('li.item h2');


for (let i = 0; i < titles.length; i += 1) {
    
    console.log("Category:", titles[i].textContent);

    const newSelector = titles[i].textContent.toLowerCase();

    categoriesList[i].classList.add(`${newSelector}`);

    console.log("Elements:", document.querySelectorAll(`.${newSelector} ul li`).length);
}
