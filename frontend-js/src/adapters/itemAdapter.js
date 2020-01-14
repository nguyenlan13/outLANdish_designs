class ItemAdapter{

    constructor(baseAdapter){
        this.baseAdapter = baseAdapter
        this.baseURL = this.baseAdapter.baseURL
    }

    get headers(){
        return this.baseAdapter.headers
    }

    async getItem(currentId){
        try{
            const itemResponse = await fetch(`${this.baseURL}/items/${currentId}`)
            const itemJson = await itemResponse.json()
            return itemJson
        }catch(error){

        }
    }

    async addToCart(currentId){
        const res = await fetch(`${this.baseURL}/cart_items`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify({item_id: currentId}),
            credentials: 'include'
        })
        console.log(res)
    }


    // async getNumOfItems(){
    //     try{
    //         const cartResponse = await fetch(`${this.baseURL}/mycart/items`)
    //         console.log(cartResponse)
    //         const cartJson = await cartResponse.json()
    //         console.log(cartJson)
    //         return cartJson
    //     }catch(error){

    //     }
    // }



    
    // async getNumOfItems(){
    //     try{
    //         const numResponse = await fetch(`${this.baseURL}/cart_items`)
    //         const numJson = await numResponse.json()
    //         return numJson
    //     }catch(error){

    //     }
    // }
}