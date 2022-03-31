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
# hand sanitizer, toothbrush/toothpaste, toilet paper, sunscreen, etc.
t8 = GearType.create!(name: 'Health & Hygiene')
# knife/multi-tool, repair kit, duct tape, etc.
t9 = GearType.create!(name: 'Tools & Repair Items')
# first-aid kit, emergency shelter, etc.
t10 = GearType.create!(name: 'Emergency & First-Aid')
# daypack, journal, playing cards, etc.
t11 = GearType.create!(name: 'Other')

puts 'Creating gear...'
# backpacks
Gear.create!(name: '18L Daypack', gear_type: t1)
Gear.create!(name: '25L Backpack', gear_type: t1)
Gear.create!(name: '55L Backpack', gear_type: t1)
# shelters
Gear.create!(name: '1P Tent', gear_type: t2)
Gear.create!(name: '2P Tent', gear_type: t2)
Gear.create!(name: 'Tarp', gear_type: t2)
Gear.create!(name: 'Footprint', gear_type: t2)
# sleep systems
Gear.create!(name: '0°F Sleeping Bag', gear_type: t3)
Gear.create!(name: '15°F Sleeping Bag', gear_type: t3)
Gear.create!(name: 'Sleeping Pad', gear_type: t3)
Gear.create!(name: 'Camp Pillow', gear_type: t3)
# light systems
Gear.create!(name: 'Headlamp', gear_type: t4)
Gear.create!(name: 'Lantern', gear_type: t4)
Gear.create!(name: 'Extra Batteries', gear_type: t11)
# cook system
Gear.create!(name: 'Stove', gear_type: t5)
Gear.create!(name: 'Fuel Canister', gear_type: t5)
Gear.create!(name: 'Mug', gear_type: t5)
Gear.create!(name: 'Food Sack', gear_type: t5)
Gear.create!(name: 'Bear Canister', gear_type: t5)
Gear.create!(name: 'Spork', gear_type: t5)
# food and water
Gear.create!(name: 'Water Bottle', gear_type: t6)
Gear.create!(name: 'Water Filter', gear_type: t6)
Gear.create!(name: 'Dehydrated Meal', gear_type: t6)
Gear.create!(name: 'Energy Gel', gear_type: t6)
Gear.create!(name: 'Energy Bar', gear_type: t6)
Gear.create!(name: 'Trail Mix', gear_type: t6)
Gear.create!(name: 'Fruit', gear_type: t6)
Gear.create!(name: 'Granola', gear_type: t6)
# clothing and footwear
Gear.create!(name: 'Moisture-Wicking Underwear', gear_type: t7)
Gear.create!(name: 'Short/Long-Sleeve T-shirt', gear_type: t7)
Gear.create!(name: 'Quick-Drying Shorts/Pants', gear_type: t7)
Gear.create!(name: 'Fleece Jacket', gear_type: t7)
Gear.create!(name: 'Insulated Jacket', gear_type: t7)
Gear.create!(name: 'Boots', gear_type: t7)
Gear.create!(name: 'Wool Socks', gear_type: t7)
Gear.create!(name: 'Rain Jacket/Pants', gear_type: t7)
Gear.create!(name: 'Gloves', gear_type: t7)
Gear.create!(name: 'Beanie', gear_type: t7)
Gear.create!(name: 'Camp Sandals', gear_type: t7)
# emergency & first-aid
Gear.create!(name: 'First-Aid Kit', gear_type: t8)
Gear.create!(name: 'Lighter', gear_type: t8)
Gear.create!(name: 'Matches', gear_type: t8)
Gear.create!(name: 'Emergency Shelter', gear_type: t8)
Gear.create!(name: 'Water Purifier', gear_type: t8)
Gear.create!(name: 'Avalanche Beacon', gear_type: t8)
Gear.create!(name: 'GPS Navigation System', gear_type: t8)
# health & hygiene
Gear.create!(name: 'Hand Sanitizer', gear_type: t9)
Gear.create!(name: 'Toothbrush', gear_type: t9)
Gear.create!(name: 'Toothpaste', gear_type: t9)
Gear.create!(name: 'Toilet Paper', gear_type: t9)
Gear.create!(name: 'Prescription Medicaiton', gear_type: t9)
Gear.create!(name: 'Sunglasses', gear_type: t9)
Gear.create!(name: 'Sunscreen', gear_type: t9)
Gear.create!(name: 'Chapstick', gear_type: t9)
Gear.create!(name: 'Bug Spray', gear_type: t9)
# tools & repair items
Gear.create!(name: 'Knife', gear_type: t10)
Gear.create!(name: 'Duct Tape', gear_type: t10)
Gear.create!(name: 'Tent Patches', gear_type: t10)
Gear.create!(name: 'Multi-Tool', gear_type: t10)
Gear.create!(name: 'Fishing Line', gear_type: t10)
Gear.create!(name: 'Fire Starter', gear_type: t10)
# extras
Gear.create!(name: 'Trekking Poles', gear_type: t11)
Gear.create!(name: 'Bear Spray', gear_type: t11)
Gear.create!(name: 'Action Camera', gear_type: t11)
Gear.create!(name: 'Journal', gear_type: t11)
Gear.create!(name: 'Pen', gear_type: t11)
Gear.create!(name: 'Book', gear_type: t11)
Gear.create!(name: 'Deck of Cards', gear_type: t11)
Gear.create!(name: 'Two-Way Radio', gear_type: t11)

