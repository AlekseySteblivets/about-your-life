import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import AboutMe from "../AboutMe/AboutMe";

export default function Contact() {
  const location = useLocation();
  const [pathnameLocationContactIsTrue, setPathnameLocationContactIsTrue] =
    useState(false);

  console.log("locationContact", location);
  const curPathnameLocation = () => {
    if (location.pathname === "/contact")
      return setPathnameLocationContactIsTrue(true);
  };

  useEffect(() => {
    curPathnameLocation();
  });

  return (
    <div>
      <AboutMe pathnameLocationContactIsTrue={pathnameLocationContactIsTrue} />
      <p>45454</p>
    </div>
  );
}
