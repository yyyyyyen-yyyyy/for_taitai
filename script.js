const startButton = document.getElementById("startButton");
const hero = document.querySelector(".hero");
const chapter = document.getElementById("before-us");
const chapterTwo = document.getElementById("the-day-we-became-us");
const chapterThree = document.getElementById("our-little-moments");
const chapterFour = document.getElementById("our-seoul-diary");
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
// Chapter 01 → Chapter 02

const nextChapterButton = document.getElementById("nextChapterButton");

nextChapterButton.addEventListener("click", () => {

    // 隱藏 Chapter 01
    chapter.classList.remove("show");

    // 顯示 Chapter 02
    chapterTwo.classList.add("show");

    // 回到頁面最上方
    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

    // 啟動 Chapter 02 的淡入動畫
    setTimeout(() => {
        observeElements();
    }, 100);

});
// Chapter 02 → Chapter 01

const backChapterButton = document.getElementById("backChapterButton");

backChapterButton.addEventListener("click", () => {

    // 隱藏 Chapter 02
    chapterTwo.classList.remove("show");

    // 顯示 Chapter 01
    chapter.classList.add("show");

    // 回到 Chapter 01 的開頭
    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

});
// =========================
// CHAPTER 02 → CHAPTER 03
// =========================

const nextChapterThreeButton =
    document.getElementById("nextChapterThreeButton");

const backChapterThreeButton =
    document.getElementById("backChapterThreeButton");


// 前往第三章
nextChapterThreeButton.addEventListener("click", () => {

    // 隱藏第二章
    chapterTwo.classList.remove("show");

    // 顯示第三章
    chapterThree.classList.add("show");

    // 回到畫面最上方
    window.scrollTo(0, 0);

    // 啟動淡入動畫
    setTimeout(() => {
        observeElements();
    }, 100);

});


// 返回第二章
backChapterThreeButton.addEventListener("click", () => {

    // 暫停第三章內的影片
    chapterThree.querySelectorAll("video").forEach(video => {
        video.pause();
    });

    // 隱藏第三章
    chapterThree.classList.remove("show");

    // 顯示第二章
    chapterTwo.classList.add("show");

    // 回到第二章開頭
    window.scrollTo(0, 0);

});
// =========================
// SECRET NEXT CHAPTER
// =========================

document.querySelectorAll(".secret-next-button").forEach(button => {

    button.addEventListener("click", () => {

        const nextId = button.dataset.next;
        const nextChapter = document.getElementById(nextId);

        if (!nextChapter) return;

        // 暫停目前章節正在播放的影片
        document.querySelectorAll(".chapter.show video").forEach(video => {
            video.pause();
        });

        // 隱藏目前所有章節
        document.querySelectorAll(".chapter").forEach(chapterElement => {
            chapterElement.classList.remove("show");
        });

        // 顯示指定的下一章
        nextChapter.classList.add("show");

        // 回到頁面最上方
        window.scrollTo(0, 0);

        // 啟動原本的淡入動畫
        setTimeout(() => {
            observeElements();
        }, 100);

    });

});
// =========================
// CHAPTER 03 ↔ CHAPTER 04
// =========================

const nextChapterFourButton =
    document.getElementById("nextChapterFourButton");

const backChapterFourButton =
    document.getElementById("backChapterFourButton");


// Chapter 03 → Chapter 04
nextChapterFourButton.addEventListener("click", () => {

    chapterThree.classList.remove("show");
    chapterFour.classList.add("show");

    window.scrollTo(0, 0);

    setTimeout(() => {
        observeElements();
    }, 100);

});


// Chapter 04 → Chapter 03
backChapterFourButton.addEventListener("click", () => {

    // 暫停韓國旅行影片
    chapterFour.querySelectorAll("video").forEach(video => {
        video.pause();
    });

    chapterFour.classList.remove("show");
    chapterThree.classList.add("show");

    window.scrollTo(0, 0);

});