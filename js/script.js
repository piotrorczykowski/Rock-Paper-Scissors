const game = () => {
    let playerPoints = 0
    let computerPoints = 0
    
    let roundCounter = 0
    
    const option = Object.freeze({
        Rock: 1,
        Paper: 2,
        Scissors: 3
    })

    const textLine =  $('#info-text')
    
    const leftIcon = $('#left')
    const rightIcon = $('#right')

    const rockButton = $('#rock')
    const paperButton = $('#paper')
    const scissorsButton = $('#scissors')

    //Display game
    const startGame = () => {        
        $('#start').on('click', function() {
            $('#info').fadeTo('slow')
            $('#info').css('display', 'none')            

            $('#main').fadeIn('slow')
            $('#main').css('display', 'flex')
            $('#bottom').fadeIn( 'slow')
            $('#bottom').css('display', 'flex')
        })
    }
 
    //Display choosen icons
    const updateIcons = (playerChoice, computerChoice) => {
        const rockFile = 'assets/rock.png'
        const paperFile = 'assets/paper.png'
        const scissorsFile = 'assets/scissors.png'

        //Player icon
        if(playerChoice === option.Rock)
        {
            leftIcon.attr('src', rockFile)
        }
        else if(playerChoice === option.Paper)
        {
            leftIcon.attr('src', paperFile)
        }
        else
        {
            leftIcon.attr('src', scissorsFile)
        }
        
        //Computer icon
        if(computerChoice === option.Rock)
        {
            rightIcon.attr('src', rockFile)
        }
        else if(computerChoice === option.Paper)
        {
            rightIcon.attr('src', paperFile)
        }
        else
        {
            rightIcon.attr('src', scissorsFile)
        }
    }

    //Set default icons
    const resetIcons = () => {
        const rockFile = 'assets/rock.png'

        leftIcon.attr('src', rockFile)
        rightIcon.attr('src', rockFile)
    }

    //Update points
    const updatePoints = () => {
        const player = $('#player')
        const computer = $('#computer')

        player.text(playerPoints)
        computer.text(computerPoints)
    }

    //Update ending message
    const updateMessage = () => {

        if(playerPoints === computerPoints)
        {
            textLine.text('Tie!')
        }
        else if(playerPoints > computerPoints)
        {
            textLine.text('You won!')
        }
        else
        {
            textLine.text('You lost!')
        }
        
    }
    
    //Turn off buttons
    const disableButtons = () => {
        rockButton[0].style.pointerEvents = 'none'
        paperButton[0].style.pointerEvents = 'none'
        scissorsButton[0].style.pointerEvents = 'none'
    }
    
    //Turn on buttons
    const enableButtons = () => {
        rockButton[0].style.pointerEvents = 'auto'
        paperButton[0].style.pointerEvents = 'auto'
        scissorsButton[0].style.pointerEvents = 'auto'    
    }

    //Check if the game is over
    const checkEndGame = () => {
        if(roundCounter === 3) {
            disableButtons()
            setTimeout(() => {
                location.reload()
            },1500)
            updateMessage()
        }
    }
 
    //Draw computer choice and check who won
    const randomNumber = () => {
        return Math.floor(Math.random() * 3) + 1;
    }

    const checkWhoWon = (playerChoice) => {
        const computerChoice = randomNumber()

        updateIcons(playerChoice, computerChoice)

        roundCounter++

        if(playerChoice === computerChoice) {
            textLine.text('Tie')
            playerPoints++
            computerPoints++
        }
        else if(
            (playerChoice === option.Rock && computerChoice === option.Scissors) || 
            (playerChoice === option.Paper && computerChoice === option.Rock) || 
            (playerChoice === option.Scissors && computerChoice === option.Paper)
        ) {
            textLine.text('Player won')
            playerPoints++
        }
        else {
            textLine.text('Computer won')
            computerPoints++
        }

        updatePoints()
    }

    //Play animation
    const playAnimation = () => {
        leftIcon[0].style.animation = 'shake-left 0.5s 3'
        rightIcon[0].style.animation = 'shake-right 0.5s 3'
    }

    //Function to restart animation
    const restartAnimation = () =>
    {
        leftIcon.on("animationend", function() {
            leftIcon[0].style.animation = '';
        });

        rightIcon.on("animationend", function() {
            rightIcon[0].style.animation = '';
        });
    }

 
    //Function to handle button click event
    const buttonClickHandler = (playerChoice) => {
        resetIcons()
        disableButtons()

        setTimeout(() => {
            checkWhoWon(playerChoice)
            enableButtons()
            checkEndGame()
        }, 1500)

        playAnimation()
    }

    //Set up everything
    const setUpGame = () => {     
        restartAnimation()
        
        rockButton.on('click', function() {
            buttonClickHandler(option.Rock)
        })
        
        paperButton.on('click', function() {
            buttonClickHandler(option.Paper)
        })
        
        scissorsButton.on('click', function() {
            buttonClickHandler(option.Scissors)
        })
    }

    //Main functions
    startGame()
    setUpGame()
}

//This function starts the game
game()