import Image from "next/image"

import { MdOutlineWorkspacePremium } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

export default function Card() {
    return (
        <section>
            <div className="bg-[#292830] w-85 h-135 mx-auto mt-20 rounded-3xl">
                <div>
                    <Image src="/image 1.png" alt="User Image" width={320} height={50} className="mx-auto pt-2 rounded-4xl"/>
                </div>
                <div>
                    <div className="flex gap-1 items-center px-5 pt-5 text-xl">
                        <p className="text-white font-bold">Andrea Micheal</p>
                        <MdOutlineWorkspacePremium  className="text-white" size={24}/>
                    </div>
                    <div>
                        <p className="font-medium text-stone-400 px-5">Seeking Co-Founder</p>
                    </div>
                </div>

                <div className="flex  mt-5">
                    <div className="w-20 h-20 bg-red-600 m-auto rounded-full flex justify-center items-center">
                        <IoClose size={24} className="text-white"/>
                    </div>
                    <div className="w-20 h-20 bg-green-600 m-auto rounded-full flex justify-center items-center">
                        <FaCheck className="text-white" size={24}/>
                    </div>
                </div>
            </div>
        </section>
    )
}