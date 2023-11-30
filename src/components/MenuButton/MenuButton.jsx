import React, { useState } from 'react';

import MenuB from './MenuButton.styled';

function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleCheckboxChange = event => {
    setIsOpen(event.target.checked);
  };

  return (
    <MenuB htmlFor="menu-check">
      <input
        id="menu-check"
        aria-hidden="true"
        type="checkbox"
        checked={isOpen}
        onChange={handleCheckboxChange}
      />
      <span />
    </MenuB>
  );
}

export default MenuButton;
