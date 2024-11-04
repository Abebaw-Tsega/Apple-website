import Watch from "../../assets/images/icons/watch-series5-logo.png";
import Apple from "../../assets/images/icons/apple-card-logo.png";

function ForthSection() {
  return (
    <div>
        
         <section class=" container-fluid">
            <div class="row">

            <div class="text-center watch col-md-6">
            <div class="mt-5 mb-3">
                <img src= {Watch} alt="" />
            </div>
        <div>
          <p>With the new Always-On Retina display. <br /> You’ve never seen a watch like this.</p>
        </div>
        <div>
          <ul class="row learn-buy  ">
              <li  class="col-6 "><a href="#">Learn more </a></li>
              <li class="col-6 " ><a href="#">Buy </a></li>
          </ul>
        </div>
      </div>

      <div class="text-center card-is-here  col-md-6">
        <div class="mt-5 mb-3" >
          <img src= {Apple} alt="" />
        </div>
        <div>
          <p>Get 3% Daily Cash on purchases from <br />
            Apple using Apple Card.</p>
        </div>
        <div>
          <ul class="row learn-buy  ">
              <li  class="col-6 "><a href="#">Learn more </a></li>
              <li class="col-6 " ><a href="#">Buy </a></li>
          </ul>
        </div>
      </div>

    </div>
  </section>


</div>
  )
}

export default ForthSection;