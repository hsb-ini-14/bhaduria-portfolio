import gifImage from "../assets/image/loader.gif";

const Loader = ({ isLoading }) => {
  return (
    <div
      className={`fixed inset-0 bg-lightPrimaryBg text-lightBrand z-50 grid place-items-center transition-opacity duration-1000 ease-in-out ${isLoading ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <img src={gifImage} alt="Loader" className="w-40" />
    </div>
  );
};

export default Loader;
