class CartAdapter{

    constructor(baseAdapter){
        this.baseAdapter = baseAdapter
        this.baseURL = this.baseAdapter.baseURL
    }

    async getCart(){
        try{
        const cartResponse = await fetch(`${this.baseURL}/accounts/${id}/carts`)
        const  cartJson = await cartResponse.json()
            console.log(cartJson)
        }catch(error){
            console.log(error)
        }
    }


}