class ItemCategoryAdapter{

    constructor(baseAdapter){
        this.baseAdapter = baseAdapter
        this.baseURL = this.baseAdapter.baseURL
    }

    async getCategoryItems(currentId){
        // console.log(currentId)
        try{
        const itemsResponse = await fetch(`${this.baseURL}/categories/${currentId}/items`)
        // const itemsResponse = await fetch(`${this.baseURL}/categories/2/items`)
        const itemsJson = await itemsResponse.json()
        // console.log (itemsJson)
        return itemsJson
        
        }catch(error){
        }

    }

}