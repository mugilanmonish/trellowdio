class WebdriverioUtils {
    /**
     * This method is used to wait until the page TITLE load
     * @param {String} expectedTitle Give the title to match
     */
    async waitUntilTitleLoad(expectedTitle) {
        await browser.waitUntil(async () => {
            return (await browser.getTitle() === expectedTitle)
        }, {
            timeout: 15000,
            interval: 500,
            timeoutMsg: "EXPECTED TITLE IS NOT MATCHING"
        })
    }

    /**
     * This method is used to wait until the page URL load
     * @param {String} expectedTitle give the title to match
     */
    async waitUntilUrlLoad(expectedUrl) {
        await browser.waitUntil(async () => {
            return (await browser.getUrl() === expectedUrl)
        }, {
            timeout: 15000,
            interval: 500,
            timeoutMsg: "EXPECTED URL IS NOT MATCHING"
        })
    }
}

export default new WebdriverioUtils();