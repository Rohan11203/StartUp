
const Navbar = () => {
  return (
    <div className="bg-white spectral-bold flex items-center justify-between p-2 m-4 rounded-4xl px-6 shadow-lg">
      <div className="text-pink-500 font-semibold">InShort</div>
      <div className="flex gap-6">
        <div>About</div>
        <div>Value</div>
        <div>Projects</div>
        <div>Contact</div>
      </div>
      <div className="border bg-pink-500 text-white px-4 py-2 rounded-4xl font-semibold">Level up</div>
    </div>
  )
}

export default Navbar
