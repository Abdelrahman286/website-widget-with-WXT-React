import { useEffect, useState } from "react";
import { useAppContext } from "./Appcontext";
import FloatingIcon from "./FloatingIcon";
import WidgetContent from "./WidgetContent";

// this what makes tailwind classes work
import "../../assets/main.css";

export default () => {
  const { isOpened } = useAppContext();
  const [isExtensionEnabled, setIsExtensionEnabled] = useState(true);

  useEffect(() => {
    // Load the saved state when the script runs
    chrome.storage.local.get("extensionEnabled", (data) => {
      if (data.extensionEnabled !== undefined) {
        setIsExtensionEnabled(data.extensionEnabled);
      }
    });

    // Listen for changes in storage (in case the popup updates the value)
    const handleStorageChange = (changes: any) => {
      if (changes.extensionEnabled) {
        setIsExtensionEnabled(changes.extensionEnabled.newValue);
      }
    };

    chrome.storage.onChanged.addListener(handleStorageChange);
    return () => chrome.storage.onChanged.removeListener(handleStorageChange);
  }, []);

  if (!isExtensionEnabled) return null;

  return (
    <div
      dir="ltr"
      className="fixed bottom-4 right-4 z-[999999999] pointer-events-none flex flex-col items-end ltr-important"
    >
      <div className="flex flex-end mb-2">
        {isOpened && (
          <div className="pointer-events-auto ">
            <WidgetContent />
          </div>
        )}
      </div>

      <div className="pointer-events-auto flex">
        <FloatingIcon />
      </div>
    </div>
  );
};
