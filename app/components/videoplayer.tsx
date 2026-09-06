"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type VideoPlayerProps = {
  videoSrc: string;
  title: string;
};

export default function VideoPlayer({
  videoSrc,
  title,
}: VideoPlayerProps) {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const isYouTube = videoSrc.startsWith("youtube:");

  const youtubeId = isYouTube
    ? videoSrc.replace("youtube:", "")
    : null;

  useEffect(() => {
    async function getVideoUrl() {
      setLoading(true);
      setError(null);
      setVideoUrl(null);

      if (isYouTube) {
        if (!youtubeId) {
          setError("معرّف فيديو YouTube غير موجود.");
          setLoading(false);
          return;
        }

        setVideoUrl(
          `https://www.youtube-nocookie.com/embed/${youtubeId}`
        );

        setLoading(false);
        return;
      }

      const { data, error } = await supabase.storage
        .from("course-videos")
        .createSignedUrl(videoSrc, 3600);

      if (error) {
        console.error("Video URL error:", error);
        setError(`تعذر تحميل الفيديو: ${error.message}`);
        setLoading(false);
        return;
      }

      setVideoUrl(data.signedUrl);
      setLoading(false);
    }

    getVideoUrl();
  }, [videoSrc, isYouTube, youtubeId]);

  return (
    <div className="w-full overflow-hidden rounded-xl bg-black">
      {loading && (
        <div className="flex aspect-video items-center justify-center text-white">
          جاري تحميل الفيديو...
        </div>
      )}

      {error && (
        <div className="flex aspect-video items-center justify-center p-4 text-center text-red-400">
          {error}
        </div>
      )}

      {videoUrl && isYouTube && (
        <div className="aspect-video w-full">
          <iframe
            className="h-full w-full"
            src={videoUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      )}

      {videoUrl && !isYouTube && (
        <video
          className="w-full"
          controls
          controlsList="nodownload"
          playsInline
          preload="metadata"
          onError={() => {
            console.error("Video playback error");
            setError("تعذر تشغيل الفيديو.");
          }}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video element.
        </video>
      )}

      <div className="border-t border-slate-800 px-5 py-4">
        <p className="text-sm font-medium text-white">{title}</p>
      </div>
    </div>
  );
}