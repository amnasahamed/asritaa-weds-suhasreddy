import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Volume2, VolumeX, Music } from "lucide-react";

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const audio = new Audio("/music/wedding-theme.mp3");
    audio.loop = true;
    audio.volume = 0.55;
    audioRef.current = audio;

    const handlePlayMusic = () => {
      if (!hasInteracted) {
        audio
          .play()
          .then(() => {
            setIsPlaying(true);
            setHasInteracted(true);
          })
          .catch(() => {
            // Autoplay policy may require manual click
          });
      }
    };

    window.addEventListener("play-wedding-music", handlePlayMusic);

    return () => {
      window.removeEventListener("play-wedding-music", handlePlayMusic);
      audio.pause();
    };
  }, [hasInteracted]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        })
        .catch(console.error);
    }
  };

  return (
    <div className="fixed bottom-6 right-5 z-40 sm:bottom-8 sm:right-8">
      <motion.button
        type="button"
        onClick={togglePlay}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        aria-label={isPlaying ? "Mute music" : "Play wedding music"}
        className="glass-plate flex items-center gap-2.5 rounded-full px-4 py-2.5 shadow-lg backdrop-blur-md border border-primary/20 text-primary transition-colors hover:bg-primary/10"
      >
        <div className="relative flex h-5 w-5 items-center justify-center">
          <AnimatePresence mode="wait">
            {isPlaying ? (
              <motion.div
                key="playing"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="flex items-center gap-0.5"
              >
                <motion.span
                  className="h-3 w-0.5 rounded-full bg-gold-deep"
                  animate={{ height: ["4px", "14px", "6px", "14px"] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.span
                  className="h-4 w-0.5 rounded-full bg-primary"
                  animate={{ height: ["12px", "5px", "16px", "8px"] }}
                  transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
                />
                <motion.span
                  className="h-2 w-0.5 rounded-full bg-gold-deep"
                  animate={{ height: ["6px", "15px", "5px", "11px"] }}
                  transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                />
              </motion.div>
            ) : (
              <motion.div
                key="paused"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
              >
                <Music size={16} className="text-primary/70" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <span className="font-sans text-[0.6rem] font-semibold tracking-[0.22em] uppercase text-primary">
          {isPlaying ? "Music Playing" : "Play Music"}
        </span>

        {isPlaying ? (
          <Volume2 size={15} className="text-gold-deep" />
        ) : (
          <VolumeX size={15} className="text-primary/60" />
        )}
      </motion.button>
    </div>
  );
}
