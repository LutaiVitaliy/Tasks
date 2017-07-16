/*DomView.prototype.attach = function(model) {
        this.model = model;
        var that = this; // чтобы this был доступен в функции
        this.model.subscribe(MinesweeperModel.EVENT_UPDATE, function(e) {
            this.redraw(); // перерисовать картинку
        });
}



var button1 = document.getElementById(`b1`);
var button2 = document.getElementById(`b2`);
var button3 = document.getElementById(`b3`);
var button4 = document.getElementById(`b4`);
var button5 = document.getElementById(`b5`);
var button6 = document.getElementById(`b6`);
var button7 = document.getElementById(`b7`);
var button8 = document.getElementById(`b8`);
var button9 = document.getElementById(`b9`);
*/


function view() {

    var sqr01 = document.getElementById(`s01`);
    var sqr02 = document.getElementById(`s02`);
    var sqr03 = document.getElementById(`s03`);
    var sqr04 = document.getElementById(`s04`);
    var sqr05 = document.getElementById(`s05`);
    var sqr06 = document.getElementById(`s06`);
    var sqr07 = document.getElementById(`s07`);
    var sqr08 = document.getElementById(`s08`);
    var sqr09 = document.getElementById(`s09`);
    var sqr10 = document.getElementById(`s10`);
    var sqr11 = document.getElementById(`s11`);
    var sqr12 = document.getElementById(`s12`);
    var sqr13 = document.getElementById(`s13`);
    var sqr14 = document.getElementById(`s14`);
    var sqr15 = document.getElementById(`s15`);
    var sqr16 = document.getElementById(`s16`);



    sqr01.innerHTML = game.modelLink()[0].toUpperCase();
    sqr02.innerHTML = game.modelLink()[1].toUpperCase();
    sqr03.innerHTML = game.modelLink()[2].toUpperCase();
    sqr04.innerHTML = game.modelLink()[3].toUpperCase();
    sqr05.innerHTML = game.modelLink()[4].toUpperCase();
    sqr06.innerHTML = game.modelLink()[5].toUpperCase();
    sqr07.innerHTML = game.modelLink()[6].toUpperCase();
    sqr08.innerHTML = game.modelLink()[7].toUpperCase();
    sqr09.innerHTML = game.modelLink()[8].toUpperCase();
    sqr10.innerHTML = game.modelLink()[9].toUpperCase();
    sqr11.innerHTML = game.modelLink()[10].toUpperCase();
    sqr12.innerHTML = game.modelLink()[11].toUpperCase();
    sqr13.innerHTML = game.modelLink()[12].toUpperCase();
    sqr14.innerHTML = game.modelLink()[13].toUpperCase();
    sqr15.innerHTML = game.modelLink()[14].toUpperCase();
    sqr16.innerHTML = game.modelLink()[15].toUpperCase();


};


//console.log(getComputedStyle(sqr16));

//console.log(game.modelLink()[0]);


//squareArr[0]   pos 0    0
//squareArr[1]   pos 124  0
//squareArr[2]   pos 248  0
//squareArr[3]   pos 372  0
//squareArr[4]   pos 0    124
//squareArr[5]   pos 124  124
//squareArr[6]   pos 248  124
//squareArr[7]   pos 372  124
//squareArr[8]   pos 0    248
//squareArr[9]   pos 124  248
//squareArr[10]  pos 248  248
//squareArr[11]  pos 372  248
//squareArr[12]  pos 0    372
//squareArr[13]  pos 124  372
//squareArr[14]  pos 248  372
//squareArr[15]  pos 372  372