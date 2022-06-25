import Axios from 'axios'


interface SchedulerByCodeCityIface {
    lat: number;
    lon: number;
    lintang: string;
    bujur: string;
}



export default {

    GetAllCities: () => {
        if (localStorage.getItem("cities_cache") === null) {
            Axios.get("https://api.myquran.com/v1/sholat/kota/semua").then((res: any) => {
                if (res.data && res.data.length > 0) {
                    const datas = {
                        "datetime": Date.now(),
                        "data": res.data
                    }
                    localStorage.setItem("cities_cache", JSON.stringify(datas))
                }
            }).catch((err) => {
                console.log("error get all cities service", err)
            })
        }
    },

    GetSchedulerByCodeCity: (id: string) => {
        var config = {
            method: 'get',
            url: `https://api.myquran.com/v1/sholat/jadwal/${id}/2022/06/26`,
            headers: {}
        };

        return new Promise<SchedulerByCodeCityIface>((resolve, reject) => {
            Axios(config)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    reject(err)
                });

        })
    }
}