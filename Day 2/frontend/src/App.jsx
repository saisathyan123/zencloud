import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import SignUp from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/AdminDashboard";
import ProfileView from "./pages/ProfileView";
import ProfileForm from "./pages/ProfileForm";
import Cources from "./pages/Cources";
import Academy1 from "./pages/Academy1";
import Academy2 from "./pages/Academy2";
import Academy3 from "./pages/Academy3";
import UserProvider from "./components/Context/UserProvider";
import AdminDash from "./Pages/AdminDash/Dashboard";
import UserDash from "./Pages/UserDash/Dashboard";
import UsersAdmin from "./Pages/AdminDash/Users";
import CreateAcademy from "./Pages/AdminDash/CreateAcademy";
import AddCourse from "./Pages/AdminDash/AddCourse";
import Academy from "./Pages/AdminDash/Academy";
import Course from "./Pages/AdminDash/Course";
import Profile from "./Pages/AdminDash/Profile";
import UserProfile from "./Pages/UserDash/Profile";
import UserBrowseCourses from "./Pages/UserDash/Course";
import UserBrowseAcademy from "./Pages/UserDash/Academy";
import EditAcademy from "./Pages/AdminDash/AcademyEdit";
import CourseEdit from "./Pages/AdminDash/CourseEdit";
import AcademyCourses from "./Pages/AdminDash/AcademyCourses";
import UserAcademyCourses from "./Pages/UserDash/AcademyCourses";
import CourseUsers from "./Pages/AdminDash/CourseUsers";
import Logout from "./pages/Logout";

function App() {
  const [submittedData, setSubmittedData] = useState(null);

  const handleFormSubmit = (data) => {
    setSubmittedData(data);
  };

  const handleProfileEdit = () => {
    console.log("Editing profile...");
  };

  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/profile"
            element={
              submittedData ? (
                <ProfileView
                  profileData={submittedData}
                  onEdit={handleProfileEdit}
                />
              ) : (
                <ProfileForm onSubmit={handleFormSubmit} />
              )
            }
          />
          <Route path="/cources" element={<Cources />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/academy1" element={<Academy1 />} />
          <Route path="/academy2" element={<Academy2 />} />
          <Route path="/academy3" element={<Academy3 />} />
          <Route path="/dashboard/user" element={<UserDash />} />
          <Route path="/dashboard/user/profile" element={<UserProfile />} />
          <Route path="/logout" element={<Logout />} />
          <Route
            path="/dashboard/user/courses"
            element={<UserBrowseCourses />}
          />
          <Route
            path="/dashboard/user/academies"
            element={<UserBrowseAcademy />}
          />
          <Route
            path="/dashboard/user/academy/courses"
            element={<UserAcademyCourses />}
          />
          <Route path="/dashboard/admin" element={<AdminDash />} />
          <Route
            path="/dashboard/admin/create-academy"
            element={<CreateAcademy />}
          />
          <Route
            path="/dashboard/admin/courses/users"
            element={<CourseUsers />}
          />
          <Route
            path="/dashboard/admin/academy/edit"
            element={<EditAcademy />}
          />
          <Route
            path="/dashboard/admin/academy/courses"
            element={<AcademyCourses />}
          />
          <Route path="/dashboard/admin/course/edit" element={<CourseEdit />} />
          <Route path="/dashboard/admin/add-course" element={<AddCourse />} />
          <Route path="/dashboard/admin/users" element={<UsersAdmin />} />

          <Route path="/dashboard/admin/profile" element={<Profile />} />
          <Route path="/dashboard/admin/academies" element={<Academy />} />
          <Route path="/dashboard/admin/courses" element={<Course />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
