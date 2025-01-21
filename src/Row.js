import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "axios";
import YouTube from "react-youtube";

export default function Row({ title, fetchUrl, isLargeRow = false }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const [showModal, setShowModal] = useState(false);

    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    const handleClick = async (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
            setShowModal(false);
        } else {
            try {
                const trailerurl = `https://api.themoviedb.org/3/${
                    movie.media_type === "tv" ? "tv" : "movie"
                }/${movie.id}/videos?api_key=680cbd3215b7e56859bca55ad74789e7&language=en-US`;
                
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
        <div className="row">
            <h2>{title}</h2>
            <div className="rowPosters">
                {movies.map((movie) => (
                    ((isLargeRow && movie.poster_path) ||
                        (!isLargeRow && movie.backdrop_path)) && (
                        <img
                            className={`rowPoster ${isLargeRow && "rowPosterLarge"}`}
                            key={movie.id}
                            src={`${base_url}${
                                isLargeRow ? movie.poster_path : movie.backdrop_path
                            }`}
                            alt={movie.name}
                            onClick={() => handleClick(movie)}
                        />
                    )
                ))}
            </div>
            
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
        </div>
    );
}