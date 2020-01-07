class CartAdapter{

    constructor(baseAdapter){
        this.baseAdapter = baseAdapter
        this.baseURL = this.baseAdapter.baseURL
    }

    async getCart(){
        try{
        // const cartResponse = await fetch(`${this.baseURL}/accounts/${accountId}/carts/${cartId}`)
        const cartResponse = await fetch(`${this.baseURL}/carts/1`)
        const  cartJson = await cartResponse.json()
        return cartJson
            console.log(cartJson)
        }catch(error){
            console.log(error)
        }
    }


}