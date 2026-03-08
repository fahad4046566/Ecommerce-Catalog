import React from 'react'
import {useState,useEffect} from "react";
import UsePRoducts from "@/hooks/UsePRoducts";
import { Skeleton } from "@/components/ui/skeleton";
import ProductCard from "@/components/ProductCard";
import FilterBar from "@/components/FilterBar";
import { fetchCategories } from "@/Services/api";
import SearchBar from "@/components/SearchBar";
import { useDebounce } from "@/hooks/UseDebounce";
import { Button } from "@/components/ui/button";
import PageChanger from "@/components/PageChanger";
const Product = () => {
     const { products, loading, error ,setCategory,category,setSort,setSearch,resetFilters,setPage,currentPage,totalProducts,productsPerPage} = UsePRoducts();
  const [categories, setCategories] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const debouncedSearch = useDebounce(searchInput, 500)
  const handleClear = () => {
  resetFilters();   
  setSearchInput(''); 
};
   useEffect(() => {
 const loadCategories = async () => {
    const cats = await fetchCategories() 
    setCategories(cats)
  }
  loadCategories() 
 }, [])

useEffect(() => {
  setSearch(debouncedSearch) 
}, [debouncedSearch])
 return (
    <><div>
      <div className="space-y-6">
        <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
        <FilterBar categories={categories} onCategoryChange={setCategory} activeCategory={category} onSortChange={setSort} />
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <Skeleton key={i} className="h-80 w-full" />
            ))}
          </div>
        )}
        {!loading && products.length === 0 && (
          <div className="text-center py-20">
            <p className="text-4xl mb-4">🔍</p>
            <h2 className="text-2xl font-bold mb-2">No products found</h2>
            <p className="text-muted-foreground">
              Try adjusting your filters or search term
            </p>
            <Button
              onClick={handleClear}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}
        {error && <p>Error: {error}</p>}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
    {/* pagination  */}
      <div className="m-4">
        <PageChanger currentPage={currentPage} onPageChange={setPage} totalItems={totalProducts} itemsPerPage={productsPerPage}/>
      </div>
      </>
  );
}

export default Product