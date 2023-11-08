const MACHINE_TURN_MESSAGE = {
    status: 'bg-warning',
    turn: 'Es el turno de la maquina',
    remove: 'bg-danger'
}
const USER_TURN_MESSAGE = {
    status: 'bg-success',
    turn: 'Es tu turno',
    remove: 'bg-warning'
}
const LOSE_MESSAGE = {
    status: 'bg-danger',
    turn: '¡Perdiste! Tap en Empezar para otra ronda'
}

function blockSquare() {
    const $squares = document.querySelectorAll('.square')
    $squares.forEach(item => {
        item.onclick = () => { }
    })
}

function updateDisplay(obj) {
    $display.classList.remove(obj.remove)
    $display.classList.add(obj.status)
    $display.textContent = obj?.turn
}


function showMovementsMachine() {
    machineMovements.forEach((element, index) => {
        const DELAY_MS = (index + 1) * 1000
        setTimeout(() => {
            showMove(element)
        }
            , DELAY_MS
        )
    });
}

function updateDisplay(obj) {
    $display.classList.remove(obj.remove)
    $display.classList.add(obj.status)
    $display.textContent = obj.turn
}

function setClickable() {
    const $squares = document.querySelectorAll('.square')
    $squares.forEach(item => {
        item.onclick = moveUser
    })
}