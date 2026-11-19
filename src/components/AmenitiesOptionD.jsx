import React from 'react';

// Precision architectural line icons matching Northstar luxury standards
const amenityIcons = {
  // Family & Community Spaces (Matching user reference)
  "Children's Play Area": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M4 21V7" /><path d="M20 21V7" /><path d="M4 7h16" />
      <path d="M9 7v10" /><path d="M15 7v10" />
      <path d="M7.5 17h9" />
    </svg>
  ),
  'Gathering Courts': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="4" r="1.5" />
      <circle cx="20" cy="12" r="1.5" />
      <circle cx="12" cy="20" r="1.5" />
      <circle cx="4" cy="12" r="1.5" />
      <path d="M12 5.5v1.5M18.5 12h-1.5M12 18.5V17M5.5 12H7" />
    </svg>
  ),
  'Seating Areas': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M5 8h14v7H5z" rx="1" />
      <path d="M5 15v5M19 15v5" />
      <path d="M3 13h18" strokeWidth="1.8" />
    </svg>
  ),
  'Party Lawn': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M3 19h18" strokeWidth="1.8" />
      <path d="M6 19l2-8 4 8" /><path d="M14 19l2-8 2 8" />
      <path d="M5 11h14" />
    </svg>
  ),
  'Community Decks': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="4" y="11" width="16" height="4" rx="1" />
      <path d="M6 15v5M18 15v5" />
      <path d="M8 8h8" /><path d="M12 8v3" />
      <circle cx="6" cy="7" r="1" /><circle cx="18" cy="7" r="1" />
    </svg>
  ),
  'Spaces for family time and social gatherings': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="8" cy="8" r="2" /><circle cx="16" cy="8" r="2" />
      <path d="M4 19c0-3 2.5-5 5-5s5 2 5 5" /><path d="M14 14c1.5 0 4.5 1 4.5 5" />
    </svg>
  ),

  // Clubhouse Facilities (Matching user reference)
  'Swimming Pool': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M3 15c2.5-1.5 4.5 0 7-1.5s4.5 0 7-1.5 3 0 4 1" />
      <path d="M3 19c2.5-1.5 4.5 0 7-1.5s4.5 0 7-1.5 3 0 4 1" />
      <circle cx="8" cy="6" r="2" /><path d="M8 8v4l3 2" />
    </svg>
  ),
  'Indoor Games': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <circle cx="8" cy="8" r="1.2" fill="currentColor" />
      <circle cx="16" cy="8" r="1.2" fill="currentColor" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" />
      <circle cx="8" cy="16" r="1.2" fill="currentColor" />
      <circle cx="16" cy="16" r="1.2" fill="currentColor" />
    </svg>
  ),
  'Guest Room': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="3" y="11" width="18" height="8" rx="2" />
      <path d="M7 11V8a1 1 0 011-1h8a1 1 0 011 1v3" />
      <line x1="12" y1="7" x2="12" y2="11" />
      <circle cx="7" cy="19" r="1" fill="currentColor" /><circle cx="17" cy="19" r="1" fill="currentColor" />
    </svg>
  ),
  'Gym': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M6 12h12" strokeWidth="2.2" />
      <rect x="4" y="8" width="2" height="8" rx=".5" fill="currentColor" />
      <rect x="18" y="8" width="2" height="8" rx=".5" fill="currentColor" />
      <rect x="2" y="9.5" width="2" height="5" rx=".5" />
      <rect x="20" y="9.5" width="2" height="5" rx=".5" />
    </svg>
  ),
  'Party Hall': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      {/* Festive marquee party canopy with celebration flag matching reference */}
      <path d="M12 3v4" />
      <path d="M12 3l4 2-4 2" />
      <path d="M4 11l8-4 8 4" />
      <path d="M4 11v8h16v-8" />
      <path d="M4 11l8 5 8-5" />
    </svg>
  ),
  'Jain Temple & Prayer Hall': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      {/* Sacred Temple with Shikhara Spire and Sanctum Doorway matching reference */}
      <path d="M12 2v3" />
      <path d="M12 5L4 12h16L12 5z" />
      <path d="M6 12v9h12v-9" />
      <path d="M9 21v-5a3 3 0 016 0v5" />
      <line x1="3" y1="21" x2="21" y2="21" />
    </svg>
  ),
  'Business Centre': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      {/* Executive Briefcase matching reference */}
      <rect x="4" y="8" width="16" height="12" rx="2" />
      <path d="M8 8V5a1 1 0 011-1h6a1 1 0 011 1v2" />
      <line x1="4" y1="13" x2="20" y2="13" />
      <rect x="11" y="12" width="2" height="2" rx="0.5" fill="currentColor" />
    </svg>
  ),
  'Pickleball Court': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      {/* Pickleball paddle with ball matching reference */}
      <circle cx="10" cy="9" r="5.5" />
      <path d="M10 14.5v5.5" strokeWidth="1.8" />
      <circle cx="18" cy="14" r="2.2" />
      <circle cx="18" cy="14" r="0.5" fill="currentColor" />
    </svg>
  ),
  'Cricket Nets': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      {/* 3 Wickets with Bails and Practice Net Frame matching reference */}
      <path d="M5 8l7-4 7 4" />
      <line x1="6" y1="8" x2="18" y2="8" strokeWidth="1.8" />
      <line x1="8" y1="8" x2="8" y2="20" />
      <line x1="12" y1="8" x2="12" y2="20" />
      <line x1="16" y1="8" x2="16" y2="20" />
    </svg>
  ),
  '24×7 Security': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      {/* Security Shield */}
      <path d="M12 3l8 3.5v5.5c0 5-3.5 9.5-8 11-4.5-1.5-8-6-8-11V6.5L12 3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  'High-Speed Lifts': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      {/* Elevator cabin with dual directional arrows */}
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <line x1="12" y1="3" x2="12" y2="21" />
      <path d="M7 13l1.5-2.5 1.5 2.5" />
      <path d="M14 10.5l1.5 2.5 1.5-2.5" />
    </svg>
  ),
  'Car Parking': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      {/* Dedicated Parking Sign */}
      <rect x="4" y="3" width="16" height="18" rx="3" />
      <path d="M9 16V8h4a2.5 2.5 0 010 5H9" strokeWidth="1.8" />
    </svg>
  ),
  'Infinity Swimming Pool': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M3 16c2.5-1.5 4.5 0 7-1.5s4.5 0 7-1.5 3 0 4 1" />
      <path d="M3 20c2.5-1.5 4.5 0 7-1.5s4.5 0 7-1.5 3 0 4 1" />
      <circle cx="14" cy="6" r="1.8" />
      <path d="M8 8l4 3 2 4" />
    </svg>
  ),
  'Jogging Track': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="14" cy="5" r="2" />
      <path d="M11 9l3 3-2 4 4 4" />
      <path d="M13 12l3-1 2 3" />
      <path d="M8 13l3-1" />
      <path d="M7 21l3-5" />
    </svg>
  ),
  'Gymnasium': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M6 12h12" strokeWidth="2.2" />
      <rect x="4" y="8" width="2" height="8" rx=".5" fill="currentColor" />
      <rect x="18" y="8" width="2" height="8" rx=".5" fill="currentColor" />
      <rect x="2" y="9.5" width="2" height="5" rx=".5" />
      <rect x="20" y="9.5" width="2" height="5" rx=".5" />
    </svg>
  ),
  'EV Charging Station': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="3" y="10" width="12" height="7" rx="2" />
      <circle cx="6" cy="17" r="1.5" />
      <circle cx="12" cy="17" r="1.5" />
      <path d="M15 13h3a2 2 0 012 2v2a1 1 0 01-1 1" />
      <path d="M19 10v2" />
    </svg>
  ),
  'Car-Wash Area': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="4" y="12" width="16" height="6" rx="2" />
      <path d="M6 12l2-4h8l2 4" />
      <circle cx="8" cy="18" r="1.5" />
      <circle cx="16" cy="18" r="1.5" />
      <path d="M8 3v3M12 2v4M16 3v3" />
    </svg>
  ),
  'Terrace Viewing Deck': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M3 10l9-6 9 6" />
      <rect x="5" y="10" width="14" height="10" />
      <rect x="9" y="12" width="6" height="5" />
    </svg>
  ),
  'Kids\' Swimming Pool': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <ellipse cx="12" cy="11" rx="5" ry="3" />
      <ellipse cx="12" cy="11" rx="2" ry="1.2" />
      <path d="M4 17c3-1.5 5 0 8-1.5s5 0 8-1.5" />
    </svg>
  ),
  'Visitors\' Lounge': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="4" y="5" width="16" height="12" rx="2" />
      <path d="M12 17v4M8 21h8" />
      <circle cx="8" cy="10" r="1.5" />
      <path d="M6 14c0-1 1-2 2-2s2 1 2 2" />
      <line x1="12" y1="9" x2="17" y2="9" />
      <line x1="12" y1="12" x2="16" y2="12" />
    </svg>
  ),
  'Senior Citizens\' Seating Area': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="13" cy="7" r="2" />
      <path d="M13 11v4l-3 3" />
      <path d="M13 13h-3v5" />
      <path d="M7 15v5" />
    </svg>
  ),
  'E-Commerce Storage Hub': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
      <path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" />
    </svg>
  ),
  'Landscaped Seating Lounges': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="5" y="10" width="14" height="6" rx="1" />
      <path d="M5 16v4M19 16v4" />
      <path d="M3 13h18" strokeWidth="1.8" />
    </svg>
  ),
  'Premium Clubhouse': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 21v-8a3 3 0 016 0v8" />
    </svg>
  ),
  'Badminton Court': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="10" cy="9" r="5" />
      <line x1="10" y1="14" x2="10" y2="21" strokeWidth="1.8" />
      <line x1="7" y1="9" x2="13" y2="9" strokeDasharray="1.5 1.5" />
      <line x1="10" y1="6" x2="10" y2="12" strokeDasharray="1.5 1.5" />
      <path d="M17 14l2-2m0 0l2 2m-2-2v4" />
    </svg>
  ),
  'Tennis Court': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="10" cy="9" r="5.5" />
      <path d="M10 14.5v6.5" strokeWidth="1.8" />
      <circle cx="18" cy="14" r="2.5" />
    </svg>
  ),
  'Basketball Court': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="12" cy="12" r="8" />
      <line x1="12" y1="4" x2="12" y2="20" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <path d="M6.3 6.3a8 8 0 010 11.4M17.7 6.3a8 8 0 000 11.4" />
    </svg>
  ),
  'Theatre / Screening Room': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="3" y="5" width="18" height="12" rx="2" />
      <polygon points="10 8 16 11 10 14 10 8" fill="currentColor" />
      <path d="M7 20h10M12 17v3" />
    </svg>
  ),
  'Library': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
    </svg>
  ),
  'Home Automation': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      <circle cx="12" cy="13" r="2.5" />
    </svg>
  ),
  'Fire Fighting System': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M8 8h8v12H8z" rx="1" />
      <path d="M12 4v4M9 5h6" />
      <path d="M16 11l2-2" />
    </svg>
  ),
  'Cards Room': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="8" y="4" width="11" height="15" rx="1.5" />
      <path d="M5 8v11a1.5 1.5 0 001.5 1.5H16" />
      <circle cx="13.5" cy="11.5" r="1.5" fill="currentColor" />
    </svg>
  ),
  'Yoga Deck': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="12" cy="5" r="1.8" />
      <path d="M12 9v5" />
      <path d="M6 17c1.5-2 3.5-3 6-3s4.5 1 6 3" />
      <path d="M7 13l5-2 5 2" />
      <path d="M5 20h14" />
    </svg>
  ),

  // Green Living & Landscape
  'Pocket Parks': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M12 21v-7" />
      <path d="M12 14c-3-4-8-3-8 1 0 3 4 3 8 0z" />
      <path d="M12 14c3-4 8-3 8 1 0 3-4 3-8 0z" />
      <path d="M4 21h16" />
    </svg>
  ),
  'Tree-Lined Avenues': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M6 21v-5M18 21v-5" />
      <circle cx="6" cy="11" r="3.5" /><circle cx="18" cy="11" r="3.5" />
      <path d="M2 21h20" /><path d="M12 14v7" strokeDasharray="1.5 2" />
    </svg>
  ),
  'Dense Planting': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M12 21v-7" /><path d="M7 21v-4M17 21v-4" />
      <circle cx="12" cy="10" r="3" /><circle cx="7" cy="13" r="2.5" /><circle cx="17" cy="13" r="2.5" />
    </svg>
  ),
  'Flowering Trees': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="12" cy="10" r="4" />
      <path d="M12 14v7" />
      <circle cx="12" cy="5" r="1" /><circle cx="7" cy="10" r="1" /><circle cx="17" cy="10" r="1" />
      <path d="M4 21h16" />
    </svg>
  ),
  'Butterfly Garden': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M12 7v10" />
      <path d="M12 7c-4-4-8-1-8 3s4 4 8 2" /><path d="M12 7c4-4 8-1 8 3s-4 4-8 2" />
      <path d="M12 12c-3 1-6 3-6 5s3 2 6-1" /><path d="M12 12c3 1 6 3 6 5s-3 2-6-1" />
    </svg>
  ),
  'Rain Garden': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M12 3c-2 3-4 6-4 8a4 4 0 008 0c0-2-2-5-4-8z" />
      <path d="M6 19c2-1 4-1 6 0s4 1 6 0" />
    </svg>
  ),
  'Herbal & Medicinal Planting': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M12 21V10" />
      <path d="M12 10C8 6 5 8 5 12c3 0 6-1 7-2z" />
      <path d="M12 14c3-4 6-2 6 2-3 0-5-1-6-2z" />
    </svg>
  ),
  'Native Grass Garden': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M5 20c2-5 3-9 5-13" /><path d="M12 20c0-6 1-11 3-15" /><path d="M19 20c-1-5-2-10-4-14" />
      <path d="M3 20h18" />
    </svg>
  ),
  'Food Garden': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M12 4v3" /><circle cx="12" cy="13" r="6" />
      <path d="M10 13c0-1.5 1-2.5 2-2.5" />
    </svg>
  ),
  'Shaded Pathways': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M6 21l4-15h4l4 15" /><path d="M9 13h6" />
      <path d="M12 6v15" strokeDasharray="1.5 2" />
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
      <circle cx="17" cy="5" r="2" />
    </svg>
  ),
  'Pebbled Pathways': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="7" cy="16" r="2" /><circle cx="13" cy="14" r="2.5" /><circle cx="18" cy="17" r="1.8" />
      <circle cx="10" cy="8" r="1.5" /><circle cx="16" cy="9" r="2" />
    </svg>
  ),
  'Open Green Spaces': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <ellipse cx="12" cy="17" rx="8" ry="3" />
      <path d="M7 9a5 5 0 0110 0" /><path d="M12 17v-6" />
    </svg>
  ),
  'Cobbled Internal Roads': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M7 4v16M17 4v16" />
      <path d="M7 8h10M7 12h10M7 16h10" strokeDasharray="2 2" />
    </svg>
  ),
  'Dedicated Vehicular Movement': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="4" y="9" width="16" height="8" rx="2" />
      <path d="M6 9l2-4h8l2 4" />
      <circle cx="7.5" cy="17.5" r="1.5" /><circle cx="16.5" cy="17.5" r="1.5" />
    </svg>
  ),

  // Infrastructure & Utilities
  '40 ft Main Road': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M5 4v16M19 4v16" strokeWidth="2" /><path d="M12 4v16" strokeDasharray="2 3" strokeWidth="1.8" />
    </svg>
  ),
  '30 ft Internal Roads': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M6 4v16M18 4v16" /><path d="M12 4v16" strokeDasharray="2 2" />
    </svg>
  ),
  'Underground Electrification': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M13 3l-4 9h6l-4 9" strokeWidth="1.8" />
      <path d="M4 21h16" />
    </svg>
  ),
  'Underground Drainage & Water Supply': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 4v16M4 12h16" />
    </svg>
  ),
  'STP': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="12" cy="12" r="7" /><path d="M8 12c1.5-2 3.5-2 5 0s3.5 2 5 0" />
    </svg>
  ),
  'WTP': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M12 4c-2.5 3.5-5 6-5 9.5a5 5 0 0010 0c0-3.5-2.5-6-5-9.5z" />
    </svg>
  ),
  'Hydro-Pneumatic Water Supply': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="7" y="7" width="10" height="12" rx="2" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  ),
  'Compound Wall with Solar Fencing': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M3 18h18" strokeWidth="2" /><path d="M3 14h18" />
      <path d="M5 14v4M9 14v4M13 14v4M17 14v4" />
      <path d="M6 7l2-3M12 7l2-3M18 7l2-3" />
    </svg>
  ),
  'CCTV': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M5 9h9v7H5z" rx="1" /><path d="M14 11l5-2v7l-5-2" />
      <circle cx="9.5" cy="12.5" r="1.5" fill="currentColor" />
    </svg>
  ),
  'Power Backup': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="7" y="6" width="10" height="14" rx="1.5" />
      <path d="M13 10l-3 4h3l-1 4" strokeWidth="1.8" />
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
  const n = name.toLowerCase().replace(/['"\\’]/g, '');

  // High-priority matches matching reference sheet
  if (n.includes('pickleball')) return amenityIcons['Pickleball Court'];
  if (n.includes('cricket')) return amenityIcons['Cricket Nets'];
  if (n.includes('business')) return amenityIcons['Business Centre'];
  if (n.includes('jain') || n.includes('temple') || n.includes('prayer')) return amenityIcons['Jain Temple & Prayer Hall'];
  if (n.includes('party hall') || (n.includes('party') && n.includes('lawn'))) return amenityIcons['Party Hall'];
  if (n.includes('party lawn')) return amenityIcons['Party Lawn'];
  if (n.includes('infinity') || n.includes('swimming') || n.includes('pool')) return amenityIcons['Infinity Swimming Pool'];
  if (n.includes('gym')) return amenityIcons['Gymnasium'];
  if (n.includes('lift') || n.includes('v3f') || n.includes('elevator')) return amenityIcons['High-Speed Lifts'];
  if (n.includes('parking') || n.includes('car park')) return amenityIcons['Car Parking'];
  if (n.includes('security') || n.includes('24-hour') || n.includes('24x7') || n.includes('24×7')) return amenityIcons['24×7 Security'];
  if (n.includes('cctv')) return amenityIcons['CCTV'];
  if (n.includes('indoor games') || n.includes('games room')) return amenityIcons['Indoor Games'];
  if (n.includes('cards')) return amenityIcons['Cards Room'];
  if (n.includes('billiards') || n.includes('table tennis')) return amenityIcons['Indoor Games'];
  if (n.includes('badminton')) return amenityIcons['Badminton Court'];
  if (n.includes('tennis')) return amenityIcons['Tennis Court'];
  if (n.includes('basketball')) return amenityIcons['Basketball Court'];
  if (n.includes('squash')) return amenityIcons['Badminton Court'];
  if (n.includes('skating')) return amenityIcons['Dedicated Cycling Track'];
  if (n.includes('play area') || n.includes('tot-lot') || n.includes('kids')) return amenityIcons["Children's Play Area"];
  if (n.includes('jogging') || n.includes('walking') || n.includes('runner') || n.includes('track')) return amenityIcons['Jogging Track'];
  if (n.includes('yoga') || n.includes('meditation')) return amenityIcons['Yoga Deck'];
  if (n.includes('clubhouse') || n.includes('club house')) return amenityIcons['Premium Clubhouse'];
  if (n.includes('guest room') || n.includes('guest rooms')) return amenityIcons['Guest Room'];
  if (n.includes('seating') || n.includes('sit-out') || n.includes('lounge')) return amenityIcons['Landscaped Seating Lounges'];
  if (n.includes('gathering') || n.includes('community space') || n.includes('community deck')) return amenityIcons['Gathering Courts'];
  if (n.includes('terrace') || n.includes('deck') || n.includes('gazebo')) return amenityIcons['Terrace Viewing Deck'];
  if (n.includes('ev charging')) return amenityIcons['EV Charging Station'];
  if (n.includes('car-wash') || n.includes('car wash')) return amenityIcons['Car-Wash Area'];
  if (n.includes('storage') || n.includes('e-commerce') || n.includes('hub')) return amenityIcons['E-Commerce Storage Hub'];
  if (n.includes('senior')) return amenityIcons['Senior Citizens\' Seating Area'];
  if (n.includes('theatre') || n.includes('amphitheater') || n.includes('screening')) return amenityIcons['Theatre / Screening Room'];
  if (n.includes('library') || n.includes('reading')) return amenityIcons['Library'];
  if (n.includes('automation') || n.includes('intercom')) return amenityIcons['Home Automation'];
  if (n.includes('fire')) return amenityIcons['Fire Fighting System'];
  if (n.includes('cycling') || n.includes('cycle')) return amenityIcons['Dedicated Cycling Track'];
  if (n.includes('road')) return amenityIcons['40 ft Main Road'];
  if (n.includes('stp')) return amenityIcons['STP'];
  if (n.includes('wtp') || n.includes('water supply') || n.includes('hydro-pneumatic') || n.includes('drainage')) return amenityIcons['WTP'];
  if (n.includes('power backup') || n.includes('electrification') || n.includes('power')) return amenityIcons['Power Backup'];
  if (n.includes('wall') || n.includes('fencing')) return amenityIcons['Compound Wall with Solar Fencing'];
  if (n.includes('pocket park') || n.includes('central park') || n.includes('green space') || n.includes('garden')) return amenityIcons['Pocket Parks'];
  if (n.includes('avenue') || n.includes('tree') || n.includes('planting')) return amenityIcons['Tree-Lined Avenues'];

  return fallbackIcon;
};

// Category contextual subtitle generator
const getCategorySubtitle = (title = '') => {
  const t = title.toLowerCase();
  if (t.includes('family') || t.includes('community')) return 'Spaces for family time and social gatherings';
  if (t.includes('clubhouse')) return 'Curated indoor wellness, sports and recreation';
  if (t.includes('green') || t.includes('landscape')) return 'Thoughtfully planned gardens, shaded trails and native flora';
  if (t.includes('movement') || t.includes('wellness') || t.includes('sports')) return 'Dedicated tracks and active avenues for healthy daily routines';
  if (t.includes('infrastructure') || t.includes('security')) return 'Concealed underground utilities, paved roads and 24x7 security standards';
  return 'Curated features designed for long-term comfort and convenience';
};

export default function AmenitiesOptionD({ project }) {
  if (!project?.amenityCategories || project.amenityCategories.length === 0) return null;

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-line" id="amenities">
      <div className="max-w-[1620px] mx-auto px-4 sm:px-8 lg:px-12">

        {/* ── Section Header ── */}
        <div className="text-left max-w-4xl mb-14 sm:mb-18">
          <p className="text-[12px] sm:text-[13px] tracking-[0.24em] uppercase text-accent font-body font-semibold mb-2">
            {project.amenitiesHeader?.eyebrow || 'Curated Amenities'}
          </p>
          <h2 className="text-[34px] sm:text-[46px] lg:text-[54px] font-body font-normal text-[#07294A] leading-[1.14] tracking-tight mb-4">
            {project.amenitiesHeader?.title || 'A Lifestyle Shaped by Greenery, Wellness and Community'}
          </h2>
          <p className="text-muted text-[15px] sm:text-[16px] font-body font-light leading-relaxed max-w-3xl">
            {project.amenitiesHeader?.description}
          </p>
        </div>

        {/* ── All Categories Rendered Sequentially — NO TABS ── */}
        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {project.amenityCategories.map((cat, catIdx) => (
            <div 
              key={catIdx} 
              className="border-t border-line/70 pt-10 sm:pt-14 first:border-t-0 first:pt-0"
            >
              
              {/* Category Title & Subtitle matching the reference */}
              <div className="mb-10 sm:mb-12 text-left">
                <h3 className="text-[24px] sm:text-[30px] font-body font-normal text-[#07294A] tracking-tight mb-1.5">
                  {cat.title}
                </h3>
                <p className="text-muted text-[14px] sm:text-[15px] font-body font-light">
                  {getCategorySubtitle(cat.title)}
                </p>
              </div>

              {/* 5-Column Grid: Minimalist Line Icon + Label Below */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-12 sm:gap-y-14 gap-x-6 sm:gap-x-10">
                {cat.items.map((item, itemIdx) => (
                  <div 
                    key={itemIdx}
                    className="flex flex-col items-center text-center group cursor-default"
                  >
                    {/* Pure Minimalist Icon (No bubbly pod, directly on page) */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 flex items-center justify-center mb-3.5 text-[#07294A] group-hover:text-[#0B6FB5] group-hover:-translate-y-1 transition-all duration-300">
                      <div className="w-11 h-11 sm:w-13 sm:h-13 lg:w-14 lg:h-14">
                        {getAmenityIcon(item)}
                      </div>
                    </div>

                    {/* Amenity Title */}
                    <span className="text-[13.5px] sm:text-[14.5px] lg:text-[15px] font-body text-[#1A202C] group-hover:text-[#0B6FB5] leading-snug transition-colors duration-300 max-w-[180px]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
