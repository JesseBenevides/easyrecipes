import React from 'react';
import rockGlass from '../images/rockGlass.svg';

function LoginLogo() {
  return (
    <div className="LoginLogo">
      <span className="logo">TRYBE</span>
      <object
        className="rocksGlass"
        type="image/svg+xml"
        data={ rockGlass }
      >
        Glass
      </object>
    </div>
  );
}

export default LoginLogo;
