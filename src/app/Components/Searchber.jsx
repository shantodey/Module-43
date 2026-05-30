"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const Searchber = () => {
    const [searchingImput, setSearchingInput] = useState("");
    const searchParams = useSearchParams();
    const router = useRouter()
    const pathName = usePathname()

    const formdata = () => {
        const params = new URLSearchParams(searchParams)
        if (searchingImput) {
            params.set("search", searchingImput)
        } else {
            params.delete("search")
        }
        router.push(`${pathName}?${params.toString()}`)
        console.log(params);
        console.log(searchingImput);
    }

    return (

        <div className="flex gap-3">
            <input type="text" value={searchingImput}
                onChange={e => setSearchingInput(e.target.value)}
                placeholder="Type here" className="input focus:border-none focus:outline-yellow-50 " />
            <button className="btn btn-outline capitalize" onClick={formdata} > submit</button>
        </div>

    );
};

export default Searchber;