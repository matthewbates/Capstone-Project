puts '🌱 Seeding data...'

puts 'Destroying old data...'
GearType.destroy_all
Gear.destroy_all

puts 'Creating users...'
u1 = User.create!(username: 'test', password: 'test')

puts 'Creating gear types...'
# different types of backpacks (i.e., different sizes)
t1 = GearType.create!(name: 'Backpacks')
# tent, tarp, footprint, etc.
t2 = GearType.create!(name: 'Shelters')
# sleeping pad, sleeping bag, pillow, etc.
t3 = GearType.create!(name: 'Sleep Systems')
# lantern, headlight, extra batteries, etc.
t4 = GearType.create!(name: 'Light Systems')
# stove, fuel, mug, food sack, bear canister, lighter/matches etc.
t5 = GearType.create!(name: 'Cook Systems')
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
t11 = GearType.create!(name: 'Other')

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
g7 = Gear.create!(name: '0°F Sleeping Bag', gear_type: t3)
g8 = Gear.create!(name: '15°F Sleeping Bag', gear_type: t3)
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
    image:
      'https://cdn-assets.alltrails.com/static-map/production/at-map/17715253/trail-us-colorado-manitou-springs-red-mountain-trail-at-map-17715253-1644890139-414x200-2.png',
    out_and_back: 'Yes',
    loop: 'No',
    difficulty: 'Moderate',
    total_length: 2.5,
    elevation_profile: 'Ascent: 918 ft. | Descent: 110 ft.',
    allows_dogs: 'Yes',
    allows_bikes: 'No',
    lat: '38.851379',
    lng: '-104.921',
  )
h2 =
  Hike.create(
    trail_name: 'Iron Mountain Trail',
    image:
      'https://cdn-assets.alltrails.com/static-map/production/at-map/19980900/trail-us-colorado-iron-mountain-via-intemann-trail-at-map-19980900-1642642734-414x200-2.png',
    out_and_back: 'Yes',
    loop: 'No',
    difficulty: 'Easy',
    total_length: 4.0,
    elevation_profile: 'Ascent: 758 ft. | Descent: 247 ft.',
    allows_dogs: 'Yes',
    allows_bikes: 'No',
    lat: '38.849157',
    lng: '-104.913',
  )

puts 'Creating Swapshop items...'
s1 =
  SwapShop.create!(
    item: 'Melanzana Micro Grid Hoodie',
    image_one: 'https://i.ebayimg.com/images/g/Mp8AAOSwSftiMpl9/s-l1600.jpg',
    image_two: 'https://i.ebayimg.com/images/g/insAAOSw3rRiKAqk/s-l1600.jpg',
    image_three: 'https://i.ebayimg.com/images/g/u5QAAOSw0ctiKAqu/s-l1600.jpg',
    price: 80,
    description:
      "A really comfortable hoodie that's handmade in Leadville, CO - and only available for purchase in-store! Mens size L, pre-loved but still in great condition",
    catagory: 'Clothing & Footwear',
    user: u1,
  )
s2 =
  SwapShop.create!(
    item: 'Zpacks Plexamid Tent',
    image_one: 'https://i.ebayimg.com/images/g/04gAAOSwRxNiOO8G/s-l1600.jpg',
    image_two: 'https://i.ebayimg.com/images/g/~OwAAOSwzxpiOO8L/s-l1600.jpg',
    image_three: 'https://i.ebayimg.com/images/g/J8gAAOSwBD5iOO8R/s-l1600.jpg',
    price: 375,
    description:
      "This possibly could be the lightest backpacking tent on the market, and has only been used a couple of times. It's supported by a single trekking pole that must be at least 48 inches tall. Serious inquiries only!",
    catagory: 'Shelters',
    user: u1,
  )
s3 =
  SwapShop.create!(
    item: 'Yaktrax Diamond Grip Microspikes',
    image_one:
      'https://www.rei.com/media/c7e597c2-bb6d-4de3-ba8e-39d34c6da942?size=2000',
    image_two:
      'https://www.rei.com/media/4a0815aa-bb7a-432e-ae0f-bf99d0381d86?size=2000',
    image_three:
      'https://www.rei.com/media/0983e102-ea71-4d51-ada0-7a1913491129?size=2000',
    price: 25,
    description:
      'These are still in great condition, and have really great tread on ice.',
    catagory: 'Clothing & Footwear',
    user: u1,
  )
s4 =
  SwapShop.create!(
    item: 'Hyperlite Mountain Gear 3400 Junction',
    image_one: 'https://i.ebayimg.com/images/g/7SkAAOSwMc9iN4d5/s-l1600.jpg',
    image_two: 'https://i.ebayimg.com/images/g/pyEAAOSwCJRiN4eF/s-l1600.jpg',
    image_three: 'https://i.ebayimg.com/images/g/KqcAAOSwLwJiN4eO/s-l1600.jpg',
    price: 150,
    description:
      'I used this a handful of times and it shows normal wear, but is in overall great condition. There is dirt on the bottom from being set down on trail/camp, but other than that there are no signs of damage.',
    catagory: 'Backpacks',
    user: u1,
  )
s5 =
  SwapShop.create!(
    item: 'Altra Road Running Shoes',
    image_one:
      'https://www.14ers.com/usercontent/gear/2022/3250/classified3250_164402249761fdcae18d0ff.jpg',
    image_two:
      'https://www.14ers.com/usercontent/gear/2022/3250/classified3250_164402249861fdcae23ed75.jpg',
    image_three:
      'https://www.14ers.com/usercontent/gear/2022/3250/classified3250_164402249961fdcae3a2b81.jpg',
    price: 30,
    description:
      'Gently used (11 miles) mens Altra Viho running shoes. These are zero drop shoes and they are size 10.5. There is no damage to the shoes and virtually no wear and tear.',
    catagory: 'Clothing & Footwear',
    user: u1,
  )
