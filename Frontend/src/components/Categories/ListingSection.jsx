import React, { useState, useEffect } from "react";
import Pagination from "react-js-pagination";
import ListingCard from "./ListingCard";
import { useSearchParams } from 'react-router-dom'
import { data } from "../../data";

const ListingsSection = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState("");
  const [filterTag, setFilterTag] = useState("");
  const [minProfit, setMinProfit] = useState("");
  const [maxProfit, setMaxProfit] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const resPerPage = 10;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * resPerPage;
  const indexOfFirstItem = indexOfLastItem - resPerPage;
  // const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  const listings = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef6f52397239a4c24a3f3d004d52215c15c79f86191b6da03f7f9c14a7e4f446?placeholderIfAbsent=true&apiKey=42bb954c825745999302100cb42c8fd0",
      title: "hightailtransport.com",
      country: "United States",
      description: "A truck dispatching service and a SaaS transportation management system (TMS) that helps trucking carriers and dispatchers streamline their businesses.",
      tags: ["SaaS", "Travel", "Services"],
      siteAge: "<1year",
      netProfit: "NA/p/m",
      price: "USD $5,950",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/67def6a54a134d4eef0d7209a56abb2048f22d721cb15ce126e2c3f5ca4e6b65?placeholderIfAbsent=true&apiKey=42bb954c825745999302100cb42c8fd0",
      title: "Kitchen Dropship Store Ready to Earn",
      country: "United States",
      description: "Password: 1,Kitchen Dropshipping Store For Active & Passive Income | Proven Profitable Niche | Fast Shipping | Ready To Earn For Entrepreneur| Shopify",
      tags: ["Ecommerce", "Home", "Dropshipping"],
      siteAge: "<1year",
      netProfit: "NA/p/m",
      price: "USD $200",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e5a59b28c5b3dcc5b80a7f7aa4a359dda9d5ee1e29bcc89615f816b8d4084bd5?placeholderIfAbsent=true&apiKey=42bb954c825745999302100cb42c8fd0",
      title: "Plug Paralegal",
      country: "United States",
      description: "The first nationwide b2c paralegal and legal document preparation company of its kind. This company provides swift legal services to customers all over the U.S.",
      tags: ["Service", "Business", "Services"],
      siteAge: "<1year",
      netProfit: "USD $5,500 p/m",
      price: "USD $73,180",
    },
  ];
//  (filterTag ? listing.tags.includes(filterTag) : true) &&
  const filteredListings = data.filter(listing =>
    (listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (minProfit ? parseFloat(listing.price.replace(/[^0-9.-]+/g,"")) >= parseFloat(minProfit) : true) &&
    (maxProfit ? parseFloat(listing.price.replace(/[^0-9.-]+/g,"")) <= parseFloat(maxProfit) : true)
  ).slice(indexOfFirstItem, indexOfLastItem);

  const sortedListings = [...filteredListings].sort((a, b) => {
    if (sortField === "country") {
      return a.country.localeCompare(b.country);
    } else if (sortField === "price") {
      return parseFloat(b.price.replace(/[^0-9.-]+/g,"")) - parseFloat(a.price.replace(/[^0-9.-]+/g,""));
    } // Add more sorting conditions here
    return 0;
  });

  return (
    <section className="flex z-10 flex-col px-12 pt-28 pb-56 mt-0 w-full bg-white max-md:px-5 max-md:py-24 max-md:max-w-full">
      <h2 className="self-start text-3xl font-extrabold text-neutral-700 max-md:max-w-full">
        Explore suggested listings for you
      </h2>
      <input 
  type="text" 
  placeholder="Search..." 
  value={searchTerm}
  onChange={e => setSearchTerm(e.target.value)}
  className="mt-4 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition duration-200"
/>
<select 
  onChange={e => setSortField(e.target.value)} 
  className="mt-4 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition duration-200"
>
  <option value="">Sort By</option>
  <option value="country">Country</option>
  <option value="price">Net Profit</option>
</select>
{/* <input 
  type="text" 
  placeholder="Filter by tag" 
  value={filterTag}
  onChange={e => setFilterTag(e.target.value)}
  className="mt-4 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition duration-200"
/> */}
<div className="gap-10 m-4">

<input 
  type="number" 
  placeholder="Min Profit" 
  value={minProfit}
  onChange={e => setMinProfit(e.target.value)}
  className="mt-4 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition duration-200"
/>
<input 
  type="number" 
  placeholder="Max Profit" 
  value={maxProfit}
  onChange={e => setMaxProfit(e.target.value)}
  className="mt-4 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition duration-200"
/>
  
</div>


      {sortedListings.map((listing, index) => (
        <ListingCard key={index} {...listing} />
      ))}

{sortedListings.map((listing, index) => (
        console.log(parseInt(listing.price.replace(/[^0-9.-]+/g,"")))
      ))}

      <button className="self-center mt-11 mb-0 text-xl font-extrabold text-purple-950 max-md:mt-10 max-md:mb-2.5">
        See more
      </button>
   
      <div className="flex mt-20 justify-center">
     <Pagination
          activePage={currentPage}
          itemsCountPerPage={resPerPage}
          totalItemsCount={data.length}
          onChange={handlePageChange}
          nextPageText={"Next"}
          prevPageText={"Prev"}
          firstPageText={"First"}
          lastPageText={"Last"}
          itemClass="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
          activeLinkClassName="z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 text-sm font-medium text-indigo-600 focus:z-20"
          activeClass="z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 text-sm font-medium text-indigo-600 focus:z-20"
        />
    </div>
      
    </section>
  );
};

export default ListingsSection;


