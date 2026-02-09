
export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  type: 'image' | 'document' | 'audio' | 'video' | 'code' | 'carousel';
  url: string; // Main link (or fallback for carousel)
  images?: string[]; // Array of image URLs for the carousel type
  size?: 1 | 2 | 3 | 4; // 1 = Smallest, 4 = Full Width
}

// Configuration for specific category pages (e.g. Header Images)
export const categoryConfigs: Record<string, { headerImage?: string; description?: string }> = {
  'fmp-hub': {
    headerImage: 'https://github.com/BrianKoprowski/Portfolio/blob/main/FMP/rounded%20img%20of%20ad.PNG?raw=true', // HEADER IMAGE FOR MAIN FMP PAGE
  },
  'fmp-art': {
    // headerImage removed from here, moved to fmp-hub
  },
  'fmp-timeline': {
    // headerImage: '...' 
  }
};

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
  'fmp-research': [
    {
      id: 'fr1',
      title: 'FMP Research Document',
      description: 'Template: Paste your Google Drive link here.',
      type: 'document',
      url: 'https://drive.google.com/file/d/1U9y-Wn.../view?usp=sharing',
      size: 4
    }
  ],
  
  'fmp-art': [
    {
      id: 'fa1',
      title: 'Environment Concept Art',
      description: 'A gallery of environment concepts showing different times of day.',
      type: 'carousel',
      url: '', 
      size: 4, 
      images: [
        'https://picsum.photos/800/450?random=1',
        'https://picsum.photos/800/450?random=2',
        'https://picsum.photos/800/450?random=3',
        'https://picsum.photos/800/450?random=4',
        'https://picsum.photos/800/450?random=5',
        'https://picsum.photos/800/450?random=6'
      ]
    },
    {
      id: 'fa2',
      title: 'Art Bible / Style Guide',
      description: 'Template: Document outlining the visual style.',
      type: 'document',
      url: 'https://drive.google.com/file/d/1U9y-Wn.../view?usp=sharing',
      size: 4
    }
  ],

  'fmp-dev': [
    {
      id: 'fd1',
      title: 'FMP Tech Log',
      description: 'Template: Development log and technical documentation.',
      type: 'document',
      url: 'https://drive.google.com/file/d/1U9y-Wn.../view?usp=sharing',
      size: 4
    }
  ],
  
  'fmp-timeline': [
    {
       id: 't1',
       title: 'FMP Roadmap',
       description: 'This was my FMP roadmap to match my work schedule and in what time i have managed to complete each component.',
       type: 'document',
       url: 'https://docs.google.com/document/d/12-uzCdSaTKCs_PhGK04G7Q1qsiU7Qzxn/edit?usp=sharing&ouid=104221513729059640406&rtpof=true&sd=true',
       size: 4
    }
  ],
  
  'fmp-gdd': [
    {
      id: 'gdd1',
      title: 'Master Game Design Document',
      description: 'This is the GDD of my final project which summarises my ideas and final idea of the project.',
      type: 'document',
      url: 'https://docs.google.com/document/d/1kawPFTPqRyXokyjm8N7_xyv0x-C1H1ad/edit?usp=sharing&ouid=104221513729059640406&rtpof=true&sd=true',
      size: 4
    }
  ]
};
