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

function winnerPlay(){
    let win;
    if (play[0].innerHTML !=="" && play[0].innerHTML === play[1].innerHTML && play[0].innerHTML === play[2].innerHTML) {
        return win=play[0].innerHTML;
    } else if (play[6].innerHTML !=="" && play[6].innerHTML === play[3].innerHTML && play[6].innerHTML === play[0].innerHTML) {
        return win=play[0].innerHTML ;
    } else if (play[7].innerHTML !=="" && play[7].innerHTML === play[6].innerHTML && play[7].innerHTML === play[8].innerHTML) {
        return win=play[7].innerHTML;
    } else if (play[8].innerHTML !==""&& play[8].innerHTML === play[2].innerHTML && play[8].innerHTML === play[5].innerHTML) {
        return win=play[5].innerHTML;
    } else if (play[1].innerHTML !=="" && play[1].innerHTML === play[4].innerHTML && play[1].innerHTML === play[7].innerHTML) {
        return win=play[1].innerHTML;
    } else if (play[4].innerHTML !=="" && play[4].innerHTML === play[0].innerHTML && play[4].innerHTML === play[8].innerHTML) {
        return win=play[0].innerHTML;
    } else if (play[2].innerHTML !=="" && play[2].innerHTML === play[4].innerHTML && play[2].innerHTML === play[6].innerHTML) {
        return win=play[2].innerHTML;
    } else if (play[5].innerHTML !=="" && play[5].innerHTML === play[4].innerHTML && play[3].innerHTML === play[5].innerHTML) {
        return win=play[3].innerHTML;
    } else {
        return win;
    }
}

function congratulations(winner){    
    document.getElementById("status").textContent;
    if (winner==="X"){
        document.getElementById("status").textContent="Congratulations! X is the Winner!" ;
        document.getElementById("status").className="you-won"; 
        endGame=true;
    }else if (winner==="O"){
        document.getElementById("status").textContent="Congratulations! O is the Winner!" ;
        document.getElementById("status").className="you-won";
        endGame=true;
    }else{
            document.getElementById("status").textContent="It's a Tie!";
    }

}

/*function hover(square){
    square.addEventListener("mouseover",function(){
        square.classList.add("hover");
    });
    square.addEventListener("mouseout", function (){
        square.classList.remove("hover");
    }); */
