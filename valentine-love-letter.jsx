// ╔══════════════════════════════════════════════════════════════╗
// ║          💕 VALENTINE LOVE LETTER — React Component 💕       ║
// ║                                                              ║
// ║  This is the React/JSX version of the component.            ║
// ║  The actual deployed version is index.html which loads:      ║
// ║    • config.js   → Your customizable content                ║
// ║    • styles.css  → All animations & styling                 ║
// ╚══════════════════════════════════════════════════════════════╝

import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

// Import config (in index.html these are loaded as global <script> tags)
// import { VALENTINE_CONFIG, NO_BUTTON_TEXTS } from './config';


// ─────────────────────────────────────────────────────
//  HEART ICON COMPONENT
// ─────────────────────────────────────────────────────

function HeartIcon({ style }) {
  return (
    <Heart
      style={{
        fill: '#ff4d6d',
        stroke: 'none',
        ...style
      }}
    />
  );
}


// ─────────────────────────────────────────────────────
//  FLOATING HEARTS BACKGROUND
// ─────────────────────────────────────────────────────

function FloatingHearts() {
  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      opacity: 0.15
    }}>
      {[...Array(20)].map((_, i) => (
        <HeartIcon
          key={i}
          style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${15 + Math.random() * 30}px`,
            height: `${15 + Math.random() * 30}px`,
            animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}
    </div>
  );
}


// ─────────────────────────────────────────────────────
//  YES BUTTON
// ─────────────────────────────────────────────────────

function YesButton({ onClick }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
      zIndex: 5
    }}>
      <button
        onClick={onClick}
        style={{
          padding: '18px 50px',
          fontSize: 'clamp(1.2rem, 3vw, 1.4rem)',
          background: 'linear-gradient(135deg, #ff4d6d 0%, #ff8fa3 100%)',
          color: 'white',
          border: 'none',
          borderRadius: '50px',
          cursor: 'pointer',
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 600,
          letterSpacing: '1px',
          boxShadow: '0 10px 30px rgba(255, 77, 109, 0.3)',
          transition: 'all 0.3s ease',
          minWidth: '200px'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'translateY(-3px) scale(1.05)';
          e.target.style.boxShadow = '0 15px 40px rgba(255, 77, 109, 0.5)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translateY(0) scale(1)';
          e.target.style.boxShadow = '0 10px 30px rgba(255, 77, 109, 0.3)';
        }}
      >
        Yes! 💕
      </button>
    </div>
  );
}


// ─────────────────────────────────────────────────────
//  NO BUTTON (runs away from cursor!)
// ─────────────────────────────────────────────────────

function NoButton({ text, position, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '18px 50px',
        fontSize: 'clamp(1.2rem, 3vw, 1.4rem)',
        background: 'linear-gradient(135deg, #6b5b95 0%, #8b7ab8 100%)',
        color: 'white',
        border: '3px solid #5a4a7f',
        borderRadius: '50px',
        cursor: 'pointer',
        fontFamily: "'Cormorant Garamond', serif",
        fontWeight: 600,
        letterSpacing: '1px',
        boxShadow: '0 8px 25px rgba(107, 91, 149, 0.4)',
        transition: 'all 0.2s ease',
        position: 'absolute',
        top: position.top,
        left: position.left,
        transform: 'translate(-50%, -50%)',
        minWidth: '200px',
        whiteSpace: 'nowrap',
        zIndex: 15,
        touchAction: 'manipulation'
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = 'translate(-50%, -50%) scale(1.05)';
        e.target.style.boxShadow = '0 12px 35px rgba(107, 91, 149, 0.5)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'translate(-50%, -50%) scale(1)';
        e.target.style.boxShadow = '0 8px 25px rgba(107, 91, 149, 0.4)';
      }}
    >
      {text}
    </button>
  );
}


// ─────────────────────────────────────────────────────
//  QUESTION STAGE — "Will You Be My Valentine?"
// ─────────────────────────────────────────────────────

function QuestionStage({ herName, noButtonText, noButtonPosition, onYes, onNo }) {
  return (
    <div style={{
      textAlign: 'center',
      animation: 'fadeIn 1s ease-out',
      position: 'relative',
      width: '100%',
      maxWidth: '600px'
    }}>
      <HeartIcon style={{
        width: '80px',
        height: '80px',
        marginBottom: '40px',
        animation: 'heartbeat 1.5s ease-in-out infinite'
      }} />

      <h1 style={{
        fontSize: 'clamp(2rem, 6vw, 4rem)',
        fontWeight: 600,
        color: '#2d1f3f',
        marginBottom: '30px',
        letterSpacing: '1px',
        fontStyle: 'italic',
        lineHeight: '1.3'
      }}>
        My Dear {herName}<br />Will You Be My Valentine?
      </h1>

      <p style={{
        fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
        color: '#5d4e6d',
        marginBottom: '60px',
        fontWeight: 300,
        lineHeight: '1.6'
      }}>
        I have something special to share with you... ❤️
      </p>

      <div style={{
        position: 'relative',
        minHeight: '250px',
        width: '100%',
        maxWidth: '500px',
        margin: '0 auto'
      }}>
        <YesButton onClick={onYes} />
        <NoButton text={noButtonText} position={noButtonPosition} onClick={onNo} />
      </div>
    </div>
  );
}


// ─────────────────────────────────────────────────────
//  IMAGE GALLERY
// ─────────────────────────────────────────────────────

function ImageGallery({ images, stage, animationDelay }) {
  if (images.length === 0) return null;

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: images.length === 1 ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '20px',
      marginTop: '40px',
      marginBottom: '40px',
      animation: stage === 'content' ? `fadeInUp 0.8s ease-out ${animationDelay}s backwards` : 'none'
    }}>
      {images.map((imageUrl, index) => (
        <div key={index} style={{
          borderRadius: '15px',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
          border: '3px solid rgba(255, 77, 109, 0.2)'
        }}>
          <img
            src={imageUrl}
            alt={`Memory ${index + 1}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block'
            }}
          />
        </div>
      ))}
    </div>
  );
}


