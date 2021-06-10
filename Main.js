//MAIN--------------------------------------


let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth/2;
canvas.height = window.innerWidth/2;
let c = canvas.getContext('2d');


// importing all picture paths

let sBonde = 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Chess_pdt60.png';
let sTorn = 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Chess_rdt60.png';
let sLoper = 'https://upload.wikimedia.org/wikipedia/commons/8/81/Chess_bdt60.png';
let sKonge = 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Chess_kdt60.png';
let sDronning = 'https://upload.wikimedia.org/wikipedia/commons/a/af/Chess_qdt60.png';
let sHest = 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Chess_ndt60.png';
let hBonde = 'https://upload.wikimedia.org/wikipedia/commons/0/04/Chess_plt60.png';
let htorn = 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Chess_rlt60.png';
let hHest = 'https://upload.wikimedia.org/wikipedia/commons/2/28/Chess_nlt60.png';
let hLoper = 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Chess_blt60.png';
let hDronning = 'https://upload.wikimedia.org/wikipedia/commons/4/49/Chess_qlt60.png';
let hKing = 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Chess_klt60.png';

chessboard = new ChessBoard();
pos = new Position(canvas);


// initializing all new Pieces

function sortArray(){
    Sort= [];

    for (var i = 'a'.charCodeAt(0); i <= 'h'.charCodeAt(0); i++) {
        Sort.push(new Pown(sBonde,pos.getposition(String.fromCharCode(i),2)[0],pos.getposition(String.fromCharCode(i),2)[1], 's'));
    }

    Sort.push(new Rook(sTorn,pos.getposition('a',1)[0],pos.getposition('a',1)[1],'s'));
    Sort.push(new Rook(sTorn,pos.getposition('h',1)[0],pos.getposition('h',1)[1],'s'));

    Sort.push(new Knight(sHest,pos.getposition('b',1)[0],pos.getposition('b',1)[1],'s'));
    Sort.push(new Knight(sHest,pos.getposition('g',1)[0],pos.getposition('g',1)[1],'s'));


    Sort.push(new Bishop(sLoper,pos.getposition('c',1)[0],pos.getposition('c',1)[1],'s'));
    Sort.push(new Bishop(sLoper,pos.getposition('f',1)[0],pos.getposition('f',1)[1],'s'));

    Sort.push(new Queen(sDronning,pos.getposition('d',1)[0],pos.getposition('d',1)[1],'s'));
    Sort.push(new King(sKonge,pos.getposition('e',1)[0],pos.getposition('e',1)[1],'s'));

    for(i in Sort){
        Sort[i].draw();
    }
    return Sort;
}

function whiteArray(){
    Hvit= [];
    for (var i = 'a'.charCodeAt(0); i <= 'h'.charCodeAt(0); i++) {
        Hvit.push(new Pown(hBonde,pos.getposition(String.fromCharCode(i),7)[0],pos.getposition(String.fromCharCode(i),7)[1],'h'));
    }

    Hvit.push(new Rook(htorn,pos.getposition('a',8)[0],pos.getposition('a',8)[1],'h'));
    Hvit.push(new Rook(htorn,pos.getposition('h',8)[0],pos.getposition('h',8)[1],'h'));

    Hvit.push(new Knight(hHest,pos.getposition('b',8)[0],pos.getposition('b',8)[1],'h'));
    Hvit.push(new Knight(hHest,pos.getposition('g',8)[0],pos.getposition('g',8)[1],'h'));

    Hvit.push(new Bishop(hLoper,pos.getposition('c',8)[0],pos.getposition('c',8)[1],'h'));
    Hvit.push(new Bishop(hLoper,pos.getposition('f',8)[0],pos.getposition('f',8)[1],'h'));

    Hvit.push(new Queen(hDronning,pos.getposition('d',8)[0],pos.getposition('d',8)[1],'h'));
    Hvit.push(new King(hKing,pos.getposition('e',8)[0],pos.getposition('e',8)[1],'h'));
    for(i in Hvit){
        Hvit[i].draw();
    }
}


