import React from 'react'
import ReactDOM from 'react-dom'

import "./index.css"

const comics = [
    {
        img: 'https://mangaplus.shueisha.co.jp/drm/title/100017/title_thumbnail_portrait_list/8008.jpg?key=0122761841f5987fe1cf09ae974d7ba8&duration=86400',
        ttl: 'My Hero Academia',
        authors: 'Jun Kosaki',
    },
    {
        img: 'https://mangaplus.shueisha.co.jp/drm/title/100137/title_thumbnail_portrait_list/147667.jpg?key=1fcf63ef3ed4071da54fba3ba970c13e&duration=86400',
        ttl: 'Kuroko no Basuke',
        authors: 'Junki',
    },
    {
        img: 'https://mangaplus.shueisha.co.jp/drm/title/100034/title_thumbnail_portrait_list/8059.jpg?key=91510732bb8d746a924a0f80b5c2ab65&duration=86400',
        ttl: 'Jujutsu Kaisen',
        authors: 'Gojo',
    },
];

function ComicList(){
  return (
  <>
    <div className="comiclist">
      {comics.map((comic)=>{
        //   const {img, ttl, authors} = comic;
          return (
              <Comic comic2={comic}></Comic>
            //   <div>
            //       <h3>{ttl}</h3>
            //       <h6>{authors}</h6>
            //   </div>
          )
      })}
    </div>
  </>
  )
}


const Comic = (props) => {
  const {img, ttl, authors, rating, arc } = props.comic2
// const Comic = ({image, title, author, rating, arc}) => {
  // const {image, title, author, rating, arc } = props
  return (
    <div>
      <div className="comic">
        <img src={img} alt="" />
        <h1>{ttl}</h1>
        <h4>{authors}</h4>
        <p>{rating}</p>
        <p>{arc}</p>
      </div>
    </div>
  )
}



ReactDOM.render(<ComicList />, document.getElementById('root'));