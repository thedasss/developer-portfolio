"use client";

import { useEffect } from "react";

export default function TabBranding() {
  useEffect(() => {
    // 1. Force the exact title in the browser tab
    document.title = "Thedas Silva | Forward Deployed Engineer";

    // 2. Dynamically replace or set the favicon to force Chrome/Brave/Safari tab to update immediately
    const updateFavicon = () => {
      // Remove any legacy icon links
      const existingIcons = document.querySelectorAll("link[rel*='icon']");
      existingIcons.forEach((el) => el.remove());

      // Create fresh timestamped PNG favicon link
      const pngIcon = document.createElement("link");
      pngIcon.rel = "icon";
      pngIcon.type = "image/png";
      pngIcon.sizes = "32x32";
      pngIcon.href = `/favicon.png?v=${Date.now()}`;
      document.head.appendChild(pngIcon);

      // Create shortcut icon fallback
      const shortcutIcon = document.createElement("link");
      shortcutIcon.rel = "shortcut icon";
      shortcutIcon.href = `/favicon.png?v=${Date.now()}`;
      document.head.appendChild(shortcutIcon);
    };

    updateFavicon();
  }, []);

  return null;
}