h1 =
  Hike.create(
    trail_name: 'Red Mountain Trail',
    image:
      'https://cdn-assets.alltrails.com/static-map/production/at-map/17715253/trail-us-colorado-manitou-springs-red-mountain-trail-at-map-17715253-1644890139-414x200-2.png',
    out_and_back: 'Yes',
    loop: 'No',
    difficulty: 'Moderate',
    total_length: 1.25,
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
    total_length: 2.1,
    elevation_profile: 'Ascent: 758 ft. | Descent: 247 ft.',
    allows_dogs: 'Yes',
    allows_bikes: 'No',
    lat: '38.849157',
    lng: '-104.913',
  )
h3 =
  Hike.create(
    trail_name: 'Manitou Incline',
    image:
      'https://cdn-assets.alltrails.com/static-map/production/at-map/28974582/trail-us-colorado-manitou-incline-to-first-bail-out-at-map-28974582-1644894415-414x200-2.png',
    out_and_back: 'Yes',
    loop: 'No',
    difficulty: 'Hard',
    total_length: 0.8,
    elevation_profile: 'Ascent: 1,944 ft. | Descent: 0 ft.',
    allows_dogs: 'No',
    allows_bikes: 'No',
    lat: '38.856813',
    lng: '-104.932',
  )
h4 =
  Hike.create(
    trail_name: 'Barr Trail (To Pikes Peak)',
    image:
      'https://cdn-assets.alltrails.com/static-map/production/at-map/67720089/trail-us-colorado-barr-camp-via-barr-trail-at-map-67720089-1642829974-414x200-2.png',
    out_and_back: 'Yes',
    loop: 'No',
    difficulty: 'Moderate',
    total_length: 13.1,
    elevation_profile: 'Ascent: 7,567 ft. | Descent: 172 ft.',
    allows_dogs: 'Yes',
    allows_bikes: 'No',
    lat: '38.855787',
    lng: '-104.934',
  )
h5 =
  Hike.create(
    trail_name: 'Lower To Upper Columbine Trail',
    image:
      'https://cdn-assets.alltrails.com/de/static-map/production/at-map/20771031/trail-us-colorado-columbine-trail--4-at-map-20771031-1642645449-414x200-2.png',
    out_and_back: 'Yes',
    loop: 'No',
    difficulty: 'Moderate',
    total_length: 3.9,
    elevation_profile: 'Ascent: 1,342 ft. | Descent: 381 ft.',
    allows_dogs: 'Yes',
    allows_bikes: 'No',
    lat: '38.791414',
    lng: '-104.866',
  )
h6 =
  Hike.create(
    trail_name: 'Mount Muscoco',
    image:
      'https://cdn-assets.alltrails.com/static-map/production/at-map/22241785/trail-us-colorado-mount-muscoco-trail-at-map-22241785-1642650918-414x200-2.png',
    out_and_back: 'Yes',
    loop: 'No',
    difficulty: 'Moderate',
    total_length: 1.75,
    elevation_profile: 'Ascent: 1,074 ft. | Descent: 123 ft.',
    allows_dogs: 'Yes',
    allows_bikes: 'No',
    lat: '38.785557',
    lng: '-104.889',
  )
h7 =
  Hike.create(
    trail_name: 'Mount Cutler',
    image:
      'https://cdn-assets.alltrails.com/static-map/production/at-map/13370145/trail-us-colorado-mt-cutler-trail-at-map-13370145-1644328921-414x200-2.png',
    out_and_back: 'Yes',
    loop: 'No',
    difficulty: 'Easy',
    total_length: 1.1,
    elevation_profile: 'Ascent: 453 ft. | Descent: 189 ft.',
    allows_dogs: 'Yes',
    allows_bikes: 'No',
    lat: '38.787769',
    lng: '-104.877',
  )
