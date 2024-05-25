function displayLedMap () {
    tileDisplay.clear()
    tileDisplay.show()
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
radio.onReceivedString(function (receivedString) {
    if (receivedString == "ledMapTx") {
        mode = receivedString
    }
    if (receivedString == "updateLeds") {
        displayLedMap()
    }
})
input.onButtonPressed(Button.B, function () {
    ledMap[0] = "wowrwowo"
    displayLedMap()
})
radio.onReceivedValue(function (name, value) {
    if (mode == "ledMapTx") {
        ledMap[value] = name
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    tileDisplay.clear()
    tileDisplay.show()
})
function initVariables () {
    numColumns = 0
    rowToReceive = 0
    mode = "idle"
    numRows = 8
    numColumns = 8
    ledMap = [
    "wwwwwwww",
    "wwwwwwww",
    "wwwwwwww",
    "wwwwwwww",
    "wwwwwwww",
    "wwwwwwww",
    "wwwwwwww",
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
let mode = ""
let colours: number[] = []
let ledMap: string[] = []
let colourOrder: string[] = []
let colourIndex = 0
let numColumns = 0
let numRows = 0
let j = 0
let i = 0
let tileDisplay: Kitronik_Zip_Tile.ZIPTileDisplay = null
initVariables()
radio.setGroup(1)
tileDisplay = Kitronik_Zip_Tile.createZIPTileDisplay(1, 1, Kitronik_Zip_Tile.UBitLocations.Hidden)
tileDisplay.setBrightness(10)
tileDisplay.showRainbow(1, 360)
basic.pause(500)
tileDisplay.clear()
tileDisplay.show()
displayLedMap()
basic.forever(function () {
	
})
