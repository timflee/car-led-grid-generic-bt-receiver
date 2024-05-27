function displayLedMap () {
    tileDisplay.clear()
    tileDisplay.show()
    maxBrightness = Math.constrain(input.lightLevel(), 50, 255)
    tileDisplay.setBrightness(maxBrightness)
    basic.clearScreen()
    basic.pause(200)
    led.plotBarGraph(
    maxBrightness,
    255
    )
    i = 0
    j = 0
    while (i < numRows) {
        while (j < numColumns) {
            colourIndex = colourOrder.indexOf(ledMap[j][i])
            tileDisplay.setMatrixColor(i, j, colours[colourIndex])
            j += 1
        }
        j = 0
        i += 1
    }
    tileDisplay.show()
}
input.onButtonPressed(Button.A, function () {
    displayLedMap()
})
function flash (n: number, period: number) {
    music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.InBackground)
    for (let index = 0; index < n; index++) {
        tileDisplay.setBrightness(maxBrightness)
        tileDisplay.show()
        basic.pause(period / 2)
        tileDisplay.setBrightness(0)
        tileDisplay.show()
        basic.pause(period / 2)
    }
    music.play(music.tonePlayable(988, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
}
radio.onReceivedString(function (receivedString) {
    serial.writeLine(receivedString)
    radio.sendString(receivedString)
    if (receivedString == "ledMapTx") {
        mode = receivedString
    }
    if (receivedString == "updateLeds") {
        displayLedMap()
    }
    if (receivedString == "flashLeds") {
        displayLedMap()
        flash(flashCycles, flashPeriod)
    }
})
input.onButtonPressed(Button.B, function () {
    ledMap[0] = "wowrwowo"
    displayLedMap()
})
radio.onReceivedValue(function (name, value) {
    serial.writeLine("" + value + " " + name)
    radio.sendValue(name, value)
    if (mode == "ledMapTx") {
        ledMap[value] = name
    }
    if (name == "bright") {
        tileDisplay.setBrightness(value)
        tileDisplay.show()
    }
    if (name == "falshN") {
        flashCycles = value
    }
    if (name == "falshP") {
        flashPeriod = value
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    tileDisplay.clear()
    tileDisplay.show()
})
function initVariables () {
    numColumns = 0
    maxBrightness = 0
    flashCycles = 20
    flashPeriod = 250
    rowToReceive = 0
    mode = "idle"
    numRows = 8
    numColumns = 8
    ledMap = [
    "rrrrrrrr",
    "oooooooo",
    "yyyyyyyy",
    "gggggggg",
    "bbbbbbbb",
    "iiiiiiii",
    "vvvvvvvv",
    "wwwwwwww"
    ]
    initLedMap = [
    "bbbbbbbb",
    "bbbbbbbb",
    "bbbbbbbb",
    "bbbbbbbb",
    "bbbbbbbb",
    "bbbbbbbb",
    "bbbbbbbb",
    "bbbbbbbb"
    ]
    colourOrder = [
    "r",
    "b",
    "g",
    "w",
    "0",
    "i",
    "o",
    "p",
    "v",
    "y"
    ]
    colours = [
    Kitronik_Zip_Tile.colors(ZipLedColors.Red),
    Kitronik_Zip_Tile.colors(ZipLedColors.Blue),
    Kitronik_Zip_Tile.colors(ZipLedColors.Green),
    Kitronik_Zip_Tile.colors(ZipLedColors.White),
    Kitronik_Zip_Tile.colors(ZipLedColors.Black),
    Kitronik_Zip_Tile.colors(ZipLedColors.Indigo),
    Kitronik_Zip_Tile.colors(ZipLedColors.Orange),
    Kitronik_Zip_Tile.colors(ZipLedColors.Purple),
    Kitronik_Zip_Tile.colors(ZipLedColors.Violet),
    Kitronik_Zip_Tile.colors(ZipLedColors.Yellow)
    ]
}
let initLedMap: string[] = []
let rowToReceive = 0
let flashPeriod = 0
let flashCycles = 0
let mode = ""
let colours: number[] = []
let ledMap: string[] = []
let colourOrder: string[] = []
let colourIndex = 0
let numColumns = 0
let numRows = 0
let j = 0
let i = 0
let maxBrightness = 0
let tileDisplay: Kitronik_Zip_Tile.ZIPTileDisplay = null
initVariables()
radio.setGroup(1)
tileDisplay = Kitronik_Zip_Tile.createZIPTileDisplay(1, 1, Kitronik_Zip_Tile.UBitLocations.Hidden)
displayLedMap()
basic.pause(1000)
tileDisplay.clear()
tileDisplay.show()
basic.forever(function () {
	
})
