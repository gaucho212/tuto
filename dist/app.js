const button = document.querySelector("button");
const calculatePrice = (originalPrice, hasDiscouunt) => {
    return hasDiscouunt ? originalPrice * 0.8 : originalPrice;
};
button.addEventListener("click", () => {
    const originalPrice = 50;
    const hasDiscount = new URLSearchParams(window.location.search).get("discount") === "true";
    console.log(calculatePrice(originalPrice, hasDiscount));
});
