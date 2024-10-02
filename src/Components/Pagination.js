// import React, { useEffect, useState } from 'react';
// import ProductCard from './ProductCard';

// const Pagination = ({ items, itemsPerPage, currentPage, setCurrentPage }) => {
//     const [currentItems, setCurrentItems] = useState([]);
//     const [pageCount, setPageCount] = useState(0);
//     const [paginationRange, setPaginationRange] = useState([]);

//     useEffect(() => {
//         setPageCount(Math.ceil(items.length / itemsPerPage));
//         setCurrentItems(items.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage));
//         updatePaginationRange(currentPage);
//     }, [items, itemsPerPage, currentPage]);

//     const handlePageClick = (selectedPage) => {
//         setCurrentPage(selectedPage);
//     };

//     // const updatePaginationRange = (current) => {
//     //     const totalPageNumbers = 5;  
//     //     const range = [];
//     //     const leftLimit = Math.max(current - 2, 1);
//     //     const rightLimit = Math.min(current + 3, pageCount);

//     //     for (let i = leftLimit; i < rightLimit; i++) {
//     //         range.push(i);
//     //     }

//     //     if (leftLimit > 2) {
//     //         range.unshift('...');
//     //         range.unshift(1);
//     //     }

//     //     if (rightLimit < pageCount) {
//     //         range.push('...');
//     //         range.push(pageCount);
//     //     }

//     //     setPaginationRange(range);
//     // };
//     const updatePaginationRange = (current) => {
//         const totalPageNumbers = 5;
//         const range = [];
//         const leftLimit = Math.max(current - 2, 1);
//         const rightLimit = Math.min(current + 3, pageCount);
      
//         for (let i = leftLimit; i < rightLimit; i++) {
//             range.push(i);
//         }
      
//         if (leftLimit > 2) {
//             range.unshift('...');
//             range.unshift(1);
//         }
      
//         if (rightLimit < pageCount) {
//             range.push('...');
//             range.push(pageCount);
//         }
      
//         setPaginationRange(range);
      
//         // Reset the current page if it exceeds the new pageCount
//         if (current >= pageCount) {
//           setCurrentPage(pageCount - 1);
//         }
//       };
      
//     return (
//         <div id='paginationcontainer' className='container mt-3'>
//             <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1">
//                 {currentItems.map(el => (
//                     <div className='col mt-3 mt-lg-0' key={el.id}>
//                         <ProductCard data={el} />
//                     </div>
//                 ))}
//             </div>

//             {pageCount > 0 && (
//                 <div className="pagination" id='numberpagination'>
//                     <button
//                         disabled={currentPage === 0}
//                         onClick={() => handlePageClick(currentPage - 1)}
//                         className="pagination-arrow"
//                         id='paginationbutton1'
//                     >
//                         <i className="fa-solid fa-arrow-left me-2"></i>
//                         Previous
//                     </button>

//                     {paginationRange.map((page, index) => (
//                         <button
//                             key={index}
//                             onClick={() => typeof page === 'number' && handlePageClick(page - 1)}
//                             className={currentPage + 1 === page ? 'active' : ''}
//                             id='paginationbutton'
//                             disabled={page === '...'}
//                         >
//                             {page}
//                         </button>
//                     ))}

//                     <button
//                         id='paginationbutton2'
//                         disabled={currentPage + 1 >= pageCount}
//                         onClick={() => handlePageClick(currentPage + 1)}
//                         className="pagination-arrow"
//                     >
//                         Next
//                         <i className="fa-solid fa-arrow-right ms-2"></i>
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Pagination;

import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Pagination = ({ items, itemsPerPage, currentPage, setCurrentPage }) => {
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [paginationRange, setPaginationRange] = useState([]);

    useEffect(() => {
        setPageCount(Math.ceil(items.length / itemsPerPage));
        setCurrentItems(items.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage));
    }, [items, itemsPerPage, currentPage]);

    // Trigger updatePaginationRange when pageCount or currentPage changes
    useEffect(() => {
        updatePaginationRange(currentPage);
    }, [pageCount, currentPage]);

    const handlePageClick = (selectedPage) => {
        setCurrentPage(selectedPage);
    };

    const updatePaginationRange = (current) => {
        const totalPageNumbers = 5;
        const range = [];
        const leftLimit = Math.max(current - 2, 1);
        const rightLimit = Math.min(current + 3, pageCount);

        for (let i = leftLimit; i < rightLimit; i++) {
            range.push(i);
        }

        if (leftLimit > 2) {
            range.unshift('...');
            range.unshift(1);
        }

        if (rightLimit < pageCount) {
            range.push('...');
            range.push(pageCount);
        }

        setPaginationRange(range);
    };

    return (
        <div id='paginationcontainer' className='container mt-3'>
            <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1">
                {currentItems.map(el => (
                    <div className='col mt-3 mt-lg-0' key={el.id}>
                        <ProductCard data={el} />
                    </div>
                ))}
            </div>

            {pageCount > 0 && (
                <div className="pagination" id='numberpagination'>
                    <button
                        disabled={currentPage === 0}
                        onClick={() => handlePageClick(currentPage - 1)}
                        className="pagination-arrow"
                        id='paginationbutton1'
                    >
                        <i className="fa-solid fa-arrow-left me-2"></i>
                        Previous
                    </button>

                    {paginationRange.map((page, index) => (
                        <button
                            key={index}
                            onClick={() => typeof page === 'number' && handlePageClick(page - 1)}
                            className={currentPage + 1 === page ? 'active' : ''}
                            id='paginationbutton'
                            disabled={page === '...'}
                        >
                            {page}
                        </button>
                    ))}

                    <button
                        id='paginationbutton2'
                        disabled={currentPage + 1 >= pageCount}
                        onClick={() => handlePageClick(currentPage + 1)}
                        className="pagination-arrow"
                    >
                        Next
                        <i className="fa-solid fa-arrow-right ms-2"></i>
                    </button>
                </div>
            )}
        </div>
    );
};

export default Pagination;
