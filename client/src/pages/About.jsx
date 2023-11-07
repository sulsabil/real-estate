import { MdHomeRepairService } from "react-icons/md";
import { FaGooglePlay } from "react-icons/fa";
import { IoLogoAppleAppstore } from "react-icons/io5";
export default function About() {
  return (
    <div className="py-20 px-4 max-w-6xl mx-auto ">
      
      <h1 className="text-6xl font-bold mb-7">
          Know <span className="text-slate-800">About us</span>{" "}
        </h1>
      <p className="mb-4 text-slate-700">
      Searching for the perfect place to live on? Well, look no further, as bdHousing is here with everything you have been looking for with the largest real estate marketing portal in Bangladesh. Whether your concern is an apartment for sale in Bangladesh or property for sale in Bangladesh, we have the most desired solution for you. With over 1.5 lac+ listings, 2 lacs+ users, 150 developers over 4 thousand+ new Projects, our web portal guarantee that everything you wish for the perfect living is just a few clicks away!
      </p>
      <p className="mb-4 text-slate-700">
        Our mission is to help our clients achieve their real estate goals by
        providing expert advice, personalized service, and a deep understanding
        of the local market. Whether you are looking to buy, sell, or rent a
        property, we are here to help you every step of the way.
      </p>
      <p className="mb-4 text-slate-700">
        Our team of agents has a wealth of experience and knowledge in the real
        estate industry, and we are committed to providing the highest level of
        service to our clients. We believe that buying or selling a property
        should be an exciting and rewarding experience, and we are dedicated to
        making that a reality for each and every one of our clients.
      </p>
      <div className="w-11/12 m-auto flex flex-col md:flex-row justify-between items-center md:space-x-10 space-y-10 md:space-y-0 py-10">
      <div className="flex md:space-x-10 space-x-4">
        <div className="mt-10 space-y-4 ">
          <div className="w-48 flex flex-col items-center bg-white text-center  drop-shadow-2xl p-5 rounded-md">
            <MdHomeRepairService size={"1.8rem"} />
            <h1 className="text-xl font-bold">Good Services</h1>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              harum eius quaerat?
            </p>
          </div>
          <div className="w-48 flex flex-col items-center bg-white text-center  drop-shadow-2xl p-5 rounded-md">
            <MdHomeRepairService size={"1.8rem"} />
            <h1 className="text-xl font-bold">Buy Dream Your House</h1>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              harum eius quaerat?
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="w-48 flex flex-col items-center bg-white text-center  drop-shadow-2xl p-5 rounded-md">
            <MdHomeRepairService size={"1.8rem"} />
            <h1 className="text-xl font-bold">Sell Your House Easily</h1>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              harum eius quaerat?
            </p>
          </div>
          <div className="w-48 flex flex-col items-center bg-white text-center  drop-shadow-2xl p-5 rounded-md">
            <MdHomeRepairService size={"1.8rem"} />
            <h1 className="text-xl font-bold">Good Services</h1>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              harum eius quaerat?
            </p>
          </div>
        </div>
      </div>
      <div className="w-11/12 md:w-1/2 space-y-5">
      <h1 className="text-6xl font-bold">
      The Largest <span className="text-slate-800"> Real Estate Marketing Portal in Bangladesh </span>
      </h1>
        <p className="text-sm text-gray-400">
        Searching for the perfect place to live on? Well, look no further, as bdHousing is here with everything you have been looking for with the largest real estate marketing portal in Bangladesh. Whether your concern is an apartment for sale in Bangladesh or property for sale in Bangladesh, we have the most desired solution for you. With over 1.5 lac+ listings, 2 lacs+ users, 150 developers over 4 thousand+ new Projects, our web portal guarantee that everything you wish for the perfect living is just a few clicks away!
        </p>
       
      </div>
      </div>
      <div className="mt-20">
      <div className="download w-full  py-16 rounded-xl">
        <div className="flex flex-col justify-center items-center space-y-5">
          <h1 className="textxl md:text-3xl font-bold">
            Download The RealEstate App
          </h1>
          <div className="flex space-x-5">
            <div className="flex items-center space-x-2 px-5 py-2 bg-white rounded drop-shadow-xl">
              <FaGooglePlay size={"1.5rem"} />
              <div>
                <p className="text-xs">Get ON</p>
                <h1 className="text-sm">Google Play</h1>
              </div>
            </div>
            <div className="flex items-center space-x-2 px-5 py-2 bg-white rounded drop-shadow-xl">
              <IoLogoAppleAppstore size={"1.5rem"} />
              <div>
                <p className="text-xs">Get ON</p>
                <h1 className="text-sm">App Store</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
