import { MdOutlineLocalOffer } from "react-icons/md"
import { NavLink } from "react-router-dom"
import { FaStar } from "react-icons/fa6";
const Hero = () => {
  return (
    <section className="relative bg-hero bg-center bg-no-repeat h-screen w-full bg-cover">
      <div className="max_padd_container relative top-16 xs:top-20 md:top-32">
        <h1 className="h1 capitalize max-w-[37rem]">Digital Shopping Hub Junction</h1>
        <p className="text-gray-50 regular-16 mt-6 max-w-[33rem]">
          Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit.”
        </p>
        <div className="flexStart !items-center gap-x-4 my-10">
          <div className="!regular-24 flexCenter gap-x-3">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="bold-16 sm:bold-20">
            176k <span className="regular-16 sm:regular-20">Excellent Review</span>
          </div>
        </div>
        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          <NavLink to={''} className="btn_dark_rounded flexCenter">
            Shop Now
          </NavLink>
          <NavLink to={''} className="btn_dark_rounded flexCenter gap-x-2">
            <MdOutlineLocalOffer className="text-2xl" />
            Offers
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;



