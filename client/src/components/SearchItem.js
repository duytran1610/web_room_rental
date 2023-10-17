import { memo } from "react";

const SearchItem = ({IcStart, IcEnd, text, defaultText, fontWeight}) => {
  return (
    <div className="bg-white p-2 w-full rounded-md text-[12px] text-gray-400 flex items-center justify-between">
        <span className="flex items-center gap-1 w-full">
          {IcStart}
          <span className={`${(fontWeight || text) && 'font-medium text-black'} w-full whitespace-nowrap`}>{text || defaultText}</span>
        </span>
        <span>{IcEnd}</span>
    </div>
  )
}

export default memo(SearchItem);