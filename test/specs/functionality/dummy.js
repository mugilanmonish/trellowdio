import ExcelUtility from "../../gutils/excelutility.js";
import JavascriptUtils from "../../gutils/jsutils.js";

// describe('jsk',async () => {
//     it('dddjk', async () => {
//         // console.log(await ExcelUtility.readDataFromExcel());
//     })
// })
// console.log(await JavascriptUtils.generateRandomNumber());
// let email  = "mugilan@gmail.com"
// console.log(await JavascriptUtils.appendRandomNumberInEmail(email));

describe('',()=>{
    it('',async()=>{
        await browser.url("https://demoapps.qspiders.com/ui/frames?sublist=0")
        // await browser.pause(5000)
        // await browser.waitUntil(async ()=>{
        //     return(await $("//iframe[@class='w-full h-96']").isExisting())
        // },{
        //     timeout:10000,
        //     interval:500,
        //     timeoutMsg:'Not found'
        // })
        await $("//iframe[@class='w-full h-96']").isExisting()
        const fram =await $("//iframe[@class='w-full h-96']")
        await browser.switchToFrame(fram)
        await $("//input[@id='username']").setValue("mugilan@gmail.com")
        await browser.pause(5000)
    })
})