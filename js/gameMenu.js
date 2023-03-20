import { gameStart } from "./gameStart.js";

export const createGameMenu = () => {
    const title = document.createElement('h2');
    const gameSection = document.querySelector('.game-section__container');

    gameSection.innerHTML = '';

    title.textContent = 'Choose difficult'
    title.classList.add('game-menu__title')

    const createDiffucultyButton = (difficult) => {
        const button = document.createElement('button');

        button.classList.add('game-menu__difficult-btn');
        button.textContent = `${difficult} cards`;

        button.addEventListener('click', () => gameStart(difficult))
        return button;
    }

    gameSection.append(
        title,
        createDiffucultyButton(10),
        createDiffucultyButton(12),
        createDiffucultyButton(14),
        createDiffucultyButton(16),
    )
}