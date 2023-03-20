export const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export const createIconsArray = (inialCount) => {
    const cardsIcons = [
        'moon',
        'meteor',
        'ghost',
        'dice-d20',
        'chess-queen',
        'atom',
        'dragon',
        'hat-wizard'
    ];



    // 'compass',
    //     'cloud',
    //     'play',
    //     'bolt',
    //     'stop',
    //     'cogs',
    //     'atom',
    //     'basketball-ball'


    switch (inialCount) {
        case 10:
            return cardsIcons.slice(0, 5)
        case 12:
            return cardsIcons.slice(0, 6)
        case 14:
            return cardsIcons.slice(0, 7)
        case 16:
            return cardsIcons
        default:
            break;
    }
}


export const duplicateArray = (array) =>
    array.reduce((res, current) => res.concat([current, current]), []);