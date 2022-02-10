const game = () => {
    const option = Object.freeze({
        Rock: 1,
        Paper: 2,
        Scissors: 3
    })

    const leftIcon = $('#left')[0]
    const rightIcon = $('#right')[0]

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

    //Play animation
    const playAnimation = () => {
        leftIcon.style.animation = "shake-left 0.5s 3"
        rightIcon.style.animation = "shake-right 0.5s 3"
    }

    //Function to restart animation
    const restartAnimation = () =>
    {
        $('#left').on("animationend", function() {
            leftIcon.style.animation = "";
        });

        $('#right').on("animationend", function() {
            rightIcon.style.animation = "";
        });
    }

    //Set up everything
    const setUpGame = () => {     
        restartAnimation()
        
        $('#rock').on('click', function() {
            setTimeout(() => {
                checkWhoWin(option.Rock)
            }, 1500);
            playAnimation()
        })
        
        $('#paper').on('click', function() {
            setTimeout(() => {
                checkWhoWin(option.Paper)
            }, 1500);
            playAnimation()
        })
        
        $('#scissors').on('click', function() {
            setTimeout(() => {
                checkWhoWin(option.Scissors)
            }, 1500);
            playAnimation()
        })
    }

    //Main functions
    startGame()
    setUpGame()
}

//This function starts the game
game()