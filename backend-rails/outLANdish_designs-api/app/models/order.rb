class Order < ApplicationRecord
    belongs_to :account
    # has_many :cart_items
end
