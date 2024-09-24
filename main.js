const drumlength = document.querySelectorAll('.drum').length;
console.log(drumlength);

for (let i = 0; i < drumlength; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        makenoise(this.innerHTML);
        animatingButtons(this.innerHTML);
    });
}

function makenoise(key) {
    switch (key) {
        case "w":
            const w = new Audio("music/w.mp3");
            w.play();
            break;
        case "a":
            const a = new Audio("music/a.mp3");
            a.play();
            break;
        case "s":
            const s = new Audio("music/s.mp3");
            s.play();
            break;
        case "d":
            const d = new Audio("music/d.mp3");
            d.play();
            break;
        case "j":
            const j = new Audio("music/j.mp3");
            j.play();
            break;
        case "k":
            const k = new Audio("music/k.mp3");
            k.play();
            break;
        case "i":
            const i = new Audio("music/i.mp3");
            i.play();
            break;
        default:
            console.log(key);
    }
}

function animatingButtons(key) {
    const activeButton = document.querySelector(`.drum.${key}`);
    
    if (activeButton) {
        console.log(activeButton);
        activeButton.classList.add("pressed");
        
        setTimeout(() => {
            activeButton.classList.remove("pressed");
        }, 500);
    }
}
