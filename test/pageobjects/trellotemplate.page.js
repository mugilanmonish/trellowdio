import WebdriverioUtils from "../gutils/wdioutils.js";

class TrelloTemplatePage {

    get optTierList() { return $("//div[text()='Tier List']") }

    get btnUseTemplate() { return $("//button[contains(text(),'Use template')]") }

    get inputTitle() { return $("//input[@id='boardNewTitle']") }

    get btnCreate() { return $("//input[@value='Create']") }

    /**
     * The method is used to create board using template. 
     * @param {String} title Give the title of the board
     */
    async createBoardUsingTemplate(title) {
        await this.optTierList.click()
        await browser.pause(5000)
        await this.btnUseTemplate.click()
        await this.inputTitle.setValue(title)
        await this.btnCreate.click()
    }
}

export default new TrelloTemplatePage();