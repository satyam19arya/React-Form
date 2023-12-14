// import { useEffect, useState } from "react";
// import TravelApp from "./components/TravelApp";
// import { toast } from 'react-toastify';
import FormValidation from "./components/FormValidation";

function App() {
  // const [courses, setCourses] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // async function fetchData() {
  //   setLoading(true);
  //   try{
  //     const response = await fetch(apiurl);
  //     const data = await response.json();
  //     setCourses(data);
  //   } catch(error){
  //     toast.error("Network error");
  //   }
  //   setLoading(false);
  // }

  return (
    <div>
      {/* <TravelApp /> */}
      <FormValidation />
      {/* <div>
        {loading ? (<Spinner />) : (<Cards courses={courses}/>)}
      </div> */}
    </div>
  );
}

export default App;