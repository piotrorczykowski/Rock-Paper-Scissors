const game = () => {
    const option = Object.freeze({
        Rock: 1,
        Paper: 2,
        Scissors: 3
    })

    //Display game
    const startGame = () => {        
        $('#start').on('click', function() {
            $('#info').css('display', 'none')
            $('#main').css('display', 'flex')
            $('#bottom').css('display', 'flex')
        })
    }

    //Draw computer choice and check who won
    const randomNumber = () => {
        return Math.floor(Math.random() * 3) + 1;
    }

    const checkWhoWin = (playerChoice) => {
        const computerChoice = randomNumber()

        if(playerChoice === computerChoice) {
            console.log('Tie')
        }
        else if(
            (playerChoice === option.Rock && computerChoice === option.Scissors) || 
            (playerChoice === option.Paper && computerChoice === option.Rock) || 
            (playerChoice === option.Scissors && computerChoice === option.Paper)
        ) {
            console.log('Player won')
        }
        else {
            console.log('Computer won')
        }
    }

    //Set up everything
    const setUpGame = () => {
        $('#rock').on('click', function() {
            checkWhoWin(option.Rock)
        })
        
        $('#paper').on('click', function() {
            checkWhoWin(option.Paper)
        })
        
        $('#scissors').on('click', function() {
            checkWhoWin(option.Scissors)
        })
    }

    //Main functions
    startGame()
    setUpGame()
}

game()