s6 =
  SwapShop.create!(
    item: 'Jones Solution Splitboard - Womens 152',
    image_one:
      'https://www.14ers.com/usercontent/gear/2022/3241/classified3241_164254840561e74cb5204e2.jpg',
    image_two:
      'https://www.14ers.com/usercontent/gear/2022/3241/classified3241_164254840961e74cb98ad0f.jpg',
    image_three:
      'https://www.14ers.com/usercontent/gear/2022/3241/classified3241_164254841861e74cc2d8417.jpg',
    price: 400,
    description:
      'BRAND NEW! I need to sell this ASAP, this week if possible. Asking $400, retails for $899. However, I will consider all reasonable offers, especially cash.',
    catagory: 'Other',
    user: u1,
  )
s7 =
  SwapShop.create!(
    item: 'Mountain Hardwear Compressor Pants (Size L)',
    image_one:
      'https://www.14ers.com/usercontent/gear/2021/3217/classified3217_1637163970619523c240a83.jpg',
    image_two:
      'https://www.14ers.com/usercontent/gear/2021/3217/classified3217_1637163970619523c2ac138.jpg',
    image_three:
      'https://www.14ers.com/usercontent/gear/2021/3217/classified3217_1637163971619523c327e06.jpg',
    price: 125,
    description:
      'Selling a pair of MH compressor pants, size L. Excellent condition, no tears or signs of wear. new they are $175, I will sell for $115 plus shipping of $10, so $125 all in.',
    catagory: 'Clothing & Footwear',
    user: u1,
  )
s8 =
  SwapShop.create!(
    item: 'Jetboil Flash Backpacking Stove',
    image_one: 'https://i.ebayimg.com/images/g/5A0AAOSweyhiOK34/s-l1600.jpg',
    image_two: 'https://i.ebayimg.com/images/g/ASUAAOSwaFViOK39/s-l1600.jpg',
    image_three: 'https://i.ebayimg.com/images/g/IvUAAOSwOodiOK3-/s-l1600.jpg',
    price: 84,
    description:
      'I used this a few times but I ended up getting something more lightweight, although this is by no means a heavy cook system. Fuel is not included, firm on price.',
    catagory: 'Cook Systems',
    user: u1,
  )
s9 =
  SwapShop.create!(
    item: 'Zpacks 10°F Classic Sleeping Bag',
    image_one:
      'https://cdn.shopify.com/s/files/1/0004/4652/9572/products/classic-sleeping-bag-top-azure-l_9bfcd880-3482-4740-8b42-75cb8b1b0ee0_2048x.jpg?v=1563472854',
    image_two:
      'https://backpackinglight.com/wp-content/uploads/2021/10/B2A039F8-1881-45DC-82E1-AAF77C978A19.jpeg',
    image_three:
      'https://cdn.shopify.com/s/files/1/0004/4652/9572/products/sleeping-bag-in-medium-dry-bag-l_dc19530f-97d3-40ee-940a-dcd16647e314_2048x.jpg?v=1563481799',
    price: 400,
    description:
      'This is a brand new sleeping bag that I received as a gift right after I had purchased another bag, so I do not need this anymore. I am firm on price since it is brand new, but give me an offer and I may provide some wiggle room.',
    catagory: 'Sleep Systems',
    user: u1,
  )
s10 =
  SwapShop.create!(
    item: 'Nemo Switchback Insulated Ultralight Sleeping Pad - Regular',
    image_one: 'https://i.ebayimg.com/images/g/lLYAAOSw4eFiOK1a/s-l1600.jpg',
    image_two: 'https://i.ebayimg.com/images/g/KqYAAOSwqrdiOK1j/s-l1600.jpg',
    image_three: 'https://i.ebayimg.com/images/g/eXoAAOSwCJRiOK1v/s-l1600.jpg',
    price: 20,
    description:
      'Used for just a few nights. Selling because I prefer my inflatable, even though it is heavier. Still in excellent condition, no holes or tears.',
    catagory: 'Sleep Systems',
    user: u1,
  )
s11 =
  SwapShop.create!(
    item: 'Zpacks Nero DCF Backpack (Used, Great Condition)',
    image_one: 'https://i.ebayimg.com/images/g/vMcAAOSw8qpiN7p~/s-l1600.jpg',
    image_two: 'https://i.ebayimg.com/images/g/kbYAAOSwQapiN7qA/s-l1600.jpg',
    image_three: 'https://i.ebayimg.com/images/g/f84AAOSwNd1iN7qC/s-l1600.jpg',
    price: 150,
    description:
      'Used only a few times, great condition, no damage or defects. Olive DCF with mesh large outer pocket, DCF side pockets. Includes removable hip belt.',
    catagory: 'Backpacks',
    user: u1,
  )
s12 =
  SwapShop.create!(
    item: 'BearVault BV500 Food Canister',
    image_one: 'https://i.ebayimg.com/images/g/R~AAAOSwM3liNyjE/s-l1600.jpg',
    image_two: 'https://i.ebayimg.com/images/g/fTIAAOSwqJ5iNyjP/s-l1600.jpg',
    image_three: 'https://i.ebayimg.com/images/g/q0oAAOSwNaJiNyjF/s-l1600.jpg',
    price: 38,
    description:
      'Lightly used, family size or long hike - 7 days worth of food. Price is firm.',
    catagory: 'Cook Systems',
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
