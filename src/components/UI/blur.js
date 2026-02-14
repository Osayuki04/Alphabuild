import React from "react";

const Blur = () => {
  return (
    <div
      className="fixed left-0 bottom-0 w-full h-12  overflow-hidden pointer-events-none"
      style={{
        background: `linear-gradient(135deg, rgba(255,255,255,0.35), rgba(255,255,255,0.05)),
          linear-gradient(120deg, rgba(255,0,150,0.15), rgba(0,200,255,0.15), rgba(0,255,150,0.15))`,
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid rgba(255,255,255,0.35)",
        boxShadow:
          "inset 0 0 30px rgba(255,255,255,0.25), 0 25px 60px rgba(0,0,0,0.5)",
      }}
    >
      <div
        style={{
          content: '""',
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          background:
            "linear-gradient(45deg, transparent, rgba(255,255,255,0.4), transparent)",
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />
    </div>
  );
};

export default Blur;
