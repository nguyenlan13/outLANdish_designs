class Router{

    constructor(kvpairs){
        this.routes = kvpairs
    }

    set rootPage(rootPageKey){
        this.rootPage = this.routes[rootPageKey]
    }

    render(page){
        this.routes[page].render()
        if(this.navbar){ this.navbar.render() }
        this.currentPage = page
    }



    assignNavbar(navbar){
        this.navbar = navbar
        this.navbar.currentPage = () => {
            return this.currentPage
        }
    }



}