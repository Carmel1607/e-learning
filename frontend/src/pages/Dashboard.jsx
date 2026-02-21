import React from 'react';
import { courses } from '../data/mockData';
import CourseCard from '../components/CourseCard';
import { Play, Star, ChevronRight } from 'lucide-react';

const Dashboard = () => {
  const continueWatching = courses.slice(0, 3);

  return (
    <div className="space-y-10">
      {/* Hero Banner */}
      <div className="relative h-64 rounded-3xl overflow-hidden bg-primary shadow-2xl shadow-primary/20">
        <img 
          src="https://picsum.photos/seed/banner/1200/400" 
          alt="Banner" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40"
        />
        <div className="relative z-10 p-10 h-full flex flex-col justify-center max-w-2xl text-white">
          <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4 opacity-80">Online Course</p>
          <h2 className="text-4xl font-bold mb-6 leading-tight">Sharpen Your Skills With Professional Online Courses</h2>
          <button className="w-fit bg-white text-primary font-bold px-8 py-3 rounded-xl hover:bg-slate-100 transition-all flex items-center gap-2">
            Join Now <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Continue Watching */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-slate-900">Continue Watching</h3>
          <button className="text-sm font-semibold text-primary hover:underline">See All</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {continueWatching.map(course => (
            <div key={course.id} className="relative group">
              <CourseCard course={course} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                  <Play className="text-white fill-white" size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Your Mentor */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-slate-900">Your Mentor</h3>
          <button className="text-sm font-semibold text-primary hover:underline">See All</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { name: "Prashant Kumar Singh", role: "Frontend Developer", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Prashant" },
            { name: "Ravi Kumar", role: "UI/UX Designer", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ravi" }
          ].map((mentor, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 flex items-center justify-between hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-4">
                <img src={mentor.avatar} alt={mentor.name} className="w-14 h-14 rounded-full bg-slate-50" />
                <div>
                  <p className="font-bold text-slate-900">{mentor.name}</p>
                  <p className="text-xs text-slate-500">{mentor.role}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase">Frontend</span>
                <button className="text-primary text-xs font-bold hover:underline">Show Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
