import { assert } from "chai";
import JavascriptUtils from "../../gutils/jsutils.js";
import WebdriverioUtils from "../../gutils/wdioutils.js";

before(async () => {
    await browser.maximizeWindow()
    await browser.url("https://www.makemytrip.com/")
    await $("span[class='commonModal__close']").click()
})

beforeEach(async () => {
    await browser.url("https://www.makemytrip.com/")
})

describe('Makemytrip', () => {
    it.only('Dynamic', async () => {
        await $("//label[@for='fromCity']").click()
        await $("//input[@placeholder='From']").setValue("Goa")
        await $("label[for='departure']").click()
        const todayDate = JavascriptUtils.getTodayDate()
        const monthAndYear = JavascriptUtils.getmonthAndYear()
        const xpath = `//div[text()='${monthAndYear}']/ancestor::div[@class='DayPicker-Month']//p[text()='${todayDate}']`
        await $(xpath).click()
        await $("//a[text()='Search']").click()
    })

    it('All Booking mode page verification', async () => {
        const allLink = await $$("//span[@class='headerIconTextAlignment chNavText darkGreyText']").length
        for (let i = 1; i < allLink; i++) {
            const allMode = `(//span[@class='headerIconTextAlignment chNavText darkGreyText'])[${i}]`
            await $(allMode).click()
            const color = await WebdriverioUtils.fetchElementColour(allMode)
            assert.equal('#008cff', color, 'Color is Not Same')
        }
    })
})