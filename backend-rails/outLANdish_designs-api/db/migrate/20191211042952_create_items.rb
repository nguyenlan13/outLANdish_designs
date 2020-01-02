class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
        t.string :name
        t.text :description
        t.string :color
        t.string :size
        t.decimal :price
        t.string :item_path
        t.binary :item_img
        t.boolean :in_stock? 
        t.timestamps
    end
  end
end
