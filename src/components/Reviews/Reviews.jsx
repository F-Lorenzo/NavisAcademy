import React from "react";
import "./Reviews.css";

const Reviews = () => {
  return (
    <>
      <div className="review__title">
        <h2>Reviews</h2>
      </div>
      <section className="Review__Content">
        <div className="review__body">
          <div className="review-1">
            <div className="review__Content">
              <img
                src="https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553_960_720.jpg"
                alt=""
              />
            </div>
            <div className="parrafo__Body">
              <span>
                Mi hijo comenzó clases hace un año y hoy estudia en un internado
                de Londres. 100% recomendado. TERESA R.
              </span>
            </div>
          </div>
          <div className="review-2">
            <div className="review__Content">
              <img
                src="https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553_960_720.jpg"
                alt=""
              />
            </div>
            <div className="parrafo__Body">
              <span>
                {" "}
                Quería que mi hijo tuviera apoyo académico y pudiera aprobar sus
                exámenes y lo logró gracias a esta academia. Me gusta que se
                enfocan en las necesidades del estudiante. SANDRA M.
              </span>
            </div>
          </div>
        </div>

        <div className="section__2">
          <div className="review-3">
            <div className="review__Content">
              <img
                src="https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553_960_720.jpg"
                alt=""
              />
            </div>
            <div className="parrafo__Body">
              <span>
                Gracias a estas clases logré aprobar mi examen de la Universidad
                de Florencia y ahora soy profesor. ANGELO L.
              </span>
            </div>
          </div>
          <div className="review-4">
            <div className="review__Content">
              <img
                src="https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553_960_720.jpg"
                alt=""
              />
            </div>
            <div className="parrafo__Body">
              <span>
                Buscaba un curso corto para poder viajar y no sentir tanta
                vergüenza al hablar y con Navis en un mes ya estaba lista para
                mi viaje. JAIRO M.
              </span>
            </div>
          </div>
        </div>
        <div className="section__2">
          <div className="review-3">
            <div className="review__Content">
              <img
                src="https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553_960_720.jpg"
                alt=""
              />
            </div>
            <div className="parrafo__Body">
              <span>
                Por años fue muy difícil que mi hijo pusiera atención al inglés,
                pero ahora le gusta. La profesora juega con él y se divierten
                mucho. VALERIA P.
              </span>
            </div>
          </div>
          <div className="review-4">
            <div className="review__Content">
              <img
                src="https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553_960_720.jpg"
                alt=""
              />
            </div>
            <div className="parrafo__Body">
              <span>
                Con estas clases me preparé para la prueba oral del TOEFL, y
                logré un 28/30. I did it! SOFIA R.
              </span>
            </div>
          </div>
          <div className="review-4">
            <div className="review__Content">
              <img
                src="https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553_960_720.jpg"
                alt=""
              />
            </div>
            <div className="parrafo__Body">
              <span>
                Me mudé a Texas hace 4 años, nunca aprendí inglés y dependía de
                mi hija para las llamadas o cosas importantes, luego me cansé de
                mi trabajo y decidí comenzar a aprender para poder obtener un
                mejor empleo. Gracias a esta academia lo estoy logrando. Thanks
                Navis! JORGE R.
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
