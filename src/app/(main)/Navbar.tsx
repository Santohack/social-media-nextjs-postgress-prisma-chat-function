import SearchField from "@/components/SearchField";
import UserButton from "@/components/UserButton";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-card shadow-sm">
    <div className="w-full   lg:hidden block">
    <div className=" flex  w-full items-center justify-between  max-w-7xl flex-wrap px-3  py-3">
        <Link href="/" className="text-2xl font-bold text-primary">
        <span className="text-primary">S</span>hare
        <span className="text-primary">🤫</span>
        </Link>
        <div className="w-44">
        <SearchField />
        </div>
        <UserButton  />
      </div>
    </div>
     <div className="w-full  lg:block hidden">
     <div className="mx-auto  max-w-7xl flex-wrap items-center flex justify-center gap-5 px-5 py-3">
        <Link href="/" className="text-2xl font-bold text-primary">
        <span className="text-primary">S</span>hareb
        <span className="text-primary">🤫</span>
        </Link>
        <SearchField />
        <UserButton className="sm:ms-auto" />
      </div>
     </div>
    </header>
  );
}
