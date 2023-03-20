import { createGameCard } from "./gameCard.js";
import { createGameMenu } from "./gameMenu.js";
import { createIconsArray, duplicateArray, shuffleArray } from "./utils.js";

export const gameStart = (difficult) => {
    let firstCard = null;
    let secondCard = null;
    let clickable = true;

    const gameSection = document.querySelector('.game-section__container');
    const gameTable = document.createElement('div');

    gameSection.innerHTML = '';
    const restartButton = document.createElement('button');
    const link = document.createElement('a');
    link.textContent = 'Start Over';
    gameTable.classList.add('game-table');
    restartButton.classList.add('restart-btn');

    const cardsIcons = createIconsArray(difficult);
    const duplicatedCardsIcons = duplicateArray(cardsIcons);

    shuffleArray(duplicatedCardsIcons);

    duplicatedCardsIcons.forEach(icon => gameTable.append(createGameCard('question-circle', icon)));

    gameSection.append(gameTable, restartButton);

    restartButton.append(link);

    const cards = document.querySelectorAll('.game-card');
    const flipped = document.querySelectorAll('.game-card.flip'); // 

    restartButton.addEventListener('click', createGameMenu)

    cards.forEach((card, index) => card.addEventListener('click', () => {
        if (clickable == true && !card.classList.contains('successfully')) {
            card.classList.add('flip');

            if (firstCard == null) {
                firstCard = index;
            } else {
                if (index != firstCard) {
                    secondCard = index;
                    clickable = false;
                }
            }

            if (firstCard != null && secondCard != null && firstCard != secondCard) {
                if (
                    cards[firstCard].firstElementChild.className ===
                    cards[secondCard].firstElementChild.className
                ) {
                    setTimeout(() => {
                        cards[firstCard].classList.add('successfully');
                        cards[secondCard].classList.add('successfully');
                        cards[firstCard].classList.add('flip-no-transform');
                        cards[secondCard].classList.add('flip-no-transform');
                        firstCard = null;
                        secondCard = null;
                        clickable = true;



                    }, 500);
                } else {
                    setTimeout(() => {
                        cards[firstCard].classList.remove('flip');
                        cards[secondCard].classList.remove('flip');

                        firstCard = null;
                        secondCard = null;
                        clickable = true;
                    }, 500);
                }
            }
        }

    }));
}