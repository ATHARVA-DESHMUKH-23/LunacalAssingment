import React, { useState , useRef} from 'react';
import './styles/open.css';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import question from './img/Vector.png';
import frame from './img/frame.png'
import galleryimg from './img/gallery.jpeg';
import navArrow from './img/Group 28.png';

const App = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  
  };
  const [images, setImages] = useState([galleryimg, galleryimg, galleryimg, galleryimg]);
  const handleAddImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages((prevImages) => [...prevImages, reader.result]);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const scrollContainerRef = useRef(null);
  const scrollGallery = (direction) => {
    if (scrollContainerRef.current) {
      // Get the width of one image box
      const imageBox = scrollContainerRef.current.querySelector('.image-box');
      const scrollAmount = imageBox ? imageBox.offsetWidth : 0; // Fallback to 0 if no image box is found
  
      scrollContainerRef.current.style.scrollBehavior = 'smooth';
  
      if (direction === 'left') {
        scrollContainerRef.current.scrollLeft -= scrollAmount;
      } else if (direction === 'right') {
        scrollContainerRef.current.scrollLeft += scrollAmount;
      }
    }
  };
  
  


  return (
    <div className="container">
      <div className="widget-container">
        {/* Left Side */}
        <div className="left-side">
          <div className="blank"></div>
        </div>

        {/* Right Side */}
        <div className="right-side">
          <div className="widget tabs-widget">
            <Box sx={{ width: '100%', typography: 'body1', overflow: 'visible', }}>
              <TabContext value={value}>
                <Box className="tabbox">
                  <TabList
                    className="tablist"
                    onChange={handleChange}
                    aria-label="Tabs example"
                    TabIndicatorProps={{
                      sx: {
                        borderRadius: '16px',
                        backgroundColor: '#28292f',
                        boxShadow:
                          '0px 32px 32px rgba(0, 0, 0, 0.5), ' +
                          '0px -32px 32px rgba(41,49,57, 0.5), ' +
                          '-32px 0px 32px rgba(0, 0, 0, 0.5), ' + // Second box-shadow
                          '32px 0px 32px rgba(0, 0, 0, 0.5) !important',
                        zIndex: '0',
                        height: '100%',
                        transition: 'all 0.5s ease',  // Optional: Adjust the height of the underline
                      },
                    }}
                  >
                    <Tab className='tab1'
                      label="About Me"
                      value="1" />

                    <Tab
                      className='tab1'
                      label="Experience"
                      value="2" />
                    <Tab
                      className='tab1'
                      label="Recomemded"
                      value="3" />
                  </TabList>
                </Box>
                <TabPanel className='tab-content' value="1">About Me Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo eius doloribus ipsam quos, dolorem error libero dolorum incidunt tempore exercitationem. Ut alias sunt veritatis, suscipit hic a unde repellendus dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, accusamus sequi! Aliquid vitae porro consequatur necessitatibus quisquam optio molestias asperiores autem fugiat aut similique, perspiciatis nihil maxime dolore, saepe voluptatum? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus adipisci cupiditate expedita autem aliquam veniam cum officiis magnam architecto delectus odit porro perferendis ducimus maxime quisquam, quia, dolor, consectetur tenetur.</TabPanel>
                <TabPanel className='tab-content' value="2">Experience Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque praesentium impedit repellendus dolore. Non, deserunt! Nesciunt sequi, ullam, maiores laborum quisquam nihil corporis eveniet expedita in eligendi delectus? Aspernatur, nam?</TabPanel>
                <TabPanel className='tab-content' value="3">Recomemded Lorem ipsum dolor, sit amet co</TabPanel>
              </TabContext>
            </Box>
            <div className="topleft">
              <div className="topleftcontent">
                <div className="question">
                  <img src={question} alt="question mark img" />
                </div>
              </div>
            </div>
            <div className="left">
              <div>
                <img src={frame} alt="" />
              </div>
            </div>
          </div>

          {/* Other widgets */}
          <div className="line"></div>
          <div className="widget gallery-widget">
            <div className="gallery-header">
              <div className="name">Gallery</div>
              <div className="imgnav">
              <button className="add-image-btn" onClick={() => document.getElementById('fileInput').click()}>
  + ADD IMAGE
</button>
              <input
                    id="fileInput"
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleAddImage}
                  />
              
              <div className="navigation-buttons">
                <button className="nav-left" onClick={() => scrollGallery('left')}> <img src={navArrow}  /> </button>
                <button className="nav-right" onClick={() => scrollGallery('right')}><img src={navArrow}  /> </button>
              </div>
              </div>
            </div>
            <div className="imgcontainer">
              <div className="gallery" ref={scrollContainerRef}>
              {images.map((imageSrc, index) => (
          <div className="image-box" key={index}>
            <img src={imageSrc} alt={`Image ${index + 1}`} />
          </div>
        ))}
              </div>
            </div>
            <div className="topleft">
              <div className="topleftcontent">
                <div className="question">
                  <img src={question} alt="question mark img" />
                </div>
              </div>
            </div>
            <div className="left">
              <div>
                <img src={frame} alt="" />
              </div>
            </div>

          </div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
