import WebdriverioUtils from "../gutils/wdioutils.js";

class TrelloLoginPage {
    get inputEmail() { return $("//input[@id='username']") }

    get btnContinue() { return $("//span[text()='Continue']") }

    get inputPassword() { return $("//input[@name='password']") }

    get btnLogin() { return $("//button[@id='login-submit']") }

    /**
     * This method is used to login and verify the title of the boards page
     * @author mugilanmonish
     * @param {String} email Give the email address
     * @param {String} password Give the password
     */
    async loginToApp(email, password) {
        await this.inputEmail.setValue(email)
        await this.btnContinue.click()
        await this.inputPassword.waitForDisplayed()
        await this.inputPassword.setValue(password)
        await this.btnLogin.click()
        await WebdriverioUtils.waitUntilTitleLoad('Boards | Trello')
        const homePageTitle = await browser.getTitle();
        await expect(homePageTitle).toBe("Boards | Trello")
    }
}
export default new TrelloLoginPage();