import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Header from "./Header"; 
import HeroSection from "./HeroSection"; 
import Patern from "../assets/pattern-bg-1.jpg";
import { MAIN_COLORS } from "../root/color";

const MainContainer: React.FC = () => {
  const [headerBgColor, setHeaderBgColor] = useState<string>("transparent");

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setHeaderBgColor(MAIN_COLORS.headerLigthBG);
    } else {
      setHeaderBgColor("transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        color: "white",
      }}
    >
      {/* Фоновое изображение с затемнением */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Patern})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      />

      {/* Анимация точек */}
      {[...Array(150)].map((_, index) => (
        <Box
          key={index}
          sx={{
            position: "absolute",
            width: "3px",
            height: "3px",
            backgroundColor: MAIN_COLORS.buttonCol,
            borderRadius: "50%",
            animation: `move-dots-${index} ${Math.random() * 5 + 3}s ease-in-out infinite`,
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            opacity: 0.8,
          }}
        />
      ))}

      {/* Ваши секции */}
      <Header backgroundColor={headerBgColor} />
      <HeroSection />

      {/* Анимация для точек */}
      <style>
        {`
          ${[...Array(150)]
            .map((_, index) => {
              const randomX1 = Math.random() * 40 - 20; // Случайное отклонение по X (-20px до 20px)
              const randomY1 = Math.random() * 40 - 20; // Случайное отклонение по Y (-20px до 20px)
              const randomX2 = Math.random() * 80 - 40; // Сильнее на втором шаге
              const randomY2 = Math.random() * 80 - 40;

              return `
                @keyframes move-dots-${index} {
                  0% {
                    opacity: 1;
                    transform: translate(0, 0) scale(1);
                  }
                  50% {
                    opacity: 0.6;
                    transform: translate(${randomX1}px, ${randomY1}px) scale(1.5);
                  }
                  100% {
                    opacity: 0;
                    transform: translate(${randomX2}px, ${randomY2}px) scale(0.5);
                  }
                }
              `;
            })
            .join("\n")}
        `}
      </style>
    </Box>
  );
};

export default MainContainer;

