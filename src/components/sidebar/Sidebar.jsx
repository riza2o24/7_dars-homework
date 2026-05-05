import { useState } from "react"
import { RiArrowLeftDoubleLine, RiArrowRightDoubleLine } from "react-icons/ri"
function Sidebar({data}) {
    const [open,setOpen] = useState(false)
  return (
    <div className="flex items-center justify-between  w-[1440px] m-auto ">
      <div className={`${open ? "w-[200px] h-[750px] border-r-2 border-[#E8EAEE] ": "w-[80px] h-[750px] border-r-2 border-[#E8EAEE] " }`}>
            <div className={`${open ? "flex items-center flex justify-center gap-[130px] mt-[15px] " : "flex items-center flex justify-center mt-[15px] "}`} >
                <RiArrowLeftDoubleLine onClick={() => setOpen(open ? !true : false)}/>
                <RiArrowRightDoubleLine onClick={() => setOpen(open ? true : !false)}/>
            </div>

            <ul>
                {data.map((item , index) => (
                  <div className="flex justify-center">
                    <div className={`${open ?" w-[160px] h-[50px] flex items-center  mt-[15px] p-[10px] bg-[#ECEDFC] rounded-[8px]" :"  h-[50px] flex items-center mt-[15px]" } `}>
                    <div>
                      <li key={index} className="flex items-center  gap-[7px]">
                        <img src={item.icon} className="w-[25px]" alt="icon" />
                        <a href={item.link} className={`${open ? "block" : "hidden" }`}>{item.title}</a>
                      </li>
                    </div>
                  </div>
                  </div>
                ))

                }
            </ul>

            
      </div>
    </div>
  )
}

export default Sidebar