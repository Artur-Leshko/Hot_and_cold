export let letters_and_words = {
    arrayOfWords: ['котик', 'дверь', 'кухня', 'замок', 'школа', 'компьютер', 'вихрь', 'улитка', 'солнце', 'холодильник', 'ресторан', 'сообщение', 'тарелка', 'подушка', 'одеяло', 'фотография', 'окно', 'звезда', 'вертолёт', 'самолёт', 'корабль', 'лодка'],

    randomLetters: function() {
        let randomLetters = [];

        for (let i = 0; i < 20; i++) {
            randomLetters[i] = String.fromCharCode(Math.floor(Math.random() * (1104 - 1072) + 1072));
        }

        return randomLetters;
    },

    parseOnLetters: function(number) {
        let wordToParse = this.arrayOfWords[number];
        let parsedWord;

        parsedWord = wordToParse.split('');

        return parsedWord;
    }
};
