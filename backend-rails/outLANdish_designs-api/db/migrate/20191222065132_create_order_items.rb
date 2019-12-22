class CreateOrderItems < ActiveRecord::Migration[6.0]
  def change
    create_table :order_items do |t|
        t.integer :item_id
        t.integer :order_id
        t.string :item_name
        t.text :item_description
        t.string :item_color
        t.string :item_size
        t.decimal :item_price
        t.integer :quantity
        t.timestamps
    end
  end
end
