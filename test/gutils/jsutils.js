class JavascriptUtils {
    /**
     * @author Mugilan
     * @returns It returns random number between 1 - 500 
     */
    async generateRandomNumber() {
        let random = Math.floor(Math.random() * 500)
        return random
    }

    /**
     * @author Mugilan
     * @param {String} email It accepts emailid
     * @returns It returns unique emailid (e.g mugilan33@gmail.com) that 33 is random number.
     */
    async appendRandomNumberInEmail(email) {
        let x = email.split("@")
        let random = Math.floor(Math.random() * 500)
        let newEmail = x[0] + random + '@' + x[1]
        return newEmail
    }
    /**
     * @author Mugilan
     * @returns today date
     */
    getTodayDate() {
        const now = new Date();
        return now.getDate();
    }

    /**
     * @author Mugilan
     * @returns It retruns current month with year (e.g July 2024)
     */
    getmonthAndYear() {
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const now = new Date();
        const monthIndex = now.getMonth();
        const currentMonth = monthNames[monthIndex];
        const currentYear = now.getFullYear();

        return (currentMonth + " " + currentYear)
    }

    async removeSymbolInNumber(locator) {
        let arr = [];
        const elements = await $$(locator)
        for (let i = 0;i<elements.length; i++) {
            let value =await elements[i].getText();
            let newValue = value.replace(/[^0-9]/g, '');
            arr.push(newValue)
        }
        return arr
    }
s
    verifyNumberIsSortedInAscendingOrder(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (!(arr[i] <= arr[i + 1]))
                return false
            return true
        }
    }
}

export default new JavascriptUtils();