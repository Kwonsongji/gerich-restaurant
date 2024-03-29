import React from 'react';
import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import './Laurels.css';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="award_img" />
    <div className="app__laurels_award-card_content">
      <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
)
const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="laurel">
    <div className="app__logo-img">
      <img src={images.logo} alt="logo_img" />
    </div>
    <div className="app__wrapper-info">
      <SubHeading title="Award & recognition" />
      <h1 className="headtext__cormorant"> Our Laurels </h1>
      <div className="app__laurels_awards">
        {data.awards.map((award) =>
          <AwardCard award={award} key={award.title} />
        )}
        
      </div>
    </div>
    <div className="app__wrapper-img">
      {<img src={images.laurels} alt="laurels_img" />}
    </div>

  </div>
);

export default Laurels;
