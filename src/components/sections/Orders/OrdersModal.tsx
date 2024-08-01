import Table from '@sections/Admin/Table'
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@ui/dialog'
import UserPagination from '../Paginations/UserPagination'
import { useState } from 'react'

interface IOrdersModal {
  trigger: any
  header: string[]
  body: any[]
}

const OrdersModal: React.FC<IOrdersModal> = ({ trigger, header, body }): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1)
  const [perPage, setPerPage] = useState(5)

  const filteredData = body.slice((currentPage - 1) * perPage, currentPage * perPage)

  return (
    <Dialog>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent className="flex h-[500px] max-w-[800px] flex-col justify-between overflow-auto rounded-md bg-white mmd:w-[95%]">
        <Table headers={header} body={filteredData} />
        <DialogTitle></DialogTitle>
        <UserPagination setCurrentPage={setCurrentPage} dataCount={body.length} currentPage={currentPage} perPage={perPage} setPerPage={setPerPage} />
        <DialogDescription></DialogDescription>
      </DialogContent>
    </Dialog>
  )
}

export default OrdersModal
