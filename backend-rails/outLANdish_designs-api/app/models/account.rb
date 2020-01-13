class Account < ApplicationRecord
    has_secure_password
    validates :password, presence: true
    validates_presence_of :email
    validates_uniqueness_of :email
    
    has_one :cart
    has_many :orders


    has_many :reviews
    has_one :wishlist
    
end
