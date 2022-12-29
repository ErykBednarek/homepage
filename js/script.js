console.log("Cześć!");

let body = document.querySelector(".body");
let deleteImage = document.querySelector(".js-deleteImage");
let mainImage = document.querySelector(".mainImage");
let hiddenImage = document.querySelector(".js-hiddenImage");
let changeTheme = document.querySelector(".js-changeTheme");
let theme = document.querySelector(".js-theme");

changeTheme.addEventListener("click", () => {
    body.classList.toggle("body__dark");

    theme.innerText = body.classList.contains("body__dark") ? " jasny" : " ciemny";
});

deleteImage.addEventListener("click", () => {
    mainImage.classList.toggle("hidden");

    hiddenImage.innerText = mainImage.classList.contains("hidden") ? " Pokaż" : " Usuń";
});










