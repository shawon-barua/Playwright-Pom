class AddAddress  {
    constructor(page){
        this.page = page;

        //selectors
        this.formHeader = '#formHeader';
        this.firstName = '#firstName';
        this.lastName = '#lastName';
        this.address = '#address';
        this.sbmtButtn = '#submit';
    }
   
    
    async fillForm(firstname,lastname,address){
        
        // firstname input
        await page.fill(this.firstName, firstname);

        // lastName input
        await page.fill(this.lastName, lastname);

        // address input
        await page.fill(this.address, address);

        await page.click(this.sbmtButtn);

    }
    
}
module.exports = AddAddress;