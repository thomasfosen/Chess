class Pieces{

    constructor(path, xPos, yPos, farge){
        this.path = path;
        this.xPos = xPos;
        this.yPos = yPos;
        this.farge= farge;

        this.pos= new Position(canvas);
        this.width = canvas.width/8;
        this.height = canvas.width/8;
        this.image = new Image();

    }
    draw(){
        this.image.src = this.path;
        this.image.onload = this.drawImage1();
    }

    drawImage1(){
        c.drawImage(this.image, this.xPos, this.yPos, this.width, this.height);
    }
}


class Queen extends Pieces{
    constructor(path, xPos, yPos, farge){
        super(path, xPos, yPos, farge);
    }

    checkMove(lastpos){
        // diagonal
        this.fellesarray = this.sortArray.concat(this.hvitArray);
        let letterPos= this.pos.returnPosition(this.xPos, this.yPos);
        let bokstav =letterPos[0].charCodeAt(0);
        let number = letterPos[1];
        let muligheter=[];
        //to the left
        let okning1= 1;
        let check1= true;
        let check2 = true;
        for(let i= bokstav-1; i>= 97; i--){
            if(number+okning1 <= 8){
                for(let j in this.fellesarray){
                    if(this.pos.returnPosition(this.fellesarray[j].xPos, this.fellesarray[j].yPos)[0]==String.fromCharCode(i) &&
                    this.pos.returnPosition(this.fellesarray[j].xPos, this.fellesarray[j].yPos)[1] == number + okning1){
                        check1 = false;
                    }
                }
                if(check1){
                    muligheter.push([String.fromCharCode(i), number + okning1]);
                }

            }

            if(number-okning1>=1){
                for(let j in this.fellesarray){
                    if(this.pos.returnPosition(this.fellesarray[j].xPos, this.fellesarray[j].yPos)[0]==String.fromCharCode(i) &&
                    this.pos.returnPosition(this.fellesarray[j].xPos, this.fellesarray[j].yPos)[1] == number - okning1){
                        check2 = false;
                    }
                }
                if(check2){
                    muligheter.push([String.fromCharCode(i), number -okning1]);
                }
            }
            okning1++;
        }
        let okning2=1;
        // to the right
        check1= true;
        check2 = true;
        for(let i= bokstav+1; i<= 104; i++){
            if(number+okning2 <= 8){
                for(let j in this.fellesarray){
                    if(this.pos.returnPosition(this.fellesarray[j].xPos, this.fellesarray[j].yPos)[0]==String.fromCharCode(i) &&
                    this.pos.returnPosition(this.fellesarray[j].xPos, this.fellesarray[j].yPos)[1] == number + okning2){
                        check1 = false;
                    }
                }
                if(check1){
                    muligheter.push([String.fromCharCode(i), number + okning2]);
                }
            }
            if(number-okning2>=1){
                for(let j in this.fellesarray){
                    if(this.pos.returnPosition(this.fellesarray[j].xPos, this.fellesarray[j].yPos)[0]==String.fromCharCode(i) &&
                    this.pos.returnPosition(this.fellesarray[j].xPos, this.fellesarray[j].yPos)[1] == number - okning2){
                        check2 = false;
                    }
                }
                if(check2){
                    muligheter.push([String.fromCharCode(i), number - okning2]);
                }
            }
        okning2++;
        }




        let rightCheck = true;
        let leftCheck = true;
        let upCheck = true;
        let downCheck = true;

        //adding going straight to the right

        for(let i = bokstav + 1 ; i<=104;i++){
            for(let j in this.fellesarray){
                if(this.pos.returnPosition(this.fellesarray[j].xPos, this.fellesarray[j].yPos)[0] == String.fromCharCode(i) && this.pos.returnPosition(this.fellesarray[j].xPos, this.fellesarray[j].yPos)[1] == number ){
                    rightCheck = false;
                }
            if(rightCheck){
                muligheter.push([String.fromCharCode(i), number ]);
                    }
                }
            }

        //directly to the left

        for(let k = bokstav - 1 ; k >= 97; k--){
            for(let m in this.fellesarray){
                if(this.pos.returnPosition(this.fellesarray[m].xPos, this.fellesarray[m].yPos)[0] == String.fromCharCode(k) && this.pos.returnPosition(this.fellesarray[m].xPos, this.fellesarray[m].yPos)[1] == number ){
                    leftCheck = false;
                }
            if(leftCheck){
                muligheter.push([String.fromCharCode(k), number ]);
                    }
                }
            }

            //checking directly upwards

        for(let a = number + 1 ; a <= 8; a++){
            for(let b in this.fellesarray){
                if(this.pos.returnPosition(this.fellesarray[b].xPos, this.fellesarray[b].yPos)[0] == String.fromCharCode(bokstav) && this.pos.returnPosition(this.fellesarray[b].xPos, this.fellesarray[b].yPos)[1] == a ){
                    upCheck = false;
                }
            if(upCheck){
                muligheter.push([String.fromCharCode(bokstav), a ]);
                    }
                }
            }

            //checking directly downwards

        for(let a = number -1  ; a >= 1; a--){
            for(let b in this.fellesarray){
                if(this.pos.returnPosition(this.fellesarray[b].xPos, this.fellesarray[b].yPos)[0] == String.fromCharCode(bokstav) && this.pos.returnPosition(this.fellesarray[b].xPos, this.fellesarray[b].yPos)[1] == a ){
                    downCheck = false;
                }
            if(downCheck){
                muligheter.push([String.fromCharCode(bokstav), a ]);
                    }
                }
            }





        for(let j=1; j<=8; j++){
            muligheter.push([String.fromCharCode(bokstav), j]);
        }

        for(let i in muligheter){
            if(muligheter[i][0]== lastpos[0] && muligheter[i][1] == lastpos[1]){
                return true;
            }
        }
        return false;
    }
}

