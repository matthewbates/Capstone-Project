class User < ApplicationRecord
  has_many :user_gears
  has_many :gears, through: :user_gears
  has_many :swap_shops
  has_many :user_hikes
  has_many :hikes, through: :user_hikes
  has_secure_password
end
