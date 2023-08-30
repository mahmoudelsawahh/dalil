
const UserDetails = () => {
  return (
    <>
        <form>
					<div className="row dashboard-input row-gap-4 mt-5">
						<div className="col-12 col-md-6">
							<label for="exampleFormControlInput1" class="form-label">المحافظة </label>
							<input type="tel" class="form-control" value={"الغربية"} readOnly />
						</div>
						<div className="col-12 col-md-6">
							<label for="exampleFormControlInput1" class="form-label">المدينة </label>
							<input type="tel" class="form-control" value={"المحله الكبري"} readOnly />
						</div>
						<div className="col-12 col-md-6">
						<label for="exampleFormControlInput1" class="form-label">التصنيف الاساسي </label>
							<select class="form-select" aria-label="Default select example">
								<option selected>اختر تصنيف النشاط</option>
								<option value="1">One</option>
								<option value="2">Two</option>
								<option value="3">Three</option>
							</select>
						</div>
						<div className="col-12 col-md-6">
						<label for="exampleFormControlInput1" class="form-label">التصنيف الفرعي  </label>
							<select class="form-select" aria-label="Default select example">
								<option selected>اختر تصنيف النشاط</option>
								<option value="1">One</option>
								<option value="2">Two</option>
								<option value="3">Three</option>
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
		   		</form>
    </>
  )
}

export default UserDetails