import WebdriverioUtils from "../gutils/wdioutils.js";

class TrelloBoardsPage {

    get createNewBoard() { return $("//span[text()='Create new board']") }

    get inputBoardTitle() { return $("//input[@data-testid='create-board-title-input']") }

    get btnCreate() { return $("//button[text()='Create']") }

    get btnAccountMenuIcon() { return $("//button[@aria-label='Open member menu']") }
    
    get btnLogout() { return $("//button[@data-testid='account-menu-logout']") }

    get optTemplate() { return $("//a[@href='/templates']") }

    get optHelp() { return $("//a[@data-testid='account-menu-help']") }

    /**
     * This method is used to create a board 
     * @param {String} title  Give the board title
     */
    async createBoard(title) {
        await this.createNewBoard.click()
        await this.inputBoardTitle.setValue(title)
        await this.btnCreate.waitForEnabled()
        await this.btnCreate.click()
    }

    /**
     * This method is used to logout in boards page 
     */
    async logout() {
        await this.btnAccountMenuIcon.click()
        await this.btnLogout.click()
    }

    async clickTemplate() {
        await this.optTemplate.click()
    }

    async goToHelpPage() {
        await this.btnAccountMenuIcon.click()
        await this.optHelp.click()
    }

    async switchBackToBoards() {
        await browser.switchWindow("Boards | Trello")
    }
}

export default new TrelloBoardsPage();