"use client";

import { Fragment } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Our Facilities", href: "/facility" },
  { name: "Services", href: "/service" },
  { name: "About Us", href: "/about-us" },
  // { name: "Contact Us", href: "/contact-us",  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const currentPath = usePathname();

  return (
    <Disclosure
      as="nav"
      className={`fixed w-full top-0 ${
        currentPath === "/facility"
          ? "bg-[rgba(66,66,66,0.34)] "
          : "bg-[rgba(0,0,0,0.28)] shadow-lg shadow-cyan-50/40 "
      } z-10000`}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile Menu Button */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-black hover:text-white ">
                  <span className="relative h-6 w-6">
                    <Bars3Icon
                      className={`absolute h-6 w-6 transition-all duration-500 transform ${
                        open
                          ? "opacity-0 scale-90 rotate-45"
                          : "opacity-100 scale-100 rotate-0"
                      }`}
                    />
                    <XMarkIcon
                      className={`absolute h-6 w-6 transition-all duration-500 transform ${
                        open
                          ? "opacity-100 scale-100 rotate-0"
                          : "opacity-0 scale-90 rotate-45"
                      }`}
                    />
                  </span>
                </DisclosureButton>
              </div>

              {/* Desktop Navigation */}
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        aria-current={currentPath === item.href ? "page" : undefined}
                        className={classNames(
                          currentPath === item.href
                            ? "bg-black text-white"
                            : "text-white hover:bg-black hover:text-white",
                          "rounded-md px-3 py-2  font-medium text-base font-serif"
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Smooth Dropdown (Fall from Top) */}
          <Transition
            as={Fragment}
            enter="transition-transform duration-600 ease-out"
            enterFrom="-translate-y-10 opacity-0"
            enterTo="translate-y-0 opacity-100"
            leave="transition-transform duration-600 ease-in-out"
            leaveFrom="translate-y-0 opacity-100"
            leaveTo="-translate-y-10 opacity-0"
          >
            <DisclosurePanel className="sm:hidden absolute bg-[rgba(0,0,0,0.28)]  min-w-full">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as={Link}
                    href={item.href}
                    aria-current={currentPath === item.href ? "page" : undefined}
                    className={classNames(
                      currentPath === item.href
                        ? "bg-black text-white"
                        : "text-white hover:bg-black hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
            </DisclosurePanel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
