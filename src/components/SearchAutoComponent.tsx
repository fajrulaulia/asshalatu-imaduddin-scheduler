import React from "react";

interface KotaSearchIface {
    id: string;
    lokasi: string;
}
interface SearchProps {
    onChange: Function,
    result: Array<KotaSearchIface>
    passId: Function
}

function Search({ onChange, result, passId }: SearchProps) {

    return (
        <div className='my-5 text-gray-700 flex flex-col w-full py-5'>
            <div>
                <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input onChange={e => onChange(e)} type="search" className="block p-4 pl-10 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Cari Kota" required />
                    {/* <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-500 font-medium rounded-lg text-sm px-4 py-2">Search</button> */}
                </div>

            </div>
            <div>
                {(result.length > 0) && <p className="font-semibold my-4">Pencarian data yang Antum maksud: </p>}
                <div className="flex flex-row flex-wrap">
                    {
                        result && (result.length > 0) && result.slice(0, 15).map((v, id) => {
                            return (
                                <p onClick={()=>passId(v.id)} className="py-2 px-3 text-white rounded-md m-2 bg-blue-700 cursor-pointer" key={id}>{v.lokasi}</p>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}


export default Search