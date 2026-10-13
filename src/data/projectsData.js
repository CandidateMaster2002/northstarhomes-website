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

export const projectsData = {
  sanctuary: {
    id: 'sanctuary',
    name: 'Sanctuary',
    fullName: 'Northstar Sanctuary',
    status: 'Ongoing',
    statusBadge: 'Now Selling',
    type: 'Crafted Plots & Villas',
    city: 'Hyderabad',
    location: 'Mohabbatnagar, Near Tukkuguda, Srisailam Highway',
    tagline: 'Where Nature Becomes a Way of Life',
    heroImage: imgSanctuary,
    logo: logoSanctuary,
    brochureUrl: 'https://connectingdomains.in/northstarhomes.in/wp-content/uploads/2026/10/park-avenue-brochure.pdf',
    
    // SECTION 2 — PROJECT IDENTITY SPECS BAR
    specs: [
      { label: 'Status', value: 'Now Selling' },
      { label: 'Project Type', value: 'Crafted Plots & Villas' },
      { label: 'Total Site Area', value: '14 Acres 11 Guntas' },
      { label: 'Exclusive Community', value: '63 Addresses' },
      { label: 'Location', value: 'Near Tukkuguda, Hyderabad' },
      { label: 'RERA Registration', value: 'Applied / In Progress' }
    ],

    // SECTION 3 — EDITORIAL NARRATIVE & PILLARS
    narrative: [
      {
        tag: 'The Location Advantage',
        headline: 'The Luxury of Living Between Nature and the City.',
        description: 'Set near Tukkuguda, Sanctuary keeps you connected to the ORR, airport, schools, and key destinations of South Hyderabad. Close enough to everything that matters, yet removed from the pace of the city — offering a rare balance of connectivity, calm, and open living.'
      },
      {
        tag: 'Landscape & Greenery',
        headline: 'Where Nature Becomes a Way of Life.',
        description: 'Tree-lined avenues, intimate pocket parks, and thoughtfully layered greens shape everyday life. Walk among fragrant gardens, flowering trees, and landscapes designed to bring nature closer to your doorstep every morning.'
      },
      {
        tag: 'Plotted Living & Villas',
        headline: 'Your Land. Your Home. Your Legacy.',
        description: 'Choose between generous residential plots and thoughtfully crafted villas within an exclusive 63-address community. A place to build around your family, your aspirations, and your idea of home — because some homes are created not just for today, but for generations.'
      },
      {
        tag: 'Everyday Experience',
        headline: 'The Life You Imagined Is Already Here.',
        description: 'Walk the cobbled avenues, cycle through greenery, pause in a pocket park, or spend an evening at the private clubhouse. Everyday experiences have been thoughtfully designed around wellness, leisure, and togetherness.'
      }
    ],

    // SECTION 4 — LIFESTYLE FEATURES & AMENITIES
    amenityCategories: [
      {
        title: 'Green Living & Landscapes',
        badge: 'Outdoor Ecology',
        items: [
          'Pocket Parks',
          'Tree-Lined Avenues',
          'Dense Native Planting',
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
        badge: 'Health & Activity',
        items: [
          'Dedicated Walking Track',
          'Dedicated Cycling Track',
          'Nature Trail',
          'Pebbled Reflexology Pathways',
          'Open Green Spaces',
          'Cobbled Internal Roads',
          'Dedicated Vehicular Movement'
        ]
      },
      {
        title: 'Family & Social Spaces',
        badge: 'Community',
        items: [
          'Children’s Play Area',
          'Gathering Courts',
          'Intimate Seating Pockets',
          'Party Lawn',
          'Community Decks'
        ]
      },
      {
        title: 'Clubhouse Facilities',
        badge: 'Exclusive Amenities',
        items: [
          'Swimming Pool',
          'Gymnasium',
          'Yoga Deck',
          'Indoor Sports & Games',
          'Party Hall',
          'Cards Room',
          'Guest Rooms'
        ]
      },
      {
        title: 'Infrastructure & Security',
        badge: 'Engineering First',
        items: [
          '40 ft Main Boulevard',
          '30 ft Internal Roads',
          'Underground Electrification',
          'Underground Drainage & Water Lines',
          'Sewage Treatment Plant (STP)',
          'Water Treatment Plant (WTP)',
          'Hydro-Pneumatic Water Supply',
          'Compound Wall with Solar Fencing',
          '24/7 CCTV Surveillance',
          '100% Power Backup for Services'
        ]
      }
    ],

    // SECTION 5 — EXPLORE THE EXPERIENCE (TABS)
    experience: {
      headline: 'Step Into Your Sanctuary',
      subtitle: 'Explore Sanctuary through master plans, landscape visuals, clubhouse views, and immersive project experiences.',
      tabs: [
        { id: 'photos', label: 'Photos', content: 'Curated photography of the landscape avenues, green corridors, and gated entrance.' },
        { id: 'masterplan', label: 'Master Plan', content: 'Comprehensive layout plan across 14 Acres 11 Guntas showing all 63 addresses.' },
        { id: 'villas', label: 'Villa Layouts', content: 'Architectural villa elevations and customized floor plans designed for generations.' },
        { id: 'brochure', label: 'Brochure', content: 'Download the complete high-resolution project brochure with specifications and site details.' }
      ]
    },

    // SECTION 6 — LOCATION & CONNECTIVITY
    locationDetails: {
      address: 'Mohabbatnagar, Near Tukkuguda, Srisailam Highway, Hyderabad, Telangana',
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
    }
  },

  'district-1': {
    id: 'district-1',
    name: 'District 1',
    fullName: 'Northstar District 1',
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
    locationDetails: {
      address: 'Beside Continental Hospitals, Puppalguda, Financial District, Hyderabad, Telangana – 500075',
      landmarks: [
        { name: 'Continental Hospitals', distance: 'Adjacent', time: '1 min' },
        { name: 'Wipro Circle', distance: '1.5 km', time: '3 min' },
        { name: 'Gachibowli Junction', distance: '3 km', time: '7 min' }
      ]
    }
  }
};
