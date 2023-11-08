function setMoveMachine() {
    const move = Math.ceil(Math.random() * 4)
    const square = selectSquare(move)
    machineMovements.push(square)
}

function checkClick(target) {
    const targetMachine = machineMovements[userMovements.length - 1]
    if (targetMachine.id !== target.id) {
        blockSquare()
        lose()
        return
    }

    if (machineMovements.length === userMovements.length) {
        userMovements = []
        blockSquare()
        setTimeout(handlerRound, 1000)
        round++
    }
}