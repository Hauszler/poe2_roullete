import React, { useState } from 'react';
import { classes } from '../data/classes';

const Randomizer = () => {
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedAscendancy, setSelectedAscendancy] = useState(null);
  const [isRolling, setIsRolling] = useState(false);

  const randomize = () => {
    setIsRolling(true);
    
    // Simulate "rolling" effect
    setTimeout(() => {
      const randomClassIndex = Math.floor(Math.random() * classes.length);
      const chosenClass = classes[randomClassIndex];
      const randomAscIndex = Math.floor(Math.random() * chosenClass.ascendancies.length);
      
      setSelectedClass(chosenClass);
      setSelectedAscendancy(chosenClass.ascendancies[randomAscIndex]);
      setIsRolling(false);
    }, 800);
  };

  return (
    <div className="main-container">
      <header className="title-section">
        <h1>PoE2 Build Oracle</h1>
        <p>Fate will decide your path through Wraeclast.</p>
      </header>

      <div className={`randomizer-card ${isRolling ? 'rolling' : ''}`}>
        {!selectedClass && !isRolling ? (
          <div className="initial-state">
            <h2 className="cinzel">Prepare for the Journey</h2>
            <p>Click the button below to draw your destiny.</p>
          </div>
        ) : (
          <div className="class-display">
            {selectedClass && (
              <>
            <div className={`class-image ${isRolling ? 'invisible' : ''}`}>
              {selectedClass.image && (
                <img 
                  src={`${import.meta.env.BASE_URL}${selectedClass.image.startsWith('/') ? selectedClass.image.slice(1) : selectedClass.image}`} 
                  alt={selectedClass.name} 
                  onLoad={(e) => {
                    e.target.style.display = 'block';
                    if (e.target.nextSibling) e.target.nextSibling.style.display = 'none';
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                  }} 
                />
              )}
              <div className="placeholder-portrait cinzel" style={{
                display: selectedClass.image ? 'none' : 'flex',
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'linear-gradient(135deg, #1a1a1e 0%, #0a0a0c 100%)',
                color: 'var(--color-gold)',
                fontSize: '3rem'
              }}>
                {selectedClass.name.charAt(0)}
              </div>
            </div>
                <h2 className="class-name">{selectedClass.name}</h2>
                <h3 className="ascendancy-name">{selectedAscendancy}</h3>
                <p className="ascendancy-detail cinzel" style={{
                  color: 'var(--color-gold)',
                  fontSize: '0.9rem',
                  maxWidth: '600px',
                  margin: '10px auto',
                  lineHeight: '1.4',
                  backgroundColor: 'rgba(0,0,0,0.3)',
                  padding: '10px',
                  borderLeft: '2px solid var(--color-blood)'
                }}>
                  {selectedClass.ascendancyDetails[selectedAscendancy]}
                </p>
                <p className="class-description">{selectedClass.description}</p>
                <div className="attribute-tag cinzel" style={{color: '#a0a0a0', fontSize: '0.9rem'}}>
                  Primary: {selectedClass.attribute}
                </div>
              </>
            )}
          </div>
        )}

        <button 
          className="btn-randomize" 
          onClick={randomize} 
          disabled={isRolling}
        >
          {isRolling ? 'Consulting the Spirits...' : 'Draw Destiny'}
        </button>
      </div>

      <footer>
        Path of Exile 2 Class Randomizer &bull; 2026
      </footer>
    </div>
  );
};

export default Randomizer;
