import { useState } from "react"
import { HiOutlineArrowUpOnSquare } from "react-icons/hi2"
import { RiArrowLeftDoubleLine, RiArrowRightDoubleLine } from "react-icons/ri"
import sort from "../../assets/sort.png"
import frame from "../../assets/Frame.png"
import image from "../../assets/image.png"
function Sidebar({data}) {
    const [open,setOpen] = useState(false)
  return (
    <div className="flex  justify-between  w-[1440px] m-auto gap-[20px] ">
      {/* 1 */}
      <div className={`${open ? "w-[260px] h-[750px] border-r-2 border-[#E8EAEE] ": "w-[80px] h-[750px] border-r-2 border-[#E8EAEE] " }`}>
            <div className={`${open ? "flex items-center flex justify-center gap-[150px] mt-[15px] " : "flex items-center flex justify-center mt-[15px] "}`} >
                <RiArrowLeftDoubleLine color="#A49EBD" onClick={() => setOpen(open ? !true : false)}/>
                <RiArrowRightDoubleLine color="#A49EBD" onClick={() => setOpen(open ? true : !false)}/>
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
      <div className="w-[100%]">
        <div  className="flex items-center justify-between h-[70px]">
          <h2 className="text-[28px] text-[#000] font-[500]">Dashboard</h2>

          <div className="flex items-center gap-[12px]">
                <button className="bg-[#434CE6] px-[16px] rounded-[8px]  py-[10px] text-[14px] flex items-center text-[#fff] gap-[10px] font-[500]">Export <HiOutlineArrowUpOnSquare color="#fff" fontSize={22} /></button>
                <button className="border-2 border-[#E8EAEE] px-[16px] rounded-[8px]  py-[10px] text-[14px] flex items-center text-[#000] gap-[10px] font-[500]"><img src={sort} alt="" /> Filter</button>
          </div>
        </div>

        <div className="w-[100%] flex justify-between">
          {/* 1 */}
          <div className="w-[704px] h-auto border-2 border-[#E8EAEE] p-[20px] rounded-[8px] flex items-center justify-between">
              <div>
                <h4 className="text-[#121212] mb-[10px] text-[20px] font-[500]">Total Financial</h4>

                <p className="text-[#B9B8BD] mb-[50px] text-[14px] font-[500]">Jan - Jun 2024</p>

                <div className="flex items-center gap-[60px] mb-[10px]">
                  <p className="text-[#B9B8BD]  text-[14px] font-[500]">Total Revenue</p>

                  <img src={frame} alt="frame"  className="w-[64px] h-[30px]"/>
                </div>

                <h2 className="text-[#121212] mb-[14px] text-[36px] font-[700]">$21,831,00</h2>

                <p className="text-[#B9B8BD]  text-[12px] font-[500]">Increase increased 15% from last month</p>
              </div>

              <div>
                  <div className="flex items-center gap-[150px] mb-[30px]">
                    <h3 className="text-[#121212]  text-[20px] font-[500]">Analytics</h3>

                    <button className="border-2 border-[#E8EAEE] px-[16px] rounded-[8px]  py-[10px] text-[14px] flex items-center text-[#000] gap-[10px] font-[500]"><img src={sort} alt="" /> Filter</button>
                  </div>

                  <img src={image} alt="image" className="w-[340px] " />
              </div>
          </div>

          {/* 2 */}
        </div>
      </div>
    </div>
  )
}

export default Sidebar