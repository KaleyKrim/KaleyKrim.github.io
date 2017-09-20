var pixelPainter = (function(){

  var ppMom=document.getElementById("pixelPainter");
  var paletteMom = document.getElementById("palette");
  var eraseClearBox = document.getElementsByClassName("eraseClear");
  var saveLoadBox = document.getElementsByClassName("saveLoad");
  var paletteCells = document.getElementsByClassName("palettePix");
  var canvasCell = document.getElementsByClassName("colpixel");

  var colorArray = ["#ffffff", "#99ddff", "#df80ff", "#ffccdd", "#ffff99", "#b3ffd9", "#a6a6a6", "#1a75ff", "#cc00cc", "#ff0000", "#ffd11a", "#4dff4d", "#000000", "#000066", "#4d004d", "#800000", "#ff471a", "#009900"];
  var currentColor = colorArray[0];
  var isDrawing = false;
  var savedPicture = [];

  function makeGrid(rows, columns, rowClass, colClass, cellHeight, parentDiv){
    for (var x=0; x<rows; x++){
      var row = document.createElement("div");
      row.className = rowClass;
      for (var y=0; y<columns; y++){
        var col = document.createElement("div");
        col.className = colClass;
        col.style.height = cellHeight;
        col.style.width = cellHeight;
        row.appendChild(col);
      }
      parentDiv.appendChild(row);
    }
  }

  makeGrid(20, 20, "rowPixel", "colpixel", "25px", ppMom);
  makeGrid(3, 6, "paletteRow", "palettePix", "40px", paletteMom);
  makeGrid(4, 1, "eraseTable", "eraseClear", "60px", paletteMom);

  (function fillPalette(arr){
    for (var i = 0; i < arr.length; i++) {
      arr[i].style.backgroundColor = colorArray[i];
    }
  }(paletteCells));

  (function (){
    for (var i = 0; i < paletteCells.length; i++){
      paletteCells[i].addEventListener("click", selectColor);
    }
  }());

  eraseClearBox[0].innerHTML = "Erase";
  eraseClearBox[1].innerHTML = "Clear";
  eraseClearBox[2].innerHTML = "Save";
  eraseClearBox[3].innerHTML = "Load";
  eraseClearBox[0].addEventListener("click", eraseColor);
  eraseClearBox[1].addEventListener("click", clearCanvas);
  eraseClearBox[2].addEventListener("click", savePic);
  eraseClearBox[3].addEventListener("click", loadPic);


  function selectColor(x){
    currentColor = x.target.style.backgroundColor;
  }

  (function (){
    for (var i = 0; i < canvasCell.length; i++) {
      canvasCell[i].addEventListener("click", clickColor);
      canvasCell[i].addEventListener("mouseover", paintColor);
    }
  }());

  ppMom.addEventListener("mousedown", drawMe);
  document.body.addEventListener("mouseup", stopDraw);

  function paintColor(){
    if (isDrawing){
      this.style.backgroundColor = currentColor;
    }
  }

  function clickColor(){
    this.style.backgroundColor = currentColor;
  }

  function eraseColor(){
    currentColor = "#ffffff";
  }

  function drawMe (){
    isDrawing  = true;
  }

  function stopDraw (){
    isDrawing = false;
  }

  function clearCanvas(){
    for (var i = 0; i < canvasCell.length; i++){
      canvasCell[i].style.backgroundColor = "#ffffff";
    }
  }

  function savePic(){
    savedPicture = [];
    for (var i = 0; i < canvasCell.length; i++){
      savedPicture.push(canvasCell[i].style.backgroundColor);
    }
  }

  function loadPic(){
    for (var i =0; i < canvasCell.length; i++){
     canvasCell[i].style.backgroundColor = savedPicture[i];
    }
  }
}());