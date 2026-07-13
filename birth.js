// ===============================
// LOADER
// ===============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.display = "none";
    }, 2000);

});

// ===============================
// MUSIC
// ===============================

const btn = document.getElementById("btn");
const music = document.getElementById("music");

btn.addEventListener("click", () => {

    music.play();

    btn.innerHTML = "🎉 Enjoy Your Birthday 🎉";

    startHearts();

    createConfetti();

    autoScroll();

});

// ===============================
// GIFT
// ===============================

const gift = document.getElementById("gift");

const giftMessage = document.getElementById("giftMessage");

gift.addEventListener("click", () => {

    gift.innerHTML = "🎊";

    gift.style.transform = "scale(1.4) rotate(15deg)";

    giftMessage.style.display = "block";

});

// ===============================
// CAKE
// ===============================

const cake = document.getElementById("cake");

cake.addEventListener("click", () => {

    cake.innerHTML = "🎉";

    alert("🎂 Happy Birthday Dr. Hiren Roza! 🎂");

});

// ===============================
// HEARTS
// ===============================

function startHearts(){

setInterval(()=>{

const heart=document.createElement("div");

heart.classList.add("heart");

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*30)+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

},300);

}

// ===============================
// CONFETTI
// ===============================

function createConfetti(){

for(let i=0;i<150;i++){

const confetti=document.createElement("div");

confetti.style.position="fixed";

confetti.style.width="10px";

confetti.style.height="10px";

confetti.style.left=Math.random()*100+"vw";

confetti.style.top="-20px";

confetti.style.background=

["red","yellow","blue","green","pink","purple","orange"][Math.floor(Math.random()*7)];

confetti.style.borderRadius="50%";

confetti.style.zIndex="999";

confetti.style.animation=

`fall ${3+Math.random()*3}s linear`;

document.body.appendChild(confetti);

setTimeout(()=>{

confetti.remove();

},6000);

}

}

// ===============================
// FALL ANIMATION
// ===============================

const style=document.createElement("style");

style.innerHTML=`

@keyframes fall{

0%{

transform:translateY(-20px) rotate(0deg);

}

100%{

transform:translateY(110vh) rotate(720deg);

}

}

`;

document.head.appendChild(style);

// ===============================
// SMOOTH SCROLL
// ===============================

function scrollToGallery(){

document.querySelector(".gallery").scrollIntoView({

behavior:"smooth"

});

}

// ===============================
// GALLERY ANIMATION
// ===============================

const cards=document.querySelectorAll(".card");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(80px)";

card.style.transition=".8s";

observer.observe(card);

});

// ===============================
// LETTER ANIMATION
// ===============================

const letter=document.querySelector(".letter-box");

const observer2=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

letter.style.opacity="1";

letter.style.transform="translateY(0px)";

}

});

});

letter.style.opacity="0";

letter.style.transform="translateY(80px)";

letter.style.transition="1s";

observer2.observe(letter);

// ===============================
// FINAL SECTION ANIMATION
// ===============================

const final=document.querySelector(".final");

const observer3=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

final.style.opacity="1";

final.style.transform="scale(1)";

}

});

});

final.style.opacity="0";

final.style.transform="scale(.8)";

final.style.transition="1.2s";

observer3.observe(final);

// ===============================
// BUTTON GLOW
// ===============================

setInterval(()=>{

btn.style.boxShadow="0 0 40px hotpink";

setTimeout(()=>{

btn.style.boxShadow="0 0 15px violet";

},700);

},1500);

// Stop music when the final section is reached

// ===============================
// FADE OUT MUSIC AT FINAL SECTION
// ===============================

function fadeOutMusic() {

    let fade = setInterval(() => {

        if (music.volume > 0.05) {

            music.volume -= 0.05;

        } else {

            clearInterval(fade);

            music.pause();
            music.currentTime = 0;
            music.volume = 1;

        }

    }, 150);

}

const finalSection = document.querySelector(".final");

const stopMusicObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            fadeOutMusic();

        }

    });

}, {
    threshold: 0.8
});

stopMusicObserver.observe(finalSection);

// ===============================
// AUTO SCROLL
// ===============================

// ===============================
// AUTO SCROLL
// ===============================

function autoScroll() {

    const totalHeight = document.documentElement.scrollHeight;
    let current = 0;

    const scroll = setInterval(() => {

        current += 2;   // Speed (increase for faster)

        window.scrollTo({
            top: current,
            behavior: "instant"
        });

        if (current >= totalHeight - window.innerHeight) {

            clearInterval(scroll);

            // Wait 5 seconds at the end
            setTimeout(() => {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

                // Start again
                setTimeout(() => {
                    autoScroll();
                }, 3000);

            }, 5000);

        }

    }, 20);

}