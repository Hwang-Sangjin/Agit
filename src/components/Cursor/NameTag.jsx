import { useNameState } from "../../store/nameState";

const NameTag = () => {
  const name = useNameState((state) => state.name);

  return (
    <div className="relative w-60 h-30 top-30">
      {" "}
      {/* 원하는 크기로 조정 */}
      <img
        src="/image/nametag.svg"
        alt="name tag"
        className="w-full h-full object-contain"
      />
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ top: "-20px" }}
      >
        <span className="text-[#372116] font-map text-m">{name}</span>
      </div>
    </div>
  );
};

export default NameTag;
