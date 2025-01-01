import Link from 'next/link';
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ModeToggle } from './Theme-btn';



const Navbar = () => {

  return (
    <nav className="md:py-3 md:px-16 py-3 px-3 bg-background/50 sticky top-0 backdrop-blur border-b">
      <div className='flex justify-between items-center'>
        <Link href={"/"}>
          <div className="text-lg font-bold"><i>AhmedBlog</i></div>
        </Link>
        <div className="hidden space-x-4 md:space-x-8 md:flex items-center">
          <Link href="/" className="hover:scale-105 text-sm hover:font-semibold transition duration-300">Home</Link>
          <Link href="/about" className="hover:scale-105 text-sm hover:font-semibold transition duration-300">About</Link>
          <Link href="/blog" className="hover:scale-105 text-sm hover:font-semibold transition duration-300">Blog</Link>
          <Link href="/contact" className="hover:scale-105 text-sm hover:font-semibold transition duration-300">Contact</Link>
          <div className='flex items-center'>
            <Button className="mx-1" variant="outline">SignIn</Button>
            <Button className="mx-1" variant="outline">SignUp</Button>
            <ModeToggle />
          </div>
        </div>
        <div className="md:hidden">
          <span className='mx-2'>
            <ModeToggle />
          </span>
          <Sheet>
            <SheetTrigger>
              {/* Hamburger Icon */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg></SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="font-bold my-4">AhmedBlog</SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col gap-3">
                    <Link href="/" className="hover:underline text-sm">Home</Link>
                    <Link href="/about" className="hover:underline text-sm">About</Link>
                    <Link href="/blog" className="hover:underline text-sm">Blog</Link>
                    <Link href="/contact" className="hover:underline text-sm">Contact</Link>
                    <div className='flex flex-col gap-2'>
                      <Button className="mx-1" variant="outline">SignIn</Button>
                      <Button className="mx-1" variant="outline">SignUp</Button>
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
