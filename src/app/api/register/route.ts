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
    enter: false,
    userInfo
  }

  const { isExist } = await checkUser(data.email, data.password, data.userName)

  if (!isExist) {
    databases.createDocument(dbId, collections.userId, ID.unique(), userData)
  }

  return NextResponse.json({ isExist })
}
