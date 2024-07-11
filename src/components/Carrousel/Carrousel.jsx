import React, { useEffect, useState } from "react";
import "./Carrousel.css";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import carrouselMove from "../../services/carrouselMove";
import simulateMouseClick from "../../services/simulateMouseClick"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


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

      <section class="slider">
        <section class="list">
          <article class="item">
            <img src={img1} alt="" />

            <div class="content">
              <div class="title">DESTACADO</div>
              <div class="type">BOUNCER</div>
              <div class="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti temporibus quis eum consequuntur voluptate quae
                doloribus distinctio. Possimus, sed recusandae. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Sequi, aut.
              </div>
              <div class="button">
                <button><AddShoppingCartIcon /></button>
              </div>
            </div>
          </article>

          <article class="item">
            <img src={img2} alt="" />

            <div class="content">
              <div class="title">DESTACADO</div>
              <div class="type">ROLLINGBALL</div>
              <div class="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti temporibus quis eum consequuntur voluptate quae
                doloribus distinctio. Possimus, sed recusandae. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Sequi, aut.
              </div>
              <div class="button">
                <button><AddShoppingCartIcon /></button>
              </div>
            </div>
          </article>

          <article class="item">
            <img src={img4} alt="" />

            <div class="content">
              <div class="title">DESTACADO</div>
              <div class="type">DOMINATOR</div>
              <div class="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti temporibus quis eum consequuntur voluptate quae
                doloribus distinctio. Possimus, sed recusandae. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Sequi, aut.
              </div>
              <div class="button">
                <button><AddShoppingCartIcon /></button>
              </div>
            </div>
          </article>

          <article class="item">
            <img src={img3} alt="" />

            <div class="content">
              <div class="title">DESTACADO</div>
              <div class="type">STARTING</div>
              <div class="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti temporibus quis eum consequuntur voluptate quae
                doloribus distinctio. Possimus, sed recusandae. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Sequi, aut.
              </div>
              <div class="button">
                <button><AddShoppingCartIcon /></button>
              </div>
            </div>
          </article>
        </section>

        <section class="thumbnail">
          <div class="item">
            <img src={img1} alt="" />
          </div>
          <div class="item">
            <img src={img2} alt="" />
          </div>
          <div class="item">
            <img src={img4} alt="" />
          </div>
          <div class="item">
            <img src={img3} alt="" />
          </div>
        </section>

        <div class="nextPrevArrows">
          <button class="prev" data-type="prev" onClick={carrouselMove}> Ant </button>
          <button class="next" data-type="next" onClick={carrouselMove}> Sig </button>
        </div>
      </section>
    </main>
  );
}

export default Carrousel;
