import { Categorie } from "../types/types.js";

const handleCategoryChange = (categorie: Categorie) => {
  if (categorie === Categorie.GENERAL) {
    console.log("General category selected");
  } else if (categorie === Categorie.GYM) {
    console.log("Gym category selected");
  } else if (categorie === Categorie.HOBBY) {
    document.body.style.backgroundColor = "red";
  } else if (categorie === Categorie.WORK) {
    document.body.style.backgroundColor = "green";
  } else if (categorie === Categorie.SOCIAL) {
    document.body.style.backgroundColor = "yellow";
  } else {
    const never: never = categorie;
    console.log(never);
  }
};

export const render = (
  categories: Categorie[],
  categoriesContainerElement: HTMLElement,
  inputChangeCallback: (categorie: Categorie) => void
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
      handleCategoryChange(categorie);
    });

    const LabelElement: HTMLLabelElement = document.createElement("label");
    LabelElement.setAttribute("for", `category-${categorie}`);
    LabelElement.innerText = categorie;

    categoryElement.appendChild(radioIputElement);
    categoryElement.appendChild(LabelElement);

    categoriesContainerElement.appendChild(categoryElement);
  });
};
