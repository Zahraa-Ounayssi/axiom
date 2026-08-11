
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

  useEffect(() => {
    async function getVideoUrl() {
      setLoading(true);
      setError(null);
      setVideoUrl(null);

      console.log("Video path:", videoSrc);

      const { data, error } = await supabase.storage
        .from("course-videos")
        .createSignedUrl(videoSrc, 3600);

      if (error) {
        console.error("Video URL error:", error);
        console.error("Error message:", error.message);
        console.error("Error name:", error.name);
        console.error("Video path:", videoSrc);

        setError(`تعذر تحميل الفيديو: ${error.message}`);
        setLoading(false);
        return;
      }

      console.log("Signed URL created successfully");
      console.log("Signed URL:", data.signedUrl);

      setVideoUrl(data.signedUrl);
      setLoading(false);
    }

    getVideoUrl();
  }, [videoSrc]);

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

      {videoUrl && (
        <video
          className="w-full"
          controls
          controlsList="nodownload"
          playsInline
          preload="metadata"
          onError={(e) => {
            console.error("Video playback error:", e);
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

