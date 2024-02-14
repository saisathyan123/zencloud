import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import img from "../assets/images/1648639769-isha_sadhguru_centers_adiyogi-112-coimbatore.avif";
import img1 from "../assets/images/RIMYI-early.jpg";
import img2 from "../assets/images/download123.jpeg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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
  const navigateDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <>
      <div className="dashboard-container">
        <div className="sidebar">
          <h2>Dashboard</h2>
          <ul>
            <li onClick={navigateDashboard}>Dashboard</li>
            <li onClick={navigateProfile}>Profile</li>
            <li onClick={navigateAcademy}>Academy</li>
            <li onClick={navigateCources}>Cources</li>
            <li onClick={navigateHome}>Logout</li>
          </ul>
        </div>

        <Card className="carddash4" sx={{ maxWidth: 280, maxHeight: 400 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="180"
              image={img}
              alt="green iguana"
            />

            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Isha yoga center
              </Typography>
              <Typography variant="body2" color="text.secondary" fontSize={11}>
                Its unique energy, structure, and location make the Isha Yoga
                Center a tremendously powerful space for self-transformation.
                –---- Sadhguru
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link to="/academy1">
              <Button size="small" color="primary">
                view cources
              </Button>
            </Link>
          </CardActions>
        </Card>
        <Card className="carddash5" sx={{ maxWidth: 280, maxHeight: 400 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="180"
              image={img1}
              alt="green iguana"
            />

            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Ramamani Iyengar Memorial Yoga Institute
              </Typography>
              <Typography variant="body2" color="text.secondary" fontSize={11}>
                This renowned Institute attracts serious students of yoga from
                all over the world. It conducts regular classes in Iyengar Yoga
                (a form of Hatha Yoga)for all levels.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link to="/academy2">
              <Button size="small" color="primary">
                view cources
              </Button>
            </Link>
          </CardActions>
        </Card>

        <Card className="carddash6" sx={{ maxWidth: 280, maxHeight: 400 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="180"
              image={img2}
              alt="green iguana"
            />

            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Ashtanga Institute
              </Typography>
              <Typography variant="body2" color="text.secondary" fontSize={11}>
                Pattabhi Jois, who taught yoga there from the 1930s up until his
                death in 2009, the Ashtanga Institute offers ongoing intensive
                ​ashtanga yoga classes throughout the year..
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link to="/academy3">
              <Button size="small" color="primary">
                view cources
              </Button>
            </Link>
          </CardActions>
        </Card>
      </div>
    </>
  );
}

export default Dashboard;
