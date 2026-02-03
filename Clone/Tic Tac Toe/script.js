let turn='O';
let draw=0;
const winner=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let board_array=new Array(9).fill("E");

const playerOne=document.querySelector(".player-one");
const playerTwo=document.querySelector(".player-two");
const board=document.querySelector(".board");
const resultBox=document.getElementById("result");
const overlay=document.getElementById("overlay");

function switchTurnHighlight(){
  if(turn==="O"){
    playerOne.classList.add("active"); 
    playerTwo.classList.remove("active");
  } else {
    playerTwo.classList.add("active"); 
    playerOne.classList.remove("active");
  }
}

function check_winner(){
  for(let [a,b,c] of winner){
    if(board_array[a]!=="E" && board_array[a]===board_array[b] && board_array[b]===board_array[c]){
      document.getElementById(a).classList.add("winner");
      document.getElementById(b).classList.add("winner");
      document.getElementById(c).classList.add("winner");
      return true;
    }
  }
  return false;
}

function handleClick(event){
  const select=event.target;
  if(!select.classList.contains("cell") || board_array[select.id]!=="E") return;

  draw++;
  select.textContent=turn;
  board_array[select.id]=turn;
  select.classList.add("taken");

  if(check_winner()){
    resultBox.textContent=`Winner is ${turn}.`;
    resultBox.classList.add("show");
    board.removeEventListener("click",handleClick);
    return;
  }

  turn = turn==="O"?"X":"O";
  switchTurnHighlight();

  if(draw===9){
    resultBox.textContent="Match is Draw.";
    resultBox.classList.add("show");
  }
}

board.addEventListener("click",handleClick);

document.getElementById("restart").addEventListener("click",()=>{
  // show overlay
  overlay.style.display="block";
  overlay.classList.add("show");

  // wait for animation to complete before reset
  setTimeout(()=>{
    // reset board
    document.querySelectorAll(".cell").forEach(cell=>{
      cell.textContent="";
      cell.classList.remove("winner","taken");
    });
    turn="O"; draw=0;
    board_array=new Array(9).fill("E");
    resultBox.textContent="Result:"; 
    resultBox.classList.remove("show");
    playerOne.classList.add("active"); 
    playerTwo.classList.remove("active");
    board.addEventListener("click",handleClick);

    // hide overlay
    overlay.style.display="none";
  }, 500); // match overlay animation duration
});
