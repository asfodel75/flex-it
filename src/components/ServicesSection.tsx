import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Icon,
} from "@mui/material";
import {
  Web as WebIcon,
  AppSettingsAlt as AppIcon,
  Search as SearchIcon,
  Insights as InsightsIcon,
} from "@mui/icons-material"; // Замените иконки на соответствующие из MUI или кастомные

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.",
    icon: <WebIcon />,
  },
  {
    id: 2,
    title: "Digital Marketing",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.",
    
  },
  {
    id: 3,
    title: "SaaS Products",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.",
   
  },
  {
    id: 4,
    title: "Apps Development",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.",
    icon: <AppIcon />,
  },
  {
    id: 5,
    title: "SEO Services",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.",
    icon: <SearchIcon />,
  },
  {
    id: 6,
    title: "Data Analysis",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.",
    icon: <InsightsIcon />,
  },
];

const ServicesSection: React.FC = () => {
  return (
    <Box component="section" id="services" sx={{ py: 8, backgroundColor: "#f8f9fa" }}>
      <Container>
        {/* Заголовок секции */}
        <Box textAlign="center" mb={4}>
          <Typography variant="overline" color="primary" gutterBottom>
            Services
          </Typography>
          <Typography variant="h4" gutterBottom>
            Services We Offer
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit Omnis id atque dignissimos repellat quae ullam.
          </Typography>
        </Box>

        {/* Карточки услуг */}
        <Grid container spacing={4}>
          {services.map((service) => (
            <Grid item xs={12} sm={6} md={4} key={service.id}>
              <Card sx={{ textAlign: "center", p: 3 }}>
                <Box sx={{ fontSize: 50, color: "primary.main", mb: 2 }}>
                  {service.icon}
                </Box>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {service.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" href="service-single.html">
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Кнопка перехода */}
        <Box textAlign="center" mt={4}>
          <Button variant="contained" color="primary" size="large">
            See All Services
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection;
