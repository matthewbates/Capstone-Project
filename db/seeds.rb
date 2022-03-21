puts '🌱 Seeding data...'

puts 'Destroying old data...'
GearType.destroy_all
Gear.destroy_all

puts 'Creating users...'
u1 = User.create!(username: 'test', password: 'test')

puts 'Creating gear types...'
# different types of backpacks (i.e., different sizes)
t1 = GearType.create!(name: 'Backpack')
# tent, tarp, footprint, etc.
t2 = GearType.create!(name: 'Shelter')
# sleeping pad, sleeping bag, pillow, etc.
t3 = GearType.create!(name: 'Sleep System')
# lantern, headlight, extra batteries, etc.
t4 = GearType.create!(name: 'Light System')
# stove, fuel, mug, food sack, bear canister, lighter/matches etc.
t5 = GearType.create!(name: 'Cook System')
# water bottles, meals, water filter, energy gels, etc.
t6 = GearType.create!(name: 'Food & Water')
# underwear, t-shirts, pants/shorts, fleeces, etc.
t7 = GearType.create!(name: 'Clothing & Footwear')
# first-aid kit, emergency shelter, etc.
t8 = GearType.create!(name: 'Emergency & First-Aid')
# hand sanitizer, toothbrush/toothpaste, toilet paper, sunscreen, etc.
t9 = GearType.create!(name: 'Health & Hygiene')
# knife/multi-tool, repair kit, duct tape, etc.
t10 = GearType.create!(name: 'Tools & Repair Items')
# daypack, journal, playing cards, etc.
t11 = GearType.create!(name: 'Extras')

puts 'Creating gear...'
# backpacks
g1 = Gear.create!(name: '25L Daypack', gear_type: t1)
g2 = Gear.create!(name: '55L Backpack', gear_type: t1)
# shelters
g3 = Gear.create!(name: '1P Tent', gear_type: t2)
g4 = Gear.create!(name: '2P Tent', gear_type: t2)
g5 = Gear.create!(name: 'Tarp', gear_type: t2)
g6 = Gear.create!(name: 'Footprint', gear_type: t2)
# sleep systems
g7 = Gear.create!(name: '0° Sleeping Bag', gear_type: t3)
g8 = Gear.create!(name: '15° Sleeping Bag', gear_type: t3)
g9 = Gear.create!(name: 'Sleeping Pad', gear_type: t3)
g10 = Gear.create!(name: 'Camp Pillow', gear_type: t3)
# light systems
g11 = Gear.create!(name: 'Headlamp', gear_type: t4)
g12 = Gear.create!(name: 'Lantern', gear_type: t4)
# cook system
g13 = Gear.create!(name: 'Stove', gear_type: t5)
g14 = Gear.create!(name: 'Fuel Canister', gear_type: t5)
g15 = Gear.create!(name: 'Mug', gear_type: t5)
g16 = Gear.create!(name: 'Food Sack', gear_type: t5)
g17 = Gear.create!(name: 'Bear Canister', gear_type: t5)
g18 = Gear.create!(name: 'Spork', gear_type: t5)
# food and water
g19 = Gear.create!(name: 'Water Bottle', gear_type: t6)
g20 = Gear.create!(name: 'Water Filter', gear_type: t6)
g21 = Gear.create!(name: 'Meals', gear_type: t6)
g22 = Gear.create!(name: 'Energy Gels', gear_type: t6)
# clothing and footwear
g23 = Gear.create!(name: 'Moisture-Wicking Underwear', gear_type: t7)
g24 = Gear.create!(name: 'Long Underwear', gear_type: t7)
g25 = Gear.create!(name: 'Short-Sleeve T-shirt', gear_type: t7)
g26 = Gear.create!(name: 'Long-Sleeve T-Shirt', gear_type: t7)
g27 = Gear.create!(name: 'Quick-Drying Shorts', gear_type: t7)
g28 = Gear.create!(name: 'Quick-Drying Pants', gear_type: t7)
g29 = Gear.create!(name: 'Fleece Jacket', gear_type: t7)
g30 = Gear.create!(name: 'Insulated Jacket', gear_type: t7)
g31 = Gear.create!(name: 'Boots', gear_type: t7)
g32 = Gear.create!(name: 'Wool Socks', gear_type: t7)
g33 = Gear.create!(name: 'Rain Jacket', gear_type: t7)
g34 = Gear.create!(name: 'Rain Pants', gear_type: t7)
g35 = Gear.create!(name: 'Gloves', gear_type: t7)
g36 = Gear.create!(name: 'Beanie', gear_type: t7)
g37 = Gear.create!(name: 'Camp Sandals', gear_type: t7)
g38 = Gear.create!(name: 'Bandana', gear_type: t7)
g39 = Gear.create!(name: 'Gaiters', gear_type: t7)
# emergency & first-aid
g40 = Gear.create!(name: 'First-Aid Kit', gear_type: t8)
g41 = Gear.create!(name: 'Lighter', gear_type: t8)
g42 = Gear.create!(name: 'Matches', gear_type: t8)
g43 = Gear.create!(name: 'Emergency Shelter', gear_type: t8)
# health & hygiene
g44 = Gear.create!(name: 'Hand Sanitizer', gear_type: t9)
g45 = Gear.create!(name: 'Toothbrush', gear_type: t9)
g46 = Gear.create!(name: 'Toothpaste', gear_type: t9)
g47 = Gear.create!(name: 'Toilet Paper', gear_type: t9)
g48 = Gear.create!(name: 'Prescription Medicaiton', gear_type: t9)
g49 = Gear.create!(name: 'Sunglasses', gear_type: t9)
g50 = Gear.create!(name: 'Sunscreen', gear_type: t9)
g51 = Gear.create!(name: 'Chapstick', gear_type: t9)
g52 = Gear.create!(name: 'Bug Spray', gear_type: t9)
# tools & repair items
g53 = Gear.create!(name: 'Knife', gear_type: t10)
# extras
g54 = Gear.create!(name: 'Trekking Poles', gear_type: t11)
g55 = Gear.create!(name: 'Bear Spray', gear_type: t11)
g56 = Gear.create!(name: 'Action Camera', gear_type: t11)
g57 = Gear.create!(name: 'Journal', gear_type: t11)
g58 = Gear.create!(name: 'Pen', gear_type: t11)
g59 = Gear.create!(name: 'Book', gear_type: t11)
g60 = Gear.create!(name: 'Deck of Cards', gear_type: t11)
g61 = Gear.create!(name: 'Two-Way Radio', gear_type: t11)
g62 = Gear.create!(name: 'Extra Batteries', gear_type: t11)

