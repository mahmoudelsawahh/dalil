
const Ads = () => {
    return (
      <>
          <form>
                  <div className="row dashboard-input row-gap-4 mt-5">
                  <div className="col-12 col-md-6">
                        <label for="exampleFormControlInput1" class="form-label">الفئة الاعلانية</label>
                          <select class="form-select" aria-label="Default select example">
                            <option selected>اختر الفئة  </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                    </div>
                    <div className="col-12 col-md-6">
							<label for="exampleFormControlInput1" class="form-label">المحافظة </label>
							<input type="tel" class="form-control" value={"الغربية"} readOnly />
						</div>
                        <div className="col-12 col-md-6">
							<label for="exampleFormControlInput1" class="form-label">المدينة </label>
							<input type="tel" class="form-control" value={"المحله الكبري"} readOnly />
						</div>
                    <div className="col-12 col-md-6">
                              <label for="exampleFormControlInput1" class="form-label">  اسم الاعلان </label>
                              <input type="text" class="form-control" placeholder={" برجاء ادخال اسم الاعلان   "} required	
                              />
                          </div>
              <div className="col-12 col-md-6">
                              <label for="exampleFormControlInput1" class="form-label">رقم الهاتف للتواصل  </label>
                              <input type="tel" class="form-control" placeholder={" برجاء ادخال رقم الهاتف  "} required	
                              />
                          </div>
                          <div className="col-12 col-md-6">
                                <label for="formFile" class="form-label">اختر صوره</label>
                                <input className="form-control" type="file" id="formFile"/>
                          </div>

                         
                     </div>
                  </form>
      </>
    )
  }
  
  export default Ads