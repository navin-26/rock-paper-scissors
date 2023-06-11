let score=JSON.parse(localStorage.getItem('score'))||{ wins: 0,
    losses: 0,
    ties: 0};


    updateScore();

/* if(score===null){
score={
    wins: 0,
    losses: 0,
    ties: 0
};
}*/
let isAutoplaying=false;
let intervalId;

function autoplay(){
    if(!isAutoplaying){
   intervalId= setInterval(()=>{
        const playerMove=pickComputerMove();
        playGame(playerMove);
    },1000);
isAutoplaying=true;
}
else{
    clearInterval(intervalId);
    isAutoplaying=false;
}
}

document.querySelector('.js-rock-button')
.addEventListener('click',()=>{playGame('Rock')});


document.querySelector('.js-scissors-button')
.addEventListener('click',()=>{playGame('Scissors')});


document.querySelector('.js-paper-button')
.addEventListener('click',()=>{playGame('Paper')});


document.body.addEventListener('keydown',(event)=>{if(event.key=='r'){
    playGame('Rock');
}
else if(event.key==='p'){
    playGame('Paper');
}
else if(event.key==='s'){
    playGame('Scissors');
}

});

function playGame(playerMove){
   

    const computerMove=  pickComputerMove();

    let Result='';

    if(playerMove==='Scissors'){
if(computerMove==='Rock'){
Result='You Loss.';
}
else if(computerMove==='Scissors'){
Result='Tie.'

}
else if(computerMove==='Paper'){
Result='You Win.'
} 


}



else if(playerMove==='Paper'){

if(computerMove==='Rock'){
Result='You Win.';
}
else if(computerMove==='Scissors'){
Result='You Loss.';

}
else if(computerMove==='Paper'){
Result='Tie.';
}

}




else if(playerMove==='Rock'){

if(computerMove==='Rock'){
Result='Tie.';
}
else if(computerMove==='Scissors'){
Result='You Win.';

}
else if(computerMove==='Paper'){
Result='You Loss.';
}
}

if(Result ==='You Win.'){
    score.wins++;
    }
    else if(Result === 'You Loss.'){
    score.losses++;
    }
    else{
    score.ties++;
    }

localStorage.setItem('score',JSON.stringify(score));

updateScore();

       document.querySelector('.result').innerHTML=Result;

        document.querySelector('.moves').innerHTML=` You        
<img src="images-rps/${playerMove}.png" class="emoji">
<img src="images-rps/${computerMove}.png" class="emoji">
Computer`;
  
}


function updateScore(){
document.querySelector('.score')
.innerHTML=`Wins : ${score.wins}, Losses : ${score.losses}, Ties : ${score.ties} `;

}


function pickComputerMove(){
    
    const randomNumber=Math.random();
    
    let computerMove ='';


if(randomNumber >0 && randomNumber < 1/3 ){
computerMove = 'Rock';
}
else if(randomNumber > 1/3 && randomNumber < 2/3){
computerMove = 'Paper';
}
else if(randomNumber > 2/3 && randomNumber < 1){
computerMove = 'Scissors';
}
return computerMove;

}
setInterval(function(){
document.querySelector('.title').style="font-size:30px ; font-weight: bold; color:darkgoldenrod;"},600);
setInterval(function(){
    document.querySelector('.title').style="font-size:30px ; font-weight: bold; color:violet;"},800);
    setInterval(function(){
        document.querySelector('.title').style="font-size:30px ; font-weight: bold; color:silver;"},1000);
        setInterval(function(){
            document.querySelector('.title').style="font-size:30px ; font-weight: bold; color:red;"},1200);
            setInterval(function(){
                document.querySelector('.title').style="font-size:30px ; font-weight: bold; color:seagreen;"},1400);
                setInterval(function(){
                    document.querySelector('.title').style="font-size:30px ; font-weight: bold; color: indigo;"},1600);
                setInterval(function(){
                    document.querySelector('.title').style="font-size:30px ; font-weight: bold; color: limegreen;"},1800);