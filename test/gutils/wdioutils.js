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

    async waitForSuggestion(element) {
        await browser.waitUntil(async () => {
            return await $(element).isDisplayed()
        }, {
            timeout: 10000,
            interval: 500,
            timeoutMsg: 'Suggestion is not dispalyed in the specied time'
        })
    }

    async waitForDoubleDollarSelector(selector) {
        await browser.waitUntil(
            async () => {
                const element = await $$(selector)
                return element.length > 10;
            }, {
                timeout : 10000,
                interval : 500,
                timeoutMsg : `No element found for the given selector within the timeout`
            }
        )
    }

    async fetchElementColour(locator) {
        const element = await $(locator)
        const rgbColor = await element.getCSSProperty('color')
        return (rgbColor.parsed.hex.toString())
    }
}

export default new WebdriverioUtils();