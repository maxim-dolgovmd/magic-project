import React from "react";

export default function useDeviceHeight() {
    const [heightMobile, setHeightMobile] = React.useState('');
  
    React.useEffect(() => {
      const ClientHeight =
        typeof document.body === "undefined" ? "" : document.body.clientHeight;
      console.log(ClientHeight)
      setHeightMobile(String(ClientHeight));
    }, []);
  
    return { heightMobile };
}