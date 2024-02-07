import React from "react";
import { IMG } from "../../api/constant";

const Press = ({ pressData }) => {
  return (
    <>
      <section class="press p-v-50">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <ul class="nav nav-pills justify-content-center" role="tablist">
                <li class="nav-item">
                  <a class="nav-link active" data-bs-toggle="pill" href="#home">
                    2020
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="pill" href="#menu1">
                    2019
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="pill" href="#menu2">
                    2018
                  </a>
                </li>
              </ul>
              <div class="tab-content mt-4">
                <div id="home" class="tab-pane active">
                  <div class="row">
                    {pressData.map((item, index) => (
                      <div class="col-sm-6 col-md-4 col-lg-3" key={index}>
                        <div class="galleryimg">
                          <img
                            src={IMG + item.image}
                            alt="Avatar"
                            class="image"
                          />
                          <div class="overlay">
                            <div class="text">
                              <a href="#" class="btn hvr-ripple-out">
                                Download
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Press;
