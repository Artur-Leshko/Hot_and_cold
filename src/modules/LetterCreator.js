export default class LetterCreator {
    constructor(letter, truthfulness) {
        this.letter = letter;
        this.trtruthfulness = truthfulness;
    }

    _newCoords(letters) {
        let clientWidth = document.documentElement.clientWidth;
        let clientHeight = document.documentElement.clientHeight;

        let letterWidth = 37;
        let letterHeight = 37;

        for (let i = 0; i < 100; i++) {
            let intersects = false;
            this.coords = { x: Math.random() * (clientWidth - letterWidth - 10), y: Math.random() * (clientHeight - letterHeight - 20)};

            if(letters.length >= 1) {
                for (let letter of letters) {
                    if (this._intersects(letter.coords, this.coords)) {
                        intersects = true;
                        break;
                    }
                }
            } else {
                intersects = true;
            }

            if (!intersects) {
                break;
            }
        }
    }

    _intersects(coords1, coords2) {
        return (Math.abs(coords1.x - coords2.x) < 37) && (Math.abs(coords1.y - coords2.y) < 37)
    }

    _createLetter(letters) {
        let classes = [ 'first-image', 'second-image', 'third-image', 'fourth-image'];
        let div = document.createElement('div');
        this._newCoords(letters);

        div.textContent = this.letter;
        div.className = `letter ${classes[Math.floor(Math.random() * 4)]}`;
        div.style.top = `${this.coords.y}px`;
        div.style.left = `${this.coords.x}px`;

        return div;
    }

    addLetter(letters) {
        let newLetter = this._createLetter(letters);

        if(this.truthfulness == true) {
            newLetter.addEventListener('click', function(event) {
                console.log('true');
            });
        } else {
            newLetter.addEventListener('click', function(event) {
                console.log('false');
            });
        }

        document.body.appendChild(newLetter);
    }
}
