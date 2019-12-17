class Api::V1::CartsController < ApplicationController

    def create
        if params[:account_id]
            @account = Account.find(params[:account_id])
            @cart = @account.cart.build(cart_params)

            if @cart.save
                render json: @cart, status: 200
            else
                render json: { message: "There was an error" }
            end
        end
    end

    def show
        @cart = Cart.find(params[:id])
        # @item = @cart.items.build

        render json: @cart, include: [:item}
    end

  

    private
    def cart_params
        params.require(:cart).permit(:account_id)
    end
end
