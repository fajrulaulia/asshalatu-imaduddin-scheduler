import Axios from 'axios'


interface SchedulerByCodeCityIface {
    lat: number;
    lon: number;
    lintang: string;
    bujur: string;
}



const Service: any = {

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
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();

        const ymformat = yyyy+"/"+mm+"/"+dd

        var config = {
            method: 'get',
            url: `https://api.myquran.com/v1/sholat/jadwal/${id}/${ymformat}`,
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

export default Service