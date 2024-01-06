import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = ()=> {
  return (
    <header className="header_area sticky-header">
	<div className="main_menu">
			<nav className="navbar navbar-expand-lg navbar-light main_box">
				<div className="container">
					
					<NavLink className="navbar-brand logo_h" to=""><img src="/assets/img/logo.png" alt=""/></NavLink>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
					 aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>

					<div className="collapse navbar-collapse offset" id="navbarSupportedContent">
						<ul className="nav navbar-nav menu_nav ml-auto">
							<li className="nav-item active"><NavLink className="nav-link" to="/">Home</NavLink></li>
							{/* <li className="nav-item submenu dropdown">
								<NavLink to="" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
								 aria-expanded="false">Shop</NavLink>
								<ul className="dropdown-menu">
									<li className="nav-item"><NavLink className="nav-link" to="category.html">Shop Category</NavLink></li>
									<li className="nav-item"><NavLink className="nav-link" to="single-product.html">Product Details</NavLink></li>
									<li className="nav-item"><NavLink className="nav-link" to="checkout.html">Product Checkout</NavLink></li>
									<li className="nav-item"><NavLink className="nav-link" to="cart.html">Shopping Cart</NavLink></li>
									<li className="nav-item"><NavLink className="nav-link" to="confirmation.html">Confirmation</NavLink></li>
								</ul>
							</li>
							<li className="nav-item submenu dropdown">
								<NavLink to="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
								 aria-expanded="false">Blog</NavLink>
								<ul className="dropdown-menu">
									<li className="nav-item"><NavLink className="nav-link" to="blog.html">Blog</NavLink></li>
									<li className="nav-item"><NavLink className="nav-link" to="single-blog.html">Blog Details</NavLink></li>
								</ul>
							</li> */}
							{/* <li className="nav-item submenu dropdown">
								<NavLink to="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
								 aria-expanded="false">Pages</NavLink>
								<ul className="dropdown-menu"> */}
									{/* <li className="nav-item"><NavLink className="nav-link" to="login.html">Login</NavLink></li> */}
									{/* <li className="nav-item"><NavLink className="nav-link" to="tracking.html">Tracking</NavLink></li>
									<li className="nav-item"><NavLink className="nav-link" to="elements.html">Elements</NavLink></li>
								</ul>
							</li> */}
							<li className="nav-item"><NavLink className="nav-link" to="contact.html">Contact</NavLink></li>
						</ul>
						
						
						<ul className="nav navbar-nav navbar-right">
							<li className="nav-item"><NavLink to="#" className="cart"><span className="ti-bag"></span></NavLink></li>
							<li className="nav-item">
								<button className="search"><span className="lnr lnr-magnifier" id="search"></span></button>
							</li>

							{
								localStorage.getItem("access-token") ?
								 <> 
								 <li className="nav-item"><NavLink className="nav-link" to="MyProfile">My Profile</NavLink></li>
								<li className="nav-item"><NavLink className="nav-link" to="/logout">Logout</NavLink></li>
								
								 </>
								  :
								<>
								<li className="nav-item"><NavLink className="nav-link" to="Signup">Signup</NavLink></li>
								<li className="nav-item"><NavLink className="nav-link" to="Login">Login</NavLink></li>
								</>
							}
							
							{/* <li className="nav-item"><NavLink className="nav-link" to="OldSignup">OldSignup</NavLink></li> */}
							
						</ul>
					</div>
				</div>
			</nav>
		</div>
		
	</header>
	

	
  )
}

export default Header