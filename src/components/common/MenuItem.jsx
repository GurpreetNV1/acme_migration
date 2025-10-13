import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronDown } from "lucide-react";

const MenuItem = ({ item, isSubMenu = false, level = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openLeft, setOpenLeft] = useState(false); // control direction
  const timeoutRef = useRef(null);
  const dropdownRef = useRef(null);
  const directionLocked = useRef(false); // prevent re-checking while open

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 50);
  };

  // 🧠 Detect screen edges once per open, lock direction until closed
  useEffect(() => {
    if (isOpen && dropdownRef.current && !directionLocked.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      const screenWidth = window.innerWidth;

      if (rect.right > screenWidth - 20) {
        setOpenLeft(true);
      } else if (rect.left < 20) {
        setOpenLeft(false);
      }

      directionLocked.current = true; 
    }

    if (!isOpen) {
      directionLocked.current = false;
    }
  }, [isOpen]);

  const hasSubItems =
    item.subItems &&
    typeof item.subItems === "object" &&
    Object.keys(item.subItems).length > 0;

  const positionClass = isSubMenu
    ? openLeft
      ? "absolute right-full top-0 mr-1" // open to left
      : "absolute left-full top-0 ml-1" // open to right
    : "absolute left-0 top-full mt-1";

  // Menu link styles
  const linkClasses = isSubMenu
    ? "block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-primary transition-all duration-200 whitespace-normal break-words"
    : "block px-1 py-2 text-base font-medium text-gray-800 hover:text-primary transition-colors duration-200 whitespace-normal break-words";

  // Dropdown styles + animation
  const dropdownClasses = `
    bg-white border border-gray-200 shadow-xl rounded-lg z-50 
    w-[250px] py-2 transition-all duration-200 transform origin-top
    ${isOpen ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95"}
  `;

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main label or link */}
      {item.url ? (
        <Link
          to={item.url}
          target={item.isExternal ? "_blank" : "_self"}
          rel={item.isExternal ? "noopener noreferrer" : undefined}
          className={linkClasses}
        >
          <div className="flex items-center justify-between">
            <span>{item.label}</span>
            {hasSubItems && isSubMenu && (
              <ChevronRight
                className={`w-4 h-4 ml-2 opacity-50 transition-transform ${
                  openLeft ? "rotate-180" : ""
                }`}
              />
            )}
          </div>
        </Link>
      ) : (
        <span className={`${linkClasses} cursor-pointer`}>
          <div className="flex items-center justify-between">
            <span>{item.label}</span>
            {hasSubItems &&
              (isSubMenu ? (
                <ChevronRight
                  className={`w-4 h-4 opacity-50 transition-transform ${
                    openLeft ? "rotate-180" : ""
                  }`}
                />
              ) : (
                <ChevronDown className="w-4 h-4 opacity-50" />
              ))}
          </div>
        </span>
      )}

      {/* Dropdown content */}
      {hasSubItems && (
        <div ref={dropdownRef} className={`${dropdownClasses} ${positionClass}`}>
          {Object.entries(item.subItems).map(([subLabel, subItem]) => {
            const isExternal = /^(https?:)?\/\//i.test(subItem);
            const subItemData =
              typeof subItem === "string"
                ? { label: subLabel, url: subItem, isExternal }
                : { label: subLabel, subItems: subItem };

            return (
              <MenuItem
                key={subLabel}
                item={subItemData}
                isSubMenu={true}
                level={level + 1}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
