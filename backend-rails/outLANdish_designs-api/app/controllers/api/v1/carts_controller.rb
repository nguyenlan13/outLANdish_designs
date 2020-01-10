class Api::V1::CartsController < ApplicationController

    def create
        if params[:account_id]
            @account = Account.find(params[:account_id])
            @cart = @account.cart.build

            if @cart.save
                render json: @cart, status: 200
            else
                render json: { message: "There was an error" }
            end
        end
    end

    def show
        @cart = get_cart
        # @cart = current_cart
       
        # @cart = Cart.find(params[:id])
        # @item = @cart.items.build

        render json: @cart, include: [:item]
    
        # @cart,, include: [:item]
    end

  
end
