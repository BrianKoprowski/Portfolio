export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  type: 'image' | 'document' | 'audio' | 'video' | 'code';
  url: string; // The Google Drive Share Link or Direct URL
}

export const portfolioContent: Record<string, ProjectItem[]> = {
  // =========================================================================
  // AUDIO PAGE CONTENT
  // =========================================================================
  'audio': [
    {
      id: 'a1',
      title: 'Atmospheric Soundscape',
      description: 'Ambient background noise for the forest level.',
      type: 'audio',
      // PASTE GOOGLE DRIVE LINK HERE
      url: 'https://drive.google.com/drive/folders/1uuqEc4UBXvz6UBcS68tt4xstYHPxZk-Q?usp=sharing' 
    },
    {
      id: 'a2',
      title: 'Character Voice Lines',
      description: 'Dialogue snippets for the main protagonist.',
      type: 'audio',
      url: 'https://drive.google.com/file/d/1U9y-Wn.../view?usp=sharing'
    }
  ],

  // =========================================================================
  // RESEARCH PAGE CONTENT
  // =========================================================================
  'research': [
    {
      id: 'r1',
      title: 'Market Analysis',
      description: 'A study on current RPG trends in the indie market.',
      type: 'document', // Use 'document' for PDFs, Docs, Slides
      url: 'https://drive.google.com/file/d/1U9y-Wn.../view?usp=sharing'
    },
    {
      id: 'r2',
      title: 'Technical Feasibility',
      description: 'Breakdown of engine capabilities.',
      type: 'document',
      url: 'https://drive.google.com/file/d/1U9y-Wn.../view?usp=sharing'
    }
  ],

  // =========================================================================
  // ART 2D CONTENT
  // =========================================================================
  'art-2d': [
    {
      id: '2d1',
      title: 'Character Sketches',
      description: 'Initial rough concepts.',
      type: 'image',
      url: 'https://picsum.photos/600/400' // Replace with Drive Link
    }
  ],

  // =========================================================================
  // ART 3D CONTENT
  // =========================================================================
  'art-3d': [
    {
      id: '3d1',
      title: 'Hero Prop Model',
      description: 'High poly sculpt of the main weapon.',
      type: 'image', // Use image if it's a render, or 'video' if it's a turntable
      url: 'https://picsum.photos/600/400'
    }
  ],

  // =========================================================================
  // DEVELOPMENT CONTENT
  // =========================================================================
  'dev': [
    {
      id: 'd1',
      title: 'Movement Script',
      description: 'C# logic for player controller.',
      type: 'code',
      url: 'https://github.com/yourusername/repo' // Or a Drive link to a PDF of code
    }
  ],

  // =========================================================================
  // FMP SPECIFIC CONTENT
  // =========================================================================
  'fmp-research': [],
  'fmp-art': [],
  'fmp-audio': [],
  'fmp-dev': [],
  'fmp-gdd': [
    {
      id: 'gdd1',
      title: 'Master Game Design Document',
      description: 'The complete specification for the project.',
      type: 'document',
      url: 'https://drive.google.com/file/d/1U9y-Wn.../view?usp=sharing'
    }
  ]
};
