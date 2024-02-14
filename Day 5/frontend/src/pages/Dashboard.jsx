import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import img from "../assets/images/kike-vega-F2qh3yjz6Jk-unsplash.jpg";
import img1 from "../assets/images/images.jpeg";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [selectedOption, setSelectedOption] = useState(1);
  const [admissionDetails, setAdmissionDetails] = useState([]);
  useEffect(() => {
    const formdata = JSON.parse(localStorage.getItem("user"));

    setAdmissionDetails(formdata);
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleEdit = (index) => {
    console.log("Editing item at index:", index);
  };

  const navigate = useNavigate();

  const navigateProfile = () => {
    navigate("/profile");
  };

  const navigateHome = () => {
    navigate("/");
  };
  const navigateCources = () => {
    navigate("/cources");
  };
  const navigateAcademy = () => {
    navigate("/academy");
  };

  return (
    <>
      <div className="dashboard-container">
        <div className="sidebar">
          <h2>Dashboard</h2>
          <ul>
            <li onClick={() => handleOptionClick(1)}>Dashboard</li>
            <li onClick={navigateProfile}>Profile</li>
            <li onClick={navigateAcademy}>Academy</li>
            <li onClick={navigateCources}>Courses</li>
            <li onClick={navigateHome}>Logout</li>
          </ul>
        </div>
        <div>
          <h1>My courses</h1>
          <div className="cards">
            <Card className="carddash" sx={{ maxWidth: 280, maxHeight: 350 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="180"
                  image={img}
                  alt="green iguana"
                />

                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Hatha Yoga Courses
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    fontSize={11}
                  >
                    Focuses on physical postures (asanas) and breath control
                    (pranayama).
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  view
                </Button>
              </CardActions>
            </Card>
            <Card className="carddash3" sx={{ maxWidth: 280, maxHeight: 350 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="180"
                  image={img1}
                  alt="green iguana"
                />

                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Power Yoga Courses
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    fontSize={11}
                  >
                    A more intense and fitness-oriented form of
                    yoga.Incorporates strength-building exercises and dynamic
                    movements.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  view
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
