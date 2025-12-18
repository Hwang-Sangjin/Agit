import { useState } from "react";
import { useNameState } from "../../store/nameState";
// 인트로 화면 컴포넌트
const IntroScreen = ({ onEnter }) => {
  const [inputValue, setInputValue] = useState("");
  const setName = useNameState((state) => state.setName);

  const handleSubmit = () => {
    setName(inputValue); // Zustand store에 저장
    onEnter(inputValue);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="flex items-center justify-center h-screen relative z-20">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6 font-map">
          I solemnly swear that I am up to no good
        </h1>

        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter your name..."
          className="w-80 px-4 py-3 text-lg mb-4 bg-[#f5ebd7] text-[#372116] border-2 border-[#372116] rounded-lg focus:outline-none focus:border-[#4a2c1f] transition-colors duration-300"
        />

        <button
          onClick={handleSubmit}
          className="px-8 py-4 text-xl font-semibold bg-[#372116] text-[#f5ebd7] rounded-lg hover:bg-[#4a2c1f] transition-colors duration-300 block w-80 mx-auto"
        >
          Enter
        </button>
      </div>
    </div>
  );
};

export default IntroScreen;
