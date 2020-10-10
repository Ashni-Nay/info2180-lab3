let arry=[];
let play;
let endGame = false;

document.addEventListener("DOMContentLoaded",() => {
    let child1 = document.getElementById("board").children;
    for (i = 0; i <= child1.length - 1; i++) {
          child1[i].className="square";
    }
	
    document.getElementById("board").querySelectorAll("div").forEach(clickevent);
    document.getElementById("board").querySelectorAll("div").forEach(hover);
    chooseWinner(document.getElementById("board").querySelectorAll("div"));
    play=document.getElementById("board").querySelectorAll("div");
    newGame();

}); 

function newGame(){
    document.addEventListener('click', function (event) {
        if (event.target.matches('.btn')) {
            document.getElementById("status").classList.remove("you-won");
            document.getElementById("status").innerHTML ="Move your mouse over a square and click to play an X or an O.";
            for (i = 0; i <= play.length; i++) {
            play[i].classList.remove("X");
            play[i].classList.remove("O");
            play[i].innerHTML = "";
            arry = [];
            }
        }
    });
}


function playerX(placeX){
    placeX.className="square X";
    placeX.innerHTML="X";
}

function playerO (placeO){
    placeO.className="square O";
    placeO.innerHTML="O";
}

function playXorO(event){
    while(event.innerHTML==="" && endGame===false){
        if (arry.length<1 || arry[arry.length-1].innerHTML==="O"){
            playerX(event);
            arry.push(event);
        }else{
            arry.push(event);
            playerO(event);
        }
        chooseWinner();
    }
}

function clickevent(event){
    event.addEventListener("click",function (){
        playXorO(event);
    });
}

