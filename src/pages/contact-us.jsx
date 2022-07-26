import React from 'react'

const ContactUs = () => {
  return (
    <div className="container">
      <div
        className="row"
        style={{
          height: 300,
          overflow: 'hidden',
          borderRadius: 12,
          marginBottom: 12,
        }}
      ></div>
      <div className="row">
        <form>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">
                نام شما
              </label>
              <input
                type="title"
                className="form-control"
                id="name"
                placeholder="نام شما"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                رایانامه
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="example@quera.ir"
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-12">
              <label htmlFor="message" className="form-label">
                پیام شما
              </label>
              <textarea className="form-control" id="message" rows="3" />
            </div>
          </div>
          <button type="submit" className="btn btn-primary mt-4">
            ارسال پیام
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactUs
