'use client'
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useParams } from 'next/navigation';
import { poppins400, poppins500, poppins600, poppins700 } from '../../fonts';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
const BusinessDetailPage = () => {
  const [business, setBusiness] = useState(null);
  const [error, setError] = useState(null);

  const { _id } = useParams();

  useEffect(() => {
    const fetchBusiness = async () => {
      try {
        const res = await fetch(`/api/business/get-business`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ _id: _id }),
        });

        if (!res.ok) {
          throw new Error('Failed to fetch');
        }

        const { business, success, error } = await res.json();

        if (!success) {
          throw new Error(error || 'Failed to fetch');
        }

        setBusiness(business);
      } catch (error) {
        setError(error.message);
      }
    };

    if (_id) {
      fetchBusiness();
    }
  }, [_id]);

  if (error) {
    return (
      <div className={`container mx-auto p-4 ${poppins400.className}`}>
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  if (!business) {
    return (
      <div className={`container mx-auto p-4 ${poppins400.className}`}>
        <div className="text-gray-700">Loading...</div>
      </div>
    );
  }

  return (
    <div className={`mt-6 container mx-auto p-4 ${poppins400.className} border border-gray-300 rounded-md`}>
      <Head>
        <title className={poppins700.className}>{business.businessName} Details</title>
        <meta name="description" content="Business Details" />
      </Head>

      <div className=" px-2">
        <h1 className={`text-[40px] ${poppins700.className} text-center mb-4`}>{business.businessName}</h1>
        <p className={`text-gray-600 ${poppins600.className} text-center mb-4`}>{business.email}</p>
        <p className={`text-gray-600 ${poppins600.className} text-center mb-6`}>{business.phoneNumber}</p>
        <div className="flex items-center mb-4">
          <div className="mr-2">
            {business.isProfileApproved ? (
              <CheckCircleIcon className="text-green-500" />
            ) : (
              <CancelIcon className="text-red-500" />
            )}
          </div>
          <span className={`text-gray-600 ${poppins400.className} text-[20px]`}>{business.isProfileApproved ? 'Profile Verified' : 'Profile Not Verified'}</span>
        </div>

        <div className="flex items-center mb-6">
          <div className="mr-2">
            {business.isPhoneVerified ? (
              <CheckCircleIcon className="text-green-500" />
            ) : (
              <CancelIcon className="text-red-500" />
            )}
          </div>
          <span className={`text-gray-600 ${poppins400.className} text-[20px]`}>{business.isPhoneVerified ? 'Phone Number Verified' : 'Phone Number Not Verified'}</span>
        </div>
        <div className="flex flex-row items-center">
          <LocationOnIcon className="w-6 h-6" />
          <div>
            <h2 className={`text-[28px] ${poppins700.className}`}>Address</h2>
            
          </div>
        </div>
        <div className='mb-6'>
        <p className={`text-gray-600 ${poppins400.className} text-[20px]`}>{business.businessAddress.streetAddress}</p>
            <p className={`text-gray-600 ${poppins400.className} text-[20px]`}>{business.businessAddress.city}, {business.businessAddress.state} {business.businessAddress.zipCode}</p>
            <p className={`text-gray-600 ${poppins400.className} text-[20px]`}>{business.businessAddress.country}</p>
        </div>

        <div className="mb-4 bg-gray-100 rounded-md">
          <h2 className={`text-[28px] ${poppins700.className} mb-3`}>Categories</h2>
          <ul className={`text-gray-600 ${poppins400.className} mb-6`}>
            {business.businessCategories.map((category, index) => (
              <li key={index} className={`text-gray-600 ${poppins400.className} text-[20px]`}>{category}</li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <h2 className={`text-[28px] ${poppins700.className}`}>Business Hours</h2>
          {business.businessHours && Object.keys(business.businessHours).length > 0 ? (
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell><sm className={` ${poppins600.className} text-[16px]`}>Day</sm></TableCell>
                    <TableCell><sm className={` ${poppins600.className} text-[16px]`}>Open</sm></TableCell>
                    <TableCell><sm className={` ${poppins600.className} text-[16px]`}>Close</sm></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.keys(business.businessHours).map((day) => {
                    if (day !== 'createdAt' && day !== 'updatedAt' && day !== '_id') {
                      return (
                        <TableRow key={day}>
                          <TableCell>{day.charAt(0).toUpperCase() + day.slice(1)}</TableCell>
                          <TableCell>{business.businessHours[day].is24Hours ? '24 Hours' : business.businessHours[day].open.join(', ')}</TableCell>
                          <TableCell>{business.businessHours[day].isClosed ? 'Closed' : business.businessHours[day].close.join(', ')}</TableCell>
                        </TableRow>
                      );
                    }
                    return null;
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <p className={`text-gray-600 ${poppins400.className} text-[20px]`}>No business hours available</p>
          )}
        </div>


        <div className="mb-6">
          <h2 className={`text-[28px] ${poppins700.className}`}>Owner</h2>
          <p className={`text-gray-600 ${poppins400.className} text-[20px]`}>{business.firstName} {business.lastName}</p>
        </div>

        <div className="mb-6">
          <h2 className={`text-[28px] ${poppins700.className}`}>Website</h2>
          {business.businessWebsite ? (
            <a href={business.businessWebsite} target="_blank" rel="noopener noreferrer" className={`text-blue-500 hover:underline ${poppins400.className} text-[16px]`}>
              {business.businessWebsite}
            </a>
          ) : (
            <p className={`text-gray-600 ${poppins400.className} text-[20px]`}>No website available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BusinessDetailPage;
