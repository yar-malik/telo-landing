"use client";

import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="bg-white pt-10 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="ConnectAI Solutions Logo"
                width={100}
                height={80}
                className="h-[70px] w-auto"
                priority
              />
            </Link>
            {/* <div className="mt-8 text-center">
              <div className="flex justify-center space-x-4 mb-6">
                <a
                  href="https://www.facebook.com/profile.php?id=61571865652363"
                  className="bg-[#4809E9] rounded-full p-2 flex items-center justify-center w-10 h-10 hover:opacity-90 transition-opacity"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    className="w-5 h-5 fill-white"
                  >
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/connectaisolutions/"
                  className="bg-[#4809E9] rounded-full p-2 flex items-center justify-center w-10 h-10 hover:opacity-90 transition-opacity"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="w-5 h-5 fill-white"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@ConnectAISolutions"
                  className="bg-[#4809E9] rounded-full p-2 flex items-center justify-center w-10 h-10 hover:opacity-90 transition-opacity"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    className="w-5 h-5 fill-white"
                  >
                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                  </svg>
                </a>
                <a
                  href="https://x.com/ConnectAISol1"
                  className="bg-[#4809E9] rounded-full p-2 flex items-center justify-center w-10 h-10 hover:opacity-90 transition-opacity"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-white"
                  >
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/106125534/admin/page-posts/published/"
                  className="bg-[#4809E9] rounded-full p-2 flex items-center justify-center w-10 h-10 hover:opacity-90 transition-opacity"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="w-5 h-5 fill-white"
                  >
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                  </svg>
                </a>
              </div>
            </div> */}
          </div>

          <div className="grid grid-cols-2 gap-8">
            {/* <div>
              <h3 className="font-semibold mb-4 text-black">AI Employees</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/sales-executive"
                    className="text-gray-800 hover:text-black transition-colors"
                  >
                    AI Sales Executive
                  </Link>
                </li>
                <li>
                  <Link
                    href="/real-estate-agent"
                    className="text-gray-800 hover:text-black transition-colors"
                  >
                    AI Real Estate Agent
                  </Link>
                </li>
                <li>
                  <Link
                    href="/receptionist"
                    className="text-gray-800 hover:text-black transition-colors"
                  >
                    AI Receptionist
                  </Link>
                </li>
              </ul>
            </div> */}

            {/* <div>
              <h3 className="font-semibold mb-4 text-black">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-800 hover:text-black transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-gray-800 hover:text-black transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-800 hover:text-black transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-black">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/pricing"
                    className="text-gray-800 hover:text-black transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-800 hover:text-black transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/case-studies"
                    className="text-gray-800 hover:text-black transition-colors"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/help"
                    className="text-gray-800 hover:text-black transition-colors"
                  >
                    Help Center
                  </Link>
                </li>
              </ul>
            </div> */}
          </div>
        </div>

        <div className="pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 w-full">
            <p className="text-sm text-gray-800 text-center">
              © {new Date().getFullYear()} Telo AI Ltd. All rights reserved. UK Ltd Company Number: 14474051
            </p>
          </div>
          {/* <div className="flex gap-6">
            <Link
              href="/terms-and-conditions"
              className="text-sm text-gray-800 hover:text-black transition-colors"
            >
              Terms and Conditions
            </Link>
            <Link
              href="/privacy-policy"
              className="text-sm text-gray-800 hover:text-black transition-colors"
            >
              Privacy Policy
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
