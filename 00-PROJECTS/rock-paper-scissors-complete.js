const score = JSON.parse(localStorage.getItem('score')) ||
        
{
    wins : 0,
    losses : 0,
    ties : 0
} ;

updateScoreElement();

// instade if default operator we can also do that -
// !score - no score

/* if ( !score ) {
    score = {
        wins : 0 ,
        losses : 0 ,
        ties : 0 
    };
} */



function playGame(playerMove)
{
    const computerMove = makeComputerMove();

    let result;

    if( playerMove === 'scissors')
    {
        if ( computerMove === 'Rock') 
        { result = 'You lose' }

        else if ( computerMove === 'Paper')
        { result = 'You win' }

        else if (computerMove === 'scissors')
        { result = 'Tie' }

    }

    else if (playerMove === 'paper')
    {
        if ( computerMove === 'Rock') 
        { result = 'You win' }

        else if ( computerMove === 'Paper')
        { result = 'Tie' }

        else if (computerMove === 'scissors')
        { result = 'You lose' }
    }

    else if (playerMove === 'rock')
    {
        if ( computerMove === 'Rock') 
        { result = 'Tie' }

        else if ( computerMove === 'Paper')
        { result = 'You lose' }

        else if (computerMove === 'scissors')
        { result = 'You win' }
    }

    if ( result === 'You win'){
        score.wins += 1; 
    } 

    else if ( result === 'You lose'){
        score.losses += 1;
    }

    else if ( result === 'Tie'){
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result')
     .innerHTML = result;
     

     document.querySelector('.js-moves')
     .innerHTML = `  You <img class="move-icon2" src="${playerMove}.png" alt="rock">
<img class="move-icon2" src="${computerMove}.png" alt="scissors"> computer `
   
   

}

function updateScoreElement () {
        document.querySelector('.js-score')
        .innerHTML =  `wins : ${score.wins} , losses : ${score.losses} , ties : ${score.ties} `

}

function makeComputerMove ()
    {
        const randomNum = Math.random()
        let computerMove = '';

        if (randomNum >=0 && randomNum < 1/3 )
        { computerMove = 'Rock'}

        else if ( randomNum >= 1/3 && randomNum < 2/3) 
        { computerMove = 'Paper'}

        else
        { computerMove = 'scissors' }


        return computerMove;
    }