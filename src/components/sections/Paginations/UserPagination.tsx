import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@ui/select'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'
interface IPagination {
  setCurrentPage: (prev: number) => void
  currentPage: number
  dataCount: number
  perPage: number
  setPerPage: (prev: number) => void
}
const Pagination: React.FC<IPagination> = ({ setCurrentPage, dataCount, currentPage, perPage, setPerPage }): JSX.Element => {
  const pageCount = []

  for (let i = 1; i <= 10; i++) {
    pageCount.push(i)
  }

  return (
    <section className="mt-[10px] flex h-[30px] w-full items-center justify-between  ">
      <div className="flex items-center gap-2">
        <ChevronLeft
          className="flex h-[32px] w-[32px] items-center justify-center rounded-[20%] border"
          onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
        />
        <p className="flex h-[32px] w-[32px] items-center justify-center border ">{currentPage}</p> /
        <p className="flex h-[32px] w-[32px] items-center justify-center ">{Math.ceil(dataCount / perPage)}</p>
        <ChevronRight
          onClick={() => currentPage < Math.ceil(dataCount / perPage) && setCurrentPage(currentPage + 1)}
          className="flex h-[32px] w-[32px] items-center justify-center rounded-[20%] border"
        />
      </div>
      <div className="flex items-center gap-6">
        <p>Rows per page</p>
        <Select
          onValueChange={(value) => {
            const currentPage = parseFloat(value)
            setPerPage(currentPage)
          }}
        >
          <SelectTrigger className="w-[60px]">
            <SelectValue placeholder={perPage} />
          </SelectTrigger>
          <SelectContent>
            {pageCount.map((num) => (
              <SelectItem value={num} key={num}>
                {num}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </section>
  )
}

export default Pagination
