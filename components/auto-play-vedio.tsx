"use client";

import React, { useEffect, useRef } from "react";

const AutoPlayVideo = ({ videoLink }: { videoLink: string }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = videoRef.current;
          if (!video) return;

          if (entry.isIntersecting) {
            video.play().catch((err) => console.error("Play failed:", err));
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);
  return (
    <video
      width="100%"
      autoPlay={true}
      controls
      preload="auto"
      muted
      style={{ borderRadius: "1rem" }}
      ref={videoRef}
    >
      <source src={videoLink} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default AutoPlayVideo;
