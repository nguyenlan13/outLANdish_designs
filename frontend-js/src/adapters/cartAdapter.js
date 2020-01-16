class CartAdapter{

    constructor(baseAdapter){
        this.baseAdapter = baseAdapter
        this.baseURL = this.baseAdapter.baseURL
    }

    get headers(){
        return this.baseAdapter.headers
    }
    
    // async getCurrentCart(){
    //     try{
    //         const cartResponse = await fetch(`${this.baseURL}/mycart`)
    //         console.log(cartResponse)
    //         const cartJson = await cartResponse.json()
    //         console.log(cartJson)
    //         return cartJson
    //     }catch(error){
    //         console.log(error.message)
    //     }
    // }
    
    async showCartItems(){
        try{
            const cartItemResponse = await fetch(`${this.baseURL}/mycart`, {
                method: "GET",
                headers: this.headers,
                credentials: 'include'
            })
            const cartItemJson = await cartItemResponse.json()
            return cartItemJson
        }catch(error){
            console.log(error.message)
        }
    }

    async removeFromCart(currentId){
        try{
            const removeResponse = await fetch(`${this.baseURL}/cart_items/${currentId}`, {
                method: "DELETE",
                headers: this.headers,
                body: JSON.stringify({item_id: currentId}),
                credentials: 'include'
            })
        }catch(error){
            console.log(error.message)
        }
    }
}