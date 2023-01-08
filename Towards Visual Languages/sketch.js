var canvasH;
var canvasW;
var myCanvas;

var rectang = [];

var column;
var line;


function setup() {
    canvasW = windowWidth - windowWidth / 3.9;
    canvasH = windowHeight - 105;
    myCanvas = createCanvas(canvasW, canvasH);

    myCanvas.position(windowHeight / 2.1, 20);

    myCanvas.style("border", "2px black solid");

    angleMode(DEGREES);

    backgroundColor = select("#backColor");
    b = backgroundColor.value();

    canvasWidth = select("#changeWidthCanvas");
    cw = canvasWidth.value();
    canvasHeight = select("#changeHeightCanvas");
    ch = canvasHeight.value();

    colorPick = select("#inputColor");
    c = color(colorPick.value());

    positionX = select("#changePositionX");
    // posX = positionX.value();
    positionY = select("#changePositionY");
    // posY = positionY.value();

    scaleComp = select("#scaling");

    columnSlider = select("#repeatX");
    xRepetition = columnSlider.value();

    lineSlider = select("#repeatY");
    yRepetition = lineSlider.value();


    column = int(width / 50);
    line = int(height / 50);


    for (var i = 0; i < 200; i++) {
        rectang[i] = [];
        for (var j = 0; j < 200; j++) {
            rectang[i].push(new Rectang(i * width / column, j * height / line, width / column - 2, height / line - 2, c)); // tenho que resolver isto 
        }
    }


}


function show(id) {
    var x = document.getElementById(id);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}



function draw() {
    myCanvas = createCanvas(canvasW, canvasH);

    b = backgroundColor.value();
    background(b);

 
    cw = canvasWidth.value();
    ch = canvasHeight.value();

    xRepetition = columnSlider.value();
    yRepetition = lineSlider.value();
    c = color(colorPick.value());
    // scaleVal = scaleComp.value();


    drawComp();

}




function drawComp() {
    for (var i = 0; i < xRepetition; i++) {
        for (var j = 0; j < yRepetition; j++) {
            rectang[i][j].draw();
        }
    }
}



function mousePressed() {

    for (var i = 0; i < xRepetition; i++) {
        for (var j = 0; j < yRepetition; j++) {
            if (rectang[i][j].hit(mouseX, mouseY)) {
                rectang[i][j].toggled();
            }

        }

    }


    // for (var i = 0; i <200; i++) {
    //     for (var j = 0; j < 200; j++) {
    //         if (rectang[i][j].isDrawn() == false && rectang[i][j].hit(mouseX,mouseY) && (mouseX > 0 && mouseX < width) && (mouseY > 0 && mouseX < height)) {
    //             for (var k = 0; k < xRepetition; k++) {
    //                 for (var m = 0; m < yRepetition; m++) {
    //                     rectang[k][m].notToggled();
    //                 }
    //             }
             
    //         }
    //     }
    // }

     for (var i = 0; i < xRepetition; i++) {
        for (var j = 0; j < yRepetition; j++) {
            if (!rectang[i][j].hit(mouseX,mouseY) && rectang[i][j].itsToggled() && (mouseX > 0 && mouseX < canvasW) && (mouseY > 0 && mouseX < canvasH)) {
                rectang[i][j].notToggled();
            }

        }

    }
}


function changeCol(val) {
    for (var i = 0; i < xRepetition; i++) {
        for (var j = 0; j < yRepetition; j++) {
            if (rectang[i][j].itsToggled()) {
                rectang[i][j].changeColor(val);
            }
        }
    }
}


function changePosiX(val) {
    for (var i = 0; i < xRepetition; i++) {
        for (var j = 0; j < yRepetition; j++) {
            if (rectang[i][j].itsToggled()) {
                rectang[i][j].changePosX(val);
            }
        }
    }
}

function changePosiY(val) {
    for (var i = 0; i < xRepetition; i++) {
        for (var j = 0; j < yRepetition; j++) {
            if (rectang[i][j].itsToggled()) {
                rectang[i][j].changePosY(val);
            }
        }
    }
}

// function changeRot(val) {
//     for (var i = 0; i < xRepetition; i++) {
//         for (var j = 0; j < yRepetition; j++) {
//             if (rectang[i][j].itsToggled()) {
//                 rectang[i][j].rotating(val);
//             }
//         }
//     }
// }

// function changeScale(val) {
//     for (var i = 0; i < xRepetition; i++) {
//         for (var j = 0; j < yRepetition; j++) {
//             if (rectang[i][j].itsToggled()) {
//                 rectang[i][j].scaling(val);
//             }
//         }
//     }
// }

function transfX(val) {
    for (var i = 0; i < xRepetition; i++) {
        for (var j = 0; j < yRepetition; j++) {
            if (rectang[i][j].itsToggled()) {
                rectang[i][j].shapeTransX(val);
            }
        }
    }
}

function transfY(val) {
    for (var i = 0; i < xRepetition; i++) {
        for (var j = 0; j < yRepetition; j++) {
            if (rectang[i][j].itsToggled()) {
                rectang[i][j].shapeTransY(val);
            }
        }
    }

}

function reset() {
    for (var i = 0; i < 200; i++) {
        rectang[i] = [];
        for (var j = 0; j < 200; j++) {
            rectang[i].push(new Rectang(i * width / column, j * height / line, width / column - 2, height / line - 2, c)); // tenho que resolver isto 
        }
    }

    for (var i = 0; i < xRepetition; i++) {
        for (var j = 0; j < yRepetition; j++) {
            rectang[i][j].changeColor(color(0));
        }
    }

    document.getElementById("inputColor").value = "#000000";
    document.getElementById("backColor").value = "#ffffff";
    document.getElementById("repeatX").value = "1";
    document.getElementById("repeatY").value = "1";

}

function changeCanvasX(){
    canvasW = cw;
    
}

function changeCanvasY(){
    canvasH = ch;
}

function unToggleAll(){
    for (var i = 0; i < xRepetition; i++) {
        for (var j = 0; j < yRepetition; j++) {
            if (rectang[i][j].itsToggled()) {
                rectang[i][j].notToggled();
            }
        }
    }
}

function save(){   

    saveCanvas(myCanvas, 'myCanvas', 'jpg');
}
