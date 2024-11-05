
export const formatDuration = (ms: number): string => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return `${minutes}:${Number(seconds) < 10 ? '0' : ''}${seconds}`;
};

export const getColorForMood = (mood: string): string => {
    const moodColors = {
        'Happy': '#FFD700',    
        'Sad': '#4682B4',  
        'Angry': '#FF0000',   
        'Energetic': '#FF4500', 
        'Tired': '#98FB98',     
            
    };
    return moodColors[mood as keyof typeof moodColors] || '#808080';
};