import Link from "next/link";
import Image from "next/image";
import { IRONWEB_PROFILE_LOGO_PNG_URL } from "@/lib/constants";

const SubpageHeader = () => {
  return (
    <div className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <Link href="/" className="flex items-center">
        <div className="flex-col items-center">
          <Image
            src= {IRONWEB_PROFILE_LOGO_PNG_URL}
            alt="Logo"
            width={400} // Adjust the width as needed
            height={400} // Adjust the height as needed
            className="mr-2" // Add "logo-image" class, if need to toggle logo
          />
          <div className="flex justify-center text-sm md:text-sm font-extralight tracking-tighter leading-tight md:pr-8">
            - - - Back - - -
          </div>
        </div>
      </Link>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Research | Develop | Solution
      </h4>
    </div>
  );
};

export default SubpageHeader;

