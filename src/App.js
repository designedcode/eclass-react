import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    render(){  
return (
    <div className="App">
      <div>
  <div id="loading-overlay"> 
    <div className="loader" />             
  </div>         
  <header id="header" className="header main-header"> 
    <div className="container"> 
      <div className="flex-header"> 
        <div id="logo" className="logo"> 
          <a href="index.html" title="Logo"><img src="images/logo/logo02.png" alt="images" data-width={115} data-height={50} data-retina="images/logo/logo02@2x.png" /></a> 
        </div>                     
        <div className="content-menu"> 
          <div className="nav-wrap"> 
            <div className="btn-menu mr-3">
              <span />
            </div>                             
            <nav id="mainnav" className="mainnav"> 
              <ul className="menu"> 
                <li>
                  <a href="#" className="active">Home</a> 
                </li>                                     
                <li>
                  <a href="faq.html">FAQs</a> 
                </li>                                     
                <li>
                  <a href="contact.html">Contact Us</a>
                </li>                                     
              </ul>                                 
            </nav>                             
          </div>                         
          <div className="lang-user"> 
            <a href="login.html">Login/Signup</a>
            <div className="user"> 
              <a href="login.html" className="block" /> 
              <a href="login.html" className="icon"><span className="icon-user" /></a> 
            </div>                             
          </div>                         
        </div>                     
      </div>                 
    </div>             
  </header>
  {/* header */}         
  <div className="banner-home banner-home-st2"> 
    <div className="container"> 
      <div className="row"> 
        <div className="col-lg-6 col-md-8 col-12"> 
          <div className="content-st2"> 
            <h1 className="title text-white">An E-classroom with everything you need.</h1> 
            <p className="text-white"> 
              Making teaching and learning easier.</p> 
            <div className="fl-btn btn-linear linear-color-three"> 
              <a href="login.html" className="btn-services hv-linear border-corner">Login/Signup</a> 
            </div>                             
          </div>                         
        </div>                     
      </div>                 
    </div>             
    <div className="featured-post"> 
      <div className="entry-image up-down"> 
        <img src="images/transparent-head/04.png" alt="images" /> 
      </div>                 
    </div>             
    <div className="shape1">
      <img src="images/transparent-head/05.png" alt="images" />
    </div>             
    <div className="shape2">
      <img src="images/transparent-head/06.png" alt="images" />
    </div>             
    <div className="shape3">
      <img src="images/transparent-head/07.png" alt="images" />
    </div>             
    <div className="shape4 rotateme">
      <img src="images/transparent-head/08.png" alt="images" />
    </div>             
    <div className="shape5">
      <img src="images/transparent-head/09.png" alt="images" />
    </div>             
    <div className="shape6">
      <img src="images/transparent-head/10.png" alt="images" />
    </div>             
    <div className="shape7">
      <img src="images/transparent-head/11.png" alt="images" />
    </div>             
  </div>
  {/* banner-home */}         
  <section className="services services-title-two services-style2"> 
    <div className="container"> 
      <div className="title-section text-center wow fadeInDown"> 
        <p className="sub-heading color-one">What we do?</p> 
        <h2 className="flat-title">We connect Teachers and<br />Students seamlessly</h2> 
      </div>                 
      <div className="row"> 
        <div className="col-lg-4 col-12 wow fadeInUp"> 
          <div className="services-box services-box-type2"> 
            <div className="iconbox-icon">
              <span className="icon-tax" />
            </div>                             
            <div className="iconbox-content"> 
              <h3 className="title">Attendance Record</h3> 
              <p className="description"> 
                No need to worry about taking attendance manually, E Class has got you covered. </p> 
              <div className="read-more">
                <a href="#">Read more</a>
              </div>                                 
            </div>                             
            <div className="pattern-sv none-479">
              <span className="icon icon-kl" />
            </div>                             
          </div>                         
        </div>                     
        <div className="col-lg-4 col-12 wow fadeInDown" data-wow-delay="800ms"> 
          <div className="services-box services-box-type2"> 
            <div className="iconbox-icon">
              <span className="icon-analysis" />
            </div>                             
            <div className="iconbox-content"> 
              <h3 className="title">Student Retention</h3> 
              <p className="description"> 
                Our AI will make sure the student studies honestly in the class and does not leave the class unattended. </p> 
              <div className="read-more">
                <a href="#">Read more</a>
              </div>                                 
            </div>                             
            <div className="pattern-sv none-479">
              <span className="icon icon-kl" />
            </div>                             
          </div>                         
        </div>                     
        <div className="col-lg-4 col-12 wow fadeInDown" data-wow-delay="1200ms"> 
          <div className="services-box services-box-type2"> 
            <div className="iconbox-icon">
              <span className="icon-connection" />
            </div>                             
            <div className="iconbox-content"> 
              <h3 className="title">Sharing Files</h3> 
              <p className="description"> 
                Teachers can directly share assignments andother files with students on the same platform.</p> 
              <div className="read-more">
                <a href="#">Read more</a>
              </div>                                 
            </div>                             
            <div className="pattern-sv none-479">
              <span className="icon icon-kl" />
            </div>                             
          </div>                         
        </div>                     
      </div>                 
    </div>             
  </section>
  {/* services */}         
  <section className="find-customer find-customer-no-shape find-customer-col find-customer-style3"> 
    <div className="container-fluid d-lg-flex"> 
      <div className="col-left wow fadeInLeft"> 
        <div className="themesflat-content-box" data-padding="0% 0% 0% 28.2%" data-sdesktoppadding="0% 15px 0% 0%" data-ssdesktoppadding="0% 15px 0% 0%" data-mobipadding="0% 0% 0% 0%" data-smobipadding="0% 0% 0% 0%"> 
          <div className="featured-post position-relative"> 
            <div className="entry-image up-down"> 
              <img src="images/find-customer/02.png" alt="images" /> 
            </div>                             
            <div className="spinning-circle-customer none-1199" />                             
          </div>                         
        </div>                     
      </div>                 
      <div className="col-right"> 
        <div className="themesflat-content-box" data-padding="63px 40% 0% 21px" data-sdesktoppadding="0% 0% 0% 15px" data-ssdesktoppadding="0% 0% 0% 15px" data-mobipadding="0% 0% 0% 0%" data-smobipadding="0% 0% 0% 0%"> 
          <div className="title-section wow fadeInDown" data-wow-delay="400ms"> 
            <p className="sub-heading color-one">Reliable.</p> 
            <h2 className="flat-title">AI technology that you can rely upon.</h2> 
          </div>                         
          <div className="content-find-customer wow fadeInRight" data-wow-delay="600ms"> 
            <p> 
              Our AI is trained by experts that can detect if the student is making full use of the class and won't the allow the student to misuse this priveledge. </p> 
            <p> 
              It can detect video and audio and tell the difference. </p> 
            <div className="fl-btn btn-linear linear-color-three mg-36"> 
              <a href="contact.html" className="btn-send hv-linear border-corner">Contact Us</a> 
            </div>                             
          </div>                         
        </div>                     
      </div>                 
    </div>             
  </section>
  {/* find-customer */}         
  <section className="best-business best-business-type2 clearfix"> 
    <div className="container"> 
      <h3 className="title text-white wow fadeInDown">A whole classroom but Digital and Easy.</h3> 
    </div>             
    <div className="container-fluid"> 
      <div className="col-left"> 
        <div className="themesflat-content-box" data-padding="0% 0% 0% 1.8%" data-sdesktoppadding="0% 0% 0% 0%" data-ssdesktoppadding="0% 0% 0% 0%" data-mobipadding="0% 0% 0% 0%" data-smobipadding="0% 0% 0% 0%"> 
          <div className="content"> 
            <div className="business-nav-custom nav-custom"> 
              <div className="banners-z"> 
                <div className="flat-carousel-box data-effect clearfix" data-zero={1} data-gap={20} data-column={3} data-column2={2} data-column3={2} data-column4={1} data-dots="false" data-auto="true" data-nav="true" data-loop="true"> 
                  <div className="owl-carousel"> 
                    <div className="business-box business-bg bg-one"> 
                      <div className="t-wrap"> 
                        <div className="icon">
                          <span className="icon-clock" />
                        </div>                                                     
                        <div className="name">Break time</div>                                                     
                      </div>                                                 
                      <p className="description"> 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa magna onsectetur adipiscing irure dolor cillum dolore eu fugiat nulla pariat sint occaecat cupidatat. </p> 
                    </div>                                             
                    <div className="business-box business-bg bg-two"> 
                      <div className="t-wrap"> 
                        <div className="icon">
                          <span className="icon-clock" />
                        </div>                                                     
                        <div className="name">No Compromise</div>                                                     
                      </div>                                                 
                      <p className="description"> 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa magna onsectetur adipiscing irure dolor cillum dolore eu fugiat nulla pariat sint occaecat cupidatat. </p> 
                    </div>                                             
                    <div className="business-box business-bg bg-three"> 
                      <div className="t-wrap"> 
                        <div className="icon">
                          <span className="icon-digital-marketing" />
                        </div>                                                     
                        <div className="name">Collect Files</div>                                                     
                      </div>                                                 
                      <p className="description"> 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa magna onsectetur adipiscing irure dolor cillum dolore eu fugiat nulla pariat sint occaecat cupidatat. </p> 
                    </div>                                             
                    <div className="business-box business-bg bg-one"> 
                      <div className="t-wrap"> 
                        <div className="icon">
                          <span className="icon-clock" />
                        </div>                                                     
                        <div className="name">Schedule</div>                                                     
                      </div>                                                 
                      <p className="description"> 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa magna onsectetur adipiscing irure dolor cillum dolore eu fugiat nulla pariat sint occaecat cupidatat. </p> 
                    </div>                                             
                  </div>                                         
                </div>                                     
              </div>                                 
            </div>                             
            <div className="rectangle-bg-business none-1199"> 
              <img src="images/best-business/03.png" alt="images" /> 
            </div>                             
          </div>                         
        </div>                     
      </div>                 
      <div className="col-right position-relative"> 
        <div className="themesflat-content-box" data-padding="0% 0% 0% 14%" data-sdesktoppadding="0% 0% 0% 0%" data-ssdesktoppadding="0% 0% 0% 0%" data-mobipadding="0% 0% 0% 0%" data-smobipadding="0% 0% 0% 0%"> 
          <div className="featured-post wow fadeInRight" data-wow-delay="400ms"> 
            <div className="entry-image up-down"> 
              <img src="images/best-business/02.png" alt="images" /> 
            </div>                             
          </div>                         
        </div>                     
      </div>                 
    </div>             
    <div className="rectangle-4 none-1199" />             
    <div className="rectangle-5 none-1199" />             
    <div className="rectangle-6 none-1199" />             
  </section>
  <div className="flat-team-manager"> 
    <div className="container"> 
      <div className="title-section text-center wow fadeInDown"> 
        <p className="sub-heading color-one">Team</p> 
        <h2 className="flat-title">Meet our awesome <br /> team</h2> 
      </div>                 
      <div className="row"> 
        <div className="col-lg-3 col-md-6 col-sm-6 col-12 wow fadeInUp"> 
          <div className="team-manager hv-link-custom"> 
            <div className="info-bg" />                             
            <div className="featured-post"> 
              <div className="entry-image"> 
                <a href="#"><img src="images/team-members/09.png" alt="images" /></a> 
                <div className="overlay" />                                     
              </div>                                 
            </div>                             
            <div className="content"> 
              <h3 className="name"><a href="#">Japneet Singh</a></h3> 
              <div className="role">CEO and Founder</div>                                 
            </div>                             
            <div className="ellipse-color" />                             
          </div>                         
        </div>                     
        <div className="col-lg-3 col-md-6 col-sm-6 col-12 wow fadeInUp" data-wow-delay="400ms"> 
          <div className="team-manager hv-link-custom"> 
            <div className="info-bg" />                             
            <div className="featured-post"> 
              <div className="entry-image"> 
                <a href="#"><img src="images/team-members/10.png" alt="images" /></a> 
                <div className="overlay" />                                     
              </div>                                 
            </div>                             
            <div className="content"> 
              <h3 className="name"><a href="#">Aastha Bhasin</a></h3> 
              <div className="role">Frontend Dev</div>                                 
            </div>                             
            <div className="ellipse-color" />                             
          </div>                         
        </div>                     
        <div className="col-lg-3 col-md-6 col-sm-6 col-12 wow fadeInUp" data-wow-delay="800ms"> 
          <div className="team-manager hv-link-custom"> 
            <div className="info-bg" />                             
            <div className="featured-post"> 
              <div className="entry-image"> 
                <a href="#"><img src="images/team-members/11.png" alt="images" /></a> 
                <div className="overlay" />                                     
              </div>                                 
            </div>                             
            <div className="content"> 
              <h3 className="name"><a href="#">Tejpal</a></h3> 
              <div className="role">Backend Dev</div>                                 
            </div>                             
            <div className="ellipse-color" />                             
          </div>                         
        </div>                     
        <div className="col-lg-3 col-md-6 col-sm-6 col-12 wow fadeInUp" data-wow-delay="1200ms"> 
          <div className="team-manager hv-link-custom"> 
            <div className="info-bg" />                             
            <div className="featured-post"> 
              <div className="entry-image"> 
                <a href="#"><img src="images/team-members/12.png" alt="images" /></a> 
                <div className="overlay" />                                     
              </div>                                 
            </div>                             
            <div className="content"> 
              <h3 className="name"><a href="#">Golu Taneja</a></h3> 
              <div className="role">Aese hi Faltu</div>                                 
            </div>                             
            <div className="ellipse-color" />                             
          </div>                         
        </div>                     
      </div>                 
    </div>             
  </div>
  <section className="testimonial-cs"> 
    <div className="container"> 
      <div className="custom-nav-two nav-custom"> 
        <div className="banners-z"> 
          <div className="flat-carousel-box data-effect clearfix" data-zero={1} data-gap={20} data-column={1} data-column2={1} data-column3={1} data-column4={1} data-dots="false" data-auto="true" data-nav="true" data-loop="true"> 
            <div className="owl-carousel"> 
              <div className="testimonial testimonial-type3 text-center"> 
                <div className="author-info"> 
                  <div className="avatar"> 
                    <img src="images/testimonial/01.png" alt="images" /> 
                    <div className="polygon">
                      <img src="images/testimonial/09.png" alt="images" />
                    </div>                                             
                    <div className="quotes-small"> 
                      <span className="icon icon-text-quotes" /> 
                    </div>                                             
                  </div>                                         
                  <div className="star-rating"> 
                    <i className="fa fa-star" aria-hidden="true" /> 
                    <i className="fa fa-star" aria-hidden="true" /> 
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" /> 
                  </div>                                         
                  <p> 
                    Ut enim ad minim veniam, quis nostrud exercitat laboris nisi ut aliquip ex ea commodo consequat irure dolor in reprehenderit in voluptate velit esse dolore eu fugiat nulla pariatur. Excepteur sint cupidatat non proident, sunt in culpa qui officia mollit anim id est laborum. </p> 
                  <div className="name">
                    <a href="#">Dr. Rakhi Dhingra</a>
                  </div>                                         
                  <div className="role">Director, IPU</div>                                         
                </div>                                     
              </div>                                 
              <div className="testimonial testimonial-type3 text-center"> 
                <div className="author-info"> 
                  <div className="avatar"> 
                    <img src="images/testimonial/01.png" alt="images" /> 
                    <div className="polygon">
                      <img src="images/testimonial/09.png" alt="images" />
                    </div>                                             
                    <div className="quotes-small"> 
                      <span className="icon icon-text-quotes" /> 
                    </div>                                             
                  </div>                                         
                  <div className="star-rating"> 
                    <i className="fa fa-star" aria-hidden="true" /> 
                    <i className="fa fa-star" aria-hidden="true" /> 
                    <i className="fa fa-star" aria-hidden="true" /> 
                    <i className="fa fa-star" aria-hidden="true" /> 
                    <i className="fa fa-star" aria-hidden="true" /> 
                  </div>                                         
                  <p> 
                    Ut enim ad minim veniam, quis nostrud exercitat laboris nisi ut aliquip ex ea commodo consequat irure dolor in reprehenderit in voluptate velit esse dolore eu fugiat nulla pariatur. Excepteur sint cupidatat non proident, sunt in culpa qui officia mollit anim id est laborum. </p> 
                  <div className="name">
                    <a href="#">Mrs. Rajiv Chopra</a>
                  </div>                                         
                  <div className="role">Book Author</div>                                         
                </div>                                     
              </div>                                 
            </div>                             
          </div>                         
        </div>                     
      </div>                 
    </div>             
    <div className="color-circle-one blurs-circle wow fadeInLeft" data-wow-delay="400ms" />             
    <div className="color-circle-two blurs-circle wow fadeInRight" data-wow-delay="600ms" />             
    <div className="spinning-circle-three blurs-circle wow fadeInLeft" data-wow-delay="400ms" />             
    <div className="spinning-circle-four blurs-circle wow fadeInRight" data-wow-delay="600ms" />             
  </section>
  <div className="footer-background"> 
    <footer id="footer" className="footer"> 
      <div className="container"> 
        <div className="partners"> 
          <div className="banners-z"> 
            <div className="flat-carousel-box data-effect clearfix" data-zero={0} data-gap={70} data-column={6} data-column2={5} data-column3={4} data-column4={2} data-dots="false" data-auto="true" data-nav="false" data-loop="true"> 
              <div className="owl-carousel"> 
                <img src="images/partners/01.png" alt="images" /> 
                <img src="images/partners/02.png" alt="images" /> 
                <img src="images/partners/03.png" alt="images" /> 
                <img src="images/partners/04.png" alt="images" /> 
                <img src="images/partners/05.png" alt="images" /> 
                <img src="images/partners/06.png" alt="images" /> 
              </div>                                 
            </div>                             
          </div>                         
        </div>                     
        <div id="footer-widget"> 
          <div className="row"> 
            <div className="col-lg-5 col-12"> 
              <div className="widget widget-subscribe"> 
                <div className="text">Join with the Teachers community for latest updates.</div>                                     
                <form action="#" className="subscribe-form btn-linear linear-color-one"> 
                  <input type="email" placeholder="Teacher@gmail.com" /> 
                  <button className="btn-join-now hv-linear">join now</button>                                         
                </form>                                     
              </div>                                 
            </div>                             
            <div className="col-lg-3 col-md-4 col-sm-4 col-12 mg-widget pd-footer-69"> 
              <h3 className="widget widget-title">Support</h3> 
              <ul className="widget-nav-menu"> 
                <li>
                  <a href="faq.html">FAQ</a>
                </li>                                     
                <li>
                  <a href="contact.html">Contact us</a>
                </li>                                     
              </ul>                                 
            </div>                             
            <div className="col-lg-2 col-md-4 col-sm-4 col-12 mg-widget"> 
              <h3 className="widget widget-title">About Us</h3> 
              <ul className="widget-nav-menu"> 
                <li>
                  <a href="about.html">About Us</a>
                </li>                                     
              </ul>                                 
            </div>                             
            <div className="col-lg-2 col-md-4 col-sm-4 col-12 mg-widget"> 
              <h3 className="widget widget-title">Social Media</h3> 
              <ul className="widget-social-media"> 
                <li>
                  <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
                </li>                                     
                <li>
                  <a href="#" className="active"><i className="fa fa-twitter" aria-hidden="true" /></a>
                </li>                                     
                <li>
                  <a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a>
                </li>                                     
                <li>
                  <a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a>
                </li>                                     
              </ul>                                 
            </div>                             
          </div>                         
        </div>                     
      </div>                 
      <div className="spinning-circle-top blurs-circle" />                 
      <div className="spinning-circle-bottom blurs-circle" />                 
    </footer>
    {/* footer */}             
    <div id="bottom" className="bottom"> 
      <div className="container"> 
        <div className="bottom-wrap"> 
          <div className="bottom-inside d-md-flex justify-content-md-between align-items-center"> 
            <div id="copyright">Copyright 2020. All Rights Reserved</div>                             
            <div className="logo-footer"> 
              <a href="index.html"><img src="images/logo/logo03.png" alt="images" /></a> 
            </div>                             
          </div>                         
        </div>                     
      </div>                 
    </div>
    {/* bottom */}             
    <a id="scroll-top" className="show" /> 
  </div>
</div>

    </div>
  );
}
}
export default App;
