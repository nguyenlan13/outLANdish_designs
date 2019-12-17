class App{
    
    constructor(){
        this.initBindingsAndEventListeners()
        this.renderPage(new WelcomePage(this.pageContainer))
        this.renderPage(new Navbar(this.pageContainer))
    }

    // renderPage(page){
    //     this.router.render(page)
    // }
    


    initBindingsAndEventListeners(){
        this.container = document.querySelector('#app-container')
        this.navbarContainer = document.querySelector('#navbar-container')
        this.pageContainer = document.querySelector('#page-container')
    }

    renderPage(page){
        page.render()
    }
}