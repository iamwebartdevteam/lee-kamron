import React from "react";

const Awards = ({ awardData }) => {
  return (
    <>
      <section class="entertainment p-v-50">
        <div class="container">
          <div class="row">
            {awardData.map((item, index) => (
              <div class="col-sm-6 col-md-4" key={index}>
                <div class="awards">
                  <h5>{item.year}</h5>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: item.description,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Awards;
