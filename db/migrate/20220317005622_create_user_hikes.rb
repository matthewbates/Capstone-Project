class CreateUserHikes < ActiveRecord::Migration[7.0]
  def change
    create_table :user_hikes do |t|
      t.string :reviews
      t.references :hike
      t.references :user

      t.timestamps
    end
  end
end
