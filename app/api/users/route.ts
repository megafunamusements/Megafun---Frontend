import { NextResponse } from 'next/server'
import { query } from '@/lib/db'

// GET /api/users
export async function GET() {
  try {
    const result = await query('SELECT * FROM users ORDER BY id ASC')
    return NextResponse.json(result.rows)
  } catch (error) {
    console.error('GET /api/users error:', error)
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 })
  }
}

// POST /api/users
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email } = body

    if (!name || !email) {
      return NextResponse.json({ error: 'name and email are required' }, { status: 400 })
    }

    const result = await query(
      'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
      [name, email]
    )
    return NextResponse.json(result.rows[0], { status: 201 })
  } catch (error) {
    console.error('POST /api/users error:', error)
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 })
  }
}