h8 =
  Hike.create!(
    trail_name: 'Mount Harvard',
    image:
      'https://cdn-assets.alltrails.com/static-map/production/at-map/20979805/trail-us-colorado-mount-harvard-via-frenchman-creek-trail-1457-at-map-20979805-1642646192-414x200-2.png',
    out_and_back: 'Yes',
    loop: 'No',
    difficulty: 'Hard',
    total_length: 13.0,
    elevation_profile: 'Ascent: 4,514 ft. | Descent: 16 ft.',
    allows_dogs: 'Yes',
    allows_bikes: 'No',
    lat: '38.924368',
    lng: '-106.321',
  )
h9 =
  Hike.create!(
    trail_name: 'Mount Columbia',
    image:
      'https://cdn-assets.alltrails.com/static-map/production/at-map/48517946/trail-us-colorado-mount-columbia-via-horn-fork-basin-trail-at-map-48517946-1642752624-414x200-2.png',
    out_and_back: 'Yes',
    loop: 'No',
    difficulty: 'Hard',
    total_length: 10.0,
    elevation_profile: 'Ascent: 4,186 ft. | Descent: 22 ft.',
    allows_dogs: 'Yes',
    allows_bikes: 'No',
    lat: '38.903881',
    lng: '-106.297',
  )
h10 =
  Hike.create!(
    trail_name: 'Mount Yale',
    image:
      'https://cdn-assets.alltrails.com/static-map/production/at-map/18115874/trail-us-colorado-mount-yale-summit-trail-at-map-18115874-1647560646-414x200-2.png',
    out_and_back: 'Yes',
    loop: 'No',
    difficulty: 'Hard',
    total_length: 9.2,
    elevation_profile: 'Ascent: 4,328 ft. | Descent: 59 ft.',
    allows_dogs: 'No',
    allows_bikes: 'No',
    lat: '38.844154',
    lng: '-106.314',
  )
h11 =
  Hike.create!(
    trail_name: 'Mount Oxford',
    image:
      'https://cdn-assets.alltrails.com/static-map/production/at-map/24774112/trail-us-colorado-mount-oxford-via-pine-creek-trail-at-map-24774112-1642675439-414x200-2.png',
    out_and_back: 'Yes',
    loop: 'No',
    difficulty: 'Hard',
    total_length: 11.8,
    elevation_profile: 'Ascent: 5,084 ft. | Descent: 1,851 ft.',
    allows_dogs: 'No',
    allows_bikes: 'No',
    lat: '38.964776',
    lng: '-106.339',
  )
h12 =
  Hike.create!(
    trail_name: 'Mount Princeton',
    image:
      'https://cdn-assets.alltrails.com/static-map/production/at-map/13269572/trail-us-colorado-mount-princeton-trail-at-map-13269572-1645031623-414x200-2.png',
    out_and_back: 'Yes',
    loop: 'No',
    difficulty: 'Hard',
    total_length: 4.0,
    elevation_profile: 'Ascent: 2,366 ft. | Descent: 0 ft.',
    allows_dogs: 'No',
    allows_bikes: 'No',
    lat: '38.74919',
    lng: '-106.242',
  )
h13 =
  Hike.create!(
    trail_name: 'Mount Massive',
    image:
      'https://cdn-assets.alltrails.com/static-map/production/at-map/13353839/trail-us-colorado-mount-massive-trail-via-south-east-at-map-13353839-1642614400-414x200-2.png',
    out_and_back: 'Yes',
    loop: 'No',
    difficulty: 'Hard',
    total_length: 12.2,
    elevation_profile: 'Ascent: 4,452 ft. | Descent: 112 ft.',
    allows_dogs: 'Yes',
    allows_bikes: 'No',
    lat: '38.74919',
    lng: '-106.242',
  )
h14 =
  Hike.create!(
    trail_name: 'Mount Elbert',
    image:
      'https://cdn-assets.alltrails.com/static-map/production/at-map/80543889/trail-us-colorado-mount-elbert-east-ridge-trail-at-map-80543889-1644889957-414x200-2.png',
    out_and_back: 'Yes',
    loop: 'No',
    difficulty: 'Hard',
    total_length: 6.8,
    elevation_profile: 'Ascent: 3,858 ft. | Descent: 15 ft.',
    allows_dogs: 'Yes',
    allows_bikes: 'No',
    lat: '39.117642',
    lng: '-106.445',
  )
