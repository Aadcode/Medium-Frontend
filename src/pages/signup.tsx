import Auth from "../Components/Auth";
import Quote from "../Components/quote";
const Signup = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <Auth type={"Signup"}></Auth>
      </div>
      <div className=" hidden lg:block">
        <Quote></Quote>
      </div>
    </div>
  );
};

export default Signup;
