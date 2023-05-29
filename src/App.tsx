
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './LandingSection/Home'
import Login from './Login/Login'
import Signup from './Signup/Signup'
//import SignupinDffMethods from './SignupinDffMethods/index'
import CarListItemDetails from './MotorsListItemDetails/listItem'
import Settings from './Settings/Settings'
import SearchResults from './SearchResults/searchresults'
import MyProfile from './MyProfile/profile'
import Terms from './Settings/Terms&Conditions/index'
import SubscriptionDetails from './CurrentSubscriptionDetails/SubscriptionDetails/Subscription'
import MyAds from './MyAds/MyAds'
import MyFav from './MyFavourites/Faviourited'
import FAQ from './Settings/FAQ/Faqs'
import ReportIssue from './Settings/ReportIssue/ReportIssue'
import CurrentSubscriptionDetails from './CurrentSubscriptionDetails/currentSubscription'
import Notifications from './Notifications/notifications'
import ElectronicsListItemDetails from './ElectronicsListItemDetails/ElectronicsListItemDetails'
import PropertyListItemDetails from './PropertyListItemDetails/PropertyListItemDetails'
// import PropertyListItemDetails from './PropertyListItemDetails/PropertyItemDetails'
function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/SignUp' element={<Signup />} />
        <Route path='/Login' element={<Login />} />
        {/* <Route exact path="./SignupWays" component={SignupinDffMethods}/> */}
        <Route path='/MotorsListItemDetails/:id' element={<CarListItemDetails />} />
        <Route path='/ElectronicsListItemDetails' element={<ElectronicsListItemDetails />} />
        <Route path='/PropertyListItemDetails' element={<PropertyListItemDetails />} />
        <Route path='/SearchResults/:searchInput' element={<SearchResults/>}/>
        <Route path="/Settings" element={<Settings />} />
        <Route path="/MotorsListItemDetails" element={<SearchResults />} />        
        <Route path="/Settings/Myprofile" element={<MyProfile />} />
        <Route path="/Settings/Terms&Conditions" element={<Terms />} />
        <Route path="/Packages/Upgrade" element={<SubscriptionDetails />} />
        <Route path="/MyPackage" element={<CurrentSubscriptionDetails />} />
        <Route path="/MyAds" element={<MyAds />} />
        <Route path='/MyFaviorites' element={<MyFav/>}/>
        <Route path='/Settings/Faqs' element={<FAQ/>}/>
        <Route path='/Settings/ReportIssue' element={<ReportIssue/>}/>
        <Route path="/Settings/Notifications" element={<Notifications/>}/>
      </Routes>
    </BrowserRouter>
  );

}
export default App