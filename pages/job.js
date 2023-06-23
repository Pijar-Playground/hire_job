import React from "react";

import Navigations from "@/components/Navigations";
import Footer from "@/components/Footer";
import Link from "next/link";

function Job() {
  return (
    <>
      <Navigations />

      <div className="container py-5">
        <div className="row">
          {[...new Array(4)].map((item, key) => (
            <div className="col col-md-3 mb-4" key={key}>
              <Link href={`/job/${key}`}>
                <div class="card">
                  <img
                    src="https://placehold.co/600x400"
                    class="card-img-top"
                    alt="..."
                    width="100%"
                  />
                  <div class="card-body">
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}

          {[...new Array(4)].map((item, key) => (
            <div className="col col-md-3 mb-4" key={key}>
              <Link href={`/job/${key}`}>
                <div class="card">
                  <img
                    src="https://placehold.co/600x400"
                    class="card-img-top"
                    alt="..."
                    width="100%"
                  />
                  <div class="card-body">
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Job;
