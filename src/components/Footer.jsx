export default function AmazonFooter() {
  return (
    <footer className="bg-gray-800 text-white">
      {/* Back to Top */}
      <div className="bg-gray-700 hover:bg-gray-600 text-center py-4 cursor-pointer">
        <span className="text-sm">Back to Top</span>
      </div>

      {/* Main Footer Content */}
      <div className="bg-gray-800 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Get to Know Us */}
            <div>
              <h3 className="font-bold text-base mb-3">Get to know Us</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
                <li><a href="#" className="hover:underline">Press Releases</a></li>
                <li><a href="#" className="hover:underline">Amazon Science</a></li>
              </ul>
            </div>

            {/* Connect with Us */}
            <div>
              <h3 className="font-bold text-base mb-3">Connect with Us</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:underline">Facebook</a></li>
                <li><a href="#" className="hover:underline">Twitter</a></li>
                <li><a href="#" className="hover:underline">Instagram</a></li>
              </ul>
            </div>

            {/* Make Money with Us */}
            <div>
              <h3 className="font-bold text-base mb-3">Make Money with Us</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:underline">Sell on Amazon</a></li>
                <li><a href="#" className="hover:underline">Sell under Amazon Accelerator</a></li>
                <li><a href="#" className="hover:underline">Protect and Build Your Brand</a></li>
                <li><a href="#" className="hover:underline">Amazon Global Selling</a></li>
                <li><a href="#" className="hover:underline">Supply to Amazon</a></li>
                <li><a href="#" className="hover:underline">Become an Affiliate</a></li>
                <li><a href="#" className="hover:underline">Fulfilment by Amazon</a></li>
                <li><a href="#" className="hover:underline">Advertise Your Products</a></li>
                <li><a href="#" className="hover:underline">Amazon Pay on Merchants</a></li>
              </ul>
            </div>

            {/* Let Us Help You */}
            <div>
              <h3 className="font-bold text-base mb-3">Let Us Help You</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:underline">Your Account</a></li>
                <li><a href="#" className="hover:underline">Returns Centre</a></li>
                <li><a href="#" className="hover:underline">Recalls and Products Safety Alerts</a></li>
                <li><a href="#" className="hover:underline">100% Purchase Protection</a></li>
                <li><a href="#" className="hover:underline">Amazon App Download</a></li>
                <li><a href="#" className="hover:underline">Help</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Logo and Language/Country Selector */}
      <div className="border-t border-gray-700 py-6">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-center gap-6">
          {/* Amazon Logo */}
          <svg className="w-24 h-8" viewBox="0 0 103 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M66.7 23.8c-6.2 4.6-15.2 7-22.9 7-10.8 0-20.6-4-28-10.7-.6-.5-.1-1.2.6-.8 7.9 4.6 17.6 7.4 27.7 7.4 6.8 0 14.2-1.4 21.1-4.3 1-.4 1.9.7.9 1.4z" fill="#FF9900"/>
            <path d="M69.1 21.1c-.8-1-5.2-.5-7.2-.2-.6.1-.7-.5-.2-.9 3.5-2.5 9.3-1.8 10-.9.7.9-.2 6.7-3.5 9.5-.5.4-1 .2-.8-.4.8-1.9 2.5-6.1 1.7-7.1z" fill="#FF9900"/>
            <path d="M61.9 5.3V3.1c0-.3.2-.5.5-.5h9.3c.3 0 .5.2.5.5v1.9c0 .3-.2.6-.5.9l-4.8 6.9c1.8 0 3.7.2 5.3 1.1.4.2.5.5.5.8v2.4c0 .3-.3.6-.6.4-2.5-1.3-5.8-1.4-8.6 0-.3.1-.6-.1-.6-.4v-2.3c0-.3 0-.9.3-1.4l5.6-8H62.4c-.3 0-.5-.2-.5-.5zM22.4 17.2h-3c-.3 0-.5-.2-.5-.5V3.2c0-.3.2-.5.5-.5h2.8c.3 0 .5.2.5.5v1.7h.1c.7-1.7 2-2.5 3.8-2.5 1.8 0 2.9.8 3.7 2.5.7-1.7 2.4-2.5 4-2.5 1.2 0 2.5.5 3.3 1.6.9 1.2.7 2.9.7 4.4v8.8c0 .3-.2.5-.5.5h-3c-.3 0-.5-.2-.5-.5V9.4c0-.6.1-2.1-.1-2.7-.3-1-.9-1.3-1.8-1.3-.7 0-1.5.5-1.8 1.3-.3.8-.3 2.1-.3 2.7v7.8c0 .3-.2.5-.5.5h-3c-.3 0-.5-.2-.5-.5V9.4c0-1.6.3-4-.9-5.3-.4-.5-1.1-.8-1.7-.8-.7 0-1.4.5-1.7 1.2-.4.8-.4 1.6-.4 2.4v10.3c-.2.3-.4.5-.7.5zM85.9 2.4c4.4 0 6.8 3.8 6.8 8.6 0 4.6-2.6 8.4-6.8 8.4-4.3 0-6.7-3.8-6.7-8.5 0-4.7 2.4-8.5 6.7-8.5zm0 3.1c-2.2 0-2.3 3-2.3 4.8 0 1.9 0 5.8 2.3 5.8 2.2 0 2.4-3.1 2.4-5 0-1.2-.1-2.8-.4-4-.3-1-.8-1.6-1.9-1.6zm12.2 11.7h-3c-.3 0-.5-.2-.5-.5V3.2c0-.3.2-.5.5-.5h2.8c.2 0 .4.2.5.4v2h.1c.8-1.8 2-2.7 3.9-2.7 1.3 0 2.5.5 3.3 1.7.7 1.1.7 2.9.7 4.2v8.9c0 .3-.2.5-.5.5h-3c-.3 0-.5-.2-.5-.5V9.6c0-1.6.2-4-1.8-4-1.5 0-1.9 1.1-2.2 2.2-.1.3-.1.6-.1.9v8.5c-.1.2-.3.4-.6.4z" fill="#fff"/>
            <path d="M43.5 17.2c-.2 0-.4-.2-.5-.4l-5.5-14.5c-.1-.2 0-.5.3-.5h3c.2 0 .4.1.4.3l3.4 9.8h.1l3.4-9.8c.1-.2.2-.3.4-.3h3c.2 0 .4.2.3.5l-5.5 14.5c-.1.2-.3.4-.5.4h-2.3z" fill="#fff"/>
          </svg>

          {/* Language Selector */}
          <button className="flex items-center gap-2 border border-gray-600 hover:border-gray-500 px-3 py-1 rounded">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">English</span>
          </button>

          {/* Country Selector */}
          <button className="flex items-center gap-2 border border-gray-600 hover:border-gray-500 px-3 py-1 rounded">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30'%3E%3Cpath fill='%23ff9933' d='M0 0h60v10H0z'/%3E%3Cpath fill='%23fff' d='M0 10h60v10H0z'/%3E%3Cpath fill='%23138808' d='M0 20h60v10H0z'/%3E%3Ccircle cx='30' cy='15' r='4' fill='%23000080'/%3E%3C/svg%3E" alt="India" className="w-5 h-3" />
            <span className="text-sm">India</span>
          </button>
        </div>
      </div>

      {/* Bottom Footer Links */}
      <div className="bg-gray-900 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-xs text-gray-400">
            
            {/* Column 1 */}
            <div>
              <h4 className="font-bold text-white mb-2">AbeBooks</h4>
              <p className="mb-1">Books, art</p>
              <p>& collectibles</p>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="font-bold text-white mb-2">Amazon Web Services</h4>
              <p className="mb-1">Scalable Cloud</p>
              <p>Computing Services</p>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="font-bold text-white mb-2">Audible</h4>
              <p className="mb-1">Download</p>
              <p>Audio Books</p>
            </div>

            {/* Column 4 */}
            <div>
              <h4 className="font-bold text-white mb-2">IMDb</h4>
              <p className="mb-1">Movies, TV</p>
              <p>& Celebrities</p>
            </div>

            {/* Column 5 */}
            <div>
              <h4 className="font-bold text-white mb-2">Shopbop</h4>
              <p className="mb-1">Designer</p>
              <p>Fashion Brands</p>
            </div>

            {/* Column 6 */}
            <div>
              <h4 className="font-bold text-white mb-2">Amazon Business</h4>
              <p className="mb-1">Everything For</p>
              <p>Your Business</p>
            </div>

            {/* Column 7 */}
            <div>
              <h4 className="font-bold text-white mb-2">Prime Now</h4>
              <p className="mb-1">2-Hour Delivery</p>
              <p>on Everyday Items</p>
            </div>

            {/* Column 8 */}
            <div>
              <h4 className="font-bold text-white mb-2">Amazon Prime Music</h4>
              <p className="mb-1">100 million songs, ad-free</p>
              <p>Over 15 million podcast episodes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright and Legal */}
      <div className="bg-gray-900 border-t border-gray-800 py-4">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-6 text-xs text-gray-400 mb-2">
            <a href="#" className="hover:underline">Conditions of Use & Sale</a>
            <a href="#" className="hover:underline">Privacy Notice</a>
            <a href="#" className="hover:underline">Interest-Based Ads</a>
          </div>
          <p className="text-xs text-gray-400">1996-2024, Amazon.com, Inc. or its affiliates</p>
        </div>
      </div>
    </footer>
  );
}