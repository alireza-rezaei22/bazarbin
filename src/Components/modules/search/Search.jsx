import { Search as SearchBox } from "lucide-react";

export default function Search() {

    return (
        <>
            <div className="bg-zinc-100 w-3/5 max-w-80 flex justify-between rounded-full p-2 cursor-pointer">
                <input
                    placeholder="جستوجو"
                    className="w-4/5 outline-0 cursor-pointer"
                />
                <SearchBox/>
            </div>
        </>
    )
}
