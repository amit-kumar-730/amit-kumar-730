const key = document.getElementById("key");

const computer_array = ["rock", "paper", "scisor"];
function checkResult(data) {
  let index = Math.floor(Math.random() * 3);
  const computerSelect = document.querySelector("#computer_select");
  computerSelect.textContent = `${computer_array[index]}`
  let opponent = computer_array[index];

  switch (data) {
  case "rock":
    return (opponent === "scisor") ? 1 : (opponent === "paper") ? 0 : -1;
  case "paper":
    return (opponent === "rock") ? 1 : (opponent === "scisor") ? 0 : -1;
  default: // scisor
    return (opponent === "paper") ? 1 : (opponent === "rock") ? 0 : -1;
}




}

key.addEventListener("click", (event) => {
  // console.log(event.target);
  if (event.target.tagName === "SPAN") {
    const select = document.querySelector("#select");
    select.textContent = `${event.target.id}`;
    const result = document.getElementById("result");
    let ans = checkResult(event.target.id);
    if(ans === 1){
        result.textContent = "WINNER!";
    } else if(ans === 0) 
        result.textContent = "LOST!";
        else 
            result.textContent = "DRAW!";
  }
});
