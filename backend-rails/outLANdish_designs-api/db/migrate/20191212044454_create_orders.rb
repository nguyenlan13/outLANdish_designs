class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
        t.string :order_date
        t.string :po_number
        t.timestamps
    end
  end
end
