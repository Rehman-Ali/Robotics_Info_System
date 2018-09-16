import React, { Component } from 'react';


import '../../styles/css/linearicons.css';
import '../../styles/css/font-awesome.min.css';
import '../../styles/css/bootstrap.css';
import '../../styles/css/magnific-popup.css';
import '../../styles/css/hexagons.min.css';
import '../../styles/css/animate.min.css';
import '../../styles/css/owl.carousel.css';
import '../../styles/css/main.css';
import '../../styles/css/nice-select.css';

import i1 from '../../styles/img/i1.jpg';
import i2 from '../../styles/img/i2.jpg';
import i3 from '../../styles/img/i3.jpg';
import i4 from '../../styles/img/i4.jpg';
import i5 from '../../styles/img/i5.jpg';
import i6 from '../../styles/img/i6.jpg';
import i7 from '../../styles/img/i7.jpg';
import i8 from '../../styles/img/i8.jpg';
import logo from '../../styles/img/logo.png';
import banner from '../../styles/img/banner-img.png';
import p1 from '../../styles/img/p1.png';
import p2 from '../../styles/img/p2.png';
import p3 from '../../styles/img/p3.png';
import p4 from '../../styles/img/p4.png';
import about from '../../styles/img/about-img.png';
import play from '../../styles/img/play-btn.png';
import l1 from '../../styles/img/l1.png';
import l2 from '../../styles/img/l2.png';
import l3 from '../../styles/img/l3.png';
import l4 from '../../styles/img/l4.png';
import l5 from '../../styles/img/l5.png';
import b1 from '../../styles/img/b1.jpg';
import b2 from '../../styles/img/b2.jpg';
import { NavLink, Link} from 'react-router-dom';
import {BrowserRouter as  Router } from 'react-router-dom';
  

import {
	getFromStorage,
	getInStorage,
	setInStorage
  } from '../../utils/storage';
  
  

class WebUI extends Component {
	constructor(props) {
		super(props);
	
	this.onlogout=this.onlogout.bind(this);
	
		this.state = {
		  isLoading: true,
		  token: '',
		  
		};
	
	  }
	
