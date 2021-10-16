const BasePage = require('./Base.page');
class ItemDetails extends BasePage {
    constructor(page){
        super(page);
        //selectors
        this.mypage = '#mypage';
        this.timeLineHeader = '#timeLineHeader';
        this.searchBox = '#search';
        this.itemList = '#items';
        this.purchaseBtn = '#purchaseBtn';
        this.itemTitle = '#itemTitle';
    }

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

    async searchItem(item){
        let search =  await this.page.$(this.searchBox);
        await search.type(item)
    }

    async itemTitlecheck(){
        let items =  await this.page.$$(this.itemList);
        await items[2].click();
        let purchaseBtn =  await this.page.$(this.purchaseBtn);
        await purchaseBtn.isVisible();
        let itemTitle = await this.page.$(this.itemTitle);
        return await itemTitle.innerText();
        
    }

}
module.exports = ItemDetails;