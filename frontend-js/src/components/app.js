class App{
    
    constructor(){
        this.adapter = new BaseAdapter()
        this.initBindingsAndEventListeners()
        // this.renderPage(new LoginPage(this.pageContainer))
        this.renderPage(new SignupPage(this.pageContainer, this.adapter))

        // this.renderPage(new WelcomePage(this.pageContainer))
        this.renderPage(new Navbar(this.navbarContainer))
        
        
        // this.router = new Router({
        //     'welcome': new WelcomePage(this.pageContainer, this.adapter),
        //     'login': new LoginPage(this.pageContainer, this.adapter),
        //     'signup': new SignupPage(this.pageContainer, this.adapter),
        //     'item': new ItemPage(this.pageContainer, this.adapter),
        //     'itemCategory': new ItemCategoryPage(this.pageContainer, this.adapter),
        //     'cart': new CartPage(this.pageContainer, this.adapter)
        //  })

        // const navbar = new Navbar(this.navbarContainer, this.adapter)

        // this.router.assignNavbar(navbar)
        // this.router.render('welcome')



        //setTimeout(function() {
        //    this.renderPage(new ItemPage(this.pageContainer))
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