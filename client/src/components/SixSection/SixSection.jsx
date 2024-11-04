import Newipad from "../../assets/images/icons/new-ipad-logo.png";

function SixSection() {
  return (
    <div>
      <section className="container-fluid">
        <div className="row">
          <div className="text-center col-md-6 MacBook-12 ">
            <div>
              <h6 className="mt-5">16-inch model</h6>
            </div>
            <div className="fw-bold MacBook-1 ">
              <h5>MacBook Pro</h5>
            </div>
            <div className="the-best">
              <p>The best for the brightest.</p>
            </div>
            <div>
              <ul className="row learn-buy ">
                <li className="col-6 ">
                  <a href="#">Learn more </a>
                </li>
                <li className="col-6">
                  <a href="#">Buy </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center col-md-6 the-new-ipad">
            <div className="mt-5 mb-3">
              <img src={Newipad} alt="" />
            </div>
            <div>
              <p>Like a computer. Unlike any computer.</p>
            </div>
            <div>
              <ul className="row learn-buy ">
                <li className="col-6 ">
                  <a href="#">Learn more </a>
                </li>
                <li className="col-6">
                  <a href="#">Buy </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SixSection;