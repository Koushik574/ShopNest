import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);

  const networkStatus = () =>{

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });

    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

  }

  useEffect(() => {
    networkStatus(),
      [];
  });
  return onlineStatus;
};

export default useOnlineStatus;
