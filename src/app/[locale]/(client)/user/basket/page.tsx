import Basket from '@sections/Basket/Basket'
import { NextPage } from 'next'

interface IUserBasketPage {}

const UserBasketPage: NextPage = (): JSX.Element => {
  return (
    <main>
      <Basket />
    </main>
  )
}

export default UserBasketPage
