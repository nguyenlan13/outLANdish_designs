class ItemAdapter{

    constructor(baseAdapter){
        this.baseAdapter = baseAdapter
        this.baseURL = this.baseAdapter.baseURL
    }

    async getItem(){
        try{
        const itemResponse = await fetch(`${this.baseURL}/items`)
        const itemJson = await itemResponse.json()
            console.log(itemJson)
        }catch(error){
            console.log(error)
        }
    }


//  renderItem(el){
//         const item = document.getElementById("item-container")
//         const itemElement = document.createElement("li")
//         itemElement.innerText = el
//         item.appendChild(itemElement)
//     }
}