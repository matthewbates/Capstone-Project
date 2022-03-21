class GearTypeWithGearsSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :gears
end
