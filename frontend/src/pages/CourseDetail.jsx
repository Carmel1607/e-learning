import React, { useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/mockData';
import { Star, Users, BookOpen, Clock, Play, CheckCircle2, ChevronRight, Volume2, Languages } from 'lucide-react';
import CourseCard from '../components/CourseCard';

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find(c => c.id === parseInt(id)) || courses[0];
  const [isDubbed, setIsDubbed] = useState(false);
  const videoRef = useRef(null);
  const audioRef = useRef(null);

  const toggleDubbing = () => {
    const wasPlaying = !videoRef.current.paused;
    const currentTime = videoRef.current.currentTime;
    
    setIsDubbed(!isDubbed);
    
    // In a real app, we would sync audio and video
    // Here we just simulate the switch
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = currentTime;
        if (wasPlaying) videoRef.current.play();
      }
    }, 0);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-slate-500">
        <Link to="/explore" className="hover:text-primary transition-colors">Explore Courses</Link>
        <ChevronRight size={14} />
        <span className="text-slate-900 font-medium truncate max-w-[200px]">{course.title}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Video Player Area */}
          <div className="bg-black rounded-3xl overflow-hidden shadow-2xl relative group">
            <video 
              ref={videoRef}
              className="w-full aspect-video"
              controls
              src={course.videoUrl}
            />
            
            {/* Dubbing Control Overlay */}
            <div className="absolute top-4 right-4 flex gap-2">
              <button 
                onClick={toggleDubbing}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-xs transition-all backdrop-blur-md border ${
                  isDubbed 
                    ? 'bg-primary text-white border-primary shadow-lg shadow-primary/30' 
                    : 'bg-white/20 text-white border-white/30 hover:bg-white/30'
                }`}
              >
                <Languages size={16} />
                {isDubbed ? 'Doublé (FR) Actif' : 'Activer le doublage'}
              </button>
            </div>

            {/* Simulated Audio Track Info */}
            <div className="absolute bottom-20 left-4 pointer-events-none">
              <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2">
                <Volume2 size={14} className="text-primary" />
                <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                  Audio: {isDubbed ? 'Français (Simulé)' : 'Original (EN)'}
                </span>
              </div>
            </div>
          </div>

          {/* Course Info */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-extrabold text-slate-900 leading-tight">{course.title}</h1>
              <div className="flex items-center gap-1 bg-amber-50 text-amber-600 px-3 py-1 rounded-full border border-amber-100">
                <Star size={16} className="fill-amber-600" />
                <span className="text-sm font-bold">{course.rating}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${course.author}`} className="w-10 h-10 rounded-full bg-slate-50" alt="author" />
                <div>
                  <p className="font-bold text-slate-900">{course.author}</p>
                  <p className="text-xs">UI/UX Design . Apps Design</p>
                </div>
                <button className="ml-2 text-primary font-bold hover:underline">+ Follow Mentor</button>
              </div>
              <div className="flex items-center gap-2">
                <Users size={18} className="text-primary" />
                <span>{course.students} Student</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen size={18} className="text-primary" />
                <span>{course.modules} Modul</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-primary" />
                <span>{course.duration}</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex gap-8 border-b border-slate-100">
                <button className="pb-4 text-primary font-bold border-b-2 border-primary">About</button>
                <button className="pb-4 text-slate-400 font-bold hover:text-slate-600 transition-colors">Review</button>
                <button className="pb-4 text-slate-400 font-bold hover:text-slate-600 transition-colors">Discussion</button>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900">Description</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {course.description}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900">Key Point</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {course.keyPoints?.map((point, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-slate-600">
                      <CheckCircle2 size={18} className="text-primary" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Related Courses */}
          <section className="space-y-6">
            <h3 className="text-xl font-bold text-slate-900">Related Course</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courses.filter(c => c.id !== course.id).slice(0, 2).map(c => (
                <CourseCard key={c.id} course={c} />
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar - Course Modules */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-100 sticky top-28">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-slate-900">{course.modules} Module</h3>
              <span className="text-xs font-bold text-slate-400">0/5 Done</span>
            </div>

            <div className="space-y-3">
              {[
                { title: 'Introduction', duration: '10:00', active: true },
                { title: 'What is UX Design', duration: '15:00', active: false },
                { title: 'Usability Testing', duration: '12:00', active: false },
                { title: 'Create Usability Test', duration: '30:00', active: false },
                { title: 'How to Implement', duration: '30:00', active: false },
              ].map((mod, i) => (
                <div 
                  key={i} 
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    mod.active 
                      ? 'bg-primary/5 border-primary/20 text-primary' 
                      : 'bg-slate-50 border-slate-100 text-slate-600 hover:border-primary/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${
                      mod.active ? 'bg-primary text-white' : 'bg-white text-slate-400 border border-slate-200'
                    }`}>
                      {i + 1}
                    </span>
                    <span className="text-sm font-bold">{mod.title}</span>
                  </div>
                  <span className="text-xs font-medium opacity-60">{mod.duration}</span>
                </div>
              ))}
            </div>

            <button className="w-full bg-primary text-white font-bold py-4 rounded-2xl mt-8 shadow-lg shadow-primary/30 hover:bg-primary-dark transition-all transform active:scale-[0.98]">
              Join Course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
