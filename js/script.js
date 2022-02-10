const game = () => {
    const option = Object.freeze({
        Rock: 1,
        Paper: 2,
        Scissors: 3
    })

    const leftIcon = $('#left')
    const rightIcon = $('#right')

    //Display game
    const startGame = () => {        
        $('#start').on('click', function() {
            $('#info').css('display', 'none')
            $('#main').css('display', 'flex')
            $('#bottom').css('display', 'flex')
        })
    }
 
    //Display choosen icons
    const updateIcons = (playerChoice, computerChoice) => {
        const rock = 'assets/rock.png'
        const paper = 'assets/paper.png'
        const scissors = 'assets/scissors.png'

        //Player icon
        if(playerChoice === option.Rock)
        {
            leftIcon.attr('src', rock)
        }
        else if(playerChoice === option.Paper)
        {
            leftIcon.attr('src', paper)
        }
        else
        {
            leftIcon.attr('src', scissors)
        }
        
        //Computer icon
        if(computerChoice === option.Rock)
        {
            rightIcon.attr('src', rock)
        }
        else if(computerChoice === option.Paper)
        {
            rightIcon.attr('src', paper)
        }
        else
        {
            rightIcon.attr('src', scissors)
        }
    }

    //Set default icons
    const resetIcons = () => {
        const rock = 'assets/rock.png'

        leftIcon.attr('src', rock)
        rightIcon.attr('src', rock)
    }
 
    //Draw computer choice and check who won
    const randomNumber = () => {
        return Math.floor(Math.random() * 3) + 1;
    }

    const checkWhoWin = (playerChoice) => {
        const computerChoice = randomNumber()

        updateIcons(playerChoice, computerChoice)

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
        leftIcon[0].style.animation = 'shake-left 0.5s 3'
        rightIcon[0].style.animation = 'shake-right 0.5s 3'
    }

    //Function to restart animation
    const restartAnimation = () =>
    {
        $('#left').on("animationend", function() {
            leftIcon[0].style.animation = '';
        });

        $('#right').on("animationend", function() {
            rightIcon[0].style.animation = '';
        });
    }

    const buttonClickHandler = (playerChoice) => {
        resetIcons()

        setTimeout(() => {
            checkWhoWin(playerChoice)
        }, 1500)
        
        playAnimation()
    }

    //Set up everything
    const setUpGame = () => {     
        restartAnimation()
        
        $('#rock').on('click', function() {
            buttonClickHandler(option.Rock)
        })
        
        $('#paper').on('click', function() {
            buttonClickHandler(option.Paper)
        })
        
        $('#scissors').on('click', function() {
            buttonClickHandler(option.Scissors)
        })
    }

    //Main functions
    startGame()
    setUpGame()
}

//This function starts the game
game()