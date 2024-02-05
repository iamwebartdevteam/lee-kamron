import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { IMG } from "../../api/constant";
const Entertainment = ({ entertanData }) => {
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
                  {entertanData.map((item, index) => (
                    <div>
                      <div class="swiper-slide">
                        <Link to="#">
                          <div class="d-flex">
                            <div class="entertainment_content">
                              <h5>{item.title}</h5>
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: item.description,
                                }}
                              />
                            </div>
                            <img src={IMG + item.image} alt="" class="w-100" />
                          </div>
                        </Link>
                      </div>
                    </div>
                  ))}
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
