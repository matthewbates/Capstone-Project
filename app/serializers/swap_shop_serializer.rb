class SwapShopSerializer < ActiveModel::Serializer
  attributes :id, :item, :image, :price, :description, :catagory
end
