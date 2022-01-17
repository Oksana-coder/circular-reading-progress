const scrollToTopButton = document.querySelector("#MEW_scroll_to_top_wrapper");
const circularProgressBar = document.querySelector(".circular-progress");
const article = document.querySelector("article");

const articleBeginning = article.getBoundingClientRect().top + window.scrollY;
const articleEnd = article.getBoundingClientRect().height - document.documentElement.clientHeight + (2 * articleBeginning);

let lastScrollTop = 0;

const showScrollToTopButton = () => {
    const currPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (currPosition > lastScrollTop) {
        scrollToTopButton.style.display = "none";
        circularProgressBar.style.opacity = "1";
        if (window.scrollY >= articleBeginning && window.scrollY <= articleEnd) {
            circularProgressBar.style.opacity = "1";
        } else {
            circularProgressBar.style.opacity = "0";
        }
    } else {
        scrollToTopButton.style.display = "block";
        circularProgressBar.style.opacity = "0";
    }
    lastScrollTop = currPosition <= 0 ? 0 : currPosition;
}

window.addEventListener("scroll", showScrollToTopButton);

const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

scrollToTopButton.addEventListener("click", scrollToTop);
