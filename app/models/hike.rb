class Hike < ApplicationRecord
    has_many :gear_for_hikes
    has_many :gears, through: :gear_for_hikes
    has_many :user_hikes
    has_many :users, through: :user_hikes
end
