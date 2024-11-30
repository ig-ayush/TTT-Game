let boxs = document.querySelectorAll('.box');
let resetB = document.querySelector('.reset');
let turnX = true;
let h = document.querySelector(".title")
let tt = document.querySelector(".turnT");

const winnerL = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

// Clicking 
boxs.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turnX == true)
        {
            if(box.innerText == "X"){
                box.innerText = "X";
            }else{
            box.innerHTML = "X";
            tt.innerText = "Player O Turn";
            turnX = false;
            }
        }else{
            box.innerHTML = "O";
            tt.innerText = "Player X Turn";
            turnX = true;
        }
        winner();
    });
});

// Winner Selector
function winner(){
    for(let pat of winnerL){
        let p1 = boxs[pat[0]].innerText;
        let p2 = boxs[pat[1]].innerText;
        let p3 = boxs[pat[2]].innerText;
        
        if(p1!="" && p2 != "" && p3 != ""){
            if(p1 == p2 && p2 == p3){
                
                winnerD(p1);
                dis();
                tt.innerText = `Player ${p1} Wins`
            };
        };
    }
    
}

// Winner Display

function winnerD(w){
    h.innerText = `${w} is the Winner`;
    h.style.color = "#001d3d";
    h.style.textDecoration = "underline";

    resetB.innerText = "New Game";
    
    tt.innerText = `Player ${w} Wins`
};

// Disable Boxs 
const dis = () =>{
  for(let box of boxs){
    box.disabled = true;
  };
};

// Reset Button

resetB.addEventListener('click',()=>{
    for(let box of boxs){
        box.innerText = ""
        box.disabled = false;
    }
    resetB.innerText = "RESET"
    h.style.color = "#edf6f9";
    h.style.textDecoration = "none";  
    h.innerText = "Tic-Tac-Toe"
})


