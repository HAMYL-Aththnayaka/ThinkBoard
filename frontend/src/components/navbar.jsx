import { Link } from "react-router";
import { PlusIcon } from "lucide-react";
import Logo from "../assets/Logo.PNG";

const Navbar = () => {
  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold text-primary font-mono tracking-tight">
            ThinkBoard
          </h1>
        </div>
        <img src={Logo} alt="Logo" className="h-14  w-15 object-contain" />


        {/* New Note button */}
        <div className="flex items-center gap-4">
          <Link to="/create" className="btn btn-primary">
            <PlusIcon className="size-5" />
            <span>New Note</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
