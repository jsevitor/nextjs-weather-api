import React, { useEffect } from "react";

const Location = ({ setGeolocation }) => {
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setGeolocation({ latitude, longitude });
        },
        (error) => {
          console.error("Erro ao obter a localização: ", error);
        }
      );
    }
  }, [setGeolocation]);

  return null;
};

export default Location;
