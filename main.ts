datalogger.onLogFull(function () {
    logging = false
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
input.onButtonPressed(Button.A, function () {
    logging = true
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Skull)
    datalogger.deleteLog()
    datalogger.setColumnTitles(
    "temperature",
    "light"
    )
})
input.onButtonPressed(Button.B, function () {
    logging = false
    basic.showIcon(IconNames.No)
})
let logging = false
cpptest.one()
logging = false
basic.showIcon(IconNames.No)
datalogger.setColumnTitles(
"temperature",
"light"
)
basic.forever(function () {
    if (logging) {
        basic.showIcon(IconNames.Heart)
        basic.clearScreen()
    }
    basic.pause(1000)
})
loops.everyInterval(100, function () {
    if (logging) {
        datalogger.log(
        datalogger.createCV("temperature", input.temperature()),
        datalogger.createCV("light", input.lightLevel())
        )
    }
})
