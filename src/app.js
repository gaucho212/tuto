"use strict";
/*
<li>
                <label for="task-1">Wyrzuc smieci</label>
                <input type="checkbox" id="task-1" name="Wyrzuc smieci">
            </li>*/
Object.defineProperty(exports, "__esModule", { value: true });
var types_js_1 = require("./types/types.js");
var render_tasks_helper_js_1 = require("./helpers/render-tasks-helper.js");
var render_categories_helper_js_1 = require("./helpers/render-categories-helper.js");
var task_js_1 = require("./classes/task.js");
var tasksContainerElement = document.querySelector(".tasks");
var selectedCategory;
var taskNameInputElement = document.querySelector("#name");
var addButtonElement = document.querySelector("button");
var categoriesContainerElement = document.querySelector(".categories");
var categories = [
    types_js_1.Categorie.GENERAL,
    types_js_1.Categorie.WORK,
    types_js_1.Categorie.GYM,
    types_js_1.Categorie.HOBBY,
    types_js_1.Categorie.SOCIAL,
];
var tasks = [
    {
        title: "Wyrzuc smieci",
        done: false,
        categorie: types_js_1.Categorie.GENERAL,
    },
    {
        title: "Zmyj naczynia",
        done: true,
        categorie: types_js_1.Categorie.HOBBY,
    },
    {
        title: "Odkurz",
        done: false,
        categorie: types_js_1.Categorie.GENERAL,
    },
];
var addTask = function (task) {
    tasks.push(task);
    (0, render_tasks_helper_js_1.render)(tasks, tasksContainerElement);
};
var updateSelectedCategory = function (newCategory) {
    selectedCategory = newCategory;
};
var task = ["zrobic klatke", types_js_1.Categorie.GYM, false];
var taskName = task[0];
var taskCategory = task[1];
var doneStatus = task[2];
addTask({ title: taskName, categorie: taskCategory, done: doneStatus });
addButtonElement.addEventListener("click", function (event) {
    event.preventDefault();
    addTask({
        title: taskNameInputElement.value,
        done: false,
        categorie: selectedCategory,
    });
});
(0, render_categories_helper_js_1.render)(categories, categoriesContainerElement, updateSelectedCategory);
(0, render_tasks_helper_js_1.render)(tasks, tasksContainerElement);
var taskClass = new task_js_1.TaskClass("Zmyj", true);
console.log(taskClass);
taskClass.logCreationDate();
