function SquareGame() {
    var square = `abcdefghijklmnop`; // `0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15`;
    var squareArr = square.split(``);
    const STATUS_WIN = `win`;
    const STATUS_PLAYING = `playing`;
    const WIN = `abcdefghijklmnop`;


    this.gameStatus = function() {
        var i = squareArr.join(``);
        if (WIN !== i) {
            return STATUS_PLAYING;
        }
        return STATUS_WIN;
    };


    this.startGame = function() {
        var currentIndex = squareArr.length,
            temporaryValue, randomIndex;

        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = squareArr[currentIndex];
            squareArr[currentIndex] = squareArr[randomIndex];
            squareArr[randomIndex] = temporaryValue;
        }

        return squareArr;
    };


    this.changePos1 = function() {
        var i = squareArr[5];
        squareArr[5] = squareArr[1];
        squareArr[1] = squareArr[0];
        squareArr[0] = squareArr[4];
        squareArr[4] = i;
        return squareArr;
    };


    this.changePos2 = function() {
        var i = squareArr[6];
        squareArr[6] = squareArr[2];
        squareArr[2] = squareArr[1];
        squareArr[1] = squareArr[5];
        squareArr[5] = i;
        return squareArr;
    };


    this.changePos3 = function() {
        var i = squareArr[7];
        squareArr[7] = squareArr[3];
        squareArr[3] = squareArr[2];
        squareArr[2] = squareArr[6];
        squareArr[6] = i;
        return squareArr;
    };


    this.changePos4 = function() {
        var i = squareArr[9];
        squareArr[9] = squareArr[5];
        squareArr[5] = squareArr[4];
        squareArr[4] = squareArr[8];
        squareArr[8] = i;
        return squareArr;
    };


    this.changePos5 = function() {
        var i = squareArr[10];
        squareArr[10] = squareArr[6];
        squareArr[6] = squareArr[5];
        squareArr[5] = squareArr[9];
        squareArr[9] = i;
        return squareArr;
    };


    this.changePos6 = function() {
        var i = squareArr[11];
        squareArr[11] = squareArr[7];
        squareArr[7] = squareArr[6];
        squareArr[6] = squareArr[10];
        squareArr[10] = i;
        return squareArr;
    };


    this.changePos7 = function() {
        var i = squareArr[13];
        squareArr[13] = squareArr[9];
        squareArr[9] = squareArr[8];
        squareArr[8] = squareArr[12];
        squareArr[12] = i;
        return squareArr;
    };


    this.changePos8 = function() {
        var i = squareArr[14];
        squareArr[14] = squareArr[10];
        squareArr[10] = squareArr[9];
        squareArr[9] = squareArr[13];
        squareArr[13] = i;
        return squareArr;
    };


    this.changePos9 = function() {
        var i = squareArr[15];
        squareArr[15] = squareArr[11];
        squareArr[11] = squareArr[10];
        squareArr[10] = squareArr[14];
        squareArr[14] = i;
        return squareArr;
    };

    this.modelLink = function() {
        return squareArr;
    };


}

var game = new SquareGame();




game.gameStatus()