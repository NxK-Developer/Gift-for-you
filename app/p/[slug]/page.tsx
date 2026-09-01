import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'

export default async function PublicPage({ params }: { params: { slug: string } }) {
  const page = await prisma.page.findUnique({
    where: { slug: params.slug },
    include: { template: true }
  })
  if (!page) return notFound()
  
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold">{page.title || 'Gift Page'}</h1>
      <div className="mt-4" dangerouslySetInnerHTML={{ __html: page.content || '' }} />
    </div>
  )
}
