class Api::V1::SessionsController < ApplicationController

    def new

    end

    def create
        account = Account.find_by(email: params[:email])
        if account && account.authenticate(params[:password])
            log_in(account)
            render json: account, status: 200
        else
            render json: { message: "Login credentials were incorrect, please try again." }
        end
    end

    def destroy
        # reset_session
        session.delete(:account_id)
        render json: {status: 200}
    end

end
