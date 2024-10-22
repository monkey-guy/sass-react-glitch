import React, { useState, useEffect } from "react";

interface FadeTransitionProps {
  children: React.ReactNode;
  fallback: React.ReactNode;
}

const FadeTransition: React.FC<FadeTransitionProps> = ({
  children,
  fallback,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [children]);

  return (
    <>
      {isLoading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            transition: "opacity 2s ease-out",
            opacity: isLoading ? 1 : 0,
            pointerEvents: isLoading ? "auto" : "none",
          }}
        >
          {fallback}
        </div>
      )}
      <div
        style={{
          opacity: isLoading ? 0 : 1,
          transition: "opacity 2s ease-in",
        }}
      >
        {children}
      </div>
    </>
  );
};

export default FadeTransition;
