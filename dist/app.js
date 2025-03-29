/*
<li>
                <label for="task-1">Wyrzuc smieci</label>
                <input type="checkbox" id="task-1" name="Wyrzuc smieci">
            </li>*/
import { Categorie } from "./types/types.js";
import { render } from "./helpers/render-tasks-helper.js";
import { render as renderCategorie } from "./helpers/render-categories-helper.js";
const tasksContainerElement = document.querySelector(".tasks");
let selectedCategory;
const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const categoriesContainerElement = document.querySelector(".categories");
const categories = [
    Categorie.GENERAL,
    Categorie.WORK,
    Categorie.GYM,
    Categorie.HOBBY,
    Categorie.SOCIAL,
];
const tasks = [
    {
        title: "Wyrzuc smieci",
        done: false,
        categorie: Categorie.GENERAL,
    },
    {
        title: "Zmyj naczynia",
        done: true,
        categorie: Categorie.HOBBY,
    },
    {
        title: "Odkurz",
        done: false,
        categorie: Categorie.GENERAL,
    },
];
const addTask = (task) => {
    tasks.push(task);
    render(tasks, tasksContainerElement);
};
const updateSelectedCategory = (newCategory) => {
    selectedCategory = newCategory;
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    addTask({
        title: taskNameInputElement.value,
        done: false,
        categorie: selectedCategory,
    });
});
renderCategorie(categories, categoriesContainerElement, updateSelectedCategory);
render(tasks, tasksContainerElement);
