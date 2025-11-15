import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import charArr from "../utils/letters";

gsap.registerPlugin(TextPlugin);

const Letter = ({ text }) => {
  const textRef = useRef(null);
  const targetText = text;
  const randomTextArr = [];
  const textSequence = charArr;

  const getRandomText = () => {
    const length = charArr.length;

    for (let i = 0; i < 5; i++) {
      const index = Math.floor(Math.random() * length);
      randomTextArr.push(charArr[index]);
    }
    randomTextArr.push(text);
  };
  getRandomText();

  useEffect(() => {
    const el = textRef.current;
    // 텍스트 변경 리스트

    let index = 0;

    const changeText = () => {
      gsap.to(el, {
        duration: 0.1,
        text: randomTextArr[index],
        ease: "power2.out",
        onComplete: () => {
          if (index < 5) {
            index++;
            setTimeout(changeText, 1);
          }
        },
      });
    };

    // 글자 등장 후 1초 뒤 텍스트 전환 시작
    changeText();
  }, []);

  return (
    <div ref={textRef} className="font-main inline-block">
      {text}
    </div>
  );
};

export default Letter;
