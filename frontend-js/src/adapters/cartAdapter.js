class CartAdapter{

    constructor(baseAdapter){
        this.baseAdapter = baseAdapter
        this.baseURL = this.baseAdapter.baseURL
    }

    async showCartItems(){
        try{
        // const cartResponse = await fetch(`${this.baseURL}/accounts/${accountId}/carts/${cartId}`)
        // const cartResponse = await fetch(`${this.baseURL}/carts/1/items`)
            // const cartResponse = await fetch(`${this.baseURL}/carts/${currentId}/items`)
            const cartResponse = await fetch(`${this.baseURL}/cart`)
            console.log(cartResponse)
            const cartJson = await cartResponse.json()
            console.log(cartJson)
            return cartJson
        }catch(error){

        }
    }

    // async addToCart(itemId){
    //     const res = await fetch(`${this.baseURL}/cart_items`, {
    //         method: "POST",
    //         headers: this.headers,
    //         body: JSON.stringify(itemId),
    //         credentials: 'include'
    //     })

    // }

    async removeFromCart(itemId){
        const res = await fetch(`${this.baseURL}/cart_items/${itemId}`, {
            method: "DELETE",
            headers: this.headers,
            body: JSON.stringify(itemId),
            credentials: 'include'
            
        })
        console.log("here")
    }

}