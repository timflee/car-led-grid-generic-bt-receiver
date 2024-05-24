def displayLedMap():
    global numRows, numColumns, j, test
    numRows = len(ledMap)
    numColumns = len(ledMap[0])
    j = 0
    test = 0

def on_received_number(receivedNumber):
    pass
radio.on_received_number(on_received_number)

def on_received_string(receivedString):
    global rowToReceive
    if receivedString == "gridMode":
        rowToReceive = 0
radio.on_received_string(on_received_string)

def on_received_value(name, value):
    pass
radio.on_received_value(on_received_value)

test = 0
j = 0
numRows = 0
ledMap: List[str] = []
rowToReceive = 0
numColumns = 0
i = 0
radio.set_group(1)
tileDisplay = Kitronik_Zip_Tile.create_zip_tile_display(1, 1, Kitronik_Zip_Tile.UBitLocations.HIDDEN)
tileDisplay.clear()
tileDisplay.show()
tileDisplay.set_brightness(20)
numColumns = 0
rowToReceive = 0
ledMap = ["b00r0000",
    "0b0r0000",
    "00br0000",
    "000i0000",
    "wwwpbwww",
    "000r0b00",
    "yyyoyygy",
    "000r000b"]
colourOrder = ["r", "b", "g", "w", "0", "i", "o", "p", "v", "y"]
colours = [Kitronik_Zip_Tile.colors(ZipLedColors.RED),
    Kitronik_Zip_Tile.colors(ZipLedColors.BLUE),
    Kitronik_Zip_Tile.colors(ZipLedColors.GREEN),
    Kitronik_Zip_Tile.colors(ZipLedColors.WHITE),
    Kitronik_Zip_Tile.colors(ZipLedColors.BLACK),
    Kitronik_Zip_Tile.colors(ZipLedColors.INDIGO),
    Kitronik_Zip_Tile.colors(ZipLedColors.ORANGE),
    Kitronik_Zip_Tile.colors(ZipLedColors.PURPLE),
    Kitronik_Zip_Tile.colors(ZipLedColors.VIOLET),
    Kitronik_Zip_Tile.colors(ZipLedColors.YELLOW)]

def on_forever():
    pass
basic.forever(on_forever)
