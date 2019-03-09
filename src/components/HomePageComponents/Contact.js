import React from "react"

export default function Contact() {
  return (
    <section className="contact py-5">
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form
            action="https://formspree.io/salujaparam@gmail.com"
            method="POST"
          >
            {/* name */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="Narendra Modi"
              />
            </div>
            {/* email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                placeholder="email@email.com"
              />
            </div>
            {/* description */}
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                type="text"
                className="form-control"
                name="description"
                id="description"
                placeholder="Comments....."
                rows="5"
              />
            </div>
            {/* submit */}
            <button
              type="submit"
              className="btn btn-basic btn-block text-capitalize mt-5"
              style={{ background: "rgba(0,0,0, 0.2)" }}
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
