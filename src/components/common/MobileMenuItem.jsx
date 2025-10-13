import { useState } from "react";
import { ChevronDown } from "lucide-react";

const MobileMenuItem = ({ item, depth = 0, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasSubItems = item.subItems && typeof item.subItems === "object";
  const isLink = item.url && !hasSubItems;

  const handleClick = () => {
    if (isLink) {
      onNavigate(item.url);
    } else if (hasSubItems) {
      setIsOpen(!isOpen);
    }
  };

  const paddingLeft = depth * 6;

  // Depth-based styling for visual hierarchy
  const getDepthStyles = () => {
    if (depth === 0) {
      return "bg-[#0d1117] font-semibold text-white";
    } else if (depth === 1) {
      return "bg-[#161b22] font-medium text-gray-100";
    } else {
      return "bg-[#1c2128] font-normal text-gray-200";
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        style={{ paddingLeft: `${12 + paddingLeft}px` }}
        className={`w-full py-3 px-4 text-left flex items-center justify-between transition-all duration-200 border-b border-[#30363d] ${getDepthStyles()} ${
          isLink
            ? "hover:bg-[#ff8c00]/10 active:bg-[#ff8c00]/20"
            : "hover:bg-[#2C5480]/10"
        }`}
      >
        <span className="text-sm">{item.label}</span>
        {hasSubItems && (
          <ChevronDown
            size={16}
            className={`text-[#ffffff] transition-transform duration-300 mr-2 flex-shrink-0 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        )}
      </button>

      {hasSubItems && isOpen && (
        <div className="overflow-hidden bg-[#161b22] border-l-2 border-[#ff8c00]/30">
          {Object.entries(item.subItems).map(([key, value]) => (
            <MobileMenuItem
              key={key}
              item={
                typeof value === "string"
                  ? { label: key, url: value }
                  : { label: key, subItems: value }
              }
              depth={depth + 1}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileMenuItem;