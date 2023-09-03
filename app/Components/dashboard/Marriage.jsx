"use client"

const MarriedForm = () => {
	

  return (
    <>
     <div className="breadcrumb-bar">
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-md-12 col-12">
                        <h2 className="breadcrumb-title"> طلب زواج / البيانات الاساسيه    </h2>
                      </div>
                    </div>
                  </div>
    </div>	

        <div className="container">
             <form>
					<div className="row dashboard-input row-gap-4 mt-5">
						<div className="col-12 col-md-6">
							<label for="exampleFormControlInput1" class="form-label">الاسم</label>
							<input type="text" class="form-control" placeholder={" برجاء ادخال الاسم  "} required	
							/>
						</div>
                        <div className="col-12 col-md-6">
                            <label for="exampleFormControlInput1" class="form-label">تاريخ الميلاد</label>
                            <input type="date" class="form-control" />
                        </div>
						<div className="col-12 col-md-6">
							<label for="exampleFormControlInput1" class="form-label"> العمر </label>
							<input type="number" class="form-control" required	
							/>
						</div>
						<div className="col-12 col-md-6">
							<label for="exampleFormControlInput1" class="form-label"> الوزن </label>
							<input type="number" class="form-control" required	
							/>
						</div>
                        <div className="col-12 col-md-6">
							<label for="exampleFormControlInput1" class="form-label"> الطول</label>
							<input type="number" class="form-control" required	
							/>
						</div>
                        <div className="col-12 col-md-6">
                            <label for="exampleFormControlInput1" class="form-label">الحالة الوظيفية</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option value="1" selected>نعم لدي عمل</option>
                                    <option value="2">ليس لدي عمل الان</option>
                                </select>
                        </div>
					</div>
		    </form>
        </div>
     <div className="breadcrumb-bar my-5">
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-md-12 col-12">
                        <h2 className="breadcrumb-title">   بيانات اجتماعية     </h2>
                      </div>
                    </div>
                  </div>
    </div>	
        <div className="container">
             <form>
					<div className="row dashboard-input row-gap-4 mt-5">
                        <div className="col-12 col-md-6">
                            <label for="exampleFormControlInput1" class="form-label">المحافظة </label>
                                <select class="form-select" aria-label="Default select example">
                                    <option value="1" selected>  الغربيه</option>
                                    <option value="2"> الاسكندريه</option>
                                </select>
                        </div>
                        <div className="col-12 col-md-6">
                            <label for="exampleFormControlInput1" class="form-label">المدينه </label>
                                <select class="form-select" aria-label="Default select example">
                                    <option value="1" selected>  المحله الكبري</option>
                                    <option value="2"> الاسكندريه</option>
                                </select>
                        </div>
                        <div className="col-12 col-md-6">
                            <label for="exampleFormControlInput1" class="form-label">الديانة </label>
                                <select class="form-select" aria-label="Default select example">
                                    <option value="1" selected>   مسلم</option>
                                    <option value="2"> مسيحي</option>
                                </select>
                        </div>
                        <div className="col-12 col-md-6">
                            <label for="exampleFormControlInput1" class="form-label">الحالة الاجتماعية </label>
                                <select class="form-select" aria-label="Default select example">
                                    <option value="1" selected>   متزوج</option>
                                    <option value="2"> اعذب</option>
                                    <option value="2"> مطلق</option>
                                    <option value="2"> ارمل</option>

                                </select>
                        </div>
					</div>
		    </form>
         </div>
         <div className="breadcrumb-bar my-5">
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-md-12 col-12">
                        <h2 className="breadcrumb-title">بيانات  مهمة</h2>
                      </div>
                    </div>
                  </div>
    </div>	
        <div className="container">
             <form>
					<div className="row dashboard-input row-gap-4 mt-5">
                        <div className="col-12 col-md-6">
                            <label for="exampleFormControlInput1" class="form-label">لون البشرة </label>
                                <select class="form-select" aria-label="Default select example">
                                    <option value="1" selected>  قمحي</option>
                                    <option value="2"> ابيض</option>
                                    <option value="2"> اسمر</option>

                                </select>
                        </div>
                        <div className="col-12 col-md-6">
                            <label for="exampleFormControlInput1" class="form-label">القوام </label>
                                <select class="form-select" aria-label="Default select example">
                                    <option value="1" selected>  نحيف </option>
                                    <option value="2"> متوسط</option>
                                    <option value="3"> ممتلي</option>

                                </select>
                        </div>
                        <div className="col-12 col-md-6">
                            <label for="exampleFormControlInput1" class="form-label">التدخين </label>
                                <select class="form-select" aria-label="Default select example">
                                    <option value="1" selected>   غير مدخن </option>
                                    <option value="2"> مدخن</option>
                                </select>
                        </div>
                        <div className="col-12 col-md-6">
                            <label for="exampleFormControlInput1" class="form-label">المؤهل  </label>
                                <select class="form-select" aria-label="Default select example">
                                    <option value="1" selected>   جامعي</option>
                                    <option value="2"> دراسه متوسطه</option>
                                    <option value="3"> بدون  مؤهل </option>
                                </select>
                        </div>
					</div>
		    </form>
         </div>
         <div className="breadcrumb-bar my-5">
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-md-12 col-12">
                        <h2 className="breadcrumb-title">معلومات الشخص   </h2>
                      </div>
                    </div>
                  </div>
    </div>	
        <div className="container">
             <form>
					<div className="row dashboard-input row-gap-4 mt-5">
                    <div className="col-12">
							<label for="exampleFormControlInput1" class="form-label">نبذه مختصرة عن نفسى </label>
							<textarea class="form-control p-3" id="exampleFormControlTextarea1" rows="10" 
							 placeholder={"ادخل نبذه مختصرة عن نفسك  "} required
							></textarea>

						</div>
                        <div className="col-12">
							<label for="exampleFormControlInput1" class="form-label">ما اتمناه ف الطرف الاخر </label>
							<textarea class="form-control p-3" id="exampleFormControlTextarea1" rows="10" 
							 placeholder={"ما اتمناه في الطرف الاخر"} required
							></textarea>

						</div>
                       
					</div>
		    </form>
         </div>
         <div className="breadcrumb-bar my-5">
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-md-12 col-12">
                        <h2 className="breadcrumb-title">مواصفات شريك الحياة</h2>
                      </div>
                    </div>
                  </div>
    </div>	
        <div className="container">
             <form>
					<div className="row dashboard-input row-gap-4 mt-5">
          <div className="col-12 col-md-6">
             <label for="exampleFormControlInput1" class="form-label">المحافظة </label>
                   <select class="form-select" aria-label="Default select example">
                       <option value="1" selected>  الغربيه</option>
                      <option value="2"> الاسكندريه</option>
                    </select>
          </div>
          <div className="col-12 col-md-6">
							<label for="exampleFormControlInput1" class="form-label"> العمر </label>
							<input type="number" class="form-control" required	defaultValue={22}
							/>
						</div>
						<div className="col-12 col-md-6">
							<label for="exampleFormControlInput1" class="form-label"> الوزن </label>
							<input type="number" class="form-control" required	 defaultValue={65}
							/>
						</div>
                 <div className="col-12 col-md-6">
							<label for="exampleFormControlInput1" class="form-label"> الطول</label>
							<input type="number" class="form-control" required	defaultValue={170}
							/>
						</div>
            <div className="col-12 col-md-6">
                            <label for="exampleFormControlInput1" class="form-label">لون البشرة </label>
                                <select class="form-select" aria-label="Default select example">
                                    <option value="1" selected>  قمحي</option>
                                    <option value="2"> ابيض</option>
                                    <option value="2"> اسمر</option>

                                </select>
                        </div>
                        <div className="col-12 col-md-6">
                            <label for="exampleFormControlInput1" class="form-label">المؤهل  </label>
                                <select class="form-select" aria-label="Default select example">
                                    <option value="1" selected>   جامعي</option>
                                    <option value="2"> دراسه متوسطه</option>
                                    <option value="3"> بدون  مؤهل </option>
                                </select>
                        </div>
						</div>
    		    </form>
         </div>
    </>
  )
}

export default MarriedForm