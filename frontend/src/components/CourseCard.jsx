import React from 'react';
import { Star, Users, BookOpen, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden group hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {course.category}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="font-bold text-slate-900 line-clamp-2 mb-3 group-hover:text-primary transition-colors min-h-[3rem]">
          {course.title}
        </h3>
        
        <div className="flex items-center gap-4 mb-4 text-xs text-slate-500">
          <div className="flex items-center gap-1">
            <Users size={14} className="text-primary" />
            <span>{course.students} Student</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen size={14} className="text-primary" />
            <span>{course.modules} Modul</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={14} className="text-primary" />
            <span>{course.duration}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-slate-50">
          <div className="flex items-center gap-2">
            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${course.author}`} className="w-8 h-8 rounded-full bg-slate-100" alt="author" />
            <p className="text-xs font-bold text-slate-700">{course.author}</p>
          </div>
          <Link 
            to={`/course/${course.id}`}
            className="p-2 bg-slate-50 text-slate-400 rounded-lg hover:bg-primary hover:text-white transition-all"
          >
            <ChevronRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
