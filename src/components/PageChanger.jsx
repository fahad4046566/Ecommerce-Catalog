import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const PageChanger = ({currentPage, totalItems, itemsPerPage ,onPageChange}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  return (
    <div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
           <PaginationPrevious 
    onClick={() => {
      if (currentPage > 1) onPageChange(currentPage - 1);
    }}
    className={currentPage <= 1 ? "hover:cursor-pointer pointer-events-none opacity-50" : "cursor-pointer"}
  />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink>{currentPage}</PaginationLink>
          </PaginationItem>
  
          <PaginationItem>
            <PaginationNext className={`hover:cursor-pointer`} disabled={currentPage === totalPages}  onClick={()=> {onPageChange(currentPage+1)}}/>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PageChanger;
