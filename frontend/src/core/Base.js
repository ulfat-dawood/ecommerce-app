import React from 'react'

const Base= ({
    title = "My Title",
  description = "My desription",
  className = "bg-dark text-white p-4",
  children
})=>(
    <div>
        <div className="container-fluid">
            <div className="jumbotron bg-dark text-white text-center">
                <h2 className="display-4">{title}</h2>
                <p className="lead">{description}</p>
                <div className={className}>{children}</div>
            </div>
        </div>
        <footer className="footer bg-dark mt-auto py-3">
            <div className="container-fluid bg-white text-white text-center">
                <h4>if you got any questions, feel free to reach out!</h4>
                <button className="btn bt-warning btn-large">Contact Us!</button>
            </div>
            <div className="container">
                <span className="text-muted">
                    An amazing place to buy tshirts
                </span>
            </div>

        </footer>
    </div>

)

export default Base;