sortArray();
whiteArray();
addArrays();

function addArrays(){
    for(i in Sort){
        Sort[i].sortArray = Sort;
        Sort[i].hvitArray = Hvit;
    }
    for(i in Hvit){
        Hvit[i].sortArray = Sort;
        Hvit[i].hvitArray = Hvit;
    }
}


function drawPieces(){
    for(i in Sort){
        Sort[i].draw();
    }
    for(i in Hvit){
        Hvit[i].draw();
    }
}


function myPown(){

}
// moving pieces------------------------------------
canvas.addEventListener('mousedown', function(event){
    farge=null;
    for(i in Sort){
        if(Sort[i].xPos<(event.offsetX) && (Sort[i].xPos+width)>(event.offsetX)
        && Sort[i].yPos<(event.offsetY) && (Sort[i].yPos+width)>(event.offsetY)){
            index= i;
            farge="s";
            startpos=[Sort[i].xPos, Sort[i].yPos];
        }
    }
    for(i in Hvit){
        if(Hvit[i].xPos<(event.offsetX) && (Hvit[i].xPos+width)>(event.offsetX)
        && Hvit[i].yPos<(event.offsetY) && (Hvit[i].yPos+width)>(event.offsetY)){
            index= i;
            farge = "h";
            startpos = [Hvit[i].xPos, Hvit[i].yPos];
        }
    }

    canvas.addEventListener('mousemove', onMousemove);
    canvas.addEventListener('mouseup', onMouseuop);
})


//variables for pieces
let width = canvas.width/8;
let height = canvas.width/8;



function onMousemove(event){
    if(farge=="s"){
        c.clearRect(0,0,canvas.width, canvas.height); // clearing canvas
        Sort[index].xPos =event.offsetX- width/2;
        Sort[index].yPos = event.offsetY-width/2;
        new ChessBoard();
        drawPieces();
    }
    else if(farge== "h"){
        c.clearRect(0,0,canvas.width, canvas.height); // clearing canvas
        Hvit[index].xPos =event.offsetX- width/2;
        Hvit[index].yPos = event.offsetY-width/2;
        new ChessBoard();
        drawPieces();
    }
}

function onMouseuop(event){
    canvas.removeEventListener('mousemove', onMousemove);
    canvas.removeEventListener('mouseup', onMouseuop);

    lastPos= pos.returnPosition(event.offsetX,event.offsetY);
    xPosLast = pos.getposition(lastPos[0],lastPos[1])[0];
    yPosLast= pos.getposition(lastPos[0],lastPos[1])[1];

    if(farge=='h'){
        Hvit[index].xPos = startpos[0];
        Hvit[index].yPos = startpos[1];

        if(Hvit[index].checkMove(pos.returnPosition(xPosLast,yPosLast))){
            Hvit[index].xPos = xPosLast;
            Hvit[index].yPos = yPosLast;
        }
        else{
            Hvit[index].xPos = startpos[0];
            Hvit[index].yPos = startpos[1];
        }
        pos.checkPosition(Sort, Hvit, Hvit[index], startpos);


        if(Hvit[index] instanceof Pown && Hvit[index].xPos == xPosLast && Hvit[index].yPos == yPosLast){
            Hvit[index].count ++;
        }

    }

    else if(farge=='s'){

        console.log("sort");
        Sort[index].xPos = startpos[0];
        Sort[index].yPos = startpos[1];

        if(Sort[index].checkMove(pos.returnPosition(xPosLast,yPosLast))){
            Sort[index].xPos = xPosLast;
            Sort[index].yPos = yPosLast;
        }
        else{
            Sort[index].xPos = startpos[0];
            Sort[index].yPos = startpos[1];
        }

        pos.checkPosition(Sort, Hvit, Sort[index], startpos);

        if(Sort[index] instanceof Pown && Sort[index].xPos == xPosLast && Sort[index].yPos == yPosLast){
            Sort[index].count ++;
        }
    }


    //draw
    c.clearRect(0,0,canvas.width, canvas.height);
    new ChessBoard();
    drawPieces();
}
