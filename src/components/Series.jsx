import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Series = () => {
    const [series, setSeries] = useState([])

    const apiURL = `https://gateway.marvel.com:443/v1/public/series?limit=64&offset=20&apikey=ff8f354afb17ac295466419254ed9742`;

    const getMarvelSeries = async () => {
        try {
            const res = await axios.get(apiURL);
            const data = res.data;
            const seriesData = data?.data?.results;
            setSeries(seriesData)
            console.log(seriesData)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getMarvelSeries()
    }, [])

    return (
        <div className="series">
            <h4>Marvel Series</h4>
            <div className="series-list">
                {series.map((serie) => {
                    const { id, title, thumbnail } = serie;
                    return (
                        <div className='serie' key={id}>
                            <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={title} />
                            <div className='serie-info'>
                                <h5>Serie: {title}</h5>
                            </div>
                        </div>
                    )
                }
                )
                }
            </div>
        </div>
    )
}

export default Series