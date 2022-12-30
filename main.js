const words = {
    nouns: ['hamster', 'dog', 'cat', 'table', 'lamp', 'bird', 'picture', 'computer', 'mouse', 'rat', 'rhino'],
    adjectives: ['hot', 'angry', 'charming', 'brutal', 'killer', 'dangerous'],
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
            break;
        case 2:
            //TO DO get adjective and noun
            break;
        case 3:
            //TO DO get adjective and noun
            break;
        case 4:
            //TO DO get adjective and noun
            break;
        default:
            console.log("Something in the randomMessage() function broke");
    }
};

const getRandWord = (type) => {
    let rand = Math.floor(Math.random() * type.length);
    return type[rand];
}