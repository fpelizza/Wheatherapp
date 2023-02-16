import React from "react";
import Image from "next/image";

const Weather = ({ data }) => {
    return (
        <div className="relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-3">
            <div className="relative flex justify-between pt-12 text-white bg-black/30 rounded-md p-10 mt-8">
                <div className="flex flex-col items-center">
                    <Image
                        src={"http://" + data.current.condition.icon.slice(2)}
                        alt="/"
                        width="100"
                        height="100"
                    />
                    <p className="text-2xl">{data.current.condition.text}</p>
                </div>
                <p className="text-8xl mt-4">{data.current.temp_c}&#176;</p>
            </div>
            <div className="bg-black/30 relative p-12 rounded-md">
                <p className="text-2xl text-center pb-6 text-white">
                    Wheater in {data.location.name}
                </p>
                <div className="flex flex-row justify-between text-center text-white">
                    <div>
                        <p className="font-bold text-2xl">Feels like</p>
                        <p className="text-xl">
                            {data.current.feelslike_c.toFixed(0)}&#176;
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-2xl">Humidity</p>
                        <p className="text-xl">{data.current.humidity}</p>
                    </div>
                    <div>
                        <p className="font-bold text-2xl">Winds</p>
                        <p className="text-xl">{data.current.wind_kph} km/h</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Weather;
