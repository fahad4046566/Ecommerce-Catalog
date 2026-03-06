import React from 'react'
import { Input } from './ui/input'
import { Search } from 'lucide-react'

const SearchBar = ({setSearchInput,searchInput}) => {
  return (
     <div className="relative">
      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
      <Input
        placeholder="Search products..."
        value={searchInput}
        onChange={(e)=>{setSearchInput(e.target.value)}}
        className="pl-10"
      />
    </div>
  )
}

export default SearchBar