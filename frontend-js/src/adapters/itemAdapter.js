class ItemAdapter{

    constructor(baseAdapter){
        this.baseAdapter = baseAdapter
        this.baseURL = this.baseAdapter.baseURL
    }

    async getItem(currentId){
        try{
            const itemResponse = await fetch(`${this.baseURL}/items/${currentId}`)
            const itemJson = await itemResponse.json()
        }catch(error){
        }
    }

}