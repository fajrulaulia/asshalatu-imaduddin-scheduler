import React from "react";
import AppBar from "../components/AppBarComponent";

function About() {
    return (
        < React.Fragment>
            <AppBar />
            <div className="items-center pt-10">
                <div className="flex flex-wrap items-center justify-center">
                    <div className="container max-w-lg bg-white rounded m-12">
                        <div className="flex lg:flex-row flex-col justify-start items-center px-5 -mt-12 mb-5">
                            <span className="block relative h- w-32">

                                <img alt="fajrul"
                                    src="https://media-exp1.licdn.com/dms/image/C5603AQFRylAH_K7J7Q/profile-displayphoto-shrink_400_400/0/1650735502584?e=1661990400&v=beta&t=TxQfV69ZIBqskGQsVAv0FtOPTG14K8cFolLKhN9ws-I"
                                    className="mx-auto object-cover rounded-full h-24 w-24 bg-white p-1" />
                            </span>
                            <div>
                                <h2 className="text-3xl font-bold text-green-800">Fajrul Aulia <span className="text-gray-400 mt-2 font-thin">فجر اوليا</span></h2>
                                <p className="text-gray-400 mt-2">Fullstack Developer</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="px-7 mb-8">
                                <p className="mt-2 text-gray-600 text-justify">Seorang fullstack developer yang berpengalaman dalam membangun perangkat lunak berbasis web application, microservice dan mobile, berkecimpung di startup selama 3 tahun di bidang Fintech, Collecting dan Office Automation, baik sebagai fulltime worker, freelance dan paralel keduanya..</p>
                                <div
                                    onClick={() => window.location.href = "mailto:devel.fajrul.aulia@gmail.com"}
                                    className="justify-center px-4 py-2 cursor-pointer bg-green-900 max-w-min mx-auto mt-8 rounded-lg text-gray-300 hover:bg-green-800 hover:text-gray-100">
                                    devel.fajrul.aulia@gmail.com
                                </div>
                                <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-8">
                                    <button
                                        onClick={() => window.location.href = "https://www.linkedin.com/in/fajrulaulia/"}
                                        className="text-green-900 hover:text-green-700 p-1 sm:p-2  inline-flex items-center">
                                        <svg className="w-7 h-7 fill-current" role="img" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path
                                                    d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055">
                                                </path>
                                            </g>
                                        </svg>
                                    </button>
                                    <button
                                        onClick={() => window.location.href = "https://www.github.com/fajrulaulia/"}
                                        className="text-green-900 hover:text-green-700 p-1 sm:p-2  inline-flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 fill-current" role="img" viewBox="0 0 24 24" > <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"></path> </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}


export default About