import Appletv from "../../assets/images/icons/apple-tv-logo.png";
import Servants from "../../assets/images/icons/servant-logo.png";


function FifthSection() {
  return (
    <div>
      <section className="container-fluid">
        <div className="row">
          <div className="text-center servant-logo col-md-6">
            <div className="mb-5 mt-5">
              <img src={Appletv} alt="" />
            </div>
            <div className="mb-5 servantt ">
              <img src={Servants} alt="" />
            </div>
            <div className="watch-the-trailer">
              <a href="#">Watch the trailer</a>
            </div>
          </div>

          <div className="text-center AirPods-Pro col-md-6">
            <div className="mt-5 AirPods fw-bold">
              <p>AirPods Pro</p>
            </div>
            <div className="Magic">
              <p>Magic like you’ve never heard.</p>
            </div>
            <div>
              <ul className="row learn-buy  ">
                <li className="col-6 ">
                  <a href="#">Learn more </a>
                </li>
                <li className="col-6 ">
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

export default FifthSection;