import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import NavButton from "./NavButton";
import NavLinks from "./NavLinks";

const Navber = () => {
  return (
    <header className="w-full border-b border-[#22262d] bg-base-100">
      <div className=" navbar mx-auto w-full max-w-7xl min-h-[64px] px-3 sm:px-4 md:px-6 lg:px-8 " >
        {/* LEFT SIDE */}
        <div className="navbar-start">

          {/* Mobile Menu */}
          <div className="dropdown md:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle" >
              <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>

            <ul tabIndex={-1} className=" menu menu-sm dropdown-content z-50 mt-3 w-52 rounded-xl border border-[#292D35] bg-base-100 p-2 shadow-xl " >
              <NavLinks />
            </ul>
          </div>

          {/* Logo */}
          <Link href="/workouts" className="flex items-center gap-2" >
            <Image src={logo} alt="FITLOG logo" width={30} height={30} className=" h-7 w-7 object-contain sm:h-8 sm:w-8 lg:h-9 lg:w-9 " />
            <span className=" text-base font-black tracking-wide text-white sm:text-lg lg:text-xl " >
              FITLOG
            </span>
          </Link>
        </div>

        {/* CENTER NAVIGATION */}
        <div className="navbar-center hidden md:flex">
          <ul className=" menu menu-horizontal items-center gap-1 px-1 md:gap-2 lg:gap-3 " >
            <NavLinks />
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="navbar-end">
          <NavButton />
        </div>

      </div>
    </header>
  );
};

export default Navber;