h1 =
  Hike.create(
    trail_name: 'Red Mountain Trail',
    out_and_back: 'True',
    loop: 'False',
    difficulty: 'Moderate',
    total_length: 2.5,
    elevation_profile: 'Ascent: 918 ft. | Descent: 110 ft.',
    allows_dogs: 'Yes',
    allows_bikes: 'No',
    lat: '38.851379',
    lng: '-104.921',
  )

puts 'Creating Swapshop items...'
s1 =
  SwapShop.create!(
    item: 'Melanzana Micro Grid Hoodie',
    image:
      'https://di2ponv0v5otw.cloudfront.net/posts/2020/03/12/5e6b17309d3b786f801e63fb/m_5e6b17ce08d2c25c8e3d5e24.jpg',
    price: 80,
    description:
      "A really comfortable hoodie that's handmade in Leadville, CO - and only available for purchase in-store! Mens size L, pre-loved but still in great condition",
    catagory: 'Clothing',
    user: u1,
  )
s2 =
  SwapShop.create!(
    item: 'Zpacks Plexamid Tent',
    image:
      'https://cdn.shopify.com/s/files/1/0004/4652/9572/products/ultralight-one-person-shelter-plexamid-front-l_2048x.jpg?v=1642026695',
    price: 375,
    description:
      "This possibly could be the lightest backpacking tent on the market, and has only been used a couple of times. It's supported by a single trekking pole that must be at least 48 inches tall. Serious inquiries only!",
    catagory: 'Shelter',
    user: u1,
  )
s3 =
  SwapShop.create!(
    item: 'Yaktrax Diamond Grip Microspikes',
    image:
      'http://www.nationalparksbackpacker.com/wp-content/uploads/2021/06/yaktrax-microspikes.jpeg',
    price: 25,
    description:
      'These are still in great condition, and have really great tread on ice.',
    catagory: 'Footwear',
    user: u1,
  )

puts 'Finalizing data...'
puts 'Seeding done!'

# create! one single string
# gear table where I store all gear no matter what type it is

# the actual gear (repair kit, extra clothes, etc.)
# gear type table or something similar; whenever I create! a piece of gear, it will have a geartype.id so you're associating that gear witht that type

# clothing, food, shelter, etc
# creating an instance of a gear, need to provide a gear_type.id it belongs to

# associate gear elements with both hikes and users
