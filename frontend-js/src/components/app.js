class App{
    
    constructor(){
        // this.adapter = new BaseAdapter()
        this.initBindingsAndEventListeners()
        this.renderPage(new SignupPage(this.pageContainer))
        // this.renderPage(new WelcomePage(this.pageContainer))
        this.renderPage(new Navbar(this.navbarContainer))
        
        
        // this.router = new Router({
        //     'welcome': new WelcomePage(this.pageContainer, this.adapter)
        //     'item': new ItemPage(this.pageContainer)
        //     // 'itemCategory':
        //     // 'cart':
        // })

        // const navbar = new Navbar(this.navbarContainer, this.adapter)

        // this.router.assignNavbar(navbar)
        // this.renderPage('welcome')



        //setTimeout(function() {
            // this.renderPage(new ItemPage(this.pageContainer))
        //}.bind(this), 3000);
            
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