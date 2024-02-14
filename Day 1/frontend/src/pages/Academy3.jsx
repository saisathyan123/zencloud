import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import img from "../assets/images/kike-vega-F2qh3yjz6Jk-unsplash.jpg";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const imageUrls = [
  "https://www.goayogashala.com/wp-content/uploads/2022/10/4_612x408.png",
  "https://m.media-amazon.com/images/I/81MkLWQIfaL._AC_UF1000,1000_QL80_.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt4XOgy1g60X4J_EsE4wTNdiUXI0uIvqf-tg&usqp=CAU",
];

const cards = [
  {
    id: 7,
    heading: "Yin Yoga Courses",
    description:
      "Involves holding passive poses for an extended period, typically 3-5 minutes.Targets connective tissues and promotes flexibility.",
  },
  {
    id: 8,
    heading: "Restorative Yoga Courses",
    description:
      "Focuses on relaxation and rejuvenation.Uses props to support the body in gentle poses held for longer durations.",
  },
  {
    id: 9,
    heading: "Power Yoga Courses",
    description:
      "A more intense and fitness-oriented form of yoga.Incorporates strength-building exercises and dynamic movements.",
  },
];

const defaultTheme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />

      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Ashtanga Institute Yoga Cources
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 0 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card, index) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: "56.25%",
                    }}
                    image={imageUrls[index]}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.heading}
                    </Typography>
                    <Typography>{card.description}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn more</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Zencloud
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Enroll now and embrace the transformative power of yoga
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
