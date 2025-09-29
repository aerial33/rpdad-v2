'use client'

import React from 'react'

export const SearchWidget: React.FC = () => {
  return (
    <div className="widget">
      <form className="rounded-3xl text-gray-600 bg-white/80 backdrop-blur-sm">
        <div className="form-floating relative !mb-0">
          <input
            id="search-form"
            type="text"
            className="relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-3xl transition-[border-color] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus-visible:!border-[rgba(63,120,224,0.5)] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
            placeholder=""
          />
          <label
            htmlFor="search-form"
            className="inline-block !text-[#959ca9] text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
          >
            Recherche
          </label>
        </div>
      </form>
    </div>
  )
}