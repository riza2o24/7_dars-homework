import icon from "../../assets/Vector.png"
import Vector111 from "../../assets/Vector111.png"
import notification from "../../assets/notification.png"

function Header({logo}) {
  return (
    <div className=' h-[70px] w-[1440px] m-auto flex items-center justify-between border-b-2 border-[#E8EAEE] '>
      <img src={logo} alt="logo" className="w-[150px] h-[40px]" />

      <div className='flex items-center gap-[25px]'>
        <div className='flex items-center gap-[12px]'>
            <img src={icon} alt="" />
            <p className='text-[#B9B8BD] text-[14px] font-[500]'>Search something</p>
        </div>

        <img src={Vector111} alt="vetor" />

        <img src={notification} alt="notification" />

        <div className="flex items-center gap-[12px] ">
            <div className="w-[45px] h-[45px] bg-[#434CE6] rounded-[50%]">
            </div>
            <div>
                <p className="text-[16px] text-[#000] font-[500]">Jack Susanto</p>
                <p className="text-[12px] text-[#B9B8BD] font-[400]">jacksus1782@gmail.com</p>
            </div>
        </div>
      </div>
    </div>

    
  )
}

export default Header