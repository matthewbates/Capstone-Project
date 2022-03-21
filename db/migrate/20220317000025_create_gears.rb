class CreateGears < ActiveRecord::Migration[7.0]
  def change
    create_table :gears do |t|
      t.string :name
      t.references :gear_type

      t.timestamps
    end
  end
end
