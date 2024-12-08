

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 ">
      <div>
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Vision */}
          <div className="pl-8 ml-8 mr-10">
            <h1 className="text-2xl font-bold text-blue-500">MORENT</h1>
            <p className="text-sm text-gray-600 mt-2">
              Our vision is to provide convenience and help increase your sales business.
            </p>
          </div>

          {/* About Section */}
          <div className="ml-56">
            <h2 className="text-lg font-semibold text-gray-800">About</h2>
            <ul className="mt-2">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                  How it works
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                  Featured
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                  Partnership
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                  Business Relation
                </a>
              </li>
            </ul>
          </div>

          {/* Community Section */}
          <div className="ml-14">
            <h2 className="text-lg font-semibold text-gray-800">Community</h2>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                  Podcast
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                  Invite a friend
                </a>
              </li>
            </ul>
          </div>

          {/* Socials Section */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Socials</h2>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center border-t border-gray-200 pt-4">
          <p className="text-sm text-gray-600">
            © 2022 MORENT. All rights reserved
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
              Privacy & Policy
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
              Terms & Condition
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;