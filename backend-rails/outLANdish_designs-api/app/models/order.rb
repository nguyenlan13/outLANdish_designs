class Order < ApplicationRecord
    belongs_to :account
    has_many :order_items
    has_many :items, through: :order_items
    # has_many :cart_items
end
