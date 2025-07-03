import foto from '#/div.MuiBox-root (1).png'

export default function Card() {
  return (
    <div className="flex items-center bg-white shadow-md rounded-2xl p-4 gap-4 max-w-[400px]">
      <img 
        src={foto} 
        alt="Product" 
        className="w-24 h-24 rounded-xl object-cover"
      />

      <div className="flex flex-col justify-between">
        <div className='flex items-center gap-[20px]'>
          <p className="text-lg font-semibold text-gray-800">Healthcare Erbology</p>
          <p className="text-md font-medium text-[#10B981]">13,153</p>
        </div>
        <div className="mt-2 flex justify-between">
          <p className="text-sm text-[#6C737F]">in Accessories</p>
          <p className="text-sm text-[#6C737F]">in sales</p>
        </div>
      </div>
    </div>
  )
}
