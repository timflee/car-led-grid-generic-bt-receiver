function displayLedMap () {
    numRows = ledMap.length
    numColumns = ledMap[0].length
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
let numRows = 0
let rowToReceive = 0
let ledMap: number[] = []
let numColumns = 0
numColumns = 0
ledMap = []
radio.setGroup(1)
let tileDisplay = Kitronik_Zip_Tile.createZIPTileDisplay(1, 1, Kitronik_Zip_Tile.UBitLocations.Hidden)
tileDisplay.clear()
tileDisplay.show()
tileDisplay.setBrightness(20)
rowToReceive = 0
let colourOrder = [
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
let colours = [
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
basic.forever(function () {
	
})
