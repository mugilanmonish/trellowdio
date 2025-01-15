import TrelloMainPage from "../../pageobjects/trellomain.page.js";
import TrelloLoginPage from "../../pageobjects/trellologin.page.js";
import TrelloBoardsPage from "../../pageobjects/trelloboards.page.js";
import TrelloJavaScriptBoardPage from "../../pageobjects/trellojavascriptboard.page.js";
import TrelloLogoutPage from "../../pageobjects/trellologout.page.js";
 
describe('Trello', async () => {
    it('Create And Delete Board', async () => {
        await browser.url("/")
        await browser.maximizeWindow()
        await TrelloMainPage.loginClick();
        await TrelloLoginPage.loginToApp();
        await TrelloBoardsPage.createBoard("Javascript Board");
        await TrelloJavaScriptBoardPage.closeBoard();
        await TrelloJavaScriptBoardPage.deleteBoard()
        await TrelloBoardsPage.logout()
        await TrelloLogoutPage.logoutToApp()
    })
})
