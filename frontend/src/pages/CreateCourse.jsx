import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Save, X, Upload, Plus, Trash2, Video, Music, FileText, BookOpen } from 'lucide-react';

const CreateCourse = () => {
  const navigate = useNavigate();
  const [modules, setModules] = useState([{ title: '', duration: '' }]);

  const addModule = () => setModules([...modules, { title: '', duration: '' }]);
  const removeModule = (index) => setModules(modules.filter((_, i) => i !== index));

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Create New Course</h2>
          <p className="text-slate-500 text-sm">Fill in the details to publish a new course</p>
        </div>
        <button 
          onClick={() => navigate('/admin')}
          className="p-2 text-slate-400 hover:bg-slate-100 rounded-xl transition-all"
        >
          <X size={24} />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Form */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <FileText size={20} className="text-primary" />
              General Information
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Course Title</label>
                <input 
                  type="text" 
                  placeholder="e.g. Advanced React Patterns"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Author Name</label>
                  <input 
                    type="text" 
                    placeholder="Prashant Kumar Singh"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Category</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none">
                    <option>Frontend</option>
                    <option>Backend</option>
                    <option>Design</option>
                    <option>Marketing</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Description</label>
                <textarea 
                  rows="4"
                  placeholder="Describe what students will learn..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <BookOpen size={20} className="text-primary" />
                Course Modules
              </h3>
              <button 
                onClick={addModule}
                className="text-primary text-sm font-bold flex items-center gap-1 hover:underline"
              >
                <Plus size={16} /> Add Module
              </button>
            </div>

            <div className="space-y-4">
              {modules.map((module, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-xs font-bold text-slate-400 border border-slate-200">
                    {index + 1}
                  </span>
                  <input 
                    type="text" 
                    placeholder="Module Title"
                    className="flex-1 bg-transparent border-none focus:ring-0 text-sm font-semibold"
                  />
                  <input 
                    type="text" 
                    placeholder="10:00"
                    className="w-20 bg-transparent border-none focus:ring-0 text-sm text-slate-500 text-center"
                  />
                  <button 
                    onClick={() => removeModule(index)}
                    className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Media Sidebar */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Video size={20} className="text-primary" />
              Media Assets
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Thumbnail Image</label>
                <div className="border-2 border-dashed border-slate-200 rounded-2xl p-8 flex flex-col items-center justify-center gap-2 hover:border-primary/50 transition-colors cursor-pointer group">
                  <Upload className="text-slate-400 group-hover:text-primary transition-colors" size={32} />
                  <p className="text-xs font-bold text-slate-500">Upload Image</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Video URL</label>
                <input 
                  type="text" 
                  placeholder="https://..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Original Audio (EN)</label>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 flex items-center gap-2">
                    <Music size={16} className="text-slate-400" />
                    <span className="text-xs text-slate-400">Select audio file...</span>
                  </div>
                  <button className="p-3 bg-slate-100 rounded-xl text-slate-600 hover:bg-slate-200">
                    <Upload size={18} />
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Dubbed Audio (FR)</label>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 flex items-center gap-2">
                    <Music size={16} className="text-slate-400" />
                    <span className="text-xs text-slate-400">Select audio file...</span>
                  </div>
                  <button className="p-3 bg-slate-100 rounded-xl text-slate-600 hover:bg-slate-200">
                    <Upload size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <button className="w-full bg-primary text-white font-bold py-4 rounded-2xl shadow-lg shadow-primary/30 hover:bg-primary-dark transition-all transform active:scale-[0.98] flex items-center justify-center gap-2">
            <Save size={20} />
            Publish Course
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
