const skillTab = document.querySelector(".bars:first-child");
const skillCounterSpan = document.querySelectorAll(".counter span");
const progressBars = document.querySelectorAll(".bars svg circle");

window.addEventListener("scroll", () => {
    if (!skillPlayed) skillsCounter();
})

function hasReached(el) {

    let topPosition = el.getBoundingClientRect().top;

    if (window.innerHeight >= topPosition + el.offsetHeight) return true;
    else return false;
};

function updateCount(num, maxNum) {
    let currentNum = +num.innerText;

    if (currentNum < maxNum) {
        num.innerText = currentNum + 1;
        setTimeout(() => {
            updateCount(num, maxNum)
        }, 12);
    }
}

let skillPlayed = false;

function skillsCounter() {
    if (!hasReached(skillTab)) return;

    let skillPlayed = true;

    skillCounterSpan.forEach((counter, i) => {
        let target = +counter.dataset.target;
        let strokeValue = 427 - 427 * (target / 100);

        progressBars[i].style.setProperty("--target", strokeValue);

        setTimeout(() => {
            updateCount(counter, target);
        }, 480);
    })

    progressBars.forEach((p) => (p.style.animation = "progress 2s ease-in-out forwards")
    );
}
