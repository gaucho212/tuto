import { Categorie } from "../types/types.js";
const handleCategoryChange = (categorie) => {
    if (categorie === Categorie.GENERAL) {
        console.log("General category selected");
    }
    else if (categorie === Categorie.GYM) {
        console.log("Gym category selected");
    }
    else if (categorie === Categorie.HOBBY) {
        document.body.style.backgroundColor = "red";
    }
    else if (categorie === Categorie.WORK) {
        document.body.style.backgroundColor = "green";
    }
    else if (categorie === Categorie.SOCIAL) {
        document.body.style.backgroundColor = "yellow";
    }
    else {
        const never = categorie;
        console.log(never);
    }
};
export const render = (categories, categoriesContainerElement, inputChangeCallback) => {
    categories.forEach((categorie) => {
        const categoryElement = document.createElement("li");
        const radioIputElement = document.createElement("input");
        radioIputElement.type = "radio";
        radioIputElement.name = "category";
        radioIputElement.value = categorie;
        radioIputElement.id = `category-${categorie}`;
        radioIputElement.addEventListener("change", () => {
            inputChangeCallback(categorie);
            handleCategoryChange(categorie);
        });
        const LabelElement = document.createElement("label");
        LabelElement.setAttribute("for", `category-${categorie}`);
        LabelElement.innerText = categorie;
        categoryElement.appendChild(radioIputElement);
        categoryElement.appendChild(LabelElement);
        categoriesContainerElement.appendChild(categoryElement);
    });
};
