import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { BsArrowLeftShort } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'
import HeadSection from '../../HeadSection/Header'

import './reportissue.css'


const ReportIssue = () => {
  const navigate = useNavigate()
 

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" onClick={()=>navigate('/')}>
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"    
      onClick={()=>navigate('/Settings')}
    >
      Settings
    </Link>,
    <Typography key="3" color="text.primary">
      Report an Issue
    </Typography>,
  ];

  return (
    <>
      <HeadSection />
      <div className='report-issue-main-container'>
        <div className='report-ad-container'>ad</div>
        <div className='report-bottom-container'>
          <div className='report-bread-crumbs'>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
              className='Report-breadcrumbs-pointer'
            >
              {breadcrumbs}
            </Breadcrumbs>
          </div>
          <div className='report-button'>
            <button type="button" className='reportIssue-tot-settings' onClick={() => navigate('/Settings')}><BsArrowLeftShort className='arrow'/>Settings</button>
          </div>
          <div className='report-container'>
            <h1 className='report-heading'>Report an Issue</h1>
            <div className="reports-container">
              <div className='category-selection-container'>
                <label htmlFor='category' className='category-label'>Select Category</label>
                <select id="category" className='category'>
                  <option value="Ad Rejection">Ad Rejection</option>
                  <option value="Ad Live">Ad Live</option>
                  <option value="Ad Sold">Ad Sold</option>
                </select>
              </div>
              <div className='issue-container'>
                <label htmlFor='issue'>Write Your Issue</label>
                <textarea id="issue" className='report-issue' />
              </div>
              <Button type="button" variant='contained' disabled className='report-submit-button'>Submit</Button>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default ReportIssue