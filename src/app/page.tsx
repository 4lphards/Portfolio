export default function Page() {
  return (
    <div className="bg-black text-white">
    <>
      <Main />
    </>
    </div>
  )
}

function Main() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold">Maulana Yusuf</h1>
      <p className="text-2xl">A software engineer based in Indonesia</p>
    </div>
  )
}
