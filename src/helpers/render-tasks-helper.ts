import { Task } from "../types/types";

export const render = (tasks: Task[],tasksContainerElement:HTMLElement) => {
    tasksContainerElement.innerHTML = "";
    tasks.forEach((task, index) => {
      const taskElement: HTMLLIElement = document.createElement("li");
      if (task.categorie) {
        taskElement.classList.add(task.categorie);
      }
      const id: string = `task-${index}`;
      const LabelElement: HTMLElement = document.createElement("label");
      LabelElement.innerText = task.title;
      LabelElement.setAttribute("for", id);
  
      const checkboxElement: HTMLInputElement = document.createElement("input");
      checkboxElement.type = "checkbox";
      checkboxElement.name = task.title;
      checkboxElement.id = id;
      checkboxElement.checked = task.done;
      checkboxElement.addEventListener("change", () => {
        task.done = !task.done;
      });
  
      taskElement.appendChild(LabelElement);
      taskElement.appendChild(checkboxElement);
  
      tasksContainerElement.appendChild(taskElement);
    });
  };