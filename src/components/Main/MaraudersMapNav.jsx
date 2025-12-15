// MaraudersMap.jsx
const MaraudersMapNav = () => {
  return (
    <nav className="relative w-full h-24 overflow-hidden">
      <svg
        viewBox="0 0 1200 200"
        className="w-full h-full"
        style={{ filter: "sepia(0.3)" }}
      >
        {/* 랜덤 경로선들 */}
        <path
          d="M 50,100 Q 200,50 400,100"
          stroke="#8B4513"
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
        />

        {/* 메인 텍스트들 - 다양한 각도 */}
        <g className="hover:opacity-80 transition-opacity cursor-pointer">
          <text
            x="200"
            y="100"
            transform="rotate(-8 200 100)"
            className="text-2xl font-serif fill-[#654321]"
            style={{ fontFamily: "Luminari, Georgia, serif" }}
          >
            MAIN
          </text>
          {/* 작은 발자국 아이콘 */}
          <path d="M 190,110 ..." fill="#654321" opacity="0.5" />
        </g>

        <text
          x="500"
          y="120"
          transform="rotate(5 500 120)"
          className="text-2xl font-serif fill-[#654321]"
        >
          ABOUT
        </text>

        <text
          x="800"
          y="95"
          transform="rotate(-3 800 95)"
          className="text-2xl font-serif fill-[#654321]"
        >
          CONTACT
        </text>

        {/* 장식 요소들 */}
        <circle cx="100" cy="50" r="3" fill="#8B4513" opacity="0.4" />
        <text x="950" y="150" className="text-xs fill-[#654321]" opacity="0.3">
          Messrs Moony, Wormtail...
        </text>
      </svg>
    </nav>
  );
};

export default MaraudersMapNav;
