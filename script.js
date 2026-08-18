/* =========================================
   PERSONAL DETAILS
========================================= */

const message = `
Akka...

Enna vida romba nalla purinjukura oru person
en life-la irundha, adhu nee dhaan.

Naan unkitta eppovume sanda potute irupen...
ana nee dhan eppavum vanthu ena compromise pannuva...
Naan compromise aaguradhey en manasula nee en Akka-nu irukradhanaale dhan...

unakunu edhuvu ila, yarum ilanu eppavum nenaikadha..,
Thambi-nu naan oruthan unakku eppavume iruppen.

Nee enakku Akka mattum illa...

Enakku support,
enakku advice,
enakku partner-in-crime,
and sometimes...
Not sometimes Always ne eppavume !
enakku second mother.

Life-la enna nadandhalum,
naan eppovume un Thambi dhaan.

Unakku kidaikanum nu nee aasapadra
ella happiness-um kidaikanum.

Always smile.
Always be happy.

Happy Birthday Akka ❤️

— Un Thambi
`;


/* =========================================
   ELEMENTS
========================================= */

const screens =
    document.querySelectorAll(".screen");

const intro =
    document.getElementById("intro");

const birthday =
    document.getElementById("birthday");

const letter =
    document.getElementById("letter");

const memories =
    document.getElementById("memories");

const finalScreen =
    document.getElementById("final");


const startBtn =
    document.getElementById("startBtn");

const wishBtn =
    document.getElementById("wishBtn");

const continueBtn =
    document.getElementById("continueBtn");

const finalBtn =
    document.getElementById("finalBtn");

const replayBtn =
    document.getElementById("replayBtn");

const wishText =
    document.getElementById("wishText");

const typingMessage =
    document.getElementById("typingMessage");


/* =========================================
   SCREEN CHANGE
========================================= */

function showScreen(target) {

    screens.forEach(screen => {

        screen.classList.remove("active");

    });

    target.classList.add("active");
}


/* =========================================
   START
========================================= */

startBtn.addEventListener("click", () => {

    showScreen(birthday);

    confetti(120);

});


/* =========================================
   WISH
========================================= */

wishBtn.addEventListener("click", () => {

    document
        .querySelectorAll(".flame")
        .forEach(flame => {

            flame.style.opacity = "0";

            flame.style.transform =
                "scale(0)";

        });


    wishText.innerHTML =
        "✨ Wish made, Akka! May it come true. ✨";


    confetti(180);


    setTimeout(() => {

        showScreen(letter);

        startTyping();

    }, 2500);

});


/* =========================================
   TYPING MESSAGE
========================================= */

let started = false;

function startTyping() {

    if (started) return;

    started = true;

    let index = 0;

    function typeWriter() {

        if (index < message.length) {

            typingMessage.textContent +=
                message.charAt(index);

            index++;

            setTimeout(
                typeWriter,
                25
            );

        }

    }

    typeWriter();
}


/* =========================================
   MEMORIES
========================================= */

continueBtn.addEventListener("click", () => {

    showScreen(memories);

});


/* =========================================
   FINAL
========================================= */

finalBtn.addEventListener("click", () => {

    showScreen(finalScreen);

    confetti(300);

    fireworks();

});


/* =========================================
   REPLAY
========================================= */

replayBtn.addEventListener("click", () => {

    location.reload();

});


/* =========================================
   CONFETTI
========================================= */

function confetti(amount) {

    const container =
        document.getElementById("confetti");

    const colors = [
        "#ff5ca8",
        "#ffcf4a",
        "#a86cff",
        "#62ddff",
        "#ffffff"
    ];


    for (let i = 0; i < amount; i++) {

        const piece =
            document.createElement("div");

        piece.className =
            "confetti-piece";


        piece.style.left =
            Math.random() * 100 + "vw";


        piece.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        piece.style.animationDelay =
            Math.random() * 2 + "s";


        piece.style.animationDuration =
            3 + Math.random() * 3 + "s";


        piece.style.transform =
            `rotate(${Math.random() * 360}deg)`;


        container.appendChild(piece);


        setTimeout(() => {

            piece.remove();

        }, 6500);

    }

}


/* =========================================
   FIREWORKS
========================================= */

function fireworks() {

    const colors = [
        "#ff4fa3",
        "#ffd34e",
        "#a56cff",
        "#59e1ff",
        "#ffffff"
    ];


    for (let burst = 0; burst < 10; burst++) {

        setTimeout(() => {

            createBurst(
                Math.random() *
                window.innerWidth,

                Math.random() *
                window.innerHeight *
                .65,

                colors[
                    Math.floor(
                        Math.random() *
                        colors.length
                    )
                ]
            );

        }, burst * 500);

    }

}


function createBurst(x, y, color) {

    for (let i = 0; i < 45; i++) {

        const particle =
            document.createElement("div");


        particle.style.position =
            "fixed";


        particle.style.left =
            x + "px";


        particle.style.top =
            y + "px";


        particle.style.width =
            "5px";


        particle.style.height =
            "5px";


        particle.style.borderRadius =
            "50%";


        particle.style.background =
            color;


        particle.style.boxShadow =
            `0 0 12px ${color}`;


        particle.style.zIndex =
            "200";


        document.body.appendChild(
            particle
        );


        const angle =
            Math.random() *
            Math.PI * 2;


        const distance =
            70 +
            Math.random() * 180;


        const targetX =
            Math.cos(angle) *
            distance;


        const targetY =
            Math.sin(angle) *
            distance;


        particle.animate(

            [
                {
                    transform:
                        "translate(0,0)",

                    opacity: 1
                },

                {
                    transform:
                        `translate(
                            ${targetX}px,
                            ${targetY}px
                        )`,

                    opacity: 0
                }
            ],

            {
                duration: 1500,

                easing:
                    "cubic-bezier(.1,.7,.3,1)"
            }

        );


        setTimeout(() => {

            particle.remove();

        }, 1600);

    }

}


/* =========================================
   FLOATING HEARTS
========================================= */

function createFloatingHearts() {

    const container =
        document.querySelector(
            ".floating-hearts"
        );


    setInterval(() => {

        const heart =
            document.createElement("span");

        heart.innerHTML = "♡";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.fontSize =
            12 +
            Math.random() * 20 +
            "px";

        heart.style.position =
            "fixed";

        heart.style.bottom =
            "-30px";

        heart.style.color =
            "#ff75ba";

        heart.style.opacity =
            ".25";

        heart.style.zIndex =
            "-1";

        heart.style.animation =
            "heartFloat 8s linear forwards";


        container.appendChild(heart);


        setTimeout(() => {

            heart.remove();

        }, 8000);

    }, 900);

}


createFloatingHearts();