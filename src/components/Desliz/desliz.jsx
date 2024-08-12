import React from "react";
import playerData from "../players/players";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./desliz.css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Jugadores() {
    const playersByPosition = playerData.reduce((acc, player) => {
        if (!acc[player.position]) {
            acc[player.position] = [];
        }
        acc[player.position].push(player);
        return acc;
    }, {});

    const slides = Object.keys(playersByPosition).map((position, index) => (
        <SwiperSlide key={index}>
            <div className="grid-container">
                {playersByPosition[position].map((player, idx) => (
                    <div key={idx} className="grid-item">
                        <img src={player.image} alt={player.name} className="Jugadores" />
                        <h2>{player.name}</h2>
                    </div>
                ))}
            </div>
            <br />
            <h1> &lt;-- DESLIZAR --&gt; </h1>
        </SwiperSlide>
    ));

    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={1} 
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {slides}
        </Swiper>
    );
}

export default Jugadores;