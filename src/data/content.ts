export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  type: 'image' | 'document' | 'audio' | 'video' | 'code';
  url: string; // The Google Drive Share Link or Direct URL
  size?: 1 | 2 | 3 | 4; // 1 = Smallest, 4 = Full Width
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
      url: 'https://drive.google.com/file/d/1U9y-Wn.../view?usp=sharing',
      size: 2
    },
    {
      id: 'a2',
      title: 'Character Voice Lines',
      description: 'Dialogue snippets for the main protagonist.',
      type: 'audio',
      url: 'https://drive.google.com/file/d/1U9y-Wn.../view?usp=sharing',
      size: 1
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
      url: 'https://drive.google.com/file/d/1U9y-Wn.../view?usp=sharing',
      size: 2
    },
    {
      id: 'r2',
      title: 'Technical Feasibility',
      description: 'Breakdown of engine capabilities.',
      type: 'document',
      url: 'https://drive.google.com/file/d/1U9y-Wn.../view?usp=sharing',
      size: 1
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
      url: 'https://picsum.photos/600/400', // Replace with Drive Link
      size: 1
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
      url: 'https://picsum.photos/600/400',
      size: 2
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
      url: 'https://github.com/yourusername/repo', // Or a Drive link to a PDF of code
      size: 3
    }
  ],

  // =========================================================================
  // FMP SPECIFIC CONTENT
  // =========================================================================
  'fmp-research': [],
  'fmp-art': [],
  'fmp-dev': [],
  'fmp-timeline': [
    {
       id: 't1',
       title: 'Project Roadmap',
       description: 'Gantt chart and milestone tracking.',
       type: 'document',
       url: 'https://drive.google.com/file/d/1U9y-Wn.../view?usp=sharing',
       size: 4
    }
  ],
  'fmp-gdd': [
    {
      id: 'gdd1',
      title: 'Master Game Design Document',
      description: 'The complete specification for the project.',
      type: 'document',
      url: 'https://drive.google.com/file/d/1U9y-Wn.../view?usp=sharing',
      size: 4
    }
  ]
};