// ─────────────────────────────────────────────────────
//  LETTER STAGE — The Love Letter
// ─────────────────────────────────────────────────────

function LetterStage({ stage, letterConfig }) {
  const paragraphDelay = letterConfig.paragraphs.length * 0.2;
  const imageDelay = letterConfig.images.length > 0 ? 0.2 : 0;

  return (
    <div style={{
      maxWidth: '900px',
      width: '100%',
      background: 'white',
      borderRadius: '20px',
      padding: 'clamp(30px, 6vw, 80px)',
      boxShadow: '0 30px 90px rgba(0, 0, 0, 0.12)',
      animation: 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
      position: 'relative',
      border: '3px solid rgba(255, 77, 109, 0.1)',
      margin: '20px'
    }}>
      {/* Decorative corner — top right */}
      <div style={{
        position: 'absolute', top: '15px', right: '15px',
        width: 'clamp(40px, 8vw, 60px)', height: 'clamp(40px, 8vw, 60px)',
        borderTop: '3px solid #ff4d6d', borderRight: '3px solid #ff4d6d',
        opacity: 0.3
      }} />
      {/* Decorative corner — bottom left */}
      <div style={{
        position: 'absolute', bottom: '15px', left: '15px',
        width: 'clamp(40px, 8vw, 60px)', height: 'clamp(40px, 8vw, 60px)',
        borderBottom: '3px solid #ff4d6d', borderLeft: '3px solid #ff4d6d',
        opacity: 0.3
      }} />

      <div style={{
        opacity: stage === 'content' ? 1 : 0,
        transition: 'opacity 0.8s ease-out 0.3s'
      }}>
        {/* Letter Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '50px',
          animation: stage === 'content' ? 'fadeInDown 0.8s ease-out 0.5s backwards' : 'none'
        }}>
          <HeartIcon style={{
            width: 'clamp(35px, 8vw, 50px)',
            height: 'clamp(35px, 8vw, 50px)',
            marginBottom: '20px'
          }} />

          <h2 style={{
            fontSize: 'clamp(1.8rem, 5vw, 3.5rem)',
            fontWeight: 400, color: '#2d1f3f',
            fontStyle: 'italic', letterSpacing: '1px',
            marginBottom: '10px'
          }}>
            My Dearest {letterConfig.herName}
          </h2>
        </div>

        {/* Letter Body */}
        <div style={{
          fontSize: 'clamp(1.1rem, 2.2vw, 1.4rem)',
          lineHeight: '2', color: '#3d3d3d',
          fontWeight: 300, letterSpacing: '0.3px'
        }}>
          {/* Paragraphs */}
          {letterConfig.paragraphs.map((paragraph, index) => (
            <p key={index} style={{
              marginBottom: '30px',
              animation: stage === 'content' ? `fadeInUp 0.8s ease-out ${0.7 + index * 0.2}s backwards` : 'none'
            }}>
              {paragraph}
            </p>
          ))}

          {/* Images */}
          <ImageGallery
            images={letterConfig.images}
            stage={stage}
            animationDelay={0.7 + paragraphDelay}
          />

          {/* Signature */}
          <p style={{
            marginTop: '50px', fontSize: '1.6rem',
            fontStyle: 'italic', color: '#ff4d6d', textAlign: 'center',
            animation: stage === 'content' ? `fadeInUp 0.8s ease-out ${0.9 + paragraphDelay + imageDelay}s backwards` : 'none'
          }}>
            Forever yours,
          </p>

          <p style={{
            fontSize: '2rem', fontStyle: 'italic',
            fontWeight: 600, color: '#2d1f3f',
            textAlign: 'center', marginTop: '10px',
            animation: stage === 'content' ? `fadeInUp 0.8s ease-out ${1.1 + paragraphDelay + imageDelay}s backwards` : 'none'
          }}>
            {letterConfig.yourName}
          </p>
        </div>
      </div>
    </div>
  );
}


