class MenuHandler {
    constructor() {
        this.menuItems = [];
        this.selectedDifficulty = 'Normal';
    }

    addMenuItem(item) {
        this.menuItems.push(item);
    }

    selectDifficulty(difficulty) {
        const difficulties = ['Easy', 'Normal', 'Hard'];
        if (difficulties.includes(difficulty)) {
            this.selectedDifficulty = difficulty;
        } else {
            console.error('Invalid difficulty level selected.');
        }
    }

    displayMenu() {
        console.log('Menu Items:');
        this.menuItems.forEach(item => {
            console.log(item);
        });
        console.log(`Selected Difficulty: ${this.selectedDifficulty}`);
    }
}

// Example usage:
// const menu = new MenuHandler();
// menu.addMenuItem('Start Game');
// menu.addMenuItem('Settings');
// menu.selectDifficulty('Hard');
// menu.displayMenu();