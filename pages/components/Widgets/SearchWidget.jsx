import SearchIcon from "../Icons/SearchIcon";

export default function SearchWidget(className) {
    return (
        <form className={`${className} w-full form`}>
            <div className="flex relative items-center bg-gray-200 py-1 px-5 rounded-full border shadow-sm">
                <div>
                    <SearchIcon className="size-4" />
                </div>

                <input className="bg-gray-200 ml-2 w-full md:w-[300px] placeholder:text-gray-500 outset-none text-sm pt-1.5 px-0 pb-2" placeholder="Search restaurants or food" />
            </div>
        </form>

    )
}
