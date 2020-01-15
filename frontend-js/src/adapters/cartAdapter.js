class CartAdapter{

    constructor(baseAdapter){
        this.baseAdapter = baseAdapter
        this.baseURL = this.baseAdapter.baseURL
    }

    get headers(){
        return this.baseAdapter.headers
    }
    
    async showCartItems(currentId){
        try{
            // const cartResponse = await fetch(`${this.baseURL}/carts/1/items`)
            const cartResponse = await fetch(`${this.baseURL}/mycart`)
            // const cartResponse = await fetch(`${this.baseURL}/carts/${currentId}`)
            console.log(cartResponse)
            const cartJson = await cartResponse.json()
            console.log(cartJson)
            return cartJson
        }catch(error){
            console.log(error.message)
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

    async removeFromCart(currentId){
        const res = await fetch(`${this.baseURL}/cart_items/${currentId}`, {
            method: "DELETE",
            headers: this.headers,
            body: JSON.stringify({item_id: currentId}),
            credentials: 'include'
        })
        console.log("here")
    }

}