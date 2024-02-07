import React from "react";
import { Link } from "react-router-dom";

const ContactUs = ({ contactData }) => {
  console.log("contactData", contactData);
  return (
    <>
      <section class="newsDetails p-v-50">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h2 class="mb-3">Do You Have Any Questions?</h2>
            </div>
            <div class="col-md-6">
              <div class="infoBox mt-4">
                <label for="">Office Address</label>
                <span>
                  <i class="fa-solid fa-location-dot"></i>
                </span>
                <p>{contactData.office_address}</p>
              </div>
              <div class="infoBox mt-4">
                <label for="">Phone</label>
                <span>
                  <i class="fa-solid fa-phone-volume"></i>
                </span>
                <p>
                  <Link to={`tel:${contactData.phone}`}>
                    {contactData.phone}
                  </Link>
                </p>
              </div>
              <div class="infoBox mt-4">
                <label for="">Email</label>
                <span>
                  <i class="fa-solid fa-envelope"></i>
                </span>
                <p>
                  <Link to={`mailto:${contactData.email}`}>
                    {contactData.email}
                  </Link>
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <h3 class="mt-4">Reach Us Anytime</h3>
              <div class="row">
                <div class="col-12">
                  <div class="mb-3 mt-3">
                    <input
                      type="text"
                      class="form-control"
                      id="text"
                      placeholder="Full Name"
                      name="name"
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="mb-3 mt-3">
                    <input
                      type="text"
                      class="form-control"
                      id="text"
                      placeholder="Phone No"
                      name=""
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="mb-3 mt-3">
                    <input
                      type="email"
                      class="form-control"
                      id="text"
                      placeholder="Email"
                      name=""
                    />
                  </div>
                </div>

                <div class="col-12">
                  <div class="mb-3 mt-3">
                    <textarea
                      name=""
                      class="form-control"
                      id=""
                      cols=""
                      rows=""
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>
                <div class="col-12 text-end">
                  <button class="btn hvr-ripple-out">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
