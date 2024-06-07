import React, { useState } from "react";
import { poppins700, poppins400, poppins500, poppins600 } from "../app/fonts";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";

const BusinessTable = ({ rows, onApprove }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const {data: session} = useSession();

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const filteredRows = rows.filter(
    (row) =>
      row.businessName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentItems = filteredRows.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-col">
      <input
        type="text"
        placeholder="Search by business name or email"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={`${poppins400.className} p-2 mb-4 rounded border border-textgray focus:ring focus:ring-tealblue focus:outline-none focus:border-none`}
      />

      <div className="flex flex-col items-center bg-gray-100 border border-textgray py-4 rounded-md">
        <div className="overflow-x-auto w-full max-w-4xl">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-200">
              <tr>
                <th
                  className={`${poppins600.className} text-[16px] py-3 px-6 text-left`}
                >
                  SL
                </th>
                <th
                  className={`${poppins600.className} text-[16px] py-3 px-6 text-left`}
                >
                  Business name
                </th>
                <th
                  className={`${poppins600.className} text-[16px] py-3 px-6 text-left`}
                >
                  Business Gmail
                </th>
                <th
                  className={`${poppins600.className} text-[16px] py-3 px-6 text-left`}
                >
                  Status
                </th>
                <th
                  className={`${poppins600.className} text-[16px] py-3 px-6 text-left`}
                >
                  Approve Button
                </th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((row, index) => (
                <tr key={row._id} className="border-b border-textgray">
                  <td
                    className={`${poppins400.className} text-[16px] py-3 px-6 text-left`}
                  >
                    {index + 1}
                  </td>
                  <td
                    className={`${poppins400.className} text-[16px] py-3 px-6 text-left`}
                  >
                    {row.businessName}
                  </td>
                  <td
                    className={`${poppins400.className} text-[16px] py-3 px-6 text-left`}
                  >
                    {row.email}
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`${poppins600.className} text-[16px] ${row.isProfileApproved == false ? "text-yellow" : "text-green-800"}`}
                    >
                      {row.isProfileApproved == false ? "Pending" : "Approved"}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <button
                      onClick={() => onApprove(row._id, !row.isProfileApproved)}
                      className={`${
                        poppins600.className
                      } text-[16px] py-2 rounded md:float-left float-right ${
                        row.isProfileApproved == false
                          ? "bg-[#CF2D21] text-white px-8"
                          : "bg-[#F3F3F3] text-black px-5"
                      }`}
                    >
                      {row.isProfileApproved ? "Unapprove" : "Approve"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination flex justify-center mt-4">
            <button
              onClick={() => paginate(1)}
              className={`bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-l focus:outline-none ${
                currentPage === 1 && "opacity-50 cursor-not-allowed"
              }`}
              disabled={currentPage === 1}
            >
              &laquo;
            </button>
            {Array.from(
              { length: Math.ceil(filteredRows.length / itemsPerPage) },
              (_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={`bg-gray-200 text-gray-700 font-bold py-2 px-4 focus:outline-none ${
                    currentPage === index + 1 && "bg-blue-500 text-white"
                  }`}
                >
                  {index + 1}
                </button>
              )
            )}
            <button
              onClick={() =>
                paginate(Math.ceil(filteredRows.length / itemsPerPage))
              }
              className={`bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-r focus:outline-none ${
                currentPage === Math.ceil(filteredRows.length / itemsPerPage) &&
                "opacity-50 cursor-not-allowed"
              }`}
              disabled={
                currentPage === Math.ceil(filteredRows.length / itemsPerPage)
              }
            >
              &raquo;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessTable;
