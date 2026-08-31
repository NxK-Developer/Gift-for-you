
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
export async function GET(req: Request){
  const { searchParams } = new URL(req.url)
  const category = searchParams.get('category')
  const occasion = searchParams.get('occasion')
  const badge = searchParams.get('badge')
  const q = searchParams.get('q')
  const templates = await prisma.template.findMany({
    where: {
      ...(category ? { category: { slug: category } } : {}),
      ...(occasion ? { occasion: { has: occasion } } : {}),
      ...(badge ? { badge } : {}),
      ...(q ? { OR: [{title:{contains:q, mode:'insensitive'}},{subtitle:{contains:q, mode:'insensitive'}}] } : {})
    },
    include: { category: true },
    orderBy: { isFeatured: 'desc' }
  })
  return NextResponse.json(templates)
}
