import React, { Component } from "react";
import Slider from "react-slick";
import './assets/app.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Photo = [
    {
        name: "Photo 1",
        url: "https://images.unsplash.com/photo-1613390392235-9f177dba4d1b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=748&q=80"
    },
    {
        name: "Photo 2",
        url: "https://images.unsplash.com/photo-1613330418354-0af9539535d7?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDExfGhtZW52UWhVbXhNfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: "Photo 3",
        url: "https://images.unsplash.com/photo-1613390382265-5a0547806df3?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fGhtZW52UWhVbXhNfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
]
class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
      arrows: true,
      slidesToScroll: 1,
      className: "slides"
    };
    return (
      <div className="SimpleSlider" style={{padding: 24}}>
        <Slider {...settings}>
          {Photo.map((Photo) =>{
            return(
              <div>
                <img width="100%" src={Photo.url} />
              </div>
            )
          })}
        </Slider>
      </div>
    );
  }
}
export default SimpleSlider;