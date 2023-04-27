import PrimaryLayout from '@/components/Layouts/PrimaryLayout'
import { catchApi } from '@/api/payload'

export default async function Pages({params: { id }}) {
  const data = await catchApi({path: '/api/paginas', id, draft: true})
  return (
    <PrimaryLayout data={data} />
  )
}
