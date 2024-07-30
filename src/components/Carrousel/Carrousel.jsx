import React, { useEffect, useState } from "react";
import "./Carrousel.css";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import { Link } from "react-router-dom";
import carrouselMove from "../../services/carrouselMove";
import simulateMouseClick from "../../services/simulateMouseClick"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


function Carrousel() {
  const [thumbnail, setThumbnail] = useState();
  const [thumbnailItems, setThumbnailItems] = useState();
  const rightButton = document.querySelector('.next');

  useEffect(() => {
    setThumbnail(document.querySelector(".slider .thumbnail"));
    setThumbnailItems(document.querySelectorAll(".thumbnail .item"));
    
    thumbnail && thumbnail.appendChild(thumbnailItems[0]);

    setInterval(() => {simulateMouseClick(rightButton)},10000)
    
  }, [thumbnail]);
  
  

  return (
    <main className="carrousel_container" id="top">

      <section className="slider">
        <section className="list">
          <article className="item">
            <img src={img1} alt="" />

            <div className="content">
              <div className="title">DESTACADO</div>
              <div className="type">BOUNCER</div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti temporibus quis eum consequuntur voluptate quae
                doloribus distinctio. Possimus, sed recusandae. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Sequi, aut.
              </div>
              <div className="button">
                <button><AddShoppingCartIcon /></button>
              </div>
            </div>
          </article>

          <article className="item">
            <img src={img2} alt="" />

            <div className="content">
              <div className="title">DESTACADO</div>
              <div className="type">ROLLINGBALL</div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti temporibus quis eum consequuntur voluptate quae
                doloribus distinctio. Possimus, sed recusandae. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Sequi, aut.
              </div>
              <div className="button">
                <button><AddShoppingCartIcon /></button>
              </div>
            </div>
          </article>

          <article className="item">
            <img src={img4} alt="" />

            <div className="content">
              <div className="title">DESTACADO</div>
              <div className="type">DOMINATOR</div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti temporibus quis eum consequuntur voluptate quae
                doloribus distinctio. Possimus, sed recusandae. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Sequi, aut.
              </div>
              <div className="button">
                <button><AddShoppingCartIcon /></button>
              </div>
            </div>
          </article>

          <article className="item">
            <img src={img3} alt="" />

            <div className="content">
              <div className="title">DESTACADO</div>
              <div className="type">STARTING</div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti temporibus quis eum consequuntur voluptate quae
                doloribus distinctio. Possimus, sed recusandae. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Sequi, aut.
              </div>
              <div className="button">
                <button><AddShoppingCartIcon /></button>
              </div>
            </div>
          </article>
        </section>

        <section className="thumbnail">
          <div className="item">
            <img src={img1} alt="" />
          </div>
          <div className="item">
            <img src={img2} alt="" />
          </div>
          <div className="item">
            <img src={img4} alt="" />
          </div>
          <div className="item">
            <img src={img3} alt="" />
          </div>
        </section>

        <div className="nextPrevArrows">
          <button className="prev" data-type="prev" onClick={carrouselMove}>Ant</button>
          <button className="next" data-type="next" onClick={carrouselMove}>Sig</button>
        </div>
      </section>
    </main>
  );
}

export default Carrousel;
