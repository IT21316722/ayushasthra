import { Presentation, Download, ExternalLink, PlayCircle } from 'lucide-react';
import proposal from '../assets/pp/proposal presentation.pptx';
import pp1 from '../assets/pp/pp1 pptx.pdf';
import pp2 from '../assets/pp/pp2 pptx.pdf';

import imgproposal from '../assets/pp/proposal.jpg';
import imgpp1 from '../assets/pp/pp1.jpg';
import imgpp2 from '../assets/pp/pp2.jpg';
import imgfinal from '../assets/pp/final.jpg'; // 👈 add your final presentation image here

interface PresentationItem {
  id: string;
  title: string;
  date: string;
  description: string;
  slidesLink: string;
  videoLink?: string;
  marks?: string;
  image: string;
}

export default function PresentationsPage() {
  const presentations: PresentationItem[] = [
    {
      id: 'proposal',
      title: 'Proposal Presentation',
      date: 'January 2025',
      marks: '6%',
      description:
        'Initial project proposal presentation introducing the research problem, objectives, and planned approach for the Ayushasthra system.',
      slidesLink: proposal,
      videoLink: '#',
      image: imgproposal,
    },
    {
      id: 'progress1',
      title: 'Progress Presentation 1',
      date: 'March 2025',
      marks: '6%',
      description:
        'First progress update showcasing literature review findings, initial model architecture designs, and proof-of-concept implementations.',
      slidesLink: pp1,
      videoLink: '#',
      image: imgpp1,
    },
    {
      id: 'progress2',
      title: 'Progress Presentation 2',
      date: 'August 2025',
      marks: '10%',
      description:
        'Second progress presentation demonstrating advanced ML model implementations, Ayurvedic knowledge base integration, and preliminary test results.',
      slidesLink: pp2,
      videoLink: '#',
      image: imgpp2,
    },
    {
      id: 'final',
      title: 'Final Presentation',
      date: 'October 2025',
      marks: '50%',
      description:
        'Comprehensive final presentation covering complete system demonstration, results analysis, user testing outcomes, and project conclusions.',
      slidesLink: '#',
      videoLink: '#',
      image: imgfinal,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 px-4 py-2 rounded-full mb-4">
            <Presentation className="text-emerald-700" size={20} />
            <span className="text-emerald-700 font-medium">Project Presentations</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Presentations</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            View and download presentation slides from various project milestones
          </p>
        </div>

        {/* Presentations List */}
        <div className="space-y-6">
          {presentations.map((presentation, index) => (
            <div
              key={presentation.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="md:flex">
                {/* Left Section with Image */}
                <div className="md:w-2/3 bg-gradient-to-br from-emerald-600 to-teal-600 relative flex items-center justify-center overflow-hidden">
                  <img
                    src={presentation.image}
                    alt={presentation.title}
                    className="object-cover w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-emerald-800/30 hover:bg-emerald-800/10 transition-colors" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                    <Presentation
                      size={56}
                      className="opacity-90 mb-4 transition-transform transform hover:scale-110"
                    />
                    <div className="text-6xl font-bold mb-2 drop-shadow-md">{index + 1}</div>
                    {presentation.marks && (
                      <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                        {presentation.marks} of total grade
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Content Section */}
                <div className="md:w-2/3 p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-2">{presentation.title}</h2>
                      <p className="text-gray-500 text-sm flex items-center">
                        <span className="mr-2">📅</span>
                        {presentation.date}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">{presentation.description}</p>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    {/* Download Slides Button */}
                    <a
                      href={presentation.slidesLink}
                      download
                      className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-lg transition-colors font-medium"
                    >
                      <Download size={18} />
                      <span>Download Slides</span>
                    </a>

                    {/* View Online Button */}
                    <a
                      href={presentation.slidesLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg transition-colors font-medium"
                    >
                      <ExternalLink size={18} />
                      <span>View Online</span>
                    </a>

                    {/* Watch Recording Button */}
                    {presentation.videoLink && (
                      <a
                        href={presentation.videoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg transition-colors font-medium"
                      >
                        <PlayCircle size={18} />
                        <span>Watch Recording</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Boxes */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-6 border border-emerald-200">
            <div className="flex items-start space-x-4">
              <div className="bg-emerald-600 p-3 rounded-lg">
                <Download className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Slide Formats</h3>
                <p className="text-gray-700 text-sm">
                  All presentations are available in PDF and PowerPoint formats. Online viewing options are provided
                  through Google Drive and OneDrive for convenience.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 p-3 rounded-lg">
                <PlayCircle className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Video Recordings</h3>
                <p className="text-gray-700 text-sm">
                  Selected presentations include video recordings of the actual presentation sessions for comprehensive
                  review and reference purposes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Access Info */}
        <div className="mt-8 bg-white rounded-xl shadow-md p-6 border-l-4 border-amber-500">
          <div className="flex items-start space-x-3">
            <div className="text-amber-500 text-xl">ℹ️</div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Access Information</h3>
              <p className="text-gray-600 text-sm">
                Some presentation materials may be restricted to SLIIT faculty and students. If you require access to
                any materials, please contact the project supervisor or team members through the Contact page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
