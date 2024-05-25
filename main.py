def displayLedMap():
    global i, j, colourIndex
    tileDisplay.clear()
    tileDisplay.show()
    i = 0
    j = 0
    while i < numRows:
        while j < numColumns:
            colourIndex = colourOrder.index(ledMap[j][i])
            tileDisplay.set_matrix_color(i, j, colours[colourIndex])
            j += 1
        j = 0
        i += 1
    tileDisplay.show()

def on_button_pressed_a():
    displayLedMap()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_received_string(receivedString):
    global mode
    if receivedString == "ledMapTx":
        mode = receivedString
    if receivedString == "updateLeds":
        displayLedMap()
radio.on_received_string(on_received_string)

def on_button_pressed_b():
    ledMap[0] = "wowrwowo"
    displayLedMap()
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_received_value(name, value):
    if mode == "ledMapTx":
        ledMap[value] = name
radio.on_received_value(on_received_value)

def on_logo_pressed():
    tileDisplay.clear()
    tileDisplay.show()
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

def initVariables():
    global numColumns, rowToReceive, mode, numRows, ledMap, initLedMap, colourOrder, colours
    numColumns = 0
    rowToReceive = 0
    mode = "idle"
    numRows = 8
    numColumns = 8
    ledMap = ["wwwwwwww",
        "wwwwwwww",
        "wwwwwwww",
        "wwwwwwww",
        "wwwwwwww",
        "wwwwwwww",
        "wwwwwwww",
        "wwwwwwww"]
    initLedMap = ["bbbbbbbb",
        "bbbbbbbb",
        "bbbbbbbb",
        "bbbbbbbb",
        "bbbbbbbb",
        "bbbbbbbb",
        "bbbbbbbb",
        "bbbbbbbb"]
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
initLedMap: List[str] = []
rowToReceive = 0
mode = ""
colours: List[number] = []
ledMap: List[str] = []
colourOrder: List[str] = []
colourIndex = 0
numColumns = 0
numRows = 0
j = 0
i = 0
tileDisplay: Kitronik_Zip_Tile.ZIPTileDisplay = None
initVariables()
radio.set_group(1)
tileDisplay = Kitronik_Zip_Tile.create_zip_tile_display(1, 1, Kitronik_Zip_Tile.UBitLocations.HIDDEN)
tileDisplay.set_brightness(10)
tileDisplay.show_rainbow(1, 360)
basic.pause(500)
tileDisplay.clear()
tileDisplay.show()
displayLedMap()

def on_forever():
    pass
basic.forever(on_forever)
