import React from 'react'
function Footer() {
    return (
        <footer className="bg-gray-900">
            <ul className="flex items-center justify-between mx-auto p-4 md:p-8 text-sm">
                <li>
                    <p className="text-center text-gray-500 text-xs">
                        &copy;2020 All rights reserved.
                    </p>
                </li>

                <li>
                    <ul className="list-reset items-center text-sm pt-3">
                        <div className="flex relative inline-block float-right">
                            <div className="ml-10 relative flex items-baseline">
                                <li>
                                    <a class="inline-block text-gray-600 no-underline hover:text-gray-100 hover:text-underline p-5 py-1"
                                       href="#">Github</a>
                                </li>
                                <li>
                                    <a class="inline-block text-gray-600 no-underline hover:text-gray-100 hover:text-underline p-5 py-1"
                                       href="#">Linkedin</a>
                                </li>
                                <li>
                                    <a class="inline-block text-gray-600 no-underline hover:text-gray-100 hover:text-underline p-5 py-1"
                                       href="#">Twitter</a>
                                </li>
                            </div>
                        </div>
                    </ul>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
