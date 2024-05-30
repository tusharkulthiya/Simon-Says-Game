let gameseq=[];
let userseq=[];
let btns=["yellow","red","purple","green"];

let started=false;
let level=0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
    console.log("game started");
    started=true;
    levelup();
    }
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function levelup(){
    userseq=[];
level++;
h2.innerText = `Level  ${level}`;

let randidx=Math.floor(Math.random()*3);
let randcolor=btns[randidx];
let randbtn=document.querySelector(`.${randcolor}`);
gameseq.push(randcolor);
console.log(gameseq);
btnflash(randbtn);
}

function checkans(idx){

if(userseq[idx]==gameseq[idx]){
  if(userseq.length==gameseq.length){
    setTimeout(levelup(),1000);
  }
}else{ 
    h2.innerHTML=`Game Over ! Your score was <b>${level}</b> press any key to start`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },200);
    reset();
}
}

function btnPress(){
    
    let btn=this;
    btnflash(btn);

    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);

    checkans(userseq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(bt of allbtns){
    bt.addEventListener("click",btnPress)
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}