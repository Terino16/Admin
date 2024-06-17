// "use client"
// import React, { useState, useEffect } from "react";
// import { poppins700, poppins400, poppins500, poppins600 } from "../app/fonts";
// import { toast } from "react-toastify";
// import { useSession } from "next-auth/react";
// import Link from "next/link";
// import Image from "next/image";
// import { source_sans } from "../app/fonts";

// const BusinessTableTailwind = ({ rows }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(6);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filter, setFilter] = useState("All");
//   const { data: session } = useSession();
//   const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 600);
//   useEffect(() => {
//     const handleResize = () => setIsMobileView(window.innerWidth <= 600);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;

//   const filteredRows = rows.filter((row) => {
//     const matchesSearch = row.businessName?.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesFilter = filter === "All" || (filter === "Approved" && row.isProfileApproved) || (filter === "Pending" && !row.isProfileApproved);
//     return matchesSearch && matchesFilter;
//   });

//   const currentItems = filteredRows.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(filteredRows.length / itemsPerPage);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   const getPaginationButtons = () => {
//     let pages = [];
//     if (totalPages < 1) return pages;

//     pages.push(
//       <button key={1} onClick={() => paginate(1)} className={`${poppins400.className} bg-gray-200 text-gray-700 font-bold py-2 px-4 focus:outline-none ${currentPage === 1 && "bg-bgcornflower text-textcornflower"}`}>
//         1
//       </button>
//     );

//     if (currentPage > 3) {
//       pages.push(<span key="start-ellipsis" className="py-2 px-2">...</span>);
//     }

//     if (currentPage > 2) {
//       pages.push(
//         <button key={currentPage - 1} onClick={() => paginate(currentPage - 1)} className={`${poppins400.className} bg-gray-200 text-gray-700 font-bold py-2 px-4 focus:outline-none`}>
//           {currentPage - 1}
//         </button>
//       );
//     }

//     if (currentPage !== 1 && currentPage !== totalPages) {
//       pages.push(
//         <button key={currentPage} onClick={() => paginate(currentPage)} className={`${poppins400.className} bg-gray-200 text-gray-700 font-bold py-2 px-4 focus:outline-none ${currentPage === currentPage && "bg-bgcornflower text-textcornflower"}`}>
//           {currentPage}
//         </button>
//       );
//     }

//     if (currentPage < totalPages - 1) {
//       pages.push(
//         <button key={currentPage + 1} onClick={() => paginate(currentPage + 1)} className={`${poppins400.className} bg-gray-200 text-gray-700 font-bold py-2 px-4 focus:outline-none`}>
//           {currentPage + 1}
//         </button>
//       );
//     }

//     if (currentPage < totalPages - 2) {
//       pages.push(<span key="end-ellipsis" className="py-2 px-2">...</span>);
//     }

//     if (totalPages > 1) {
//       pages.push(
//         <button key={totalPages} onClick={() => paginate(totalPages)} className={`${poppins400.className} bg-gray-200 text-gray-700 font-bold py-2 px-4 focus:outline-none ${currentPage === totalPages && "bg-bgcornflower text-textcornflower"}`}>
//           {totalPages}
//         </button>
//       );
//     }

//     return pages;
//   };

