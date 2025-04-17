
const Footer = () => {

    return (
        <footer className="bg-gray-800 text-white">
            <div className="md:flex md:justify-center md:justify-between container mx-auto md:py-5">
                <div>
                    <p className="text-lg font-semibold">My Website</p>
                </div>
                <div>
                    <p className="text-gray-400">&copy; 2025 My Website. All rights reserved.</p>
                </div>
                <div className="flex justify-center space-x-4 ">
                    <button className="hover:text-blue-400">
                        Facebook
                    </button>
                    <button className="hover:text-blue-400">
                        Twitter
                    </button>
                    <button className="hover:text-blue-400">
                        Instagram
                    </button>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
