// https://jestjs.io/docs/expect
const { chromium } = require('playwright');
const TimeLine = require('../pages/Timeline.page');
const ItemDetails = require('../pages/ItemDetails.page');


describe('Add New address in personal profile of Mercari Web App', () => {
    jest.setTimeout(30000);
    let browser = null;
    let context = null;
    let timeLine  = null;
    let itemDetails = null;

    beforeAll( async ()=>{
        // we launch browser and navigate to the timeline page
        browser = await chromium.launch({ headless: false });
        context = await browser.newContext();
        page = await context.newPage();
        timeLine = new TimeLine(page);
        itemDetails = new ItemDetails(page);
        await timeLine.navigate();
    });

    afterAll( async ()=>{
        // closing browser
        await context.close();
        await browser.close();
    });
    
    // search
    it('Search for MacBook', async() => {
        expect(await timeLine.getTimelineHeader()).toBe('My Timeline');
        await timeLine.searchItem('MacBook');
    })

    // check item title in details page
    it('Item Title check in details page', async() => {
       expect(await itemDetails.itemTitlecheck()).toContain('MacBook');
    })

    
    
});