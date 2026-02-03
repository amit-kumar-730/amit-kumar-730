const obj = document.getElementById("quote");
const bx = document.querySelector("p");
{
bx.style.textDecoration = "underline";
bx.style.fontWeight = "900";
bx.style.fontSize = '40px';
}

const quotes = ["Life doesn’t wait for clarity; it rewards motion",
"You don’t need all the answers to begin—just the courage to start",
"Purpose isn’t found, it’s created moment by moment",
"A full life isn’t loud—it’s deeply lived",
"Growth begins the moment comfort ends",
"You’re allowed to outgrow versions of yourself that no longer fit",
"Change is the universe’s way of saying, ‘You’re not done yet’",
"The most dangerous place to stay is where nothing challenges you",
"You’ve survived every hard day so far—don’t underestimate that",
"Scars aren’t signs of weakness; they’re proof that you healed",
"Storms reveal the strength of your roots",
"Resilience isn’t about bouncing back—it’s about rising changed",
"Creativity begins where certainty ends",
"Imagination is a rehearsal for the future you want to build",
"Art doesn’t ask for perfection—only honesty",
"The blank page is both invitation and intimidation. Answer it anyway",
"To be seen fully and loved anyway—that’s the rarest gift",
"Love doesn’t fix people. It reminds them they’re worth fixing",
"Connection is built not through agreement, but through presence",
"Kindness is a quiet revolution—start one where you are"];

{
    obj.style.color = " gray";
obj.style.padding = "30px";
obj.style.borderLeft = "7px solid red";
obj.style.marginTop = "20px" ;
obj.style.borderRadius = "15px";
obj.style.backgroundColor = "white";
obj.style.fontSize = "25px";
obj.style.fontStyle = "italic";
obj.style.fontWeight = "700";
}

function qts(){
    let qtNo = Math.floor( Math.random() * quotes.length);
    obj.innerHTML = "=>   " + quotes[qtNo] + ".";
}

setInterval(qts , 3000);
