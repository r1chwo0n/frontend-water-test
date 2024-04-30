import { useDispatch } from "react-redux";
import "../style/home.css";
import { appStateType, setAppState } from "../store/Slices/webSocketSlice";
export default function Home() {
  const dispatch = useDispatch();
  const clickedtoSignIn = () => {
    dispatch(setAppState(appStateType.SIGNIN));
  };
  const clickedtoSignUp = () => {
    dispatch(setAppState(appStateType.SIGNUP));
  };
  const clickedtoHistory = () => {
    dispatch(setAppState(appStateType.HISTORY));
  };
  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          width: "100%",
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
          position: "fixed",
          top: 0,
        }}
      >
        <div className="flex items-center">
          <img
            className="w-14 h-12 md:w-20 md:h-16"
            src="../src/pic/logo.png"
          ></img>
          <h1 className="fontLeague text-2xl md:text-4xl">AQUAlity</h1>
        </div>
        <div className="flex md:text-lg font-['Arial'] text-base">
          <button
            className="relative mr-4 transition-underline"
            type="button"
            onClick={clickedtoSignIn}
          >
            sign in
          </button>
          <span className="text-black mr-4">|</span>
          <button
            className="relative transition-underline"
            type="button"
            onClick={clickedtoSignUp}
          >
            sign up
          </button>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "80px",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "#C9E0EF",
          width: "100vw",
          minHeight: "calc(100vh - 80px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Content */}
        <div className="flex flex-col md:flex-row items-center md:items-start mt-8 md:mt-0">
          <div className="md:mr-20">
            <img
              className="rounded-full size-96 md:size-96"
              src="https://www.nsm.or.th/nsm/sites/default/files/2021-12/20200204-2PNG.png"
              alt="Your image"
            />
          </div>
          <div className="font-['Arial'] font-bold text-left md:text-left mt-9">
            <h1 className="text-lg">Capture. Analyze. Know your</h1>
            <h1 className="text-4xl mt-2">water</h1>
            <h1 className="text-4xl">quality</h1>
            <button
              className="w-72 h-11 text-2xl mt-6 md:mt-4 mb-6 bg-white rounded-2xl boxShadow hover:bg-gray-200"
              onClick={clickedtoHistory}
            >
              START TEST
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
