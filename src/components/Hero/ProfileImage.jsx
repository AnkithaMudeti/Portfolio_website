import { memo } from 'react';
import profileImage from '../../assets/images/profile.png';
import './Hero.css';

function ProfileImage() {
  return (
    <div className="hero__profile-card glass-card">
      <div className="hero__profile-glow hero__profile-glow--blue" aria-hidden="true" />
      <div className="hero__profile-glow hero__profile-glow--purple" aria-hidden="true" />

      <div className="hero__image-panel">
        <img
          src={profileImage}
          alt="Mudeti Ankitha portrait"
          className="hero__image"
          loading="lazy"
        />
      </div>

      <div className="hero__info-card">
        <p className="hero__info-title">Mudeti Ankitha</p>
        <p className="hero__info-subtitle">Java Full Stack Developer</p>
        <p className="hero__info-status">🟢 Actively Seeking Full-Time Opportunities</p>
      </div>
    </div>
  );
}

export default memo(ProfileImage);
