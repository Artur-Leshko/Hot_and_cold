export default class RightLetterFieldCreator {
    constructor(rightLetter, letterId) {
        this.rightLetter = rightLetter;
        this.letterId = letterId;
    }

    createRightLetterField() {
        const div = document.createElement('div');
        const p = document.createElement('p');

        div.className = 'right_letter';
        p.textContent = this.rightLetter;
        p.className = `right-letter-${this.letterId}`;

        div.appendChild(p);
        document.querySelector('.right_letters_field').appendChild(div);
    }
}
