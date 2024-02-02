import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Entertainment = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <section class="entertainment p-v-50">
        <div class="container">
          <div class="row">
            <div class="col-12 relative">
              <h2 class="text-center text-capitalize mb-4">
                all Entertainment
              </h2>
              <div class="swiper mySwiper">
                <Carousel responsive={responsive}>
                  <div>
                    <div class="swiper-slide">
                      <a href="#">
                        <div class="d-flex">
                          <div class="entertainment_content">
                            <h5>ELITE FORCES</h5>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.{" "}
                            </p>
                          </div>
                          <img
                            src="assets/images/e1.jpg"
                            alt=""
                            class="w-100"
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                  <div>
                    {" "}
                    <div class="swiper-slide">
                      <a href="#">
                        <div class="d-flex flex-column-reverse">
                          <div class="entertainment_content">
                            <h5>ELITE FORCES</h5>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </p>
                          </div>
                          <img
                            src="assets/images/e2.jpg"
                            alt=""
                            class="w-100"
                          />
                        </div>
                      </a>
                    </div>
                  </div>

                  <div>
                    <div class="swiper-slide">
                      <a href="#">
                        <div class="d-flex">
                          <div class="entertainment_content">
                            <h5>ELITE FORCES</h5>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </p>
                          </div>
                          <img
                            src="assets/images/e3.jpg"
                            alt=""
                            class="w-100"
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                  <div>
                    {" "}
                    <div class="swiper-slide">
                      <a href="#">
                        <div class="d-flex flex-column-reverse">
                          <div class="entertainment_content">
                            <h5>ELITE FORCES</h5>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </p>
                          </div>
                          <img
                            src="assets/images/e2.jpg"
                            alt=""
                            class="w-100"
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                  <div>
                    <div class="swiper-slide">
                      <a href="#">
                        <div class="d-flex">
                          <div class="entertainment_content">
                            <h5>ELITE FORCES</h5>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </p>
                          </div>
                          <img
                            src="assets/images/e3.jpg"
                            alt=""
                            class="w-100"
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                </Carousel>
                <div class="swiper-wrapper"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Entertainment;
