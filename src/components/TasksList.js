import React from "react";

const TasksList = () => {
  return (
    <div class="container max-w-3xl px-4 mx-auto sm:px-8">
      <div class="py-8">
        <div class="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
          <div class="inline-block min-w-full overflow-hidden rounded-lg shadow">
            <table class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    scope="col"
                    class="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    User
                  </th>
                  <th
                    scope="col"
                    class="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    Role
                  </th>
                  <th
                    scope="col"
                    class="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    Created at
                  </th>
                  <th
                    scope="col"
                    class="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    status
                  </th>
                  <th
                    scope="col"
                    class="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <div class="flex items-center">
                      <div class="flex-shrink-0">
                        <a href="#" class="relative block">
                          <img
                            alt="profil"
                            src="/images/person/8.jpg"
                            class="mx-auto object-cover rounded-full h-10 w-10 "
                          />
                        </a>
                      </div>
                      <div class="ml-3">
                        <p class="text-gray-900 whitespace-no-wrap">
                          Jean marc
                        </p>
                      </div>
                    </div>
                  </td>
                  <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <p class="text-gray-900 whitespace-no-wrap">Admin</p>
                  </td>
                  <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <p class="text-gray-900 whitespace-no-wrap">12/09/2020</p>
                  </td>
                  <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <span class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                      <span
                        aria-hidden="true"
                        class="absolute inset-0 bg-green-200 rounded-full opacity-50"
                      ></span>
                      <span class="relative">active</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <div class="flex items-center">
                      <div class="flex-shrink-0">
                        <a href="#" class="relative block">
                          <img
                            alt="profil"
                            src="/images/person/9.jpg"
                            class="mx-auto object-cover rounded-full h-10 w-10 "
                          />
                        </a>
                      </div>
                      <div class="ml-3">
                        <p class="text-gray-900 whitespace-no-wrap">
                          Marcus coco
                        </p>
                      </div>
                    </div>
                  </td>
                  <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <p class="text-gray-900 whitespace-no-wrap">Designer</p>
                  </td>
                  <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <p class="text-gray-900 whitespace-no-wrap">01/10/2012</p>
                  </td>
                  <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <span class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                      <span
                        aria-hidden="true"
                        class="absolute inset-0 bg-green-200 rounded-full opacity-50"
                      ></span>
                      <span class="relative">active</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <div class="flex items-center">
                      <div class="flex-shrink-0">
                        <a href="#" class="relative block">
                          <img
                            alt="profil"
                            src="/images/person/10.jpg"
                            class="mx-auto object-cover rounded-full h-10 w-10 "
                          />
                        </a>
                      </div>
                      <div class="ml-3">
                        <p class="text-gray-900 whitespace-no-wrap">
                          Ecric marc
                        </p>
                      </div>
                    </div>
                  </td>
                  <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <p class="text-gray-900 whitespace-no-wrap">Developer</p>
                  </td>
                  <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <p class="text-gray-900 whitespace-no-wrap">02/10/2018</p>
                  </td>
                  <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <span class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                      <span
                        aria-hidden="true"
                        class="absolute inset-0 bg-green-200 rounded-full opacity-50"
                      ></span>
                      <span class="relative">active</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <div class="flex items-center">
                      <div class="flex-shrink-0">
                        <a href="#" class="relative block">
                          <img
                            alt="profil"
                            src="/images/person/6.jpg"
                            class="mx-auto object-cover rounded-full h-10 w-10 "
                          />
                        </a>
                      </div>
                      <div class="ml-3">
                        <p class="text-gray-900 whitespace-no-wrap">
                          Julien Huger
                        </p>
                      </div>
                    </div>
                  </td>
                  <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <p class="text-gray-900 whitespace-no-wrap">User</p>
                  </td>
                  <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <p class="text-gray-900 whitespace-no-wrap">23/09/2010</p>
                  </td>
                  <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <span class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                      <span
                        aria-hidden="true"
                        class="absolute inset-0 bg-green-200 rounded-full opacity-50"
                      ></span>
                      <span class="relative">active</span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="flex flex-col items-center px-5 py-5 bg-white xs:flex-row xs:justify-between">
              <div class="flex items-center">
                <button
                  type="button"
                  class="w-full p-4 text-base text-gray-600 bg-white border rounded-l-xl hover:bg-gray-100"
                >
                  <svg
                    width="9"
                    fill="currentColor"
                    height="8"
                    class=""
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  class="w-full px-4 py-2 text-base text-indigo-500 bg-white border-t border-b hover:bg-gray-100 "
                >
                  1
                </button>
                <button
                  type="button"
                  class="w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-100"
                >
                  2
                </button>
                <button
                  type="button"
                  class="w-full px-4 py-2 text-base text-gray-600 bg-white border-t border-b hover:bg-gray-100"
                >
                  3
                </button>
                <button
                  type="button"
                  class="w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-100"
                >
                  4
                </button>
                <button
                  type="button"
                  class="w-full p-4 text-base text-gray-600 bg-white border-t border-b border-r rounded-r-xl hover:bg-gray-100"
                >
                  <svg
                    width="9"
                    fill="currentColor"
                    height="8"
                    class=""
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasksList;
