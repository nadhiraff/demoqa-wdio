// const Page = require('./page')
import Page from './page.js'

class HomePage extends Page {

    get accountName() {
        return $('#nameofuser')
    }

    get buttonLogout() {
        return $(`[onclick='logOut()']`)
    }

    get buttonElements() {
        return $(`//h5[text()='Elements']`)
    }

    async clickButtonElements(){
        await (await this.buttonElements).click()
        await browser.pause(5000)
    }

    get buttonButtons(){
        return $(`//span[text()='Buttons']`)
    }

    async clickButtons(){
        await (await this.buttonButtons).click()
        await browser.pause(5000)
    }

    get buttonDoubleClickMe(){
        return $(`//button[text()='Double Click Me']`)
    }

    async clickDoubleClickMe(){
        await (await this.buttonDoubleClickMe).doubleClick()
        await browser.pause(5000)
    }

    get buttonRightClickMe(){
        return $(`//button[text()='Right Click Me']`)
    }

    async clickRightClickMe(){
        await (await this.buttonRightClickMe).click({ button: 'right' })
        await browser.pause(5000)
    }

    get buttonClickMe(){
        return $(`//button[text()='Click Me']`)
    }

    async clickClickMeBtn(){
        await (await this.buttonClickMe).click()
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