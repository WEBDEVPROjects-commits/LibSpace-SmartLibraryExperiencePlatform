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
              onClick={async () => {
                props.fetches(props.searchedBook);
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
              const isBorrowable = element.ebook_access === "borrowable";
              return (
                <div className="bg-white rounded-xl border border-gray-100 hover:border-emerald-500 transition-all duration-300 hover:shadow-lg overflow-hidden group">
                  {/* Book Cover/Placeholder */}
                  <div className="h-48 bg-linear-to-br from-emerald-50 to-emerald-100 flex items-center justify-center relative overflow-hidden">
                    <svg
                      className="w-20 h-20 text-emerald-300 group-hover:text-emerald-400 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>

                    {/* Ebook Access Badge */}
                    <div className="absolute top-3 right-3">
                      {isBorrowable ? (
                        <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-semibold rounded-full flex items-center gap-1">
                          <svg
                            className="w-3 h-3"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Borrowable
                        </span>
                      ) : (
                        <span className="px-3 py-1 bg-gray-400 text-white text-xs font-semibold rounded-full flex items-center gap-1">
                          <svg
                            className="w-3 h-3"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                              clipRule="evenodd"
                            />
                          </svg>
                          No Access
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Book Details */}
                  <div className="p-5">
                    {/* Title */}
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                      {element.title}
                    </h3>

                    {/* Author */}
                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      <span className="text-sm">{element.author_name}</span>
                    </div>

                    {isBorrowable ? (
                      <button className="w-full px-4 py-3 bg-linear-to-r from-emerald-500 to-emerald-600 text-white font-medium rounded-lg hover:from-emerald-600 hover:to-emerald-700 transition-all hover:shadow-md">
                        Borrow Book
                      </button>
                    ) : (
                      <button
                        className="w-full px-4 py-3 bg-gray-100 text-gray-500 font-medium rounded-lg cursor-not-allowed"
                        disabled
                      >
                        Not Available
                      </button>
                    )}
                  </div>
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
