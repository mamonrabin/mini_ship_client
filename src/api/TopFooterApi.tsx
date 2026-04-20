import { BsHandbag, BsTruck } from "react-icons/bs";
import { GoCheckCircle } from "react-icons/go";
import { IoRefresh } from "react-icons/io5";

export const footerList = [
    {
        id:1,
        title:"DELIVERY IN 24 HOUR",
        icon: <BsTruck size={24} />,
        descriptiob:"Fastest Delivery in Bangladesh"
    },
    {
        id:2,
        title:"Satisfied or refunded",
        icon:<IoRefresh size={24} />
,
        descriptiob:"Not happy? we are here 24/7"
    },
    {
        id:3,
        title:"Latest trend",
        icon:<BsHandbag size={24} />,
        descriptiob:"New arrival every week"
    },
    {
        id:4,
        title:"PROUDLY FIRST",
        icon:<GoCheckCircle size={24} />,
        descriptiob:"First & Number 1 since 2025"
    },
]