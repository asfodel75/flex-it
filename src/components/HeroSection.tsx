import React from "react";
import { Box, Typography, Button, Grid, Container, IconButton } from "@mui/material";
import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";
import Hero from "../assets/illustration-2.png";
import { MAIN_COLORS } from "../root/color";


const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        backgroundImage: "url('/path/to/hero-background.jpg')", // Заменить позже на реальный путь
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        textAlign: "center",
        color: "white",
      }}
    >
      {/* Полупрозрачный слой */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />

      {/* Социальные иконки */}
      <Box
        sx={{
          position: "absolute",
          top: "96px", // Отодвинули вниз на 30px
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          
          transform: "translateX(100px)"
        }}
      >
        <IconButton
          href="https://facebook.com"
          target="_blank"
          rel="noopener"
          sx={{
            color: "white",
            transition: "all 0.3s ease",
            "&:hover": {
              color: "#09AFF4",
              transform: "translateY(-5px)",
              cursor: "pointer",
            },
          }}
        >
          <Facebook />
        </IconButton>
        <IconButton
          href="https://instagram.com"
          target="_blank"
          rel="noopener"
          sx={{
            color: "white",
            transition: "all 0.3s ease",
            "&:hover": {
              color: "#09AFF4",
              transform: "translateY(-5px)",
              cursor: "pointer",
            },
          }}
        >
          <Instagram />
        </IconButton>
        <IconButton
          href="https://twitter.com"
          target="_blank"
          rel="noopener"
          sx={{
            color: "white",
            transition: "all 0.3s ease",
            "&:hover": {
              color: "#09AFF4",
              transform: "translateY(-5px)",
              cursor: "pointer",
            },
          }}
        >
          <Twitter />
        </IconButton>
        <IconButton
          href="https://linkedin.com"
          target="_blank"
          rel="noopener"
          sx={{
            color: "white",
            transition: "all 0.3s ease",
            "&:hover": {
              color: "#09AFF4",
              transform: "translateY(-5px)",
              cursor: "pointer",
            },
          }}
        >
          <LinkedIn />
        </IconButton>
      </Box>

      {/* Основное содержимое */}
      <Container>
        <Grid container spacing={4} alignItems="center">
          {/* Изображение слева */}
          <Grid item xs={12} md={6}>
  <Box
    component="img"
    src={Hero}
    alt="Hero Illustration"
    sx={{
      width: "130%", // Увеличиваем размер на 30%
      maxHeight: "520px", // Корректируем максимальную высоту
      borderRadius: "8px",
      transform: "translateX(-180px)", // Смещаем влево на 100px
    }}
  />
</Grid>

          {/* Текст справа */}
          <Grid item xs={12} md={6}>
            {/* Текст "IT Solutions" */}
            <Typography
              variant="body1"
              sx={{
                position: "relative",
                fontSize: "1rem",
                fontWeight: 600,
                letterSpacing: "1px",
                textAlign: "left",
                display: "block",
                width: "max-content",
                marginBottom: 0,
                
                color: MAIN_COLORS.buttonCol, // Вы можете заменить на нужный цвет
                zIndex: 5,
              }}
            >
              IT SOLUTIONS
            </Typography>

          
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                fontWeight: 900,
                fontSize: "3.5rem",
                marginBottom: "1.75rem",
                lineHeight: 1.5,
              }}
            >
              <span style={{ display: "block",transform: "translateY(50px)translateX(-50px)",}}>Providing the Best</span>
              <span style={{ display: "block", textWrap: "nowrap",transform:"translateY(50px)" }}>
                Services & IT Solutions
              </span>
            </Typography>

            <Typography variant="body2" sx={{fontSize:"20px", fontWeight:"600",textAlign:"left", color:MAIN_COLORS.textCol, transform: "translateY(60px)"}} paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              volutpat, nunc et aliquet facilisis, nulla nisi congue magna.
            </Typography>

            {/* Контейнер для кнопок */}
            <Box mt={3} sx={{ display: "flex", gap: "30px", alignItems: "center", transform: "translateY(70px)" }}>
            <Button
  variant="contained"
  size="large"
  sx={{
    backgroundColor: "transparent", // Прозрачный фон
    width:"200px",
    height:"70px",
    borderTopRightRadius:"20px",
    borderBottomLeftRadius:"20px",
    border: `2px solid ${MAIN_COLORS.headerLigthBG}`, // Бордер толщиной 3px и цвет
    color: `${MAIN_COLORS.headerLigthBG}`, // Цвет текста совпадает с бордером
    padding: "10px 20px", // Внутренние отступы для лучшего внешнего вида
    fontWeight: "bold", // Жирный текст
    fontSize: "1.2rem", // Размер шрифта
    textTransform: "none", // Убирает uppercase
    transition: "all 0.3s ease", // Анимация для ховера
    "&:hover": {
      backgroundColor: `${MAIN_COLORS.headerLigthBG}`, // Заливка цветом бордера при ховере
      color: MAIN_COLORS.clrWhite, // Белый текст при ховере
    },
  }}
>
  Start Now
</Button>


              {/* Кнопка Play с волнами */}
              <Button
                variant="contained"
                color="primary"
                sx={{
                  position: "relative",
                  borderRadius: "50%",
                  width: "60px",
                  height: "60px",
                  backgroundColor: "MAIN_COLORS.buttonCol", 
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "1px 1px 10px 5px rgba(0, 0, 0, 0.25)",
                  overflow: "hidden",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                {/* Значок Play */}
                <Typography
                  variant="h4"
                  sx={{
                    color: "white",
                    fontSize: "2rem",
                    zIndex: 10,
                  }}
                >
                  ▶
                </Typography>

              
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    border: "6px solid rgba(255, 255, 255, 0.5)", 
                    borderRadius: "50%",
                    zIndex: 5,
                    animation: "wave-animation 2s infinite",
                  }}
                />
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Стили для анимации */}
      <style>
        {`
          @keyframes wave-animation {
            0% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.1);
              opacity: 0.6;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}
      </style>
    </Box>
  );
};

export default HeroSection;




