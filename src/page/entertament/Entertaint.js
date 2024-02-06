import React from "react";
import { IMG } from "../../api/constant";
import { Link } from "react-router-dom";

const Entertaint = ({ entertanData }) => {
  return (
    <>
      <section class="bannerPart innerBanner">
        <div class="container-fluid">
          <div class="row align-items-center justify-content-center">
            <div class="col-md-11 col-lg-10">
              <h1>Entertainment</h1>
              <nav>
                <ol class="breadcrumb text-uppercase mt-4">
                  <li class="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li class="breadcrumb-item active">Entertainment</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section class="entertainment p-v-50">
        <div class="container">
          <div class="row">
            {entertanData.map((item, index) => (
              <div class="col-sm-6 col-md-4 relative" key={index}>
                <div class="swiper-slide mb-3">
                  <Link to={`/entertainment-details/${item.slug}`}>
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Entertaint;
