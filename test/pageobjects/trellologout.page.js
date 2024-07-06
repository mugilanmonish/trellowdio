import WebdriverioUtils from "../gutils/wdioutils.js";

class TrelloLogoutPage { 
    get btnLogout() { return $("//span[text()='Log out']") }

    async logoutToApp() {
        await this.btnLogout.click()
        await WebdriverioUtils.waitUntilTitleLoad('Manage Your Team’s Projects From Anywhere | Trello')
        const homePageTitle = await browser.getTitle();
        await expect(homePageTitle).toBe("Manage Your Team’s Projects From Anywhere | Trello")
    }
}

export default new TrelloLogoutPage();