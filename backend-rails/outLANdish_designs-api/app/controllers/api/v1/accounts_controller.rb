class Api::V1::AccountsController < ApplicationController

    def new
        @account = Account.new
    end

    def create
        @account = Account.new(account_params)
        if @account.save
            log_in(@account)
            render json: @account, status: 200
        else
            render json: { message: "Sorry, Account could not be created, please try again." }
        end
    end

    def show
        @account = Account.find(params[:id])
    end

    private

    def account_params
        params.require(:account).permit(:email, :name, :password, :billing_address, :shipping_address, :credit_card)
    end
end
