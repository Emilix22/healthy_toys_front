import React, { useEffect, useState } from "react";
import "./Carrousel.css";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import carrouselMove from "../../services/carrouselMove";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';



function Carrousel() {
  const [thumbnail, setThumbnail] = useState();
  const [thumbnailItems, setThumbnailItems] = useState();

  useEffect(() => {
    setThumbnail(document.querySelector(".slider .thumbnail"));
    setThumbnailItems(document.querySelectorAll(".thumbnail .item"));

    thumbnail && thumbnail.appendChild(thumbnailItems[0]);
  }, [thumbnail]);

  
  return (
    <section className="carrousel_container">
      <header>
        <img src="/healtyToys_logo.svg" alt="" />
        <nav>
          <a href="#" class="active">
            Inicio
          </a>
          <a href="#">Vía Pública</a>
          <a href="#">Hogar</a>
          <a href="#">Profesional</a>
          <a href="#">Sobre Nosotros</a>
        </nav>
        <ul>
            <a href="#">User</a>
            <a href="#"><ShoppingCartIcon /></a>
            <a href="#"><FavoriteBorderIcon /></a>
        </ul>
      </header>

      <div class="slider">
        <div class="list">
          <div class="item">
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
          </div>

          <div class="item">
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
          </div>

          <div class="item">
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
          </div>

          <div class="item">
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
          </div>
        </div>

        <div class="thumbnail">
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
        </div>

        <div class="nextPrevArrows">
          <button class="prev" data-type="prev" onClick={carrouselMove}> Ant </button>
          <button class="next" data-type="next" onClick={carrouselMove}> Sig </button>
        </div>
      </div>
    </section>
  );
}

export default Carrousel;
