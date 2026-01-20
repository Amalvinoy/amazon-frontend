import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
export default function Home() {
  const ProductCard = ({ title, items, link }) => (
    <div className="bg-white p-5 rounded shadow">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="grid grid-cols-2 gap-3">
        {items.map((item, i) => (
          <div key={i} className="text-center">
            <div className="w-full h-24 bg-gray-200 rounded mb-2"></div>
            <p className="text-xs">{item}</p>
          </div>
        ))}
      </div>
      <a href="#" className="text-blue-600 text-sm mt-3 inline-block hover:text-orange-700 hover:underline">{link}</a>
    </div>
  );

  const ScrollableSection = ({ title, count }) => (
    <div className="bg-white p-5 rounded shadow">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <a href="#" className="text-blue-600 text-sm hover:text-orange-700 hover:underline">See more</a>
      </div>
      <div className="relative">
        <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex gap-4 overflow-x-auto px-10">
          {[...Array(count)].map((_, i) => (
            <div key={i} className="min-w-[180px] flex-shrink-0 bg-gray-200 h-60 rounded"></div>
          ))}
        </div>
        <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );

  return (
    <>
    <Header />
    <div className="bg-gray-100">
      <div className="relative bg-gradient-to-r from-pink-100 to-pink-200 h-96 flex items-center">
        <button className="absolute left-4 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className="ml-20 max-w-md">
          <h2 className="text-4xl font-normal mb-2">Starting ₹99</h2>
          <p className="text-lg mb-2">Budget store</p>
          <p className="text-lg mb-4">Home, Kitchen & outdoor</p>
          <div className="flex gap-3 mb-4">
            <span className="bg-purple-100 px-3 py-1 rounded text-sm">PAY ON DELIVERY</span>
            <span className="bg-yellow-100 px-3 py-1 rounded text-sm">WIDE SELECTION</span>
          </div>
          <div className="bg-white px-3 py-2 inline-block rounded shadow-sm">
            <span className="text-sm">Get extra up to 5% back </span>
            <span className="text-yellow-600 text-sm font-semibold">with Amazon Pay ICICI Bank</span>
          </div>
        </div>

        <button className="absolute right-4 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <ProductCard 
            title="Revamp your home in style"
            items={["Cushion covers, bedsheets & more", "Figurines, vases & more", "Home storage", "Lighting solutions"]}
            link="Explore all"
          />
          <ProductCard 
            title="Appliances for your home | Up to 55% off"
            items={["Air Conditioners", "Refrigerators", "Microwaves", "Washing machines"]}
            link="See more"
          />
          <div className="bg-white p-5 rounded shadow">
            <h3 className="text-xl font-semibold mb-4">Starting $149 | Headphones</h3>
            <div className="space-y-3">
              <div>
                <div className="w-full h-32 bg-gray-200 rounded mb-2"></div>
                <p className="text-sm">Starting $149 | boAt</p>
              </div>
              <div>
                <div className="w-full h-32 bg-gray-200 rounded mb-2"></div>
                <p className="text-sm">Starting $149 | Noise</p>
              </div>
            </div>
            <a href="#" className="text-blue-600 text-sm mt-3 inline-block hover:text-orange-700 hover:underline">See all offers</a>
          </div>
          <div className="bg-white p-5 rounded shadow">
            <h3 className="text-xl font-semibold mb-4">Starting $99 | Amazon Brands & more</h3>
            <div className="space-y-3">
              <div>
                <div className="w-full h-32 bg-gray-200 rounded mb-2"></div>
                <p className="text-sm">Starting $299 | Home storage</p>
              </div>
              <div>
                <div className="w-full h-32 bg-gray-200 rounded mb-2"></div>
                <p className="text-sm">Up to 80% off | Toys & games</p>
              </div>
            </div>
            <a href="#" className="text-blue-600 text-sm mt-3 inline-block hover:text-orange-700 hover:underline">Shop now</a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <ProductCard 
            title="Automotive essentials | Up to 60% off"
            items={["Cleaning accessories", "Tyre & rim care", "Helmets", "Vacuum cleaner"]}
            link="See more"
          />
          <ProductCard 
            title="Up to 60% off | Styles for women"
            items={["Women's Clothing", "Footwear+Handbags", "Watches", "Fashion jewellery"]}
            link="See more"
          />
          <ProductCard 
            title="Starting ₹199 | Amazon Brands & more"
            items={["Starting ₹199 | Bedsheets", "Starting ₹199 | Curtains", "Minimum 40% off | Ironing", "Up to 60% off | Home decor"]}
            link="See more"
          />
          <ProductCard 
            title="Starting ₹99 | Home improvement"
            items={["Spin mops, wipes", "Bathroom hardware", "Hammers, screwdrivers", "Extension boards"]}
            link="See more"
          />
        </div>

        <ScrollableSection title="Related to items you've viewed" count={8} />
        <ScrollableSection title="More items to consider" count={8} />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded shadow">
            <h3 className="text-xl font-semibold mb-4">Keep shopping for</h3>
            <div className="grid grid-cols-2 gap-3">
              {[1,2,3,4].map(i => (
                <div key={i}>
                  <div className="w-full h-24 bg-gray-200 rounded mb-2"></div>
                  <p className="text-xs font-semibold">Product Name</p>
                  <p className="text-xs text-red-600">₹{399 + i*100}⁹⁹</p>
                </div>
              ))}
            </div>
            <a href="#" className="text-blue-600 text-sm mt-3 inline-block hover:text-orange-700 hover:underline">See more</a>
          </div>
          
          <div className="bg-white p-5 rounded shadow">
            <h3 className="text-xl font-semibold mb-4">Minimum 50% off | Indoor plants</h3>
            <div className="w-full h-64 bg-gray-200 rounded mb-3"></div>
            <a href="#" className="text-blue-600 text-sm hover:text-orange-700 hover:underline">See more</a>
          </div>
          
          <div className="bg-white p-5 rounded shadow">
            <h3 className="text-xl font-semibold mb-4">Customer Most-Loved Fashion</h3>
            <div className="grid grid-cols-2 gap-3">
              {[1,2,3,4].map(i => <div key={i} className="w-full h-32 bg-gray-200 rounded"></div>)}
            </div>
            <a href="#" className="text-blue-600 text-sm mt-3 inline-block hover:text-orange-700 hover:underline">Explore more</a>
          </div>
          
          <div className="bg-white p-5 rounded shadow">
            <h3 className="text-xl font-semibold mb-4">Up to 50% off | International brands</h3>
            <div className="w-full h-64 bg-gray-200 rounded mb-3"></div>
            <a href="#" className="text-blue-600 text-sm hover:text-orange-700 hover:underline">See all offers</a>
          </div>
        </div>

        <ScrollableSection title="Best Sellers in Computers & Accessories" count={7} />
        
        <div className="bg-white p-5 rounded shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">No cost EMI up to 24 months | Starting ₹4,433 INR/month*</h3>
            <a href="#" className="text-blue-600 text-sm hover:text-orange-700 hover:underline">See all offers</a>
          </div>
          <div className="relative">
            <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex gap-4 overflow-x-auto px-10">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="min-w-[280px] flex-shrink-0 bg-gray-200 h-48 rounded"></div>
              ))}
            </div>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        <div className="bg-white p-8 rounded shadow flex gap-8 items-center">
          <div className="w-64 h-64 bg-gray-200 rounded flex-shrink-0"></div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">CHKOKKO Women's Round Neck Full Sleeves Gym Sports Regular Fit T-Shirt</h3>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex text-yellow-500">★★★★☆</div>
              <span className="text-sm text-gray-600">3,819</span>
            </div>
            <p className="text-3xl font-semibold text-red-600 mb-2">₹509⁹⁹</p>
            <p className="text-sm text-gray-600">Save ₹100 with coupon</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded shadow">
            <h3 className="text-xl font-semibold mb-4">Pick up where you left off</h3>
            <div className="grid grid-cols-2 gap-3">
              {[1,2,3,4].map(i => (
                <div key={i}>
                  <div className="w-full h-32 bg-gray-200 rounded mb-2"></div>
                  <p className="text-xs font-semibold">Fashion Item {i}</p>
                  <p className="text-xs text-red-600">₹{499 + i*100}⁹⁹</p>
                </div>
              ))}
            </div>
            <a href="#" className="text-blue-600 text-sm mt-3 inline-block hover:text-orange-700 hover:underline">See more</a>
          </div>

          <div className="bg-white p-5 rounded shadow">
            <h3 className="text-xl font-semibold mb-4">Yeh Meri Family | Season 4 | Streaming Now</h3>
            <div className="w-full h-64 bg-gray-900 rounded mb-3 flex items-center justify-center">
              <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </div>
            <p className="text-sm font-semibold mb-2">Watch for FREE</p>
          </div>

          <div className="bg-white p-5 rounded shadow">
            <h3 className="text-xl font-semibold mb-4">Best Sellers in Sports, Fitness & Outdoors</h3>
            <div className="w-full h-40 bg-gray-200 rounded mb-3"></div>
            <p className="text-sm mb-3">Lifelong PVC Hex Dumbells Pack of 2 for Home...</p>
            <p className="text-lg font-semibold">₹509⁰⁰</p>
            <div className="grid grid-cols-4 gap-2 mt-3">
              {[1,2,3,4].map(i => <div key={i} className="w-full h-16 bg-gray-200 rounded"></div>)}
            </div>
          </div>

          <div className="bg-white p-5 rounded shadow">
            <h3 className="text-xl font-semibold mb-4">Up to 70% off | IDAM natural wellness | Smal...</h3>
            <div className="w-full h-64 bg-gray-200 rounded mb-3"></div>
            <a href="#" className="text-blue-600 text-sm hover:text-orange-700 hover:underline">See all offers</a>
          </div>
        </div>

        <ScrollableSection title="Best Sellers in Clothing & Accessories" count={8} />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded shadow">
            <h3 className="text-xl font-semibold mb-4">Best Sellers in Toys & Games</h3>
            <div className="w-full h-40 bg-gray-200 rounded mb-3"></div>
            <p className="text-sm mb-2">Juvin Rechargeable Tap-Talking Cactus Baby Toys...</p>
            <p className="text-lg font-semibold mb-3">₹319⁰⁰</p>
            <div className="grid grid-cols-4 gap-2">
              {[1,2,3,4].map(i => <div key={i} className="w-full h-16 bg-gray-200 rounded"></div>)}
            </div>
          </div>

          <div className="bg-white p-5 rounded shadow">
            <h3 className="text-xl font-semibold mb-4">Customers' Most-Loved Products</h3>
            <div className="space-y-3">
              <div className="w-full h-32 bg-gray-200 rounded"></div>
              <div className="w-full h-32 bg-gray-200 rounded"></div>
            </div>
            <a href="#" className="text-blue-600 text-sm mt-3 inline-block hover:text-orange-700 hover:underline">Explore more</a>
          </div>

          <div className="bg-white p-5 rounded shadow">
            <h3 className="text-xl font-semibold mb-4">Best Sellers in Beauty</h3>
            <div className="grid grid-cols-2 gap-3">
              {[1,2,3,4].map(i => <div key={i} className="w-full h-28 bg-gray-200 rounded"></div>)}
            </div>
          </div>

          <div className="bg-white p-5 rounded shadow">
            <h3 className="text-xl font-semibold mb-4">Latest styles | Dresses, kurta & more | 50%...</h3>
            <div className="grid grid-cols-2 gap-3 mb-3">
              {[1,2,3,4].map(i => (
                <div key={i}>
                  <div className="w-full h-24 bg-gray-200 rounded mb-1"></div>
                  <p className="text-xs">{i === 1 ? "Kurta & sets" : i === 2 ? "Tops" : i === 3 ? "Dresses" : "Sarees"}</p>
                </div>
              ))}
            </div>
            <a href="#" className="text-blue-600 text-sm hover:text-orange-700 hover:underline">See more</a>
          </div>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Min. 50% off | Unique kitchen finds | Amazon Brands & more</h3>
            <a href="#" className="text-blue-600 text-sm hover:text-orange-700 hover:underline">See all</a>
          </div>
          <div className="relative">
            <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex gap-4 overflow-x-auto px-10">
              {[...Array(7)].map((_, i) => (
                <div key={i} className="min-w-[200px] flex-shrink-0 bg-gray-200 h-48 rounded"></div>
              ))}
            </div>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Inspired by your browsing history</h3>
            <span className="text-sm text-gray-600">Page 1 of 2</span>
          </div>
          <div className="relative">
            <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex gap-4 overflow-x-auto px-10">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="min-w-[200px] flex-shrink-0">
                  <div className="bg-gray-200 h-48 rounded mb-2"></div>
                  <p className="text-sm font-semibold mb-1">Product Name {i+1}</p>
                  <div className="flex text-yellow-500 text-xs mb-1">★★★★☆ <span className="text-gray-600 ml-1">({200+i})</span></div>
                  <p className="text-sm text-gray-600 mb-1">{200+i*50}+ viewed in past month</p>
                  <p className="text-lg font-semibold">₹{420 + i*50}.00</p>
                  <p className="text-xs text-green-700">FREE Delivery</p>
                </div>
              ))}
            </div>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        <div className="bg-gradient-to-b from-white to-gray-50 p-8 text-center rounded shadow">
          <h3 className="text-lg mb-4">See personalized recommendations</h3>
          <button className="bg-gradient-to-b from-yellow-200 to-yellow-400 border border-yellow-600 px-20 py-2 rounded text-sm hover:from-yellow-300 hover:to-yellow-500">
            Sign in
          </button>
          <p className="text-sm mt-3">
            New customer? <a href="#" className="text-blue-600 hover:text-orange-700 hover:underline">Start here</a>
          </p>
        </div>
        <div className="bg-gray-700 hover:bg-gray-600 text-white text-center py-4 rounded cursor-pointer">
          <span className="text-sm">Back to top</span>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}