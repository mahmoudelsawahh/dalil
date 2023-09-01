
const OfferForm = () => {
    const today = new Date();
const date = today.setDate(today.getDate()); 
const defaultValue = new Date(date).toISOString().split('T')[0] 
    return (
      <>
          <form>
                  <div className="row dashboard-input row-gap-4 mt-5">
                  <div className="col-12 col-md-6">
                        <label for="exampleFormControlInput1" class="form-label">من</label>
                        <input type="date" class="form-control" defaultValue={defaultValue}  />
                    </div>
                    <div className="col-12 col-md-6">
							<label for="exampleFormControlInput1" class="form-label">الى </label>
                            <input type="date" class="form-control"  />
						</div>
                        <div className="col-12 col-md-6">
							<label for="exampleFormControlInput1" class="form-label">الاسم </label>
							<input type="tel" class="form-control" value={" "} />
						</div>
                    <div className="col-12 col-md-6">
                              <label for="exampleFormControlInput1" class="form-label">  السعر  </label>
                              <input type="text" class="form-control" placeholder={" برجاء ادخال السعر    "} required	
                              />
                          </div>
                          <div className="col-12 col-md-12">
                                <label for="formFile" class="form-label">اختر صوره</label>
                                <input className="form-control" type="file" id="formFile"/>
                          </div>

                         
                     </div>
                  </form>
      </>
    )
  }
  
  export default OfferForm