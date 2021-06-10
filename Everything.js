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


class ChessBoard{
    constructor(){
        for(let i = 0; i<=7; i++){
            for(let j =0; j<=7; j++){
                c.beginPath();
                c.rect(canvas.width/8*j, canvas.width/8*i, canvas.width/8, canvas.width/8);
                if(i%2 ==0){
                    if(j%2==0){
                        c.fillStyle= 'white';
                    }
                    else{
                        c.fillStyle= 'green';
                    }
                }
                else{
                    if(j%2 ==0){
                        c.fillStyle= 'green';
                    }
                    else {
                        c.fillStyle = 'white';
                    }
                }
                c.fill();
            }
        }
    }
}

class Position{
    constructor(){
        this.width = canvas.width/8;
    }

    getposition(x,y){
       if(x=='a'){
           this.xpos= 0;
       }
       else if (x=='b'){
            this.xpos= this.width;
       }
       else if(x=='c'){
        this.xpos= this.width*2;
       }
       else if (x=='d'){
        this.xpos= this.width*3;
       }
       else if(x=='e'){
        this.xpos= this.width*4;
       }
       else if (x=='f'){
          this.xpos= this.width*5;
       }
       else if(x=='g'){
        this.xpos= this.width*6;
       }
       else if (x=='h'){
        this.xpos= this.width*7;
       }

       if(y==1){
            this.ypos= 0;
        }
        else if (y==2){
            this.ypos= this.width;
        }
        else if(y==3){
            this.ypos= this.width*2;
        }
        else if (y==4){
            this.ypos= this.width*3;
        }
        else if(y==5){
             this.ypos= this.width*4;
        }
        else if (y==6){
            this.ypos= this.width*5;
        }
        else if(y==7){
            this.ypos= this.width*6;
        }
        else if (y==8){
            this.ypos= this.width*7;
        }

    return [this.xpos,this.ypos];
    }

}


class Pieces{

    constructor(path, xPos, ypos){
        this.path = path;
        this.xPos = xPos;
        this.ypos = ypos;
        this.width = canvas.width/8;
        this.height = canvas.width/8;
        this.image = new Image();
    }
    draw(){
        this.image.src = this.path;
        this.image.onload = this.drawImage1();
    }

    drawImage1(){
        c.drawImage(this.image, this.xPos, this.ypos, this.width, this.height);
    }

    setInitialpos(){
         //bønder
         for (var i = 'a'.charCodeAt(0); i <= 'h'.charCodeAt(0); i++) {
             this.x = new pieces(sBonde,pos.getposition(String.fromCharCode(i),2)[0],pos.getposition(String.fromCharCode(i),2)[1]);
             this.y= new pieces(hBonde,pos.getposition(String.fromCharCode(i),7)[0],pos.getposition(String.fromCharCode(i),7)[1]);
             this.x.draw();
             this.y.draw();
         }

         //restrerende
         this.torn1= new pieces(sTorn,pos.getposition('a',1)[0],pos.getposition('a',1)[1]);
         this.torn2= new pieces(sTorn,pos.getposition('h',1)[0],pos.getposition('h',1)[1]);
         this.torn1.draw();
         this.torn2.draw();

         this.hest1 = new pieces(sHest,pos.getposition('b',1)[0],pos.getposition('b',1)[1]);
         this.hest2 = new pieces(sHest,pos.getposition('g',1)[0],pos.getposition('g',1)[1]);
         this.hest1.draw();
         this.hest2.draw();

         this.loper1 = new pieces(sLoper,pos.getposition('c',1)[0],pos.getposition('c',1)[1]);
         this.loper2 = new pieces(sLoper,pos.getposition('f',1)[0],pos.getposition('f',1)[1]);
         this.loper1.draw();
         this.loper2.draw();

         //sort konge og dronning
         this.sDronning = new pieces(sDronning,pos.getposition('d',1)[0],pos.getposition('d',1)[1]);
         this.sKonge = new pieces(sKonge,pos.getposition('e',1)[0],pos.getposition('e',1)[1]);
         this.sDronning.draw();
         this.sKonge.draw();



         //restrerende hvit
         this.htorn1= new pieces(htorn,pos.getposition('a',8)[0],pos.getposition('a',8)[1]);
         this.htorn2= new pieces(htorn,pos.getposition('h',8)[0],pos.getposition('h',8)[1]);
         this.htorn1.draw();
         this.htorn2.draw();

         this.hhest1 = new pieces(hHest,pos.getposition('b',8)[0],pos.getposition('b',8)[1]);
         this.hhest2 = new pieces(hHest,pos.getposition('g',8)[0],pos.getposition('g',8)[1]);
         this.hhest1.draw();
         this.hhest2.draw();

         this.hloper1 = new pieces(hLoper,pos.getposition('c',8)[0],pos.getposition('c',8)[1]);
         this.hloper2 = new pieces(hLoper,pos.getposition('f',8)[0],pos.getposition('f',8)[1]);
         this.hloper1.draw();
         this.hloper2.draw();

         //sort konge og dronning
         this.hDronning = new pieces(hDronning,pos.getposition('d',8)[0],pos.getposition('d',8)[1]);
         this.hKonge = new pieces(hKing,pos.getposition('e',8)[0],pos.getposition('e',8)[1]);
         this.hDronning.draw();
         this.hKonge.draw();
    }
}


pos = new Position();

aBonde1 = new pieces(sBonde,pos.getposition('a',1)[0] , pos.getposition('a',1)[1]);

aBonde1.setInitialpos();





// moving pieces


canvas.addEventListener('click', function(event){
c.beginPath();
console.log(event.offsetX);
c.rect(event.offsetX,event.offsetY,100,100);
c.fillStyle ='black';
c.fill();
})
