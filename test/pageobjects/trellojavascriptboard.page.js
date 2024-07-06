import WebdriverioUtils from "../gutils/wdioutils.js";
import { Key } from "webdriverio";

class TrelloJavaScriptBoardPage {

    get textBoardTitle() { return $("//h1[@data-testid='board-name-display']") }

    get iconThreeDot() { return $("//a[text()='Javascript Board']/..//span[@data-testid='OverflowMenuHorizontalIcon']") }

    get iconThreeDotNewTier() { return $("//a[text()='New Tier']/..//span[@data-testid='OverflowMenuHorizontalIcon']") }

    get  btnCloseBoard() { return $("//span[text()='Close board']") }

    get btnClose() { return $("//button[text()='Close']") }

    get textBoardClosed() { return $("//div[@data-testid='cookies-consent-banner']/following-sibling::div/descendant::p") }

    get btnBoardMenu() { return $("//button[@aria-label='Show menu']") }

    get btnPermanentlyDeleteBrd() { return $("//button[text()='Permanently delete board']") }

    get btnDeleteBoard() { return $("//button[text()='Delete']") }

    get listTitle() { return $("//textarea[@name='Enter list title…']") }

    get topicAddCard() { return $("//textarea[text()='Topics']/ancestor::div[@data-testid='list']/descendant::button[text()='Add a card']") }

    get seleniumAddCard() { return $("//textarea[text()='Selenium']/ancestor::div[@data-testid='list']/descendant::button[text()='Add a card']") }

    get webdriverCard() { return $("//a[text()='Webdriver methods']") }

    get browserCard() { return $("//a[text()='Browser']") }

    get webdriverioAddCard() { return $("//textarea[text()='WebdriverIo']/ancestor::div[@data-testid='list']/descendant::button[text()='Add a card']") }

    get cardTitle() { return $("//textarea[@placeholder='Enter a title for this card…']") }

    get allTopicList() { return $$("//h2[text()='Topics']/ancestor::li/descendant::a") }

    get btnReopenBoard() { return $("//li/button[text()='Reopen board']") }

    get reopenBoardPopup() { return $("//button[@data-testid='workspace-chooser-reopen-button']") }

    async closeBoard() {
        await WebdriverioUtils.waitUntilTitleLoad("Javascript Board | Trello")
        let jsTitle = await browser.getTitle()
        await expect(jsTitle).toBe("Javascript Board | Trello")
        let boardTitle = await this.textBoardTitle.getText();
        await expect(boardTitle).toBe("Javascript Board")
        await this.iconThreeDot.moveTo()
        await this.iconThreeDot.click()
        await this.btnCloseBoard.click()
        await this.btnClose.click()
        let closedMsg = await this.textBoardClosed.getText()
        await expect(closedMsg).toBe("This board is closed. Reopen the board to make changes.")
    }

    async templateCloseBoard() {
        await WebdriverioUtils.waitUntilTitleLoad('New Tier | Trello')
        let jsTitle = await browser.getTitle()
        await expect(jsTitle).toBe('New Tier | Trello')
        let boardTitle = await this.textBoardTitle.getText();
        await expect(boardTitle).toBe('New Tier')
        await this.iconThreeDotNewTier.moveTo()
        await this.iconThreeDotNewTier.click()
        await this.btnCloseBoard.click()
        await this.btnClose.click()
        let closedMsg = await this.textBoardClosed.getText()
        await expect(closedMsg).toBe("This board is closed. Reopen the board to make changes.")
    }

    async deleteBoard() {
        await this.btnBoardMenu.waitForClickable()
        await this.btnBoardMenu.click()
        await this.btnPermanentlyDeleteBrd.click()
        await this.btnDeleteBoard.click()
        await WebdriverioUtils.waitUntilTitleLoad('Boards | Trello')
        const homePageTitle = await browser.getTitle();
        await expect(homePageTitle).toBe("Boards | Trello")
    }

    async deleteTemplateBoard() {
        await this.btnBoardMenu.waitForClickable()
        await this.btnBoardMenu.click()
        await this.btnPermanentlyDeleteBrd.click()
        await this.btnDeleteBoard.click()
        await WebdriverioUtils.waitUntilTitleLoad('Boards | Trello')
        const homePageTitle = await browser.getTitle();
        await expect(homePageTitle).toBe("Boards | Trello")
    }

    async createAndArrangeCards(title1,title2,title3,value1,value2) {
        await this.listTitle.setValue(title1)
        await browser.keys(Key.Enter)
        await this.listTitle.setValue(title2)
        await browser.keys(Key.Enter)
        await this.listTitle.setValue(title3)
        await browser.keys(Key.Enter)
        await this.topicAddCard.click()
        await this.cardTitle.setValue(value1)
        await browser.keys(Key.Enter)
        await this.cardTitle.setValue(value2)
        await browser.keys(Key.Enter)
        await browser.keys(Key.Enter)
        await browser.refresh()
        let source = await this.webdriverCard
        let source1 = await this.browserCard
        let target = await this.seleniumAddCard
        let target1 = await this.webdriverioAddCard
        await source.dragAndDrop(target)
        await source1.dragAndDrop(target1)
        // await browser.pause(1000)
        // await this.webdriverCard.dragAndDrop(this.seleniumAddCard)
        // await this.browserCard.dragAndDrop(this.webdriverioAddCard)
        // let topics = await this.allTopicList
        // for (const key in topics) {
        //     if (topics[key].getText()=='Webelement methods' || topics[key].getText()=='Webdriver methods') {
        //        await topics[key].dragAndDrop(this.seleniumAddCard)
        //     } else {
        //         await topics[key].dragAndDrop(this.webdriverioAddCard)
        //     }
        // }
    }

    async reopenBoard() {
        await this.btnBoardMenu.click()
        await this.btnReopenBoard.click()
        await this.reopenBoardPopup.moveTo()
        await this.reopenBoardPopup.waitForClickable({ timeout: 20000 })
        await this.reopenBoardPopup.click()
        await this.iconThreeDot.waitForDisplayed()
    }
}

export default new TrelloJavaScriptBoardPage();