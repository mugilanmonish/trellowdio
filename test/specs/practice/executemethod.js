describe('Ececute method', () => {
    it('should inject javascript on the page', async () => {
        const result = await browser.execute(
            (a, b, c, d) => {
                return a + b + c + d
            }, 1, 2, 3, 4)
        console.log(result)
    });
    it('Scrolling', async () => {
        await browser.maximizeWindow()
        await browser.url("https://en.wikipedia.org/wiki/JavaScript")
        await browser.pause(3000)
        await browser.execute((x, y) => {
            window.scrollTo(x, y)
        }, 0, 5000)
        await browser.pause(5000)
    })
    it('Enter value in disabled element', async () => {
        await browser.maximizeWindow()
        await browser.url("https://www.facebook.com/signup")
        const genderTextFild = await browser.$("input[name='custom_gender']")
        await browser.execute((element, value) => {
            element.value = value
        }, genderTextFild, "Transgender")
        await browser.$("//input[@value='-1']").click()
        const value = await genderTextFild.getValue()
        console.log(`*************************${value}*************************`);
        await browser.pause(10000)
    })
    it('Click disabled button', async () => {
        await browser.maximizeWindow()
        await browser.url('https://www.dofactory.com/html/button/disabled')
        const disabledElement = await browser.$("//button[text()='Click Me']")
        await browser.execute((ele) => {
            ele.removeAttribute('disabled');
            ele.click()
        }, disabledElement)
        await browser.pause(3000)
    })
    it('Scroll till element', async () => {
        await browser.maximizeWindow()
        await browser.url('https://www.amazon.in/')
        const backToTop = await browser.$('.navFooterBackToTopText')
        const location = await backToTop.getLocation()
        const x = location.x
        const y = location.y
        await browser.execute((x, y) => {
            window.scrollTo(x, y)
        }, x, y)
        await browser.pause(4000)
    })
    it.only('Scroll to bottom and top', async () => {
        await browser.maximizeWindow()
        await browser.url('https://www.amazon.in/')
        await browser.execute(() => {
            window.scrollBy(0, document.body.scrollHeight)
        })
        await browser.execute(() => {
            window.scrollBy(0, -document.body.scrollHeight)
        })
        await browser.pause(4000)
    })
})