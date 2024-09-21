import BitkovinAnalytics from '../assets/images/projects/bitkovin-analytics.png';
import Clever from '../assets/images/projects/clever.png';
import MySkills from '../assets/images/projects/myskills.png';
import Kaspi from '../assets/images/projects/kaspi1c.png';
import Id24 from '../assets/images/projects/id24.png';

export const projectsStore = {
  projects: [
    {
      id: 1,
      name: 'Bitkovin Analytics',
      thumbnail: BitkovinAnalytics,
      url: 'https://bi-24.kz/',
      tags: ['Верстка', 'JS'],
    },
    {
      id: 2,
      name: 'Clever',
      thumbnail: Clever,
      url: 'https://clevercrm.kz/',
      tags: ['Верстка'],
    },
    {
      id: 3,
      name: 'MySkills',
      thumbnail: MySkills,
      tags: ['Верстка', 'Laravel', 'Livewire', 'JS'],
    },
    {
      id: 4,
      name: 'id24',
      thumbnail: Kaspi,
      tags: ['Верстка'],
    },
    {
      id: 5,
      name: 'Bitkovin Kaspi+1C',
      thumbnail: Id24,
      tags: ['Верстка', 'JS'],
    },
  ],
};
