import Page from './page.js'

class ElementsPage extends Page {

    get buttonButtons(){
        return $(`//li[span[text()='Buttons']]`)
    }

    async clickButtons(){
        await (await this.buttonButtons).click()
        await browser.pause(2000)
    }

    get buttonDoubleClickMe(){
        return $(`//button[text()='Double Click Me']`)
    }

    async clickDoubleClickMe(){
        await (await this.buttonDoubleClickMe).doubleClick()
        await browser.pause(2000)
    }

    get buttonRightClickMe(){
        return $(`//button[text()='Right Click Me']`)
    }

    async clickRightClickMe(){
        await (await this.buttonRightClickMe).click({ button: 'right' })
        await browser.pause(2000)
    }

    get buttonClickMe(){
        return $(`//button[text()='Click Me']`)
    }

    async clickClickMeBtn(){
        await (await this.buttonClickMe).click()
        await browser.pause(2000)
    }

    get buttonInteractions(){
        return $(`//div[text()='Interactions']`)
    }

    async clickInteractionBtn(){
        await (await this.buttonInteractions).click()
    }

    get buttonDroppable(){
        return $(`//li[span[text()='Droppable']]`)
    }

    async clickDroppable(){
        await (await this.buttonDroppable).click()
    }

    open() {
        return super.open('interaction')
    }
}

export default new ElementsPage()