/*
<li>
                <label for="task-1">Wyrzuc smieci</label>
                <input type="checkbox" id="task-1" name="Wyrzuc smieci">
            </li>*/

import { Categorie } from "./types/types.js";
import { render } from "./helpers/render-tasks-helper.js";
import { render as renderCategorie } from "./helpers/render-categories-helper.js";
import { Task } from "./types/types.js";
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");

let selectedCategory: Categorie;

const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const categoriesContainerElement: HTMLElement =
  document.querySelector(".categories");

const categories: Categorie[] = [
  Categorie.GENERAL,
  Categorie.WORK,
  Categorie.GYM,
  Categorie.HOBBY,
  Categorie.SOCIAL,
];

const tasks: Task[] = [
  new Task("wyrzucic",false,Categorie.GENERAL),
  new Task("odkurz",true,Categorie.HOBBY),
  new Task("pies",false,Categorie.WORK),

];

const addTask = (task: Task) => {
  tasks.push(task);
  render(tasks, tasksContainerElement);
};

const updateSelectedCategory = (newCategory: Categorie) => {
  selectedCategory = newCategory;
};
type TaskAsTuple = [string, Categorie, boolean];
const task: TaskAsTuple = ["zrobic klatke", Categorie.GYM, false];
const taskName = task[0];
const taskCategory = task[1];
const doneStatus = task[2];


addButtonElement.addEventListener("click", (event: Event) => {
  event.preventDefault();
  addTask(
    new Task(taskNameInputElement.value,false,selectedCategory)
    );
});
renderCategorie(categories, categoriesContainerElement, updateSelectedCategory);
render(tasks, tasksContainerElement);

const taskClass = new Task("Zmyj", true);
console.log(taskClass);
taskClass.logCreationDate("siyr");
