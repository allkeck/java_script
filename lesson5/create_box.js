let createBox = {
    create(color) {
        let box = document.createElement('div');
        box.classList.add('size', color);
        return box;
    },
    
    createLetterBox(letter) {
        let letterBox = document.createElement('div');
        letterBox.classList.add('size', letter);
        return letterBox;
    }
}