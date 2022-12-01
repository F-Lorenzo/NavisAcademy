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
                src="https://cdn.pixabay.com/photo/2020/10/19/09/44/woman-5667299_960_720.jpg"
                alt=""
              />
            </div>
            <div className="parrafo__Body">
              <span>
                Mi hijo comenzó clases hace un año y hoy estudia en un internado
                de Londres. 100% recomendado.
                <div>
                  <span className="review__Name">TERESA R.</span>
                </div>
              </span>
            </div>
          </div>
          <div className="review-2">
            <div className="review__Content">
              <img
                src="https://cdn.pixabay.com/photo/2022/05/15/13/32/fashionable-7198003_960_720.jpg"
                alt=""
              />
            </div>
            <div className="parrafo__Body">
              <span>
                {" "}
                Quería que mi hijo tuviera apoyo académico y pudiera aprobar sus
                exámenes y lo logró gracias a esta academia. Me gusta que se
                enfocan en las necesidades del estudiante.
                <div>
                  <span className="review__Name">SANDRA M.</span>
                </div>
              </span>
            </div>
          </div>
        </div>

        <div className="section__2">
          <div className="review-3">
            <div className="review__Content">
              <img
                src="https://cdn.pixabay.com/photo/2017/11/02/14/27/model-2911332_960_720.jpg"
                alt=""
              />
            </div>
            <div className="parrafo__Body">
              <span>
                Gracias a estas clases logré aprobar mi examen de la Universidad
                de Florencia y ahora soy profesor.
                <div>
                  <span className="review__Name">ANGELO L.</span>
                </div>
              </span>
            </div>
          </div>
          <div className="review-4">
            <div className="review__Content">
              <img
                src="https://cdn.pixabay.com/photo/2017/06/30/15/55/camera-2458579_960_720.jpg"
                alt=""
              />
            </div>
            <div className="parrafo__Body">
              <span>
                Buscaba un curso corto para poder viajar y no sentir tanta
                vergüenza al hablar y con Navis en un mes ya estaba lista para
                mi viaje.
                <div>
                  <span className="review__Name">JAIRO M.</span>
                </div>
              </span>
            </div>
          </div>
        </div>
        <div className="section__2">
          <div className="review-3">
            <div className="review__Content">
              <img
                src="https://cdn.pixabay.com/photo/2017/01/03/09/18/woman-1948939_960_720.jpg"
                alt=""
              />
            </div>
            <div className="parrafo__Body">
              <span>
                Por años fue muy difícil que mi hijo pusiera atención al inglés,
                pero ahora le gusta. La profesora juega con él y se divierten
                mucho.
                <div>
                  <span className="review__Name">VALERIA P.</span>
                </div>
              </span>
            </div>
          </div>
          <div className="review-4">
            <div className="review__Content">
              <img
                src="https://cdn.pixabay.com/photo/2018/01/01/15/28/one-3054354_960_720.jpg"
                alt=""
              />
            </div>
            <div className="parrafo__Body">
              <span>
                Con estas clases me preparé para la prueba oral del TOEFL, y
                logré un 28/30. I did it!
                <div>
                  <span className="review__Name">SOFIA R.</span>
                </div>
              </span>
            </div>
          </div>
          <div className="review-4">
            <div className="review__Content">
              <img
                src="https://cdn.pixabay.com/photo/2016/12/27/21/49/application-1934972_960_720.jpg"
                alt=""
              />
            </div>
            <div className="parrafo__Body">
              <span>
                Me mudé a Texas hace 4 años, nunca aprendí inglés y dependía de
                mi hija para las llamadas o cosas importantes, luego me cansé de
                mi trabajo y decidí comenzar a aprender para poder obtener un
                mejor empleo. Gracias a esta academia lo estoy logrando. Thanks
                Navis!
                <div>
                  <span className="review__Name">JORGE R.</span>
                </div>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
