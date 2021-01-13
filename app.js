const scissor = document.querySelector('.option-1');
const paper = document.querySelector('.option-2');
const rock = document.querySelector('.option-3');
const lizard = document.querySelector('.option-4');
const spock = document.querySelector('.option-5');
const pentagon = document.querySelector('.pentagon');
const display = document.querySelector('.result');
const output = document.querySelector('.display');
const buuton = document.querySelector('.play');
const verses = document.querySelector('.verses');
const ruleButton = document.querySelector('.button');

var points = 0;

var score;

ruleButton.addEventListener('click', function (){
    document.querySelector('.guide').classList.add('toggled');
});

document.querySelector('.heading-with-close img').addEventListener('click', function(){
    document.querySelector('.guide').classList.remove('toggled');
});

scissor.addEventListener('click', function () {

    display.classList.add('show');

    verses.classList.add('show');

    pentagon.classList.add('penta');

    var computer = Math.floor((Math.random() * 5) + 1);

    var result;
    
    switch (computer) {
        case 1:
            computerPick = "Scissor";
            result = "Draw";
            scissor.classList.add('draw');
            display.classList.add('moveDraw');
            verses.classList.remove('show');
            paper.classList.add('remove');
            rock.classList.add('remove');
            lizard.classList.add('remove');
            spock.classList.add('remove');
            break;
        
        case 2:
            computerPick = "Paper";;
            result = "You win";
            points++;
            myfunction();
            scissor.classList.add('select');
            paper.classList.add('selected');
            rock.classList.add('remove');
            lizard.classList.add('remove');
            spock.classList.add('remove');
            break;

        case 3:
            computerPick = "Rock";
            result = "You lose";
            points--;
            myfunction();
            scissor.classList.add('select');
            paper.classList.add('remove');
            rock.classList.add('selected');
            lizard.classList.add('remove');
            spock.classList.add('remove');
            break;

        case 4:
            computerPick = "Lizard";
            result = "You win";
            points++;
            myfunction();
            scissor.classList.add('select');
            paper.classList.add('remove');
            rock.classList.add('remove');
            lizard.classList.add('selected');
            spock.classList.add('remove');
            break;

        case 5:
            computerPick = "Spock";
            result = "You lose";
            points--;
            myfunction();
            scissor.classList.add('select');
            paper.classList.add('remove');
            rock.classList.add('remove');
            lizard.classList.add('remove');
            spock.classList.add('selected');
            break;

        default:
            result = computer;
    }
    output.innerText = result;

});

paper.addEventListener('click', function () {

    display.classList.add('show');

    verses.classList.add('show');

    pentagon.classList.add('penta');

    var computer = Math.floor((Math.random() * 5) + 1);

    var result;
    
    switch (computer) {
        case 1:
            computerPick = "Scissor";
            result = "You lose";
            points--;
            myfunction();
            scissor.classList.add('selected');
            paper.classList.add('select');
            rock.classList.add('remove');
            lizard.classList.add('remove');
            spock.classList.add('remove');
            break;
        
        case 2:
            computerPick = "Paper";
            result = "Draw";
            scissor.classList.add('remove');
            paper.classList.add('draw');
            display.classList.add('moveDraw');
            verses.classList.remove('show');
            rock.classList.add('remove');
            lizard.classList.add('remove');
            spock.classList.add('remove');
            break;

        case 3:
            computerPick = "Rock";
            result = "You win";
            points++;
            myfunction();
            scissor.classList.add('remove');
            paper.classList.add('select');
            rock.classList.add('selected');
            lizard.classList.add('remove');
            spock.classList.add('remove');
            break;

        case 4:
            computerPick = "Lizard";
            result = "You lose";
            points--;
            myfunction();
            scissor.classList.add('remove');
            paper.classList.add('select');
            rock.classList.add('remove');
            lizard.classList.add('selected');
            spock.classList.add('remove');
            break;

        case 5:
            computerPick = "Spock";
            result = "You win";
            points++;
            myfunction();
            scissor.classList.add('remove');
            paper.classList.add('select');
            rock.classList.add('remove');
            lizard.classList.add('remove');
            spock.classList.add('selected');
            break;

        default:
            result = computer;
    }
    output.innerText = result;

});

rock.addEventListener('click', function () {

    display.classList.add('show');

    verses.classList.add('show');

    pentagon.classList.add('penta');

    var computer = Math.floor((Math.random() * 5) + 1);

    var result;
    
    switch (computer) {
        case 1:
            computerPick = "Scissor";
            result = "You win";
            points++;
            myfunction();
            scissor.classList.add('selected');
            paper.classList.add('remove');
            rock.classList.add('select');
            lizard.classList.add('remove');
            spock.classList.add('remove');
            break;
        
        case 2:
            computerPick = "Paper";
            result = "You lose";
            points--;
            myfunction();
            scissor.classList.add('remove');
            paper.classList.add('selected');
            rock.classList.add('select');
            lizard.classList.add('remove');
            spock.classList.add('remove');
            break;

        case 3:
            computerPick = "Rock";
            result = "Draw";
            scissor.classList.add('remove');
            paper.classList.add('remove');
            rock.classList.add('draw');
            display.classList.add('moveDraw');
            verses.classList.remove('show');
            lizard.classList.add('remove');
            spock.classList.add('remove');
            break;

        case 4:
            computerPick = "Lizard";
            result = "You win";
            points++;
            myfunction();
            scissor.classList.add('remove');
            paper.classList.add('remove');
            rock.classList.add('select');
            lizard.classList.add('selected');
            spock.classList.add('remove');
            break;

        case 5:
            computerPick = "Spock";
            result = "You lose";
            points--;
            myfunction();
            scissor.classList.add('remove');
            paper.classList.add('remove');
            rock.classList.add('select');
            lizard.classList.add('remove');
            spock.classList.add('selected');
            break;

        default:
            result = computer;
    }
    output.innerText = result;

});

