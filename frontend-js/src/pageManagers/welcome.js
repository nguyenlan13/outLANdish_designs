class WelcomePage extends PageManager{

    constructor(container){
        super(container)
    }

    get staticHTML(){
        return (`
                <div>
                <img id="welcome-img" align="left" src="assets/OH_SALE_YES!_60pt.png"> 
                <div class="welcome-font" align="middle" style="margin-top: 10px">ALL HOLIDAY</div>
                <div class="welcome-font" align="middle">ITEMS</div>
                <div class="welcome-font" align="middle"> 50% OFF!</div>
                <div align="middle"> Use Code: SALE</div>
                <img align="middle" id="welcome-pic" src="assets/BC-kr300130_Holiday_Tilt.png">
                </div>
        `)
    }

}