class Api::V1::CartsController < ApplicationController

    # def index
    #     cart = Cart.all

    #     render json: cart
    # end

    def create
        if params[:account_id]
            @account = Account.find(params[:account_id])
            @cart = @account.cart.build
        else
            @cart = Cart.create
            if @cart.save
                render json: @cart, status: 200
            else
                render json: { message: "There was an error" }
            end
        end
    end

    
    def cart
        @cart = get_cart
        # numitems = @cart.items.length
        render json: @cart, include: [:items]
    end


    # def show
    #     @cart = get_cart
    #     # @cart = current_cart
       
    #     # @cart = Cart.find(params[:id])
    #     # @item = @cart.items.build

    #     render json: @cart, include: [:items]
    # end

  
end
