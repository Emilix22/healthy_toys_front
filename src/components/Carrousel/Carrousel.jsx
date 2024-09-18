import React, { useEffect, useState } from "react";
import "./Carrousel.css";
import banerImg from "../../assets/banerImg.jpg";
import banerImg1 from "../../assets/banerImg1.jpg";
import banerImg2 from "../../assets/banerImg2.jpg";
import banerImg3 from "../../assets/banerImg3.jpg";
import carrouselMove from "../../services/carrouselMove";
import simulateMouseClick from "../../services/simulateMouseClick";

function Carrousel() {

  const [thumbnail, setThumbnail] = useState();
  const [thumbnailItems, setThumbnailItems] = useState();
  const rightButton = document.querySelector(".next");

  useEffect(() => {
    setThumbnail(document.querySelector(".slider .thumbnail"));
    setThumbnailItems(document.querySelectorAll(".thumbnail .item"));

    thumbnail && thumbnail.appendChild(thumbnailItems[0]);

    setInterval(() => {
      simulateMouseClick(rightButton);
    }, 10000);
  }, [thumbnail]);

  return (
    <main className="carrousel_container" id="top">
      <section className="slider">
        <section className="list">
          <article className="item">
            <img src={banerImg} alt="banner-image" />

            <div className="content">
              <div className="type">BOUNCER</div>
              <div className="description">
              ¡Mejora tu juego con nuestro innovador producto de entrenamiento de fútbol! Diseñado para perfeccionar la técnica y la destreza en ambas piernas, este equipo es ideal para jugadores de todos los niveles. Con ejercicios específicos y materiales de alta calidad, podrás desarrollar un control del balón impecable y una precisión en tus pases y tiros que te hará destacar en el campo. ¡No esperes más para llevar tu habilidad al siguiente nivel! ⚽💪
              </div>
            </div>
          </article>

          <article className="item">
            <img src={banerImg1} alt="" />

            <div className="content">
              <div className="type">BOUNCER</div>
              <div className="description">
              ¡Mejora tu juego con nuestro innovador producto de entrenamiento de fútbol! Diseñado para perfeccionar la técnica y la destreza en ambas piernas, este equipo es ideal para jugadores de todos los niveles. Con ejercicios específicos y materiales de alta calidad, podrás desarrollar un control del balón impecable y una precisión en tus pases y tiros que te hará destacar en el campo. ¡No esperes más para llevar tu habilidad al siguiente nivel! ⚽💪
              </div>
            </div>
          </article>

          <article className="item">
            <img src={banerImg2} alt="" />

            <div className="content">
              <div className="type">BOUNCER</div>
              <div className="description">
              ¡Mejora tu juego con nuestro innovador producto de entrenamiento de fútbol! Diseñado para perfeccionar la técnica y la destreza en ambas piernas, este equipo es ideal para jugadores de todos los niveles. Con ejercicios específicos y materiales de alta calidad, podrás desarrollar un control del balón impecable y una precisión en tus pases y tiros que te hará destacar en el campo. ¡No esperes más para llevar tu habilidad al siguiente nivel! ⚽💪
              </div>
            </div>
          </article>

          <article className="item">
            <img src={banerImg3} alt="" />

            <div className="content">
              <div className="type">BOUNCER</div>
              <div className="description">
              ¡Mejora tu juego con nuestro innovador producto de entrenamiento de fútbol! Diseñado para perfeccionar la técnica y la destreza en ambas piernas, este equipo es ideal para jugadores de todos los niveles. Con ejercicios específicos y materiales de alta calidad, podrás desarrollar un control del balón impecable y una precisión en tus pases y tiros que te hará destacar en el campo. ¡No esperes más para llevar tu habilidad al siguiente nivel! ⚽💪
              </div>
            </div>
          </article>
        </section>

        <section className="thumbnail">
          <div className="item">
            <img src={banerImg} alt="" />
          </div>
          <div className="item">
            <img src={banerImg1} alt="" />
          </div>
          <div className="item">
            <img src={banerImg2} alt="" />
          </div>
          <div className="item">
            <img src={banerImg3} alt="" />
          </div>
        </section>

        <div className="nextPrevArrows">
          <button className="prev" data-type="prev" onClick={carrouselMove}>
            Ant
          </button>
          <button className="next" data-type="next" onClick={carrouselMove}>
            Sig
          </button>
        </div>
      </section>
    </main>
  );
}

export default Carrousel;
