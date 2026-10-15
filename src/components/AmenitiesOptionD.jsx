import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Monochromatic SVG icons — architectural line styling with uniform stroke
const amenityIcons = {
  // Green Living & Landscape
  'Pocket Parks': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M12 22V12" />
      <path d="M12 12c-2.5-3.5-7-4-7 0 0 2.5 3.5 3.5 7 1z" />
      <path d="M12 12c2.5-3.5 7-4 7 0 0 2.5-3.5 3.5-7 1z" />
      <path d="M12 16c-1.5-2-4.5-2.5-4.5 0 0 1.5 2.2 2 4.5.5z" />
      <path d="M12 16c1.5-2 4.5-2.5 4.5 0 0 1.5-2.2 2-4.5.5z" />
      <path d="M4 22h16" />
    </svg>
  ),
  'Tree-Lined Avenues': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M7 21v-6" /><path d="M7 15c-1.5-2-4-2-4 0s2.5 2 4 1z" /><path d="M7 15c1.5-2 4-2 4 0s-2.5 2-4 1z" />
      <path d="M17 21v-6" /><path d="M17 15c-1.5-2-4-2-4 0s2.5 2 4 1z" /><path d="M17 15c1.5-2 4-2 4 0s-2.5 2-4 1z" />
      <path d="M3 21h18" />
      <path d="M12 13v8" strokeDasharray="1.5 2" />
    </svg>
  ),
  'Dense Planting': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M12 21v-8" />
      <path d="M8 21v-5" /><path d="M16 21v-5" />
      <path d="M12 13c-2-3-5-3-5 0s3 2 5 1z" /><path d="M12 13c2-3 5-3 5 0s-3 2-5 1z" />
      <path d="M8 16c-1.5-2-3.5-2-3.5 0s2 1.5 3.5.5z" />
      <path d="M16 16c1.5-2 3.5-2 3.5 0s-2 1.5-3.5.5z" />
      <path d="M4 21h16" />
    </svg>
  ),
  'Flowering Trees': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M12 21v-7" />
      <circle cx="12" cy="9" r="5" />
      <circle cx="12" cy="5" r="1.5" /><circle cx="12" cy="13" r="1.5" />
      <circle cx="8" cy="9" r="1.5" /><circle cx="16" cy="9" r="1.5" />
      <path d="M7 21h10" />
    </svg>
  ),
  'Butterfly Garden': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M12 7v12" />
      <path d="M12 11c-3-5-8-4-7 0s7 2 7-3z" />
      <path d="M12 11c3-5 8-4 7 0s-7 2-7-3z" />
      <path d="M12 15c-2.5 3-6.5 2-6 0s6-1 6 1z" />
      <path d="M12 15c2.5 3 6.5 2 6 0s-6-1-6 1z" />
      <path d="M10 5l2 2 2-2" />
    </svg>
  ),
  'Rain Garden': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M7 6l-.5 2M12 5l-.5 2M17 6l-.5 2" />
      <path d="M7 11a4 4 0 018-1 3.5 3.5 0 013 3.5c0 2-1.5 3.5-4 3.5H7c-2 0-3.5-1.5-3.5-3.5 0-1.8 1.4-3.2 3.5-3.5z" />
      <path d="M12 21v-4" /><path d="M12 17c-1.5-2-3.5-2-3.5 0s2 1.5 3.5.5z" /><path d="M12 17c1.5-2 3.5-2 3.5 0s-2 1.5-3.5.5z" />
      <path d="M6 21h12" />
    </svg>
  ),
  'Herbal & Medicinal Planting': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M12 21V12" />
      <path d="M12 12c-2.5-1.8-5-.5-4 1.5s4 1 4-1.5z" />
      <path d="M12 12c2.5-1.8 5-.5 4 1.5s-4 1-4-1.5z" />
      <path d="M12 9c-2-1.5-4-.5-3 1s3 1 3-1z" />
      <path d="M12 9c2-1.5 4-.5 3 1s-3 1-3-1z" />
      <path d="M12 5v2" />
      <path d="M8 21h8" />
    </svg>
  ),
  'Native Grass Garden': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M7 21c0-6 1.5-11 2-13" />
      <path d="M10 21c0-8 1-13 1-15" />
      <path d="M13 21c0-9 0-15 0-17" />
      <path d="M16 21c0-8-1-13-1-15" />
      <path d="M19 21c0-6-1.5-11-2-13" />
      <path d="M5 21h14" />
    </svg>
  ),
  'Food Garden': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="12" cy="11" r="5" />
      <path d="M12 6V3" /><path d="M10 4l2-1 2 1" />
      <path d="M10 11a2 2 0 004 0" />
      <path d="M8 21l2-5h4l2 5H8z" />
    </svg>
  ),
  'Shaded Pathways': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M6 21l6-11 6 11" strokeDasharray="2 2" />
      <path d="M6 14v-4" /><path d="M6 10c-1.5-2-3-2-3 0s1.5 2 3 1z" /><path d="M6 10c1.5-2 3-2 3 0s-1.5 2-3 1z" />
      <path d="M18 14v-4" /><path d="M18 10c-1.5-2-3-2-3 0s1.5 2 3 1z" /><path d="M18 10c1.5-2 3-2 3 0s-1.5 2-3 1z" />
    </svg>
  ),

  // Movement & Outdoor Wellness
  'Dedicated Walking Track': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="13" cy="5" r="2" />
      <path d="M11 9l2 3-2 4 4 4" /><path d="M13 12l2-1 2 3" /><path d="M9 13l2-1" />
      <path d="M8 21l3-5" />
    </svg>
  ),
  'Dedicated Cycling Track': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="6" cy="16" r="3.5" /><circle cx="18" cy="16" r="3.5" />
      <path d="M6 16l4-7h4l4 7" /><path d="M10 9l3 7" /><path d="M12 6h2" />
    </svg>
  ),
  'Nature Trail': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M4 20c3-3 4-6 7-9s4-6 9-7" strokeDasharray="2 2" />
      <path d="M17 7v-3" /><path d="M17 4c-1-1.5-2.5-1.5-2.5 0s1.5 1.5 2.5 1z" /><path d="M17 4c1-1.5 2.5-1.5 2.5 0s-1.5 1.5-2.5 1z" />
      <path d="M6 17v-3" /><path d="M6 14c-1-1.5-2-1.5-2 0s1 1.5 2 1z" /><path d="M6 14c1-1.5 2-1.5 2 0s-1 1.5-2 1z" />
    </svg>
  ),
  'Pebbled Pathways': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M5 21l7-15 7 15" />
      <circle cx="10" cy="17" r="1" /><circle cx="14" cy="17" r="1" /><circle cx="12" cy="14" r="1" />
      <circle cx="11" cy="19" r=".7" /><circle cx="13" cy="19" r=".7" />
    </svg>
  ),
  'Open Green Spaces': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <ellipse cx="12" cy="17" rx="8" ry="3" />
      <path d="M7 9a5 5 0 0110 0" /><path d="M9 11a3 3 0 016 0" />
      <path d="M12 17v-6" />
    </svg>
  ),
  'Cobbled Internal Roads': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M7 4v16" /><path d="M17 4v16" />
      <path d="M7 8h10" strokeDasharray="2 2" /><path d="M7 12h10" strokeDasharray="2 2" /><path d="M7 16h10" strokeDasharray="2 2" />
      <path d="M12 4v16" strokeDasharray="1 3" />
    </svg>
  ),
  'Dedicated Vehicular Movement': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="4" y="9" width="16" height="8" rx="2" />
      <path d="M6 9l2-4h8l2 4" />
      <circle cx="7.5" cy="17.5" r="1.5" /><circle cx="16.5" cy="17.5" r="1.5" />
    </svg>
  ),

  // Family & Community Spaces
  "Children's Play Area": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M6 7v14" /><path d="M6 7l9 6c0 3 1 5 1 8" />
      <circle cx="10" cy="5" r="1.5" />
      <path d="M4 21h16" />
    </svg>
  ),
  'Gathering Courts': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="12" cy="15" r="5" />
      <circle cx="8" cy="7" r="1.5" /><circle cx="12" cy="5" r="1.5" /><circle cx="16" cy="7" r="1.5" />
      <path d="M8 8.5v3M12 6.5v4M16 8.5v3" />
    </svg>
  ),
  'Seating Areas': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M6 13h12v2H6z" /><path d="M5 11h2v4H5zM17 11h2v4h-2z" />
      <path d="M7 15v4M17 15v4" /><path d="M5 19h14" />
    </svg>
  ),
  'Party Lawn': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <ellipse cx="12" cy="18" rx="8" ry="2.5" />
      <path d="M8 6l4 5 4-5" /><path d="M12 11v7" />
      <circle cx="7" cy="5" r=".8" /><circle cx="17" cy="5" r=".8" /><circle cx="12" cy="3" r=".8" />
    </svg>
  ),
  'Community Decks': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="4" y="10" width="16" height="3" rx=".5" />
      <path d="M6 13v7M18 13v7M12 13v7" />
      <path d="M6 8h12M8 6h8" /><path d="M4 20h16" />
    </svg>
  ),
  'Spaces for Family Time & Social Gatherings': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="8" cy="8" r="1.8" /><circle cx="16" cy="8" r="1.8" /><circle cx="12" cy="6" r="1.8" />
      <path d="M5 19c0-3 2-5 3.5-6M19 19c0-3-2-5-3.5-6M12 8c0 2-1 4-1 6h2c0-2-1-4-1-6" />
      <path d="M4 20h16" />
    </svg>
  ),

  // Clubhouse Facilities
  'Swimming Pool': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M4 14c2-1.5 4 0 6-1.5s4 0 6-1.5 4 0 4 0" />
      <path d="M4 18c2-1.5 4 0 6-1.5s4 0 6-1.5 4 0 4 0" />
      <circle cx="10" cy="7" r="1.8" /><path d="M10 9v3" /><path d="M8 11h4" />
    </svg>
  ),
  'Indoor Games Room': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="5" y="8" width="14" height="10" rx="1.5" />
      <line x1="12" y1="8" x2="12" y2="18" />
      <circle cx="8.5" cy="13" r="1.5" /><circle cx="15.5" cy="13" r="1.5" />
    </svg>
  ),
  'Private Guest Rooms': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="4" y="8" width="16" height="12" rx="1.5" />
      <path d="M4 15h16" /><path d="M7 15v-3h4v3" /><path d="M14 12h3v3" />
    </svg>
  ),
  'Fully Equipped Gym': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M4 12h16" strokeWidth="2" />
      <rect x="6" y="9" width="2" height="6" rx=".5" /><rect x="16" y="9" width="2" height="6" rx=".5" />
      <rect x="3" y="10" width="2" height="4" rx=".5" /><rect x="19" y="10" width="2" height="4" rx=".5" />
    </svg>
  ),
  'Party Hall': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M4 20h16" /><path d="M6 20V9l6-5 6 5v11" />
      <rect x="10" y="14" width="4" height="6" rx=".5" />
      <circle cx="12" cy="10" r="1.2" />
    </svg>
  ),
  'Cards Room': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="5" y="7" width="9" height="13" rx="1" transform="rotate(-6 9.5 13.5)" />
      <rect x="10" y="7" width="9" height="13" rx="1" transform="rotate(6 14.5 13.5)" />
    </svg>
  ),
  'Yoga Deck': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="12" cy="5" r="1.8" />
      <path d="M12 7v4" /><path d="M9 10l3 2 3-2" /><path d="M10 15l2-4 2 4" />
      <ellipse cx="12" cy="19" rx="7" ry="1.8" />
    </svg>
  ),

  // Thoughtful Infrastructure & Security
  '40 ft Main Road': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M4 5v14" strokeWidth="2" /><path d="M20 5v14" strokeWidth="2" />
      <path d="M12 5v14" strokeDasharray="3 3" />
      <path d="M7 10H4M7 14H4M17 10h3M17 14h3" />
    </svg>
  ),
  '30 ft Internal Roads': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M6 5v14" /><path d="M18 5v14" />
      <path d="M12 5v14" strokeDasharray="2 3" />
    </svg>
  ),
  'Underground Electrification': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M13 3l-4 9h5l-3 9" strokeWidth="1.8" />
      <path d="M4 17h16" strokeDasharray="2 2" />
    </svg>
  ),
  'Underground Drainage & Water Supply': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M4 10h16" /><path d="M7 10v7M12 10v7M17 10v7" />
      <path d="M7 17h10" /><path d="M12 4c-2 2.5-3 4-3 6h6c0-2-1-3.5-3-6z" />
    </svg>
  ),
  'Sewage Treatment Plant (STP)': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="5" y="9" width="14" height="9" rx="1.5" />
      <circle cx="10" cy="13.5" r="2.5" />
      <path d="M8 9V6h8v3" /><path d="M5 18h14" />
    </svg>
  ),
  'Water Treatment Plant (WTP)': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M12 4c-2.5 3.5-5 6-5 9.5a5 5 0 0010 0c0-3.5-2.5-6-5-9.5z" />
      <path d="M9 14.5c1-.5 2 0 3-.5s2 0 3-.5" />
    </svg>
  ),
  'Hydro-Pneumatic Water Supply': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="7" y="7" width="10" height="12" rx="2" />
      <circle cx="12" cy="13" r="3" /><path d="M12 10v3l2 1.5" />
      <path d="M10 5h4v2h-4z" />
    </svg>
  ),
  'Compound Wall with Solar Fencing': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M3 18h18" strokeWidth="2" /><path d="M3 14h18" />
      <path d="M5 14v4M9 14v4M13 14v4M17 14v4" />
      <path d="M7 14v-3l2-2 2 2v3" /><path d="M13 14v-3l2-2 2 2v3" />
      <path d="M6 7l1-2M10 7l1-2M14 7l1-2M18 7l1-2" strokeWidth="1.2" />
    </svg>
  ),
  'CCTV Surveillance': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M5 9h9v7H5z" rx="1" /><path d="M14 11l5-2v7l-5-2" />
      <circle cx="9.5" cy="12.5" r="1.5" />
      <path d="M7 18v-2h4v2" />
    </svg>
  ),
  '100% Power Backup': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="7" y="6" width="10" height="14" rx="1.5" />
      <path d="M10 6V4h4v2" />
      <path d="M13 10l-3 4h3l-1 4" strokeWidth="1.6" />
    </svg>
  ),
};

