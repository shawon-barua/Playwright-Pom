const BasePage = require('./Base.page');
class Timeline extends BasePage {
    constructor(page){
        // calling the parent class BasePage constructor 
        super(page);
        //selectors
        this.mypage = '#mypage';
        this.timeLineHeader = '#timeLineHeader';
        this.searchBox = '#search';
        this.itemList = '#items';
        this.purchaseBtn = '#purchaseBtn';
        this.itemTitle = '#itemTitle';
    }

    // to navigate to timeline page
    async navigate(){
        await super.navigate('timeline'); 
     }
    // method to go to MyPage
    async goMyPage(){
        await page.click(this.mypage);
    }
    //verify timline page header text
    async getTimelineHeader(){
        let timelineHeader = await this.page.$(this.timeLineHeader);
        await timelineHeader.isVisible();
        return await timelineHeader.innerText();
    }

    // method to search a item
    async searchItem(item){
        let search =  await this.page.$(this.searchBox);
        await search.type(item)
    }

    //method to find title
    async itemDetails(){
        let items =  await this.page.$$(this.itemList);
        await items[2].click();
        let purchaseBtn =  await this.page.$(this.purchaseBtn);
        await purchaseBtn.isVisible();
        let itemTitle = await this.page.$( this.itemTitle);
        return await itemTitle.innerText();
        
    }

}
module.exports = Timeline;