lizard.addEventListener('click', function () {

    display.classList.add('show');

    verses.classList.add('show');

    pentagon.classList.add('penta');

    var computer = Math.floor((Math.random() * 5) + 1);

    var result;
    
    switch (computer) {
        case 1:
            computerPick = "Scissor";
            result = "You lose";
            points--;
            myfunction();
            scissor.classList.add('selected');
            paper.classList.add('remove');
            rock.classList.add('remove');
            lizard.classList.add('select');
            spock.classList.add('remove');
            break;
        
        case 2:
            computerPick = "Paper";
            result = "You win";
            points++;
            myfunction();
            scissor.classList.add('remove');
            paper.classList.add('selected');
            rock.classList.add('remove');
            lizard.classList.add('select');
            spock.classList.add('remove');
            break;

        case 3:
            computerPick = "Rock";
            result = "You lose";
            points--;
            myfunction();
            scissor.classList.add('remove');
            paper.classList.add('remove');
            rock.classList.add('selected');
            lizard.classList.add('select');
            spock.classList.add('remove');
            break;

        case 4:
            computerPick = "Lizard";
            result = "Draw";
            scissor.classList.add('remove');
            paper.classList.add('remove');
            rock.classList.add('remove');
            lizard.classList.add('draw');
            display.classList.add('moveDraw');
            verses.classList.remove('show');
            spock.classList.add('remove');
            break;

        case 5:
            computerPick = "Spock";
            result = "You win";
            points++;
            myfunction();
            scissor.classList.add('remove');
            paper.classList.add('remove');
            rock.classList.add('remove');
            lizard.classList.add('select');
            spock.classList.add('selected');
            break;

        default:
            result = computer;
    }
    output.innerText = result;

});

spock.addEventListener('click', function () {

    display.classList.add('show');

    verses.classList.add('show');

    pentagon.classList.add('penta');

    var computer = Math.floor((Math.random() * 5) + 1);

    var result;
    
    switch (computer) {
        case 1:
            computerPick = "Scissor";
            result = "You win";
            points++;
            myfunction();
            scissor.classList.add('selected');
            paper.classList.add('remove');
            rock.classList.add('remove');
            lizard.classList.add('remove');
            spock.classList.add('select');
            break;
        
        case 2:
            computerPick = "Paper";
            result = "You lose";
            points--;
            myfunction();
            scissor.classList.add('remove');
            paper.classList.add('selected');
            rock.classList.add('remove');
            lizard.classList.add('remove');
            spock.classList.add('select');
            break;

        case 3:
            computerPick = "Rock";
            result = "You win";
            points++;
            myfunction();
            scissor.classList.add('remove');
            paper.classList.add('remove');
            rock.classList.add('selected');
            lizard.classList.add('remove');
            spock.classList.add('select');
            break;

        case 4:
            computerPick = "Lizard";
            result = "You lose";
            points--;
            myfunction();
            scissor.classList.add('remove');
            paper.classList.add('remove');
            rock.classList.add('remove');
            lizard.classList.add('selected');
            spock.classList.add('select');
            break;

        case 5:
            computerPick = "Spock";
            result = "Draw";
            scissor.classList.add('remove');
            paper.classList.add('remove');
            rock.classList.add('remove');
            lizard.classList.add('remove');
            spock.classList.add('draw');
            display.classList.add('moveDraw');
            verses.classList.remove('show');
            break;

        default:
            result = computer;
    }

    output.innerText = result;

});

buuton.addEventListener('click', function () {
    display.classList.remove('show');

    pentagon.classList.remove('penta');
    
    scissor.classList.remove('remove');
    paper.classList.remove('remove');
    rock.classList.remove('remove');
    lizard.classList.remove('remove');
    spock.classList.remove('remove');

    scissor.classList.remove('select');
    paper.classList.remove('select');
    rock.classList.remove('select');
    lizard.classList.remove('select');
    spock.classList.remove('select');

    scissor.classList.remove('selected');
    paper.classList.remove('selected');
    rock.classList.remove('selected');
    lizard.classList.remove('selected');
    spock.classList.remove('selected');

    scissor.classList.remove('draw');
    paper.classList.remove('draw');
    rock.classList.remove('draw');
    lizard.classList.remove('draw');
    spock.classList.remove('draw');

    verses.classList.remove('show');

    display.classList.remove('moveDraw');
});

function myfunction() {
    document.querySelector('.score').innerText = points;
}