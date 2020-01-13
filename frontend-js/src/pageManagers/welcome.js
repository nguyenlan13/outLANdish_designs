class WelcomePage extends PageManager{

    constructor(container){
        super(container)
    }

    get staticHTML(){
        return (`
                <div>
                <img id="welcome-img" align="left" src="assets/OH_SALE_YES!_60pt.png"> 
                <div class="welcome-font" align="middle">ALL HOLIDAY</div>
                <div class="welcome-font" align="middle">ITEMS</div>
                <div class="welcome-font" align="middle"> 50% OFF!</div>
                </div>
        `)
    }

}