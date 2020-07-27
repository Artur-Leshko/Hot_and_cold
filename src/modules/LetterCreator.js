export default class LetterCreator {
    constructor(letter, truthfulness) {
        this.letter = letter;
        this.trtruthfulness = truthfulness;
    }

    _newCoords() {
        let clientWidth = document.documentElement.clientWidth;
        let clientHeight = document.documentElement.clientHeight;

        let letterWidth = 20;
        let letterHeight = 20;

        let coords = { newWidth: Math.random() * (clientWidth - letterWidth - 20), newHeight: Math.random() * (clientHeight - letterHeight - 20)};

        return coords;
    }

    _createLetter() {
        let classes = [ 'first-image', 'second-image', 'third-image', 'fourth-image'];
        let div = document.createElement('div');
        let coords = this._newCoords();

        div.textContent = this.letter;
        div.className = `letter ${classes[Math.floor(Math.random() * 4)]}`;
        div.style.top = `${coords.newHeight}px`;
        div.style.left = `${coords.newWidth}px`;

        return div;
    }

    addLetter() {
        let newLetter = this._createLetter();

        if(this.truthfulness === true) {
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
