class GearSerializer < ActiveModel::Serializer
  attributes :id, :name

  belongs_to :gear_type
end
