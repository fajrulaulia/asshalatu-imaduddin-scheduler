import React from 'react';
import AppBar from '../components/AppBarComponent';
import Search from '../components/SearchAutoComponent';
import ShalatTableScheduler from '../components/ShalatTableSheduler';
import GetSchedulerByCodeCity from '../services/CityService'
interface KotaSearchIface {
    id: string;
    lokasi: string;
}


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
function Home() {

    const [searchResult, SetSearchResult] = React.useState<Array<KotaSearchIface>>([])
    const [dataResult, SetDataResult] = React.useState<Array<SchedulerByCodeCityIface>>([])
    const [dataKota, SetDataKota] = React.useState<String>("")

    const SearchHandler = (e: any) => {
        if (e.target.value.length > 0) {
            const result = JSON.parse(localStorage.getItem("cities_cache") || "")
                .data.filter((word: any) => word.lokasi.toLowerCase().includes(e.target.value.toLowerCase())) || [];
            SetSearchResult(result)


        } else {
            SetSearchResult([])
        }
    }
    const SetHandler = (v: string) => {
        GetSchedulerHandler(v)
        SetSearchResult([])

    }

    React.useEffect(() => {
        GetSchedulerHandler("0119")
    }, [])


    const GetSchedulerHandler = (id: string) => {
        GetSchedulerByCodeCity.GetSchedulerByCodeCity(id).then((res: any) => {
            SetDataResult([res.data?.jadwal])
            SetDataKota(res.data.lokasi)
        }).catch((err: any) => {
            console.log(err)
        })
    }

    return (
        <div className='flex flex-col'>
            <div>
                <AppBar />
            </div>

            <div className='flex flex-col items-center justify-center px-10 lg:px-40 overflow-x-auto'>
                <Search passId={(SetHandler)} result={searchResult} onChange={SearchHandler} />

                <p className='font-bold py-4 text-2xl'>Untuk wilayah {dataKota} dan sekitarnya</p>
                <ShalatTableScheduler src={dataResult} range="1month" />
            </div>
            <div>

            </div>
        </div>
    );
}

export default Home;
