const { chromium } = require('playwright');
const MyPage = require('../pages/MyPage.page');
const TimeLine = require('../pages/Timeline.page');
const PersonalInfo = require('../pages/PersonalInfo.page');
const AddAddress = require('../pages/AddAddress.page');
const ShippingAddress = require('../pages/ShippingAddress.page');


describe('Add New address in personal profile of Mercari Web App', () => {
    jest.setTimeout(30000);
    let browser = null;
    let context = null;
    let mypage  = null;
    let timeLine  = null;
    let personalInfo  = null;
    let shippingAddress = null;
    let addAddress  = null;

    beforeAll( async ()=>{
        // we launch browser and navigate to the timeline , we have skipped login step
        browser = await chromium.launch({ headless: false });
        context = await browser.newContext();
        page = await context.newPage();
        timeLine = new TimeLine(page);
        mypage = new MyPage(page);
        personalInfo = new PersonalInfo(page);
        shippingAddress = new ShippingAddress(page);
        addAddress = new AddAddress(page);

        await timeLine.navigate();
    });

    afterAll( async ()=>{
        // closing browser
        await context.close();
        await browser.close();
    });
    
    it('Should Go to MyPage', async() => {
        //verify if in timeline page
        expect(await timeLine.getTimelineHeader()).toBe('My Timeline');
        //go to mypage
        await timeLine.goMyPage();
        expect(await mypage.getMyPageHeader()).toBe('My Page');
    })

    it('Should go to Personal Information', async() => {
       await mypage.goPersonalInfo();
       expect(await personalInfo.getPersonalInfoHeader()).toBe('My Personal Info');
    })

    it('Should go to Shipping Address', async() => {
        await personalInfo.goShippingAddress();
        expect(await addAddress.getShippingAddHeader()).toBe('Addresses');
     })

    it('Click on Add shipping',  async() => {
        shippingAddress.addShippingAddress();
        expect(await addAddress.getFormHeader()).toBe('Add Details');

    })

    it('Fill the form and save a new address',  async() => {
        re = new RegExp('\b${firstname}\b.*\b${lastname}\b.*\b${address}', 'gi');

        addAddress.fillForm('test','lastname','address details');
        expect(await mypage.getMyPageHeader()).toBe('My Page');
        await mypage.getPersonalInfo();
        await personalInfo.goShippingAddress();
        expect(shippingAddress.getLastAddress()).toMatch(re);

    })

    
});