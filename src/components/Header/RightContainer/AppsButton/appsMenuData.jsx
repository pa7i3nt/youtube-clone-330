import React from "react";
import styled from "styled-components";
import YouTubeIcon from "@material-ui/icons/YouTube";

const RedYouTubeIcon = styled(YouTubeIcon)`
  color: red;
`;

const YouTubeKidsLogo = () => {
  return (
    <img
      style={{ height: "20px", width: "20px" }}
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/YouTube_Kids_LogoVector.svg/512px-YouTube_Kids_LogoVector.svg.png"
      alt="YouTube Kids Logo"
    />
  );
};

const YouTubeTVLogo = () => {
  return (
    <img
      style={{ height: "20px", widht: "20px" }}
      src="https://play-lh.googleusercontent.com/HPyYXe-ToibRPGtFd4Ni4gi7RVfpkj4s8HwtC6fhDPqO7JfkF1-ld2SYFdzOQh-9zXU"
      alt="YouTube TV"
    />
  );
};

const YouTubeMusicLogo = () => {
  return (
    <img
      style={{ height: "20px", width: "20px" }}
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Youtube_Music_icon.svg/512px-Youtube_Music_icon.svg.png"
      alt="YouTube TV Logo"
    />
  );
};

// https://en.uoldown.com/icon/android/youtube-creator-studio/youtube-creator-studio-android.png

const YouTubeCreatorLogo = () => {
  return (
    <img
      style={{ height: "20px", width: "20px" }}
      src="https://cdn.pixabay.com/photo/2021/05/22/10/22/youtube-6273167_1280.png"
      alt="YouTube TV Logo"
    />
  );
};

export const menuItems = [
  { Icon: YouTubeTVLogo, text: "YouTube TV" },
  { Icon: YouTubeMusicLogo, text: "YouTube Music" },
  { Icon: YouTubeKidsLogo, text: "YouTube Kids" },
  { Icon: YouTubeCreatorLogo, text: "Creator Academy" },
  { Icon: RedYouTubeIcon, text: "YouTube for Artists" },
];
