import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import PageLayout from "./components/Layouts/PageLayout";
import MainLayout from "./components/Layouts/MainLayout";
import PageNotFound from "./components/Pages/PageNotFound";
import FAQs from "./components/others/Faq";
import AboutPage from "./components/others/AboutPage";
import ContactSupport from "./components/others/ContactSupport";
import RatingPage from "./components/Pages/RatingPage";
import PrivacyPolicy from "./components/others/PrivacyPolicy";
import TermsAndConditions from "./components/others/TermsAndConditions";

import HomeLayout from "./components/Layouts/HomeLayout";
import Register from "./components/Pages/Auth/Register";
import VerifyOtp from "./components/Pages/Auth/VerifyOtp";
import CompleteProfile from "./components/Pages/Auth/CompleteProfile";
import Login from "./components/Pages/Auth/Login";
import ForgotPassword from "./components/Pages/Auth/ForgotPassword";
import ResetPassword from "./components/Pages/Auth/ResetPassword";
// import ServicesPage from "./components/Pages/Services/ServicesPage";
import ServiceDetails from "./components/Pages/Services/ServiceDetails";

import LiveLocationMap from "./components/Maps/LiveLocationMap";
import LiveLocationMapWithWorker from "./components/Maps/LiveLocationMapWithWorker";
import ProfileDashboard from "./components/Pages/Auth/Profile/ProfileDashboard";
import TrackWorkerPage from "./components/Pages/Auth/Profile/TrackWorker";

import AdminLayout from "./components/Layouts/AdminLayout";
import AdminLogin from "./components/Layouts/Admin/AdminLogin";
import AdminRoute from "./components/Layouts/Admin/AdminRoute";
import BookingManager from "./components/Pages/Bookings/BookingManager";
import WorkerLocationCheck from "./components/Maps/WorkerLocationCheck";
import AdminWorkers from "./components/Layouts/Admin/AdminWorkers";

// import WorkerLogin from "./components/Layouts/Worker/WorkerLogin";
// import WorkerRoute from "./components/Layouts/Worker/WorkerRoute";
import WorkerLayout from "./components/Layouts/WorkerLayout";
import WorkerProfile from "./components/Layouts/Worker/WorkerProfile";
import WorkerTasks from "./components/Layouts/Worker/WorkerTasks";
import WorkerRegister from "./components/Layouts/Worker/WorkerRegister";
import WorkerLoginb from "./components/Layouts/Worker/WorkerLoginb";

import  WashingMachineService  from "./components/Pages/Services/WashingMachineService";
import  RefrigeratorService  from "./components/Pages/Services/RefrigeratorService";
import  ACService  from "./components/Pages/Services/ACService";
import ServicesMain from "./components/Pages/Services/ServicesMain";








const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<PageLayout />}>
              <Route index element={<HomeLayout/>} />
              {/* <Route path="services" element={<ServicesPage/>} /> */}
              {/* <Route path="/service/:id" element={<ServiceDetails />} /> */}
              <Route path="contact" element={<ContactSupport/>}/>
              <Route path="about" element={<AboutPage/>}/>
              <Route path="/faqs" element={<FAQs/>}/>
              <Route path="/ratings" element={<RatingPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsAndConditions />} />




            {/* SERVICES LANDING */}
                <Route>
                  <Route path="/service" element={<ServicesMain />} />
                  <Route path="/services/ac" element={<ACService />} />
                  <Route path="/services/washing-machine" element={<WashingMachineService />}/>
                  <Route path="/services/refrigerator" element={<RefrigeratorService />}/>
                  <Route path="/services/:id" element={<ServiceDetails />} />
                </Route>

            {/* Auth */}
                <Route>
                  <Route path="register" element={<Register />} />
                  <Route path="login" element={<Login/>} />
                  <Route path="verify-otp" element={<VerifyOtp />} />
                  <Route path="complete-profile" element={<CompleteProfile />} />
                  <Route path="profile" element={<ProfileDashboard/>} />           
                  <Route path="forgot-password" element={<ForgotPassword />} />
                  <Route path="reset-password" element={<ResetPassword />} />
                  <Route path="/track-worker/:bookingId" element={<TrackWorkerPage />} />
                </Route>
            
            {/* Worker Routes */}
                <Route>
                  {/* <Route path="/worker/login" element={<WorkerLogin />} />
                  <Route path="/worker" element={<WorkerRoute> <WorkerLayout /> </WorkerRoute>}> */}
                  <Route path="/worker" element={ <WorkerLayout />}>
                    <Route index element={<WorkerProfile />} />
                    <Route path="profile" element={<WorkerProfile />} />
                    <Route path="tasks" element={<WorkerTasks />} />
                    <Route path="register" element={<WorkerRegister />} />
                    <Route path="loggin" element={<WorkerLoginb />} />
                  </Route>
                </Route>

            {/* Admin Routes */}
                <Route>
                  <Route path="/admin/login" element={<AdminLogin />} />
                  <Route path="/admin" element={<AdminRoute> <AdminLayout /> </AdminRoute>}>
                    <Route index element={<BookingManager />} />
                    <Route path="bookings" element={<BookingManager />} />
                    <Route path="workers" element={<AdminWorkers />} />
                    <Route path="tracking" element={<WorkerLocationCheck />} />
                  </Route>
                </Route>

        </Route>
        <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

export default router;
