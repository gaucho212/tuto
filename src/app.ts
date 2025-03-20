/*
<li>
                <label for="task-1">Wyrzuc smieci</label>
                <input type="checkbox" id="task-1" name="Wyrzuc smieci">
            </li>*/

import { Task,Categorie } from "./types/types";
import { render } from "./helpers/render-tasks-helper.js";
import { render as renderCategorie } from "./helpers/render-categories-helper.js";

const tasksContainerElement: HTMLElement = document.querySelector(".tasks");


let selectedCategory: Categorie;



const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const categoriesContainerElement: HTMLElement =
  document.querySelector(".categories");





const categories: Categorie[] = ["general", "work", "gym", "hobby"];

const tasks: Task[] = [
  {
    title: "Wyrzuc smieci",
    done: false,
    categorie: "hobby",
  },
  {
    title: "Zmyj naczynia",
    done: true,
    categorie: "gym",
  },
  {
    title: "Odkurz",
    done: false,
    categorie: "work",
  },
];





const addTask = (task: Task) => {
  tasks.push(task);
  render(tasks,tasksContainerElement);
};

const updateSelectedCategory = (newCategory: Categorie)=>{
  selectedCategory = newCategory;
} 

addButtonElement.addEventListener("click", (event: Event) => {
  
  event.preventDefault();
  addTask({
    title: taskNameInputElement.value,
    done: false,
    categorie: selectedCategory,
  });
  
});
renderCategorie(categories,categoriesContainerElement,updateSelectedCategory);
render(tasks,tasksContainerElement);