// Fallback icon
const fallbackIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <circle cx="12" cy="12" r="7" /><path d="M9 12l2 2 4-4" />
  </svg>
);

const getAmenityIcon = (name = '') => {
  if (amenityIcons[name]) return amenityIcons[name];
  const normalized = name.toLowerCase();
  if (normalized.includes('indoor games')) return amenityIcons['Indoor Games Room'];
  if (normalized.includes('guest room')) return amenityIcons['Private Guest Rooms'];
  if (normalized.includes('gym')) return amenityIcons['Fully Equipped Gym'];
  if (normalized.includes('family time')) return amenityIcons['Spaces for Family Time & Social Gatherings'];
  if (normalized === 'stp') return amenityIcons['Sewage Treatment Plant (STP)'];
  if (normalized === 'wtp') return amenityIcons['Water Treatment Plant (WTP)'];
  if (normalized === 'cctv') return amenityIcons['CCTV Surveillance'];
  if (normalized.includes('power backup')) return amenityIcons['100% Power Backup'];
  return fallbackIcon;
};

export default function AmenitiesOptionD({ project }) {
  const [selectedCategory, setSelectedCategory] = useState(0);

  if (!project?.amenityCategories || project.amenityCategories.length === 0) return null;

  const displayedAmenities = project.amenityCategories[selectedCategory]?.items || project.amenityCategories[0]?.items || [];

  return (
    <section className="py-20 lg:py-32 bg-bg border-b border-line" id="amenities-option-d">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">

        {/* Section Header */}
        <div className="text-center max-w-[760px] mx-auto mb-12 lg:mb-16">
          <h2 className="text-[34px] sm:text-[44px] lg:text-[52px] font-heading font-normal text-ink leading-[1.15] mb-4 tracking-tight">
            {project.amenitiesHeader?.title || 'A Lifestyle Shaped by Greenery, Wellness and Community'}
          </h2>
          <p className="text-muted font-light text-[15px] sm:text-[16px] leading-[1.8] max-w-[620px] mx-auto">
            {project.amenitiesHeader?.description}
          </p>
        </div>

        {/* Category Buttons — Tap to see category only */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-14 lg:mb-18">
          {project.amenityCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(idx)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-[12px] tracking-[0.14em] uppercase font-body transition-all duration-300 cursor-pointer ${
                selectedCategory === idx
                  ? 'bg-ink text-white font-medium shadow-md'
                  : 'bg-soft text-muted hover:text-ink hover:bg-line/60 font-light'
              }`}
            >
              {cat.title} ({cat.items.length})
            </button>
          ))}
        </div>

        {/* Borderless Monochromatic Grid — No Grid Lines */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-10 sm:gap-y-12 gap-x-6 sm:gap-x-8"
          >
            {displayedAmenities.map((amenity, idx) => (
              <motion.div
                key={`${selectedCategory}-${amenity}-${idx}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: Math.min(idx * 0.02, 0.25) }}
                className="flex flex-col items-center text-center group cursor-default"
              >
                {/* Circular Monochromatic Icon Pod */}
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-[#F3F5F7] group-hover:bg-white border border-line/50 group-hover:border-accent/40 flex items-center justify-center mb-3.5 transition-all duration-300 shadow-[0_2px_10px_rgba(7,41,74,0.04)] group-hover:shadow-[0_8px_20px_rgba(7,41,74,0.08)] group-hover:-translate-y-1 text-ink/75 group-hover:text-accent">
                  <div className="w-7 h-7 sm:w-8 sm:h-8">
                    {getAmenityIcon(amenity)}
                  </div>
                </div>

                {/* Amenity Title */}
                <span className="text-[11px] sm:text-[12px] tracking-[0.14em] uppercase font-heading font-medium text-ink/80 group-hover:text-accent leading-snug transition-colors duration-300 max-w-[150px]">
                  {amenity}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
