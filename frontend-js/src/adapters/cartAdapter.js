class CartAdapter{

    constructor(baseAdapter){
        this.baseAdapter = baseAdapter
        this.baseURL = this.baseAdapter.baseURL
    }

    async showCartItems(currentId){
        try{
        // const cartResponse = await fetch(`${this.baseURL}/accounts/${accountId}/carts/${cartId}`)
        const cartResponse = await fetch(`${this.baseURL}/carts/1/items`)
            // const cartResponse = await fetch(`${this.baseURL}/carts/${currentId}/items`)
            const  cartJson = await cartResponse.json()
        return cartJson
        }catch(error){

        }
    }

    async addToCart(params){
        const res = await fetch(`${this.baseURL}/cart_items`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(params),
            credentials: 'include'
        })

    }

    async removeFromCart(params, currentId){
        const res = await fetch(`${this.baseURL}/cart_items/${currentId}`, {
            method: "DELETE",
            headers: this.headers,
            body: JSON.stringify(params, currentId),
            credentials: 'include'
        })

    }

}