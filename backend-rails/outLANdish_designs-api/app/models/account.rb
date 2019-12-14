class Account < ApplicationRecord
    has_secure_password
    has_one :cart
    has_many :orders


    has_many :reviews
    has_one :wishlist
    
end
