import React, { useState, useEffect } from "react";

const Popup = () => {
  // Store enabled/disabled state
  const [isEnabled, setIsEnabled] = useState(false);

  // Load the saved state when the popup opens
  useEffect(() => {
    chrome.storage.local.get("extensionEnabled", (data) => {
      if (data.extensionEnabled !== undefined) {
        setIsEnabled(data.extensionEnabled);
      }
    });
  }, []);

  // Function to toggle the extension
  const toggleExtension = () => {
    const newState = !isEnabled;
    setIsEnabled(newState);

    // Save the state in Chrome storage
    chrome.storage.local.set({ extensionEnabled: newState });

    // Send message to active tab instead of broadcasting
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]?.id) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          func: (enabled) => {
            chrome.storage.local.set({ extensionEnabled: enabled });
          },
          args: [newState],
        });
      }
    });
  };

  return (
    <div className="w-full p-4 bg-white shadow-lg rounded-lg text-center">
      <h2 className="text-lg font-semibold mb-4">Extension Control</h2>
      <p className="text-sm text-gray-600 mb-4">
        This widget can work on any website, allowing you to enhance your
        browsing experience. However, due to Chrome's security restrictions, it
        does not function on Chrome-specific pages like{" "}
        <strong>history, new tab,</strong> or the{" "}
        <strong>Chrome Web Store.</strong>
      </p>
      <button
        onClick={toggleExtension}
        className={`w-full py-2 rounded-lg text-white ${
          isEnabled
            ? "bg-red-500 hover:bg-red-600"
            : "bg-green-500 hover:bg-green-600"
        }`}
      >
        {isEnabled ? "Disable Extension" : "Enable Extension"}
      </button>
    </div>
  );
};

export default Popup;
