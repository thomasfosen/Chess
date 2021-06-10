class Position{
    constructor(canvas){
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


    returnPosition(x,y){
        this.letter= null;

        if(0<=x && x<this.width){
            this.letter='a';
        }

        else if(this.width<=x && x< this.width*2){
            this.letter= 'b';
        }
        else if(this.width*2<=x && x< this.width*3){
            this.letter= 'c';
        }
        else if(this.width*3<=x && x< this.width*4){
            this.letter= 'd';
        }
        else if(this.width*4<=x && x< this.width*5){
            this.letter= 'e';
        }
        else if(this.width*5<=x && x< this.width*6){
            this.letter= 'f';
        }
        else if(this.width*6<=x && x< this.width*7){
            this.letter= 'g';
        }
        else if(this.width*7<=x && x<= this.width*8){
            this.letter= 'h';
        }

        this.number= null;

        if(0<=y && y<this.width){
            this.number=1;
        }
        else if(this.width<=y && y< this.width*2){
            this.number= 2;
        }
        else if(this.width*2<=y && y< this.width*3){
            this.number= 3;
        }
        else if(this.width*3<=y && y< this.width*4){
            this.number= 4;
        }
        else if(this.width*4<=y && y< this.width*5){
            this.number= 5;
        }
        else if(this.width*5<=y && y< this.width*6){
            this.number= 6;
        }
        else if(this.width*6<=y && y< this.width*7){
            this.number= 7;
        }
        else if(this.width*7<=y && y<= this.width*8){
            this.number= 8;
        }


    return [this.letter, this.number];
    }


    checkPosition(Sort, Hvit, piece, startpos){

        if (piece.farge == 's'){
            for(i in Hvit){
                if(piece.xPos == Hvit[i].xPos && piece.yPos == Hvit[i].yPos){
                    Hvit.splice(i,1);
                }
            }

            for(i in Sort){
                if(piece.xPos == Sort[i].xPos && piece.yPos == Sort[i].yPos){
                    if(Sort[i] != piece){
                        piece.xPos = startpos[0];
                        piece.yPos = startpos[1];
                    }
                }
            }
        }
        if (piece.farge == 'h'){
            for(i in Sort){
                if(piece.xPos == Sort[i].xPos && piece.yPos == Sort[i].yPos){
                    Sort.splice(i,1)
                }
            }

            for(i in Hvit){
                if(piece.xPos == Hvit[i].xPos && piece.yPos == Hvit[i].yPos){
                    if(Hvit[i] != piece){
                        piece.xPos = startpos[0];
                        piece.yPos = startpos[1];
                    }
                }
            }
        }
    }
}
