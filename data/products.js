const products = [
  {
    name: 'Airpods Wireless Bluetooth Headphones',
    image: '/images/airpods.jpg',
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    category: 'Electronics',
    price: 89.99,
    countInStock: 3,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'iPhone 11 Pro 256GB Memory',
    image: '/images/phone.jpg',
    description:
      'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
    brand: 'Apple',
    category: 'Electronics',
    price: 599.99,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Cannon EOS 80D DSLR Camera',
    image: '/images/camera.jpg',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'Cannon',
    category: 'Electronics',
    price: 929.99,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Sony Playstation 4 Pro White Version',
    image: '/images/playstation.jpg',
    description:
      'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
    brand: 'Sony',
    category: 'Electronics',
    price: 399.99,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Logitech G-Series Gaming Mouse',
    image: '/images/mouse.jpg',
    description:
      'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
    brand: 'Logitech',
    category: 'Electronics',
    price: 49.99,
    countInStock: 7,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Amazon Echo Dot 3rd Generation',
    image: '/images/alexa.jpg',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'Amazon',
    category: 'Electronics',
    price: 29.99,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Amazon Echo Dot 3rd Generation',
    image: '/images/alexa.jpg',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'Amazon',
    category: 'Electronics',
    price: 29.99,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Samsung Galaxy S20 Ultra',
    image: '/images/CGG_Samsung-galaxys20ultra.jpg',
    description:
      'Experience cutting-edge technology with the Samsung Galaxy S20 Ultra. Featuring a 108MP camera, 5G capabilities, and a large 6.9 inch display.',
    brand: 'Samsung',
    category: 'Electronics',
    price: 999.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 100,
  },
  {
    name: 'Nike Air Max 270 React',
    image: '/images/Nike-Air-Max-270-React-Hyper-Jade-Frosted-Spruce-2-800.jpg',
    description:
      'Elevate your sneaker game with the Nike Air Max 270 React. Combining the latest in cushioning technology and sleek design, these shoes are perfect for both performance and style.',
    brand: 'Nike',
    category: 'Clothing',
    price: 149.99,
    countInStock: 50,
    rating: 4.7,
    numReviews: 200,
  },
  {
    name: 'Cuisinart Stainless Steel Cookware Set',
    image: '/images/cuisinart-cookware-set.jpg',
    description:
      'Upgrade your kitchen with the Cuisinart Stainless Steel Cookware Set. Made with durable materials and featuring a variety of pots and pans, this set is perfect for all your cooking needs.',
    brand: 'Cuisinart',
    category: 'Home & Kitchen',
    price: 199.99,
    countInStock: 20,
    rating: 4.3,
    numReviews: 150,
  },
  {
    name: 'Keurig K-Elite Coffee Maker',
    image: '/images/810PNb74C9L._AC_UF894,1000_QL80_.jpg',
    description:
      'Enjoy a perfect cup of coffee every time with the Keurig K-Elite Coffee Maker. Featuring a variety of cup sizes and a strong brew option, this coffee maker is perfect for any coffee lover.',
    brand: 'Keurig',
    category: 'Home & Kitchen',
    price: 129.99,
    countInStock: 30,
    rating: 4.6,
    numReviews: 175,
  },
  {
    name: 'Apple iPad Pro',
    image: '/images/downloadapple.jpg',
    description:
      'Get work done and stay connected on the go with the Apple iPad Pro. Featuring a large 12.9 inch display and powerful A12Z Bionic chip, this tablet is perfect for both productivity and entertainment.',
    brand: 'Apple',
    category: 'Electronics',
    price: 799.99,
    countInStock: 10,
  },
  {
    name: 'Canon EOS Rebel T7 DSLR Camera',
    image: '/images/6323758_bd.jpg',
    description:
      'Capture stunning photographs with the Canon EOS Rebel T7 DSLR Camera. Featuring a 24.1 megapixel CMOS sensor and DIGIC 4+ Image Processor, this camera is perfect for both amateurs and professionals.',
    brand: 'Canon',
    category: 'Electronics',
    price: 399.99,
    countInStock: 20,
    rating: 4.5,
    numReviews: 75,
  },
  {
    name: "Under Armour Men's Charged Cotton T-Shirt",
    image: '/images/under-armour-charged-cotton-tshirt.jpg',
    description:
      "Stay comfortable and stylish with the Under Armour Men's Charged Cotton T-Shirt. Made with moisture-wicking technology and a relaxed fit, this shirt is perfect for both workout and casual wear.",
    brand: 'Under Armour',
    category: 'Clothing',
    price: 24.99,
    countInStock: 50,
    rating: 4.2,
    numReviews: 100,
  },
  {
    name: 'Beats by Dre Powerbeats Pro Wireless Earphones',
    image: '/images/downloadbead.jpg',
    description:
      'Get in the zone with the Beats by Dre Powerbeats Pro Wireless Earphones. Featuring powerful sound and a secure fit, these earphones are perfect for both workouts and everyday use.',
    brand: 'Beats by Dre',
    category: 'Electronics',
    price: 199.99,
    countInStock: 30,
    rating: 4.7,
    numReviews: 150,
  },
  {
    name: 'Dyson V11 Cordless Vacuum',
    image: '/images/design-medium.jpg',
    description:
      'Clean your home with ease using the Dyson V11 Cordless Vacuum. Featuring powerful suction and a long battery life, this vacuum is perfect for both carpets and hard floors.',
    brand: 'Dyson',
    category: 'Home & Kitchen',
    price: 499.99,
    countInStock: 10,
    rating: 4.9,
    numReviews: 50,
  },
  {
    name: 'Nintendo Switch Console',
    image:
      '/images/view-nintendo-switch-game-console-front-blank-screen-isolated-white-ideal-having-fun-friends-family-milan-italy-212307207.jpg',
    description:
      'Play your favorite games on the go with the Nintendo Switch Console. Featuring a variety of games and a portable design, this console is perfect for both kids and adults.',
    brand: 'Nintendo',
    category: 'Electronics',
    price: 299.99,
    countInStock: 15,
    rating: 4.6,
    numReviews: 100,
  },
  {
    name: 'Sony PlayStation 5 Console',
    image: '/images/istockphoto-1287493837-612x612.jpg',
    description:
      'Experience the future of gaming with the Sony PlayStation 5 Console. Featuring powerful graphics and lightning-fast load times, this console is perfect for both single',
    brand: 'Sony',
    category: 'Electronics',
    price: 499.99,
    countInStock: 10,
    rating: 4.8,
    numReviews: 50,
  },
]

export default products
