class ItemAdapter{

    constructor(baseAdapter){
        this.baseAdapter = baseAdapter
        this.baseURL = this.baseAdapter.baseURL
    }

    async getItem(){
        try{
        // const itemResponse = await fetch(`${this.baseURL}/categories/${categoryId}/items/{itemId}`)
        const itemResponse = await fetch(`${this.baseURL}/categories/2/items/2`)
        const itemJson = await itemResponse.json()
        
        console.log(itemJson)
        return itemJson
            
        }catch(error){
            console.log(error)
        }
    }

}