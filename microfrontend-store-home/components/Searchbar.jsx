"use client"

import { useState } from "react"

export default function Searchbar({onsearch}) {
  const [search,setSearch] = useState("");

  function handleChange(e) {
    e.preventDefault();
    const value = e.target.value;
    setSearch(value);
    onsearch(value);
  }

  return (
    <div>
      <input type="text" placeholder="Search" value={search} onChange={handleChange} className="w-full max-w-md mx-auto block px-4 py-2 my-8 border rounded-lg"/>
    </div>
  )
}