import { Given, When, Then } from "@wdio/cucumber-framework";

import HomePage from '../pageobjects/home-page.js'
import ElementsPage from "../pageobjects/elements-page.js";

Given('I am on the homepage', async() => {
  await HomePage.open()
})

Given('I am on the Interactions Page', async() => {
  await ElementsPage.open()
})

When('I try to click Elements Button', async() => {
  await HomePage.clickButtonElements()
})

When('I try to click Button Double Click Me', async() => {
  await ElementsPage.clickDoubleClickMe()
})

Then('I click Button Click Me', async() => {
  await ElementsPage.clickClickMeBtn()
})

When('I try to click Button Right Click Me', async() => {
  await ElementsPage.clickRightClickMe()
})

When('I try to click Buttons', async() => {
  await ElementsPage.clickButtons()
})
When('I try to click Interactions', async() => {
  await ElementsPage.clickInteractionBtn()
})

When('I try to click Dropable', async() => {
  await ElementsPage.clickDroppable()
})

Then('I successfully drop and drag the box', async() => {
  const elem = await $(`//div[text()='Drag me']`)
  const target = await $(`//div[p[text()='Drop here']]`)

  await elem.dragAndDrop(target)
  await elem.dragAndDrop({ x: 100, y: 200 })
})