export default class Page {
    open(path) {
        return browser.url(`https://demoqa.com/${path}`)
    }
}