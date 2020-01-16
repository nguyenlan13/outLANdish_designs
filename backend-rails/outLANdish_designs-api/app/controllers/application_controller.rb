class ApplicationController < ActionController::API
    include ActionController::Cookies
    include ActionController::RequestForgeryProtection

    protect_from_forgery with: :exception
    before_action :set_csrf_cookie
    # before_action :get_cart

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
            cart = current_account.cart
            return cart
        elsif session[:cart_id]
            cart = Cart.find(session[:cart_id])
            session[:cart_id] = cart.id
            return cart
        else
            cart = Cart.create
            session[:cart_id] = cart.id
            return cart
        end
    end
    
        private

    def set_csrf_cookie
        cookies["CSRF-TOKEN"] = form_authenticity_token
    end
end
