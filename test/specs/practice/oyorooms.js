import { assert } from "chai";
import JavascriptUtils from "../../gutils/jsutils.js";
import WebdriverioUtils from "../../gutils/wdioutils.js";

describe('Oyo Rooms Booking', () => {
    it('Verify Sorting Price Low to High', async () => {
        await browser.maximizeWindow()
        await browser.url("https://www.oyorooms.com/")
        const location = await $("#autoComplete__home")
        await location.setValue("Bangalore")
        const suggestion = "(//div[@class='oyo-row oyo-row--no-spacing geoSuggestionsList__container ']/div)[position()=1]"
        await WebdriverioUtils.waitForSuggestion(suggestion)
        await $(suggestion).click()
        await $("button[class='u-textCenter searchButton searchButton--home']").click()
        await $('.dropdown__select').click()
        await $("//span[text()='Price Low to High']").click()
        await $("//span[@class='dropdown__label']/following-sibling::span[text()='Price Low to High']").waitForDisplayed()
        const priceEle = "//span[@class='listingPrice__finalPrice listingPrice__finalPrice--black']"
        WebdriverioUtils.waitForDoubleDollarSelector(priceEle)
        const newPrice =await JavascriptUtils.removeSymbolInNumber(priceEle)
        assert.isTrue(JavascriptUtils.verifyNumberIsSortedInAscendingOrder(newPrice), "It is not sorted in Low to High")
    })
})