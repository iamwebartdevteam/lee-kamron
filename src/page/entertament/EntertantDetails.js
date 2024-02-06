import React, { useEffect, useState } from "react";
import * as API from "../../api/Index";
import { useParams } from "react-router";
import { IMG } from "../../api/constant";
const EntertantDetails = () => {
  const [entertanDetails, setEntertanDetails] = useState("");
  const page = useParams();
  console.log("page", page);
  const allpagedata = async () => {
    try {
      const entertantres = await API.entertainmentdetails(page.slug);
      console.log("entertantres", entertantres);
      setEntertanDetails(entertantres.data.data);
    } catch (error) {}
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    allpagedata();
  }, []);
  return (
    <>
      <div class="entertainment p-v-50">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <p>
                <div class="e_video">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `
                            <video
                            controls
                            src=${IMG + entertanDetails.video}
                            class="loaderVido aboutVideo"
                            />,
                        `,
                    }}
                  ></div>
                </div>
                <h2 className="enterantDetailHeading">
                  {entertanDetails.title}
                </h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: entertanDetails.description,
                  }}
                />
              </p>

              <div class="row">
                <div class="col-sm-6 col-md-4">
                  <strong>Network:</strong>
                  <p>{entertanDetails.network}</p>
                </div>
                <div class="col-sm-6 col-md-4">
                  <strong>Directed By:</strong>
                  <p>{entertanDetails.directed_by}</p>
                </div>
                <div class="col-sm-6 col-md-4">
                  <strong>More Details:</strong>
                  <p>{entertanDetails.more_details}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EntertantDetails;
