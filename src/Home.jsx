import React from "react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="container text-center mt-5">
      <h1 className="home-title mb-3">🧬 Welcome to the Anatomy & Physiology 1 Quiz Prep🧬</h1>
      <p className="mb-4 finger-paint">Test your knowledge and see how you score!</p>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card">
            <img
              src="https://media.istockphoto.com/id/1909960292/photo/cell-membrane-structure.jpg?s=612x612&w=0&k=20&c=WQkLqdZdEUTGxQK5Thv7KA14B7R1qydtU6r3xKOfQ7M="
              class="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title finger-paint">Unit 3 Quiz Prep</h5>
              <hr />
              <Link to="/quiz">
                <button className="btn btn-outline-primary btn-lg">Start Quiz</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="https://media.istockphoto.com/id/1866825207/vector/epithelial-tissue-skin-tissue-cells-layers-of-skin.jpg?s=612x612&w=0&k=20&c=mmFpX4kRGBsPAge-7vnx_uUiq9UZolmSGoeCDqEyFsI="
              class="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 class="card-title finger-paint ">Unit 4 Quiz Prep</h5>
              <hr />
              <p class="card-text finger-paint">COMING SOON!</p>
            </div>
          </div>
        </div>
        {/* <div className="col">
          <div className="card">
            <img src="..." class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural lead-in to additional content.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural lead-in to additional content. This
                content is a little bit longer.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
