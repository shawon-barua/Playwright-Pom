class ShippingAddress  {
    constructor(page){
        this.page = page;

        //selectors
        this.pageHeader = '#shippingAddressHeader';
        this.shippingAddressBtn = '#btn-shippingAddress';
        this.addresses = '#shippingAddress';

    }
  
    async getShippingAddHeader(){
        let addressHeader = await this.page.$(this.pageHeader);
        return await addressHeader.innerText();
    }
    async addShippingAddress(){
        await page.click(this.shippingAddress);
    }

    async getLastAddress(){
        let address = await this.page.$$(this.addresses);
        return await address[address.length-1].innerText();
    }
}
module.exports = ShippingAddress;