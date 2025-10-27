import { useState } from 'react';
import { Calendar, Award, CheckCircle, Clock, ChevronDown, ChevronUp } from 'lucide-react';

interface Milestone {
  id: string;
  title: string;
  date: string;
  marks?: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  description: string;
}

export default function MilestonesPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const milestones: Milestone[] = [
    {
      id: 'proposal',
      title: 'Project Proposal',
      date: 'January 2025',
      marks: '100%',
      status: 'completed',
      description: 'Initial project proposal submission including research problem identification, objectives, and preliminary methodology. This milestone established the foundation for the entire research project.',
    },
    {
      id: 'progress1',
      title: 'Progress Presentation 1',
      date: 'March 2025',
      marks: '100%',
      status: 'completed',
      description: 'First progress presentation showcasing initial research findings, literature review completion, and proof-of-concept implementations for AI diagnostic modules.',
    },
    {
      id: 'progress2',
      title: 'Progress Presentation 2',
      date: 'August 2025',
      marks: '100%',
      status: 'completed',
      description: 'Second progress presentation demonstrating advanced implementation of ML models, integration of Ayurvedic knowledge base, and preliminary testing results.',
    },
    {
      id: 'final',
      title: 'Final Assessment',
      date: 'Octomber 2025',
      marks: '50%',
      status: 'in-progress',
      description: 'Comprehensive final assessment including complete system demonstration, final research report, user acceptance testing results, and full documentation of the Ayushasthra platform.',
    },
    // {
    //   id: 'viva',
    //   title: 'Viva Voce',
    //   date: 'May 2025',
    //   marks: '28%',
    //   status: 'upcoming',
    //   description: 'Oral examination where the research team will defend their work, answer questions from examiners, and demonstrate deep understanding of the project\'s technical and theoretical foundations.',
    // },
  ];

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-700 border-green-300';
      case 'in-progress':
        return 'bg-blue-100 text-blue-700 border-blue-300';
      case 'upcoming':
        return 'bg-gray-100 text-gray-700 border-gray-300';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="text-green-600" size={24} />;
      case 'in-progress':
        return <Clock className="text-blue-600" size={24} />;
      case 'upcoming':
        return <Calendar className="text-gray-600" size={24} />;
      default:
        return <Calendar className="text-gray-600" size={24} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 px-4 py-2 rounded-full mb-4">
            <Award className="text-emerald-700" size={20} />
            <span className="text-emerald-700 font-medium">Project Timeline</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Milestones</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Track the progress of our research project through key assessment points
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-wrap justify-around gap-4">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <CheckCircle className="text-green-600" size={20} />
                <span className="text-2xl font-bold text-gray-800">3</span>
              </div>
              <p className="text-sm text-gray-600">Completed</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Clock className="text-blue-600" size={20} />
                <span className="text-2xl font-bold text-gray-800">1</span>
              </div>
              <p className="text-sm text-gray-600">In Progress</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Calendar className="text-gray-600" size={20} />
                <span className="text-2xl font-bold text-gray-800">1</span>
              </div>
              <p className="text-sm text-gray-600">Upcoming</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Award className="text-emerald-600" size={20} />
                <span className="text-2xl font-bold text-gray-800">100%</span>
              </div>
              <p className="text-sm text-gray-600">Total Marks</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {milestones.map((milestone, index) => (
            <div
              key={milestone.id}
              className={`bg-white rounded-xl shadow-md overflow-hidden border-l-4 transition-all duration-300 ${milestone.status === 'completed'
                ? 'border-green-500'
                : milestone.status === 'in-progress'
                  ? 'border-blue-500'
                  : 'border-gray-300'
                } hover:shadow-lg`}
            >
              <div
                className="p-6 cursor-pointer"
                onClick={() => toggleExpand(milestone.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="mt-1">{getStatusIcon(milestone.status)}</div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-800">
                          {index + 1}. {milestone.title}
                        </h3>
                        {milestone.marks && (
                          <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                            {milestone.marks}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-2">
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>{milestone.date}</span>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                            milestone.status
                          )}`}
                        >
                          {milestone.status.charAt(0).toUpperCase() +
                            milestone.status.slice(1).replace('-', ' ')}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="ml-4 text-gray-400 hover:text-gray-600 transition-colors">
                    {expandedId === milestone.id ? (
                      <ChevronUp size={24} />
                    ) : (
                      <ChevronDown size={24} />
                    )}
                  </button>
                </div>

                {expandedId === milestone.id && (
                  <div className="mt-4 pl-10 pr-8">
                    <div className="border-t pt-4">
                      <p className="text-gray-700 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-8 border border-emerald-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <Award className="text-emerald-600 mr-3" size={28} />
            Assessment Breakdown
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-gray-600 text-sm mb-1">Project Proposal</p>
              <p className="text-2xl font-bold text-emerald-700">6%</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-gray-600 text-sm mb-1">Progress Presentation 1</p>
              <p className="text-2xl font-bold text-emerald-700">6%</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-gray-600 text-sm mb-1">Progress Presentation 2</p>
              <p className="text-2xl font-bold text-emerald-700">38%</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-gray-600 text-sm mb-1">Final Assessment</p>
              <p className="text-2xl font-bold text-emerald-700">50%</p>
            </div>
            {/* <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-gray-600 text-sm mb-1">Viva Voce</p>
              <p className="text-2xl font-bold text-emerald-700">28%</p>
            </div> */}
            <div className="bg-emerald-700 p-4 rounded-lg shadow-sm">
              <p className="text-emerald-100 text-sm mb-1">Total</p>
              <p className="text-2xl font-bold text-white">100%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
