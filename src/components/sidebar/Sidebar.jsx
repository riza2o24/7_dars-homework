import { useState } from "react"
import { RiArrowLeftDoubleLine, RiArrowRightDoubleLine } from "react-icons/ri"
function Sidebar({data}) {
    const [open,setOpen] = useState(false)
  return (
    <div className="flex items-center justify-between  w-[1440px] m-auto ">
      {/* 1 */}
      <div className={`${open ? "w-[220px] h-[750px] border-r-2 border-[#E8EAEE] ": "w-[80px] h-[750px] border-r-2 border-[#E8EAEE] " }`}>
            <div className={`${open ? "flex items-center flex justify-center gap-[150px] mt-[15px] " : "flex items-center flex justify-center mt-[15px] "}`} >
                <RiArrowLeftDoubleLine onClick={() => setOpen(open ? !true : false)}/>
                <RiArrowRightDoubleLine onClick={() => setOpen(open ? true : !false)}/>
            </div>

            <ul>
                {data.map((item , index) => (
                  <div className="flex justify-center">
                    <div className={`${open ?" w-[180px] h-[50px] flex items-center  mt-[15px] p-[10px] bg-[#ffffff] rounded-[8px]" :"  h-[50px] flex items-center mt-[15px]" } `}>
                    <div>
                      <li key={index} className="flex items-center  gap-[12px]">
                        <img src={item.icon} className="w-[25px]" alt="icon" />
                        <a href={item.link} className={`${open ? "block text-[16px] text-[#A49EBD] font-[500]" : "hidden" }`}>{item.title}</a>
                      </li>
                    </div>
                  </div>
                  </div>
                ))

                }
            </ul>

            
      </div>

      {/* 2 */}
      <div>
        
      </div>
    </div>
  )
}

export default Sidebar