const startButton = document.getElementById("startButton");
const hero = document.querySelector(".hero");
const chapter = document.getElementById("before-us");
const chapterTwo = document.getElementById("the-day-we-became-us");
const chapterThree = document.getElementById("our-little-moments");
const chapterFour = document.getElementById("our-seoul-diary");
const chapterFive = document.getElementById("more-firsts");
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

/* =========================
   CHAPTER 04 ↔ CHAPTER 05
========================= */

const nextChapterFiveButton =
    document.getElementById("nextChapterFiveButton");

const backChapterFiveButton =
    document.getElementById("backChapterFiveButton");

// Chapter 04 → Chapter 05
nextChapterFiveButton.addEventListener("click", () => {

    // 暫停韓國旅行影片
    chapterFour.querySelectorAll("video").forEach(video => {
        video.pause();
    });

    chapterFour.classList.remove("show");
    chapterFive.classList.add("show");

    window.scrollTo(0, 0);

    setTimeout(() => {
        observeElements();
    }, 100);
});

// Chapter 05 → Chapter 04
backChapterFiveButton.addEventListener("click", () => {

    // 暫停攀岩影片
    chapterFive.querySelectorAll("video").forEach(video => {
        video.pause();
    });

    chapterFive.classList.remove("show");
    chapterFour.classList.add("show");

    window.scrollTo(0, 0);
});


/* =========================
   BACKGROUND MUSIC CONTROLLER
========================= */

const backgroundMusic = document.getElementById("backgroundMusic");
const musicToggle = document.getElementById("musicToggle");
const musicIcon = document.getElementById("musicIcon");
const musicText = document.getElementById("musicText");

// 預設音量 50%
backgroundMusic.volume = 0.5;

// 使用者是否手動控制過音樂
let musicManuallyControlled = false;

// 音樂按鈕狀態
function updateMusicButton() {
    const playing = !backgroundMusic.paused;

    musicToggle.classList.toggle("playing", playing);

    musicIcon.textContent = playing ? "♫" : "♪";
    musicText.textContent = playing ? "Music On" : "Music Off";

    musicToggle.setAttribute("aria-pressed", String(playing));
    musicToggle.setAttribute(
        "aria-label",
        playing ? "暫停背景音樂" : "播放背景音樂"
    );
}

// 開始播放音樂
async function startBackgroundMusic() {
    if (musicManuallyControlled) return;

    try {
        await backgroundMusic.play();
    } catch (error) {
        console.log("瀏覽器暫時阻擋自動播放：", error);
    }

    updateMusicButton();
}

// 手動音樂開關
musicToggle.addEventListener("click", async () => {
    musicManuallyControlled = true;

    if (backgroundMusic.paused) {
        try {
            await backgroundMusic.play();
        } catch (error) {
            console.log("無法播放音樂：", error);
        }
    } else {
        backgroundMusic.pause();
    }

    updateMusicButton();
});

// 第一次操作網站時嘗試播放
function startMusicOnFirstInteraction(event) {
    // 不干擾音樂按鈕本身
    if (musicToggle.contains(event.target)) return;

    if (!musicManuallyControlled && backgroundMusic.paused) {
        startBackgroundMusic();
    }

    document.removeEventListener(
        "pointerdown",
        startMusicOnFirstInteraction
    );

    document.removeEventListener(
        "keydown",
        startMusicOnFirstInteraction
    );
}

document.addEventListener(
    "pointerdown",
    startMusicOnFirstInteraction
);

document.addEventListener(
    "keydown",
    startMusicOnFirstInteraction
);

// 監聽音樂狀態
backgroundMusic.addEventListener("play", updateMusicButton);
backgroundMusic.addEventListener("pause", updateMusicButton);

// 初始化按鈕
updateMusicButton();

// 網站開啟時立即嘗試播放
startBackgroundMusic();

/* =========================
   MUTE ALL VIDEOS
========================= */

document.querySelectorAll("video").forEach(video => {

    // 所有影片強制靜音
    video.muted = true;
    video.defaultMuted = true;

    // 即使使用者嘗試取消靜音，也會重新靜音
    video.addEventListener("volumechange", () => {
        if (!video.muted || video.volume !== 0) {
            video.muted = true;
            video.volume = 0;
        }
    });

});
