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
import logoDistrict1 from '../assets/project-logos/district1.webp';
import logoHillside from '../assets/project-logos/hillside.webp';
import logoVeda from '../assets/project-logos/veda.webp';
import logoEdenGardens from '../assets/project-logos/eden-gardens.webp';
import logoLeela from '../assets/project-logos/leela.webp';
import logoAmgPlaza from '../assets/project-logos/amg-plaza.webp';
import logoGardenSuites from '../assets/project-logos/garden-suites.webp';
import heroVideoPlaceholder from '../assets/hero video eden compr.mp4';

export const projectsData = {
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
    heroVideo: heroVideoPlaceholder,
    logo: logoSanctuary,
    
    // External Client Assets (Google Drive / Maps)
    projectLink: 'https://drive.google.com/drive/folders/1ju7d9FRa4wjUwvqY8qmwMRNfTjWkY005',
    walkthroughVideoLink: 'https://drive.google.com/drive/folders/1ApGOQ_sPXZR3NO7wCh_a8mcv6emKtd4M',
    brochureUrl: 'https://drive.google.com/drive/folders/1-Jc3g8LpWF0eT0AKUDioSJrygyQtaJfa',
    masterPlanLink: 'https://drive.google.com/drive/folders/1PKJaHv_JINeH77CkH8fgKOEveA7N_Omq',
    googleMapLink: 'https://maps.google.com/maps?q=17.1587666,78.4787074',
    googleMapEmbed: 'https://maps.google.com/maps?q=17.1587666,78.4787074&hl=en&z=14&output=embed',

    // SECTION 2 — PROJECT IDENTITY SPECS BAR (Full Client Hero Specs)
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

    // SECTION 3 — EDITORIAL NARRATIVE & LIFESTYLE CHAPTERS (Lodha Style Alternating Stories)
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
          'At Sanctuary, the outdoors isn’t somewhere you visit — it is where life unfolds.'
        ],
        image: imgHillside,
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
        image: imgAirportBoulevard,
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
        image: imgEdenGardens,
        imageCaption: 'Clubhouse Amenities, Swimming Pool & Gathering Decks',
        placeholderNote: 'Clubhouse Facilities & Active Wellness Render'
      }
    ],

    // SECTION 4 — LIFESTYLE FEATURES & AMENITIES
    amenitiesHeader: {
      eyebrow: 'Lifestyle Features & Amenities',
      title: 'A Lifestyle Shaped by Greenery, Wellness and Community',
      description: 'Sanctuary is planned to make outdoor living a natural part of everyday life. The community brings together green landscapes, movement tracks, leisure spaces, clubhouse facilities, and reliable infrastructure to support a healthier and more relaxed lifestyle.'
    },
    amenityCategories: [
      {
        title: 'Green Living & Landscape',
        badge: 'Ecological Living',
        items: [
          'Pocket Parks',
          'Tree-Lined Avenues',
          'Dense Planting',
          'Flowering Trees',
          'Butterfly Garden',
          'Rain Garden',
          'Herbal & Medicinal Planting',
          'Native Grass Garden',
          'Food Garden',
          'Shaded Pathways'
        ]
      },
      {
        title: 'Movement & Outdoor Wellness',
        badge: 'Active Wellbeing',
        items: [
          'Dedicated Walking Track',
          'Dedicated Cycling Track',
          'Nature Trail',
          'Pebbled Pathways',
          'Open Green Spaces',
          'Cobbled Internal Roads',
          'Dedicated Vehicular Movement'
        ]
      },
      {
        title: 'Family & Community Spaces',
        badge: 'Togetherness',
        items: [
          'Children’s Play Area',
          'Gathering Courts',
          'Seating Areas',
          'Party Lawn',
          'Community Decks',
          'Spaces for family time and social gatherings'
        ]
      },
      {
        title: 'Clubhouse Facilities',
        badge: 'Club Experience',
        items: [
          'Swimming Pool',
          'Indoor Games',
          'Guest Room',
          'Gym',
          'Party Hall',
          'Cards Room',
          'Yoga Deck'
        ]
      },
      {
        title: 'Thoughtful Infrastructure & Security',
        badge: 'Engineered Standards',
        items: [
          '40 ft Main Road',
          '30 ft Internal Roads',
          'Underground Electrification',
          'Underground Drainage & Water Supply',
          'STP',
          'WTP',
          'Hydro-Pneumatic Water Supply',
          'Compound Wall with Solar Fencing',
          'CCTV',
          'Power Backup'
        ]
      }
    ],

    // SECTION 5 — EXPLORE THE EXPERIENCE (TABS)
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

    // SECTION 6 — BUILT WITH QUALITY (INTERACTIVE INFRASTRUCTURE HOTSPOTS)
    qualityInfrastructure: {
      eyebrow: 'Built with Quality',
      title: 'Thoughtful Infrastructure for a Better Living Experience',
      subtitle: 'Tap each point to explore the infrastructure, landscape and planning details that make Sanctuary a thoughtfully crafted community.',
      points: [
        { id: 'main-road', label: '40 ft Main Road', category: 'Roads', detail: 'Broad 40-foot arterial avenue built for smooth, stately two-way vehicular flow with dedicated tree canopies.' },
        { id: 'internal-road', label: '30 ft Internal Road', category: 'Roads', detail: '30-foot residential lanes planned so pedestrian movement and neighborly life stay peaceful and uncrowded.' },
        { id: 'cobbled-roads', label: 'Cobbled Stone Roads', category: 'Roads', detail: 'Classic cobbled pavers offering timeless aesthetics, natural rainwater percolation, and vehicle speed calming.' },
        { id: 'walking-track', label: 'Walking Track', category: 'Wellness', detail: 'Continuous, shaded perimeter walking track woven through lush pocket parks and flowering gardens.' },
        { id: 'cycling-track', label: 'Cycling Track', category: 'Wellness', detail: 'Dedicated, safe cycling avenue separated from primary car movement for children and fitness enthusiasts.' },
        { id: 'vehicular-movement', label: 'Vehicular Movement', category: 'Roads', detail: 'Engineered one-way and calming vehicular loops designed to keep residential clusters quiet.' },
        { id: 'stp', label: 'Sewage Treatment Plant (STP)', category: 'Utilities', detail: 'Advanced on-site STP providing recycled treated water for community landscaping and green belts.' },
        { id: 'wtp', label: 'Water Treatment Plant (WTP)', category: 'Utilities', detail: 'Central filtration and purification plant delivering safe, pressurized potable water to all homes.' },
        { id: 'underground-elec', label: 'Underground Electrification', category: 'Utilities', detail: 'Zero overhead wires. All high-tension and domestic electric lines routed through underground conduits.' },
        { id: 'underground-drainage', label: 'Underground Drainage', category: 'Utilities', detail: 'Fully enclosed underground storm-water and sanitary drainage preventing surface water logging.' },
        { id: 'underground-water', label: 'Underground Water Supply', category: 'Utilities', detail: 'Concealed ring main water supply lines laid before plot handovers to preserve road longevity.' },
        { id: 'hydro-pneumatic', label: 'Hydro-Pneumatic Water Supply', category: 'Utilities', detail: 'Constant, balanced water pressure delivered to every plot and villa via pressurized hydro-pneumatic pumps.' },
        { id: 'compound-wall', label: 'Compound Wall', category: 'Security', detail: 'Solid, high-perimeter masonry compound wall enclosing the entire 14-acre private enclave.' },
        { id: 'solar-fencing', label: 'Solar Fencing', category: 'Security', detail: 'Energized solar perimeter security fencing running along the entire boundary with tamper detection.' },
        { id: 'cctv', label: 'CCTV Surveillance', category: 'Security', detail: 'Comprehensive 24/7 high-definition CCTV camera coverage across entry gates, boulevards, and parks.' },
        { id: 'power-backup', label: 'Power Backup', category: 'Utilities', detail: 'Dedicated diesel generator (DG) backup for streetlights, water pumps, clubhouse, and security systems.' }
      ]
    },

    // SECTION 7 — CONSTRUCTION PROGRESS
    constructionProgress: {
      eyebrow: 'Construction Progress',
      title: 'Watch Sanctuary Take Shape',
      subtitle: 'Follow the latest progress of Northstar Sanctuary through drone views, site photographs and regular project updates.',
      mediaTabs: ['Photos', 'Videos'],
      photos: [
        {
          id: 1,
          title: 'Perimeter Boundary & Solar Fencing',
          stage: '100% Completed',
          desc: 'High-perimeter masonry compound wall and energized solar security fencing fully installed across the 14-acre perimeter.',
          image: imgSanctuary
        },
        {
          id: 2,
          title: 'Underground Infrastructure (Drainage & Water)',
          stage: 'Advanced Stage',
          desc: 'Concealed underground storm drainage, pressurized ring main water supply conduits, and electrical networks laid.',
          image: imgHillside
        },
        {
          id: 3,
          title: '40ft Arterial Boulevard & Cobbled Avenues',
          stage: 'In Progress',
          desc: '40-foot main entrance boulevard base layer prepared with 30-foot residential internal cobbled streets undergoing paving.',
          image: imgAirportBoulevard
        },
        {
          id: 4,
          title: 'Landscape Development & Pocket Parks',
          stage: 'Active Planting',
          desc: 'Avenue tree plantations, native greenery, flowering gardens, and automated drip irrigation networks taking root.',
          image: imgAllura
        },
        {
          id: 5,
          title: 'Central Clubhouse Civil Works',
          stage: 'Structure Underway',
          desc: 'Foundational civil works, footings, and structural framing for the luxury clubhouse progressing on schedule.',
          image: imgEdenGardens
        }
      ],
      videos: [
        {
          id: 1,
          title: 'Aerial Drone Site Survey & Walkthrough',
          stage: 'Latest Drone Flight',
          desc: 'Full bird’s-eye perspective of the 14-acre master layout, 40ft avenues, boundary development, and natural topography.',
          video: heroVideoPlaceholder,
          poster: imgSanctuary
        },
        {
          id: 2,
          title: 'Infrastructure & Avenue Progress Walkthrough',
          stage: 'Ground Walkthrough',
          desc: 'On-ground cinematic documentation showing underground utility lines, avenue tree planting, and clubhouse structural progress.',
          video: heroVideoPlaceholder,
          poster: imgHillside
        }
      ],
      milestones: [
        { label: 'Site Boundary & Compound Wall', status: '100% Completed', note: 'Entire perimeter compound wall and solar fencing installed.' },
        { label: 'Underground Infrastructure (Drainage & Water)', status: 'Advanced Stage', note: 'Concealed underground utilities and storm drainage network laid.' },
        { label: 'Road Works & Cobbled Avenues', status: 'In Progress', note: '40ft main boulevard base work and 30ft internal roads undergoing paving.' },
        { label: 'Landscape & Pocket Parks', status: 'Active Planting', note: 'Tree transplantation, flowering gardens, and irrigation systems taking shape.' },
        { label: 'Clubhouse Civil Work', status: 'Structure Underway', note: 'Clubhouse foundations and structural framing progressing on schedule.' }
      ]
    },

    // SECTION 8 — AROUND THE NEIGHBOURHOOD
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

    // SECTION 9 — PROJECT LOCATION
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

    // SECTION 10 — START YOUR ENQUIRY
    enquiry: {
      eyebrow: 'Start Your Enquiry',
      title: 'Find Your Own Sanctuary',
      subtitle: 'Sanctuary is for those who dream of building a home around space, greenery, calm and long-term value. Share your details with us and our team will help you with plot availability, villa options, pricing, master plans, brochure and site visit assistance.',
      options: ['Plotted Development (343 – 1,000 Sq. Yds.)', 'Crafted Luxury Villa', 'Both Plots & Villas'],
      plotSizes: ['343 – 500 Sq. Yds. (Villa Plot)', '600 – 1,000 Sq. Yds. (Estate Plot)', 'Flexible / Customized']
    }
  },

  'district-1': {
    id: 'district-1',
    name: 'Northstar District 1',
    shortName: 'District 1',
    eyebrow: 'Award-Winning Apartment Architecture',
    status: 'Completed',
    statusBadge: 'Delivered',
    type: 'Completed Residential Apartment Community',
    city: 'Hyderabad',
    location: 'Financial District / Gachibowli, Hyderabad',
    tagline: 'Award-Winning Architecture in the Financial District',
    heroImage: imgDistrict1,
    logo: logoDistrict1,
    brochureUrl: '#',
    specs: [
      { label: 'Status', value: 'Completed' },
      { label: 'Project Type', value: 'Residential Apartments' },
      { label: 'Land Extent', value: 'Approx. 2 Acres' },
      { label: 'Total Residences', value: '149 Apartments' },
      { label: 'Home Type', value: '3 BHK (1,266 to 2,453 Sft)' },
      { label: 'Structure', value: '1 Tower | 15 Floors' },
      { label: 'Open Area', value: 'Approx. 70%' },
      { label: 'RERA Registration', value: 'P02400000557' }
    ],
    narrative: [
      {
        tag: 'Architectural Distinction',
        headline: 'Award-Winning Architecture in the Financial District.',
        description: 'District 1 brought a distinctive architectural identity to apartment living in the Financial District. Its approach to design went on to earn Northstar recognised honours in 2016 and 2017.',
        image: imgDistrict1,
        imageCaption: 'District 1 Tower Façade · Financial District, Gachibowli'
      },
      {
        tag: 'Open Spaces',
        headline: 'Room to Breathe, Even in the Financial District.',
        description: 'Around 70% of the two-acre development is kept open, giving the residential tower more space around it. A considered way of bringing openness into one of Hyderabad’s busiest urban districts.',
        image: imgDistrict1,
        imageCaption: '70% Open Landscaped Grounds & Podium'
      },
      {
        tag: 'Prime Connectivity',
        headline: 'Live Close to Where the City Works.',
        description: 'Set within Hyderabad’s Financial District, District 1 keeps major workplaces, healthcare, and the Gachibowli business ecosystem close at hand.',
        image: imgDistrict1,
        imageCaption: 'Gachibowli Tech Corridor & Healthcare Hub Proximity'
      }
    ],
    amenitiesHeader: {
      eyebrow: 'Lifestyle Features & Amenities',
      title: 'More Ways to Make the Day Your Own',
      description: 'District 1 brings wellness, sports, family recreation, and 24x7 convenience together in the heart of Gachibowli.'
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
        items: ['Clubhouse', 'Children’s Play Area', 'Party Lawn', 'Business Lounge']
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
      shortLine: 'Explore the finished tower, lifestyle amenities, and floor plans.',
      tabs: [
        { id: 'photos', label: 'Photos', desc: 'Completed photography of District 1.' },
        { id: 'videos', label: 'Videos', desc: 'Walkthrough video.' },
        { id: 'masterplan', label: 'Master Plan', desc: 'Site and tower footprint.' },
        { id: 'floorplan', label: 'Floor Plan', desc: '3 BHK unit configurations.' },
        { id: 'unitplan', label: 'Unit Plan', desc: 'Individual unit layouts and dimensions.' },
        { id: 'brochure', label: 'Brochure', desc: 'Download project brochure.' }
      ]
    },
    neighbourhood: {
      eyebrow: 'Prime Location',
      title: 'Around the Neighbourhood',
      subtitle: 'Set beside Continental Hospitals in Puppalguda / Financial District.',
      landmarks: [
        { name: 'Continental Hospitals', distance: 'Adjacent', time: '1 min' },
        { name: 'Wipro Circle', distance: '1.5 km', time: '3 min' },
        { name: 'Gachibowli Junction', distance: '3 km', time: '7 min' }
      ]
    },
    locationDetails: {
      eyebrow: 'Project Location',
      title: 'In the Heart of Hyderabad’s Financial District',
      addressTitle: 'Northstar District 1',
      addressLines: [
        'Beside Continental Hospitals, Puppalguda,',
        'Financial District, Hyderabad, Telangana – 500075'
      ],
      googleMapLink: 'https://maps.google.com/?q=Northstar+District+1+Hyderabad',
      embedMapUrl: 'https://maps.google.com/maps?q=Northstar+District+1+Hyderabad&hl=en&z=14&output=embed'
    },
    enquiry: {
      eyebrow: 'Get in Touch',
      title: 'Enquire About District 1',
      subtitle: 'Connect with our team for resale availability, rental opportunities, or site walkthroughs.',
      options: ['Apartment Purchase Enquiry', 'General Enquiry'],
      plotSizes: ['3 BHK (1,266 to 2,453 Sft)']
    }
  },

  'sp-palacio': {
    id: 'sp-palacio',
    name: 'Northstar SP Palacio',
    shortName: 'SP Palacio',
    headerTitle: 'An Art Deco Masterpiece at the Heart of Abids',
    tagline: 'Ultra-Luxury 3 & 4 BHK Residences in Central Hyderabad',
    status: 'Ready to Move',
    statusBadge: 'Ready to Move In',
    type: 'Ultra-Luxury 3 & 4 BHK Residences',
    city: 'Hyderabad',
    location: 'JN Road, Abids, Hyderabad',
    heroImage: imgSpPalacio,
    heroVideo: heroVideoPlaceholder,
    logo: null,
    rera: 'P02400001088',
    reraAuthority: 'TS RERA',
    reraLink: 'https://rera.telangana.gov.in/',
    brochureUrl: '#',
    projectLink: '#',
    walkthroughVideoLink: '#',
    masterPlanLink: '#',
    googleMapLink: 'https://maps.google.com/?q=Northstar+SP+Palacio+Abids+Hyderabad',
    googleMapEmbed: 'https://maps.google.com/maps?q=Northstar+SP+Palacio+Abids+Hyderabad&hl=en&z=15&output=embed',
    specs: [
      { label: 'Project Type', value: 'Ultra-Luxury Residences' },
      { label: 'Configurations', value: '3 & 4 BHK Expansive Homes' },
      { label: 'Unit Sizes', value: '2,600 – 4,200 Sq. Ft.' },
      { label: 'Possession', value: 'Ready to Move In' },
      { label: 'Structure', value: 'Standalone Iconic Tower' },
      { label: 'Architecture', value: 'Contemporary Art Deco' },
      { label: 'RERA Registration', value: 'P02400001088' },
      { label: 'Location', value: 'JN Road, Abids, Hyderabad' }
    ],
    narrative: [
      {
        tag: 'Heritage & Grandeur',
        headline: 'The Most Exclusive Development the City Has Ever Seen',
        paragraphs: [
          'Situated on JN Road in Abids, Northstar SP Palacio stands at one of Hyderabad’s most distinguished and storied addresses.',
          'Here, a contemporary Art Deco landmark rises on the city skyline, rare in its time and place, commanding sweeping urban vistas and serene living spaces.',
          'An address that balances the vibrant pulse of central commerce with undisturbed residential privacy and generational prestige.'
        ],
        image: imgSpPalacio,
        imageCaption: 'Northstar SP Palacio Tower Façade · JN Road, Abids'
      },
      {
        tag: 'Architectural Craftsmanship',
        headline: 'A Contemporary Tribute to Art Deco',
        paragraphs: [
          'SP Palacio is envisioned as a contemporary tribute to Art Deco, shaped by intricate detailing, clean geometric lines, and enduring craftsmanship.',
          'From grand double-height entrance lobbies to soaring ceilings and expansive floor-to-ceiling glass, every volume is sculpted for natural light and uninterrupted city views.',
          'A design language that once defined the world’s most celebrated residences now finds new expression at the core of Hyderabad.'
        ],
        image: imgAllura,
        imageCaption: 'Grand Proportions, Floor-to-Ceiling Glass & Art Deco Symmetry'
      },
      {
        tag: 'The Club Experience',
        headline: 'A Seamless Life Orchestrated for You',
        paragraphs: [
          'A private members’ club experience curated for a select few, thoughtfully bringing together wellness, leisure, and quiet retreats.',
          'Features a rooftop infinity pool, temperature-controlled indoor amenities, private mini-theatre, indoor games lounge, and landscaped terrace gardens.',
          'Every space is curated with discreet precision, designed for quiet ease, effortless privacy, and family celebrations.'
        ],
        image: imgEdenGardens,
        imageCaption: 'Rooftop Swimming Pool, Wellness Suites & Terrace Decks'
      },
      {
        tag: 'Personalised Living',
        headline: 'Personalised Service & Security at Every Turn',
        paragraphs: [
          'Here, service and security are anticipatory and deeply personal. Delivered by Northstar’s dedicated management team, it brings the attentiveness of a five-star hotel into the privacy of your own home.',
          'With multi-tier 24x7 security, biometric access, dedicated concierge assistance, and private elevator lobbies, peace of mind is built into the everyday routine.',
          'Live where Hyderabad has always thrived — central, distinguished, and effortless.'
        ],
        image: imgGardenSuites,
        imageCaption: 'Double-Height Grand Lobby & Concierge Reception'
      }
    ],
    amenitiesHeader: {
      eyebrow: 'Curated Amenities',
      title: 'A Lifestyle Crafted for Ease, Privacy & Celebration',
      description: 'SP Palacio brings together wellness, recreation, and luxury hospitality in a discreetly managed private environment.'
    },
    amenityCategories: [
      {
        title: 'Wellness & Fitness',
        badge: 'Health',
        items: ['Rooftop Swimming Pool', 'Modern Fitness Centre', 'Yoga & Meditation Deck', 'Steam & Sauna Suite']
      },
      {
        title: 'Leisure & Entertainment',
        badge: 'Recreation',
        items: ['Double-Height Entrance Lobby', 'Private Screening Theatre', 'Indoor Games Lounge', 'Banqueting & Party Hall']
      },
      {
        title: 'Open Greens & Terraces',
        badge: 'Landscaping',
        items: ['Landscaped Rooftop Deck', 'Open Air Sit-Outs', 'Children’s Play Pavilion', 'Walking Corridors']
      },
      {
        title: 'Safety & Modern Utilities',
        badge: 'Infrastructure',
        items: ['24x7 Multi-Tier Security', 'CCTV Surveillance', 'High-Speed Lifts', '100% DG Power Backup', 'EV Charging Provision', 'Rainwater Harvesting']
      }
    ],
    experience: {
      eyebrow: 'Explore the Experience',
      headline: 'Experience Northstar SP Palacio',
      shortLine: 'Explore the architectural elevations, expansive living spaces, clubhouse features, and master floor plans.',
      tabs: [
        { id: 'photos', label: 'Photos', desc: 'Curated photography of SP Palacio architectural elevations and interiors.' },
        { id: 'videos', label: 'Videos', desc: 'Watch architectural video walkthroughs.' },
        { id: 'masterplan', label: 'Master Plan', desc: 'Site layout and tower orientation plan.' },
        { id: 'floorplan', label: 'Floor Plan', desc: '3 & 4 BHK floor plans and unit layouts.' },
        { id: 'unitplan', label: 'Unit Plan', desc: 'Detailed room dimensions and carpet area demarcations.' },
        { id: 'brochure', label: 'Brochure', desc: 'Download comprehensive project brochure.' }
      ]
    },
    neighbourhood: {
      eyebrow: 'Central Hyderabad',
      title: 'Around the Neighbourhood',
      subtitle: 'Placed in the vibrant heart of Abids, connecting heritage charm with swift city-wide transit.',
      landmarks: [
        { name: 'Gandhi Bhavan Metro Station', distance: '~0.5 km', time: '2 min' },
        { name: 'Abids Shopping District', distance: '~0.8 km', time: '3 min' },
        { name: 'Nampally Railway Station', distance: '~1.5 km', time: '5 min' },
        { name: 'Begum Bazaar', distance: '~1.5 km', time: '5 min' },
        { name: 'Moazzam Jahi Market', distance: '~1.2 km', time: '4 min' },
        { name: 'Little Flower High School', distance: '~1.0 km', time: '3 min' },
        { name: 'Koti Commercial Hub', distance: '~2.0 km', time: '7 min' },
        { name: 'Banjara Hills', distance: '~6.0 km', time: '15 min' }
      ]
    },
    locationDetails: {
      eyebrow: 'Project Location',
      title: 'A Prestigious Address on JN Road, Abids',
      addressTitle: 'Northstar SP Palacio',
      addressLines: [
        'JN Road, Muralidhar Bagh, Old Kattal Mandi,',
        'Abids, Hyderabad, Telangana – 500001'
      ],
      googleMapLink: 'https://maps.google.com/?q=Northstar+SP+Palacio+Abids+Hyderabad',
      embedMapUrl: 'https://maps.google.com/maps?q=Northstar+SP+Palacio+Abids+Hyderabad&hl=en&z=15&output=embed'
    },
    enquiry: {
      eyebrow: 'Schedule a Visit',
      title: 'Experience SP Palacio in Person',
      subtitle: 'Connect with our luxury sales advisory team for unit availability, bespoke floor layouts, pricing, and private site walkthroughs.',
      options: ['3 BHK Luxury Apartment', '4 BHK Luxury Penthouse / Residence', 'Site Visit Appointment'],
      plotSizes: ['3 BHK (2,600 – 3,100 Sft)', '4 BHK (3,600 – 4,200 Sft)']
    }
  },

  'allura': {
    id: 'allura',
    name: 'Northstar Allura',
    shortName: 'Allura',
    headerTitle: 'A Benchmark in Modern Luxury Living',
    tagline: 'Exquisite Residential Community Designed for Distinguished Families',
    status: 'Ongoing',
    statusBadge: 'Under Construction',
    type: 'Luxury Residential Apartments',
    city: 'Hyderabad',
    location: 'Kokapet / Gandipet, Hyderabad',
    heroImage: imgAllura,
    heroVideo: heroVideoPlaceholder,
    logo: null,
    rera: 'P02400003490',
    reraAuthority: 'TS RERA',
    reraLink: 'https://rera.telangana.gov.in/',
    brochureUrl: '#',
    projectLink: '#',
    walkthroughVideoLink: '#',
    masterPlanLink: '#',
    googleMapLink: 'https://maps.google.com/?q=Northstar+Allura+Hyderabad',
    googleMapEmbed: 'https://maps.google.com/maps?q=Northstar+Allura+Hyderabad&hl=en&z=15&output=embed',
    specs: [
      { label: 'Project Type', value: 'Luxury Residential Apartments' },
      { label: 'Configurations', value: '3 & 4 BHK High-End Homes' },
      { label: 'Site Area', value: 'Expansive Gated Enclave' },
      { label: 'Status', value: 'Under Construction' },
      { label: 'Location', value: 'Kokapet / Gandipet, Hyderabad' },
      { label: 'RERA Registration', value: 'P02400003490' }
    ],
    narrative: [
      {
        tag: 'Architectural Distinction',
        headline: 'The Most Exclusive Development in Hyderabad’s Growth Corridor',
        paragraphs: [
          'Set in the coveted western growth corridor of Hyderabad, Northstar Allura represents the pinnacle of contemporary urban architecture.',
          'Every residence is oriented to optimize panoramic views, natural ventilation, and absolute acoustic privacy.',
          'An address that embodies modern elegance and enduring family heritage.'
        ],
        image: imgAllura,
        imageCaption: 'Northstar Allura Tower Perspective'
      },
      {
        tag: 'Curated Indulgence',
        headline: 'A Private Members’ Club for Everyday Leisure',
        paragraphs: [
          'Allura offers an expansive clubhouse complete with wellness facilities, an indoor pool, squash and badminton courts, and serene outdoor decks.',
          'Designed to support a balanced lifestyle where work, play, and relaxation coexist effortlessly.'
        ],
        image: imgHillside,
        imageCaption: 'Clubhouse & Wellness Amenities'
      }
    ],
    amenitiesHeader: {
      eyebrow: 'Lifestyle Amenities',
      title: 'Curated Wellness & Social Leisure',
      description: 'Everything you need for a healthy, vibrant lifestyle inside a secure gated enclave.'
    },
    amenityCategories: [
      {
        title: 'Club & Sports',
        badge: 'Activity',
        items: ['Swimming Pool', 'Gymnasium', 'Badminton Court', 'Squash Court', 'Jogging Track']
      },
      {
        title: 'Community & Leisure',
        badge: 'Social',
        items: ['Multi-Purpose Hall', 'Landscaped Gardens', 'Children’s Play Arena', 'Amphitheatre']
      }
    ],
    experience: {
      eyebrow: 'Explore Allura',
      headline: 'Experience Allura Architecture',
      shortLine: 'Explore master layouts, unit configurations, and progress updates.',
      tabs: [
        { id: 'photos', label: 'Photos', desc: 'Visual renderings and photography.' },
        { id: 'masterplan', label: 'Master Plan', desc: 'Site layout.' },
        { id: 'floorplan', label: 'Floor Plan', desc: 'Unit floor plans.' }
      ]
    },
    neighbourhood: {
      eyebrow: 'Strategic Location',
      title: 'Around the Neighbourhood',
      subtitle: 'Close to the Financial District, Neopolis, and the Outer Ring Road.',
      landmarks: [
        { name: 'Outer Ring Road (ORR)', distance: '3 km', time: '5 min' },
        { name: 'Financial District', distance: '6 km', time: '10 min' },
        { name: 'Neopolis Kokapet', distance: '4 km', time: '8 min' }
      ]
    },
    locationDetails: {
      eyebrow: 'Project Location',
      title: 'Prime Western Corridor, Hyderabad',
      addressTitle: 'Northstar Allura',
      addressLines: [
        'Kokapet / Gandipet Corridor,',
        'Hyderabad, Telangana – 500075'
      ],
      googleMapLink: 'https://maps.google.com/?q=Northstar+Allura+Hyderabad',
      embedMapUrl: 'https://maps.google.com/maps?q=Northstar+Allura+Hyderabad&hl=en&z=15&output=embed'
    },
    enquiry: {
      eyebrow: 'Start Your Enquiry',
      title: 'Enquire About Northstar Allura',
      subtitle: 'Contact our sales team for floor plans, price sheets, and construction milestones.',
      options: ['3 BHK Apartment', '4 BHK Apartment'],
      plotSizes: ['Standard 3 BHK', 'Large 4 BHK']
    }
  }
};
