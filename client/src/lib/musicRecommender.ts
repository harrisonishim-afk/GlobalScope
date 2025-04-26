import { NewsItem } from "@shared/schema";

export type MusicMood = "peaceful" | "upbeat" | "dramatic" | "chaotic" | "mysterious" | "inspiring";

export interface MusicRecommendation {
  mood: MusicMood;
  genre: string;
  description: string;
  embedUrl: string;
}

const moodKeywords: Record<MusicMood, string[]> = {
  peaceful: [
    "calm", "peaceful", "quiet", "harmony", "agreement", "resolved", "steady", 
    "stable", "settlement", "accord", "tranquil", "serene", "gentle"
  ],
  upbeat: [
    "growth", "innovation", "progress", "celebration", "festival", "victory", 
    "success", "achievement", "economic growth", "improvement", "advance", "win"
  ],
  dramatic: [
    "significant", "major", "important", "election", "debate", "controversy", 
    "striking", "impressive", "historic", "landmark", "momentous", "milestone"
  ],
  chaotic: [
    "disaster", "crisis", "emergency", "conflict", "protest", "riot", "chaos", 
    "disorder", "turmoil", "trouble", "unrest", "disruption", "accident", "crash"
  ],
  mysterious: [
    "mystery", "unknown", "investigation", "discovery", "unusual", "strange", 
    "odd", "surprising", "unexpected", "bizarre", "curious", "wonder", "reveal"
  ],
  inspiring: [
    "inspire", "hope", "charity", "volunteer", "community", "support", "help",
    "recovery", "rebuild", "unite", "together", "courage", "brave", "hero"
  ]
};

// Map of moods to music genres and Spotify playlists
const moodToMusic: Record<MusicMood, MusicRecommendation[]> = {
  peaceful: [
    {
      mood: "peaceful",
      genre: "Lo-Fi Hip Hop",
      description: "Relaxing beats to unwind to while catching up on the latest peaceful news",
      embedUrl: "https://open.spotify.com/embed/playlist/0vvXsWCC9xrXsKd4FyS8kM?utm_source=generator"
    },
    {
      mood: "peaceful",
      genre: "Ambient",
      description: "Gentle ambient sounds to accompany a harmonious news cycle",
      embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX3Ogo9pFvBkY?utm_source=generator"
    }
  ],
  upbeat: [
    {
      mood: "upbeat",
      genre: "Indie Pop",
      description: "Uplifting indie tunes to celebrate positive developments",
      embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX0s5kDXi1oC5?utm_source=generator"
    },
    {
      mood: "upbeat",
      genre: "Jazz Fusion",
      description: "Smooth jazz vibes to match the city's growth and innovation",
      embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX0SM0LYsmbMT?utm_source=generator"
    }
  ],
  dramatic: [
    {
      mood: "dramatic",
      genre: "Cinematic Orchestra",
      description: "Dramatic orchestral pieces that match the significance of current events",
      embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX2pSTOxoPbx9?utm_source=generator"
    },
    {
      mood: "dramatic",
      genre: "Epic Soundtracks",
      description: "Powerful scores to underscore major developments in the city",
      embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX4OzrY981I79?utm_source=generator"
    }
  ],
  chaotic: [
    {
      mood: "chaotic",
      genre: "Punk Rock",
      description: "Energetic punk rock reflecting the turbulent times",
      embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DXa9wYJr1oMFq?utm_source=generator"
    },
    {
      mood: "chaotic",
      genre: "Heavy Metal",
      description: "Intense metal tracks that capture the chaos and intensity",
      embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DWWOaP4H0w5b0?utm_source=generator"
    }
  ],
  mysterious: [
    {
      mood: "mysterious",
      genre: "Electronic",
      description: "Mysterious electronic sounds for intriguing developments",
      embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DXdLEN7aqioXM?utm_source=generator"
    },
    {
      mood: "mysterious",
      genre: "Dark Jazz",
      description: "Noir jazz perfect for investigations and curious happenings",
      embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX5wgKYQVRARv?utm_source=generator"
    }
  ],
  inspiring: [
    {
      mood: "inspiring",
      genre: "Modern Classical",
      description: "Uplifting classical pieces celebrating community and hope",
      embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX9C1KNc3fXN4?utm_source=generator"
    },
    {
      mood: "inspiring",
      genre: "Indie Anthems",
      description: "Anthemic indie tracks that inspire and motivate",
      embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX873GaRGUmPl?utm_source=generator"
    }
  ]
};

/**
 * Analyzes news headlines and content to determine the overall mood
 * @param newsItems Collection of news articles
 * @returns A mood classification
 */
export function analyzeMood(newsItems: NewsItem[]): MusicMood {
  if (!newsItems || newsItems.length === 0) return "peaceful";
  
  // Calculate score for each mood
  const scores: Record<MusicMood, number> = {
    peaceful: 0,
    upbeat: 0,
    dramatic: 0,
    chaotic: 0,
    mysterious: 0,
    inspiring: 0
  };
  
  // Count keywords in headlines and descriptions
  newsItems.forEach(item => {
    const text = `${item.title} ${item.description}`.toLowerCase();
    
    (Object.keys(moodKeywords) as MusicMood[]).forEach(mood => {
      moodKeywords[mood].forEach(keyword => {
        if (text.includes(keyword)) {
          scores[mood] += 1;
        }
      });
    });
  });
  
  // Find the dominant mood (highest score)
  let dominantMood: MusicMood = "peaceful";
  let highestScore = 0;
  
  (Object.keys(scores) as MusicMood[]).forEach(mood => {
    if (scores[mood] > highestScore) {
      highestScore = scores[mood];
      dominantMood = mood;
    }
  });
  
  return dominantMood;
}

/**
 * Recommends music based on the current news mood
 * @param newsItems Collection of news articles
 * @returns A music recommendation with playlist
 */
export function getMusicRecommendation(newsItems: NewsItem[]): MusicRecommendation {
  const mood = analyzeMood(newsItems);
  
  // Select a random playlist from the mood's options
  const options = moodToMusic[mood];
  const randomIndex = Math.floor(Math.random() * options.length);
  
  return options[randomIndex];
}