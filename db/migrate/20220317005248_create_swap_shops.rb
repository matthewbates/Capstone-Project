class CreateSwapShops < ActiveRecord::Migration[7.0]
  def change
    create_table :swap_shops do |t|
      t.string :item
      t.string :image_one
      t.string :image_two
      t.string :image_three
      t.integer :price
      t.string :description
      t.string :catagory
      t.references :user
      


      t.timestamps
    end
  end
end
