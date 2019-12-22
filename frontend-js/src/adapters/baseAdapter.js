class BaseAdapter{

    constructor(baseURL = '/api/v1'){
        this.baseURL = baseURL
        // this.token = null
    }

    get headers(){
        let baseHeaders = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
}