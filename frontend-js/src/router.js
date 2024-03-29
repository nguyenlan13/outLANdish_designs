class Router{

    constructor(kvpairs){
        this.routes = kvpairs
    }

    set rootPage(rpKey){
        this.rootPage = this.routes[rpKey]
    }

    render(page, currentId){
        if(currentId){
            this.routes[page].render(currentId)
        }else {
            this.routes[page].render()
        }
        if(this.navbar){ this.navbar.render() }
        this.currentPage = page
    }

    assignRedirect(callback){
        this.assignCallback(callback, "redirect")
    }


    assignCallback(callback, name){
        for(let route in this.routes){
            //this.routes[route].redirect = callback
            this.routes[route][name] = callback
        }
        if(this.navbar){ this.navbar.redirect = callback }
    }


    assignNavbar(navbar){
        this.navbar = navbar
        this.navbar.currentPage = () => {
            return this.currentPage
        }
    }
}