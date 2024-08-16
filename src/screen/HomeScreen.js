import React from "react";
import Nav from "../Nav"
import Banner from "../Banner";
import requests from "../Requests";
import Row from "../Row";
import "./HomeScreen.css"

export default function HoemScreen(){
    return(
        <div className="homescreen">
            <Nav />

            <Banner />

            <Row
                title="NETFLIX ORIGINALS"
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
            <Row title="Documentarires" fetchUrl={requests.fetchDocumentaries}/>
        </div>
    )
}