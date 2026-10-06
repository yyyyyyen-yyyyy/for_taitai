const startButton = document.getElementById("startButton");
const hero = document.querySelector(".hero");
const chapter = document.getElementById("before-us");
const entrance = document.getElementById("entrance");
const secretCode = document.getElementById("secretCode");
const unlockButton = document.getElementById("unlockButton");
const errorMessage = document.getElementById("errorMessage");
const piggyPopup = document.getElementById("piggyPopup");
const closePiggy = document.getElementById("closePiggy");
const tryAgainButton = document.getElementById("tryAgainButton");

let wrongAttempts = 0;
function unlockWebsite() {

    if (secretCode.value === "0402") {

        entrance.style.transition = "opacity 1s";
        entrance.style.opacity = "0";

        setTimeout(() => {

            entrance.style.display = "none";

            hero.classList.remove("hidden");

            window.scrollTo(0, 0);

        }, 1000);

    } else {

    wrongAttempts++;

    secretCode.value = "";

    if (wrongAttempts === 1) {

        errorMessage.textContent =
            "好像不是這一天欸，再想一下 ♡";

        errorMessage.classList.add("show");

        secretCode.focus();

    } else if (wrongAttempts === 2) {

        errorMessage.classList.remove("show");

        piggyPopup.classList.add("show");

    } else {

        errorMessage.textContent =
            "小豬豬，再給妳一次機會 🐷";

        errorMessage.classList.add("show");

        secretCode.focus();

    }

}
}

unlockButton.addEventListener("click", unlockWebsite);

secretCode.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        unlockWebsite();
    }

});
startButton.addEventListener("click", () => {

    hero.style.transition = "opacity 1s";
    hero.style.opacity = "0";

    setTimeout(() => {

        hero.style.display = "none";

        chapter.classList.add("show");

        window.scrollTo(0, 0);

        setTimeout(() => {
            observeElements();
        }, 100);

    }, 1000);

});


function observeElements() {

    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });

    }, {
        threshold: 0.15
    });

    elements.forEach(element => {
        observer.observe(element);
    });
}
function closePiggyPopup() {

    piggyPopup.classList.remove("show");

    setTimeout(() => {
        secretCode.focus();
    }, 400);

}

closePiggy.addEventListener("click", closePiggyPopup);

tryAgainButton.addEventListener("click", closePiggyPopup);