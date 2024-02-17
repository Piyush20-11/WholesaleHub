// App.js

import React from 'react';
import RequestList from '../../RequestList';

const Status = () => {
  // Sample request data
  const requests = [
    { productName: 'Product A', quantity: 5, status: 'pending' },
    { productName: 'Product B', quantity: 10, status: 'accepted' },
    { productName: 'Product C', quantity: 3, status: 'pending' },
    // Add more requests as needed
  ];

  return (
    <div className="status" class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h5>
        <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            View all
        </a>
   </div>
      <RequestList requests={requests} />
    </div>
  );
}

export default Status;
