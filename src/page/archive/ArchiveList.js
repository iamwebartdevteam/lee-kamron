import React from "react";
import { IMG } from "../../api/constant";
import { Link } from "react-router-dom";

const ArchiveList = ({ archiveData }) => {
  console.log("archiveData", archiveData);
  return (
    <>
      <section class="newsDetails p-v-50">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="filters">
                <ul>
                  <li class="is-checked" data-filter="*">
                    All
                  </li>
                  <li data-filter=".film">Film</li>
                  <li data-filter=".television">television</li>
                  <li data-filter=".stage">stage plays</li>
                </ul>
              </div>
            </div>

            <div class="col-md-12">
              <div class="row">
                {archiveData.map((item, index) => (
                  <div class="col-md-3" data-category="stage">
                    <div class="galleryimg">
                      <img src={IMG + item.image} alt="Avatar" class="image" />
                      <div class="overlay">
                        <div class="text">
                          <Link
                            to="archive-details.php"
                            class="btn hvr-ripple-out"
                          >
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div class="img-tittle">
                      <h4 class="text-center">{item.title}</h4>
                      <h5 class="text-center">Television</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArchiveList;
