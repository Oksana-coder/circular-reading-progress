const circularProgressBar = document.querySelector(".circular-progress");
const valueContainer = document.querySelector(".value-container");
const article = document.querySelector("article");

const articleBeginning = article.getBoundingClientRect().top + window.scrollY;
// const articleEnd = article.getBoundingClientRect().height - document.documentElement.clientHeight + (2 * articleBeginning);
const articleEnd = article.getBoundingClientRect().height;

const animateCircularProgressBar = () => {
    if (window.scrollY >= articleBeginning && window.scrollY <= articleEnd) {
        circularProgressBar.style.opacity = "1";
    } else {
        circularProgressBar.style.opacity = "0";
    }

    const scrolledDistance = -article.getBoundingClientRect().top;
    const progress = (scrolledDistance / (article.getBoundingClientRect().height - document.documentElement.clientHeight)) * 100;
    const progressRounded = Math.floor(progress);
    const progressDegrees = progressRounded * 3.6;

    valueContainer.textContent = progressRounded  + "%";
    circularProgressBar.style.setProperty("--progress", `${progressDegrees}deg`);
};

window.addEventListener("scroll", animateCircularProgressBar);

