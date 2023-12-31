import OfferForm from "@/app/Components/dashboard/OfferForm"
import StaffText from "@/app/Components/dashboard/StaffText"
import Navbar from "@/app/Components/dashboard/dashboardNavbar"

const page = ({params}) => {

  return (
    <>
        <Navbar params={params.id}/>
       		 <div style={{backgroundColor : '#f8f9fe', height : "100%", marginBottom : '50px'}}>
              <div className="breadcrumb-bar">
                  <div className="container-xxl">
                    <div className="row align-items-center">
                      <div className="col-md-12 col-12">
                        <h2 className="breadcrumb-title"> انشاء عرض جديد  </h2>
                      </div>
                    </div>
                  </div>
                </div>	
             <div className="container-xxl">
                  <OfferForm/>
             </div>
             <div className="container-xxl">
                  <StaffText/>
             </div>
			 <div className="container-xxl">	    
			     <div style={{marginTop : '50px'}}>
					 <button className="btn" style={{backgroundColor : '#055c97', fontSize : '16px', fontWeight : 700, color : '#fff',
					  width : '100%', padding : '10px 0px'}}>انشاء عرض جديد </button>
				 </div>
			  </div>
           </div>
    </>
  )
}

export default page