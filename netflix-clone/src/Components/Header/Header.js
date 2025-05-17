import React from 'react'
import "./Header.css";
import netflixLogo from "../../Assets/Images/netflix-logo-COGC8jhl.png"
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Header() {
  return (
    <div className="Header_outer_container">
      <div className="Header_container">
        <div className="Header_left">
          <ul>
            <li><img src={netflixLogo} alt="Netflix Logo" width="100"/></li>
            <li>Netflix</li>
            <li>Home</li>
            <li>TvShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse by language</li>
          </ul>
        </div>
        <div className="Header_right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsIcon />
            </li>
            <li>
              <AssignmentIndIcon />
            </li>
             <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header