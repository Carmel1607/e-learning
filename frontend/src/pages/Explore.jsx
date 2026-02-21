import React from 'react';
import { courses } from '../data/mockData';
import CourseCard from '../components/CourseCard';
import { Filter, SlidersHorizontal, ChevronDown } from 'lucide-react';

const Explore = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900">Explore Courses</h2>
        
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-600 hover:border-primary hover:text-primary transition-all">
            <Filter size={18} />
            Category
            <ChevronDown size={16} />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-600 hover:border-primary hover:text-primary transition-all">
            <SlidersHorizontal size={18} />
            Sort by: Popular
            <ChevronDown size={16} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Explore;