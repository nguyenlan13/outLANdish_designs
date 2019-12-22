class CreateAccounts < ActiveRecord::Migration[6.0]
  def change
    create_table :accounts do |t|
        t.string :email
        t.string :name
        t.string :password_digest
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
