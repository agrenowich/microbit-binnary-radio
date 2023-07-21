input.onButtonPressed(Button.A, function () {
    basic.showNumber(1)
    radio.sendString("1")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    group += 1
    basic.showNumber(group)
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(0)
    radio.sendNumber(0)
})
let group = 0
radio.setGroup(group)
