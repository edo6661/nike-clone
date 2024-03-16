import { leftFooterItems, midFooterItems } from "@/constants/userHomepage";
import Link from "next/link";
import React from "react";
import { icons } from "./FooterIcons";

const MidUserFooter = () => {
  return (
    <div>
      <div className="flex gap-12">
        <div className="flex flex-col gap-y-2">
          {leftFooterItems.map((item) => (
            <Link
              href={`/${item}`}
              key={item}
              className="hover-link-primary font-semibold"
            >
              {item}
            </Link>
          ))}
        </div>
        <div className="flex gap-4">
          {midFooterItems.map((item) => (
            <div key={item.title} className="space-y-2">
              <Link
                href={`/${item.title}`}
                className="hover-link-primary font-semibold"
              >
                {item.title}
              </Link>
              <div className="flex flex-col gap-1">
                {item.items.map((subItem) => (
                  <Link
                    href={`/${subItem}`}
                    key={subItem}
                    className="base-description hover-link-primary"
                  >
                    {subItem}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="fl-ic gap-2">
        {icons.map((icon) => (
          <a
            className="base-transition hover-secondary-bg rounded-full bg-transparent p-3   "
            key={icon.alt}
            href="#"
          >
            {icon.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MidUserFooter;
