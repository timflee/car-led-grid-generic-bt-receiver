def displayLedMap():
    global i, j, numRows, numColumns, colourIndex
    i = 0
    j = 0
    numRows = len(ledMap)
    numColumns = len(ledMap[0])
    while i < numRows:
        while j < numColumns:
            colourIndex = 0
            tileDisplay.set_matrix_color(0, 0, colours[colourIndex])
    tileDisplay.show()

def on_received_number(receivedNumber):
    pass
radio.on_received_number(on_received_number)

def on_button_pressed_a():
    displayLedMap()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_received_string(receivedString):
    global rowToReceive
    if receivedString == "gridMode":
        rowToReceive = 0
radio.on_received_string(on_received_string)

def on_received_value(name, value):
    pass
radio.on_received_value(on_received_value)

def initVariables():
    global numColumns, rowToReceive, ledMap, colourOrder, colours
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
colourOrder: List[str] = []
rowToReceive = 0
colours: List[number] = []
colourIndex = 0
numColumns = 0
ledMap: List[str] = []
numRows = 0
j = 0
i = 0
tileDisplay: Kitronik_Zip_Tile.ZIPTileDisplay = None
radio.set_group(1)
tileDisplay = Kitronik_Zip_Tile.create_zip_tile_display(1, 1, Kitronik_Zip_Tile.UBitLocations.HIDDEN)
tileDisplay.set_brightness(20)
tileDisplay.show_rainbow(1, 360)
basic.pause(1000)
tileDisplay.clear()
tileDisplay.show()

def on_forever():
    pass
basic.forever(on_forever)
