import TrelloMainPage from "../../pageobjects/trellomain.page.js";
import TrelloLoginPage from "../../pageobjects/trellologin.page.js";
import TrelloBoardsPage from "../../pageobjects/trelloboards.page.js";
import TrelloSupportPage from "../../pageobjects/trellosupport.page.js";
import TrelloLogoutPage from "../../pageobjects/trellologout.page.js";


describe('Trello',()=>{
    it('Switch To Help Page',async ()=>{
        await browser.url("/")
        await browser.maximizeWindow()
        await TrelloMainPage.loginClick()
        await TrelloLoginPage.loginToApp();
        await TrelloBoardsPage.goToHelpPage()
        await TrelloSupportPage.helpPageVerification()
        await TrelloBoardsPage.switchBackToBoards()
        await TrelloBoardsPage.btnLogout.click()
        await TrelloLogoutPage.logoutToApp()
    })
}) 