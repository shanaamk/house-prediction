import React from 'react'

const Workersviewteam = () => {
  return (
    <section id="leadership">
    <div className="container">
    <div className="row">
    <div className="col-6 col-md-6 offset-lg-2 col-lg-4">
       
    <h3>Team With you</h3>
    
    </div>
    </div>
      <div className="row">
    
        <div className="col-12 col-md-6 offset-lg-2 col-lg-4">
            
          <div className="accordion" id="accordionLeaders">
            <div className="card">
              <div className="accordion-group">
                <div className="card-header">
                  <a
                    className="accordion-toggle"
                    data-toggle="collapse"
                    data-parent="#accordionLeaders"
                    href="#leader1"
                  >
                    <div className="media">
                      <img
                        src="http://bit.ly/2IirA9e"
                        className="mr-3 rounded-circle"
                        alt="..."
                      />
                      <div className="media-body">
                        <h5 className="mt-2">John Doe</h5>
                        <p>CEO &amp; Co-Founder</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  id="leader1"
                  className="accordion-body in collapse"
                  style={{ height: "auto" }}
                >
                  <div className="card-body">brief</div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="accordion-group">
                <div className="card-header">
                  <a
                    className="accordion-toggle"
                    data-toggle="collapse"
                    data-parent="#accordionLeaders"
                    href="#leader2"
                  >
                    <div className="media">
                      <img
                        src="http://bit.ly/2IirA9e"
                        className="mr-3 rounded-circle"
                        alt="..."
                      />
                      <div className="media-body">
                        <h5 className="mt-2">John Getta</h5>
                        <p>Product Development &amp; Co-Founder</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  id="leader2"
                  className="accordion-body collapse"
                  style={{ height: 0 }}
                >
                  <div className="card-body">Brief</div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="accordion-group">
                <div className="card-header">
                  <a
                    className="accordion-toggle"
                    data-toggle="collapse"
                    data-parent="#accordionLeaders"
                    href="#leader3"
                  >
                    <div className="media">
                      <img
                        src="http://bit.ly/2IirA9e"
                        className="mr-3 rounded-circle"
                        alt="..."
                      />
                      <div className="media-body">
                        <h5 className="mt-2">John Doe</h5>
                        <p>Chief Marketing Officer</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  id="leader3"
                  className="accordion-body collapse"
                  style={{ height: 0 }}
                >
                  <div className="card-body">Brief</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="accordion" id="accordionLeaders2">
            <div className="card">
              <div className="accordion-group">
                <div className="card-header">
                  <a
                    className="accordion-toggle"
                    data-toggle="collapse"
                    data-parent="#accordionLeaders2"
                    href="#leader4"
                  >
                    <div className="media">
                      <img
                        src="http://bit.ly/2IirA9e"
                        className="mr-3 rounded-circle"
                        alt="..."
                      />
                      <div className="media-body">
                        <h5 className="mt-2">Jane Doe</h5>
                        <p>Chief Customer Officer</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  id="leader4"
                  className="accordion-body in collapse"
                  style={{ height: "auto" }}
                >
                  <div className="card-body">Brief</div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="accordion-group">
                <div className="card-header">
                  <a
                    className="accordion-toggle"
                    data-toggle="collapse"
                    data-parent="#accordionLeaders2"
                    href="#leader5"
                  >
                    <div className="media">
                      <img
                        src="http://bit.ly/2IirA9e"
                        className="mr-3 rounded-circle"
                        alt="..."
                      />
                      <div className="media-body">
                        <h5 className="mt-2"> Jane Doe</h5>
                        <p>Chief Special Project Officer</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  id="leader5"
                  className="accordion-body collapse"
                  style={{ height: 0 }}
                >
                  <div className="card-body">Brief</div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="accordion-group">
                <div className="card-header">
                  <a
                    className="accordion-toggle"
                    data-toggle="collapse"
                    data-parent="#accordionLeaders2"
                    href="#leader6"
                  >
                    <div className="media">
                      <img
                        src="http://bit.ly/2IirA9e"
                        className="mr-3 rounded-circle"
                        alt="..."
                        style={{ width: 64, height: 64 }}
                      />
                      <div className="media-body">
                        <h5 className="mt-2">Michael Keen</h5>
                        <p>CEO &amp; Co-Founder</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  id="leader6"
                  className="accordion-body collapse"
                  style={{ height: 0 }}
                >
                  <div className="card-body">Brief</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Workersviewteam