class Rook extends Pieces{
    constructor(path, xPos, yPos, farge){
        super(path, xPos, yPos, farge);
    }

    checkMove(lastpos){
        let letterPos= this.pos.returnPosition(this.xPos, this.yPos);
        let bokstav =letterPos[0].charCodeAt(0);
        let number = letterPos[1];
        let muligheter=[];

        for(let i=97; i<=104;i++){
            muligheter.push([String.fromCharCode(i), number]);
        }
        for(let j=1; j<=8; j++){
            muligheter.push([String.fromCharCode(bokstav), j]);
        }

        for(let i in muligheter){
            if(muligheter[i][0]== lastpos[0] && muligheter[i][1] == lastpos[1]){
                return true;
            }
        }
        return false;
    }
}


class Bishop extends Pieces{
    constructor(path, xPos, yPos, farge){
        super(path, xPos, yPos, farge);
    }

    checkMove(lastpos){
        let letterPos= this.pos.returnPosition(this.xPos, this.yPos);
        let bokstav =letterPos[0].charCodeAt(0);
        let number = letterPos[1];
        let muligheter=[];

        //to the left
        let okning1= 1;
        for(let i= bokstav-1; i>= 97; i--){

            if(number+okning1 <= 8){
                muligheter.push([String.fromCharCode(i), number + okning1]);
            }
            if(number-okning1>=1){
                muligheter.push([String.fromCharCode(i), number -okning1]);
            }
        okning1++;
        }
        let okning2=1;
        // to the right
        for(let i= bokstav+1; i<= 104; i++){

            if(number+okning2 <= 8){
                muligheter.push([String.fromCharCode(i), number + okning2]);
            }
            if(number-okning2>=1){
                muligheter.push([String.fromCharCode(i), number -okning2]);
            }
        okning2++;
        }
        for(let i in muligheter){
            if(muligheter[i][0]== lastpos[0] && muligheter[i][1] == lastpos[1]){
                return true;
            }
        }
        return false;
    }
}




class King extends Pieces{
    constructor(path, xPos, yPos, farge){
        super(path, xPos, yPos, farge);
    }

    checkMove(lastpos){
        let letterPos= this.pos.returnPosition(this.xPos, this.yPos);
        let bokstav =letterPos[0].charCodeAt(0);
        let number = letterPos[1];
        let muligheter=[];

        for(let i= bokstav-1; i<=bokstav+1; i++){
            for(let j = number-1; j<= number+1; j++){
                if(i >= 97 && i<= 104 && j>=1 && j<=8){
                    muligheter.push([String.fromCharCode(i), j]);
                }
            }
        }

        console.log(muligheter);

        for(let i in muligheter){
            if(muligheter[i][0]== lastpos[0] && muligheter[i][1] == lastpos[1]){
                return true;
            }
        }
        return false;

    }

}


class Knight extends Pieces{
    constructor(path, xPos, yPos, farge){
        super(path, xPos, yPos, farge);
    }

    checkMove(lastpos){
        let letterPos= this.pos.returnPosition(this.xPos, this.yPos);
        let bokstav =letterPos[0].charCodeAt(0);
        let number = letterPos[1];
        let muligheter=[];

        for(let i = -1; i<=1; i=i+2){
            if(bokstav-2 >=97 && bokstav-2<= 104 & number+i>=1 && number+i<= 8){
                muligheter.push([String.fromCharCode(bokstav-2),number +i]);
            }
            if(bokstav+2 >=97 && bokstav+2<= 104 & number+i>=1 && number+i<= 8){
                muligheter.push([String.fromCharCode(bokstav+2),number+i])
            }
            if(bokstav+i >=97 && bokstav+i<= 104 & number+2>=1 && number+2<= 8){
                muligheter.push([String.fromCharCode(bokstav+i), number+2]);
            }
            if(bokstav+i >=97 && bokstav+i<= 104 & number-2>=1 && number-2<= 8){
                muligheter.push([String.fromCharCode(bokstav+i), number-2])
            }
        }


        for(let i in muligheter){
            if(muligheter[i][0]== lastpos[0] && muligheter[i][1] == lastpos[1]){
                return true;
            }
        }
        return false;
    }
}


