import React, {useState} from 'react';
import classes from "./Paginator.module.css";
import cn from 'classnames';


    let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);                       //округление числа страниц в бОльшую сторонуБ чтоб все влезли

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
        /*    if (i == 20) break;       */                                                             //щграничение в 20 стр
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return <div className={classes.paginator}>
        {portionNumber > 1 &&
        <button className={classes.custom_btn} onClick={() => {setPortionNumber(portionNumber - 1)}}>PREV</button>}

        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                return  <span className={cn({
                        [classes.selectedPage]: currentPage === p
                    },
                    classes.pageNumber)}
                             key={p}
                             onClick={(e) => {
                                 onPageChanged(p);
                             }}>{p}</span>
            })}
        {portionCount > portionNumber &&
            <button className={classes.custom_btn} onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</button>}
            </div>};


        export default Paginator;