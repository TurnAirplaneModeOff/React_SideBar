import React, { useState } from 'react';
import './App.css';

type MenuItem = {
  title: string;
  subItems?: string[];
};

const App: React.FC = () => {
  const menuConfig: MenuItem[] = [
    {
      title: "Home",
    },
    {
      title: "Services",
      subItems: ["Cooking", "Cleaning"],
    },
    {
      title: "Contact",
      subItems: ["Phone", "Mail"],
    },
  ];

  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const handleSubMenuClick = (title: string) => {
    setOpenSubMenu((prev) => (prev === title ? null : title));
  };

  return (
    <div className="App">
      <h1>Menu</h1>
      <ul className="menu">
        {menuConfig.map((menuItem, index) => (
          <li key={index}>
            <div
              className="menu-item"
            >
              {menuItem.title}

              {menuItem?.subItems &&
                <button onClick={() => handleSubMenuClick(menuItem.title)}>
                  {openSubMenu === menuItem.title ? 'Hide' : 'Expand'}
                </button>
              }
            </div>
            {openSubMenu === menuItem.title && menuItem.subItems && (
              <ul className="sub-menu">
                {menuItem.subItems.map((subItem, subIndex) => (
                  <li key={subIndex}>{subItem}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
