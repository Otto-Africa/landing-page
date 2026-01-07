import React from 'react';

const Avatar = ({ 
  src, 
  alt, 
  name, 
  size = 48, 
  className = '',
  loading = 'lazy'
}) => {
  // Get initials from name
  const getInitials = (name) => {
    if (!name) return '?';
    const parts = name.trim().split(' ');
    if (parts.length === 1) {
      return parts[0].charAt(0).toUpperCase();
    }
    return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
  };

  const initials = getInitials(name || alt);
  const [imageError, setImageError] = React.useState(false);
  const [imageLoaded, setImageLoaded] = React.useState(false);

  const textSize = size <= 24 ? 'text-xs' : size <= 32 ? 'text-sm' : size <= 40 ? 'text-base' : 'text-lg';

  return (
    <div
      className={`rounded-full bg-gray-200 flex items-center justify-center overflow-hidden ${className}`}
      style={{ width: `${size}px`, height: `${size}px`, minWidth: `${size}px`, minHeight: `${size}px` }}
    >
      {src && !imageError ? (
        <img
          src={src}
          alt={alt || name || 'Avatar'}
          loading={loading}
          onError={() => setImageError(true)}
          onLoad={() => setImageLoaded(true)}
          className={`rounded-full object-cover ${imageLoaded ? '' : 'opacity-0'}`}
          style={{ width: `${size}px`, height: `${size}px` }}
        />
      ) : (
        <span
          className={`${textSize} font-medium text-gray-600`}
          aria-label={alt || name || 'Avatar'}
        >
          {initials}
        </span>
      )}
    </div>
  );
};

export default Avatar;

