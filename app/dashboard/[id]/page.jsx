import DashboardImages from "@/app/Components/dashboard/DashboardImages"
import UserDetails from "@/app/Components/dashboard/UserDetails"
import UserMap from "@/app/Components/dashboard/UserMap"
import Navbar from "@/app/Components/dashboard/dashboardNavbar"

const page = () => {

  return (
    <>
        <Navbar/>
       		 <div style={{backgroundColor : '#f8f9fe', height : "910vh"}}>
				<div className="breadcrumb-bar">
						<div className="container">
							<div className="row align-items-center">
								<div className="col-md-12 col-12">
									<h2 className="breadcrumb-title"> اعدادات الحساب</h2>
								</div>
							</div>
						</div>
					</div>	
			  <div className="container">	    
				<UserDetails/>
			  </div>
			  <div className="breadcrumb-bar my-5">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-md-12 col-12">
							<h2 className="breadcrumb-title"> عنوان النشاط </h2>
						</div>
					</div>
				</div>
     		 </div>
			  <div className="container">	    
				  <UserMap/>
			  </div>
			  <div className="breadcrumb-bar my-5">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-md-12 col-12">
							<h2 className="breadcrumb-title"> صور النشاط </h2>
						</div>
					</div>
				</div>
     		 </div>
			 <div className="container">	    
			 		<DashboardImages/>
			  </div>
           </div>
    </>
  )
}

export default page