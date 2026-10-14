import imgAllura from '../assets/Projects Images Webp/Allura Copy of Copy of DSC07879 copy.webp';
import imgSpPalacio from '../assets/Projects Images Webp/sp palacio.webp';
import imgSanctuary from '../assets/Projects Images Webp/Sanctury Copy of Copy of DSC03014.webp';
import imgParkAvenue from '../assets/Projects Images Webp/park avenue WhatsApp Image 2026-06-15 at 5.02.19 PM.webp';
import imgGoldenValley from '../assets/Projects Images Webp/golden valley.webp';
import imgDistrict1 from '../assets/Projects Images Webp/district1 143L3314.webp';
import imgAirportBoulevard from '../assets/Projects Images Webp/airport West Villa Front view.webp';
import imgHillside from '../assets/Projects Images Webp/Hill 143L5444.webp';
import imgVeda from '../assets/Projects Images Webp/veda.webp';
import imgEdenGardens from '../assets/Projects Images Webp/eden garden Copy of EG Building View_2.jpg.webp';
import imgLeela from '../assets/Projects Images Webp/leela ext-corner-front-view.webp';
import imgAmgPlaza from '../assets/Projects Images Webp/AMG.webp';
import imgGardenSuites from '../assets/Projects Images Webp/garden suites GS_G_978x418-3.webp';

import logoSanctuary from '../assets/AllLogosColorfulWEBP/Sanctuary.webp';
import logoDistrict1 from '../assets/AllLogosColorfulWEBP/Northstar_Distrcit 1.webp';
import logoHillside from '../assets/AllLogosColorfulWEBP/Northstar_Hillside.webp';
import logoVeda from '../assets/AllLogosColorfulWEBP/Northstar_Veda.webp';
import logoEdenGardens from '../assets/AllLogosColorfulWEBP/Northstar_Eden Gardens.webp';
import logoLeela from '../assets/AllLogosColorfulWEBP/Northstar_Leela.webp';
import logoAmgPlaza from '../assets/AllLogosColorfulWEBP/Northstar_Amgplaza.webp';
import logoGardenSuites from '../assets/AllLogosColorfulWEBP/Northstar_Gardensuits.webp';
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

    // SECTION 3 — EDITORIAL NARRATIVE & PILLARS
    narrative: [
      {
        tag: 'The Location Advantage',
        headline: 'The Luxury of Living Between Nature and the City.',
        description: 'Set near Tukkuguda, Sanctuary keeps you connected to the ORR, airport, schools and key destinations of South Hyderabad. Close enough to everything that matters, yet removed from the pace of the city. A rare balance of connectivity, calm and open living.'
      },
      {
        tag: 'Landscape & Greenery',
        headline: 'Where Nature Becomes a Way of Life.',
        description: 'Tree-lined avenues, intimate pocket parks and thoughtfully layered greens shape everyday life. Walk among fragrant gardens, flowering trees and landscapes designed to bring nature closer. At Sanctuary, the outdoors isn’t somewhere you visit — it is where life unfolds.'
      },
      {
        tag: 'Plotted Living & Villas',
        headline: 'Your Land. Your Home. Your Legacy.',
        description: 'Choose between generous residential plots and thoughtfully crafted villas within an exclusive 63-address community. A place to build around your family, your aspirations and your idea of home. Because some homes are created not just for today, but for generations.'
      },
      {
        tag: 'Everyday Experience',
        headline: 'The Life You Imagined Is Already Here.',
        description: 'Walk the cobbled avenues, cycle through greenery, pause in a pocket park or spend an evening at the clubhouse. Everyday experiences have been thoughtfully designed around wellness, leisure and togetherness. Sanctuary is no longer something to imagine — it is ready to be experienced.'
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
          'Spaces for Family Time & Social Gatherings'
        ]
      },
      {
        title: 'Clubhouse Facilities',
        badge: 'Club Experience',
        items: [
          'Swimming Pool',
          'Indoor Games Room',
          'Private Guest Rooms',
          'Fully Equipped Gym',
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
          'Sewage Treatment Plant (STP)',
          'Water Treatment Plant (WTP)',
          'Hydro-Pneumatic Water Supply',
          'Compound Wall with Solar Fencing',
          'CCTV Surveillance',
          '100% Power Backup'
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
        { id: '360', label: '360° View', desc: 'Experience 360-degree interactive panoramic perspectives of the site.' },
        { id: 'masterplan', label: 'Master Plan', desc: 'Detailed 14-acre master layout showing all 63 plot and villa allocations.' },
        { id: 'plotplan', label: 'Plot Plan', desc: 'Dimensional plot layout options ranging from 343 to 1,000 Sq. Yds.' },
        { id: 'villaplan', label: 'Villa Plan', desc: 'Customizable villa floor plans and architectural elevations.' },
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
      milestones: [
        { label: 'Site Boundary & Compound Wall', status: '100% Completed', note: 'Entire perimeter compound wall and solar fencing installed.' },
        { label: 'Underground Infrastructure (Drainage & Water)', status: 'Advanced Stage', note: 'Concealed underground utilities and storm drainage network laid.' },
        { label: 'Road Works & Cobbled Avenues', status: 'In Progress', note: '40ft main boulevard base work and 30ft internal roads undergoing paving.' },
        { label: 'Landscape & Pocket Parks', status: 'Active Planting', note: 'Tree transplantation, flowering gardens, and irrigation systems taking shape.' },
        { label: 'Clubhouse Civil Work', status: 'Structure Underway', note: 'Clubhouse foundations and structural framing progressing on schedule.' }
      ],
      mediaTabs: ['Drone Photos', 'Drone Videos', 'Site Progress Gallery', 'Monthly Updates']
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
        description: 'District 1 brought a distinctive architectural identity to apartment living in the Financial District. Its approach to design went on to earn Northstar recognised honours in 2016 and 2017.'
      },
      {
        tag: 'Open Spaces',
        headline: 'Room to Breathe, Even in the Financial District.',
        description: 'Around 70% of the two-acre development is kept open, giving the residential tower more space around it. A considered way of bringing openness into one of Hyderabad’s busiest urban districts.'
      },
      {
        tag: 'Prime Connectivity',
        headline: 'Live Close to Where the City Works.',
        description: 'Set within Hyderabad’s Financial District, District 1 keeps major workplaces, healthcare, and the Gachibowli business ecosystem close at hand.'
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
        { id: 'floorplan', label: 'Floor Plans', desc: '3 BHK unit configurations.' },
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
  }
};
