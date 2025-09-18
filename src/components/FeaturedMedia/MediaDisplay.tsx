"use client";

import React, { FC } from "react";
import { PostFeaturedMediaProps } from "@/components/emploi/types";
import GallerySlider from "./GallerySlider";
import MediaVideo from "./MediaVideo";
import MediaIcon, { MediaIconType } from "./MediaIcon";
import Image from "next/image";

const MediaDisplay: FC<PostFeaturedMediaProps> = ({
  className = "w-full h-full",
  postType = "standard",
  imageUrl,
  imageAlt = "Featured media",
  videoUrl,
  audioUrl,
  galleryImgs,
  isHover = false,
}) => {

  const getMediaIconType = (): MediaIconType | undefined => {
    if (postType === "video" || postType === "audio" || postType === "gallery") {
      return postType as MediaIconType;
    }
    return undefined;
  };

  const renderGallerySlider = () => {
    if (!galleryImgs || galleryImgs.length === 0) return null;
    return (
      <GallerySlider
        galleryImgs={galleryImgs}
        className="absolute inset-0 z-10"
        galleryClass="absolute inset-0"
        ratioClass="absolute inset-0"
      />
    );
  };

  const renderContent = () => {
    // GALLERY
    if (postType === "gallery") {
      return renderGallerySlider();
    }

    // VIDEO
    if (postType === "video" && !!videoUrl && isHover) {
      return <MediaVideo isHover videoUrl={videoUrl} />;
    }

    // AUDIO
    if (postType === "audio" && !!audioUrl) {
      return null;
    }

    // ICON
    const iconType = getMediaIconType();
    return iconType ? (
      <span className="absolute inset-0 flex items-center justify-center ">
        <MediaIcon
          className="hover:scale-105 transform cursor-pointer transition-transform"
          iconType={iconType}
        />
      </span>
    ) : null;
  };

  return (
    <div className={`nc-MediaDisplay relative ${className}`}>
      {postType !== "gallery" && imageUrl && (
        <Image
          alt={imageAlt}
          fill
          className="object-cover"
          src={imageUrl}
          sizes="(max-width: 600px) 480px, 800px"
        />
      )}
      {renderContent()}
      {postType !== "gallery" && (
        <div
          className={`absolute inset-0 ${
            postType === "standard"
              ? "bg-black/20 transition-opacity opacity-0 group-hover:opacity-100"
              : ""
          }`}
        />
      )}
    </div>
  );
};

export default MediaDisplay;
