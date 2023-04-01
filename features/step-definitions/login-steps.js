import { Given, When, Then } from "@wdio/cucumber-framework";

import HomePage from '../pageobjects/home-page.js'

Given('I am on the homepage', async() => {
  await HomePage.open()
})

Given('I perform Scrolling to footer', async() => {
  await HomePage.scrollToFooter()
})

When('I try to click Elements Button', async() => {
  await HomePage.clickButtonElements()
})

When('I try to click Button Double Click Me', async() => {
  await HomePage.clickDoubleClickMe()
})

Then('I click Button Click Me', async() => {
  await HomePage.clickClickMeBtn()
})

When('I try to click Button Right Click Me', async() => {
  await HomePage.clickRightClickMe
})

When('I try to click Buttons', async() => {
  await HomePage.clickButtons()
})