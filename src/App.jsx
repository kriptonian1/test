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

        <div className='flex justify-between items-center'>
          <div>
            SP Sukhobrishti Ln, Action Area III, Newtown, Kolkata, West Bengal 700135, India
          </div>
          <div className='flex justify-center items-center space-x-5'>
            <button className='bg-[#1FC87F] px-4 py-3 rounded-xl shadow-md'>
              <img src={whatsapp} alt="whatsapp" />
            </button>
            <button className='bg-[#7F56D9] text-white px-4 py-3 rounded-xl shadow-md'>
              Contact Owner
            </button>
          </div>

        </div>

        <div className=' flex justify-center space-x-4 text-xl pt-5'>
          <div className='text-[#341F87] border border-b-indigo-800'>
            Overview
          </div>
          <div>
            Details
          </div>
          <div>
            Features &  Amenities
          </div>
          <div>
            Nearby
          </div>
        </div>


        <div className=' text-2xl text-[#341F87]'>
          Overview
        </div>
        <div>
          Property taxes are charged by local government entities, such as KMC, and are due by <br />
          the owner of the property. The amount of KMC property tax that must be paid may <br />
          vary. Thus, it depends on the location and a number of other criteria. KMC approved <br />
          the new Unit Area Assessment (UAA) mechanism for calculating property taxes in <br />
          March 2017.
        </div>

      </div>

    </div>
  )
}

export default App
