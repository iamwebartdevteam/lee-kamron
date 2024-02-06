import React, { useEffect, useState } from "react";
import * as API from "../../api/Index";
import { useParams } from "react-router";
import { IMG } from "../../api/constant";
const NewDetails = () => {
  const [entertanDetails, setEntertanDetails] = useState("");
  const page = useParams();

  const allpagedata = async () => {
    try {
      const entertantres = await API.newsDetails(page.slug);
      setEntertanDetails(entertantres.data.data);
    } catch (error) {}
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    allpagedata();
  }, []);
  return (
    <>
      <section class="newsDetails p-v-50">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-sm-10">
              <div class="relative">
                <img
                  src={IMG + entertanDetails.image}
                  alt=""
                  class="w-100 n_detail_pic mb-3"
                />
                <small class="text-danger">
                  {entertanDetails.created_date}
                </small>
              </div>
              <h3 class="mt-3 mb-3">{entertanDetails.title}</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: entertanDetails.description,
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewDetails;
