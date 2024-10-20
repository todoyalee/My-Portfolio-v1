import React from 'react';

const VideoLink3 = () => {
  const containerStyle = {
    textAlign: 'center',
    marginTop: '50px',
  };

  const linkStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#ff5733',
    textDecoration: 'none',
    backgroundColor: 'yellow',
    padding: '10px 20px',
    borderRadius: '10px',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const hoverStyle = {
    color: '#fff',
    backgroundColor: '#ff5733',
    boxShadow: '0 6px 8px rgba(0, 0, 0, 0.2)',
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div style={containerStyle}>
      <a
        href="https://www.youtube.com/watch?v=X0kOptCutSs"
        target="_blank"
        rel="noopener noreferrer"
        style={isHovered ? { ...linkStyle, ...hoverStyle } : linkStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        10 Signes Alarmants : Quand Faut-il Vraiment Consulter un Médecin ?

      </a>
    </div>
  );
}

export default VideoLink3;
