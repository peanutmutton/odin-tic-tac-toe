const gameBoardModule = (() => {
    const gameBoard = [["0","0","0"],
                        ["0","0","0"],
                        ["0","0","0"]];
                        //gameboard[][]
    let turnNumber = 1;
    let victoryDisplay = document.getElementById("victoryDisplay");

    //button finder and event assigner 
    //autoloading??
    let elem = document.getElementsByClassName('tile');
    
    for(let i=0; i<elem.length; i++) {
        (function () {
            elem[i].addEventListener('click', function(){
                if (turnNumber%2 != 0){
                    //leave X in array
                    
                    gameBoard[String(elem[i].id)[0]][String(elem[i].id)[1]] = "1";
                    elem[i].textContent = "X"
                
                }
                else if(turnNumber%2 == 0){
                    //leave 0
                    gameBoard[String(elem[i].id)[0]][String(elem[i].id)[1]] = "-1";
                    elem[i].textContent = "0"
                }
                console.log(victoryCheck());
                turnNumber+=1;
            }, {once:true});
        }());
    }


/*
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            (function () {


            loopedButton = document.getElementById(String(i)+String(j));
            //console.log(String(i)+String(j))
            
            loopedButton.addEventListener('click', () => {
                Xor0(turnNumber);
            
                

            }, {once:true});
            }()); //immediate invocation
        }
    }



    function Xor0(turnNumberArg){
        if (turnNumberArg%2 != 0){
            //leave X in array
            
            gameBoard[i][j] = "1";
            loopedButton.textContent = "X"
        
        }
        else if(turnNumberArg%2 == 0){
            //leave 0
            gameBoard[i][j] = "-1";
            loopedButton.textContent = "0"
        }
        
    }
*/
    function victoryCheck(){
        let sumRow, sumCol, sumDia;
        for(let i=0;i<3;i++){
            sumRow = 0;
            sumCol = 0;
            sumDia = 0;
            sumDia2 = 0;
            console.log("i cycle number "+i+ " began")
            for(let j=0;j<3;j++){
                console.log("j cycle number "+j+ " began")
                sumRow += Number(gameBoard[i][j]);
                console.log("Sumrow = "+sumRow);
                //
                sumCol += Number(gameBoard[j][i]);
                console.log("Sumcol = "+sumCol);
                //
                sumDia += Number(gameBoard[j][j]);
                console.log("Sumdia = "+sumDia);
                //
                sumDia2 += Number(gameBoard[j][2-j]);
                console.log("Sumdia2 = "+sumDia2);
            }
            if(sumRow == 3 || sumCol == 3 || sumDia == 3 || sumDia2 == 3){
                //victory X
                victoryDisplay.textContent = "X WINS"
                return("X wins!");
            }
            else if(sumRow == -3 || sumCol == -3 || sumDia == -3 || sumDia2 == -3){
                //victory 0
                victoryDisplay.textContent = "0 WINS"
                return("0 wins!");
            }
        }
        return("No victor!");
    }
    function gameLogic(){
        
    }
    //
    function leaveTicOnBoard(){
        console.log(turnNumber)
    }



    return{victoryCheck};       
})();

//console.log(gameBoardModule.victoryCheck());