import React from "react";

type RangeEnum = '1day' | '1week' | '1month'

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
    range: RangeEnum,
    src: Array<SchedulerByCodeCityIface>
}


function About({ range, src }: TableProps) {
    return (
        < React.Fragment>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-yellow-300  uppercase bg-green-700">
                        <tr>
                            <th scope="col" className="px-6 py-3">Tanggal</th>
                            <th scope="col" className="px-6 py-3">Imsak</th>
                            <th scope="col" className="px-6 py-3">Shubuh</th>
                            <th scope="col" className="px-6 py-3">Terbit</th>
                            <th scope="col" className="px-6 py-3">Dhuha</th>
                            <th scope="col" className="px-6 py-3">Dzuhur</th>
                            <th scope="col" className="px-6 py-3">Ashar</th>
                            <th scope="col" className="px-6 py-3">Margib</th>
                            <th scope="col" className="px-6 py-3">Isya</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            src && src.map((value,key) => (
                                <tr key={key} className="bg-white border-b  dark:border-gray-700">
                                    <td className="px-6 py-4 font-medium  whitespace-nowrap">{value.tanggal}</td>
                                    <td className="px-6 py-4">{value.imsak}</td>
                                    <td className="px-6 py-4">{value.subuh}</td>
                                    <td className="px-6 py-4">{value.terbit}</td>
                                    <td className="px-6 py-4">{value.dhuha}</td>
                                    <td className="px-6 py-4">{value.dzuhur}</td>
                                    <td className="px-6 py-4">{value.ashar}</td>
                                    <td className="px-6 py-4">{value.maghrib}</td>
                                    <td className="px-6 py-4">{value.isya}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </React.Fragment >
    )
}


export default About