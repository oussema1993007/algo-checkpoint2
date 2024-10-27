function phraseCounter(phrase) {
    var caracterCounter = 0;
    var wordCounter = 0;
    var vowelCounter = 0;

    for (var i = 0; i < phrase.length; i++) {

        if ((phrase[i] != ' ') && (phrase[i] != '.')) { caracterCounter++; }

        if ((phrase[i] == ' ') || (phrase[i] == '.')) { wordCounter++; }

        if ((phrase[i] == 'a') || (phrase[i] == 'e') || (phrase[i] == 'i') || (phrase[i] == 'u') || (phrase[i] == 'o') || (phrase[i] == 'y')) {
            vowelCounter++;
        }
    }
    console.log("The length of sentence :", caracterCounter, "\n",
        "The number of words in the sentence:", wordCounter, "\n",
        "The number of vowels in the sentence :", vowelCounter);

}

phraseCounter("This is only test.");