function goBack() {
    alert("Hm. Fine. That's fine. I never said you had to stay.");
    window.history.back();
}

var pixelPainter = (function(){

  var canvasParent = document.getElementById("pixelPainter");
  var sidebarParent = document.getElementById("palette");

  var toolTable = document.getElementsByClassName("tools");
  var colorSwatches = document.getElementsByClassName("palettePix");
  var canvasCells = document.getElementsByClassName("colpixel");

  var colorArray = ["#ffffff", "#99ddff", "#df80ff", "#ffccdd", "#ffff99", "#b3ffd9", "#a6a6a6", "#1a75ff", "#cc00cc", "#ff0000", "#ffd11a", "#4dff4d", "#000000", "#000066", "#4d004d", "#800000", "#ff471a", "#009900"];
  var currentColor = colorArray[0];
  var isDrawing = false;
  var savedPicture = [];

  function makeGrid(rows, columns, rowClass, colClass, parentDiv){
    for (var x=0; x<rows; x++){
      var row = document.createElement("div");
      row.className = rowClass;
      for (var y=0; y<columns; y++){
        var col = document.createElement("div");
        col.className = colClass;
        row.appendChild(col);
      }
      parentDiv.appendChild(row);
    }
  }

  makeGrid(10, 10, "rowPixel", "colpixel", canvasParent);
  makeGrid(3, 6, "paletteRow", "palettePix", sidebarParent);
  makeGrid(4, 1, "toolTable", "tools", sidebarParent);

  (function fillColorPalette(arr){
    for (var i = 0; i < arr.length; i++) {
      arr[i].style.backgroundColor = colorArray[i];
    }
  }(colorSwatches));

  (function (){
    for (var i = 0; i < colorSwatches.length; i++){
      colorSwatches[i].addEventListener("click", selectColor);
    }
  }());

  toolTable[0].innerHTML = "Erase";
  toolTable[1].innerHTML = "Clear";
  toolTable[2].innerHTML = "Save";
  toolTable[3].innerHTML = "Load";
  toolTable[0].addEventListener("click", eraseColor);
  toolTable[1].addEventListener("click", clearCanvas);
  toolTable[2].addEventListener("click", savePic);
  toolTable[3].addEventListener("click", loadPic);


  function selectColor(x){
    currentColor = x.target.style.backgroundColor;
  }

  (function (){
    for (var i = 0; i < canvasCells.length; i++) {
      canvasCells[i].addEventListener("click", clickColor);
      canvasCells[i].addEventListener("mouseover", paintColor);
    }
  }());

  canvasParent.addEventListener("mousedown", drawMe);
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
    for (var i = 0; i < canvasCells.length; i++){
      canvasCells[i].style.backgroundColor = "#ffffff";
    }
  }

  function savePic(){
    savedPicture = [];
    for (var i = 0; i < canvasCells.length; i++){
      savedPicture.push(canvasCells[i].style.backgroundColor);
    }
  }

  function loadPic(){
    for (var i =0; i < canvasCells.length; i++){
     canvasCells[i].style.backgroundColor = savedPicture[i];
    }
  }
}());