	  onlogout(){
		this.setState({
		  isLoading:true
		})
		const obj = getFromStorage('the_main_app');
			if (obj && obj.token) {
			 const { token } = obj;
			// verify token
			fetch('/api/account/logout?token=' + token)
			  .then(res => res.json())
			  .then(json => {
				  debugger;
				if (json.success) {
					this.props.onLogOutEvent();
				//   this.setState({
				// 	token:'',
				// 	isLoading: false
	  
				//   });
				  this.props.history.push('/Home');
				} else {
				  this.setState({
					isLoading: false,
				  })
				}
			  });
	  
		  } else {
			this.setState({
			  isLoading: false
			})
		  }
	  }
	  
	  
	
	
	
	
	render() {


		const styles={
			widt:{
				width:'100%'
			},
			color:{
				backgroundColor:'#ae93fe',
			},
			abc:{
					
		position: 'absolute', 
		left: '-5000px'

			},
			button:{
				hight: '28px',
				widht:'70px',
				backgroundColor:'#ce95fe',
				color:'white'
			  },
			  
		}
// 	const width={
		
// 		width:'100%',
// 	 }

// 	 const color ={
// 		 backgroundColor:'#ae93fe',
		
// 			 }

// const style ={
	
// 		}

	  
    return(
		<Router>
            <section>
	  <header id="header" id="home">
	  <div id="home" style={styles.color}>
	  
	  
			    <div className="container main-menu">
			    	<div className="row align-items-center justify-content-between d-flex">
				      <div id="logo" >
					  
						  
				        <Link exact to="/"><img  src={logo} alt="" title="" /></Link>
				      
					  </div>
				      <nav id="nav-menu-container">
				        <ul className="nav-menu">
							
				          <li className="menu-active"><NavLink className="link" exact to="/">Home</NavLink></li>
				          <li><Link className="link" exact to='#'>About Us</Link></li>
				          <li><Link className="link" exact to="#">Products</Link></li>
				          <li><Link className="link" exact to="#">Contact</Link></li>
						  <li><button className='btn'  onClick={this.onlogout.bind(this)} style={styles.button}>Logout</button></li>

							
							  
						
				          	
						  	
						  		              
				        </ul>
				      </nav>     		
			    	</div>
			    </div>
				</div>
			  </header>

      {/* <!-- start banner Area --> */}
      
			<section className="banner-area" id="home">
				<div className="container">
					<div className="row fullscreen d-flex align-items-center justify-content-center">
						<div className="banner-content col-lg-6 col-md-6">
							<h1>
								Improved <br/>
								Production level <br/>
								with Robotics			
							</h1>
							<p className="text-white text-uppercase">
								Everyone wants the innovation through robotics
							</p>
							
							<Link exact to="#" className="primary-btn header-btn text-uppercase">View Details</Link>
							
						</div>
						<div className="banner-img col-lg-6 col-md-6">
							<img className="img-fluid" src={banner} alt=""/>
						</div>												
					</div>
				</div>
			</section>
			{/*  End banner Area  */}

			{/*  Start products Area */}
			<section className="products-area section-gap">
				<div className="container">
					<div className="row d-flex justify-content-center">
						<div className="col-md-12 pb-40 header-text text-center">
							<h1 className="pb-10">Featured Robotics Products to Show</h1>
							<p>
								Who are in extremely love with eco friendly system.
							</p>
						</div>
					</div>							
					<div className="row">
						<div className="col-lg-3 col-md-6">
							<div className="single-product">
								<div className="thumb">
									<img src={p1} alt=""/>
								</div>
								<div className="details">
									<h4>The Upper Eye</h4>
									<p>
										Who are in extremely love with eco friendly system.
									</p>
									
									<Link exact to="#" className="primary-btn text-uppercase">View Details</Link>
									
								</div>
							</div>
						</div>	
						<div className="col-lg-3 col-md-6">
							<div className="single-product">
								<div className="thumb">
									<img src={p2} alt=""/>
								</div>
								<div className="details">
									<h4>The Crab Wheel</h4>
									<p>
										Who are in extremely love with eco friendly system.
									</p>
									
									<Link exact to="#" className="primary-btn text-uppercase">View Details</Link>
									
								</div>
							</div>
						</div>	
						<div className="col-lg-3 col-md-6">
							<div className="single-product">
								<div className="thumb">
									<img src={p3} alt=""/>
								</div>
								<div className="details">
									<h4>The Plug Ninja</h4>
									<p>
										Who are in extremely love with eco friendly system.
									</p>
									
									<Link exact to="#" className="primary-btn text-uppercase">View Details</Link>
									
								</div>
							</div>
						</div>	
						<div className="col-lg-3 col-md-6">
							<div className="single-product">
								<div className="thumb">
									<img src={p4} alt=""/>
								</div>
								<div className="details">
									<h4>The Controller</h4>
									<p>
										Who are in extremely love with eco friendly system.
									</p>
									
									<Link exact to="#" className="primary-btn text-uppercase">View Details</Link>
									
								</div>
							</div>
						</div>																								
					</div>
				</div>	
			</section>
			{/* End products Area */}

			 {/* Start home-about Area  */}
			<section className="home-about-area">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col-lg-6 home-about-left no-padding">
							<img className="mx-auto d-block img-fluid" src={about} alt=""/>
						</div>
						<div className="col-lg-6 home-about-right no-padding">
							<h1>Globally Connected <br/>
							by Large Network</h1>
							<h5>
								We are here to listen from you deliver exellence
							</h5>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
							</p>
							
							<Link className="primary-btn text-uppercase" exact to="#">Get Details</Link>
							
						</div>
					</div>
				</div>	
			</section>
			{/*  End home-about Area  */}
			

			 {/* Start about-video Area  */}
			<section className="about-video-area section-gap">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 about-video-left">
							<h6 className="text-uppercase">Brand new app to blow your mind</h6>
							<h1>
								We’ve made a life <br/>
								that will change you 
							</h1>
							<p>
								<span>We are here to listen from you deliver exellence</span>
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmo d tempor incididunt ut labore et dolore magna aliqua.
							</p>
							
							<Link className="primary-btn" exact to="#">Get Started Now</Link>
							
						</div>
						<div className="col-lg-6 about-video-right justify-content-center align-items-center d-flex relative">
							<div className="overlay overlay-bg"></div>
							
							<Link className="play-btn" exact to="https://www.youtube.com/watch?v=ARA0AxrnHdM"><img className="img-fluid mx-auto" src={play} alt=""/></Link>
							
						</div>
					</div>
				</div>	
			</section>
			{/* End about-video Area  */}
			

			 {/* Start feature Area  */}
			<section className="feature-area section-gap">
				<div className="container">
					<div className="row d-flex justify-content-center">
						<div className="col-md-12 pb-40 header-text text-center">
							<h1 className="pb-10 text-white">Some Features that Made us Unique</h1>
							<p className="text-white">
								Who are in extremely love with eco friendly system.
							</p>
						</div>
					</div>							
					<div className="row">
						<div className="col-lg-4 col-md-6">
							<div className="single-feature">
								
								<Link exact to="#" className="title d-flex flex-row">
									<span className="lnr lnr-user"></span>
									<h4>Expert Technicians</h4>
								</Link>
								
								<p>
									Usage of the Internet is becoming more common due to rapid advancement of technology and power.
								</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="single-feature">
								
								<Link exact to="#" className="title d-flex flex-row">
									<span className="lnr lnr-license"></span>
									<h4>Professional Service</h4>
								</Link>
							
								<p>


									Usage of the Internet is becoming more common due to rapid advancement of technology and power.
								</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="single-feature">
								
								<Link exact to="#" className="title d-flex flex-row">
									<span className="lnr lnr-phone"></span>
									<h4>Great Support</h4>
								</Link>
								
								<p>
									Usage of the Internet is becoming more common due to rapid advancement of technology and power.
								</p>
							</div>
						</div>						
						<div className="col-lg-4 col-md-6">
							<div className="single-feature">
								
								<Link exact to="#" className="title d-flex flex-row">
									<span className="lnr lnr-rocket"></span>
									<h4>Technical Skills</h4>
								</Link>
								
								<p>
									Usage of the Internet is becoming more common due to rapid advancement of technology and power.
								</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="single-feature">
								
								 <Link exact to="#" className="title d-flex flex-row">
									<span className="lnr lnr-diamond"></span>
									<h4>Highly Recomended</h4>
								</Link>  
								
								<p>
									Usage of the Internet is becoming more common due to rapid advancement of technology and power.
								</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="single-feature">
							
								 <Link exact to="#" className="title d-flex flex-row">
							
								
							<span className="lnr lnr-bubble"></span>
									<h4>Positive Reviews</h4>
								</Link>  
								
								<p>
									Usage of the Internet is becoming more common due to rapid advancement of technology and power.
								</p>
							</div>
						</div>	

					</div>
				</div>	
			</section>
			{/* End feature Area  */}
			

			 {/* Start brand Area  */}
			<section className="brand-area pt-120">
				<div className="container">
					<div className="row align-items-center">
						<div className="col single-brand">
							<img className="img-fluid" src={l1} alt=""/>
						</div>
						<div className="col single-brand">
							<img className="img-fluid" src={l2} alt=""/>
						</div>
						<div className="col single-brand">
							<img className="img-fluid" src={l3} alt=""/>
						</div>
						<div className="col single-brand">
							<img className="img-fluid" src={l4} alt=""/>
						</div>
						<div className="col single-brand">
							<img className="img-fluid" src={l5} alt=""/>
						</div>
					</div>
				</div>	
			</section>
			 {/* End brand Area */}
			

			{/* Start blog Area */}
			<section className="blog-area section-gap">
				<div className="container">
					<div className="row d-flex justify-content-center">
						<div className="col-md-12 pb-40 header-text text-center">
							<h1 className="pb-10">Latest News from our Blog</h1>
							<p>
								Who are in extremely love with eco friendly system.
							</p>
						</div>
					</div>						
					<div className="row">
						<div className="col-lg-6 col-md-6 blog-left">
							<div className="thumb">
								<img className="img-fluid" src={b1} alt=""/>
							</div>
							<div className="detais">
								<ul className="tags">
								
									<li> <Link exact to="#">Travel</Link>  </li>
									<li> <Link exact to="#">Life Style</Link>  </li>
							
								</ul>
								
								 <Link exact to="#"><h4>Portable latest Fashion for young women</h4></Link>  
								
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore  et dolore.
								</p>
								<p className="date">31st January, 2018</p>
							</div>
						</div>
						<div className="col-lg-6 col-md-6 blog-right">
							<div className="thumb">
								<img className="img-fluid" src={b2} alt=""/>
							</div>
							<div className="detais">
								<ul className="tags">
								
									<li> <Link exact to="#">Travel</Link>  </li>
									<li> <Link exact to="#">Life Style</Link>  </li>
								
								</ul>
								
								 <Link exact to="#"><h4>Portable latest Fashion for young women</h4></Link>  
								
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore  et dolore.
								</p>
								<p className="date">31st January, 2018</p>
							</div>							
						</div>
					</div>
				</div>	
			</section>
			 {/* End blog Area */}
			
			{/* start footer Area 	 */}
			<footer className="footer-area section-gap">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-12">
							<div className="single-footer-widget">
								<h6>Top Products</h6>
								<ul className="footer-nav">
								
									<li> <Link  exact to="#">Managed Website</Link>  </li>
									<li> <Link exact to="#">Manage Reputation</Link>  </li>
									<li> <Link exact to="#">Power Tools</Link>  </li>
									<li> <Link exact to="#">Marketing Service</Link>  </li>
								
								</ul>
							</div>
						</div>
						<div className="col-lg-6  col-md-12">
							<div className="single-footer-widget newsletter">
								<h6>Newsletter</h6>
								<p>You can trust us. we only send promo offers, not a single spam.</p>
								<div id="mc_embed_signup">
									<form target="_blank"  action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get" className="form-inline">

										{/* <div className="form-group row" style="width: 100%"> */}
                    <div className="form-group row" style={styles.width}>
											<div className="col-lg-8 col-md-12">
												<input name="EMAIL" placeholder="Enter Email"  required="" type="email"/>
                         <div style={styles.abc}>
                        
													<input name="b_36c4fd991d266f23781ded980_aefe40901a" tabIndex="-1" value="" type="text"/>
												</div>
											</div> 
										
											<div className="col-lg-4 col-md-12">
												<button className="nw-btn primary-btn">Subscribe<span className="lnr lnr-arrow-right"></span></button>
											</div> 
												
										<div className="info"></div>
									</div>
                  </form>
								</div>
                </div>
                </div>
                </div>		
							</div>
					
						<div className="col-lg-3  col-md-12">
							<div className="single-footer-widget mail-chimp">
								<h6 className="mb-20">Instragram Feed</h6>
								<ul className="instafeed d-flex flex-wrap">
									<li><img src={i1} alt=""/></li>
									<li><img src={i2} alt=""/></li>
									<li><img src={i3} alt=""/></li>
									<li><img src={i4} alt=""/></li>
									<li><img src={i5} alt=""/></li>
									<li><img src={i6} alt=""/></li>
									<li><img src={i7} alt=""/></li>
									<li><img src={i8} alt=""/></li>
								</ul>
							</div>
						</div>						
				

					<div className="row footer-bottom d-flex justify-content-between">
						<p className="col-lg-8 col-sm-12 footer-text m-0 text-white"> &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="#"></i> by  <Link exact to="https://colorlib.com" target="_blank">Colorlib</Link>  
</p>
						<div className="col-lg-4 col-sm-12 footer-social">
						
							 <Link exact to="#"><i className="fa fa-facebook"></i></Link>  
							 <Link exact to="#"><i className="fa fa-twitter"></i></Link>  
							 <Link exact to="#"><i className="fa fa-dribbble"></i></Link>  
							 <Link exact to="#"><i className="fa fa-behance"></i></Link>  
							
						</div>
					</div>
			
			</footer>

      </section>

		</Router>
 
	);
	
}
  }


export default WebUI;
