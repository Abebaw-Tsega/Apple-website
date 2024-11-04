import MacLaptop from "../../assets/images/home/mac-laptop.jpg";

function FirstSection() {
  return (
    <div>
      <section className="top-100">
        <div className="text-center container-fluid">
          <div>
            <h6>16-inch model</h6>
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
          <div>
            <img src={MacLaptop} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default FirstSection