h15 =
  Hike.create!(
    trail_name: 'Crestone Peak',
    image:
      'https://cdn-assets.alltrails.com/static-map/production/at-map/20682906/trail-us-colorado-crestone-peak-trail-at-map-20682906-1642644959-414x200-2.png',
    out_and_back: 'Yes',
    loop: 'No',
    difficulty: 'Hard',
    total_length: 10.0,
    elevation_profile: 'Ascent: 5,403 ft. | Descent: 1,081 ft.',
    allows_dogs: 'No',
    allows_bikes: 'No',
    lat: '37.966847',
    lng: '-105.585',
  )
h16 =
  Hike.create!(
    trail_name: 'Crestone Needle',
    image:
      'https://cdn-assets.alltrails.com/static-map/production/at-map/20683373/trail-us-colorado-crestone-needle-from-old-south-colony-trailhead-at-map-20683373-1642644968-414x200-2.png',
    out_and_back: 'Yes',
    loop: 'No',
    difficulty: 'Hard',
    total_length: 9.0,
    elevation_profile: 'Ascent: 4,893 ft. | Descent: 613 ft.',
    allows_dogs: 'No',
    allows_bikes: 'No',
    lat: '37.964693',
    lng: '-105.577',
  )
h17 =
  Hike.create!(
    trail_name: 'Kit Carson Peak',
    image:
      'https://cdn-assets.alltrails.com/static-map/production/at-map/20085482/trail-us-washington-mount-kit-carson-trail-at-map-20085482-1647545418-414x200-2.png',
    out_and_back: 'Yes',
    loop: 'No',
    difficulty: 'Hard',
    total_length: 11.8,
    elevation_profile: 'Ascent: 5,508 ft. | Descent: 247 ft.',
    allows_dogs: 'No',
    allows_bikes: 'No',
    lat: '37.97968',
    lng: '-105.603',
  )
h18 =
  Hike.create!(
    trail_name: 'Challenger Point',
    image:
      'https://cdn-assets.alltrails.com/static-map/production/at-map/21236669/trail-us-colorado-challenger-point-at-map-21236669-1642646928-414x200-2.png',
    out_and_back: 'Yes',
    loop: 'No',
    difficulty: 'Hard',
    total_length: 10.75,
    elevation_profile: 'Ascent: 5,332 ft. | Descent: 108 ft.',
    allows_dogs: 'Yes',
    allows_bikes: 'No',
    lat: '37.980411',
    lng: '-105.607',
  )
h19 =
  Hike.create!(
    trail_name: 'Humboldt Peak',
    image:
      'https://cdn-assets.alltrails.com/static-map/production/at-map/20683730/trail-us-colorado-humboldt-peak-trail-at-map-20683730-1642644970-414x200-2.png',
    out_and_back: 'Yes',
    loop: 'No',
    difficulty: 'Hard',
    total_length: 10.6,
    elevation_profile: 'Ascent: 4,234 ft. | Descent: 69 ft.',
    allows_dogs: 'Yes',
    allows_bikes: 'No',
    lat: '37.976111',
    lng: '-105.555',
  )
h20 =
  Hike.create!(
    trail_name: 'Mount Democrat (Decalibron Loop)',
    image:
      'https://cdn-assets.alltrails.com/static-map/production/at-map/75193976/trail-us-colorado-the-decalibron-mounts-democrat-cameron-lincoln-and-bross-trail-at-map-75193976-1642845044-414x200-2.png',
    out_and_back: 'Yes',
    loop: 'No',
    difficulty: 'Moderate',
    total_length: 7.0,
    elevation_profile: 'Ascent: 3,136 ft. | Descent: 564 ft.',
    allows_dogs: 'Yes',
    allows_bikes: 'No',
    lat: '39.339584',
    lng: '-106.14',
  )
h21 =
  Hike.create!(
    trail_name: 'Mount Lincoln (Decalibron Loop)',
    image:
      'https://cdn-assets.alltrails.com/static-map/production/at-map/75193976/trail-us-colorado-the-decalibron-mounts-democrat-cameron-lincoln-and-bross-trail-at-map-75193976-1642845044-414x200-2.png',
    out_and_back: 'Yes',
    loop: 'No',
    difficulty: 'Moderate',
    total_length: 7.0,
    elevation_profile: 'Ascent: 3,136 ft. | Descent: 564 ft.',
    allows_dogs: 'Yes',
    allows_bikes: 'No',
    lat: '39.3514551',
    lng: '-106.111',
  )
