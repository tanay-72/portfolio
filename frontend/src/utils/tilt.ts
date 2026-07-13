export const handleTiltMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left; // Mouse X coordinate within the element boundaries
  const y = e.clientY - rect.top;  // Mouse Y coordinate within the element boundaries

  const xc = rect.width / 2;
  const yc = rect.height / 2;

  // Calculate rotation angles (max 6 degrees shift for organic look)
  const angleX = -(y - yc) / (yc / 6);
  const angleY = (x - xc) / (xc / 6);

  // Set smooth tracking transition during mousemove (dampens jitter)
  card.style.transition = 'transform 0.15s cubic-bezier(0.25, 1, 0.25, 1), box-shadow 0.4s ease, background-image 0.4s ease';

  // Apply 3D rotate transforms
  card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.01, 1.01, 1.01)`;

  // Specular golden reflection highlighting
  const pctX = (x / rect.width) * 100;
  const pctY = (y / rect.height) * 100;
  card.style.backgroundImage = `radial-gradient(circle at ${pctX}% ${pctY}%, rgba(242, 202, 80, 0.07) 0%, transparent 60%)`;
};

export const handleTiltMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
  const card = e.currentTarget;
  // Apply a longer easing transition when returning to center
  card.style.transition = 'transform 0.6s cubic-bezier(0.25, 1, 0.25, 1), box-shadow 0.4s ease, background-image 0.4s ease';
  card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  card.style.backgroundImage = '';
};

