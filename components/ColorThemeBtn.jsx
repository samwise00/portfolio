"use client";

const ColorThemeBtn = ({ theme, onClick }) => {
  return (
    <button onClick={onClick}>
      {theme == "dark" ? (
        <img
          src="/light.png"
          className="h-[24px] border-white border-[1px] rounded-[4px]"
        />
      ) : (
        <img src="/dark.png" className="h-[24px]" />
      )}
    </button>
  );
};

export default ColorThemeBtn;
