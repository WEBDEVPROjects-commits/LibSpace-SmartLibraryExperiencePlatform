import React from "react";
import { HomeContext } from "../Context/Context";
import { useContext } from "react";
function Books() {
  const props = useContext(HomeContext);
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4">
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
              Search Library
            </h2>
            <p className="text-gray-600">Find books, resources, and more</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="flex-1 relative">
              <input
                type="text"
                id="searchInput"
                placeholder="Search for books, authors, topics..."
                className="w-full px-5 py-4 pl-12 pr-4 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-20 outline-none transition-all"
                value={props.searchedBook}
                onChange={(e) => props.setsearchedBook(e.target.value)}
              />
              <svg
                className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <div className="relative">
              <button
                id="filterBtn"
                className="w-full sm:w-auto px-6 py-4 bg-gray-50 text-gray-700 font-medium rounded-xl border border-gray-200 hover:bg-gray-100 transition-all flex items-center justify-between gap-3"
              >
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
                <span id="filterText">All Categories</span>
                <svg
                  className="w-4 h-4 text-gray-600 transition-transform"
                  id="filterArrow"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                id="filterDropdown"
                className="hidden absolute top-full mt-2 w-full sm:w-64 bg-white rounded-xl shadow-xl border border-gray-100 z-10 overflow-hidden"
              >
                <div className="py-2">
                  <button
                    className="filter-option w-full px-4 py-3 text-left hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                    data-value="all"
                  >
                    All Categories
                  </button>
                  <button
                    className="filter-option w-full px-4 py-3 text-left hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                    data-value="fiction"
                  >
                    Fiction
                  </button>
                  <button
                    className="filter-option w-full px-4 py-3 text-left hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                    data-value="non-fiction"
                  >
                    Non-Fiction
                  </button>
                  <button
                    className="filter-option w-full px-4 py-3 text-left hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                    data-value="textbooks"
                  >
                    Textbooks
                  </button>
                  <button
                    className="filter-option w-full px-4 py-3 text-left hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                    data-value="reference"
                  >
                    Reference Books
                  </button>
                  <button
                    className="filter-option w-full px-4 py-3 text-left hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                    data-value="magazines"
                  >
                    Magazines
                  </button>
                  <button
                    className="filter-option w-full px-4 py-3 text-left hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                    data-value="ebooks"
                  >
                    E-Books
                  </button>
                </div>
              </div>
            </div>

            <button
              className="px-8 py-4 bg-linear-to-r from-emerald-500 to-emerald-600 text-white font-medium rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all hover:shadow-lg"
              onClick={() => {
                props.setsearchedBook("");
              }}
            >
              Search
            </button>
          </div>

          <div id="activeFilters" className="flex flex-wrap gap-2 mb-4"></div>
        </div>

        <div className="mt-8">
          <div
            id="searchResults"
            className="bg-white rounded-2xl border border-gray-100 shadow-lg min-h-100 p-8"
          >
            {props.api.map((element) => {
              return (
                <div>
                  <h1>{element.author_name}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Books;
