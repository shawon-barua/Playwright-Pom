class MyPage {
    constructor(page){
        this.page = page;

        //selectors
        this.mypageHeader = '#mypageHeader';
        this.personalInfo = '#personalInfo';
    }
    // method to go to personal info
    async getPersonalInfo(){
        await page.click(this.personalInfo);
    }
    async getMyPageHeader(){
        let headText = await this.page.$(this.mypageHeader);
        return await headText.innerText();
    }
   
}
module.exports = MyPage;