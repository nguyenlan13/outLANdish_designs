class CategoryAdapter{

    constructor(baseAdapter){
        this.baseAdapter = baseAdapter
        this.baseURL = this.baseAdapter.baseURL
    }

    async getCategories(){
        try{
            const categoriesResponse = await fetch(`${this.baseURL}/categories`)
            const  categoriesJson = await categoriesResponse.json()
        return categoriesJson
        }catch(error){

        }
    }
}