class ApplicationController < ActionController::API
    include ActionController::Cookies
    include ActionController::RequestForgeryProtection

    # protect_from_forgery with: :exception
    before_action :set_access_control_headers
    before_action :set_csrf_cookie


    def log_in(account)
        session[:account_id] = account.id
    end

    def current_account
        if logged_in?
            Account.find_by(id: session[:account_id])
        else
            nil
        end
    end


    def logged_in?
        !!session[:account_id]
    end

    
        private
    
    def set_access_control_headers
        #response.set_header('Access-Control-Allow-Origin', '*')
        #response.set_header('Access-Control-Allow-Methods', 'POST, PUT, DELETE, GET, OPTIONS')
        #response.set_header('Access-Control-Request-Method', '*')
        #response.set_header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
        puts "hello"
    end

    def set_csrf_cookie
        cookies["CSRF-TOKEN"] = form_authenticity_token
    end
end
