import RightLetterFieldCreator from './RightLetterFieldCreator';

let scaleCoords = {
    scaleX: document.querySelector('.scale').getBoundingClientRect().x,
    scaleY: document.querySelector('.scale').getBoundingClientRect().y,
    scaleWidth: document.querySelector('.scale').getBoundingClientRect().width,
    scaleHeight: document.querySelector('.scale').getBoundingClientRect().height,
}

let clientWidth = document.documentElement.clientWidth;
let clientHeight = document.documentElement.clientHeight;

let letterWidth = 37;
let letterHeight = 37;

export default class LetterCreator {

    constructor(letter, truthfulness) {
        this.letter = letter;
        this.truthfulness = truthfulness;
        this.letterId = Math.floor(Math.random() * 1000000);
        this.rightLetterField = this.truthfulness === true ? new RightLetterFieldCreator(this.letter, this.letterId) : null;
        this.coords;
    }

    _newCoords(letters) {
        let intersects = true;

        while(intersects){
            intersects = false;
            this.coords = { x: Math.random() * (clientWidth - letterWidth - 10), y: Math.random() * (clientHeight - letterHeight - 20)};

            if(letters.length == 0 && (this.coords.y <= 50 || this._intersectsWithScale(this.coords))) {
                intersects = true;
            } else {
                for (let letter of letters) {
                    if (this.coords.y <= 50 || this._intersects(letter.coords, this.coords) || this._intersectsWithScale(this.coords)) {
                        intersects = true;
                        break;
                    }
                }
            }

        }
    }

    _intersects(coords1, coords2) {
        return (Math.abs(coords1.x - coords2.x) < 37) && (Math.abs(coords1.y - coords2.y) < 37);
    }

    _intersectsWithScale(letterCoords) {
        return (Math.abs(scaleCoords.scaleX - letterCoords.x) < scaleCoords.scaleWidth) && (Math.abs(scaleCoords.scaleY - letterCoords.y) < scaleCoords.scaleHeight)
    }

    _createLetter(letters) {
        let classes = [ 'first-image', 'second-image', 'third-image', 'fourth-image'];
        let div = document.createElement('div');
        this._newCoords(letters);

        div.textContent = this.letter;
        div.className = `letter ${classes[Math.floor(Math.random() * 4)]}`;
        div.id = this.letterId;
        div.style.top = `${this.coords.y}px`;
        div.style.left = `${this.coords.x}px`;

        return div;
    }

    addLetter(letters) {
        let newLetter = this._createLetter(letters);

        if(this.truthfulness === true) {
            this.rightLetterField.createRightLetterField();
            newLetter.addEventListener('click', () => {
                document.querySelector(`.right-letter-${this.letterId}`).style.display = 'block';
                newLetter.remove();
            });
        } else {
            newLetter.addEventListener('click', function(event) {
                console.log('false');
            });
        }

        document.body.appendChild(newLetter);
    }
}

gfjgklfdjgkfd
