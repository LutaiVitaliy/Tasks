function status() {
    if (game.gameStatus() == `win`) {
        alert(`YOU WIN!`);
    }
};



b1.addEventListener("click", game.changePos1);
b1.addEventListener("click", view);
b1.addEventListener(`click`, status)
b2.addEventListener(`click`, game.changePos2);
b2.addEventListener(`click`, view);
b2.addEventListener(`click`, status)
b3.addEventListener(`click`, game.changePos3);
b3.addEventListener(`click`, view);
b3.addEventListener(`click`, status)
b4.addEventListener(`click`, game.changePos4);
b4.addEventListener(`click`, view);
b4.addEventListener(`click`, status)
b5.addEventListener(`click`, game.changePos5);
b5.addEventListener(`click`, view);
b5.addEventListener(`click`, status)
b6.addEventListener(`click`, game.changePos6);
b6.addEventListener(`click`, view);
b6.addEventListener(`click`, status)
b7.addEventListener(`click`, game.changePos7);
b7.addEventListener(`click`, view);
b7.addEventListener(`click`, status)
b8.addEventListener(`click`, game.changePos8);
b8.addEventListener(`click`, view);
b8.addEventListener(`click`, status)
b9.addEventListener(`click`, game.changePos9);
b9.addEventListener(`click`, view);
b9.addEventListener(`click`, status)
start.addEventListener(`click`, game.startGame);
start.addEventListener(`click`, view);