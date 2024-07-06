import TrelloMainPage from "../../pageobjects/trellomain.page.js";
import TrelloLoginPage from "../../pageobjects/trellologin.page.js";
import TrelloBoardsPage from "../../pageobjects/trelloboards.page.js";
import TrelloTemplatePage from "../../pageobjects/trellotemplate.page.js";
import TrelloJavaScriptBoardPage from "../../pageobjects/trellojavascriptboard.page.js";
import TrelloLogoutPage from "../../pageobjects/trellologout.page.js";

describe('Trello', async () => {
    it('Create And Delete Template Board', async () => {
        await browser.url("/")
        await browser.maximizeWindow()
        await TrelloMainPage.loginClick();
        await TrelloLoginPage.loginToApp("mugilanmonish@gmail.com", "Qwertyuiop@123");
        await TrelloBoardsPage.clickTemplate()
        await TrelloTemplatePage.createBoardUsingTemplate('New Tier')
        await TrelloJavaScriptBoardPage.templateCloseBoard();
        await TrelloJavaScriptBoardPage.deleteBoard();
        await TrelloBoardsPage.logout()
        await TrelloLogoutPage.logoutToApp()
    })
})