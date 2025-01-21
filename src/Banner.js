import React, { useEffect, useState } from "react";
import "./Banner.css";
import requests from "./Requests";
import axios from "axios";
import YouTube from "react-youtube";

export default function Banner() {
    const [movie, setMovie] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    const handlePlayClick = async () => {
        if (trailerUrl) {
            setTrailerUrl("");
            setShowModal(false);
        } else {
            try {
                const trailerurl = `https://api.themoviedb.org/3/tv/${movie.id}/videos?api_key=680cbd3215b7e56859bca55ad74789e7&language=en-US`;
                
                const response = await axios.get(trailerurl);
                if (response.data.results.length > 0) {
                    // Find the first trailer or teaser
                    const trailer = response.data.results.find(
                        video => video.type === "Trailer" || video.type === "Teaser"
                    );
                    setTrailerUrl(trailer?.key || "");
                    setShowModal(true);
                }
            } catch (error) {
                console.error("Error fetching trailer:", error);
            }
        }
    };

    return (
        <header
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center",
            }}
        >
            <div className="bannerContents">
                <h1 className="bannerTitle">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="bannerButtons">
                    <button className="bannerButton" onClick={handlePlayClick}>
                        Play
                    </button>
                    <button className="bannerButton">My List</button>
                </div>
                <h1 className="bannerDescription">
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>

            <div className="bannerFadeButton" />

            {showModal && trailerUrl && (
                <div className="trailerModal">
                    <div className="modalContent">
                        <button
                            className="closeModal"
                            onClick={() => {
                                setTrailerUrl("");
                                setShowModal(false);
                            }}
                        >
                            ×
                        </button>
                        <YouTube videoId={trailerUrl} opts={opts} />
                    </div>
                </div>
            )}
        </header>
    );
}