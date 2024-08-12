import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useEffect } from 'react'
interface IPagination {
  setCurrentPage: (prev: number) => void
  currentPage: number
  dataCount: number
  perPage: number
}
const Pagination: React.FC<IPagination> = ({ setCurrentPage, dataCount, currentPage, perPage }): JSX.Element => {
  const [previewCount, setPreviewCount] = React.useState(0)
  const [nextCount, setNextCount] = React.useState(3)
  const pageCount = []
  useEffect(() => {
    if (currentPage < 3) {
      setPreviewCount(0)
      setNextCount(3)
    } else if (currentPage > previewCount) {
      setPreviewCount(currentPage - 2)
      setNextCount(currentPage + 1)
    }
  }, [currentPage, dataCount, perPage])

  for (let i = 1; i <= Math.ceil(dataCount / perPage); i++) {
    pageCount.push(i)
  }

  return (
    <section className="mt-[52px] flex h-[90px] w-[429px] flex-row items-center justify-center gap-4 p-[30px]">
      {pageCount.length > 3 && (
        <button
          className="flex h-[64px] w-[64px] cursor-pointer items-center justify-center rounded-[100px] border border-[#EC5CF8]"
          onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
        >
          <ChevronLeft className="h-[22px] w-[62px] text-center text-[18px] font-extrabold text-[#EC5CF8]" />
        </button>
      )}
      {pageCount.slice(previewCount, nextCount).map((num) => (
        <button
          key={num}
          className={`flex h-[64px] w-[64px] cursor-pointer items-center justify-center rounded-[100px] border border-[#EC5CF8]  ${currentPage === num && 'bg-[#EC5CF8]'}`}
        >
          <p
            className={`h-[22px] w-[62px] text-center text-[18px] font-extrabold ${currentPage === num ? 'text-white' : 'text-[#EC5CF8]'}`}
            onClick={() => setCurrentPage(num)}
          >
            {num}
          </p>
        </button>
      ))}

      {pageCount.length > 3 && (
        <button
          className=" flex h-[64px] w-[64px] cursor-pointer items-center justify-center rounded-[100px] border border-[#EC5CF8]"
          onClick={() => currentPage < pageCount.length && setCurrentPage(currentPage + 1)}
        >
          <ChevronRight className="h-[22px] w-[62px] text-center text-[18px] font-extrabold text-[#EC5CF8]" />
        </button>
      )}
    </section>
  )
}

export default Pagination
