export default function AmazonHeader() {
  return (
    <header className="bg-gray-900 text-white">
      <div className="bg-gray-900 px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="#" className="flex items-center">
              <svg className="w-24 h-8" viewBox="0 0 103 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M66.7 23.8c-6.2 4.6-15.2 7-22.9 7-10.8 0-20.6-4-28-10.7-.6-.5-.1-1.2.6-.8 7.9 4.6 17.6 7.4 27.7 7.4 6.8 0 14.2-1.4 21.1-4.3 1-.4 1.9.7.9 1.4z" fill="#FF9900"/>
                <path d="M69.1 21.1c-.8-1-5.2-.5-7.2-.2-.6.1-.7-.5-.2-.9 3.5-2.5 9.3-1.8 10-.9.7.9-.2 6.7-3.5 9.5-.5.4-1 .2-.8-.4.8-1.9 2.5-6.1 1.7-7.1z" fill="#FF9900"/>
                <path d="M61.9 5.3V3.1c0-.3.2-.5.5-.5h9.3c.3 0 .5.2.5.5v1.9c0 .3-.2.6-.5.9l-4.8 6.9c1.8 0 3.7.2 5.3 1.1.4.2.5.5.5.8v2.4c0 .3-.3.6-.6.4-2.5-1.3-5.8-1.4-8.6 0-.3.1-.6-.1-.6-.4v-2.3c0-.3 0-.9.3-1.4l5.6-8H62.4c-.3 0-.5-.2-.5-.5zM22.4 17.2h-3c-.3 0-.5-.2-.5-.5V3.2c0-.3.2-.5.5-.5h2.8c.3 0 .5.2.5.5v1.7h.1c.7-1.7 2-2.5 3.8-2.5 1.8 0 2.9.8 3.7 2.5.7-1.7 2.4-2.5 4-2.5 1.2 0 2.5.5 3.3 1.6.9 1.2.7 2.9.7 4.4v8.8c0 .3-.2.5-.5.5h-3c-.3 0-.5-.2-.5-.5V9.4c0-.6.1-2.1-.1-2.7-.3-1-.9-1.3-1.8-1.3-.7 0-1.5.5-1.8 1.3-.3.8-.3 2.1-.3 2.7v7.8c0 .3-.2.5-.5.5h-3c-.3 0-.5-.2-.5-.5V9.4c0-1.6.3-4-.9-5.3-.4-.5-1.1-.8-1.7-.8-.7 0-1.4.5-1.7 1.2-.4.8-.4 1.6-.4 2.4v10.3c-.2.3-.4.5-.7.5zM85.9 2.4c4.4 0 6.8 3.8 6.8 8.6 0 4.6-2.6 8.4-6.8 8.4-4.3 0-6.7-3.8-6.7-8.5 0-4.7 2.4-8.5 6.7-8.5zm0 3.1c-2.2 0-2.3 3-2.3 4.8 0 1.9 0 5.8 2.3 5.8 2.2 0 2.4-3.1 2.4-5 0-1.2-.1-2.8-.4-4-.3-1-.8-1.6-1.9-1.6zm12.2 11.7h-3c-.3 0-.5-.2-.5-.5V3.2c0-.3.2-.5.5-.5h2.8c.2 0 .4.2.5.4v2h.1c.8-1.8 2-2.7 3.9-2.7 1.3 0 2.5.5 3.3 1.7.7 1.1.7 2.9.7 4.2v8.9c0 .3-.2.5-.5.5h-3c-.3 0-.5-.2-.5-.5V9.6c0-1.6.2-4-1.8-4-1.5 0-1.9 1.1-2.2 2.2-.1.3-.1.6-.1.9v8.5c-.1.2-.3.4-.6.4z" fill="#fff"/>
                <path d="M43.5 17.2c-.2 0-.4-.2-.5-.4l-5.5-14.5c-.1-.2 0-.5.3-.5h3c.2 0 .4.1.4.3l3.4 9.8h.1l3.4-9.8c.1-.2.2-.3.4-.3h3c.2 0 .4.2.3.5l-5.5 14.5c-.1.2-.3.4-.5.4h-2.3z" fill="#fff"/>
              </svg>
            </a>

            <button className="flex items-center gap-1 hover:border border-white rounded px-2 py-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <div className="text-left">
                <p className="text-xs text-gray-300">Delivering to Surat 394210</p>
                <p className="text-sm font-bold">Update location</p>
              </div>
            </button>
          </div>

          <div className="flex-1 max-w-3xl mx-4">
            <div className="flex">
              <button className="bg-gray-200 text-gray-700 px-3 py-2 rounded-l border-r border-gray-300 hover:bg-gray-300 flex items-center gap-1">
                <span className="text-sm">All</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <input
                type="text"
                placeholder="Search Amazon.in"
                className="flex-1 px-4 py-2 text-gray-900 outline-none"
              />
              <button className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-r">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="flex items-center gap-1 hover:border border-white rounded px-2 py-1">
              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30'%3E%3Cpath fill='%23ff9933' d='M0 0h60v10H0z'/%3E%3Cpath fill='%23fff' d='M0 10h60v10H0z'/%3E%3Cpath fill='%23138808' d='M0 20h60v10H0z'/%3E%3Ccircle cx='30' cy='15' r='4' fill='%23000080'/%3E%3C/svg%3E" alt="IN" className="w-5 h-3" />
              <span className="text-sm font-bold">EN</span>
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>

            <button className="hover:border border-white rounded px-2 py-1 text-left">
              <p className="text-xs">Hello, sign in</p>
              <p className="text-sm font-bold flex items-center gap-1">
                Account & Lists
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </p>
            </button>

            <button className="hover:border border-white rounded px-2 py-1 text-left">
              <p className="text-xs">Returns</p>
              <p className="text-sm font-bold">& Orders</p>
            </button>

            <button className="flex items-center gap-2 hover:border border-white rounded px-2 py-1">
              <div className="relative">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="absolute top-0 right-0 bg-yellow-500 text-gray-900 text-xs font-bold px-1.5 rounded-full">0</span>
              </div>
              <span className="text-sm font-bold">Cart</span>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 px-4 py-2">
        <div className="flex items-center gap-6 text-sm">
          <button className="flex items-center gap-2 hover:border border-white rounded px-2 py-1">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            <span className="font-bold">All</span>
          </button>

          <a href="#" className="hover:border border-white rounded px-2 py-1">Amazon miniTV</a>
          <a href="#" className="hover:border border-white rounded px-2 py-1">Sell</a>
          <a href="#" className="hover:border border-white rounded px-2 py-1">Best Sellers</a>
          <a href="#" className="hover:border border-white rounded px-2 py-1">Today's Deals</a>
          <a href="#" className="hover:border border-white rounded px-2 py-1">Mobiles</a>
          <a href="#" className="hover:border border-white rounded px-2 py-1">Customer Service</a>
          <a href="#" className="hover:border border-white rounded px-2 py-1 flex items-center gap-1">
            Prime
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="/appliances" className="hover:border border-white rounded px-2 py-1">Electronics</a>
          <a href="#" className="hover:border border-white rounded px-2 py-1">Fashion</a>
          <a href="#" className="hover:border border-white rounded px-2 py-1">New Releases</a>
          <a href="#" className="hover:border border-white rounded px-2 py-1">Home & Kitchen</a>
          <a href="#" className="hover:border border-white rounded px-2 py-1">Amazon Pay</a>
        </div>
      </div>
    </header>
  );
}