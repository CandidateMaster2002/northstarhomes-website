import imgAllura from '../assets/projects/allura.webp';
import imgSpPalacio from '../assets/projects/sp-palacio.webp';
import imgSanctuary from '../assets/projects/sanctuary.webp';
import imgParkAvenue from '../assets/projects/park-avenue.webp';
import imgGoldenValley from '../assets/projects/golden-valley.webp';
import imgDistrict1 from '../assets/projects/district1.webp';
import imgAirportBoulevard from '../assets/projects/airport-boulevard.webp';
import imgHillside from '../assets/projects/hillside.webp';
import imgVeda from '../assets/projects/veda.webp';
import imgEdenGardens from '../assets/projects/eden-gardens.webp';
import imgLeela from '../assets/projects/leela.webp';
import imgAmgPlaza from '../assets/projects/amg-plaza.webp';
import imgGardenSuites from '../assets/projects/garden-suites.webp';

import logoSanctuary from '../assets/project-logos/sanctuary.webp';
import logoAllura from '../assets/project-logos/allura.webp';
import logoSpPalacio from '../assets/project-logos/sp-palacio.webp';
import logoParkAvenue from '../assets/project-logos/park-avenue.webp';
import logoGoldenValley from '../assets/project-logos/golden-valley.webp';
import logoAirportBoulevard from '../assets/project-logos/airport-boulevard.webp';
import logoDistrict1 from '../assets/project-logos/district1.webp';
import logoHillside from '../assets/project-logos/hillside.webp';
import logoVeda from '../assets/project-logos/veda.webp';
import logoEdenGardens from '../assets/project-logos/eden-gardens.webp';
import logoLeela from '../assets/project-logos/leela.webp';
import logoAmgPlaza from '../assets/project-logos/amg-plaza.webp';
import logoGardenSuites from '../assets/project-logos/garden-suites.webp';
import heroVideoPlaceholder from '../assets/hero video eden compr.mp4';

