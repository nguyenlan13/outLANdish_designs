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
            console.log(itemJson)
        }catch(error){
            console.log(error)
        }
    }


    // renderItem(el){
    //     const item = document.getElementById("item-container")
    //     const itemElement = document.createElement("li")
    //     itemElement.innerText = el
    //     item.appendChild(itemElement)
    // }
}