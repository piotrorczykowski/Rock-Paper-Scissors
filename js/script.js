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

    //Play animation
    const playAnimation = () => {
        const leftIcon = $('#left')[0];
        const rightIcon = $('#right')[0];
        
        leftIcon.style.animation = "shake-left 0.5s 3";
        rightIcon.style.animation = "shake-right 0.5s 3";
    }

    //Function to restart animation
    const restartAnimation = () =>
    {
        $('#left').on("animationend", function() {
            this.style.animation = "";
        });

        $('#right').on("animationend", function() {
            this.style.animation = "";
        });
    }

    //Set up everything
    const setUpGame = () => {     
        restartAnimation()
        
        $('#rock').on('click', function() {
            setTimeout(() => {
                checkWhoWin(option.Rock)
            }, 3000);
            playAnimation()
        })
        
        $('#paper').on('click', function() {
            setTimeout(() => {
                checkWhoWin(option.Paper)
            }, 3000);
            playAnimation()
        })
        
        $('#scissors').on('click', function() {
            setTimeout(() => {
                checkWhoWin(option.Scissors)
            }, 3000);
            playAnimation()
        })
    }

    //Main functions
    startGame()
    setUpGame()
}

//This function starts the game
game()