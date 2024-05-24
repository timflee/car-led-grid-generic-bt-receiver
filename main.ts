function displayLedMap () {
    i = 0
    j = 0
    numRows = 8
    numColumns = 8
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
radio.onReceivedNumber(function (receivedNumber) {
	
})
input.onButtonPressed(Button.A, function () {
    displayLedMap()
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "gridMode") {
        rowToReceive = 0
    }
})
radio.onReceivedValue(function (name, value) {
	
})
function initVariables () {
    numColumns = 0
    rowToReceive = 0
    ledMap = [
    "b00r0000",
    "0b0r0000",
    "00br0000",
    "000i0000",
    "wwwpbwww",
    "000r0b00",
    "yyyoyygy",
    "000r000b"
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
let rowToReceive = 0
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
tileDisplay.setBrightness(15)
tileDisplay.showRainbow(1, 360)
basic.pause(1000)
tileDisplay.clear()
tileDisplay.show()
basic.forever(function () {
	
})
