"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {

  const pathname = usePathname();

  return (
    <header
      className="
        absolute
        top-0
        left-0
        w-full
        z-50

        border-b
        border-white/10

        bg-black/20
        backdrop-blur-sm
      "
    >
      <div
        className="
          max-w-[95%] lg:max-w-7xl
          mx-auto

          px-6
          lg:w-full sm:w-auto px-10

          min-h-[92px]
py-4

          flex
          items-center
          justify-between
        "
      >

        {/* LOGO */}
        <Link
          href="/"
          className="
            text-white
            text-2xl
            font-bold
          "
        >
          LUXE
        </Link>

        {/* NAVIGATION */}
        <nav className="flex flex-wrap justify-center items-center gap-4 lg:gap-12">

        {/* HOME */}
<Link
  href="/"
  className={`
    text-sm
    uppercase
    tracking-[0.12em]

    px-5
    py-3

    rounded-[4px]

    duration-300

    ${
      pathname === "/"
        ? "bg-[#c8a76d] text-white"
        : "text-white hover:text-[#c8a76d]"
    }
  `}
>
  Home
</Link>

{/* SERVICES */}
<Link
  href="/services"
  className={`
    text-sm
    uppercase
    tracking-[0.12em]

    px-5
    py-3

    rounded-[4px]

    duration-300

    ${
      pathname === "/services"
        ? "bg-[#c8a76d] text-white"
        : "text-white hover:text-[#c8a76d]"
    }
  `}
>
  Services
</Link>

{/* MENU */}
<Link
  href="/menu"
  className={`
    text-sm
    uppercase
    tracking-[0.12em]

    px-5
    py-3

    rounded-[4px]

    duration-300

    ${
      pathname === "/menu"
        ? "bg-[#c8a76d] text-white"
        : "text-white hover:text-[#c8a76d]"
    }
  `}
>
  Menu
</Link>
         {/* GALLERY DROPDOWN */}
<div className="relative group">

  <button
  className={`
    text-sm
    uppercase
    tracking-[0.12em]

    px-5
    py-3

    rounded-[4px]

    duration-300

    ${
      pathname.includes("/gallery")
        ? "bg-[#c8a76d] text-white"
        : "text-white hover:text-[#c8a76d]"
    }
  `}
>
  Gallery
</button>

  {/* DROPDOWN */}
  <div
    className="
      absolute
      top-[45px]
      left-1/2
      -translate-x-1/2

      opacity-0
      invisible

      group-hover:opacity-100
      group-hover:visible

      duration-300

      bg-black/90
      backdrop-blur-xl

      border
      border-white/10

      rounded-[24px]

      p-3

      w-[220px]

      shadow-[0_20px_60px_rgba(0,0,0,0.45)]
    "
  >

    {/* MEN */}
    <Link
      href="/gallery/men"
      className="
        block

        px-5
        py-4

        rounded-[16px]

        text-white
        uppercase
        tracking-[0.12em]
        text-sm

        hover:bg-[#c8a76d]
        hover:text-black

        duration-300
      "
    >
      Men
    </Link>

    {/* WOMEN */}
    <Link
      href="/gallery/women"
      className="
        block

        mt-2

        px-5
        py-4

        rounded-[16px]

        text-white
        uppercase
        tracking-[0.12em]
        text-sm

        hover:bg-[#c8a76d]
        hover:text-black

        duration-300
      "
    >
      Women
    </Link>

  </div>

</div>

          {/* CONTACT */}
         <Link
  href="/contact"
  className={`
    text-sm
    uppercase
    tracking-[0.12em]

    px-5
    py-3

    rounded-[4px]

    duration-300

    ${
      pathname === "/contact"
        ? "bg-[#c8a76d] text-white"
        : "text-white hover:text-[#c8a76d]"
    }
  `}
>
  Contact
</Link>
        </nav>

        {/* BOOK NOW */}
        <Link href="/book">

  <button
    className="
      bg-[#c8a76d]
      text-white

      w-full sm:w-auto px-10
      py-4

      rounded-full

      uppercase
      tracking-[0.18em]

      text-sm
      font-semibold

      hover:bg-white
      hover:text-black

      hover:scale-105

      duration-300
    "
  >
    BOOK NOW
  </button>

</Link>

      </div>
    </header>
  );
}