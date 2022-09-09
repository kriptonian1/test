import { house, whatsapp } from './assets'
import Btns from './components/Btns'
import Navbar from './components/Navbar'


function App() {

  return (
    <div>
      <Navbar />
      <div className='m-10'>
        <Btns text="For Rent" />
        <div className='text-xl my-4'>
          2BHK Apartment for Sale in Newtown, Kolkata, West Bengal
        </div>

        <div className='flex  space-x-12 pt-7'>
          <img src={house} alt="huse" />
          <div className='grid grid-cols-2 gap-12'>
            <img className='w-56' src={house} alt="huse" />
            <img className='w-56' src={house} alt="huse" />
            <img className='w-56' src={house} alt="huse" />
            <img className='w-56' src={house} alt="huse" />
          </div>
        </div>

        <div className='text-[#341F87] text-2xl pt-7'>
          ₹ 25,000
        </div>

        <div>
          <div>
            SP Sukhobrishti Ln, Action Area III, Newtown, Kolkata, West Bengal 700135, India
          </div>
          <button className='bg-[#1FC87F] px-4 py-3 rounded-xl shadow-md'> 
            <img src={whatsapp} alt="whatsapp" />
          </button>
          <button className='bg-[#1FC87F] px-4 py-3 rounded-xl shadow-md'> 
            <img src={whatsapp} alt="whatsapp" />
          </button>
        </div>


      </div>

    </div>
  )
}

export default App
