class PersonalInfo  {
    constructor(page){
        this.page = page;

        //selectors
        this.piHeader = '#PersonalInfoHeader';
        this.shippingAddress = '#address';
    }
 
    async getPersonalInfoHeader(){
        let piHeader = await this.page.$(this.piHeader);
        return await piHeader.innerText();
    }
    
    async goShippingAddress(){
        await page.click(this.shippingAddress);
    }
}
module.exports = PersonalInfo;