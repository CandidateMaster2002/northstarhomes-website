import React, { useState } from 'react';

const testimonialsData = [
  { id: 'dbDrWb69YVw', title: 'EDEN GARDEN Vizag: Happy Customer, Mr.Hari Prasad' },
  { id: '5_WoLtNDpz4', title: 'District 1 Happy Customer, Mr. Sasikanth & Family' },
  { id: 'vKmZBlkrj_0', title: 'District 1 Happy Customer, Mr Anmol' },
  { id: 'FKe_OYnkQdE', title: 'District 1 Happy Customer, Mr&Mrs. Dilip Nayak' },
  { id: 'UISa8o4F6JI', title: 'District 1 Happy Customer, Mr.Sharath' },
  { id: '9Q7ii8I5bC8', title: 'AMG Plaza Happy Customer, Mr. Mohan' },
  { id: 'UZBNu3Rx2RQ', title: 'District1 Happy Customer, Mr. Ravi Kishore' },
  { id: '1tioxCia_tg', title: 'Garden Suites Happy Customer, Dr. Mathur' },
  { id: '6wL1_ZKTiUM', title: 'Mr Nishidhar Reddy Speaks about the Luxury villas' },
  { id: 'fCj3TiTw2Zk', title: 'Mr T. L Easwar, Aurobindo Pharmaceutical President' },
  { id: 'cjoz_eESxWU', title: 'Mr Avinash, Chairman - Avinash College' },
  { id: 'ban-zBH68AY', title: 'Mr O V Dheeraj Reddy - Hillside Luxury Villas' }
];

export default function Testimonials() {
  const [activeVideo, setActiveVideo] = useState(null);

  // We duplicate the array to allow for a seamless infinite scroll
  const infiniteVideos = [...testimonialsData, ...testimonialsData];

  return (
    <section id="testimonials" className="bg-bg py-16 lg:py-20 border-t border-line overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 mb-10 lg:mb-16 text-center">
        <p className="text-[12px] tracking-[0.3em] uppercase text-accent font-bold mb-4">
          Testimonials
        </p>
        <h2 className="text-[clamp(32px,3.4vw,46px)] leading-[1.15] font-heading text-ink">
          Stories from Our Families
        </h2>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative w-full overflow-hidden flex flex-col gap-8">
        
        {/* Row 1 - Moving Right (Reverse Marquee) */}
        <div className="flex animate-marquee-reverse w-max items-center">
          {infiniteVideos.map((video, idx) => (
            <div 
              key={idx}
              className="flex-shrink-0 w-[280px] sm:w-[320px] mx-4 group cursor-pointer"
              onClick={() => setActiveVideo(video.id)}
            >
              <div className="relative aspect-video rounded-xl overflow-hidden bg-soft shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                {/* YouTube Thumbnail */}
                <img 
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} 
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Custom Play Button Overlay */}
                <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/10 transition-colors flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-accent shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-1">
                      <path d="M5 3l14 9-14 9V3z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <p className="mt-4 text-[14px] text-ink font-medium leading-snug line-clamp-2">
                {video.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal Popup */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-[100] bg-ink/90 backdrop-blur-sm flex items-center justify-center p-4 lg:p-10"
          onClick={() => setActiveVideo(null)}
        >
          <div 
            className="relative w-full max-w-[1000px] aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl animate-fade-in"
            onClick={(e) => e.stopPropagation()} // Prevent clicks on the video from closing the modal
          >
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white transition-colors"
              onClick={() => setActiveVideo(null)}
              aria-label="Close video"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <iframe 
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`} 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
