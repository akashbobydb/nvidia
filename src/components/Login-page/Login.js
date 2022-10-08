import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './login.css'
function Login() {
  return (
    <div>
        <section class="vh-100" style={{backgroundColor: "#508bfc;"}}>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-2-strong" style={{borderRadius: "1rem;"}}>
          <div class="card-body p-5 text-center">

            <h3 class="mb-5">Sign in</h3>

            <div class="form-outline mb-4">
              <input type="email" id="typeEmailX-2" class="form-control form-control-lg square" />
              <label class="form-label" for="typeEmailX-2">Email</label>
            </div>
            <div class="form-check d-flex justify-content-start mb-4">
              <input class="form-check-input square" type="checkbox" value="" id="form1Example3" />
              <label class="form-check-label" for="form1Example3"> Stay Logged In </label>
            </div>

            <button class="btn btn-primary btn-lg btn-block square" type="submit">Continue</button>

            <hr class="my-4"/>

            <button class="btn btn-lg btn-block btn-primary square"type="submit" style={{backgroundColor:"#dd4b39"}}>
            <i class="fab fa-google me-2"></i> Sign in with google</button><br/><br/><br/>
            <button class="btn btn-lg btn-block btn-primary mb-2 square" style={{backgroundColor: "#3b5998"}}
              type="submit"><i class="fab fa-facebook-f me-2"></i>Sign in with facebook</button>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Login