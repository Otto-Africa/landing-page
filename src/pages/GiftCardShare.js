import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SEO from "../components/SEO";
import "./GiftCardShare.css";

const GiftCardShare = () => {
  const { id } = useParams();
  const [isChecking, setIsChecking] = useState(true);
  const [showDownload, setShowDownload] = useState(false);

  useEffect(() => {
    // Check if user is on mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
      // Try to deep link to the app
      const deepLink = `otto://gift-cards/${id}`;
      
      // Attempt to open the app
      window.location.href = deepLink;
      
      // Fallback: If app doesn't open within 2 seconds, show download options
      const timer = setTimeout(() => {
        setShowDownload(true);
        setIsChecking(false);
      }, 2000);
      
      // Clean up timer if component unmounts
      return () => clearTimeout(timer);
    } else {
      // Desktop: Show download options immediately
      setIsChecking(false);
      setShowDownload(true);
    }
  }, [id]);

  const handlePlayStore = () => {
    window.open("https://play.google.com/store/apps/details?id=com.otto.customer", "_blank");
  };

  const handleAppStoreIOS = () => {
    window.open("https://apps.apple.com/app/otto/id123456789", "_blank");
  };

  if (isChecking) {
    return (
      <div className="gift-card-share-container">
        <div className="gift-card-share-content">
          <div className="loading-spinner"></div>
          <h2>Opening gift card...</h2>
          <p>Redirecting you to the app</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="Gift Card - Otto Africa"
        description="View your Otto Africa gift card. Download the Otto app to access and use your digital gift card."
        keywords="gift card, digital gift card, Otto gift card"
        url={`https://ottoafrica.com/gift-cards/${id}`}
      />
      <div className="gift-card-share-container">
      <div className="gift-card-share-content">
        <div className="gift-card-icon">🎁</div>
        <h1>View Gift Card in App</h1>
        <p>
          To view this gift card, please download the Otto app on your mobile device.
        </p>
        
        {showDownload && (
          <div className="download-buttons">
            <button 
              className="download-btn app-store"
              onClick={handleAppStoreIOS}
            >
              <span className="btn-icon">📱</span>
              <span>Download for iOS</span>
            </button>
            <button 
              className="download-btn play-store"
              onClick={handlePlayStore}
            >
              <span className="btn-icon">🤖</span>
              <span>Download for Android</span>
            </button>
          </div>
        )}
        
        <button 
          className="retry-btn"
          onClick={() => {
            const deepLink = `otto://gift-cards/${id}`;
            window.location.href = deepLink;
            setTimeout(() => setShowDownload(true), 2000);
          }}
        >
          Try opening app again
        </button>
      </div>
    </div>
    </>
  );
};

export default GiftCardShare;

