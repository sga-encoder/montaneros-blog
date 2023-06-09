import './globals.css'
import PrimaryLayout from '@/components/Layouts/PrimaryLayout'
import { catchApi } from '@/api/payload'

export default async function Home() {
  const data = await catchApi({path: '/api/paginas', id: 'home', draft: true})
  return (
    <PrimaryLayout data={data} />
  )
}

