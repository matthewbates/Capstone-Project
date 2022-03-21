class Gear < ApplicationRecord
    belongs_to :gear_type
    has_many :gear_for_hikes
    has_many :hikes, through: :gear_for_hikes
    has_many :user_gears
    has_many :users, through: :user_gears
end
