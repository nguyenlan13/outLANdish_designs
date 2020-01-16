class CategoryAdapter{

    constructor(baseAdapter){
        this.baseAdapter = baseAdapter
        this.baseURL = this.baseAdapter.baseURL
    }

    async getCategories(){
        try{
            const categoriesResponse = await fetch(`${this.baseURL}/categories`)
        
            const categoriesJson = await categoriesResponse.json()
            return categoriesJson
        }catch(error){
            console.log(error.message)
        }
    }

    async getNumOfItems(){
        try{
            const numResponse = await fetch(`${this.baseURL}/mycart`, {
                method: "GET",
                headers: this.headers,
                credentials: 'include'
            })
            console.log(numResponse)
            const numJson = await numResponse.json()
            return numJson
        }catch(error){
            console.log(error.message)
        }
    }
}