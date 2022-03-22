class HikeSerializer < ActiveModel::Serializer
  attributes :id,
             :trail_name,
             :image,
             :out_and_back,
             :loop,
             :total_length,
             :difficulty,
             :elevation_profile,
             :allows_dogs,
             :allows_bikes
end
