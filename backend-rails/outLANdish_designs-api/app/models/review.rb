class Review < ApplicationRecord
    belongs_to :account
    belongs_to :item
end
