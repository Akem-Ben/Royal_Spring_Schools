import React from "react";
import instagram from "../../assets/landingpage/instagram.png";
import twitter from "../../assets/landingpage/twitter.png";
import youtube from "../../assets/landingpage/youtube.png";

export const Footer: React.FC = () => {
    // flex flex-col items-center gap-6 md:gap-24 bg-[#0A2145] py-12 px-10 md:py-12 md:px-10 footer
    return (
<section className="flex flex-col items-center gap-6 md:gap-24 bg-[#0A2145] py-12 px-10 md:py-12 md:px-10 footer">
<div className="flex flex-col items-center gap-10 md:gap-16 justify-center">
  <h1 className="text-white text-center font-bodoni text-xl md:text-4xl text-green-600 font-normal">Royal Spring College</h1>
  <div className="text-white font-inter text-sm md:text-base font-light flex items-center gap-2">
    <p className="for_more">For more enquiries:</p>
    <div className="flex items-center text-white font-inter text-sm md:text-base font-light">
      <a href="mailto:contact@royalspringcolleges.com"><p className="hover:text-green-700">helpsupport@easylead.com</p></a>
    </div>
  </div>
</div>
<div className="bg-[#F2F4F7] w-11/12 md:w-97% h-0.5"></div>
<div className="text-white mt-0 font-inter text-sm md:text-base font-light flex justify-between w-11/12 md:w-80%">
  <div className="font-inter text-sm md:text-base font-light">© 2023 Royal Spring College. All rights reserved</div>
  <div className="gap-2 md:gap-6 h-6 flex justify-between">
    <a href=""><img src={instagram} alt="Instagram" className="h-full" /></a>
    <a href=""><img src={twitter} alt="Twitter" className="h-full" /></a>
    <a href=""><img src={youtube} alt="YouTube" className="h-full" /></a>
  </div>
</div>
</section>
    )
}