class Navbar extends PageManager{

    constructor(container, adapter){
        super(container)
        this.adapter = new CategoryAdapter(adapter)
        // this.adapter = adapter
    }

    initBindingsAndEventListeners(){
        this.container.addEventListener('click', this.handleClick.bind(this))

    }

    get loggedIn(){

    }

    handleClick(e){
        if(e.target.tagName === "A"){
            console.log(e.target)
            e.preventDefault()
            
            // if(e.target.id.split('-')[0] == 'itemCategory'){
            //     let categoryId = e.target.id.split('-')[1]
            //     console.log("Category ID", categoryId);
                
            //     // this.redirect("itemCategory", categoryId);
            // }
            
              const route = e.target.id.split('-')[0]
             if(route !== this.currentPage()) { this.redirect(route) } 
            }else{
              this.redirect('welcome')
            }
            
        // }
    }

    async buildHTML() {
        const navPart1 = (`
            <nav class="navbar fixed-top2 navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">
                <img id="brand-logo" src="assets/Outlandish_logo.png">
            </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">
        `)

        const navPart3 = (`
                </ul>
                    <span class="navbar-text">
                      
                           <div class="navbar-nav"> <a class="nav-link" id="signup-link" href="#" >SIGN UP</a> <span style="padding-top: 6px">|</span> <a class="nav-link" id="login-link" href="#" >LOG IN</a> </div>
                       
                        <a class="btn btn-primary nav-link" href="*">
                        CART <span class="badge badge-light">4</span>
                        </a>
                
                    </span>
                </div>
            </nav>
        `)

        let output = '';

        let categories = await this.adapter.getCategories();
        for (let i = 0; i < categories.length; i++) {
            let categoryId = categories[i].id
            let name = categories[i].name;
            
            output += (`                
                     <li class="nav-item">
                         <a class="nav-link" id="itemCategory-${categoryId}-${name}" href="#" >${name}</a>
                     </li>
            `)
        }
        return (`${navPart1}`) + (`${output}`) + (`${navPart3}`);
    }

    async render(){
        this.container.innerHTML = await this.buildHTML()
        this.initBindingsAndEventListeners()
    }


    // get staticHTML(){     
    //         return (`
    //         <nav class="navbar fixed-top2 navbar-expand-lg navbar-light bg-light">
    //            <a class="navbar-brand" href="#">
    //                 <img id="brand-logo" src="assets/Outlandish_logo.png">
    //             </a>
    //                 <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    //                     <span class="navbar-toggler-icon"></span>
    //                 </button>
    //             <div class="collapse navbar-collapse" id="navbarText">
    //                 <ul class="navbar-nav mr-auto">
                     
    //                     <li class="nav-item">
    //                         <a class="nav-link" id="nerdy-link" href="#" >NERDY</a>
    //                     </li>
    //                     <li class="nav-item">
    //                         <a class="nav-link" id="holiday-link" href="#">HOLIDAY</a>
    //                     </li>
    //                     <li class="nav-item">
    //                         <a class="nav-link" id="music-link" href="#">MUSIC</a>
    //                     </li>
    //                     <li class="nav-item">
    //                         <a class="nav-link" href="#">FITNESS</a>
    //                     </li>
    //                     <li class="nav-item">
    //                         <a class="nav-link" href="#">INSPIRATIONAL</a>
    //                     </li>
    //                     <li class="nav-item">
    //                     <a class="nav-link" href="#">SALE</a>
    //                     </li>
    //                     </ul>
    //                     <span class="navbar-text">
                          
    //                            <div class="navbar-nav"> <a class="nav-link" id="signup-link" href="#" >SIGN UP</a> | <a class="nav-link" id="login-link" href="#" >LOG IN</a> </div>
                           
    //                         <a class="btn btn-primary nav-link" href="*">
    //                         CART <span class="badge badge-light">4</span>
    //                         </a>
                    
    //                     </span>
    //                 </div>
    //             </nav>
    //         `)
    //     }
        
    //     render(){
    //         this.container.innerHTML = this.staticHTML
    //         this.initBindingsAndEventListeners()
    //     }

}