//   return (
//     <div className="flex flex-col">
//       <div className="flex flex-col md:flex-row justify-between md:items-center border border-bordergray rounded-t-md">
//         <div className="item-left">
//           <button
//             className={`${poppins400.className} ml-4 my-5 py-1 px-2 rounded-md ${filter === 'All' ? 'bg-bgcornflower text-textcornflower' : ''}`}
//             onClick={() => setFilter("All")}
//           >
//             All
//           </button>
//           <button
//             className={`${poppins400.className} my-5 py-1 px-2 rounded-md ${filter === 'Approved' ? 'bg-bgcornflower text-textcornflower' : ''}`}
//             onClick={() => setFilter("Approved")}
//           >
//             Approved
//           </button>
//           <button
//             className={`${poppins400.className} my-5 py-1 px-2 rounded-md ${filter === 'Pending' ? 'bg-bgcornflower text-textcornflower' : ''}`}
//             onClick={() => setFilter("Pending")}
//           >
//             Pending
//           </button>
//         </div>
//         <div className="item-right ml-4 flex items-center bg-lightgray rounded-md md:mr-4 md:mt-4 mb-4 md:ml-12 w-11/12 md:w-[424px] focus:border focus:border-tealblue">
//           <Image
//             src="/search-normal.svg"
//             alt="Search Icon"
//             width={20}
//             height={20}
//             className="ml-2"
//           />
//           <input
//             type="text"
//             placeholder="Search..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className={`${poppins400.className} text-[14px] p-2 bg-lightgray rounded-md w-full focus:outline-none cursor-pointer`}
//           />
//         </div>
//       </div>
//       {!isMobileView &&(<div className="w-full border border-bordergray rounded-b-md overflow-x-auto">
//         <table className="min-w-full bg-white">
//           <thead className="bg-lightgray border-b border-bordergray">
//             <tr>
//               <th className={`${poppins400.className} text-[14px] py-6 pl-6 w-[55px] text-left`}>SL.</th>
//               <th className={`${poppins400.className} text-[14px] py-6 px-6 md:px-1 w-[528px] text-left`}>Business Name</th>
//               <th className={`${poppins400.className} text-[14px] ml-6 py-6 px-6 w-[190px]`}>Category</th>
//               <th className={`${poppins400.className} text-[14px] py-6 px-6 w-[190px]`}>City</th>
//               <th className={`${poppins400.className} text-[14px] py-6 px-6 w-[160px]`}>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentItems.map((row, index) => (
//               <tr key={row.id} className={`${index === currentItems.length - 1 ? '' : 'border-b border-bordergray'}`}>
//                 <td className={`${poppins400.className} text-[14px] py-3 pl-6 text-left`}>{index + 1}</td>
//                 <td className={`${poppins500.className} text-[14px] leading-[21px] py-3 px-6 md:px-1 w-[528px] text-left`}>
//                   <Link href={`/allbusiness/${row._id}`}>
//                     <span className=" hover:underline">{row.businessName}</span>
//                   </Link>
//                 </td>
//                 <td className={`${poppins400.className} text-[14px] py-6 w-[190px] text-center`}>
//                   {row.businessCategories && row.businessCategories.length > 0 ? row.businessCategories.map(category => category.categoryName).join(", ") : ""}
//                 </td>
//                 <td className={`${poppins400.className} text-[14px] py-6 w-[190px] text-center`}>{row.businessAddress ? row.businessAddress.city : ''}</td>
//                 <td className="py-6 w-[160px] text-center">
//                   <span className={`${poppins400.className} text-[14px] ${row.isProfileApproved ? "text-atextgreen bg-abggreen py-1 px-3 rounded-full" : " bg-pbggray py-1 px-3 rounded-full"}`}>
//                     {row.isProfileApproved ? "Approved" : "Pending"}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>)}
//       {isMobileView && (
//         <div className="border border-bordergray">
//           {currentItems?.map((row,index) => (
//             <div
//               key={row._id}
//               className="flex flex-col p-4 border-b border-bordergray"
//             >
//               <div >
//                 <div className="flex- flex-col">
//                   <div className="flex flex-row ">
//                     <div className="flex justify-content items-center">
//                       <span className="mt-3">{index+1}</span>
//                       </div>
//                       <div>
//                       <Link href={`/allbusiness/${row._id}`}>
//                     <span className="ml-6 text-blue-500 hover:underline">{row.businessName}</span>
//                   </Link>
//                         <span
//                           className={`${poppins400.className} text-[10px]  ml-2 ${row.isProfileApproved ? "text-atextgreen bg-abggreen  px-2 rounded-full" : " bg-pbggray  px-2 rounded-full"}`}
//                         >
//                           {row.isProfileApproved ? "Approved" : "Pending"}
//                         </span>
//                       </div>
                     
//                     </div>
//                   </div>
//                   <div>
//                     <div className="flex flex-row ml-8 items-center space-x-1">
//                       <span
                        
//                         className={`${poppins400.className} text-textgray text-[12px]`}
//                       >
//                         {row.businessCategories && row.businessCategories.length > 0 ? row.businessCategories.map(category => category.categoryName).join(", ") : ""}
//                       </span>
//                       {row.businessCategories && row.businessCategories.length > 0 &&(<span className={`${poppins400.className} text-[12px]`}>
//                         •
//                       </span>)}
//                       <span
//                         className={`${poppins400.className} text-[12px] text-textgray`}
//                       >
//                         {row.businessAddress ? row.businessAddress.city : ''}
//                       </span>
                      
//                     </div>
//                   </div>
//                 </div>
//               </div>
            
//           ))}
//         </div>
//       )}
//       <div className="pagination flex mt-2 mb-6">
//         <button
//           onClick={() => paginate(currentPage - 1)}
//           className={`${poppins400.className} bg-gray-200 text-gray-700 font-bold py-2 px-4 mr-2 rounded ${currentPage === 1 && "opacity-50 cursor-not-allowed"}`}
//           disabled={currentPage === 1}
//         >
//           Prev
//         </button>
//         {getPaginationButtons()}
//         <button
//           onClick={() => paginate(currentPage + 1)}
//           className={`${poppins400.className} bg-gray-200 text-gray-700 font-bold py-2 px-4 ml-2 rounded ${currentPage === totalPages && "opacity-50 cursor-not-allowed"}`}
//           disabled={currentPage === totalPages}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BusinessTableTailwind;
