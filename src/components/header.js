import Link from "next/link";

function Header() {
    return (
        <header className="fixed w-full z-10 top-0 shadow bg-gray-100">
            <div className="w-full container mx-auto flex flex-wrap items-center mt-0 pt-3 pb-3 md:pb-0">
                <div className="w-1/2 pl-2 md:pl-0 p-5">
                    <a className="text-gray-800 text-base xl:text-xl no-underline hover:underline font-bold" href="/">
                        <i className="fas fa-moon text-blue-400 pr-3"/> TechFeed
                    </a>
                </div>
                <div className="w-1/2 pb-2">
                    <div className="flex relative inline-block float-right">
                        <div className="ml-10 relative flex items-baseline">
                            <Link href="/">
                                <a
                                    className="ml-8 px-3 py-2 font-medium text-center text-sm rounded-lg bg-gray-200 text-gray-900 hover:bg-gray-300 focus:outline-none focus:bg-gray-400"
                                >Home</a
                                >
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    );
}

export default Header;
