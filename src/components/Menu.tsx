import { FiMenu } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa";
import { GiBackwardTime } from "react-icons/gi";

const Menu = () => {
    return (
        <div className="flex flex-col items-center py-6 gap-8">
            <div>
                <FiMenu
                    color="#70757a"
                    size={18}
                    className="cursor-pointer"
                />
            </div>

            <div className="flex flex-col items-center gap-1 cursor-pointer">
                <FaRegBookmark
                    color="#70757a"
                    size={18}
                />
                <p className="text-[#70757a] text-[10px]">Guardado</p>
            </div>

            <div className="flex flex-col items-center gap-1 cursor-pointer">
                <GiBackwardTime
                    color="#70757a"
                    size={20}
                />
                <p className="text-[#70757a] text-[10px]">Recientes</p>
            </div>
        </div>
    )
}

export default Menu