import React from "react";
import { TabsList, Tabs, TabsTrigger } from "./ui/tabs";
import {Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,} from "../components/ui/select";
const FilterBar = ({ categories, onCategoryChange, activeCategory ,onSortChange}) => {
  return (
    <>
     <div className="">
      <Tabs value={activeCategory} onValueChange={onCategoryChange}>
        <TabsList className="w-full flex mb-5 justify-start overflow-x-auto overflow-y-hidden whitespace-nowrap scrollbar-hide py-3 no-scrollbar">
          <TabsTrigger value="all">All</TabsTrigger>
          {categories.map((cat) => (
            <TabsTrigger key={cat.slug} value={cat.slug}>
              {cat.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <Select onValueChange={onSortChange}>
        <SelectTrigger className="w-45">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="default">Default</SelectItem>
          <SelectItem value="price-asc">Price: Low to High</SelectItem>
          <SelectItem value="price-desc">Price: High to Low</SelectItem>
          <SelectItem value="rating">Highest Rated</SelectItem>
        </SelectContent>
      </Select>
      </div>
    </>
  );
};

export default FilterBar;
