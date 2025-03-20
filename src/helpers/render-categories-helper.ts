import { Categorie } from "../types/types";

export const render = (
  categories: Categorie[],
  categoriesContainerElement: HTMLElement,
  inputChangeCallback: (categorie:Categorie) => void
) => {
  categories.forEach((categorie) => {
    const categoryElement: HTMLElement = document.createElement("li");
    const radioIputElement: HTMLInputElement = document.createElement("input");

    radioIputElement.type = "radio";
    radioIputElement.name = "category";
    radioIputElement.value = categorie;
    radioIputElement.id = `category-${categorie}`;
    radioIputElement.addEventListener("change", () => {
      inputChangeCallback(categorie);
    });

    const LabelElement: HTMLLabelElement = document.createElement("label");
    LabelElement.setAttribute("for", `category-${categorie}`);
    LabelElement.innerText = categorie;

    categoryElement.appendChild(radioIputElement);
    categoryElement.appendChild(LabelElement);

    categoriesContainerElement.appendChild(categoryElement);
  });
};
