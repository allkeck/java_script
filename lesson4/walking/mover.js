let mover = {
    /**
     * Получает и отдает направление от пользователя.
     * @returns {init} возвращаем направление, введенное пользователем.
     */
    getDirection() {
        const availableDirection = [2, 4, 6, 8, 1, 3, 7, 9];
        while (true) {
            let direction = parseInt(prompt('Введите число (2, 4, 6, или 8), куда вы хотите переместиться, "Отмена" для выхода.'));
            if (isNaN(direction)) {
                return null;
            }
            if (!availableDirection.includes(direction)) {
                alert('Для перемещения необходимо ввести одно из чисел 2, 4, 6, или 8.');
                continue;
            }
            return direction;
        }
    },

    /**
     * Отдает следующую точку в кторой будет находиться пользователь после передвижения.
     * @param {init} direction направление движения игрока.
     * @returns {{x: init, y: init}} следующая позиция игрока.
     */
    getNextPosition(direction) {
        const nextPosition = {
            x: player.x,
            y: player.y
        };
        switch (direction) {
            case 2:
                nextPosition.y++;
                break;
            case 4:
                nextPosition.x--;
                break;
            case 6:
                nextPosition.x++;
                break;
            case 8:
                nextPosition.y--;
                break;
            case 1:
                nextPosition.y++;
                nextPosition.x--;
                break;
            case 3:
                nextPosition.y++;
                nextPosition.x++;
                break;
            case 7:
                nextPosition.y--;
                nextPosition.x--;
                break;
            case 9:
                nextPosition.y--;
                nextPosition.x++;
                break;
        }
        return nextPosition;
    }
};