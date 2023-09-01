import Staff from "@/app/Components/dashboard/Staff"
import StaffText from "@/app/Components/dashboard/StaffText"
import Navbar from "@/app/Components/dashboard/dashboardNavbar"

const page = ({params}) => {

  return (
    <>
        <Navbar params={params.id}/>
       		 <div style={{backgroundColor : '#f8f9fe', height : "100%", marginBottom : '50px'}}>
              <div className="breadcrumb-bar">
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-md-12 col-12">
                        <h2 className="breadcrumb-title"> طلب موظفين </h2>
                      </div>
                    </div>
                  </div>
                </div>	
             <div className="container">
                  <Staff/>
             </div>
             <div className="container">
                  <StaffText/>
             </div>
             <div className="container my-3">
                 <div className="row dashboard-input">
                  <div className="col-12">
                       <label for="formFile" class="form-label">اختر صوره</label>
                        <input className="form-control" type="file" id="formFile"/>
                  </div>
                 </div>
             </div>
           </div>
    </>
  )
}

export default page