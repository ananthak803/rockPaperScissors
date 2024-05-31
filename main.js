let score={
    win:0,
    lose:0,
    tie:0
};
function playGame(playerMove){
    const computerMove = pickComputer(); 
    let result;
    if((playerMove ==='Rock' && computerMove ==='Paper')||(playerMove ==='Paper' && computerMove ==='Scissors')||(playerMove ==='Scissors' && computerMove ==='Rock')){
        score.lose +=1;
        result='You Lose';
    }
    else if((playerMove ==='Rock' && computerMove ==='Scissors')||(playerMove ==='Paper' && computerMove ==='Rock')||(playerMove ==='Scissors' && computerMove ==='Paper')){
        score.win +=1;
        result='You Won';
    }
    else if((playerMove ===computerMove)||(playerMove ===computerMove)||(playerMove===computerMove)){
        score.tie +=1;
        result='Draw';}
    /*alert(`you chose ${playerM`   ove}.computer chose ${computerMove} .${result}. 
    Wins: ${score.win}. Loses:${score.lose}. Draws: ${score.tie}.`);*/
document.querySelector(".you").innerHTML =`You: ${playerMove} `;
document.querySelector(".computer").innerHTML=`Computer: ${computerMove}`;
document.querySelector(".rslt").innerHTML=`${result}`;
document.querySelector(".score").innerHTML=`Wins: ${score.win} || Loses:${score.lose} || Draws: ${score.tie}.`;
}
function pickComputer(){
    const computerMove = Math.random();
    if(computerMove>=0 && computerMove <1/3){
        return 'Rock';
    }
    else if(computerMove >=1/3 && computerMove<2/3){
        return 'Paper';
    }
    else {
        return 'Scissors';
    }
}