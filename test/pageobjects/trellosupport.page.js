import WebdriverioUtils from "../gutils/wdioutils.js";
class TrelloSupportPage {
    
    get textContactSupport() { return $("//h1[@id='support-form-contact-title']/span") }
    

    async helpPageVerification() {
        await browser.switchWindow("support.atlassian.com")
        await WebdriverioUtils.waitUntilTitleLoad("Atlassian Support")
        const title = await browser.getTitle()
        await expect(title).toBe("Atlassian Support")
    }
}

export default new TrelloSupportPage();