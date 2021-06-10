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
