import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import ListingItem from "../components/ListingItem";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { MdHomeRepairService } from "react-icons/md";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const [ratings, setRatings] = useState([2, 3, 4, 5, 6]);

  const totalRatings = ratings.reduce((acc, rating) => acc + rating, 0);

  const handleStarClick = (event, index) => {
    event.preventDefault();
    const newRatings = [...ratings];
    newRatings[index] += 1;
    setRatings(newRatings);
  };

  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);
  

  useEffect(() => {
    const fetchData = async (url, setData) => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`Network response was not ok: ${res.status}`);
        }
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchAllData = async () => {
      await fetchData("/api/listing/get?offer=true&limit=3", setOfferListings);
      await fetchData("/api/listing/get?type=rent&limit=3", setRentListings);
      await fetchData("/api/listing/get?type=sale&limit=3", setSaleListings);
    };

    fetchAllData();
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-6 p-10 px-3 max-w-6xl mx-auto">
        <h1 className="text-slate-700 font-bold text-3xl lg:text-6xl">
          Find Your Next <span className="text-slate-500">Perfect</span>
          <br />
          Place With Ease
        </h1>
        <div className="text-gray-400 text-xs sm:text-sm">
          আপনাদের জন্য নিয়ে এলো এই ইন্ডাস্ট্রিতে ঘটে যাওয়ানিত্য নতুন ঘটনার
          সারমর্ম। ডেইলি আপডেট পেতে সাথেই থাকুক।
          <br />
          আর সেইজন্যই আমরা নতুন ফ্ল্যাট কিনতে যাওয়ার আগে যে ব্যাপারগুলোর দিকে
          আপনার অবশ্যই লক্ষ্য রাখতে হবে সেই <br />
          দিকগুলো আপনার সামনে তুলে ধরতে আমাদের এই আয়োজন-
        </div>
        <Link
          to={"/about"}
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Let's Know More...
        </Link>
      </div>
      <div className="relative flex flex-col max-w-6xl mx-auto gap-8 my-5">
        <div className="relative h-96 overflow-hidden">
          <img
            className="absolute inset-0 w-full h-full object-cover bg-gray-300 z-0 transition-all duration-300  blur-sm hover:blur-none"
            src="https://github.com/8kra/Real_Estate_Website/blob/master/src/assets/image4.jpg?raw=true"
            alt="image description"
          />
          <form
            onSubmit={handleSubmit}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-100 p-3 rounded-lg flex items-center z-1"
          >
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent focus:outline-none w-24 sm:w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button>
              <FaSearch className="text-slate-600" />
            </button>
          </form>
        </div>
      </div>
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
        {offerListings && offerListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent offers
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?offer=true"}
              >
                Show more offers
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent places for rent
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?type=rent"}
              >
                Show more places for rent
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent places for sale
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?type=sale"}
              >
                Show more places for sale
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="max-w-6xl mx-auto p-8 md:flex md:flex-row gap-4 my-10 bg-gray-900">
        <div className=" w-full flex-1 items-center justify-center">
          <p className=" text-2xl text-gray-900 dark:text-white">
            Ratings From Our User In Bangladesh
          </p>
          <p className=" text-sm font-medium text-gray-900 dark:text-white">
            {totalRatings > 0
              ? (
                  ratings.reduce((acc, rating, index) => {
                    return acc + rating * (index + 1);
                  }, 0) / totalRatings
                ).toFixed(2)
              : "0.00"}{" "}
            out of 5
          </p>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {totalRatings} global ratings
          </p>
         {ratings.map((rating, index) => (
  <div className="flex items-center mt-4" key={index}>
    <a
      href="#"
      className="items-center text-center flex flex-row text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
      onClick={(event) => handleStarClick(event, index)}
    >
      {index + 1}
      <svg
        className="w-4 h-4 text-yellow-300 ml-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
    </a>
    <div className="w-full h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
      <div
        className="h-5 bg-gray-300 rounded"
        style={{ width: `${(rating / totalRatings) * 100}%` }}
      ></div>
    </div>
    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
      {totalRatings > 0
        ? `${((rating / totalRatings) * 100).toFixed(2)}%`
        : "0.00%"}
    </span>
  </div>
))}
           
        </div>
        <div className="flex md:space-x-10 space-x-4 flex-1 justify-center">
          <div className="mt-10 space-y-4">
            <div className="w-48 flex flex-col items-center bg-white text-center drop-shadow-2xl p-5 rounded-md">
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
      </div>
    </div>
  );
}
