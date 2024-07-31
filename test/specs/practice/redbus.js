import JavascriptUtils from "../../gutils/jsutils.js";
describe('Redbus',()=>{
    it('Dynamic xpath',async ()=>{
        await browser.url("https://www.redbus.in/")
        await browser.maximizeWindow()
        await $('#onwardCal').click()
        const todayDate = JavascriptUtils.getTodayDate()
        const xpath = `//span[text()='${todayDate}']`
        await $(xpath).click()
    })
})