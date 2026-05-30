"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SelectSection = () => {
    const searchParams = useSearchParams();
    const router = useRouter()
    const pathName = usePathname()
    const handelCatagory = (catagory) => {
        const params = new URLSearchParams(searchParams)
        if (catagory) {
            params.set("catagory", catagory)
        } else {
            params.delete("catagory")
        }
        router.push(`${pathName}?${params.toString()}`)
    }
    return (
        <select defaultValue=""
            className="select select-neutral"
            onChange={(e) => handelCatagory(e.target.value)}>
            <option value=''> Select one </option>
            <option value='dish' > Dish </option>
            <option value='burger'> Barger </option>
            <option value='biriyani'> Birani</option>
            <option value='beverage'> Beverage</option>
        </select>
    );
};

export default SelectSection;