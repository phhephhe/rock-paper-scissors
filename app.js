
// function my choice on click event 
function myChoice(userChoice) {

    document.querySelectorAll(".btn").forEach((btn) => {
        btn.disabled = true
    })

    document.querySelector('.computer-choice').classList.add('stop-spinning');
    const selectOption = ['rock','paper','scissors'];
    const randomNumber = Math.floor(Math.random() * selectOption.length);
    const computerChoice = selectOption[randomNumber];
    document.querySelector('.computer-choice .'+ computerChoice).style.display ='block';
  
    const draw = userChoice === computerChoice;
    if(draw){
        document.querySelector('.result').innerHTML = 'DRAW !'
    }else{
        const userWon = (userChoice === 'rock' && computerChoice ==='scissors') ||
                        (userChoice === 'scissors' && computerChoice === 'paper') ||
                        (userChoice === 'paper' && computerChoice ==='rock');
        if(userWon){
            document.querySelector('.result').innerHTML = 'YOU WON !'
       
        }else{
             document.querySelector('.result').innerHTML = 'YOU LOST !'
        }
    }
    setTimeout(() => {
        window.location.reload()
    },1000)
}