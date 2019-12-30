class ApplicationController < ActionController::API
    include ActionController::Cookies
    include ActionController::RequestForgeryProtection

    protect_from_forgery with: :exception
    # before_action :set_access_control_headers
    before_action :set_csrf_cookie
    # before_action :current_cart

    def log_in(account)
        session[:account_id] = account.id
    end

    def current_account
        Account.find_by(id: session[:account_id])
    end

    def logged_in?
        !!current_account
    end

    def get_cart
        if logged_in?
            current_account.cart
        elsif session[:cart_id]
            Cart.find(session[:cart_id])
        else
            cart = Cart.create
            session[:cart_id] = cart.id
            cart
        end
    end


    
        private
    
    # def set_access_control_headers
    #     #response.set_header('Access-Control-Allow-Origin', '*')
    #     #response.set_header('Access-Control-Allow-Methods', 'POST, PUT, DELETE, GET, OPTIONS')
    #     #response.set_header('Access-Control-Request-Method', '*')
    #     #response.set_header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    #     puts "hello"
    # end

    # def current_cart
    #   if session[:cart_id]
    #     cart = Cart.find_by(id: session[:cart_id])
    #     if cart.present?
    #       current_cart = cart
    #     else
    #       session[:cart_id] = nil
    #     end
    #   end

    #   if session[:cart_id] == nil
    #     current_cart = Cart.create
    #     session[:cart_id] = @current_cart.id
    #   end
    # end

    def set_csrf_cookie
        cookies["CSRF-TOKEN"] = form_authenticity_token
    end
end
