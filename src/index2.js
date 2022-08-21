import React from 'react'
import ReactDOM from 'react-dom'

import "./index.css"

const firstComic ={
  img: 'https://mangaplus.shueisha.co.jp/drm/title/100017/title_thumbnail_portrait_list/8008.jpg?key=0122761841f5987fe1cf09ae974d7ba8&duration=86400',
  ttl: 'My Hero Academia',
  authors: 'Jun Kosaki'
}

const secondComic ={
  img: 'https://mangaplus.shueisha.co.jp/drm/title/100137/title_thumbnail_portrait_list/147667.jpg?key=1fcf63ef3ed4071da54fba3ba970c13e&duration=86400',
  ttl: 'Kuroko no Basuke',
  authors: 'Junki'
}
// const title = "My Hero Academia";
// const author = "Jun Kosaki";
// const img = "https://mangaplus.shueisha.co.jp/drm/title/100017/title_thumbnail_portrait_list/8008.jpg?key=0122761841f5987fe1cf09ae974d7ba8&duration=86400";

function ComicList(){
  return (
  <>
    <div className="comiclist">
      <Comic image={firstComic.img} title={firstComic.ttl} author={firstComic.authors} rating={4.5}/>
      <Comic image={secondComic.img} title={secondComic.ttl} author={secondComic.authors} />
      <Comic title="Doraemon" arc="School"/>
    </div>
  </>
  )
}


// const Comic = (props) => {
//   const {image, title, author, rating, arc } = props
const Comic = ({image, title, author, rating, arc}) => {
  // const {image, title, author, rating, arc } = props
  return (
    <div>
      <div className="comic">
        <img src={image} alt="" />
        <h1>{title}</h1>
        <h4>{author}</h4>
        <p>{rating}</p>
        <p>{arc}</p>
      </div>
    </div>
  )
}


// const Greeting = () => {
//   return React.createElement('h1', {}, 'hello world')
// }





ReactDOM.render(<ComicList />, document.getElementById('root'));