export const projectsData = {

  // ─────────────────────────────────────────────────────────────────────────────
  // SANCTUARY  (Ongoing)
  // ─────────────────────────────────────────────────────────────────────────────
  sanctuary: {
    id: 'sanctuary',
    name: 'Northstar Sanctuary',
    shortName: 'Sanctuary',
    headerTitle: 'A Life Crafted Closer to Nature',
    status: 'Ongoing',
    statusBadge: 'Now Selling',
    type: 'Crafted Plots & Villas',
    city: 'Hyderabad',
    location: 'Mohabbatnagar, Near Tukkuguda, Srisailam Highway',
    heroImage: imgSanctuary,
    heroVideo: null,
    logo: logoSanctuary,

    brochureUrl: 'https://drive.google.com/drive/folders/1-Jc3g8LpWF0eT0AKUDioSJrygyQtaJfa',
    projectLink: 'https://drive.google.com/drive/folders/1ju7d9FRa4wjUwvqY8qmwMRNfTjWkY005',
    walkthroughVideoLink: 'https://drive.google.com/drive/folders/1ApGOQ_sPXZR3NO7wCh_a8mcv6emKtd4M',
    masterPlanLink: 'https://drive.google.com/drive/folders/1PKJaHv_JINeH77CkH8fgKOEveA7N_Omq',
    googleMapLink: 'https://maps.google.com/maps?q=17.1587666,78.4787074',
    googleMapEmbed: 'https://maps.google.com/maps?q=17.1587666,78.4787074&hl=en&z=14&output=embed',

    specs: [
      { label: 'Project Type', value: 'Crafted Plots & Villas' },
      { label: 'Total Site Area', value: '14 Acres 11 Guntas' },
      { label: 'Phase 1 Layout', value: '9 Acres 29 Guntas' },
      { label: 'Phase 2 Layout', value: '4 Acres 21 Guntas' },
      { label: 'Plot Size Range', value: '600 – 1,000 Sq. Yds.' },
      { label: 'Villa Plot Range', value: '343 – 500 Sq. Yds.' },
      { label: 'Community Size', value: 'Exclusive 63 Addresses' },
      { label: 'Location', value: 'Tukkuguda, Srisailam Hwy' },
    ],

    narrative: [
      {
        tag: 'Connectivity & Calm',
        headline: 'The Luxury of Living Between Nature and the City',
        paragraphs: [
          'Set near Tukkuguda, Sanctuary keeps you connected to the ORR, airport, schools and key destinations of South Hyderabad.',
          'Close enough to everything that matters, yet removed from the pace of the city.',
          'A rare balance of connectivity, calm and open living.'
        ],
        image: imgSanctuary,
        imageCaption: 'Sanctuary Master Layout & Location · Near Tukkuguda, South Hyderabad',
        placeholderNote: 'Aerial Masterplan & Nature Landscape Render'
      },
      {
        tag: 'Landscape & Greenery',
        headline: 'Where Nature Becomes a Way of Life.',
        paragraphs: [
          'Tree-lined avenues, intimate pocket parks and thoughtfully layered greens shape everyday life.',
          'Walk among fragrant gardens, flowering trees and landscapes designed to bring nature closer.',
          'At Sanctuary, the outdoors isn\'t somewhere you visit — it is where life unfolds.'
        ],
        image: imgSanctuary,
        imageCaption: 'Tree-Lined Avenues & Layered Greens · Pocket Parks',
        placeholderNote: 'Botanical Gardens & Tree-Lined Avenues Render'
      },
      {
        tag: 'Plotted Living & Villas',
        headline: 'Your Land. Your Home. Your Legacy.',
        paragraphs: [
          'Choose between generous residential plots and thoughtfully crafted villas within an exclusive 63-address community.',
          'A place to build around your family, your aspirations and your idea of home.',
          'Because some homes are created not just for today, but for generations.'
        ],
        image: imgSanctuary,
        imageCaption: 'Crafted Villa Architecture & Plotted Enclave · 63 Addresses',
        placeholderNote: 'Villa Architecture & Plotted Layout Render'
      },
      {
        tag: 'Everyday Experience',
        headline: 'The Life You Imagined Is Already Here.',
        paragraphs: [
          'Walk the cobbled avenues, cycle through greenery, pause in a pocket park or spend an evening at the clubhouse.',
          'Everyday experiences have been thoughtfully designed around wellness, leisure and togetherness.',
          'Sanctuary is no longer something to imagine — it is ready to be experienced.'
        ],
        image: imgSanctuary,
        imageCaption: 'Clubhouse Amenities, Swimming Pool & Gathering Decks',
        placeholderNote: 'Clubhouse Facilities & Active Wellness Render'
      }
    ],

    amenitiesHeader: {
      eyebrow: 'Lifestyle Features & Amenities',
      title: 'A Lifestyle Shaped by Greenery, Wellness and Community',
      description: 'Sanctuary is planned to make outdoor living a natural part of everyday life. The community brings together green landscapes, movement tracks, leisure spaces, clubhouse facilities, and reliable infrastructure to support a healthier and more relaxed lifestyle.'
    },
    amenityCategories: [
      {
        title: 'Green Living & Landscape',
        badge: 'Ecological Living',
        items: ['Pocket Parks', 'Tree-Lined Avenues', 'Dense Planting', 'Flowering Trees', 'Butterfly Garden', 'Rain Garden', 'Herbal & Medicinal Planting', 'Native Grass Garden', 'Food Garden', 'Shaded Pathways']
      },
      {
        title: 'Movement & Outdoor Wellness',
        badge: 'Active Wellbeing',
        items: ['Dedicated Walking Track', 'Dedicated Cycling Track', 'Nature Trail', 'Pebbled Pathways', 'Open Green Spaces', 'Cobbled Internal Roads', 'Dedicated Vehicular Movement']
      },
      {
        title: 'Family & Community Spaces',
        badge: 'Togetherness',
        items: ['Children\'s Play Area', 'Gathering Courts', 'Seating Areas', 'Party Lawn', 'Community Decks', 'Spaces for family time and social gatherings']
      },
      {
        title: 'Clubhouse Facilities',
        badge: 'Club Experience',
        items: ['Swimming Pool', 'Indoor Games', 'Guest Room', 'Gym', 'Party Hall', 'Cards Room', 'Yoga Deck']
      },
      {
        title: 'Thoughtful Infrastructure & Security',
        badge: 'Engineered Standards',
        items: ['40 ft Main Road', '30 ft Internal Roads', 'Underground Electrification', 'Underground Drainage & Water Supply', 'STP', 'WTP', 'Hydro-Pneumatic Water Supply', 'Compound Wall with Solar Fencing', 'CCTV', 'Power Backup']
      }
    ],

    experience: {
      eyebrow: 'Explore the Experience',
      headline: 'Step Into Your Sanctuary',
      shortLine: 'Explore Sanctuary through master plans, landscape visuals, clubhouse views, green corridors, pocket parks and immersive project experiences.',
      tabs: [
        { id: 'photos', label: 'Photos', desc: 'Curated gallery of landscape avenues, green corridors, and park views.' },
        { id: 'videos', label: 'Videos', desc: 'Watch cinematic video walkthroughs and immersive aerial footage of Sanctuary.' },
        { id: 'masterplan', label: 'Master Plan', desc: 'Detailed 14-acre master layout showing all 63 plot and villa allocations.' },
        { id: 'floorplan', label: 'Floor Plan', desc: 'Architectural floor plans and layout configurations.' },
        { id: 'unitplan', label: 'Unit Plan', desc: 'Dimensional unit plans and plot configurations ranging from 343 to 1,000 Sq. Yds.' },
        { id: 'brochure', label: 'Brochure', desc: 'Official high-resolution Northstar Sanctuary project brochure.' }
      ]
    },

    qualityInfrastructure: {
      eyebrow: 'Built with Quality',
      title: 'Thoughtful Infrastructure for a Better Living Experience',
      subtitle: 'Tap each point to explore the infrastructure, landscape and planning details that make Sanctuary a thoughtfully crafted community.',
      points: [
        { id: 'main-road', label: '40 ft Main Road', category: 'Roads', detail: 'Broad 40-foot arterial avenue built for smooth, stately two-way vehicular flow with dedicated tree canopies.' },
        { id: 'internal-road', label: '30 ft Internal Road', category: 'Roads', detail: '30-foot residential lanes planned so pedestrian movement and neighbourly life stay peaceful and uncrowded.' },
        { id: 'cobbled-roads', label: 'Cobbled Stone Roads', category: 'Roads', detail: 'Classic cobbled pavers offering timeless aesthetics, natural rainwater percolation, and vehicle speed calming.' },
        { id: 'walking-track', label: 'Walking Track', category: 'Wellness', detail: 'Continuous, shaded perimeter walking track woven through lush pocket parks and flowering gardens.' },
        { id: 'cycling-track', label: 'Cycling Track', category: 'Wellness', detail: 'Dedicated, safe cycling avenue separated from primary car movement for children and fitness enthusiasts.' },
        { id: 'stp', label: 'Sewage Treatment Plant (STP)', category: 'Utilities', detail: 'Advanced on-site STP providing recycled treated water for community landscaping and green belts.' },
        { id: 'wtp', label: 'Water Treatment Plant (WTP)', category: 'Utilities', detail: 'Central filtration and purification plant delivering safe, pressurized potable water to all homes.' },
        { id: 'underground-elec', label: 'Underground Electrification', category: 'Utilities', detail: 'Zero overhead wires. All high-tension and domestic electric lines routed through underground conduits.' },
        { id: 'compound-wall', label: 'Compound Wall', category: 'Security', detail: 'Solid, high-perimeter masonry compound wall enclosing the entire 14-acre private enclave.' },
        { id: 'solar-fencing', label: 'Solar Fencing', category: 'Security', detail: 'Energized solar perimeter security fencing running along the entire boundary with tamper detection.' },
        { id: 'cctv', label: 'CCTV Surveillance', category: 'Security', detail: 'Comprehensive 24/7 high-definition CCTV camera coverage across entry gates, boulevards, and parks.' },
        { id: 'power-backup', label: 'Power Backup', category: 'Utilities', detail: 'Dedicated DG backup for streetlights, water pumps, clubhouse, and security systems.' }
      ]
    },

    constructionProgress: {
      eyebrow: 'Construction Progress',
      title: 'Watch Sanctuary Take Shape',
      subtitle: 'Follow the latest progress of Northstar Sanctuary through drone views, site photographs and regular project updates.',
      mediaTabs: ['Photos', 'Videos'],
      photos: [
        { id: 1, title: 'Perimeter Boundary & Solar Fencing', stage: '100% Completed', desc: 'High-perimeter masonry compound wall and energized solar security fencing fully installed across the 14-acre perimeter.', image: imgSanctuary },
        { id: 2, title: 'Underground Infrastructure', stage: 'Advanced Stage', desc: 'Concealed underground storm drainage, pressurized ring main water supply conduits, and electrical networks laid.', image: imgSanctuary },
        { id: 3, title: '40ft Arterial Boulevard & Cobbled Avenues', stage: 'In Progress', desc: '40-foot main entrance boulevard base layer prepared with 30-foot residential internal cobbled streets undergoing paving.', image: imgSanctuary },
        { id: 4, title: 'Landscape Development & Pocket Parks', stage: 'Active Planting', desc: 'Avenue tree plantations, native greenery, flowering gardens, and automated drip irrigation networks taking root.', image: imgSanctuary },
        { id: 5, title: 'Central Clubhouse Civil Works', stage: 'Structure Underway', desc: 'Foundational civil works, footings, and structural framing for the luxury clubhouse progressing on schedule.', image: imgSanctuary }
      ],
      videos: [
        { id: 1, title: 'Aerial Drone Site Survey & Walkthrough', stage: 'Latest Drone Flight', desc: 'Full bird\'s-eye perspective of the 14-acre master layout, 40ft avenues, boundary development, and natural topography.', video: heroVideoPlaceholder, poster: imgSanctuary },
        { id: 2, title: 'Infrastructure & Avenue Progress Walkthrough', stage: 'Ground Walkthrough', desc: 'On-ground cinematic documentation showing underground utility lines, avenue tree planting, and clubhouse structural progress.', video: heroVideoPlaceholder, poster: imgHillside }
      ],
      milestones: [
        { label: 'Site Boundary & Compound Wall', status: '100% Completed', note: 'Entire perimeter compound wall and solar fencing installed.' },
        { label: 'Underground Infrastructure', status: 'Advanced Stage', note: 'Concealed underground utilities and storm drainage network laid.' },
        { label: 'Road Works & Cobbled Avenues', status: 'In Progress', note: '40ft main boulevard base work and 30ft internal roads undergoing paving.' },
        { label: 'Landscape & Pocket Parks', status: 'Active Planting', note: 'Tree transplantation, flowering gardens, and irrigation systems taking shape.' },
        { label: 'Clubhouse Civil Work', status: 'Structure Underway', note: 'Clubhouse foundations and structural framing progressing on schedule.' }
      ]
    },

    neighbourhood: {
      eyebrow: 'Connectivity & Commute',
      title: 'Around the Neighbourhood',
      subtitle: 'Placed along the rapid growth corridor of South Hyderabad, keeping work, global travel, and education within effortless reach.',
      landmarks: [
        { name: 'RGIA (Hyderabad International Airport)', distance: '10 km', time: '20 min' },
        { name: 'ORR Exit No. 14 (Tukkuguda)', distance: '5 km', time: '10 min' },
        { name: 'Maheshwaram Entrance', distance: '2 km', time: '5 min' },
        { name: 'Hardware Park', distance: '6 km', time: '12 min' },
        { name: 'Pharma SEZ', distance: '8 km', time: '16 min' },
        { name: 'RCI (Research Centre Imarat)', distance: '8 km', time: '15 min' },
        { name: 'Agha Khan Academy', distance: '7 km', time: '15 min' },
        { name: 'Sri Sri Academy', distance: '1.5 km', time: '5 min' },
        { name: 'Devendra Vidyalaya', distance: '3 km', time: '4 min' },
        { name: 'Bhashyam School', distance: '0.5 km', time: '1 min' },
        { name: 'Manchester Global School', distance: '4 km', time: '8 min' }
      ]
    },

    locationDetails: {
      eyebrow: 'Project Location',
      title: 'A Nature-Led Address on Srisailam Highway',
      addressTitle: 'Northstar Sanctuary',
      addressLines: [
        'Survey No. 38/AA, 39/EE, 43/A, 45/RU, 46/UU and 47/U,',
        'Mohabathnagar Village, Maheshwaram Revenue Mandal,',
        'Ranga Reddy District, Telangana – 501359'
      ],
      googleMapLink: 'https://maps.google.com/maps?q=17.1587666,78.4787074',
      embedMapUrl: 'https://maps.google.com/maps?q=17.1587666,78.4787074&hl=en&z=14&output=embed'
    },

    enquiry: {
      eyebrow: 'Start Your Enquiry',
      title: 'Find Your Own Sanctuary',
      subtitle: 'Sanctuary is for those who dream of building a home around space, greenery, calm and long-term value. Share your details with us and our team will help you with plot availability, villa options, pricing, master plans, brochure and site visit assistance.',
      options: ['Plotted Development (343 – 1,000 Sq. Yds.)', 'Crafted Luxury Villa', 'Both Plots & Villas'],
      plotSizes: ['343 – 500 Sq. Yds. (Villa Plot)', '600 – 1,000 Sq. Yds. (Estate Plot)', 'Flexible / Customized']
    }
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // ALLURA  (Ongoing)
  // ─────────────────────────────────────────────────────────────────────────────
  allura: {
    id: 'allura',
    name: 'Northstar Allura',
    shortName: 'Allura',
    headerTitle: 'At the Centre of Hyderabad\'s Next Chapter',
    status: 'Ongoing',
    statusBadge: 'Now Selling',
    type: 'Luxury Villa Community',
    city: 'Hyderabad',
    location: 'Kokapet, Hyderabad',
    heroImage: imgAllura,
    heroVideo: null,
    logo: logoAllura,
    rera: 'P02400001214',
    reraAuthority: 'TS RERA',
    reraLink: 'https://rera.telangana.gov.in/',
    brochureUrl: 'https://drive.google.com/drive/folders/1qUaYObfmertxSbwOtVmMJoVSHIUERpi9',
    projectLink: '#',
    walkthroughVideoLink: '#',
    masterPlanLink: '#',
    googleMapLink: 'https://www.google.com/maps/place/Northstar+Allura/@17.3906453,78.3329721',
    googleMapEmbed: 'https://maps.google.com/maps?q=17.3906453,78.3329721&hl=en&z=15&output=embed',

    specs: [
      { label: 'Status', value: 'Ongoing' },
      { label: 'Project Type', value: 'Luxury Villa Community' },
      { label: 'Project Area', value: '6.3 Acres' },
      { label: 'Total Villas', value: '54 Villas' },
      { label: 'Home Type', value: '4 BHK Villas' },
      { label: 'Plot Sizes', value: '267 – 420 Sq. Yds.' },
      { label: 'Built-Up Area', value: '4,019 – 4,910 Sq. Ft.' },
      { label: 'RERA Registration', value: 'P02400001214' }
    ],

    narrative: [
      {
        tag: 'Location & Opportunity',
        headline: 'At the Centre of Hyderabad\'s Next Chapter.',
        paragraphs: [
          'Kokapet is where Hyderabad\'s growth story is being written today.',
          'Allura places you at the heart of this corridor — close to the Financial District, Neopolis, and the city\'s most ambitious new addresses.',
          'An address that positions your family at the front of what\'s next.'
        ],
        image: imgAllura,
        imageCaption: 'Northstar Allura · Kokapet, Hyderabad'
      },
      {
        tag: 'Community & Privacy',
        headline: 'A Private World of 54 Homes.',
        paragraphs: [
          'With just 54 villas across 6.3 acres, Allura is built for the kind of privacy that larger communities cannot offer.',
          'Wide internal roads, a Zen garden, an aroma garden and a reflexology path create a neighbourhood that invites you to slow down.',
          'This is a place that feels distinctly your own — from the moment you arrive.'
        ],
        image: imgAllura,
        imageCaption: 'Community Greens & Private Villa Enclave · Allura'
      },
      {
        tag: 'Amenities & Lifestyle',
        headline: 'More Life in Every Day.',
        paragraphs: [
          'A 14,000 Sq. Ft. clubhouse, amphitheater, cricket nets, half basketball post and a full outdoor fitness area bring activity to your doorstep.',
          'Herbal gardens, an aroma garden and a walking track make the outdoors as engaging as indoors.',
          'Allura is designed so that every day has something worth stepping outside for.'
        ],
        image: imgAllura,
        imageCaption: '14,000 Sq. Ft. Clubhouse & Lifestyle Amenities · Allura'
      },
      {
        tag: 'Villa Design',
        headline: 'A Home Shaped Around Your Life.',
        paragraphs: [
          'At 4,019 to 4,910 Sq. Ft., these 4 BHK villas are planned to give every part of family life its own space.',
          'Plots ranging from 267 to 420 Sq. Yds. mean each home has room to breathe around it.',
          'A scale that makes space feel generous and life feel considered.'
        ],
        image: imgAllura,
        imageCaption: '4 BHK Villa Architecture · 4,019 – 4,910 Sq. Ft.'
      }
    ],

    amenitiesHeader: {
      eyebrow: 'Lifestyle Features & Amenities',
      title: 'A Lifestyle Shaped Around Wellness, Nature and Community',
      description: 'Allura brings together curated outdoor spaces, an expansive clubhouse and leisure facilities across 6.3 acres, designed for a balanced and engaged everyday life.'
    },
    amenityCategories: [
      {
        title: 'Nature & Wellness Landscape',
        badge: 'Outdoor Living',
        items: ['Zen Garden', 'Reflexology Path', 'Herbal Garden', 'Aroma Garden', 'Walking Track', 'Outdoor Fitness Area']
      },
      {
        title: 'Sports & Activity',
        badge: 'Active Lifestyle',
        items: ['Half Basketball Post', 'Cricket Practising Net', 'Kids\' Play Area', 'Amphitheater']
      },
      {
        title: 'Clubhouse & Social',
        badge: 'Club Experience',
        items: ['14,000 Sq. Ft. Clubhouse', 'Party Hall', 'Indoor Games', 'Gymnasium', 'Swimming Pool']
      },
      {
        title: 'Infrastructure & Security',
        badge: 'Peace of Mind',
        items: ['24×7 Security', 'CCTV Surveillance', 'Power Backup', 'Compound Wall', 'Car Parking']
      }
    ],

    experience: {
      eyebrow: 'Explore Allura',
      headline: 'Step Into Northstar Allura',
      shortLine: 'Explore Allura through villa renders, master plans, floor plans, amenity spaces and project walk-throughs.',
      tabs: [
        { id: 'photos', label: 'Photos', desc: 'Curated gallery of villa renders, landscape and amenity spaces.' },
        { id: 'masterplan', label: 'Master Plan', desc: '6.3-acre master layout showing all 54 villa plots and community spaces.' },
        { id: 'floorplan', label: 'Floor Plan', desc: '4 BHK villa floor plan configurations.' },
        { id: 'brochure', label: 'Brochure', desc: 'Official Northstar Allura project brochure.' }
      ]
    },

    neighbourhood: {
      eyebrow: 'Strategic Location',
      title: 'Around the Neighbourhood',
      subtitle: 'Placed in Kokapet — Hyderabad\'s most dynamic growth corridor — with swift access to the Financial District, schools and the city\'s best.',
      landmarks: [
        { name: 'Phoenix Greens', distance: '1 km', time: '2 min' },
        { name: 'Rockwell International School', distance: '3 km', time: '6 min' },
        { name: 'Neopolis Kokapet', distance: '4 km', time: '8 min' },
        { name: 'Financial District', distance: '5 km', time: '10 min' },
        { name: 'Continental Hospitals', distance: '5 km', time: '10 min' },
        { name: 'Oakridge International School', distance: '7 km', time: '12 min' },
        { name: 'HITEC City', distance: '12 km', time: '20 min' },
        { name: 'Jubilee Hills', distance: '13 km', time: '22 min' },
        { name: 'Banjara Hills', distance: '16 km', time: '28 min' },
        { name: 'Rajiv Gandhi International Airport', distance: '27 km', time: '35 min' }
      ]
    },

    locationDetails: {
      eyebrow: 'Project Location',
      title: 'At the Heart of Kokapet, Hyderabad',
      addressTitle: 'Northstar Allura',
      addressLines: [
        'Kokapet,',
        'Hyderabad, Telangana'
      ],
      googleMapLink: 'https://www.google.com/maps/place/Northstar+Allura/@17.3906453,78.3329721',
      embedMapUrl: 'https://maps.google.com/maps?q=17.3906453,78.3329721&hl=en&z=15&output=embed'
    },

    enquiry: {
      eyebrow: 'Start Your Enquiry',
      title: 'Enquire About Northstar Allura',
      subtitle: 'Connect with our team for villa availability, pricing, floor plans, and site visit arrangements.',
      options: ['4 BHK Villa (267 – 420 Sq. Yds. Plot)', 'General Enquiry'],
      plotSizes: ['267 – 299 Sq. Yds.', '300 – 350 Sq. Yds.', '351 – 420 Sq. Yds.']
    }
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // SP PALACIO  (Ongoing / Ready to Move)
  // ─────────────────────────────────────────────────────────────────────────────
  'sp-palacio': {
    id: 'sp-palacio',
    name: 'Northstar SP Palacio',
    shortName: 'SP Palacio',
    headerTitle: 'Welcome Home to Abids',
    status: 'Ongoing',
    statusBadge: 'Now Selling',
    type: 'Ultra-Luxury 3 & 4 BHK Residences',
    city: 'Hyderabad',
    location: 'JN Road, Abids, Hyderabad',
    heroImage: imgSpPalacio,
    heroVideo: null,
    logo: logoSpPalacio,
    rera: 'P02500005496',
    reraAuthority: 'TS RERA',
    reraLink: 'https://rera.telangana.gov.in/',
    brochureUrl: 'https://drive.google.com/drive/folders/1cDNCRFxzwyMRUBOMwkEPxeSN22euwt-1',
    projectLink: '#',
    walkthroughVideoLink: '#',
    masterPlanLink: '#',
    googleMapLink: 'https://www.google.com/maps/place/Northstar+SP+Palacio/@17.3857169,78.4732282',
    googleMapEmbed: 'https://maps.google.com/maps?q=17.3857169,78.4732282&hl=en&z=15&output=embed',

    specs: [
      { label: 'Status', value: 'Ongoing' },
      { label: 'Project Type', value: 'Ultra-Luxury Residences' },
      { label: 'Land Extent', value: '1.87 Acres' },
      { label: 'Total Flats', value: '172 Apartments' },
      { label: 'Home Types', value: '3 BHK & 4 BHK' },
      { label: 'Unit Sizes', value: '2,251 – 3,376 Sq. Ft.' },
      { label: 'Structure', value: '1B + G + 3 Parking + 18 Floors' },
      { label: 'RERA Registration', value: 'P02500005496' }
    ],

    narrative: [
      {
        tag: 'The Address',
        headline: 'Welcome Home to Abids.',
        paragraphs: [
          'Abids has always been where Hyderabad came together — for trade, for culture, for everyday life.',
          'SP Palacio finds its address at the heart of this neighbourhood, bringing a new standard of residential living to one of the city\'s most storied districts.',
          'An address that carries the weight of history and the energy of a city still moving forward.'
        ],
        image: imgSpPalacio,
        imageCaption: 'Northstar SP Palacio · JN Road, Abids, Hyderabad'
      },
      {
        tag: 'The Neighbourhood',
        headline: 'Where Business Was Born.',
        paragraphs: [
          'Abids grew as the commercial backbone of Hyderabad — a place where enterprise and everyday life shared the same streets.',
          'SP Palacio sits in that legacy, with the Gandhi Bhavan Metro just 0.5 km away and the entire city accessible with ease.',
          'Living here means being at the centre of things, without being far from anywhere.'
        ],
        image: imgSpPalacio,
        imageCaption: 'Abids Commercial District & Metro Connectivity'
      },
      {
        tag: 'Faith & Community',
        headline: 'A Home That Carries Its Own Faith.',
        paragraphs: [
          'SP Palacio includes a dedicated Jain Temple and Prayer Hall within the community.',
          'A thoughtful inclusion that reflects the values of those who have long called this neighbourhood home.',
          'Because a home is not just where you live — it is where your life is rooted.'
        ],
        image: imgSpPalacio,
        imageCaption: 'Jain Temple & Prayer Hall · SP Palacio'
      },
      {
        tag: 'Family Life',
        headline: 'Where the Whole Family Still Gathers.',
        paragraphs: [
          '172 apartments across 18 floors, with 3 and 4 BHK homes ranging from 2,251 to 3,376 Sq. Ft.',
          'Generous proportions that give every member of the family the space they need.',
          'A building that keeps the family close while giving each person room of their own.'
        ],
        image: imgSpPalacio,
        imageCaption: '172 Apartments · 3 & 4 BHK · 2,251 – 3,376 Sq. Ft.'
      }
    ],

    amenitiesHeader: {
      eyebrow: 'Lifestyle Features & Amenities',
      title: 'More Life Inside the Building',
      description: 'SP Palacio brings together wellness, recreation, sport, faith and community within a single address in the heart of Abids.'
    },
    amenityCategories: [
      {
        title: 'Wellness & Fitness',
        badge: 'Health',
        items: ['Infinity Swimming Pool', 'Gymnasium', 'Yoga Deck', 'Jogging Track']
      },
      {
        title: 'Sports & Activity',
        badge: 'Active Lifestyle',
        items: ['Pickleball Court', 'Cricket Nets', 'Indoor Games']
      },
      {
        title: 'Community & Social',
        badge: 'Togetherness',
        items: ['Party Hall', 'Business Centre', 'Kids\' Play Area', 'Jain Temple & Prayer Hall']
      },
      {
        title: 'Infrastructure & Security',
        badge: 'Essentials',
        items: ['24×7 Security', 'CCTV Surveillance', 'High-Speed Lifts', 'Power Backup', 'Car Parking']
      }
    ],

    experience: {
      eyebrow: 'Explore SP Palacio',
      headline: 'Step Into Northstar SP Palacio',
      shortLine: 'Explore SP Palacio through architectural elevations, floor plans, amenity spaces and site views.',
      tabs: [
        { id: 'photos', label: 'Photos', desc: 'Architectural photography and render gallery of SP Palacio.' },
        { id: 'masterplan', label: 'Master Plan', desc: 'Site layout and tower orientation plan.' },
        { id: 'floorplan', label: 'Floor Plan', desc: '3 BHK & 4 BHK floor plan configurations.' },
        { id: 'brochure', label: 'Brochure', desc: 'Official SP Palacio project brochure.' }
      ]
    },

    neighbourhood: {
      eyebrow: 'Central Hyderabad',
      title: 'Around the Neighbourhood',
      subtitle: 'Placed at the heart of Abids — connected to metro, rail, commerce and healthcare within minutes.',
      landmarks: [
        { name: 'Gandhi Bhavan Metro Station', distance: '0.5 km', time: '2 min' },
        { name: 'Abids Shopping District', distance: '0.8 km', time: '3 min' },
        { name: 'Nampally Railway Station', distance: '1.5 km', time: '5 min' },
        { name: 'Begum Bazaar', distance: '1.5 km', time: '5 min' },
        { name: 'Moazzam Jahi Market', distance: '1.2 km', time: '4 min' },
        { name: 'Little Flower High School', distance: '1.0 km', time: '3 min' },
        { name: 'Koti Commercial Hub', distance: '2.0 km', time: '7 min' },
        { name: 'Banjara Hills', distance: '6.0 km', time: '15 min' }
      ]
    },

    locationDetails: {
      eyebrow: 'Project Location',
      title: 'A Prestigious Address on JN Road, Abids',
      addressTitle: 'Northstar SP Palacio',
      addressLines: [
        'Door No. 5-4-146, Murlidhar Bagh, J.N. Road,',
        'Opp. Ramakrishna Theatre, Abids,',
        'Hyderabad – 500001'
      ],
      googleMapLink: 'https://www.google.com/maps/place/Northstar+SP+Palacio/@17.3857169,78.4732282',
      embedMapUrl: 'https://maps.google.com/maps?q=17.3857169,78.4732282&hl=en&z=15&output=embed'
    },

    enquiry: {
      eyebrow: 'Start Your Enquiry',
      title: 'Enquire About Northstar SP Palacio',
      subtitle: 'Connect with our team for apartment availability, floor plans, pricing and site visit arrangements.',
      options: ['3 BHK Apartment', '4 BHK Apartment'],
      plotSizes: ['3 BHK (2,251 – 2,800 Sft)', '4 BHK (3,000 – 3,376 Sft)']
    }
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // PARK AVENUE  (Ongoing)
  // ─────────────────────────────────────────────────────────────────────────────
  'park-avenue': {
    id: 'park-avenue',
    name: 'Northstar Park Avenue',
    shortName: 'Park Avenue',
    headerTitle: 'Madhurawada. Right Where Vizag Is Moving Forward.',
    status: 'Ongoing',
    statusBadge: 'Now Selling',
    type: 'Residential Apartment Community',
    city: 'Visakhapatnam',
    location: 'Madhurawada, Visakhapatnam',
    heroImage: imgParkAvenue,
    heroVideo: null,
    logo: logoParkAvenue,
    rera: 'TS RERA Registered',
    reraAuthority: 'AP RERA',
    reraLink: 'https://rera.ap.gov.in/',
    brochureUrl: '#',
    projectLink: '#',
    walkthroughVideoLink: '#',
    masterPlanLink: '#',
    googleMapLink: 'https://www.google.com/maps?cid=9800644098589663536',
    googleMapEmbed: 'https://maps.google.com/maps?cid=9800644098589663536&output=embed',

    specs: [
      { label: 'Status', value: 'Ongoing' },
      { label: 'Project Type', value: 'Residential Apartments' },
      { label: 'Land Extent', value: '2.58 Acres' },
      { label: 'Total Apartments', value: '243 Apartments' },
      { label: 'Home Types', value: '2 BHK, 2.5 BHK & 3 BHK' },
      { label: 'Unit Sizes', value: '1,210 – 2,442 Sft' },
      { label: 'Structure', value: 'Cellar + Stilt + 9 Floors' },
      { label: 'Clubhouse', value: '10,500 Sft' }
    ],

    narrative: [
      {
        tag: 'Location',
        headline: 'Madhurawada. Right Where Vizag Is Moving Forward.',
        paragraphs: [
          'Madhurawada has quietly become Visakhapatnam\'s most active address — where IT companies, schools and everyday conveniences have gathered over the last decade.',
          'Park Avenue places you here, with major tech employers, NH-16 and Highfields International School all within easy reach.',
          'An address that keeps pace with the way Vizag is growing.'
        ],
        image: imgParkAvenue,
        imageCaption: 'Northstar Park Avenue · Madhurawada, Visakhapatnam'
      },
      {
        tag: 'Home Life',
        headline: 'Come Home to the Life You Had in Mind.',
        paragraphs: [
          '243 apartments across 9 floors, with 2 BHK, 2.5 BHK and 3 BHK homes ranging from 1,210 to 2,442 Sft.',
          'Homes planned to bring in natural light, ventilation and a sense of ease that makes everyday life feel more considered.',
          'A building sized to feel like a community — not a crowd.'
        ],
        image: imgParkAvenue,
        imageCaption: '243 Apartments · 2 BHK, 2.5 BHK & 3 BHK'
      },
      {
        tag: 'Outdoors',
        headline: 'There\'s More to Live Outside Your Front Door.',
        paragraphs: [
          'A half-acre central park sits at the heart of the community — a green space for morning walks, evening gatherings and children\'s play.',
          'A swimming pool, kids\' pool, jogging track, badminton and basketball courts bring activity options without leaving home.',
          'At Park Avenue, the outdoors is as well-planned as the indoors.'
        ],
        image: imgParkAvenue,
        imageCaption: 'Half-Acre Central Park & Community Recreation'
      },
      {
        tag: 'Space & Comfort',
        headline: 'More Space for the Way Your Family Lives.',
        paragraphs: [
          'From 1,210 Sft 2 BHK homes to 2,442 Sft 3 BHK residences, Park Avenue offers options for families at every stage.',
          'A 10,500 Sft clubhouse adds shared space that extends the feeling of home beyond your front door.',
          'Space that grows with your family, in a neighbourhood already built for the future.'
        ],
        image: imgParkAvenue,
        imageCaption: '10,500 Sft Clubhouse & Community Facilities'
      }
    ],

    amenitiesHeader: {
      eyebrow: 'Lifestyle Features & Amenities',
      title: 'An Active, Comfortable Life at Your Doorstep',
      description: 'Park Avenue is designed around a half-acre central park and a full range of community amenities — everything needed for an active, balanced family life in Madhurawada.'
    },
    amenityCategories: [
      {
        title: 'Green Spaces',
        badge: 'Nature & Outdoors',
        items: ['Half-Acre Central Park', 'Landscaped Gardens', 'Jogging Track']
      },
      {
        title: 'Wellness & Recreation',
        badge: 'Active Living',
        items: ['Swimming Pool', 'Kids\' Pool', 'Outdoor Fitness Area', 'Badminton Court', 'Basketball Court', 'Skating Rink']
      },
      {
        title: 'Family & Community',
        badge: 'Togetherness',
        items: ['Kids\' Play Area', 'Stage / Amphitheater', '10,500 Sft Clubhouse', 'Party Hall']
      },
      {
        title: 'Infrastructure & Security',
        badge: 'Essentials',
        items: ['24×7 Security', 'CCTV Surveillance', 'Power Backup', 'Car Parking', 'Lifts']
      }
    ],

    experience: {
      eyebrow: 'Explore Park Avenue',
      headline: 'Step Into Northstar Park Avenue',
      shortLine: 'Explore Park Avenue through apartment renders, master plans, floor plans and amenity spaces.',
      tabs: [
        { id: 'photos', label: 'Photos', desc: 'Gallery of apartment renders and community spaces at Park Avenue.' },
        { id: 'masterplan', label: 'Master Plan', desc: '2.58-acre site layout and apartment block orientation.' },
        { id: 'floorplan', label: 'Floor Plan', desc: '2 BHK, 2.5 BHK & 3 BHK floor plan configurations.' },
        { id: 'brochure', label: 'Brochure', desc: 'Official Park Avenue project brochure.' }
      ]
    },

    neighbourhood: {
      eyebrow: 'Strategic Location',
      title: 'Around the Neighbourhood',
      subtitle: 'Set in Madhurawada — Vizag\'s IT and education hub — with easy access to the coast, NH-16 and the city\'s key destinations.',
      landmarks: [
        { name: 'Major IT Hubs (Madhurawada)', distance: '~2 km', time: '5 min' },
        { name: 'IBM / Cyient / Navayuga', distance: '~3 km', time: '6 min' },
        { name: 'NH-16', distance: 'Nearby', time: '3 min' },
        { name: 'Highfields International School', distance: '~200 m', time: '1 min' },
        { name: 'Beach', distance: '~3.5 km', time: '8 min' }
      ]
    },

    locationDetails: {
      eyebrow: 'Project Location',
      title: 'At the Heart of Madhurawada, Visakhapatnam',
      addressTitle: 'Northstar Park Avenue',
      addressLines: [
        'Madhurawada,',
        'Visakhapatnam, Andhra Pradesh'
      ],
      googleMapLink: 'https://www.google.com/maps?cid=9800644098589663536',
      embedMapUrl: 'https://maps.google.com/maps?cid=9800644098589663536&output=embed'
    },

    enquiry: {
      eyebrow: 'Start Your Enquiry',
      title: 'Enquire About Northstar Park Avenue',
      subtitle: 'Connect with our team for apartment availability, floor plans, pricing and site visit arrangements.',
      options: ['2 BHK Apartment', '2.5 BHK Apartment', '3 BHK Apartment'],
      plotSizes: ['2 BHK (1,210 – 1,500 Sft)', '2.5 BHK (1,600 – 1,900 Sft)', '3 BHK (2,000 – 2,442 Sft)']
    }
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // GOLDEN VALLEY  (Ongoing)
  // ─────────────────────────────────────────────────────────────────────────────
  'golden-valley': {
    id: 'golden-valley',
    name: 'Northstar Golden Valley',
    shortName: 'Golden Valley',
    headerTitle: 'Vizag is Having a Moment.',
    status: 'Ongoing',
    statusBadge: 'Now Selling',
    type: 'Residential Apartment Community',
    city: 'Visakhapatnam',
    location: 'Madhurawada, Visakhapatnam',
    heroImage: imgGoldenValley,
    heroVideo: null,
    logo: logoGoldenValley,
    rera: 'AP RERA Registered',
    reraAuthority: 'AP RERA',
    reraLink: 'https://rera.ap.gov.in/',
    brochureUrl: '#',
    projectLink: '#',
    walkthroughVideoLink: '#',
    masterPlanLink: '#',
    googleMapLink: 'https://www.google.com/maps?cid=16957692231826751179',
    googleMapEmbed: 'https://maps.google.com/maps?cid=16957692231826751179&output=embed',

    specs: [
      { label: 'Status', value: 'Ongoing' },
      { label: 'Project Type', value: 'Residential Apartments' },
      { label: 'Land Extent', value: '5.22 Acres' },
      { label: 'Total Apartments', value: '544 Apartments' },
      { label: 'Home Types', value: '3 BHK & 3.5 BHK' },
      { label: 'Unit Sizes', value: '1,540 – 2,240 Sft' },
      { label: 'Structure', value: 'Cellar + Stilt + 26 Floors' },
      { label: 'Clubhouse', value: '35,000 Sft' }
    ],

    narrative: [
      {
        tag: 'City Momentum',
        headline: 'Vizag is Having a Moment.',
        paragraphs: [
          'Visakhapatnam is at an inflection point — a city where IT investment, infrastructure growth and coastal living are coming together in a way that rarely happens.',
          'Golden Valley puts you here, in Madhurawada, where much of that momentum is concentrated.',
          'This is not just a home. It is a position in a city finding its pace.'
        ],
        image: imgGoldenValley,
        imageCaption: 'Northstar Golden Valley · Madhurawada, Visakhapatnam'
      },
      {
        tag: 'Location Advantage',
        headline: 'Where the IT Corridor Meets the Coast.',
        paragraphs: [
          'Madhurawada\'s IT corridor, NH-16, the beach and Vizag\'s best schools are all within a short drive.',
          'IBM, Cyient, Navayuga and other major employers are roughly 3 km away.',
          'Golden Valley\'s location keeps work close, the coast closer, and everyday life straightforward.'
        ],
        image: imgGoldenValley,
        imageCaption: 'IT Corridor, NH-16 & Coastal Proximity · Madhurawada'
      },
      {
        tag: 'Community & Amenities',
        headline: 'A Well-Planned Community for a Better Way of Living.',
        paragraphs: [
          'A 35,000 Sft clubhouse, two OSR open spaces, a swimming pool, cricket nets, yoga deck, walking track and EV charging bring full-community living to 544 families.',
          'A minimart, reading room, business lounge, guest rooms and senior citizen area ensure that the community is planned for every stage of life.',
          'Everything a neighbourhood needs — built into one address.'
        ],
        image: imgGoldenValley,
        imageCaption: '35,000 Sft Clubhouse & Full-Community Amenities'
      }
    ],

    amenitiesHeader: {
      eyebrow: 'Lifestyle Features & Amenities',
      title: 'A Complete Community Planned for Every Stage of Life',
      description: 'Golden Valley brings together wellness, sport, leisure, security and everyday convenience across 5.22 acres — a community planned to support family life at every level.'
    },
    amenityCategories: [
      {
        title: 'Clubhouse Facilities',
        badge: 'Club Experience',
        items: ['35,000 Sft Clubhouse', 'Party Hall', 'Business Lounge', 'Reading Room', 'Minimart', 'Guest Room', 'Kids\' Games Room', 'Indoor Games']
      },
      {
        title: 'Wellness & Fitness',
        badge: 'Active Living',
        items: ['Swimming Pool', 'Gymnasium', 'Yoga Deck', 'Walking Track', 'Outdoor Fitness Area', 'Cricket Nets']
      },
      {
        title: 'Family & Community Spaces',
        badge: 'Togetherness',
        items: ['Two OSR Open Spaces', 'Kids\' Play Area', 'Senior Citizen Area']
      },
      {
        title: 'Infrastructure & Security',
        badge: 'Peace of Mind',
        items: ['EV Charging Points', '7-Foot Compound Wall with Solar Fencing', 'CCTV Surveillance', '24×7 Security', 'Power Backup']
      }
    ],

    experience: {
      eyebrow: 'Explore Golden Valley',
      headline: 'Step Into Northstar Golden Valley',
      shortLine: 'Explore Golden Valley through apartment renders, master plans, floor plans and community amenities.',
      tabs: [
        { id: 'photos', label: 'Photos', desc: 'Gallery of apartment renders and community spaces.' },
        { id: 'masterplan', label: 'Master Plan', desc: '5.22-acre site layout showing all towers and amenity zones.' },
        { id: 'floorplan', label: 'Floor Plan', desc: '3 BHK & 3.5 BHK floor plan configurations.' },
        { id: 'brochure', label: 'Brochure', desc: 'Official Golden Valley project brochure.' }
      ]
    },

    neighbourhood: {
      eyebrow: 'Strategic Location',
      title: 'Around the Neighbourhood',
      subtitle: 'Placed in Madhurawada — close to the IT corridor, NH-16, top schools and Vizag\'s coast.',
      landmarks: [
        { name: 'NH-16', distance: 'Nearby', time: '2 min' },
        { name: 'Major IT Hubs (Madhurawada)', distance: '~2 km', time: '5 min' },
        { name: 'IBM / Cyient / Navayuga', distance: '~3 km', time: '6 min' },
        { name: 'Highfields International School', distance: '~200 m', time: '1 min' },
        { name: 'Beach', distance: '~3.5 km', time: '8 min' }
      ]
    },

    locationDetails: {
      eyebrow: 'Project Location',
      title: 'In Madhurawada, Visakhapatnam',
      addressTitle: 'Northstar Golden Valley',
      addressLines: [
        'Madhurawada,',
        'Visakhapatnam, Andhra Pradesh'
      ],
      googleMapLink: 'https://www.google.com/maps?cid=16957692231826751179',
      embedMapUrl: 'https://maps.google.com/maps?cid=16957692231826751179&output=embed'
    },

    enquiry: {
      eyebrow: 'Start Your Enquiry',
      title: 'Enquire About Northstar Golden Valley',
      subtitle: 'Connect with our team for apartment availability, floor plans, pricing and site visit arrangements.',
      options: ['3 BHK Apartment', '3.5 BHK Apartment'],
      plotSizes: ['3 BHK (1,540 – 1,900 Sft)', '3.5 BHK (2,000 – 2,240 Sft)']
    }
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // DISTRICT 1  (Completed)
  // ─────────────────────────────────────────────────────────────────────────────
  'district-1': {
    id: 'district-1',
    name: 'Northstar District 1',
    shortName: 'District 1',
    headerTitle: 'Award-Winning Architecture in the Financial District.',
    status: 'Completed',
    statusBadge: 'Delivered',
    type: 'Completed Residential Apartment Community',
    city: 'Hyderabad',
    location: 'Financial District / Gachibowli, Hyderabad',
    heroImage: imgDistrict1,
    logo: logoDistrict1,
    rera: 'P02400000557',
    reraAuthority: 'TS RERA',
    reraLink: 'https://rera.telangana.gov.in/',
    brochureUrl: 'https://drive.google.com/drive/folders/1qUaYObfmertxSbwOtVmMJoVSHIUERpi9',
    masterPlanLink: 'https://drive.google.com/drive/folders/1u85e_BDYrPcQeZr5-pHQCK-R-cWM8V7f',
    projectLink: '#',
    walkthroughVideoLink: '#',
    googleMapLink: 'https://maps.google.com/?q=Northstar+District+1+Financial+District+Hyderabad',
    googleMapEmbed: 'https://maps.google.com/maps?q=Northstar+District+1+Financial+District+Hyderabad&hl=en&z=15&output=embed',

    specs: [
      { label: 'Status', value: 'Completed' },
      { label: 'Project Type', value: 'Residential Apartment Community' },
      { label: 'Land Extent', value: 'Approx. 2 Acres' },
      { label: 'Total Residences', value: '149 Apartments' },
      { label: 'Home Type', value: '3 BHK' },
      { label: 'Unit Sizes', value: 'Approx. 1,266 – 2,453 Sft' },
      { label: 'Structure', value: 'Single Tower | 15 Floors' },
      { label: 'Open Area', value: 'Approx. 70%' },
      { label: 'RERA Registration', value: 'P02400000557' }
    ],

    narrative: [
      {
        tag: 'Architectural Distinction',
        headline: 'Award-Winning Architecture in the Financial District.',
        paragraphs: [
          'District 1 brought a distinctive architectural identity to apartment living in the Financial District.',
          'Its approach to design went on to earn Northstar recognised honours in 2016 and 2017.'
        ],
        image: imgDistrict1,
        imageCaption: 'District 1 Tower Façade · Financial District, Gachibowli'
      },
      {
        tag: 'Open Spaces',
        headline: 'Room to Breathe, Even in the Financial District.',
        paragraphs: [
          'Around 70% of the two-acre development is kept open, giving the residential tower more space around it.',
          'A considered way of bringing openness into one of Hyderabad\'s busiest urban districts.'
        ],
        image: imgDistrict1,
        imageCaption: '70% Open Landscaped Grounds · Financial District'
      },
      {
        tag: 'Prime Connectivity',
        headline: 'Live Close to Where the City Works.',
        paragraphs: [
          'Set within Hyderabad\'s Financial District, District 1 keeps major workplaces, healthcare and the Gachibowli business ecosystem close.',
          'An address that makes one of the city\'s most important employment districts part of everyday life.'
        ],
        image: imgDistrict1,
        imageCaption: 'Gachibowli Tech Corridor & Financial District Proximity'
      }
    ],

    amenitiesHeader: {
      eyebrow: 'Lifestyle Features & Amenities',
      title: 'More Ways to Make the Day Your Own',
      description: 'District 1 brings wellness, sports, family recreation and 24×7 convenience together in the heart of Gachibowli.'
    },
    amenityCategories: [
      {
        title: 'Wellness & Recreation',
        badge: 'Lifestyle',
        items: ['Swimming Pool', 'Gymnasium', 'Spa', 'Jogging Track']
      },
      {
        title: 'Sports & Activity',
        badge: 'Fitness',
        items: ['Tennis Court', 'Basketball Court', 'Indoor Games']
      },
      {
        title: 'Family & Community',
        badge: 'Social',
        items: ['Clubhouse', 'Children\'s Play Area', 'Party Lawn', 'Business Lounge']
      },
      {
        title: 'Convenience & Security',
        badge: 'Essential',
        items: ['24×7 Security', 'CCTV Surveillance', 'Power Backup', 'Intercom', 'Car Parking', 'Lifts', 'Rainwater Harvesting']
      }
    ],

    experience: {
      eyebrow: 'Explore the Experience',
      headline: 'See District 1 Beyond the Façade',
      shortLine: 'Explore the finished tower, lifestyle amenities, and floor plans of District 1.',
      tabs: [
        { id: 'photos', label: 'Photos', desc: 'Completed photography of District 1.' },
        { id: 'masterplan', label: 'Master Plan', desc: 'Site and tower footprint.' },
        { id: 'floorplan', label: 'Floor Plan', desc: '3 BHK unit configurations.' },
        { id: 'brochure', label: 'Brochure', desc: 'Download project brochure.' }
      ]
    },

    neighbourhood: {
      eyebrow: 'Prime Location',
      title: 'Around the Neighbourhood',
      subtitle: 'Set beside Continental Hospitals in Puppalguda / Financial District, Hyderabad.',
      landmarks: [
        { name: 'Continental Hospitals', distance: 'Adjacent', time: '1 min' },
        { name: 'Wipro Circle', distance: '1.5 km', time: '3 min' },
        { name: 'Gachibowli Junction', distance: '3 km', time: '7 min' },
        { name: 'Cyber Towers / HITEC City', distance: '8 km', time: '15 min' },
        { name: 'Rajiv Gandhi International Airport', distance: '20 km', time: '30 min' }
      ]
    },

    locationDetails: {
      eyebrow: 'Project Location',
      title: 'In the Heart of Hyderabad\'s Financial District',
      addressTitle: 'Northstar District 1',
      addressLines: [
        'Beside Continental Hospitals, Puppalguda,',
        'Financial District, Hyderabad, Telangana – 500075'
      ],
      googleMapLink: 'https://maps.google.com/?q=Northstar+District+1+Financial+District+Hyderabad',
      embedMapUrl: 'https://maps.google.com/maps?q=Northstar+District+1+Financial+District+Hyderabad&hl=en&z=15&output=embed'
    },

    enquiry: {
      eyebrow: 'Get in Touch',
      title: 'Enquire About District 1',
      subtitle: 'Connect with our team for resale availability, rental opportunities, or site walkthroughs.',
      options: ['Apartment Purchase Enquiry', 'Rental / Resale Enquiry', 'General Enquiry'],
      plotSizes: ['3 BHK (1,266 – 2,453 Sft)']
    }
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // AIRPORT BOULEVARD  (Completed)
  // ─────────────────────────────────────────────────────────────────────────────
  'airport-boulevard': {
    id: 'airport-boulevard',
    name: 'Northstar Airport Boulevard',
    shortName: 'Airport Boulevard',
    headerTitle: 'A Smart Villa Community Near the Airport.',
    status: 'Completed',
    statusBadge: 'Delivered',
    type: 'Smart Villa Community',
    city: 'Hyderabad',
    location: 'Thukkuguda, Near Hyderabad International Airport',
    heroImage: imgAirportBoulevard,
    logo: logoAirportBoulevard,
    rera: 'TS RERA Registered',
    reraAuthority: 'TS RERA',
    reraLink: 'https://rera.telangana.gov.in/',
    brochureUrl: 'https://drive.google.com/drive/folders/1cDNCRFxzwyMRUBOMwkEPxeSN22euwt-1',
    unitPlanLink: 'https://drive.google.com/drive/folders/1kjAqIiVOO49lay0bf_IlbjmNFAi1mupQ',
    projectLink: '#',
    walkthroughVideoLink: '#',
    googleMapLink: 'https://maps.google.com/?q=Thukkuguda+Hyderabad',
    googleMapEmbed: 'https://maps.google.com/maps?q=Thukkuguda+Hyderabad&hl=en&z=14&output=embed',

    specs: [
      { label: 'Status', value: 'Completed' },
      { label: 'Project Type', value: 'Smart Villa Community' },
      { label: 'Project Area', value: '9.5 Acres' },
      { label: 'Location', value: 'Thukkuguda, Near Hyderabad Airport' },
      { label: 'Completion Date', value: 'To be confirmed' },
      { label: 'RERA', value: 'TS RERA Registered' }
    ],

    narrative: [
      {
        tag: 'The Address',
        headline: 'A Smart Villa Community Built for Connectivity.',
        paragraphs: [
          'Airport Boulevard was designed for those whose lives move between the city and the world.',
          'Set in Thukkuguda — close to the Hyderabad International Airport and the ORR — this community was built around the idea that connectivity and calm can coexist.',
          'A smart villa community spread across 9.5 acres.'
        ],
        image: imgAirportBoulevard,
        imageCaption: 'Northstar Airport Boulevard · Thukkuguda, Hyderabad'
      },
      {
        tag: 'Community Living',
        headline: 'Spacious Villas, Thoughtfully Planned.',
        paragraphs: [
          'Airport Boulevard brings spacious villa living to one of South Hyderabad\'s most connected addresses.',
          'Wide roads, landscaped greens and a thoughtfully laid-out community plan make everyday life more relaxed.',
          'A delivered community for those who value space, privacy and ease of access.'
        ],
        image: imgAirportBoulevard,
        imageCaption: 'Smart Villa Community · 9.5 Acres'
      },
      {
        tag: 'Location',
        headline: 'The Airport. The ORR. The City.',
        paragraphs: [
          'Placed near the Hyderabad International Airport and within easy reach of the Outer Ring Road, Airport Boulevard keeps travel and connectivity straightforward.',
          'Everything South Hyderabad has to offer — schools, healthcare, commerce — is close at hand.',
          'An address that works as hard as the people who chose it.'
        ],
        image: imgAirportBoulevard,
        imageCaption: 'Airport & ORR Proximity · South Hyderabad'
      }
    ],

    amenitiesHeader: {
      eyebrow: 'Lifestyle Features & Amenities',
      title: 'Community Amenities for a Better Everyday',
      description: 'Airport Boulevard brings together green open spaces, community facilities and reliable infrastructure within a 9.5-acre smart villa community.'
    },
    amenityCategories: [
      {
        title: 'Outdoor & Green Spaces',
        badge: 'Nature Living',
        items: ['Landscaped Gardens', 'Walking Paths', 'Children\'s Play Area', 'Community Green Spaces']
      },
      {
        title: 'Club & Recreation',
        badge: 'Community Life',
        items: ['Clubhouse', 'Swimming Pool', 'Gymnasium', 'Indoor Games']
      },
      {
        title: 'Infrastructure & Security',
        badge: 'Peace of Mind',
        items: ['24×7 Security', 'CCTV Surveillance', 'Power Backup', 'Wide Internal Roads']
      }
    ],

    experience: {
      eyebrow: 'Explore Airport Boulevard',
      headline: 'See Northstar Airport Boulevard',
      shortLine: 'Explore the community through real images, master plans and site views.',
      tabs: [
        { id: 'photos', label: 'Photos', desc: 'Real photography of Airport Boulevard villas and community spaces.' },
        { id: 'masterplan', label: 'Master Plan', desc: '9.5-acre master site layout and villa plot plan.' },
        { id: 'brochure', label: 'Brochure', desc: 'Official Airport Boulevard project brochure.' }
      ]
    },

    neighbourhood: {
      eyebrow: 'Strategic Location',
      title: 'Around the Neighbourhood',
      subtitle: 'Placed in Thukkuguda — close to the Hyderabad International Airport, ORR and South Hyderabad\'s key destinations.',
      landmarks: [
        { name: 'Hyderabad International Airport (RGIA)', distance: '~10 km', time: '15 min' },
        { name: 'ORR Exit No. 14', distance: '~5 km', time: '10 min' },
        { name: 'Maheshwaram Entrance', distance: '~3 km', time: '6 min' },
        { name: 'Hardware Park', distance: '~6 km', time: '12 min' },
        { name: 'Pharma SEZ', distance: '~8 km', time: '16 min' }
      ]
    },

    locationDetails: {
      eyebrow: 'Project Location',
      title: 'In Thukkuguda, Near Hyderabad International Airport',
      addressTitle: 'Northstar Airport Boulevard',
      addressLines: [
        'Thukkuguda,',
        'Near Hyderabad International Airport,',
        'Ranga Reddy District, Telangana'
      ],
      googleMapLink: 'https://maps.google.com/?q=Thukkuguda+Hyderabad',
      embedMapUrl: 'https://maps.google.com/maps?q=Thukkuguda+Hyderabad&hl=en&z=14&output=embed'
    },

    enquiry: {
      eyebrow: 'Get in Touch',
      title: 'Enquire About Airport Boulevard',
      subtitle: 'Connect with our team for resale availability, site walkthroughs and project details.',
      options: ['Villa Resale Enquiry', 'General Enquiry'],
      plotSizes: ['Smart Villa']
    }
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // HILLSIDE  (Completed)
  // ─────────────────────────────────────────────────────────────────────────────
  hillside: {
    id: 'hillside',
    name: 'Northstar Hillside',
    shortName: 'Hillside',
    headerTitle: 'A Green View, Built Into Every Home.',
    status: 'Completed',
    statusBadge: 'Delivered',
    type: 'Completed Gated Villa Community',
    city: 'Hyderabad',
    location: 'Gandipet, Hyderabad',
    heroImage: imgHillside,
    logo: logoHillside,
    rera: 'TS RERA Registered',
    reraAuthority: 'TS RERA',
    reraLink: 'https://rera.telangana.gov.in/',
    brochureUrl: 'https://drive.google.com/drive/folders/1HXAhycCl8tKNXetfnUHFhl0a9Ox2kXUe',
    projectLink: '#',
    walkthroughVideoLink: 'https://drive.google.com/drive/folders/1W6v6oUcOb-9py1vLDwZq-BNg-wRUiSCg',
    floorPlanLink: 'https://drive.google.com/drive/folders/1GaCowbqSn3OslAPFD0kZBqTeeU5GCUh4',
    googleMapLink: 'https://maps.google.com/?q=Northstar+Hillside+Gandipet+Hyderabad',
    googleMapEmbed: 'https://maps.google.com/maps?q=Northstar+Hillside+Gandipet+Hyderabad&hl=en&z=15&output=embed',

    specs: [
      { label: 'Status', value: 'Completed' },
      { label: 'Project Type', value: 'Gated Villa Community' },
      { label: 'Land Extent', value: '5.25 Acres' },
      { label: 'Total Villas', value: '37 Villas' },
      { label: 'Home Type', value: '4 BHK Villas' },
      { label: 'Plot Sizes', value: '385 – 447 Sq. Yds.' },
      { label: 'Central Park', value: '1-Acre Central Park' },
      { label: 'Podium Landscaping', value: 'Approx. 80,000 Sft' },
      { label: 'Covered Parking', value: '4 Car Parks per Villa' }
    ],

    narrative: [
      {
        tag: 'The Central Park',
        headline: 'A Green View, Built Into Every Home.',
        paragraphs: [
          'All 37 villas at Hillside face a one-acre central park.',
          'Traffic-free outdoor spaces turn that shared green into a place for walking, play and everyday time outside.',
          'A community where the view from your window is always worth looking at.'
        ],
        image: imgHillside,
        imageCaption: '1-Acre Central Park · All 37 Villas Face the Green'
      },
      {
        tag: 'Villa Design',
        headline: 'A Home That Makes Room for Everything.',
        paragraphs: [
          'The 4 BHK villas go well beyond bedrooms, with two family living areas, a drawing room, home theatre and office.',
          'Family time, work, guests and downtime each have room of their own.',
          'Plots ranging from 385 to 447 Sq. Yds. mean each villa has generous space around it as well.'
        ],
        image: imgHillside,
        imageCaption: '4 BHK Villas · 385 – 447 Sq. Yds. · 4 Covered Car Parks'
      },
      {
        tag: 'Location',
        headline: 'Gandipet Around You. The City Within Reach.',
        paragraphs: [
          'Set in Gandipet, Hillside stays connected to the Financial District and Hyderabad\'s western business corridor.',
          'The natural landscape of Gandipet forms the backdrop, while the city remains within easy reach.',
          'A villa address that balances open living with urban access.'
        ],
        image: imgHillside,
        imageCaption: 'Gandipet · Financial District Corridor · Western Hyderabad'
      }
    ],

    amenitiesHeader: {
      eyebrow: 'Lifestyle Features & Amenities',
      title: 'An Outdoor Life, Supported by Every Convenience',
      description: 'Hillside centres everyday life around its one-acre central park and 80,000 Sft of podium landscaping, supported by a full clubhouse and community facilities.'
    },
    amenityCategories: [
      {
        title: 'Green Spaces & Outdoors',
        badge: 'Nature Living',
        items: ['1-Acre Central Park', 'Approx. 80,000 Sft Podium Landscaping', 'Traffic-Free Outdoor Spaces', 'Jogging Track', 'Kids\' Play Area']
      },
      {
        title: 'Wellness & Fitness',
        badge: 'Active Wellbeing',
        items: ['Swimming Pool', 'Gymnasium', 'Yoga & Meditation Area', 'Squash Court']
      },
      {
        title: 'Clubhouse & Social',
        badge: 'Club Experience',
        items: ['Clubhouse', 'Party Hall', 'Cards Room', 'Library', 'Table Tennis', 'Billiards', 'Guest Rooms', 'Business Centre', 'Drivers\' Restrooms']
      },
      {
        title: 'Infrastructure & Security',
        badge: 'Peace of Mind',
        items: ['4 Covered Car Parks per Villa', '24×7 Security', 'CCTV Surveillance', 'Power Backup']
      }
    ],

    experience: {
      eyebrow: 'Explore Hillside',
      headline: 'See Northstar Hillside',
      shortLine: 'Explore Hillside through real villa imagery, master plans, floor plans and community spaces.',
      tabs: [
        { id: 'photos', label: 'Photos', desc: 'Real photography of Hillside villas, central park and community spaces.' },
        { id: 'floorplan', label: 'Floor Plan', desc: '4 BHK villa floor plan and room configurations.' },
        { id: 'brochure', label: 'Brochure', desc: 'Official Hillside project brochure.' }
      ]
    },

    neighbourhood: {
      eyebrow: 'Strategic Location',
      title: 'Around the Neighbourhood',
      subtitle: 'Set in Gandipet — connected to the Financial District, Gachibowli and Hyderabad\'s western business corridor.',
      landmarks: [
        { name: 'Gandipet Lake (Osman Sagar)', distance: 'Nearby', time: '5 min' },
        { name: 'Financial District / Gachibowli', distance: '~10 km', time: '18 min' },
        { name: 'HITEC City', distance: '~15 km', time: '25 min' },
        { name: 'Oakridge International School', distance: '~8 km', time: '15 min' },
        { name: 'Continental Hospitals', distance: '~12 km', time: '20 min' }
      ]
    },

    locationDetails: {
      eyebrow: 'Project Location',
      title: 'In Gandipet, Hyderabad',
      addressTitle: 'Northstar Hillside',
      addressLines: [
        'Survey No. 1213, Gandipet Village,',
        'Gandipet Mandal, Hyderabad,',
        'Telangana – 500075'
      ],
      googleMapLink: 'https://maps.google.com/?q=Northstar+Hillside+Gandipet+Hyderabad',
      embedMapUrl: 'https://maps.google.com/maps?q=Northstar+Hillside+Gandipet+Hyderabad&hl=en&z=15&output=embed'
    },

    enquiry: {
      eyebrow: 'Get in Touch',
      title: 'Enquire About Northstar Hillside',
      subtitle: 'Connect with our team for resale availability, site walkthroughs and villa details.',
      options: ['4 BHK Villa Resale Enquiry', 'General Enquiry'],
      plotSizes: ['4 BHK Villa (385 – 447 Sq. Yds.)']
    }
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // VEDA  (Completed)
  // ─────────────────────────────────────────────────────────────────────────────
  veda: {
    id: 'veda',
    name: 'Northstar Veda',
    shortName: 'Veda',
    headerTitle: 'Privacy, Built Into Every Floor.',
    status: 'Completed',
    statusBadge: 'Delivered',
    type: 'Luxury Apartment Community',
    city: 'Hyderabad',
    location: 'Himayatnagar, Hyderabad',
    heroImage: imgVeda,
    logo: logoVeda,
    rera: 'TS RERA Registered',
    reraAuthority: 'TS RERA',
    reraLink: 'https://rera.telangana.gov.in/',
    brochureUrl: 'https://drive.google.com/drive/folders/1BknCylJM1Q9Y4n1BLMWjmp7fAWQY8jOG',
    projectLink: '#',
    walkthroughVideoLink: '#',
    googleMapLink: 'https://maps.google.com/?q=Northstar+Veda+Himayatnagar+Hyderabad',
    googleMapEmbed: 'https://maps.google.com/maps?q=Northstar+Veda+Himayatnagar+Hyderabad&hl=en&z=15&output=embed',

    specs: [
      { label: 'Status', value: 'Completed' },
      { label: 'Project Type', value: 'Luxury Apartment Community' },
      { label: 'Total Residences', value: '20 Apartments' },
      { label: 'Homes per Floor', value: '4 Apartments per Floor' },
      { label: 'Floors', value: '5 Floors' },
      { label: 'Location', value: 'Himayatnagar, Hyderabad' }
    ],

    narrative: [
      {
        tag: 'Privacy & Scale',
        headline: 'Privacy, Built Into Every Floor.',
        paragraphs: [
          'With only four homes on each floor, Veda keeps everyday living more personal.',
          'Just 20 residences across five levels bring a welcome sense of privacy to life in the middle of the city.',
          'A building that feels like a home — not a housing complex.'
        ],
        image: imgVeda,
        imageCaption: 'Northstar Veda · Himayatnagar, Hyderabad'
      },
      {
        tag: 'Natural Light',
        headline: 'Light Finds Its Way In.',
        paragraphs: [
          'The larger homes open to sky on three sides, while the other residences open on two.',
          'Together with bay windows, that planning brings more daylight and air into everyday spaces.',
          'Homes designed so that light is part of living — not something you have to seek out.'
        ],
        image: imgVeda,
        imageCaption: 'Triple-Aspect Homes & Bay Windows · Natural Light Planning'
      },
      {
        tag: 'Location',
        headline: 'Himayatnagar. The City Is Already Around You.',
        paragraphs: [
          'Himayatnagar is one of Hyderabad\'s most established and well-connected neighbourhoods.',
          'Healthcare, schools, restaurants, shopping and metro connectivity are all within easy reach.',
          'Veda places you at the centre of a neighbourhood that has been part of Hyderabad\'s fabric for decades.'
        ],
        image: imgVeda,
        imageCaption: 'Himayatnagar · Central Hyderabad Connectivity'
      }
    ],

    amenitiesHeader: {
      eyebrow: 'Lifestyle Features & Amenities',
      title: 'Quiet Living, Well Supported',
      description: 'Veda brings together landscape design, home automation, and essential building infrastructure within an intimate 20-residence community in central Hyderabad.'
    },
    amenityCategories: [
      {
        title: 'Outdoor & Landscape',
        badge: 'Nature Living',
        items: ['2 Spacious Tot-Lots', 'Kids\' Play Area', 'Designer Landscaping']
      },
      {
        title: 'Wellness & Fitness',
        badge: 'Active Living',
        items: ['Gymnasium', 'Club House']
      },
      {
        title: 'Technology & Convenience',
        badge: 'Smart Home',
        items: ['Home Automation', 'V3F Lift', 'Intercom', '24-Hour Water Supply', 'Power Backup', 'Fire Fighting System']
      },
      {
        title: 'Parking & Security',
        badge: 'Essentials',
        items: ['Cellar & Stilt Parking', 'Visitor Parking', '24×7 Security']
      }
    ],

    experience: {
      eyebrow: 'Explore Veda',
      headline: 'See Northstar Veda',
      shortLine: 'Explore Veda through completed imagery, floor plans and project details.',
      tabs: [
        { id: 'photos', label: 'Photos', desc: 'Photography of Northstar Veda residences and community.' },
        { id: 'floorplan', label: 'Floor Plan', desc: 'Apartment floor plan configurations.' },
        { id: 'brochure', label: 'Brochure', desc: 'Project brochure.' }
      ]
    },

    neighbourhood: {
      eyebrow: 'Central Hyderabad',
      title: 'Around the Neighbourhood',
      subtitle: 'Placed in Himayatnagar — one of Hyderabad\'s most established and best-connected central neighbourhoods.',
      landmarks: [
        { name: 'Himayatnagar Main Road', distance: 'Adjacent', time: '1 min' },
        { name: 'Necklace Road', distance: '~2 km', time: '5 min' },
        { name: 'Hyderabad Public School', distance: '~1.5 km', time: '4 min' },
        { name: 'Yashoda Hospitals', distance: '~2 km', time: '5 min' },
        { name: 'Paradise / Secunderabad', distance: '~5 km', time: '10 min' }
      ]
    },

    locationDetails: {
      eyebrow: 'Project Location',
      title: 'In Himayatnagar, Hyderabad',
      addressTitle: 'Northstar Veda',
      addressLines: [
        'Door No. 3-6-533 & 534, Street No. 7,',
        'Himayatnagar,',
        'Hyderabad – 500029'
      ],
      googleMapLink: 'https://maps.google.com/?q=Northstar+Veda+Himayatnagar+Hyderabad',
      embedMapUrl: 'https://maps.google.com/maps?q=Northstar+Veda+Himayatnagar+Hyderabad&hl=en&z=15&output=embed'
    },

    enquiry: {
      eyebrow: 'Get in Touch',
      title: 'Enquire About Northstar Veda',
      subtitle: 'Connect with our team for resale availability and project details.',
      options: ['Apartment Resale Enquiry', 'General Enquiry'],
      plotSizes: ['Luxury Apartment']
    }
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // EDEN GARDENS  (Completed)
  // ─────────────────────────────────────────────────────────────────────────────
  'eden-gardens': {
    id: 'eden-gardens',
    name: 'Northstar Eden Garden',
    shortName: 'Eden Garden',
    headerTitle: 'Built to Let Vizag In.',
    status: 'Completed',
    statusBadge: 'Delivered',
    type: 'Completed Residential Apartment Community',
    city: 'Visakhapatnam',
    location: 'Venkojipalem / near MVP Colony, Visakhapatnam',
    heroImage: imgEdenGardens,
    heroVideo: heroVideoPlaceholder,
    logo: logoEdenGardens,
    rera: 'P03280080465',
    reraAuthority: 'AP RERA',
    reraLink: 'https://rera.ap.gov.in/',
    brochureUrl: 'https://drive.google.com/drive/folders/1O7Xj1VkINCA-brJrDZDcSwwkkDYKm5P1',
    floorPlanLink: 'https://drive.google.com/drive/folders/10K46s-_0A8eM-PQIw9rzFAwwxYOCeKKI',
    projectLink: '#',
    walkthroughVideoLink: 'https://drive.google.com/drive/folders/1W6v6oUcOb-9py1vLDwZq-BNg-wRUiSCg',
    googleMapLink: 'https://maps.google.com/?q=Northstar+Eden+Garden+Visakhapatnam',
    googleMapEmbed: 'https://maps.google.com/maps?q=Northstar+Eden+Garden+Visakhapatnam&hl=en&z=15&output=embed',

    specs: [
      { label: 'Status', value: 'Completed' },
      { label: 'Project Type', value: 'Residential Apartment Community' },
      { label: 'Land Extent', value: '2.2 Acres' },
      { label: 'Total Residences', value: '115 Apartments' },
      { label: 'Home Types', value: '3 BHK, 3.5 BHK & 4 BHK' },
      { label: 'Unit Sizes', value: '1,788 – 3,584 Sft' },
      { label: 'Planning', value: 'Tower A & Tower B' },
      { label: 'Clubhouse', value: '14,000 Sft' },
      { label: 'RERA Registration', value: 'P03280080465' }
    ],

    narrative: [
      {
        tag: 'Planning',
        headline: 'Built to Let Vizag In.',
        paragraphs: [
          'Eden Garden\'s T-shaped plan opens every residence to natural light and sea breeze.',
          'A thoughtful piece of planning that lets the city\'s coastal character become part of everyday life.',
          'Homes designed to work with Vizag\'s climate — not against it.'
        ],
        image: imgEdenGardens,
        imageCaption: 'T-Shaped Planning · Natural Light & Coastal Breeze · Eden Garden'
      },
      {
        tag: 'Privacy & Space',
        headline: 'More Privacy. More Space to Belong.',
        paragraphs: [
          'Private corridors for every apartment and generous balconies bring more separation, openness and individuality to everyday living.',
          'Simple planning choices that make coming home feel more personal.',
          'At 1,788 to 3,584 Sft, these are homes that give family life real room to unfold.'
        ],
        image: imgEdenGardens,
        imageCaption: 'Private Corridors & Generous Balconies · 1,788 – 3,584 Sft'
      },
      {
        tag: 'Location',
        headline: 'The Hills. The Sea. The City Within Reach.',
        paragraphs: [
          'Set in Venkojipalem, near MVP Colony, Eden Garden keeps Kailasagiri, the coast and the established conveniences of Vizag all within reach.',
          'A residential address that lets the city\'s best qualities become part of daily life.',
          'The hills, the sea and the city — all from one address.'
        ],
        image: imgEdenGardens,
        imageCaption: 'Near Kailasagiri & Vizag Coast · MVP Colony Proximity'
      }
    ],

    amenitiesHeader: {
      eyebrow: 'Lifestyle Features & Amenities',
      title: 'Community Spaces Designed for Vizag Life',
      description: 'Eden Garden brings together a 14,000 Sft clubhouse, wellness facilities and recreation spaces planned around the coastal lifestyle of Visakhapatnam.'
    },
    amenityCategories: [
      {
        title: 'Wellness & Fitness',
        badge: 'Active Living',
        items: ['Gymnasium', 'Yoga & Meditation Area', 'Swimming Pool']
      },
      {
        title: 'Sports & Recreation',
        badge: 'Activity',
        items: ['Basketball Court', 'Kids\' Play Area', 'Theatre / Screening Room']
      },
      {
        title: 'Clubhouse & Social',
        badge: 'Community',
        items: ['14,000 Sft Clubhouse', 'Party Hall', 'Community Spaces']
      },
      {
        title: 'Infrastructure & Security',
        badge: 'Essentials',
        items: ['24×7 Security', 'CCTV Surveillance', 'Power Backup', 'Car Parking', 'Lifts']
      }
    ],

    experience: {
      eyebrow: 'Explore Eden Garden',
      headline: 'See Northstar Eden Garden',
      shortLine: 'Explore Eden Garden through real imagery, floor plans and a project walkthrough video.',
      tabs: [
        { id: 'photos', label: 'Photos', desc: 'Real photography of Eden Garden apartments and community.' },
        { id: 'videos', label: 'Walkthrough', desc: 'Video walkthrough of Northstar Eden Garden.' },
        { id: 'floorplan', label: 'Floor Plan', desc: '3 BHK, 3.5 BHK & 4 BHK floor plan configurations.' },
        { id: 'brochure', label: 'Brochure', desc: 'Official Eden Garden project brochure.' }
      ]
    },

    neighbourhood: {
      eyebrow: 'Visakhapatnam Location',
      title: 'Around the Neighbourhood',
      subtitle: 'Set in Venkojipalem near MVP Colony — close to Kailasagiri, the coast and Vizag\'s established conveniences.',
      landmarks: [
        { name: 'MVP Colony', distance: 'Nearby', time: '5 min' },
        { name: 'Kailasagiri', distance: '~5 km', time: '10 min' },
        { name: 'Ramakrishna Beach', distance: '~6 km', time: '12 min' },
        { name: 'Vizag Steel Plant', distance: '~8 km', time: '15 min' },
        { name: 'Visakhapatnam Airport', distance: '~12 km', time: '20 min' }
      ]
    },

    locationDetails: {
      eyebrow: 'Project Location',
      title: 'In Venkojipalem, Visakhapatnam',
      addressTitle: 'Northstar Eden Garden',
      addressLines: [
        'Plot No. 301A, S.No. 167, NH-16, Chinagadili Village,',
        'Behind CMR Function Hall, Sector 6,',
        'Venkojipalem, Visakhapatnam – 530017'
      ],
      googleMapLink: 'https://maps.google.com/?q=Northstar+Eden+Garden+Visakhapatnam',
      embedMapUrl: 'https://maps.google.com/maps?q=Northstar+Eden+Garden+Visakhapatnam&hl=en&z=15&output=embed'
    },

    enquiry: {
      eyebrow: 'Get in Touch',
      title: 'Enquire About Northstar Eden Garden',
      subtitle: 'Connect with our team for resale availability, site walkthroughs and project details.',
      options: ['3 BHK Apartment', '3.5 BHK Apartment', '4 BHK Apartment'],
      plotSizes: ['3 BHK (1,788 – 2,200 Sft)', '3.5 BHK (2,400 – 2,800 Sft)', '4 BHK (3,000 – 3,584 Sft)']
    }
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // LEELA  (Completed)
  // ─────────────────────────────────────────────────────────────────────────────
  leela: {
    id: 'leela',
    name: 'Northstar Leela',
    shortName: 'Leela',
    headerTitle: 'City Living, Kept More Personal.',
    status: 'Completed',
    statusBadge: 'Delivered',
    type: 'Completed Residential Apartment Community',
    city: 'Hyderabad',
    location: 'Padmarao Nagar, Secunderabad',
    heroImage: imgLeela,
    logo: logoLeela,
    rera: 'P02500001215',
    reraAuthority: 'TS RERA',
    reraLink: 'https://rera.telangana.gov.in/',
    brochureUrl: 'https://drive.google.com/drive/folders/1JB2ajY-wS2D5XkbMLs_MQfkBj3XBP3UQ',
    projectLink: '#',
    walkthroughVideoLink: '#',
    googleMapLink: 'https://maps.google.com/?q=Northstar+Leela+Padmarao+Nagar+Secunderabad',
    googleMapEmbed: 'https://maps.google.com/maps?q=Northstar+Leela+Padmarao+Nagar+Secunderabad&hl=en&z=15&output=embed',

    specs: [
      { label: 'Status', value: 'Completed' },
      { label: 'Project Type', value: 'Residential Apartment Community' },
      { label: 'Land Extent', value: '2,850 Sq. Yds.' },
      { label: 'Total Residences', value: '30 Apartments' },
      { label: 'Home Types', value: '3 BHK & 4 BHK' },
      { label: 'Unit Sizes', value: '1,958 – 2,917 Sft' },
      { label: 'Structure', value: 'G + 5 Floors' },
      { label: 'Facing', value: 'East & West Facing Homes' },
      { label: 'RERA Registration', value: 'P02500001215' }
    ],

    narrative: [
      {
        tag: 'Scale & Community',
        headline: 'City Living, Kept More Personal.',
        paragraphs: [
          'With just 30 residences, Leela keeps apartment living on a more personal scale.',
          'Generous 3 and 4 BHK homes, from 1,958 to 2,917 Sq. Ft., give family life more room to unfold.',
          'A building where you know your neighbours — and that feels like it was built for you.'
        ],
        image: imgLeela,
        imageCaption: 'Northstar Leela · Padmarao Nagar, Secunderabad'
      },
      {
        tag: 'Planning & Light',
        headline: 'Designed to Feel Open, From the Way In.',
        paragraphs: [
          'Daylight enters the basement through an open-sky area.',
          'Landscaped lift lobbies bring greenery into arrival spaces, and the homes are planned for abundant natural light and ventilation.',
          'A building that starts feeling like home the moment you walk in.'
        ],
        image: imgLeela,
        imageCaption: 'Open-Sky Basement, Landscaped Lobbies & Light Planning'
      },
      {
        tag: 'Neighbourhood',
        headline: 'Everything You Need, Already Around You.',
        paragraphs: [
          'Padmarao Nagar is one of Secunderabad\'s most established and well-serviced neighbourhoods.',
          'Rail, metro, healthcare, shopping and everyday conveniences are all within comfortable reach.',
          'At Leela, the city is already around you — without you having to go looking for it.'
        ],
        image: imgLeela,
        imageCaption: 'Padmarao Nagar · Rail, Metro & Everyday Connectivity'
      }
    ],

    amenitiesHeader: {
      eyebrow: 'Lifestyle Features & Amenities',
      title: 'Intimate Living with the Right Amenities',
      description: 'Leela\'s rooftop terrace brings a swimming pool, party area and gym provision to 30 families, creating shared spaces that enhance everyday life without overwhelming the building\'s intimate character.'
    },
    amenityCategories: [
      {
        title: 'Rooftop Lifestyle',
        badge: 'Terrace Living',
        items: ['Terrace Swimming Pool', 'Terrace Party Area', 'Gym Provision on Terrace']
      },
      {
        title: 'Family & Community',
        badge: 'Togetherness',
        items: ['Kids\' Play Area', 'Landscaped Lift Lobbies', 'Open-Sky Basement']
      },
      {
        title: 'Infrastructure & Security',
        badge: 'Essentials',
        items: ['24×7 Security', 'CCTV Surveillance', 'Power Backup', 'Car Parking', 'Lifts', 'Intercom']
      }
    ],

    experience: {
      eyebrow: 'Explore Leela',
      headline: 'See Northstar Leela',
      shortLine: 'Explore Leela through completed imagery, floor plans and project details.',
      tabs: [
        { id: 'photos', label: 'Photos', desc: 'Photography of Northstar Leela apartments and community.' },
        { id: 'floorplan', label: 'Floor Plan', desc: '3 BHK & 4 BHK floor plan configurations.' },
        { id: 'brochure', label: 'Brochure', desc: 'Official Leela project brochure.' }
      ]
    },

    neighbourhood: {
      eyebrow: 'Secunderabad Location',
      title: 'Around the Neighbourhood',
      subtitle: 'Placed in Padmarao Nagar — one of Secunderabad\'s most established neighbourhoods, with rail, metro and everyday conveniences nearby.',
      landmarks: [
        { name: 'Secunderabad Railway Station', distance: '~2 km', time: '5 min' },
        { name: 'Secunderabad Metro Station', distance: '~2.5 km', time: '6 min' },
        { name: 'Paradise / MG Road', distance: '~3 km', time: '8 min' },
        { name: 'Apollo Hospital', distance: '~4 km', time: '10 min' },
        { name: 'Hyderabad Public School', distance: '~3.5 km', time: '8 min' }
      ]
    },

    locationDetails: {
      eyebrow: 'Project Location',
      title: 'In Padmarao Nagar, Secunderabad',
      addressTitle: 'Northstar Leela',
      addressLines: [
        'Plot Nos. 6-1-120 to 6-1-124, Walker Town 18,',
        'Padmarao Nagar,',
        'Secunderabad – 500025'
      ],
      googleMapLink: 'https://maps.google.com/?q=Northstar+Leela+Padmarao+Nagar+Secunderabad',
      embedMapUrl: 'https://maps.google.com/maps?q=Northstar+Leela+Padmarao+Nagar+Secunderabad&hl=en&z=15&output=embed'
    },

    enquiry: {
      eyebrow: 'Get in Touch',
      title: 'Enquire About Northstar Leela',
      subtitle: 'Connect with our team for resale availability and project details.',
      options: ['3 BHK Apartment', '4 BHK Apartment'],
      plotSizes: ['3 BHK (1,958 – 2,400 Sft)', '4 BHK (2,600 – 2,917 Sft)']
    }
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // AMG PLAZA  (Completed)
  // ─────────────────────────────────────────────────────────────────────────────
  'amg-plaza': {
    id: 'amg-plaza',
    name: 'Northstar AMG Plaza',
    shortName: 'AMG Plaza',
    headerTitle: 'Built to Be Seen. Planned to Be Reached.',
    status: 'Completed',
    statusBadge: 'Delivered',
    type: 'Completed Commercial Development',
    city: 'Hyderabad',
    location: 'West Marredpally, Secunderabad',
    heroImage: imgAmgPlaza,
    logo: logoAmgPlaza,
    rera: 'TS RERA Registered',
    reraAuthority: 'TS RERA',
    reraLink: 'https://rera.telangana.gov.in/',
    brochureUrl: 'https://drive.google.com/drive/folders/1c2dmWqYfQH11jSIALQBinqakQNJZOgDg',
    projectLink: '#',
    walkthroughVideoLink: '#',
    googleMapLink: 'https://maps.google.com/?q=Northstar+AMG+Plaza+West+Marredpally+Secunderabad',
    googleMapEmbed: 'https://maps.google.com/maps?q=Northstar+AMG+Plaza+West+Marredpally+Secunderabad&hl=en&z=15&output=embed',

    specs: [
      { label: 'Status', value: 'Completed' },
      { label: 'Project Type', value: 'Commercial Development' },
      { label: 'Total Saleable Area', value: '43,651 Sft' },
      { label: 'Structure', value: '2 Basements + Ground + 4 Floors' },
      { label: 'Lower Floors', value: 'Retail' },
      { label: 'Upper Floors', value: 'Commercial / Service Uses' },
      { label: 'Fourth Floor', value: 'Planned Dining / Restaurant Space' },
      { label: 'Parking', value: 'Two Basement Levels + Front / Side Parking' }
    ],

    narrative: [
      {
        tag: 'Visibility & Access',
        headline: 'Built to Be Seen. Planned to Be Reached.',
        paragraphs: [
          'AMG Plaza\'s dual-facing design gives businesses visibility from either side, while separate access for motorists and pedestrians keeps movement straightforward.',
          'Commercial planning shaped equally around attention and access.',
          'A building that works as hard for the businesses inside it as for the people who visit them.'
        ],
        image: imgAmgPlaza,
        imageCaption: 'Northstar AMG Plaza · Dual-Facing Commercial Building · West Marredpally'
      },
      {
        tag: 'Mixed Use',
        headline: 'One Address. More Reasons to Walk In.',
        paragraphs: [
          'Retail occupies the lower levels, service-oriented businesses were planned above, and the fourth floor was conceived around dining.',
          'Different levels were given different roles, creating more than one reason to visit the building.',
          'A development where the mix of uses creates footfall — and footfall creates value.'
        ],
        image: imgAmgPlaza,
        imageCaption: 'Multi-Level Mixed Use · Retail, Commercial & Dining'
      },
      {
        tag: 'The Neighbourhood',
        headline: 'The Neighbourhood Was Part of the Plan.',
        paragraphs: [
          'West Marredpally is an established commercial and residential neighbourhood in Secunderabad.',
          'AMG Plaza is placed to serve the daily needs of the area while drawing from a wider catchment.',
          'A commercial address built for where the neighbourhood already was — and where it is heading.'
        ],
        image: imgAmgPlaza,
        imageCaption: 'West Marredpally · Established Commercial Neighbourhood · Secunderabad'
      }
    ],

    amenitiesHeader: {
      eyebrow: 'Building Features & Planning',
      title: 'Commercial Infrastructure Planned for Business Success',
      description: 'AMG Plaza is planned around dual-facing visibility, multi-purpose floor use and efficient access — giving every business the platform it needs.'
    },
    amenityCategories: [
      {
        title: 'Visibility & Access',
        badge: 'Commercial Planning',
        items: ['Dual-Facing Commercial Frontage', 'Separate Motorist & Pedestrian Access', 'Ground Floor Retail', 'First Floor Retail']
      },
      {
        title: 'Business & Dining',
        badge: 'Mixed Use',
        items: ['2nd & 3rd Floor Commercial / Service Uses', '4th Floor Dining / Restaurant Space']
      },
      {
        title: 'Parking & Infrastructure',
        badge: 'Essentials',
        items: ['Two Basement Parking Levels', 'Front & Side Parking', 'Power Backup', 'Lifts', '24×7 Security']
      }
    ],

    experience: {
      eyebrow: 'Explore AMG Plaza',
      headline: 'See Northstar AMG Plaza',
      shortLine: 'Explore AMG Plaza through project imagery and commercial floor plans.',
      tabs: [
        { id: 'photos', label: 'Photos', desc: 'Photography of AMG Plaza building and commercial spaces.' },
        { id: 'floorplan', label: 'Floor Plan', desc: 'Commercial floor plan configurations across all levels.' },
        { id: 'brochure', label: 'Brochure', desc: 'Official AMG Plaza project brochure.' }
      ]
    },

    neighbourhood: {
      eyebrow: 'Secunderabad Location',
      title: 'Around the Neighbourhood',
      subtitle: 'Placed in West Marredpally — an established commercial and residential neighbourhood in Secunderabad with strong footfall and connectivity.',
      landmarks: [
        { name: 'West Marredpally Main Road', distance: 'Adjacent', time: '1 min' },
        { name: 'Secunderabad Railway Station', distance: '~3 km', time: '8 min' },
        { name: 'Secunderabad Bus Stand', distance: '~2.5 km', time: '6 min' },
        { name: 'Paradise / MG Road', distance: '~3 km', time: '8 min' },
        { name: 'Hyderabad Airport (via PVNR Expressway)', distance: '~30 km', time: '40 min' }
      ]
    },

    locationDetails: {
      eyebrow: 'Project Location',
      title: 'In West Marredpally, Secunderabad',
      addressTitle: 'Northstar AMG Plaza',
      addressLines: [
        'E Marredpally Road, Nehru Nagar Colony,',
        'West Marredpally,',
        'Secunderabad – 500026'
      ],
      googleMapLink: 'https://maps.google.com/?q=Northstar+AMG+Plaza+West+Marredpally+Secunderabad',
      embedMapUrl: 'https://maps.google.com/maps?q=Northstar+AMG+Plaza+West+Marredpally+Secunderabad&hl=en&z=15&output=embed'
    },

    enquiry: {
      eyebrow: 'Get in Touch',
      title: 'Enquire About Northstar AMG Plaza',
      subtitle: 'Connect with our team for commercial space availability and leasing details.',
      options: ['Retail Space Enquiry', 'Commercial / Office Space Enquiry', 'Restaurant / Dining Space Enquiry', 'General Enquiry'],
      plotSizes: ['Ground / First Floor Retail', '2nd / 3rd Floor Commercial', '4th Floor Dining / Restaurant']
    }
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // GARDEN SUITES  (Completed)
  // ─────────────────────────────────────────────────────────────────────────────
  'garden-suites': {
    id: 'garden-suites',
    name: 'Northstar Garden Suites',
    shortName: 'Garden Suites',
    headerTitle: 'A Floor to Yourself. Privacy Comes Naturally.',
    status: 'Completed',
    statusBadge: 'Delivered',
    type: 'Limited Edition Luxury Apartments',
    city: 'Hyderabad',
    location: 'Road No. 12, Banjara Hills, Hyderabad',
    heroImage: imgGardenSuites,
    logo: logoGardenSuites,
    rera: 'TS RERA Registered',
    reraAuthority: 'TS RERA',
    reraLink: 'https://rera.telangana.gov.in/',
    brochureUrl: 'https://drive.google.com/drive/folders/15KzJWYiw6latUxn7po5rSw3CPfck-8pW',
    projectLink: '#',
    walkthroughVideoLink: '#',
    googleMapLink: 'https://maps.google.com/?q=Northstar+Garden+Suites+Banjara+Hills+Hyderabad',
    googleMapEmbed: 'https://maps.google.com/maps?q=Northstar+Garden+Suites+Banjara+Hills+Hyderabad&hl=en&z=15&output=embed',

    specs: [
      { label: 'Status', value: 'Completed' },
      { label: 'Project Type', value: 'Limited Edition Luxury Apartments' },
      { label: 'Total Residences', value: '4 Apartments' },
      { label: 'Homes per Floor', value: '1 Apartment per Floor' },
      { label: 'Apartment Size', value: 'Approx. 4,000 Sft Each' },
      { label: 'Location', value: 'Road No. 12, Banjara Hills, Hyderabad' },
      { label: 'Completion', value: 'Delivered' }
    ],

    narrative: [
      {
        tag: 'Privacy & Exclusivity',
        headline: 'A Floor to Yourself. Privacy Comes Naturally.',
        paragraphs: [
          'Garden Suites was created as just four 4,000 Sq. Ft. residences, with one home on every floor.',
          'A smaller residential setting where space feels more personal and coming home feels distinctly your own.',
          'The kind of address where privacy is not an extra — it is built into the very structure of the building.'
        ],
        image: imgGardenSuites,
        imageCaption: 'Northstar Garden Suites · One Home Per Floor · Banjara Hills'
      },
      {
        tag: 'Design & Nature',
        headline: 'The Outdoors, Woven Into the Home.',
        paragraphs: [
          'Double-height sit-outs, hanging gardens and generous openings bring light, air and greenery into the living spaces.',
          'The interiors open naturally towards balconies, making outdoor space part of everyday life.',
          'At Garden Suites, the boundary between inside and outside is intentionally softened.'
        ],
        image: imgGardenSuites,
        imageCaption: 'Double-Height Sit-Outs, Hanging Gardens & Generous Balconies'
      },
      {
        tag: 'The Address',
        headline: 'Banjara Hills, From a Quieter Point of View.',
        paragraphs: [
          'Road No. 12, Banjara Hills is one of Hyderabad\'s most coveted residential addresses.',
          'Garden Suites takes that address and distils it into just four homes — a quieter, more private interpretation of Banjara Hills living.',
          'All that Banjara Hills offers, without the compromise of density.'
        ],
        image: imgGardenSuites,
        imageCaption: 'Road No. 12, Banjara Hills · Hyderabad\'s Premier Address'
      }
    ],

    amenitiesHeader: {
      eyebrow: 'Lifestyle Features & Amenities',
      title: 'Private Luxury at Every Level',
      description: 'Garden Suites is planned around private outdoor spaces, hanging gardens and curated amenities designed for four families who value privacy above all else.'
    },
    amenityCategories: [
      {
        title: 'Outdoor & Garden Spaces',
        badge: 'Nature Living',
        items: ['Landscaped Terrace Garden', 'Terrace Water Body', 'Gazebo', 'Barbeque Area', 'Outdoor Bar', 'Double-Height Sit-Outs', 'Hanging Gardens', 'Landscaped Sit-Outs']
      },
      {
        title: 'Wellness & Recreation',
        badge: 'Private Wellness',
        items: ['Gymnasium', 'Meditation Space', 'Kids\' Play Area']
      },
      {
        title: 'Technology & Security',
        badge: 'Smart Home',
        items: ['Home Automation', '24-Hour Security', 'CCTV Surveillance', 'Power Backup']
      }
    ],

    experience: {
      eyebrow: 'Explore Garden Suites',
      headline: 'See Northstar Garden Suites',
      shortLine: 'Explore Garden Suites through completed imagery, residence details and project brochure.',
      tabs: [
        { id: 'photos', label: 'Photos', desc: 'Photography of Garden Suites residences, terraces and gardens.' },
        { id: 'floorplan', label: 'Floor Plan', desc: '4,000 Sft apartment floor plan and outdoor space layout.' },
        { id: 'brochure', label: 'Brochure', desc: 'Official Garden Suites project brochure.' }
      ]
    },

    neighbourhood: {
      eyebrow: 'Banjara Hills Location',
      title: 'Around the Neighbourhood',
      subtitle: 'Placed on Road No. 12, Banjara Hills — one of Hyderabad\'s most prestigious addresses, surrounded by fine dining, healthcare and established connectivity.',
      landmarks: [
        { name: 'Banjara Hills Road No. 1 / 10 / 12', distance: 'Adjacent', time: '1 min' },
        { name: 'Care Hospitals Banjara Hills', distance: '~2 km', time: '5 min' },
        { name: 'Jubilee Hills', distance: '~3 km', time: '7 min' },
        { name: 'Hyderabad Public School', distance: '~5 km', time: '10 min' },
        { name: 'HITEC City', distance: '~10 km', time: '18 min' },
        { name: 'Rajiv Gandhi International Airport', distance: '~25 km', time: '35 min' }
      ]
    },

    locationDetails: {
      eyebrow: 'Project Location',
      title: 'On Road No. 12, Banjara Hills',
      addressTitle: 'Northstar Garden Suites',
      addressLines: [
        'Door No. 8-2-684/3/63 & 64, Banjara Green Colony,',
        'Road No. 12, Banjara Hills,',
        'Hyderabad – 500034'
      ],
      googleMapLink: 'https://maps.google.com/?q=Northstar+Garden+Suites+Banjara+Hills+Hyderabad',
      embedMapUrl: 'https://maps.google.com/maps?q=Northstar+Garden+Suites+Banjara+Hills+Hyderabad&hl=en&z=15&output=embed'
    },

    enquiry: {
      eyebrow: 'Get in Touch',
      title: 'Enquire About Northstar Garden Suites',
      subtitle: 'Connect with our team for resale availability and project details.',
      options: ['Luxury Apartment Resale Enquiry', 'General Enquiry'],
      plotSizes: ['4,000 Sft Luxury Apartment (1 per Floor)']
    }
  }

};
