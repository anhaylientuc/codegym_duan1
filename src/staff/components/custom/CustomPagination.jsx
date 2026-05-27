import { React, useEffect, useState } from 'react'
import { Pagination } from 'react-bootstrap'
const CustomPagination = ({ numPages, setpage, page }) => {
    let showDot=false;

    return (
        <Pagination size="sm">
            <Pagination.Prev onClick={() => {
                if (page > 1)
                    setpage(page - 1);
            }}>
                Trước
            </Pagination.Prev>
            {

                [...Array(numPages)].map((item, index) => {
                    if (index + 1 == 1 || index + 1 == numPages || index + 1 == page || index == page || index + 2 == page) {
                        showDot=false;
                        return <Pagination.Item
                            onClick={() => {
                                setpage(index + 1);
                            }}
                            key={index}>{index + 1}</Pagination.Item>
                    }
                    else if(!showDot){
                        showDot=true;
                        return <Pagination.Ellipsis key={index}/>
                    }
                })

            }
            <Pagination.Next onClick={() => {
                if (page < numPages)
                    setpage(page + 1);
            }}>
                Sau
            </Pagination.Next>
        </Pagination>
    )
}
export default CustomPagination