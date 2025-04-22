import { LogIn, Logs, ShoppingBag, User } from "lucide-react";

export default function Header() {
  return (
    <>
      <div className="w-full bg-black text-white px-28 py-2 text-center">
        Notification Bar
      </div>
      <div className="h-[90px] flex items-center justify-between px-28  bg-white text-black p-0">
        <div className="flex items-center gap-4">
          <div className="flex flex-col gap-0">
            <span className="text-2xl font-extrabold text-black">
              E-COMMERCE.
            </span>
          </div>
        </div>

        <div className="flex gap-6 items-center">
          <div className="flex items-center gap-2 text-black w-6 h-6">
            <User />
          </div>
          <div className="flex items-center gap-2 text-black">
            <ShoppingBag />
          </div>
        </div>
      </div>
    </>
  );
}
5;
