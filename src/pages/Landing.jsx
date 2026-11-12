
import Header from "../Components/Header"
import Card from "../Components/Card";
import TodoContainer from "../Components/TodoContainer";
import { useLocation } from "react-router-dom";

function Landing() {
    const data = useLocation();
  return (
    <div className="bg-black p-16">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <Header name={data.state.user} />
        <div className="flex gap-8 justify-between my-5 flex-wrap">
          <Card bgColor={"#8272DA"} title={"23"} subtitle={"Chennai"} />
          <Card bgColor={"#FD6663"} title={"November 12"} subtitle={"14:21:00"} />
          <Card bgColor={"#FCA201"} title={"Built Using"} subtitle={"React"} />       
         </div>
        <TodoContainer/>        
      </div>      
   </div>
  );
}

export default Landing;
