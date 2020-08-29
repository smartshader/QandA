import React from 'react';

export const Header = () => (
  <div>
    <a href="./">Q & A</a>
    <input type="text" placeholder="Search..." />
    <a href="./signin">
      <img src="media/user.svg" alt="User" width="12px" />
      <span>Sign In</span>
    </a>
  </div>
);
