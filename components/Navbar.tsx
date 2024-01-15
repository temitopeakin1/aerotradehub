'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";
import LoginModal from "./LoginModal";

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-2 bg-primary-blue">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/hero.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>

        <div className="flex space-x-12 ml-auto pr-16">
          <Link href="/home" className="text-white">
            Home
          </Link>
          <Link href="/services" className="text-white">
            Services
          </Link>
          <Link href="/contact" className="text-white">
            Contact
          </Link>
        </div>
        <CustomButton
            title="Log in"
            btnType="button"
            containerStyles="text-white rounded-full bg-secondary-orange"
            handleClick={openModal}
          />

        <LoginModal isOpen={isModalOpen} onClose={closeModal} />
      </nav>
    </header>
  );
};

export default NavBar;
