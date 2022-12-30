const words = {
    nouns: ['hamster', 'dog', 'cat', 'table', 'lamp', 'bird', 'picture', 'computer', 'mouse', 'rat', 'rhino'],
    adjectives: ['hot', 'charming', 'brutal', 'killer', 'dangerous'],
    verbs: ['running', 'hopping', 'dancing', 'chasing', 'creating', 'following'],
    starters: [1, 2, 3, 4]
};

const verbs = words.verbs;
const nouns = words.nouns;
const adjectives = words.adjectives;

function randomMessage(starter) {
    switch (starter) {
        case 1:
            //TO DO get verb
            return `I foresee ${getRandWord(verbs)} in your future.`
            break;
        case 2:
            //TO DO get adjective and noun
            return `Soon you will meet a ${getRandWord(adjectives)} ${getRandWord(nouns)}.`
            break;
        case 3:
            //TO DO get adjective and noun
            return `Beware of the ${getRandWord(adjectives)} ${getRandWord(nouns)}.`
            break;
        case 4:
            //TO DO get adjective and noun
            return `Only the ${getRandWord(adjectives)} ${getRandWord(nouns)} will know what's in store for you.`
            break;
        default:
            console.log("Something in the randomMessage() function broke");
    }
};

const getRandWord = (type) => {
    let rand = Math.floor(Math.random() * type.length);
    return type[rand];
}

function makeFortune() {
    console.log(randomMessage(words.starters[Math.floor(Math.random() * words.starters.length)]))
    console.log(randomMessage(words.starters[Math.floor(Math.random() * words.starters.length)]))
    console.log(randomMessage(words.starters[Math.floor(Math.random() * words.starters.length)]))
}

makeFortune();