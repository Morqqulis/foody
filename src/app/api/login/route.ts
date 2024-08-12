import { collections, databases, dbId } from '@libs/appwrite/config'
import { NextRequest, NextResponse } from 'next/server'
import { checkUser } from '../../../utls/functions'

export async function POST(request: NextRequest) {
  const { email, password } = await request.json()
  if (!email || !password) {
    return NextResponse.json({ error: 'Email and password are required' })
  }

  const { $id } = await checkUser(email, password)

  if (!$id) {
    return NextResponse.json({ error: 'User not found' })
  }

  await databases.updateDocument(dbId, collections.userId, $id, { enter: true })

  return NextResponse.json({ $id })
}
