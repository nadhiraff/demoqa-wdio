// const Page = require('./page')
import Page from './page.js'

class HomePage extends Page {

    get buttonLogout() {
        return $(`[onclick='logOut()']`)
    }

    get buttonElements() {
        return $(`///div[div[div[h5='Elements']]]`)
    }

    async clickButtonElements(){
        await (await this.buttonElements).click()
        await browser.pause(5000)
    }

    async scrollToFooter(){
        await browser.pause(5000)
        await (await this.footer).scrollIntoView()
        await browser.pause(5000)
    }

    async verifyLogout(){
        return await HomePage
    }

    open() {
        return super.open('buttons')
    }
}

// module.exports = new HomePage();
export default new HomePage()