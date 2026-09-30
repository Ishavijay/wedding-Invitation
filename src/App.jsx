import React, { useState, useRef, useEffect } from 'react';
import Navigation from './components/Navigation';
import EntranceBox from './components/EntranceBox';
import AmbientPetals from './components/AmbientPetals';
import MusicPlayer from './components/MusicPlayer';
import HeroSection from './components/HeroSection';
import ScratchCountdown from './components/ScratchCountdown';
import FormalInvitation from './components/FormalInvitation';
import MeetTheCouple from './components/MeetTheCouple';
import LoveStory from './components/LoveStory';
import WeddingEvents from './components/WeddingEvents';
// import VenueModal from './components/VenueModal';
// import RoyalGallery from './components/RoyalGallery';
// import LightboxModal from './components/LightboxModal';
import RsvpSection from './components/RsvpSection';
import DigitalPassModal from './components/DigitalPassModal';
import Footer from './components/Footer';
// import { galleryPhotos } from './data/galleryData';

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  // const [selectedVenueEvent, setSelectedVenueEvent] = useState(null);
  // const [lightboxData, setLightboxData] = useState(null);
  const [passGuest, setPassGuest] = useState(null);

  const audioRef = useRef(null);

  // Audio Control Helper
  const toggleMusic = (forcePlay = null) => {
    if (!audioRef.current) return;

    if (forcePlay === true || (!isMusicPlaying && forcePlay === null)) {
      audioRef.current.play().then(() => {
        setIsMusicPlaying(true);
      }).catch(err => {
        console.warn('Audio play postponed:', err);
      });
    } else {
      audioRef.current.pause();
      setIsMusicPlaying(false);
    }
  };

  const handleEnterInvitation = () => {
    setHasEntered(true);
    // Smoothly scroll to hero
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Lightbox navigation
  // const handleLightboxNavigate = (direction) => {
  //   if (!lightboxData) return;
  //   const total = galleryPhotos.length;
  //   let nextIndex = (lightboxData.index + direction) % total;
  //   if (nextIndex < 0) nextIndex = total - 1;
  //   setLightboxData({
  //     photo: galleryPhotos[nextIndex],
  //     index: nextIndex
  //   });
  // };

  return (
    <div className="royal-wedding-app">
      {/* Background Wedding Audio */}
      <audio
        ref={audioRef}
        src="/assets/ReelAudio-7073.mp3"
        loop
        preload="auto"
      />

      {/* Entrance Box Ceremony Overlay */}
      {!hasEntered && (
        <EntranceBox
          onEnter={handleEnterInvitation}
          isMusicPlaying={isMusicPlaying}
          toggleMusic={toggleMusic}
        />
      )}

      {/* Floating Ambient Rose & Marigold Petals */}
      <AmbientPetals />

      {/* Floating Music Player */}
      <MusicPlayer
        isPlaying={isMusicPlaying}
        onToggle={() => toggleMusic()}
      />

      {/* Global Top Navbar */}
      <Navigation />

      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Interactive Scratch Card & Live Countdown */}
      <ScratchCountdown />

      {/* 3. Formal Royal Invitation */}
      <FormalInvitation />

      {/* 4. Meet The Bride & Groom */}
      <MeetTheCouple />

      {/* 5. Our Love Story Timeline */}
      <LoveStory />

      {/* 6. Wedding Events & Itinerary */}
      <WeddingEvents />

      {/* 7. Palace Jharokha Photo Gallery - Visual Diary (commented out) */}
      {/* <RoyalGallery
        onOpenLightbox={(photo, index) => setLightboxData({ photo, index })}
      /> */}

      {/* 8. Luxury RSVP & Attendance Confirmation */}
      {/* <RsvpSection onOpenPass={(guest) => setPassGuest(guest)} /> */}

      {/* 9. Royal Monogram Footer */}
      <Footer />

      {/* Venue Location Map Modal (removed) */}

      {/* Photo Lightbox Modal (commented out with Visual Diary) */}
      {/* {lightboxData && (
        <LightboxModal
          photo={lightboxData.photo}
          index={lightboxData.index}
          onClose={() => setLightboxData(null)}
          onNavigate={handleLightboxNavigate}
        />
      )} */}

      {/* Digital VIP Entry Pass Modal */}
      {passGuest && (
        <DigitalPassModal
          guestData={passGuest}
          onClose={() => setPassGuest(null)}
        />
      )}
    </div>
  );
}
