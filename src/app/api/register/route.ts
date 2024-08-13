import { NextRequest, NextResponse } from 'next/server'
import { checkUser } from '../../../utls/functions'
import { collections, databases, dbId, ID } from '@libs/appwrite/config'

export async function POST(request: NextRequest) {
  const data = await request.json()

  if (!data.email || !data.password) {
    return NextResponse.json({ error: 'Email and password are required' })
  }

  const userInfo: any = JSON.stringify({
    fullName: data.fullName,
    userName: data.userName,
    contacts: '',
    address: '',
    avatar: '',
    avatarId: ''
  })

  const userData: any = {
    email: data.email,
    password: data.password,
    enter: true,
    userInfo
  }

  const { isExist } = await checkUser(data.email, data.password, data.userName)
  let id = ''
  if (!isExist) {
    id = (await databases.createDocument(dbId, collections.userId, ID.unique(), userData)).$id

    await databases.createDocument(dbId, collections.basketId, ID.unique(), { user: id, productsList: JSON.stringify([]) })
  }

  return NextResponse.json({ isExist, id })
}
