import React from 'react';
import VideoHeroSection from '../components/VideoHeroSection';
import CourseOverview from '../components/CourseOverview';
import WhyIDASection from '../components/WhyIDASection';
import StudentSuccessSnapshot from '../components/StudentSuccessSnapshot';
import LeadMagnet from '../components/LeadMagnet';
import UpcomingBatchesBanner from '../components/UpcomingBatchesBanner';
import CollaborationsStrip from '../components/CollaborationsStrip';
import FinalCTAFooter from '../components/FinalCTAFooter';
import InstitutionalCurriculumSection from '../components/Circullam';

const HomePage: React.FC = () => {
  return (
    <>
      <VideoHeroSection />
      <CourseOverview />
      <WhyIDASection />
      <StudentSuccessSnapshot />
      <InstitutionalCurriculumSection />
      <LeadMagnet />
      <UpcomingBatchesBanner />
      <CollaborationsStrip />
      <FinalCTAFooter />
    </>
  );
};

export default HomePage;