let boxes = document.querySelectorAll(".box");
let restart = document.querySelector(".restart");
let afterwin = document.querySelector(".afterwin");
let newgame = document.querySelector(".newgame");
let msg = document.querySelector(".msg");


const winningPatterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
]


let turnO = true;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO == true) {
            box.innerText = "O"
            turnO=false;
        }
        else {
            box.innerText="X"
            turnO=true;
        }
        box.disabled=true;
        isWinner();
    })
});

const disable=()=>{
    for(let box of boxes){
        box.disabled=true
    }
}

const enable=()=>{
    for(let box of boxes){
        box.disabled=false
        box.innerText=""
    }
}

const isWinner=()=>{
    for(pattern of winningPatterns){
        let position1=boxes[pattern[0]].innerText
        let position2=boxes[pattern[1]].innerText
        let position3=boxes[pattern[2]].innerText

        if(position1!="" && position2!="" && position3!=""){
            if(position1==position2 && position1==position3){
                disable()
                msg.innerText=`Congratulations,Winner is player ${position1}`
                afterwin.classList.remove("hide")
            }
        } 
    }
}

const restartGame=()=>{
    turnO=true
    enable()
    afterwin.classList.add("hide")
}

restart.addEventListener("click",restartGame)
newgame.addEventListener("click",restartGame)