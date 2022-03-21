class CreateGearForHikes < ActiveRecord::Migration[7.0]
  def change
    create_table :gear_for_hikes do |t|
        t.references :gear
        t.references :hike
      t.timestamps
    end
  end
end
