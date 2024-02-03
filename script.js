const tablinks = document.querySelectorAll(".tab-links");
const tabcontents = document.querySelectorAll(".tab-contents");

function opentab(tabname) {
    tablinks.forEach(tablink => tablink.classList.remove("active-link"));
    tabcontents.forEach(tabcontent => tabcontent.classList.remove("active-tab"));

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}



// for openaning the navbar for small screen 

var opneNavBtn = document.querySelector(".svg-icon");

var showNav = document.querySelector(".list");

opneNavBtn.addEventListener("click", showNavBar);

function showNavBar() {
  showNav.classList.toggle('open')
}

// for messsege  



const scriptURL = 'https://script.google.com/macros/s/AKfycbwKRYOFK9cKcgTOU2QahJsOEQmoXatAH1Ce2Hw-S4BsJXCdSBBR9CDgAOqIoG_rMWUm/exec'
const form = document.forms['submit-to-google-sheet']

const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})


$(document).ready(function () {
    $(window).scroll(function () {

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });


    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Designer", "YouTuber", "Editor"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

});


// for skills tab

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


