import React from "react";
import AppBar from "../components/AppBarComponent";

function About() {
    return (
        < React.Fragment>
            <AppBar />
            <p className="text-center text-2xl">About me</p>
            <div className="py-12 md:px-72 px-12 grid grid-cols-2">
                <p>Nama </p><p>: Fajrul Aulia</p>
                <p>Github Profile </p><p>: <a href="http://github.com/fajrulaulia">http://github.com/fajrulaulia</a></p>
                <p>API URL</p><p> : <a href="https://api.myquran.com">https://api.myquran.com</a></p>
                <p>Message </p><p>: Aplikasi ini dikembangkan terus menerus dan didedikasikan untuk saya sendiri dan orang lain</p>
            </div>
        </React.Fragment>
    )
}


export default About