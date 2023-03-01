import React from 'react';
import { images } from '../../constants';
import './index.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center" >
      <img src={images.G} alt="g__overlay" />
    </div>
    <div className="app__aboutus-content flex__center" >
      <div className="app__aboutus-content__groupeA">
        <h2 className="headtext__cormorant">About Us</h2>
        <img src={images.spoon} alt="spoon" className="spoon__img" />
        <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
      <div className="app__aboutus__knife flex__center">
        <img src={images.knife} alt="knife" className="knife__img" />
      </div>
      <div className="app__aboutus-content__groupeB">
        <h2 className="headtext__cormorant">Our History</h2>
        <img src={images.spoon} alt="spoon" className="spoon__img" />
        <p className="p__opensans">Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
