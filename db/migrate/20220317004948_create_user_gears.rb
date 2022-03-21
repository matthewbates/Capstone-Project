class CreateUserGears < ActiveRecord::Migration[7.0]
  def change
    create_table :user_gears do |t|
      t.references :gear
      t.references :user

      t.timestamps
    end
  end
end
