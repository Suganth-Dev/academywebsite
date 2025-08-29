import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";

// ---------- Public ----------
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import CourseDetailPage from "./pages/CourseDetailPage";
import WhyIDAPage from "./pages/WhyIDAPage";
import SuccessStoriesPage from "./pages/SuccessStoriesPage";
import ApplyNowPage from "./pages/ApplyNowPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsPage from "./pages/TermsPage";
import SitemapPage from "./pages/SitemapPage";
import CollaborationPage from "./pages/CollaborationPage";
import PartnershipsPage from "./pages/PartnershipsPage";
import CurriculumPage from "./pages/CurriculumPage";
import GalleryPage from "./pages/GalleryPage";
import VideoPage from "./pages/VideoPage";
import InternshipPage from "./pages/InternshipPage";
import WorkshopRegistrationPage from "./pages/WorkshopRegistrationPage";

// ---------- Admin ----------
import Login from "./Admin/components/Login";
import Layout from "./Admin/components/Layout";
import ProtectedRoute from "./Admin/components/ProtectedRoute";
import Dashboard from "./Admin/pages/Dashboard";
import RegisteredUsers from "./Admin/pages/RegisteredUsers";
import EmployeeManagement from "./Admin/pages/EmployeeManagement";
import IncomeReports from "./Admin/pages/IncomeReports";
import UserMetrics from "./Admin/pages/UserMetrics";
import Analytics from "./Admin/pages/Analytics";
import ContactUs from "./Admin/pages/ContactUs";
import SalesInquiries from "./Admin/pages/SalesInquiries";
import Feedbacks from "./Admin/pages/Feedbacks";
import DownloadsHistory from "./Admin/pages/DownloadsHistory";

// ---------- Public Layout ----------
const PublicLayout: React.FC = () => (
  <>
    <ScrollToTop />
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Toaster position="top-right" />

        <Routes>
          {/* ---------- PUBLIC ---------- */}
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<HomePage />} />
            <Route path="courses" element={<CoursesPage />} />
            <Route path="courses/:slug" element={<CourseDetailPage />} />
            <Route path="why-ida" element={<WhyIDAPage />} />
            <Route path="success-stories" element={<SuccessStoriesPage />} />
            <Route path="apply" element={<ApplyNowPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="blog/:slug" element={<BlogDetailPage />} />
            <Route path="privacy" element={<PrivacyPolicyPage />} />
            <Route path="terms" element={<TermsPage />} />
            <Route path="sitemap" element={<SitemapPage />} />
            <Route path="collaborate" element={<CollaborationPage />} />
            <Route path="partnerships" element={<PartnershipsPage />} />
            <Route path="curriculum" element={<CurriculumPage />} />
            <Route path="gallery" element={<GalleryPage />} />
            <Route path="video" element={<VideoPage />} />
            <Route path="applyintern" element={<InternshipPage />} />
            <Route path="applyworkshop" element={<WorkshopRegistrationPage />} />
          </Route>

          {/* ---------- ADMIN ---------- */}
          {/* Login page */}
          <Route path="/admin" element={<Login />} />

          {/* Protected admin area */}
          <Route
            path="/admin/*"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="registered-users" element={<RegisteredUsers />} />
            <Route path="employee-management" element={<EmployeeManagement />} />
            <Route path="income-reports" element={<IncomeReports />} />
            <Route path="user-metrics" element={<UserMetrics />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="sales-inquiries" element={<SalesInquiries />} />
            <Route path="feedbacks" element={<Feedbacks />} />
            <Route path="downloads-history" element={<DownloadsHistory />} />
          </Route>

          {/* fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
