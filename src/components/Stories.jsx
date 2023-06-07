import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import stimg from '../assets/story.jpeg'
import spider from '../assets/spider.jpg'

const Stories = () => {
  const [stories, setStories] = useState([])

  const apiURL = `https://gateway.marvel.com:443/v1/public/stories?limit=10&offset=20&apikey=ff8f354afb17ac295466419254ed9742`;

  const getMarvelStories = async () => {
    try {
      const res = await axios.get(apiURL);
      const data = res.data;
      const storiesData = data?.data?.results;
      setStories(storiesData)
      console.log(storiesData)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getMarvelStories();
    document.title = "Stories";
  }, [])

  return (
    <div className="stories">
      <h4>Marvel Stories</h4>
      <div className="stories-list">
        {stories.map((story) => {
          const { id, title } = story;

          return (
            <div className='story' key={id}>
              {/* <img src={spider} alt={title} /> */}
              <div className='story-info'>
                <h5><span>Story:</span> {title}</h5>
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

export default Stories