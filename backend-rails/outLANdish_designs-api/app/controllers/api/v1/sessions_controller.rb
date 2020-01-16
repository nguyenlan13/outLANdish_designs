class Api::V1::SessionsController < ApplicationController

    def new

    end

    def auth
        render json: {csrf_auth_token: form_authenticity_token}
    end

    def create
        account = Account.find_by(email: params[:email])
        if account && account.authenticate(params[:password])
            log_in(account)
            render json: account, status: 200
        else
            render json: { message: "Login credentials were incorrect, please try again.", error: true }
        end
    end

    def destroy
        # reset_session
        session.delete(:account_id)
        # session.delete(:cart_id)
        render json: {status: 200}
    end

end
