import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-24 bg-gray-300">
      <Link href={'/employees/1'}>社員1</Link>
      <Link href={'/employees/2'}>社員2</Link>
      <Link href={'/employees/3'}>社員3</Link>
    </main>
  )
}
