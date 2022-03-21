class UserGear < ApplicationRecord
    belongs_to :user
    belongs_to :gear
end
