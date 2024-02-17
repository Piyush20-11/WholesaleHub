// RequestList.js

import React from 'react';

const RequestList = ({ requests }) => {
  return (
    <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700" >
        {requests.map((request, index) => (
          


          <li class= "py-3 sm:py-4" key={index}>
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img class="w-8 h-8 rounded-full" src="https://www.nescafe.com/in/sites/default/files/styles/text_image_carousal_column_2_desktop/public/2022-06/NesCl_BR-banner_1042x540.jpg?h=7b5c2175&itok=88qCoSCD" alt="Neil image" />
            </div>
            <div class="flex-1 min-w-0 ms-4">
              <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                {request.productName}
              </p>
              <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                {request.quantity}
              </p>
            </div>
            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              {request.status}
            </div>
          </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RequestList;
