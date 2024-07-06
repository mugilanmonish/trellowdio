class JavascriptUtils {

    async generateRandomNumber() {
        let random = Math.floor(Math.random()*500)
        return random
    }

    async appendRandomNumberInEmail(email) {
        let x =await email.split("@")
        let random = Math.floor(Math.random()*500)
        let newEmail =await x[0]+random+'@'+x[1]
        return newEmail
    }
}

export default new JavascriptUtils();