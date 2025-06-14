"use client";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PlayCircleIcon,
  PhoneIcon,
  HomeIcon,
} from "@heroicons/react/20/solid";

const callsToAction = [
  { name: "Calculators", href: "/Calculator", icon: PlayCircleIcon },
  { name: "Bulletins", href: "/Bulletins", icon: PhoneIcon },
  { name: "Utilities", href: "/Utilities", icon: PlayCircleIcon },
  { name: "Acts", href: "/Acts", icon: PhoneIcon },
  { name: "Rules", href: "/Rules", icon: PlayCircleIcon },
  { name: "Forms", href: "/Forms", icon: PhoneIcon },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-200 shadow-md">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-center p-4 lg:px-8"
      >
        {/* Mobile menu button - moved to left side */}
        <div className="absolute left-4 flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        {/* Desktop navigation - centered */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-8 justify-center">
          <Link 
            to="/" 
            className="flex items-center px-3 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-100 transition duration-150 ease-in-out"
            aria-label="Go to home page"
          >
            <HomeIcon className="h-5 w-5 mr-2 text-blue-600" aria-hidden="true" />
            Home
          </Link>

          <Link 
            to="/services" 
            className="flex items-center px-3 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-100 transition duration-150 ease-in-out"
          >
            Services
          </Link>

          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 px-3 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-100 transition duration-150 ease-in-out">
              Knowledge Bank
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-gray-500 ml-1"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0"
            >
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-6 bg-white p-6 sm:gap-8 sm:p-8">
                  {callsToAction.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="flex items-start rounded-lg p-3 hover:bg-gray-50 transition ease-in-out duration-150"
                    >
                      <item.icon className="h-6 w-6 flex-shrink-0 text-blue-600" aria-hidden="true" />
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">{item.name}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </PopoverPanel>
          </Popover>

          <a
            href="#about" 
            className="flex items-center px-3 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-100 transition duration-150 ease-in-out"
          >
            About Us
          </a>
          
          <Link 
            to="/EVisitingCard" 
            className="flex items-center px-3 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-100 transition duration-150 ease-in-out"
          >
            E-Visiting Card
          </Link>
          
          <a
            href="#news" 
            className="flex items-center px-3 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-100 transition duration-150 ease-in-out"
          >
            News and Updates
          </a>
          
          <Link 
            to="/query" 
            className="flex items-center px-3 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-100 transition duration-150 ease-in-out"
          >
            Query
          </Link>
        </PopoverGroup>
      </nav>

      {/* Mobile menu dialog */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10 bg-black/20" aria-hidden="true" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-end">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-100"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to="/"
                  className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Go to home page"
                >
                  <div className="flex items-center">
                    <HomeIcon className="h-5 w-5 mr-2 text-blue-600" aria-hidden="true" />
                    Home
                  </div>
                </Link>

                <Link
                  to="/services"
                  className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>

                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold text-gray-900 hover:bg-gray-50">
                        Knowledge Bank
                        <ChevronDownIcon
                          className={`h-5 w-5 flex-none ${open ? 'rotate-180' : ''}`}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {callsToAction.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-medium text-gray-900 hover:bg-gray-50"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <div className="flex items-center">
                              <item.icon className="h-5 w-5 mr-2 text-blue-600" aria-hidden="true" />
                              {item.name}
                            </div>
                          </Link>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>

                <a
                  href="#about"
                  className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50 smo"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </a>
                
                <Link
                  to="/EVisitingCard"
                  className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  E-Visiting Card
                </Link>
                
                <a
                  href="#news"
                  className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  News and Updates
                </a>
                
                <Link
                  to="/query"
                  className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Query
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}