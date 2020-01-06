class ItemCategoryAdapter{

    constructor(baseAdapter){
        this.baseAdapter = baseAdapter
        this.baseURL = this.baseAdapter.baseURL
    }

    async getItems(){
        try{
        // const itemsResponse = await fetch(`${this.baseURL}/categories/${id}/items`)
        const itemsResponse = await fetch(`${this.baseURL}/categories/1/items`)
        const itemJson = await itemsResponse.json()
        return itemJson
        }catch(error){
        }
        
    }

}