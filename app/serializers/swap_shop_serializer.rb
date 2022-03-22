class SwapShopSerializer < ActiveModel::Serializer
  attributes :id,
             :item,
             :image_one,
             :image_two,
             :image_three,
             :price,
             :description,
             :catagory
end
