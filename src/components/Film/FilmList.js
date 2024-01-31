import React from "react";

const FilmList = () => {
  return (
    <>
      <section class="p-v-50 film_list">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-md-6">
              <div class="film_box">
                <a href="#">
                  <img src="assets/images/1.jpg" alt="" class="w-100" />
                  <div class="film_content">
                    <h4>Tokyo Stories</h4>
                    <p>Thursday, June 29 </p>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-md-6">
              <div class="film_box">
                <a href="#">
                  <img src="assets/images/1.jpg" alt="" class="w-100" />
                  <div class="film_content">
                    <h4>Tokyo Stories</h4>
                    <p>Thursday, June 29 </p>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-sm-6 col-md-4">
              <div class="film_box">
                <a href="#">
                  <img src="assets/images/2.jpg" alt="" class="w-100" />
                  <div class="film_content">
                    <h4>Tokyo Stories</h4>
                    <p>Thursday, June 29 </p>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-sm-6 col-md-4">
              <div class="film_box">
                <a href="#">
                  <img src="assets/images/3.jpg" alt="" class="w-100" />
                  <div class="film_content">
                    <h4>Tokyo Stories</h4>
                    <p>Thursday, June 29 </p>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-sm-6 col-md-4">
              <div class="film_box">
                <a href="#">
                  <img src="assets/images/4.jpg" alt="" class="w-100" />
                  <div class="film_content">
                    <h4>Tokyo Stories</h4>
                    <p>Thursday, June 29 </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FilmList;
