import React from "react";

interface SchedulerByCodeCityIface {
    tanggal: string;
    imsak: string;
    subuh: string;
    terbit: string;
    dhuha: string;
    dzuhur: string;
    ashar: string;
    maghrib: string;
    isya: string;
}

interface TableProps {
    src: SchedulerByCodeCityIface
}


function About({ src }: TableProps) {
    return (
        < React.Fragment>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full lg:w-2/3">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-yellow-300  uppercase bg-green-700">
                        <tr>
                            <th scope="col" className="px-6 py-3">Nama Waktu</th>
                            <th scope="col" className="px-6 py-3 text-center">Waktu Pelaksanaan Shalat</th>
                        </tr>
                    </thead>
                    <tbody>

                        {/* <tr className="bg-white border-b  dark:border-gray-700">
                            <td className="px-6 py-3 font-medium  whitespace-nowrap">{src.tanggal}</td>
                            <td className="px-6 py-3">{src.imsak}</td>
                            <td className="px-6 py-3">{src.subuh}</td>
                            <td className="px-6 py-3">{src.terbit}</td>
                            <td className="px-6 py-3">{src.dhuha}</td>
                            <td className="px-6 py-3">{src.dzuhur}</td>
                            <td className="px-6 py-3">{src.ashar}</td>
                            <td className="px-6 py-3">{src.maghrib}</td>
                            <td className="px-6 py-3">{src.isya}</td>
                        </tr> */}


                        <tr className="bg-white border-b font-semibold dark:border-gray-700">
                            <td className="px-6 py-3 font-medium  whitespace-nowrap">Tanggal Pelaksanaan</td>
                            <td className="px-6 py-3 text-center">{src.tanggal}</td>
                        </tr>
                        <tr className="bg-white border-b  dark:border-gray-700">
                            <td className="px-6 py-3 font-medium  whitespace-nowrap">Imsak</td>
                            <td className="px-6 py-3 text-center">{src.imsak}</td>
                        </tr>
                        <tr className="bg-white border-b  dark:border-gray-700">
                            <td className="px-6 py-3 font-medium  whitespace-nowrap">Shubuh</td>
                            <td className="px-6 py-3 text-center">{src.subuh}</td>
                        </tr>
                        <tr className="bg-white border-b  dark:border-gray-700">
                            <td className="px-6 py-3 font-medium  whitespace-nowrap">Terbit</td>
                            <td className="px-6 py-3 text-center">{src.terbit}</td>
                        </tr>
                        <tr className="bg-white border-b  dark:border-gray-700">
                            <td className="px-6 py-3 font-medium  whitespace-nowrap">Dhuha</td>
                            <td className="px-6 py-3 text-center">{src.dhuha}</td>
                        </tr>
                        <tr className="bg-white border-b  dark:border-gray-700">
                            <td className="px-6 py-3 font-medium  whitespace-nowrap">Dzuhur</td>
                            <td className="px-6 py-3 text-center">{src.dzuhur}</td>
                        </tr>
                        <tr className="bg-white border-b  dark:border-gray-700">
                            <td className="px-6 py-3 font-medium  whitespace-nowrap">Ashar</td>
                            <td className="px-6 py-3 text-center">{src.ashar}</td>
                        </tr>
                        <tr className="bg-white border-b  dark:border-gray-700">
                            <td className="px-6 py-3 font-medium  whitespace-nowrap">Magrib</td>
                            <td className="px-6 py-3 text-center">{src.maghrib}</td>
                        </tr>
                        <tr className="bg-white border-b  dark:border-gray-700">
                            <td className="px-6 py-3 font-medium  whitespace-nowrap">Isya</td>
                            <td className="px-6 py-3 text-center">{src.isya}</td>
                        </tr>


                    </tbody>
                </table>
            </div>
        </React.Fragment >
    )
}


export default About