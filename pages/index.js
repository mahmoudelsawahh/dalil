import { server } from '../config'
import Home from './Home';
import { useSelector } from "react-redux";

 function Homee() {
  const { AllCategories } = useSelector((state) => state.categoriesMenu);

  return (
    < >
      <Home  Categories={AllCategories} />
    </>
  )
}
export default Homee;