h22 =
  Hike.create!(
    trail_name: 'Mount Bross (Decalibron Loop)',
    image:
      'https://cdn-assets.alltrails.com/static-map/production/at-map/75193976/trail-us-colorado-the-decalibron-mounts-democrat-cameron-lincoln-and-bross-trail-at-map-75193976-1642845044-414x200-2.png',
    out_and_back: 'Yes',
    loop: 'No',
    difficulty: 'Moderate',
    total_length: 7.0,
    elevation_profile: 'Ascent: 3,136 ft. | Descent: 564 ft.',
    allows_dogs: 'Yes',
    allows_bikes: 'No',
    lat: '39.335267',
    lng: '-106.108',
  )
h23 =
  Hike.create!(
    trail_name: 'Mount Cameron (Decalibron Loop)',
    image:
      'https://cdn-assets.alltrails.com/static-map/production/at-map/75193976/trail-us-colorado-the-decalibron-mounts-democrat-cameron-lincoln-and-bross-trail-at-map-75193976-1642845044-414x200-2.png',
    out_and_back: 'Yes',
    loop: 'No',
    difficulty: 'Moderate',
    total_length: 7.0,
    elevation_profile: 'Ascent: 3,136 ft. | Descent: 564 ft.',
    allows_dogs: 'Yes',
    allows_bikes: 'No',
    lat: '39.347085',
    lng: '-106.118',
  )

puts 'Creating Swapshop items...'
s1 =
  SwapShop.create!(
    item: 'Melanzana Micro Grid Hoodie',
    image_one: 'https://i.ebayimg.com/images/g/5FUAAOSwTh9iMrHj/s-l1600.jpg',
    image_two: 'https://i.ebayimg.com/images/g/LIMAAOSwWMBiMqbb/s-l1600.jpg',
    image_three: 'https://i.ebayimg.com/images/g/fSYAAOSwRixiMqbe/s-l1600.jpg',
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
    price: 300,
    description:
      "This possibly could be the lightest backpacking tent on the market, and has only been used a handful of times. There are some obvious tears in the mesh which need to be patched, but otherwise is in great shape. It's supported by a single trekking pole that must be at least 48 inches tall. Serious inquiries only!",
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
s13 =
  SwapShop.create!(
    item: 'DTS Tracker Avalanche Beacon',
    image_one:
      'https://www.14ers.com/usercontent/gear/2022/3253/classified3253_16476220416234b799b66af.jpg',
    image_two:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkvFpsYJKJiqJgTGfSeq32AETVrO95q5SOiGJzm92N_cpll19yfFye_eOq4ZHoBoJG8hk&usqp=CAU',
    image_three: 'https://i.ebayimg.com/images/g/fsQAAOSw00Nh9fpB/s-l300.jpg',
    price: 75,
    description:
      "There are better beacons out there these days but I don't use it and I'm willing to let it go cheap if someone needs an extra one. Paypal, cash, PM me if interested.",
    catagory: 'Other',
    user: u1,
  )
s14 =
  SwapShop.create!(
    item: 'SteriPen Ultra UV Water Purifier',
    image_one:
      'https://www.14ers.com/usercontent/gear/2022/3245/classified3245_164365935161f840573e768.jpg',
    image_two:
      'https://www.14ers.com/usercontent/gear/2022/3245/classified3245_164365934461f8405022198.jpg',
    image_three:
      'https://www.katadyngroup.com/LiveSiteAssets/60110054_60110055_ULT-MP-EF_EG_UltraStanding.jpg',
    price: 35,
    description:
      'Portable water purifier that uses UV-light technologies making water safe to drink. I also take Venmo and will add shipping to the cost.',
    catagory: 'Health & Hygiene',
    user: u1,
  )
s15 =
  SwapShop.create!(
    item: 'Osprey Scorpion 45L Pack S/M',
    image_one:
      'https://www.14ers.com/usercontent/gear/2021/3233/classified3233_164055498761c8e1eb0ac2f.jpg',
    image_two:
      'https://www.14ers.com/usercontent/gear/2021/3233/classified3233_164055499561c8e1f31cd8c.jpg',
    image_three:
      'https://www.14ers.com/usercontent/gear/2021/3233/classified3233_164055500261c8e1fa1d388.jpg',
    price: 160,
    description:
      "The reason I'm selling is because I have outgrown the torso length as I am still young. The only damage it has sustained is a chipped hip belt buckle.",
    catagory: 'Backpacks',
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
