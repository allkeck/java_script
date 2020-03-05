let desk = document.querySelector('.desk');

let renderer = {
    render () {
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                let boxColor = BLACK_BOX;
                if ((i + j) % 2 === 0) {
                    boxColor = WHITE_BOX;
                }
                desk.append(createBox.create(boxColor));
            }
        }
    },

    deskIndexes() {
        let letterContainer = document.createElement('div');
        letterContainer.classList.add();
        for (let i = 0; i < LETTERS.length; i++) {
            const letter = LETTERS[i];
            letterContainer.append(letter);
        }
        desk.parentElement.insertBefore(letterContainer, desk);
    }
}

renderer.render();