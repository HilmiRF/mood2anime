import { NextResponse } from "next/server";

const moodToGenreMap: Record<string, string> = {
  "Cheerful": "Comedy,Slice of Life",
  "Reflective": "Psychological,Drama",
  "Gloomy": "Drama,Psychological,Tragedy",
  "Humorous": "Comedy",
  "Melancholy": "Drama,Slice of Life",
  "Chill": "Slice of Life,Music",
  "Romantic": "Romance",
  "Weird": "Supernatural,Fantasy",
  "Sleepy": "Slice of Life,Music",
  "Angry": "Action,Martial Arts",
  "Fearful": "Horror,Thriller,Mystery",
  "Lonely": "Drama,Slice of Life",
  "Tense": "Thriller,Mystery,Suspense",
  "Thoughtful": "Sci-Fi,Mystery,Psychological",
  "Thrill-Seeking": "Adventure,Action",
  "Playful": "Comedy,Adventure",
};

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const mood = searchParams.get('mood') || '';
    
    // Get genre from mood or default to Comedy
    const genre = moodToGenreMap[mood]?.split(',')[0] || 'Comedy';
    
    const response = await fetch(
      `https://anime-db.p.rapidapi.com/anime?page=1&size=10&genres=${genre}`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': process.env.RAPID_API_HOST || '',
          'x-rapidapi-key': process.env.RAPID_API_KEY || ''
        }
      }
    );

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Failed to fetch anime data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch anime data' },
      { status: 500 }
    );
  }
}

