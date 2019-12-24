class BaseAdapter{

    constructor(baseURL = 'http://localhost:3000/api/v1'){
        this.baseURL = baseURL
        // this.token = null
    }

    get headers(){
        let baseHeaders = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        // return baseHeaders
    }
    
}
