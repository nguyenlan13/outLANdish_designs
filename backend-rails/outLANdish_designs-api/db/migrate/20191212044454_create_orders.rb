class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
        t.integer :account_id
        t.string :order_date
        t.string :po_number
        t.decimal :shipping_cost
        t.decimal :order_total
        t.string :billing_street_1
        t.string :billing_street_2
        t.string :billing_city
        t.string :billing_state
        t.integer :billing_zip
        t.string :shipping_street_1
        t.string :shipping_street_2
        t.string :shipping_city
        t.string :shipping_state
        t.integer :shipping_zip
        t.timestamps
    end
  end
end