// ─────────────────────────────────────────────────────
//  MAIN APP COMPONENT
// ─────────────────────────────────────────────────────

export default function ValentineLoveLetter() {
  const [stage, setStage] = useState('question'); // question → letter → content
  const [noButtonPosition, setNoButtonPosition] = useState({ top: '70%', left: '50%' });
  const [noButtonText, setNoButtonText] = useState('No');
  const [clickCount, setClickCount] = useState(0);

  // Config is loaded from config.js (global variables)
  const letterConfig = typeof VALENTINE_CONFIG !== 'undefined' ? VALENTINE_CONFIG : {};
  const noButtonTexts = typeof NO_BUTTON_TEXTS !== 'undefined' ? NO_BUTTON_TEXTS : ['No'];

  // Transition from envelope opening to content reveal
  useEffect(() => {
    if (stage === 'letter') {
      setTimeout(() => setStage('content'), 800);
    }
  }, [stage]);

  // No button handler — moves button & cycles text
  const handleNoClick = () => {
    let newTop, newLeft;
    do {
      newTop = Math.random() * 70 + 20;
      newLeft = Math.random() * 80 + 10;
    } while (newTop < 40 && newLeft > 30 && newLeft < 70);

    setNoButtonPosition({ top: `${newTop}%`, left: `${newLeft}%` });

    if (clickCount < noButtonTexts.length - 1) {
      setClickCount(prev => prev + 1);
      setNoButtonText(noButtonTexts[clickCount + 1]);
    }
  };

  // Yes button handler — opens the letter
  const handleYes = () => {
    setStage('letter');
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #ffeef8 0%, #fff5f7 50%, #fffbf5 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: "'Cormorant Garamond', serif",
      position: 'relative',
      overflow: 'hidden'
    }}>
      <FloatingHearts />

      {stage === 'question' ? (
        <QuestionStage
          herName={letterConfig.herName}
          noButtonText={noButtonText}
          noButtonPosition={noButtonPosition}
          onYes={handleYes}
          onNo={handleNoClick}
        />
      ) : stage === 'letter' || stage === 'content' ? (
        <LetterStage stage={stage} letterConfig={letterConfig} />
      ) : null}
    </div>
  );
}