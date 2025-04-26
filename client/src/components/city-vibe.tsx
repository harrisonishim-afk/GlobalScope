import { useState } from "react";
import { NewsItem } from "@shared/schema";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music2, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { getMusicRecommendation, MusicRecommendation } from "@/lib/musicRecommender";

interface CityVibeProps {
  newsItems: NewsItem[];
  cityName: string;
}

export default function CityVibe({ newsItems, cityName }: CityVibeProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);
  
  // Get music recommendation based on news mood
  const recommendation = getMusicRecommendation(newsItems);
  
  // Get emoji based on mood
  const getMoodEmoji = (mood: string): string => {
    const emojiMap: Record<string, string> = {
      peaceful: "🌿",
      upbeat: "🎉", 
      dramatic: "🎭",
      chaotic: "⚡",
      mysterious: "🔮",
      inspiring: "✨"
    };
    
    return emojiMap[mood] || "🎵";
  };
  
  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
    setShowPlayer(true);
  };
  
  const handleToggleMute = () => {
    setIsMuted(!isMuted);
  };
  
  return (
    <Card className="overflow-hidden mb-8">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <Music2 className="h-5 w-5" />
              {cityName}'s Current Vibe
              <span className="text-lg ml-1">{getMoodEmoji(recommendation.mood)}</span>
            </CardTitle>
            <CardDescription>
              {recommendation.description}
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="h-8 w-8 p-0" 
              onClick={handleToggleMute}
            >
              {isMuted ? (
                <VolumeX className="h-4 w-4" />
              ) : (
                <Volume2 className="h-4 w-4" />
              )}
            </Button>
            <Button 
              variant="default" 
              size="sm" 
              className="h-8 px-3 flex items-center gap-1"
              onClick={handleTogglePlay}
            >
              {isPlaying ? (
                <>
                  <Pause className="h-3 w-3" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Play className="h-3 w-3" />
                  <span>Play</span>
                </>
              )}
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <span className="text-sm font-medium mb-1">Mood: {recommendation.mood.charAt(0).toUpperCase() + recommendation.mood.slice(1)}</span>
            <span className="text-sm text-muted-foreground">Genre: {recommendation.genre}</span>
          </div>
        </div>
        
        {showPlayer && (
          <div className="mt-4 h-[80px] bg-gray-100 rounded-md overflow-hidden">
            <iframe 
              src={`${recommendation.embedUrl}${isMuted ? '&mute=1' : ''}`}
              width="100%" 
              height="80" 
              frameBorder="0" 
              title="Spotify Playlist" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
            ></iframe>
          </div>
        )}
      </CardContent>
    </Card>
  );
}