class Pown extends Pieces{
    constructor(path, xPos, yPos, farge){
        super(path, xPos, yPos, farge);
        this.count = 0;
    }

    checkMove(lastpos){
        let letterPos= this.pos.returnPosition(this.xPos, this.yPos);
        let bokstav =letterPos[0].charCodeAt(0);
        let number = letterPos[1];
        let muligheter=[];

        if(this.count ==0){
            if(this.farge == 's'){
                for(let k in this.hvitArray){
                    if(letterPos[0] == this.pos.returnPosition(this.hvitArray[k].xPos, this.hvitArray[k].yPos)[0]
                    && number+1 == this.pos.returnPosition(this.hvitArray[k].xPos, this.hvitArray[k].yPos)[1]){
                        break;
                    }

                    else if(k == this.hvitArray.length-1){
                        muligheter.push([String.fromCharCode(bokstav),number+1]);
                    }
                }

                for(let k in this.hvitArray){
                    if(letterPos[0] == this.pos.returnPosition(this.hvitArray[k].xPos, this.hvitArray[k].yPos)[0]
                    && number+2 == this.pos.returnPosition(this.hvitArray[k].xPos, this.hvitArray[k].yPos)[1]){
                        break;
                    }

                    else if(k == this.hvitArray.length-1){
                        muligheter.push([String.fromCharCode(bokstav),number+2]);
                    }
                }
            }
            else{
                for(let k in this.sortArray){
                    if(letterPos[0] == this.pos.returnPosition(this.sortArray[k].xPos, this.sortArray[k].yPos)[0]
                    && number-1 == this.pos.returnPosition(this.sortArray[k].xPos, this.sortArray[k].yPos)[1]){
                        break;
                    }

                    else if(k == this.sortArray.length-1){
                        muligheter.push([String.fromCharCode(bokstav),number-1]);
                    }
                }
                for(let k in this.sortArray){
                    if(letterPos[0] == this.pos.returnPosition(this.sortArray[k].xPos, this.sortArray[k].yPos)[0]
                    && number-2 == this.pos.returnPosition(this.sortArray[k].xPos, this.sortArray[k].yPos)[1]){
                        break;
                    }

                    else if(k == this.sortArray.length-2){
                        muligheter.push([String.fromCharCode(bokstav),number-2]);
                    }
                }
            }
       }
        else{
            if(this.farge =='s'){
                for(let k in this.hvitArray){
                    if(letterPos[0] == this.pos.returnPosition(this.hvitArray[k].xPos, this.hvitArray[k].yPos)[0]
                    && number+1 == this.pos.returnPosition(this.hvitArray[k].xPos, this.hvitArray[k].yPos)[1]){
                        break;
                    }

                    else if(k == this.hvitArray.length-1){
                        muligheter.push([String.fromCharCode(bokstav),number+1]);
                    }
                }
            }
            else{
                for(let k in this.sortArray){
                    if(letterPos[0] == this.pos.returnPosition(this.sortArray[k].xPos, this.sortArray[k].yPos)[0]
                    && number-1 == this.pos.returnPosition(this.sortArray[k].xPos, this.sortArray[k].yPos)[1]){
                        break;
                    }

                    else if(k == this.sortArray.length-1){
                        muligheter.push([String.fromCharCode(bokstav),number-1]);
                    }
                }
            }
        }

        console.log(muligheter);

        // checking if it can take other player
        let taMuligheter = [];
        if(this.farge =='s'){
            taMuligheter.push([String.fromCharCode(bokstav-1), number+1]);
            taMuligheter.push([String.fromCharCode(bokstav+1), number+1]);

            for(let j in taMuligheter){
                if(taMuligheter[j][0]== lastpos[0] && taMuligheter[j][1] == lastpos[1]){
                    for(let k in this.hvitArray){
                        if(this.pos.returnPosition(this.hvitArray[k].xPos, this.hvitArray[k].yPos)[0] == lastpos[0]
                        && this.pos.returnPosition(this.hvitArray[k].xPos, this.hvitArray[k].yPos)[1] == lastpos[1]){
                            return true;
                        }
                    }
                }
            }
        }
        else
        {
            taMuligheter.push([String.fromCharCode(bokstav-1), number-1]);
            taMuligheter.push([String.fromCharCode(bokstav+1), number-1]);

            for(let j in taMuligheter){
                if(taMuligheter[j][0]== lastpos[0] && taMuligheter[j][1] == lastpos[1]){
                    for(let k in this.sortArray){
                        if(this.pos.returnPosition(this.sortArray[k].xPos, this.sortArray[k].yPos)[0] == lastpos[0]
                        && this.pos.returnPosition(this.sortArray[k].xPos, this.sortArray[k].yPos)[1] == lastpos[1]){
                            return true;
                        }
                    }
                }
            }
        }

        for(let i in muligheter){
            if(muligheter[i][0]== lastpos[0] && muligheter[i][1] == lastpos[1]){
                return true;
            }
        }
        return false;
    }
}
