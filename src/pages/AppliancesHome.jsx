export default function AmazonAppliancesPage() {
  const products = [
    {
      image: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=300&h=300&fit=crop",
      title: "Elica 60 cm 1200 m3/hr Filterless Autoclean Kitchen Chimney with 15 Years Warranty (WDFL 606 HAC LT...",
      rating: 4,
      reviews: "13,204",
      buyers: "300+ bought in past month",
      price: "₹12,990",
      originalPrice: "₹26,990",
      discount: "48% off",
      delivery: "FREE delivery by Sat, 14 Sept, 7:00 am - 9:00 pm"
    },
    {
      image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=300&h=300&fit=crop",
      title: "Godrej 1.5 Ton 3 Star, 5-in-1 Convertible, Inverter Split AC with Air Purification Filter & 15 Years warranty, Copper, I-Sense Technology, 2023...",
      rating: 4,
      reviews: "610",
      buyers: "200+ bought in past month",
      price: "₹32,990",
      originalPrice: "₹54,900",
      discount: "40% off",
      delivery: "FREE delivery by Sun, 15 Sept, 7:00 am - 9:00 pm"
    },
    {
      image: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=300&h=300&fit=crop",
      title: "LG 28 L Convection Microwave Oven (MC2846BV, Black, With Healthier menu & Quartz Heater)",
      rating: 4.5,
      reviews: "922",
      buyers: "600+ bought in past month",
      price: "₹13,490",
      originalPrice: "₹20,990",
      discount: "36% off",
      delivery: "FREE delivery by Sun, 15 Sept, 7:00 am - 9:00 pm"
    },
    {
      image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=300&h=300&fit=crop",
      title: "Samsung 8 Kg, 5 star, Eco Bubble Tech, Digital Inverter Motor, Soft Closing Door, Fully-Automatic Top Load...",
      rating: 4,
      reviews: "25,405",
      buyers: "1k+ bought in past month",
      price: "₹19,990",
      originalPrice: "₹31,990",
      discount: "38% off",
      delivery: "FREE delivery by Sat, 14 Sept, 7:00 am - 9:00 pm"
    },
    {
      image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=300&h=300&fit=crop",
      title: "Samsung 7 kg, Eco Bubble Tech, Digital Inverter Motor, Soft Closing Door, Fully-Automatic Top Load Washing...",
      rating: 4,
      reviews: "6,483",
      buyers: "1k+ bought in past month",
      price: "₹17,990",
      originalPrice: "₹28,990",
      discount: "38% off",
      delivery: "FREE delivery by Sat, 14 Sept, 7:00 am - 9:00 pm"
    },
    {
      image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=300&h=300&fit=crop",
      title: "Samsung 7 kg, 3 star, Fully-Automatic Top Load Washing Machine (WA70A4002GS/TL, Imperial Silver)",
      rating: 4,
      reviews: "5,123",
      buyers: "1k+ bought in past month",
      price: "₹16,590",
      originalPrice: "₹22,400",
      discount: "26% off",
      delivery: "FREE delivery by Sun, 15 Sept, 7:00 am - 9:00 pm"
    },
    {
      image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=300&h=300&fit=crop",
      title: "LG 6.5 Kg 5 Star Inverter TurboDrum Fully Automatic Top Loading Washing Machine (T65SKSF4Z, 4 Smart Motion...",
      rating: 4,
      reviews: "19,922",
      buyers: "900+ bought in past month",
      price: "₹16,490",
      originalPrice: "₹25,990",
      discount: "37% off",
      delivery: "FREE delivery by Sun, 15 Sept, 7:00 am - 9:00 pm"
    },
    {
      image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=300&h=300&fit=crop",
      title: "Godrej 6.5 Kg 5 Star I-Wash Technology for Automatic One Touch Wash Fully-Automatic Top Load Washing Machine...",
      rating: 4,
      reviews: "1,440",
      buyers: "800+ bought in past month",
      price: "₹12,990",
      originalPrice: "₹18,900",
      discount: "31% off",
      delivery: "FREE delivery by Sat, 14 Sept, 7:00 am - 9:00 pm"
    },
    {
      image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=300&h=300&fit=crop",
      title: "Panasonic 20 L Solo Microwave Oven (NN-SM25JBFDG,Black)",
      rating: 4,
      reviews: "5",
      buyers: "300+ bought in past month",
      price: "₹12,990",
      originalPrice: "₹18,900",
      discount: "31% off",
      delivery: "FREE delivery by Sat, 14 Sept, 7:00 am - 9:00 pm"
    },
    {
      image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=300&h=300&fit=crop",
      title: "Samsung 183 L, 4 Star, Digital Inverter, Direct-Cool Single Door Refrigerator (RR20C1824CR/HL, Red, 2023...",
      rating: 4,
      reviews: "610",
      buyers: "200+ bought in past month",
      price: "₹32,990",
      originalPrice: "₹24,900",
      discount: "40% off",
      delivery: "FREE delivery by Sun, 15 Sept, 7:00 am - 9:00 pm"
    },
    {
      image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=300&h=300&fit=crop",
      title: "LG 7 Kg, 5 Star, Direct Drive Technology, Steam Wash, 6 Motion DD & Smart Diagnosis, Fully-Automatic Front Load",
      rating: 4.5,
      reviews: "922",
      buyers: "600+ bought in past month",
      price: "₹13,490",
      originalPrice: "₹20,990",
      discount: "36% off",
      delivery: "FREE delivery by Sun, 15 Sept, 7:00 am - 9:00 pm"
    },
    {
      image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=300&h=300&fit=crop",
      title: "Whirlpool 184 L 2 Star Direct-Cool Single Door Refrigerator (205 WDE CLS 25 SAPPHIRE BLUE-Z, Blue, 2023 Model)",
      rating: 4,
      reviews: "25,405",
      buyers: "1k+ bought in past month",
      price: "₹19,990",
      originalPrice: "₹23,500",
      discount: "15% off",
      delivery: "FREE delivery by Sat, 14 Sept, 7:00 am - 9:00 pm"
    }
  ];

  return (
    <div className="bg-white">
      <div className="border-b border-gray-300 bg-gray-50 px-4 py-2">
        <div className="max-w-7xl mx-auto flex gap-4 text-xs overflow-x-auto">
          <a href="#" className="whitespace-nowrap hover:text-orange-700">Amazon Home</a>
          <a href="#" className="whitespace-nowrap hover:text-orange-700">Kitchen & Home Appliances</a>
          <a href="#" className="whitespace-nowrap hover:text-orange-700">Large Appliances</a>
          <a href="#" className="whitespace-nowrap hover:text-orange-700">Kitchen & Dining</a>
          <a href="#" className="whitespace-nowrap hover:text-orange-700">Furniture</a>
          <a href="#" className="whitespace-nowrap hover:text-orange-700">Home Furnishing</a>
          <a href="#" className="whitespace-nowrap hover:text-orange-700">Home Decor</a>
          <a href="#" className="whitespace-nowrap hover:text-orange-700">Home Improvement</a>
          <a href="#" className="whitespace-nowrap hover:text-orange-700">Garden Outdoor</a>
          <a href="#" className="whitespace-nowrap hover:text-orange-700">Storage & Organisation</a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          <div className="w-64 flex-shrink-0">
            <div className="mb-6">
              <h3 className="font-bold text-sm mb-2">Delivery Day</h3>
              <label className="flex items-center text-sm cursor-pointer">
                <input type="radio" name="delivery" className="mr-2" />
                Get it in 2 Days
              </label>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-sm mb-2">Customer Reviews</h3>
              <button className="flex items-center text-sm hover:text-orange-700">
                <div className="flex text-yellow-500 mr-2">★★★★☆</div>
                <span>& Up</span>
              </button>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-sm mb-2">Brands</h3>
              <div className="space-y-2 text-sm">
                <label className="flex items-center cursor-pointer hover:text-orange-700">
                  <input type="checkbox" className="mr-2" />
                  Samsung
                </label>
                <label className="flex items-center cursor-pointer hover:text-orange-700">
                  <input type="checkbox" className="mr-2" />
                  LG
                </label>
                <label className="flex items-center cursor-pointer hover:text-orange-700">
                  <input type="checkbox" className="mr-2" />
                  Whirlpool
                </label>
                <label className="flex items-center cursor-pointer hover:text-orange-700">
                  <input type="checkbox" className="mr-2" />
                  Daikin
                </label>
                <label className="flex items-center cursor-pointer hover:text-orange-700">
                  <input type="checkbox" className="mr-2" />
                  Godrej
                </label>
                <label className="flex items-center cursor-pointer hover:text-orange-700">
                  <input type="checkbox" className="mr-2" />
                  IFB
                </label>
                <label className="flex items-center cursor-pointer hover:text-orange-700">
                  <input type="checkbox" className="mr-2" />
                  Panasonic
                </label>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-sm mb-2">Price</h3>
              <div className="space-y-2 text-sm">
                <label className="flex items-center cursor-pointer hover:text-orange-700">
                  <input type="radio" name="price" className="mr-2" />
                  All
                </label>
                <label className="flex items-center cursor-pointer hover:text-orange-700">
                  <input type="radio" name="price" className="mr-2" />
                  ₹5,000 to ₹10,000
                </label>
                <label className="flex items-center cursor-pointer hover:text-orange-700">
                  <input type="radio" name="price" className="mr-2" />
                  ₹10,000 to ₹20,000
                </label>
                <label className="flex items-center cursor-pointer hover:text-orange-700">
                  <input type="radio" name="price" className="mr-2" />
                  ₹20,000 to ₹30,000
                </label>
                <label className="flex items-center cursor-pointer hover:text-orange-700">
                  <input type="radio" name="price" className="mr-2" />
                  ₹30,000 to ₹45,000
                </label>
              </div>
            </div>

            {/* Deals & Discount */}
            <div className="mb-6">
              <h3 className="font-bold text-sm mb-2">Deals & Discount</h3>
              <div className="space-y-2 text-sm">
                <label className="flex items-center cursor-pointer hover:text-orange-700">
                  <input type="checkbox" className="mr-2" />
                  All Discounts
                </label>
                <label className="flex items-center cursor-pointer hover:text-orange-700">
                  <input type="checkbox" className="mr-2" />
                  Today's Deals
                </label>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-sm mb-2">Item Condition</h3>
              <label className="flex items-center text-sm cursor-pointer hover:text-orange-700">
                <input type="checkbox" className="mr-2" />
                New
              </label>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-sm mb-2">Pay on Delivery</h3>
              <label className="flex items-center text-sm cursor-pointer hover:text-orange-700">
                <input type="checkbox" className="mr-2" />
                Eligible for Pay-On-Delivery
              </label>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-sm mb-2">Discount</h3>
              <div className="space-y-2 text-sm">
                <label className="flex items-center cursor-pointer hover:text-orange-700">
                  <input type="radio" name="discount" className="mr-2" />
                  All
                </label>
                <label className="flex items-center cursor-pointer hover:text-orange-700">
                  <input type="radio" name="discount" className="mr-2" />
                  10% off or more
                </label>
                <label className="flex items-center cursor-pointer hover:text-orange-700">
                  <input type="radio" name="discount" className="mr-2" />
                  25% off or more
                </label>
                <label className="flex items-center cursor-pointer hover:text-orange-700">
                  <input type="radio" name="discount" className="mr-2" />
                  35% off or more
                </label>
                <label className="flex items-center cursor-pointer hover:text-orange-700">
                  <input type="radio" name="discount" className="mr-2" />
                  50% off or more
                </label>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-sm mb-2">Seller</h3>
              <div className="space-y-2 text-sm">
                <label className="flex items-center cursor-pointer hover:text-orange-700">
                  <input type="checkbox" className="mr-2" />
                  DAWN TECH ELECTRONICS PRIVATE LIMITED
                </label>
                <label className="flex items-center cursor-pointer hover:text-orange-700">
                  <input type="checkbox" className="mr-2" />
                  Infiniti E-Retail
                </label>
                <label className="flex items-center cursor-pointer hover:text-orange-700">
                  <input type="checkbox" className="mr-2" />
                  SUNRISE ELECTRONICS
                </label>
                <label className="flex items-center cursor-pointer hover:text-orange-700">
                  <input type="checkbox" className="mr-2" />
                  Kiloshm Brand Store
                </label>
                <label className="flex items-center cursor-pointer hover:text-orange-700">
                  <input type="checkbox" className="mr-2" />
                  LOWPRICE DEALZ
                </label>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-sm mb-2">Availability</h3>
              <label className="flex items-center text-sm cursor-pointer hover:text-orange-700">
                <input type="checkbox" className="mr-2" />
                Include Out of Stock
              </label>
            </div>
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {products.map((product, index) => (
                <div key={index} className="border border-gray-200 rounded p-4 hover:shadow-lg transition-shadow">
                  <div className="bg-gray-100 h-48 rounded mb-3 flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-gray-200"></div>
                  </div>
                  <h3 className="text-sm mb-2 line-clamp-2 h-10">{product.title}</h3>
                  <div className="flex items-center gap-1 mb-1">
                    <div className="flex text-yellow-500 text-xs">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>{i < product.rating ? '★' : '☆'}</span>
                      ))}
                    </div>
                    <span className="text-xs text-blue-600">{product.reviews}</span>
                  </div>
                  <p className="text-xs text-gray-600 mb-2">{product.buyers}</p>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-2xl font-semibold">{product.price}</span>
                    <span className="text-xs text-gray-600">({product.discount})</span>
                  </div>
                  <p className="text-xs text-gray-500 line-through mb-2">M.R.P: {product.originalPrice}</p>
                  <p className="text-xs text-gray-700 mb-3">{product.delivery}</p>
                  <button className="w-full bg-gradient-to-b from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 py-2 rounded text-sm font-medium">
                    Add to cart
                  </button>
                </div>
              ))}
            </div>

            <div className="flex justify-center items-center gap-3 mt-8">
              <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 text-sm">
                ← Previous
              </button>
              <button className="px-4 py-2 bg-yellow-400 border border-yellow-600 rounded text-sm font-medium">
                1
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 text-sm">
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Inspired by your browsing history</h2>
            <span className="text-sm text-gray-600">Page 1 of 2</span>
          </div>
          <div className="relative">
            <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full hover:bg-gray-100">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex gap-4 overflow-x-auto px-10">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="min-w-[180px] flex-shrink-0">
                  <div className="bg-gray-200 h-48 rounded mb-2"></div>
                  <h3 className="text-sm font-medium mb-1 line-clamp-2">Product Name {item}</h3>
                  <div className="flex text-yellow-500 text-xs mb-1">★★★★☆</div>
                  <p className="text-xs text-gray-600 mb-1">200+ viewed in past month</p>
                  <p className="text-lg font-bold">₹{420 + item*50}.00</p>
                  <p className="text-xs text-green-700">FREE Delivery</p>
                </div>
              ))}
            </div>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full hover:bg-gray-100">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="bg-white p-8 text-center mt-8 rounded shadow-sm">
            <h3 className="text-base mb-4">See personalized recommendations</h3>
            <button className="bg-gradient-to-b from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 px-20 py-2 rounded text-sm font-medium mb-3">
              Sign in
            </button>
            <p className="text-sm">
              New customer? <a href="#" className="text-blue-600 hover:text-orange-700 hover:underline">Start here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}