let CAMINAR = ""
let cortar = ""
input.onButtonPressed(Button.A, function () {
    CAMINAR = "SI"
})
input.onGesture(Gesture.Shake, function () {
    cortar = "SI"
})
input.onButtonPressed(Button.AB, function () {
    cortar = "NO"
})
input.onButtonPressed(Button.B, function () {
    CAMINAR = "NO"
})
basic.forever(function () {
    while (CAMINAR == "SI") {
        basic.showLeds(`
            . . . # #
            . . . # .
            # . . # .
            . # # # .
            . # . # .
            `)
        basic.pause(1000)
        basic.showLeds(`
            . . . # #
            . . . # .
            # . . # .
            . # # # .
            . . # . #
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
})
basic.forever(function () {
    while (cortar == "SI") {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
        basic.pause(1000)
        basic.showLeds(`
            # # . . .
            # # . . .
            . . # # #
            # # . . .
            # # . . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
})
