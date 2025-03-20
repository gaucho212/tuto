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
        });
        const LabelElement = document.createElement("label");
        LabelElement.setAttribute("for", `category-${categorie}`);
        LabelElement.innerText = categorie;
        categoryElement.appendChild(radioIputElement);
        categoryElement.appendChild(LabelElement);
        categoriesContainerElement.appendChild(categoryElement);
    });
};
