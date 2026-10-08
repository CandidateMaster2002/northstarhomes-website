import imgAllura from './assets/Projects Images Webp/Allura Copy of Copy of DSC07879 copy.webp';
import imgSpPalacio from './assets/Projects Images Webp/sp palacio.webp';
import imgSanctuary from './assets/Projects Images Webp/Sanctury Copy of Copy of DSC03014.webp';
import imgParkAvenue from './assets/Projects Images Webp/park avenue WhatsApp Image 2026-06-15 at 5.02.19 PM.webp';
import imgGoldenValley from './assets/Projects Images Webp/golden valley.webp';
import imgDistrict1 from './assets/Projects Images Webp/district1 143L3314.webp';
import imgAirportBoulevard from './assets/Projects Images Webp/airport West Villa Front view.webp';
import imgHillside from './assets/Projects Images Webp/Hill 143L5444.webp';
import imgVeda from './assets/Projects Images Webp/veda.webp';
import imgEdenGardens from './assets/Projects Images Webp/eden garden Copy of EG Building View_2.jpg.webp';
import imgLeela from './assets/Projects Images Webp/leela ext-corner-front-view.webp';
import imgAmgPlaza from './assets/Projects Images Webp/AMG.webp';
import imgGardenSuites from './assets/Projects Images Webp/garden suites GS_G_978x418-3.webp';

export const siteConfig = {
  // Global stats for the website
  // You can change these numbers and they will update everywhere they are used.
  stats: [
    { id: 'years', value: '14+', label: 'Years', icon: '⏳' },
    { id: 'customers', value: '600', label: 'Customers', icon: '🤝' },
    { id: 'awards', value: '8', label: 'Awards', icon: '🏆' },
    { id: 'completed', value: '10', label: 'Completed Projects', icon: '🏢' },
    { id: 'area', value: '1.3 mn', label: 'sq ft delivered', icon: '📐' },
    { id: 'ongoing', value: '6', label: 'Ongoing', icon: '🏗️' },
  ],

  // All Projects Data
  projects: [
    // Ongoing Projects
    { id: 'allura', name: 'Allura', status: 'Ongoing', city: 'Hyderabad', type: 'Gated Community', image: imgAllura },
    { id: 'sp-palacio', name: 'SP Palacio', status: 'Ongoing', city: 'Hyderabad', type: 'Gated Community', image: imgSpPalacio },
    { id: 'sanctuary', name: 'Sanctuary', status: 'Ongoing', city: 'Hyderabad', type: 'Plots & Villas', image: imgSanctuary },
    { id: 'park-avenue', name: 'Park Avenue', status: 'Ongoing', city: 'Vizag', type: 'Gated Community', image: imgParkAvenue },
    { id: 'golden-valley', name: 'Golden Valley', status: 'Ongoing', city: 'Vizag', type: 'Gated Community', image: imgGoldenValley },
    
    // Completed Projects
    { id: 'district-1', name: 'District 1', status: 'Completed', city: 'Hyderabad', type: 'Gated Community', image: imgDistrict1 },
    { id: 'airport-boulevard', name: 'Airport Boulevard', status: 'Completed', city: 'Hyderabad', type: 'Gated Community', image: imgAirportBoulevard },
    { id: 'hillside', name: 'Hillside', status: 'Completed', city: 'Hyderabad', type: 'Gated Community', image: imgHillside },
    { id: 'veda', name: 'Veda', status: 'Completed', city: 'Hyderabad', type: 'Gated Community', image: imgVeda },
    { id: 'eden-gardens', name: 'Eden Gardens', status: 'Completed', city: 'Vizag', type: 'Gated Community', image: imgEdenGardens },
    { id: 'leela', name: 'Leela', status: 'Completed', city: 'Hyderabad', type: 'Gated Community', image: imgLeela },
    { id: 'amg-plaza', name: 'AMG Plaza', status: 'Completed', city: 'Hyderabad', type: 'Gated Community', image: imgAmgPlaza },
    { id: 'garden-suites', name: 'Garden Suites', status: 'Completed', city: 'Hyderabad', type: 'Gated Community', image: imgGardenSuites },
  ],

  // Timeline milestones — add logo/image paths here when available
  timeline: [
    {
      year: 2012,
      items: [
        { type: 'project', logoKey: 'northstar' },
        { type: 'project', logoKey: 'veda' },
      ]
    },
    {
      year: 2013,
      items: [
        { type: 'project', logoKey: 'gardensuites' },
      ]
    },
    {
      year: 2014,
      items: [
        { type: 'project', logoKey: 'edengardens' },
      ]
    },
    {
      year: 2015,
      items: [
        { type: 'project', logoKey: 'amgplaza' },
        { type: 'award', title: 'Best Brand in Design Innovation, Quality & Service', subtitle: 'Silicon India 2015' },
      ]
    },
    {
      year: 2016,
      items: [
        { type: 'project', logoKey: 'district1' },
        { type: 'project', logoKey: 'hillside' },
        { type: 'project', logoKey: 'edengardens' },
        { type: 'award', title: 'Best in Design in Real Estate', subtitle: 'Silicon India 2016' },
        { type: 'award', title: 'Best in Ultra Luxury Villa', subtitle: 'Silicon India 2016' },
        { type: 'award', title: 'Emerging Developer of the Year', subtitle: 'Silicon India 2016' },
      ]
    },
    {
      year: 2017,
      items: [
        { type: 'project', logoKey: 'airport' },
        { type: 'award', title: 'Best Design Concept in Real Estate', subtitle: 'Times Icon Award 2017' },
        { type: 'award', title: 'Best in Real Estate', subtitle: 'HMTV 2017' },
        { type: 'award', title: 'Best in Unique Designs in Real Estate', subtitle: 'Times Icon Award 2017' },
      ]
    },
    {
      year: 2018,
      items: [
        { type: 'milestone', title: 'Rain Drop Foundation' },
      ]
    },
    {
      year: 2019,
      items: [
        { type: 'project', logoKey: 'leela' },
        { type: 'project', logoKey: 'allura' },
      ]
    },
    {
      year: 2020,
      items: [
        { type: 'project', logoKey: 'parkave' },
      ]
    },
    {
      year: 2021,
      items: [
        { type: 'project', logoKey: 'airport' },
      ]
    },
    {
      year: 2022,
      items: [
        { type: 'project', logoKey: 'palacio' },
      ]
    },
    {
      year: 2023,
      items: [
        { type: 'project', logoKey: 'sanctuary' },
        { type: 'award', title: 'Premium Residential Project', subtitle: 'Award 2023' },
      ]
    },
    {
      year: 2024,
      items: [
        { type: 'project', logoKey: 'goldenvalley' },
      ]
    },
  ],
  
  socials: {
    facebook: 'https://www.facebook.com/NorthstarHomesProjects',
    instagram: 'https://www.instagram.com/northstar_homes?igsh=Y3ljcG0wMGU5YTli',
    x: 'https://x.com/_northstarhomes',
    youtube: 'https://www.youtube.com/c/NorthstarHomesproperties'
  }
};
