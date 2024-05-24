function displayLedMap () {
    i = 0
    j = 0
    numRows = ledMap.length
    numColumns = ledMap[0].length
    while (i < numRows) {
        while (j < numColumns) {
            colourIndex = 0
            tileDisplay.setMatrixColor(j, i, colours[0])
            j += 1
        }
        j = 0
        i += 1
    }
    tileDisplay.show()
}
radio.onReceivedNumber(function (receivedNumber) {
	
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
let colourOrder: string[] = []
let rowToReceive = 0
let colours: number[] = []
let colourIndex = 0
let numColumns = 0
let ledMap: string[] = []
let numRows = 0
let j = 0
let i = 0
let tileDisplay: Kitronik_Zip_Tile.ZIPTileDisplay = null
radio.setGroup(1)
tileDisplay = Kitronik_Zip_Tile.createZIPTileDisplay(1, 1, Kitronik_Zip_Tile.UBitLocations.Hidden)
tileDisplay.clear()
tileDisplay.show()
tileDisplay.setBrightness(20)
basic.forever(function () {
	
})
