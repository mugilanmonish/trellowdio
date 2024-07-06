import TrelloMainPage from "../../pageobjects/trellomain.page.js";
import TrelloLoginPage from "../../pageobjects/trellologin.page.js";
import TrelloBoardsPage from "../../pageobjects/trelloboards.page.js";
import TrelloJavaScriptBoardPage from "../../pageobjects/trellojavascriptboard.page.js";
import TrelloLogoutPage from "../../pageobjects/trellologout.page.js";

describe('Trello', () => {
    it('Create and Arrange Cards', async () => {
        await browser.url('/')
        await browser.maximizeWindow()
        await TrelloMainPage.loginClick()
        await TrelloLoginPage.loginToApp("mugilanmonish@gmail.com", "Qwertyuiop@123")
        await TrelloBoardsPage.createBoard('Javascript Board')
        await TrelloJavaScriptBoardPage.createAndArrangeCards('Topics', 'Selenium', 'WebdriverIo', 'Webdriver methods', 'Browser')
        await TrelloJavaScriptBoardPage.closeBoard()
        await TrelloBoardsPage.logout()
        await TrelloLogoutPage.logoutToApp()
    })
})
