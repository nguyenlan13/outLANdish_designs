class CreateAccounts < ActiveRecord::Migration[6.0]
  def change
    create_table :accounts do |t|
        t.string :email
        t.string :name
        t.string :password_digest
        t.string :billing_address
        t.string :shipping_address
        t.string :credit_card
      t.timestamps
    end
  end
end
