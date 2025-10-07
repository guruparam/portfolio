import React, { useEffect, useRef } from 'react';

const GalaxyBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef?.current;
    const ctx = canvas?.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Galaxy particles
    const particles = [];
    const maxParticles = 200;
    
    // Create galaxy spiral arms
    const createParticles = () => {
      particles.length = 0;
      const centerX = canvas?.width / 2;
      const centerY = canvas?.height / 2;
      
      for (let i = 0; i < maxParticles; i++) {
        // Create spiral pattern
        const angle = (i / maxParticles) * Math.PI * 8; // Multiple spiral arms
        const radius = (i / maxParticles) * Math.min(canvas?.width, canvas?.height) * 0.4;
        const spiralX = Math.cos(angle) * radius;
        const spiralY = Math.sin(angle) * radius;
        
        // Add some randomness for natural look
        const randomOffset = 50;
        const offsetX = (Math.random() - 0.5) * randomOffset;
        const offsetY = (Math.random() - 0.5) * randomOffset;
        
        particles?.push({
          x: centerX + spiralX + offsetX,
          y: centerY + spiralY + offsetY,
          size: Math.random() * 3 + 0.5,
          opacity: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 0.02 + 0.005,
          angle: angle,
          baseRadius: radius,
          color: getStarColor(),
          twinkle: Math.random() * 0.02 + 0.01
        });
      }
    };
    
    // Different star colors for galaxy effect
    const getStarColor = () => {
      const colors = [
        'rgba(255, 255, 255, ',      // White
        'rgba(173, 216, 230, ',      // Light blue
        'rgba(255, 182, 193, ',      // Light pink
        'rgba(255, 255, 224, ',      // Light yellow
        'rgba(221, 160, 221, ',      // Plum
        'rgba(0, 212, 255, ',        // Cyan (primary color)
        'rgba(255, 105, 180, '       // Hot pink
      ];
      return colors?.[Math.floor(Math.random() * colors?.length)];
    };

    createParticles();

    // Shooting stars
    const shootingStars = [];
    const createShootingStar = () => {
      if (Math.random() < 0.003) { // Low probability
        shootingStars?.push({
          x: Math.random() * canvas?.width,
          y: Math.random() * canvas?.height * 0.5,
          length: Math.random() * 80 + 20,
          speed: Math.random() * 8 + 4,
          angle: Math.random() * Math.PI * 2,
          opacity: 1,
          decay: 0.02
        });
      }
    };

    // Animation function
    const animate = (time) => {
      ctx?.clearRect(0, 0, canvas?.width, canvas?.height);
      
      // Create space gradient background
      const gradient = ctx?.createRadialGradient(
        canvas?.width / 2, canvas?.height / 2, 0,
        canvas?.width / 2, canvas?.height / 2, Math.max(canvas?.width, canvas?.height) / 2
      );
      gradient?.addColorStop(0, 'rgba(15, 10, 25, 0.8)');
      gradient?.addColorStop(0.5, 'rgba(10, 5, 20, 0.9)');
      gradient?.addColorStop(1, 'rgba(5, 0, 15, 1)');
      
      ctx.fillStyle = gradient;
      ctx?.fillRect(0, 0, canvas?.width, canvas?.height);
      
      // Draw and animate particles
      particles?.forEach((particle, index) => {
        // Rotate the galaxy slowly
        particle.angle += particle?.speed;
        const centerX = canvas?.width / 2;
        const centerY = canvas?.height / 2;
        
        // Update position based on rotation
        particle.x = centerX + Math.cos(particle?.angle) * particle?.baseRadius;
        particle.y = centerY + Math.sin(particle?.angle) * particle?.baseRadius;
        
        // Twinkling effect
        particle.opacity += Math.sin(time * particle?.twinkle) * 0.3;
        particle.opacity = Math.max(0.1, Math.min(1, particle?.opacity));
        
        // Draw particle
        ctx?.beginPath();
        ctx?.arc(particle?.x, particle?.y, particle?.size, 0, Math.PI * 2);
        ctx.fillStyle = particle?.color + particle?.opacity + ')';
        ctx?.fill();
        
        // Add glow effect for larger particles
        if (particle?.size > 2) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = particle?.color + '0.5)';
          ctx?.fill();
          ctx.shadowBlur = 0;
        }
      });
      
      // Create shooting stars
      createShootingStar();
      
      // Draw and animate shooting stars
      shootingStars?.forEach((star, index) => {
        ctx?.beginPath();
        ctx?.moveTo(star?.x, star?.y);
        
        const endX = star?.x - Math.cos(star?.angle) * star?.length;
        const endY = star?.y - Math.sin(star?.angle) * star?.length;
        
        ctx?.lineTo(endX, endY);
        ctx.strokeStyle = `rgba(255, 255, 255, ${star?.opacity})`;
        ctx.lineWidth = 2;
        ctx?.stroke();
        
        // Update position
        star.x += Math.cos(star?.angle) * star?.speed;
        star.y += Math.sin(star?.angle) * star?.speed;
        star.opacity -= star?.decay;
        
        // Remove faded stars
        if (star?.opacity <= 0) {
          shootingStars?.splice(index, 1);
        }
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animate(0);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef?.current) {
        cancelAnimationFrame(animationRef?.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{
        background: 'linear-gradient(135deg, #0a0a0f 0%, #1a0f2e 50%, #0f0a1a 100%)'
      }}
    />
  );
};

export default GalaxyBackground;