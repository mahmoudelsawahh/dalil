"use client"
import { useEffect, useRef, useState } from "react"
import { redirect, useRouter } from 'next/navigation';
import UserMap from "./UserMap";
import DashboardImages from "./DashboardImages";

const UserDetails = () => {
	const router = useRouter()
	if(!window.localStorage.getItem('dalilElmahalla')){
		redirect('/loginPage')
	}
	const [GetGovAllData , setGetGovAllData] = useState([]);
	const [GetGovId , seGetGovId] = useState(1);
	const [GetAllCity , setGetAllCity] = useState([]);
	const [Cat , setCat] = useState([]);
	const [CatId , setCatId] = useState(null);
	const [SubCat , SetSubCat] = useState([]);
	const ref = useRef()
	useEffect(() => {
		fetch(`http://192.168.0.201:8080/dalil-New/rest/test.branch/getStates/`)
		  .then((res) => res.json())
		  .then((data) => {
			setGetGovAllData(data)
		  })

		  fetch(`http://192.168.0.201:8080/dalil-New/rest/test.branch/getCities`,{
			method : 'POST',
			body : JSON.stringify({"id" : GetGovId}),
		})
		  .then((res) => res.json())
		  .then((data) => {
			return setGetAllCity(data.cities)
		  })

		  fetch(`http://192.168.0.201:8080/dalil-New/rest/test.category/cats`)
		  .then((res) => res.json())
		  .then((data) => {
			setCat(data)
		  })

		  if(CatId){
			const data = Cat.filter((item)=>{
				return item.id == CatId
			  })
			  SetSubCat(data)
		  }

	  }, [Cat, CatId, GetGovId])

	  	
  return (
    <>
        <form>
					<div className="container-xxl">
					<div className="row dashboard-input row-gap-4 mt-5">
						<div className="col-12 col-md-6">
							<label for="exampleFormControlInput1" class="form-label">المحافظة </label>
							<select class="form-select" aria-label="Default select example"  onChange={event => seGetGovId(event.target.value)}>
								{GetGovAllData.map((item)=>{
									return (
											<option value={item.id}  key={item.id}>{item.name}</option>
											)
								})}
							</select>
					</div>
						<div className="col-12 col-md-6">
							<label for="exampleFormControlInput1" class="form-label">المدينة </label>
							<select class="form-select" aria-label="Default select example">
								{GetAllCity.map((item)=>{
									return (
											<option value={item.id} key={item.id}>{item.name}</option>
											)
								})}
							</select>
						</div>
						<div className="col-12 col-md-6">
						<label for="exampleFormControlInput1" class="form-label">التصنيف الاساسي </label>
							<select class="form-select" aria-label="Default select example" onChange={event => setCatId(event.target.value)} >
									{Cat.map((item)=>{
										return (
												<option ref={ref} value={item.id}  key={item.id}>{item.name}</option>
												)
									})}
								</select>
						</div>
						<div className="col-12 col-md-6">
						<label for="exampleFormControlInput1" class="form-label">التصنيف الفرعي  </label>
						<select class="form-select" aria-label="Default select example">
									{SubCat.length > 0 ? 
										SubCat[0].catList.map((item)=>{
										return (
												<option value={item.id}  key={item.id}>{item.name}</option>
												)
									}):
									null
									}
								</select>
						</div>
						<div className="col-12 col-md-6">
							<label for="exampleFormControlInput1" class="form-label">اسم النشاط  </label>
							<input type="text" class="form-control" placeholder={" برجاء ادخال اسم النشاط "} required	
							/>
						</div>
						<div className="col-12 col-md-6">
							<label for="exampleFormControlInput1" class="form-label">رقم الهاتف </label>
							<input type="tel" class="form-control" placeholder={" برجاء ادخال رقم الهاتف  "} required	
							/>
						</div>
						<div className="col-12 col-md-6">
							<label for="exampleFormControlInput1" class="form-label">رابط صفحة الفيس بوك  </label>
							<input type="text" class="form-control" placeholder={"ادخل رابط صفحة الفيس بوك"} required	
							/>
						</div>
						<div className="col-12 col-md-6">
							<label for="exampleFormControlInput1" class="form-label">facebook page id</label>
							<input type="number" class="form-control" placeholder={"ادخل ID صفحه الفيس بوك  "} required	
							/>
						</div>
						<div className="col-12 col-md-6">
							<label for="exampleFormControlInput1" class="form-label">رقم الواتساب</label>
							<input type="tel" class="form-control" placeholder={" برجاء ارسال رقم الواتساب"} required	
							/>
						</div>
						<div className="col-12 col-md-6">
							<label for="exampleFormControlInput1" class="form-label">رابط صفحه الانستجرام</label>
							<input type="text" class="form-control" placeholder={" برجاء ادخال رابط  الانستجرام"} required	
							/>
						</div>
						<div className="col-12 col-md-6">
							<label for="exampleFormControlInput1" class="form-label"> البريد الالكتروني</label>
							<input type="email" class="form-control" placeholder={" برجاء ادخال البريد الالكتروني "} required	
							/>
						</div>
						<div className="col-12 col-md-6">
							<label for="exampleFormControlInput1" class="form-label"> المواقع الالكتروني </label>
							<input type="text" class="form-control" placeholder={"   رابط المواقع  "} required	
							/>
						</div>
						<div className="col-12 col-md-6">
							<label for="exampleFormControlInput1" class="form-label">  رقم تيليجرام </label>
							<input type="number" class="form-control" placeholder={" برجاء ارسال رقم التيليجرام"} required	
							/>
						</div>
						<div className="col-12 col-md-6">
							<label for="exampleFormControlInput1" class="form-label">  قناه اليوتيوب  </label>
							<input type="text" class="form-control" placeholder={"رابط القناه"} required	
							/>
						</div>
						<div className="col-12 col-md-6">
							<label for="exampleFormControlInput1" class="form-label">  حساب لينكد ان   </label>
							<input type="text" class="form-control" placeholder={"رابط حساب لينكد ان"} required	
							/>
						</div>
						<div className="col-12 col-md-6">
							<label for="exampleFormControlInput1" class="form-label">   حساب تويتر    </label>
							<input type="text" class="form-control" placeholder={"رابط حساب تويتر  "} required	
							/>
						</div>
						<div className="col-12">
							<label for="exampleFormControlInput1" class="form-label">عنوان النشاط</label>
							<input type="text" class="form-control" placeholder={" برجاء ادخال عنوان النشاط   "} required	
							/>
						</div>
						<div className="col-12">
							<label for="exampleFormControlInput1" class="form-label">وصف النشاط</label>
							<textarea class="form-control p-3" id="exampleFormControlTextarea1" rows="10" 
							 placeholder={"ادخل وصف النشاط بشكل تفصيلي"} required
							></textarea>

						</div>
					</div>
					</div>
					<div className="breadcrumb-bar my-5">
				<div className="container-xxl">
					<div className="row align-items-center">
						<div className="col-md-12 col-12">
							<h2 className="breadcrumb-title"> عنوان النشاط </h2>
						</div>
					</div>
				</div>
     		 </div>
			  <div className="container-xxl">	    
				  <UserMap/>
			  </div>
			  <div className="breadcrumb-bar my-5">
				<div className="container-xxl">
					<div className="row align-items-center">
						<div className="col-md-12 col-12">
							<h2 className="breadcrumb-title"> صور النشاط </h2>
						</div>
					</div>
				</div>
     		 </div>
			 <div className="container-xxl">	    
			 		<DashboardImages/>
			  </div>
			  <div className="container-xxl">	    
			     <div style={{marginTop : '50px'}}>
					 <button type="submit" className="btn" style={{backgroundColor : '#055c97', fontSize : '16px', fontWeight : 700, color : '#fff', width : '100%', padding : '10px 0px'}}>تسجيل النشاط</button>
				 </div>
			  </div>
		   		</form>
				
    </>
  )
}

export default UserDetails