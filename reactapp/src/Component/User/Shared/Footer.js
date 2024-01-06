import React from 'react'

const Footer = () => {
  return (
    
	<footer className="footer-area section_gap">
    <div className="container">
        <div className="row">
            <div className="col-lg-3  col-md-6 col-sm-6">
                <div className="single-footer-widget">
                    <h6>About Us</h6>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore
                        magna aliqua.
                    </p>
                </div>
            </div>
           
            <div className="col-lg-3  col-md-6 col-sm-6">
                <div className="single-footer-widget mail-chimp">
                    <h6 className="mb-20">Instragram Feed</h6>
                    <ul className="instafeed d-flex flex-wrap">
                        <li><img src="/assets/img/i1.jpg" alt=""/></li>
                        <li><img src="/assets/img/i2.jpg" alt=""/></li>
                        <li><img src="/assets/img/i3.jpg" alt=""/></li>
                        <li><img src="/assets/img/i4.jpg" alt=""/></li>
                        <li><img src="/assets/img/i5.jpg" alt=""/></li>
                        <li><img src="/assets/img/i6.jpg" alt=""/></li>
                        <li><img src="/assets/img/i7.jpg" alt=""/></li>
                        <li><img src="/assets/img/i8.jpg" alt=""/></li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="single-footer-widget">
                    <h6>Follow Us</h6>
                    <p>Let us be social</p>
                    <div className="footer-social d-flex align-items-center">
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-dribbble"></i></a>
                        <a href="#"><i className="fa fa-behance"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom d-flex justify-content-center align-items-center flex-wrap">
            <p className="footer-text m-0">
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>

</p>
        </div>
    </div>
</footer>
  )
}

export default Footer