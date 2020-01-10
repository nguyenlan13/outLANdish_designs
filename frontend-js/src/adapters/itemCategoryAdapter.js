class ItemCategoryAdapter{

    constructor(baseAdapter){
        this.baseAdapter = baseAdapter
        this.baseURL = this.baseAdapter.baseURL
    }

    async getCategoryItems(currentId){
        try{
            const itemsResponse = await fetch(`${this.baseURL}/categories/${currentId}/items`)
            const itemsJson = await itemsResponse.json()
        return itemsJson
        }catch(error){
       
        }
    }
}