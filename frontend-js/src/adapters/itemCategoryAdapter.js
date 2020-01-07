class ItemCategoryAdapter{

    constructor(baseAdapter){
        this.baseAdapter = baseAdapter
        this.baseURL = this.baseAdapter.baseURL
    }

    async getCategoryItems(categoryId){
        try{
        // const itemsResponse = await fetch(`${this.baseURL}/categories/${categoryId}/items`)
        const itemsResponse = await fetch(`${this.baseURL}/categories/2/items`)
        const itemsJson = await itemsResponse.json()
        return itemsJson
        console.log (itemsJson)
        }catch(error){
        }
        
    }

}