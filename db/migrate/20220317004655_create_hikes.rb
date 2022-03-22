class CreateHikes < ActiveRecord::Migration[7.0]
  def change
    create_table :hikes do |t|
      t.string :trail_name
      t.string :image
      t.string :out_and_back
      t.string :loop
      t.float :total_length
      t.string :difficulty
      t.string :elevation_profile
      t.string :allows_dogs
      t.string :allows_bikes
      t.string :lat
      t.string :lng

      t.timestamps
    end
  end
end
