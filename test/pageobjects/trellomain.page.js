class TrelloMainPage {
    get loginOpt() { return $("//a[text()='Log in' and contains(@class,'Buttons')]") }

    async loginClick() {
        await this.loginOpt.click();
    }
}

export default new TrelloMainPage();