const puppeteer = require('puppeteer')

;(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

  const page = await browser.newPage()
  await page.setViewport({ width: 1400, height: 900 })

  console.log('Navigating to projects page...')
  await page.goto('http://localhost:3001/projects', {
    waitUntil: 'networkidle2',
    timeout: 30000,
  })

  console.log('Waiting for content to load...')
  await page.waitForSelector('.grid', { timeout: 10000 })

  await new Promise((resolve) => setTimeout(resolve, 3000))

  console.log('Taking screenshot...')
  await page.screenshot({
    path: 'projects-screenshot.png',
    fullPage: false,
  })

  console.log('Screenshot saved')
  await browser.close()
})()
