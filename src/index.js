const $display = document.querySelector('#display')
const $start = document.querySelector('#start')
let machineMovements = []
let userMovements = []
let round = 0

$start.addEventListener('click',
    startGame
)

function startGame() {
    reset()
    blockSquare()
    handlerRound()
}

function reset() {
    round = 0
    machineMovements = []
    userMovements = []
}

function handlerRound() {
    const TIMESTAMP = (machineMovements.length + 2) * 1000
    updateDisplay(MACHINE_TURN_MESSAGE)
    setMoveMachine()
    showMovementsMachine()
    setTimeout(() => {
        setClickable()
        updateDisplay(USER_TURN_MESSAGE)
    }, TIMESTAMP)
}

function moveUser(e) {
    const target = e.target
    userMovements.push(target)
    showMove(target)
    checkClick(target)
}

function lose() {
    updateDisplay(LOSE_MESSAGE)
}


function selectSquare(id) {
    const $square = document.querySelector(`#square-${id}`)
    return $square
}

function showMove(target) {
    setTimeout(() => {
        target.style.opacity = .5
    }, 500)
    target.style.opacity = 1
}



