import React from "react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="container text-center mt-5">
      <h1 className="home-title mb-3">🧬 Welcome to the Anatomy & Physiology 1 Quiz Prep🧬</h1>
      <p className="mb-4">Test your knowledge and see how you score!</p>
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <div class="card">
            <img
              src="https://media.istockphoto.com/id/1299314944/vector/osmosis-reverse-osmosis-solvent-and-semipermeable-membrane-with-molecules.jpg?s=612x612&w=0&k=20&c=W2yIPQ3G76owwZ_-Ulv8GAAzIBxuFiGWTJQsDm6lP-s="
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title finger-paint">Unit 3 Quiz Prep</h5>
              <hr />
              <Link to="/quiz">
                <button className="btn btn-outline-primary btn-lg">Start Quiz</button>
              </Link>
            </div>
          </div>
        </div>
        {/* <div class="col">
          <div class="card">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural lead-in to additional content. This
                content is a little bit longer.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural lead-in to additional content.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
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
