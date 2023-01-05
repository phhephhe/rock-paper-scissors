
// function my choice on click event 
function myChoice(userChoice) {
        //add class for stop spinnig cube
    document.querySelector('.computer-choice').classList.add('stop-spinning');
        // make an array of options
    const selectOption = ['rock','paper','scissors'];
    // generate random number between 0 to 2 (arr:length)
    const randomNumber = Math.floor(Math.random() * selectOption.length);
    // create variable and take 1 element from options[index of random number 0 to 2]
    const computerChoice = selectOption[randomNumber];
    // select svg of rock paper or scissor randomly to make it vissible
    document.querySelector('.computer-choice .'+ computerChoice).style.display ='block';
    //make draw variable to know when is draw reslut
    // if user choice and computerCHoice is equal draw variale
    // will be true else false
    const draw = userChoice === computerChoice;
    // make if else to display appropriate text of result
    if(draw){
        // if varriable draw is true then this code executed
        document.querySelector('.result').innerHTML = 'DRAW !'
    }else{
        // else create case when user is winner
        const userWon = (userChoice === 'rock' && computerChoice ==='scissors') ||
                        (userChoice === 'scissors' && computerChoice === 'paper') ||
                        (userChoice === 'paper' && computerChoice ==='rock');
        // if userWon is true if block will executed     
        if(userWon){
            document.querySelector('.result').innerHTML = 'YOU WON !'
        //else this block will be executed 
        }else{
             document.querySelector('.result').innerHTML = 'YOU LOST !'
        }
    }
    // create setTime out function to reload page every 1 sec
    setTimeout(() => {
        window.location.reload()
    },1000)
}