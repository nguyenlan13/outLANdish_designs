class Api::V1::AccountsController < ApplicationController

    def new
        @account = Account.new
        render json: @account, status: 200
    end

    def create
        @account = Account.new(account_params)
        if @account.save
            log_in(@account)
            render json: @account, status: 200
        else
            render json: { message: "Sorry, Account could not be created, please try again.", error: true}, status: 400 
        end
    end

    def show
        @account = Account.find(params[:id])
        render json: @account, status: 200
    end

    private

    def account_params
        params.require(:account).permit(:email, :name, :password, :billing_street_1, :billing_street_2, :billing_city, :billing_state, :billing_zip, :shipping_street_1, :shipping_street_2, :shipping_city, :shipping_state, :shipping_zip)
    end
end
