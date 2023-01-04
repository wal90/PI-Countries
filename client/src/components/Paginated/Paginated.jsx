import React, { useState } from "react";
import s from "./paginated.module.css"

export default function Paginated({allCountries, itemsPerPages, setCurrentPage, currentPage}){
  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const pages = []
  for (let i = 0; i < Math.ceil(allCountries.length / itemsPerPages); i++) {
      pages.push(i+1)
  }

  const handleClick = (e) => {
      setCurrentPage(Number(e.target.id))
      window.scrollTo(0, 0);
  }

  const handleNextbtn = () =>{
      setCurrentPage(currentPage + 1);

      if(currentPage + 1 > maxPageNumberLimit){
          setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
          setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
      }
  }
  const handlePrevbtn = () =>{
      setCurrentPage(currentPage - 1);

      if((currentPage - 1) % pageNumberLimit === 0){
          setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
          setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
      }
  }

  let pageIncrementBtn = null;
  if(pages.length > maxPageNumberLimit) {
      pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>
  }

  let pageDecrementBtn = null;
  if(minPageNumberLimit >= 1) {
      pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>
  }


  const renderPageNumbers = pages.map(number => {
      if(number < maxPageNumberLimit + 1 && number > minPageNumberLimit){
          return (
              <li key={number} id={number} onClick={e => handleClick(e)}
              className={currentPage === number ? s.active : null}
              >
                  {number}
              </li>
          );
      } else {
          return null;
      }
  })


  return(
  <div>
      <ul className={s.pageNumbers}>
          <li>
              <button
              disabled={currentPage === pages[0] ? true : false}
              onClick={handlePrevbtn}
              >
                  prev
              </button>
          </li>
          {pageDecrementBtn}
          {renderPageNumbers}
          {pageIncrementBtn}
          <li>
              <button
              onClick={handleNextbtn}
              disabled={currentPage === pages[pages.length - 1] ? true : false}>
                  next
              </button>
          </li>
      </ul>
  </div>
  )

}


// export default function Pagination({ countriesPerPage, allCountries, paginate, changePage, currentPage }) {
//     // Creo un array vacio para los numeros de paginas
//     const pageNumbers = [];
  
//     // Hago un for para que se creen tantos numeros de paginas como videojuegos el Math.ceil redondea hacia arriba
//     // Luego lo divido entre allVideogames por el gamesPerPage para despues pushearlo al array
//     for (let i = 1; i <= Math.ceil(allCountries/ countriesPerPage); i++) {
//       pageNumbers.push(i);
//     }
  
//     const handlePrevious = () => {
//       if (currentPage > 1) {
//         changePage(currentPage - 1);
//       }
//     }
  
//     const handleNext = () => {
//       if (currentPage < pageNumbers.length) {
//         changePage(currentPage + 1);
//       }
//     }
  
//     return (
//       <div>
//         <div className={s.paginationContainer}>
//           <button className={s.buttonPrevious} onClick={handlePrevious}>←</button>
//             {pageNumbers.map((e) => (
//               <div key={e}>
//                 <p className={currentPage === e ? s.active : s.paginationClick} onClick={() => paginate(e)}>{e}</p>
//               </div>
//             ))}
//           <button className={s.buttonNext} onClick={handleNext}>→</button>
//         </div>
//       </div>
//     );
//   }