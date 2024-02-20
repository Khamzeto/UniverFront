import React from 'react'
import MainPage from '../components/pages/MainPage';
import AdminPage from '../components/pages/AdminPage';
import AdminPageGroups from '../components/pages/AdminPageGroups';
import { Route, Routes } from 'react-router-dom';
import GroupProfile from '../components/adminBody/GroupProfile';
import Schedule from '../components/CuratorProfile/Schedule';
import UserSchedule from '../UserProfile.jsx/UserSchedule';
import GlobalProfile from '../components/globalProfile/GlobalProfile';
import UserStatistics from '../UserProfile.jsx/UserStatistics';
import UserProgress from '../UserProfile.jsx/UserProgress';
import TeacherGroup from '../components/TeacherProfile/TeacherGroup';
import TeacherMagazine from '../components/TeacherProfile/TeacherMagazine';
import TeacherSchedule from '../UserProfile.jsx/TeacherSchedule';
import CuratorProfile from '../components/CuratorProfile/CuratorProfile';
import News from '../components/News/News';
import NewsLink from '../components/News/NewsLink';
import AdmissionForm from '../Abiturient/Abiturient';
import Abiturient from '../Abiturient/Abiturient';
import CuratorGroup from '../components/CuratorProfile/CuratorGroup';
import CuratorSchedule from '../UserProfile.jsx/CuratorSchedule';

const RoutesComponent = () => {
  return (
    <div>
    <Routes>
  <Route 
        path='/' 
        element={<MainPage/>} />
    
    <Route 
        path='/admin' 
        element={<AdminPage/>} />
    <Route 
        path='/admin_groups' 
        element={<AdminPageGroups/>} />
        <Route path="/group-teacher/:groupname" element={<TeacherGroup />} />
        <Route path="/magazine/:groupname" element={<TeacherMagazine />} />
        <Route path="/group/:groupname" element={<GroupProfile />} />
        <Route path="/group-curator/:groupname" element={<CuratorProfile />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/user-schedule/:groupname" element={<UserSchedule/>} />
        <Route path="/profile" element={<GlobalProfile/>} />
        <Route path="/user-progress/:username" element={<UserProgress/>} />
        <Route path="/user-statistics/:username" element={<UserStatistics/>} />
        <Route path="/create-schedule" element={<Schedule/>} />
        <Route path="/teacher-schedule/:groupname" element={<TeacherSchedule/>} />
        <Route path="/curator-group/:groupname" element={<CuratorGroup/>} />
        <Route path="/curator-schedule/:groupname" element={<CuratorSchedule/>} />
        <Route path = "/news" element = {<NewsLink/>}/>
        <Route path = "/abiturient" element={<Abiturient/>}/>
    </Routes>
      
    </div>
  )
}

export default RoutesComponent
