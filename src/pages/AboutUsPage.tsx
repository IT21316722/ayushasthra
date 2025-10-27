import { Users, Mail, Award, User } from 'lucide-react';
import peiris from '../assets/team/peiris.jpg';
import fernando from '../assets/team/fernando.jpg';
import huznadh from '../assets/team/huznadth.jpg';
import kaushalya from '../assets/team/kaushalya.jpg';
import supervisor from '../assets/team/supervisor.jpg';
import co from '../assets/team/co.jpg';

interface TeamMember {
  id: string;
  name: string;
  studentId: string;
  email: string;
  role: string;
  contribution: string;
  image: string;
}

export default function AboutUsPage() {
  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Peiris P.H.R',
      studentId: 'IT21584718',
      email: 'it21584718@my.sliit.lk',
      role: 'Group Leader & ML Specialist',
      contribution:
        'Tongue Health Diagnosis Module - Developed custom CNN architecture for tongue image analysis with 95% accuracy target, implemented preprocessing pipeline, and integrated with Ayurvedic knowledge base.',
      image: peiris,
    },
    {
      id: '2',
      name: 'Fernando W.M.S.K',
      studentId: 'IT21813184',
      email: 'it21813184@my.sliit.lk',
      role: 'AI Developer',
      contribution:
        'Skin Health Analysis Module - Implemented InceptionV3-based skin condition detection system, developed hydration and tone assessment algorithms, and created classification models for dermatological conditions.',
      image: fernando,
    },
    {
      id: '3',
      name: 'Huznadh M.N.M',
      studentId: 'IT21802812',
      email: 'it21802812@my.sliit.lk',
      role: 'ML Engineer',
      contribution:
        'Emotion Recognition Module - Built MobileNetV2-based facial emotion detection system, integrated mental wellness assessment with Ayurvedic principles, and developed stress pattern analysis algorithms.',
      image: huznadh,
    },
    {
      id: '4',
      name: 'Kaushalya H.G.B',
      studentId: 'IT21190520',
      email: 'it21190520@my.sliit.lk',
      role: 'Backend Developer',
      contribution:
        'Progress Tracking & Recommendation Engine - Developed Random Forest-based behavioral prediction model, implemented Ayurvedic recommendation mapping system, and created analytics dashboard for health progress visualization.',
      image: kaushalya,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 px-4 py-2 rounded-full mb-4">
            <Users className="text-emerald-700" size={20} />
            <span className="text-emerald-700 font-medium">Research Team</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated team behind the Ayushasthra research project
          </p>
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Header Section with Image */}
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 flex items-center space-x-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                />
                <div className="text-white">
                  <h3 className="text-2xl font-bold">{member.name}</h3>
                  <p className="text-emerald-100 text-sm">{member.role}</p>
                </div>
              </div>

              {/* Body Section */}
              <div className="p-6">
                <div className="space-y-3 mb-4">
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Award className="text-emerald-600" size={18} />
                    <span className="text-sm font-medium">Student ID: {member.studentId}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Mail className="text-emerald-600" size={18} />
                    <a
                      href={`mailto:${member.email}`}
                      className="text-sm text-emerald-600 hover:text-emerald-700 hover:underline"
                    >
                      {member.email}
                    </a>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Research Contribution</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.contribution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Team Achievements
            </h2>

            <div className="space-y-4">
              {[
                {
                  title: 'Innovative AI-Ayurveda Integration',
                  text: 'Successfully developed a first-of-its-kind platform that bridges modern AI diagnostics with traditional Ayurvedic wisdom, creating a holistic health management system.',
                },
                {
                  title: 'High-Accuracy ML Models',
                  text: 'Achieved up to 95% accuracy in tongue diagnosis and over 90% accuracy in skin condition classification through rigorous model training and optimization.',
                },
                {
                  title: 'User-Centric Design',
                  text: 'Created an intuitive mobile application with privacy-first architecture, making preventive healthcare accessible to users of all technological literacy levels.',
                },
                {
                  title: 'Comprehensive Research Documentation',
                  text: 'Produced extensive research documentation including literature reviews, methodology papers, and validation reports that contribute to the academic understanding of integrated healthcare systems.',
                },
              ].map((a, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-2 rounded-lg flex-shrink-0">
                    <Award className="text-emerald-700" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{a.title}</h3>
                    <p className="text-gray-600 text-sm">{a.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Supervisor Section */}
        {/* Supervisor Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl shadow-lg p-8 text-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Research Supervision</h2>

            {/* Two-column layout for supervisors */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Supervisor 1 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center text-center">
                <img
                  src={supervisor}
                  alt="Supervisor"
                  className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md mb-4"
                />
                <p className="text-2xl font-semibold mb-1">Ms. Sanjeevi Chandrasiri</p>
                <p className="text-emerald-100 mb-3">Research Supervisor</p>
                <p className="text-sm text-emerald-50 leading-relaxed mb-2">
                  Sanjeevi Chandrasiri is a Senior Lecturer in the Department of Information Technology,
                  Sri Lanka Institute of Information Technology, Malabe, Sri Lanka. Her research interests
                  are Medical Image Processing, Natural Language Processing, and Artificial Intelligence.
                </p>
                <p className="text-sm text-emerald-50 leading-relaxed">
                  Masters in Information Technology, Sri Lanka Institute of Information Technology, Sri Lanka, 2013 <br />
                  Bachelor of Science Special (Hons) in Information Technology, Sri Lanka Institute of Information Technology, Sri Lanka, 2010
                </p>
              </div>

              {/* Supervisor 2 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center text-center">
                <img
                  src={co}
                  alt="Co-Supervisor"
                  className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md mb-4"
                />
                <p className="text-2xl font-semibold mb-1">Ms. Tharushi Rubasinghe</p>
                <p className="text-emerald-100 mb-3">Co-Supervisor</p>
                <p className="text-sm text-emerald-50 leading-relaxed mb-2">
                  Assistant Lecturer
                  Faculty of Computing | Information Technology
                </p>
                <p className="text-sm text-emerald-50 leading-relaxed">
                  MSc in Information Systems (Reading) at Sri Lanka Institute of Information Technology (SLIIT), Faculty of Graduate Studies & Research (July 2022 – September 2024)
                  BSc (Spec.) (Hons) in Information Technology specializing in Software Engineering at Sri Lanka Institute of Information Technology (SLIIT), Sri Lanka (2022)
                </p>
              </div>
            </div>

            {/* Footer Info Boxes */}
            <div className="grid md:grid-cols-2 gap-4 text-sm mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <p className="font-semibold mb-1">Faculty</p>
                <p className="text-emerald-100">Faculty of Computing, SLIIT</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <p className="font-semibold mb-1">Academic Year</p>
                <p className="text-emerald-100">2024/25 June Intake</p>
              </div>
            </div>
          </div>
        </div>


        {/* Collaboration Section */}
        <div className="mt-8 bg-white rounded-xl shadow-md p-6 border-l-4 border-emerald-600">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Collaborative Research Approach</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our team adopted an agile, collaborative research methodology where each member specialized in a specific
            component while maintaining continuous integration with the overall system. Regular team meetings, code
            reviews, and knowledge-sharing sessions ensured that all modules worked seamlessly together to create a
            unified, holistic health management platform.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This interdisciplinary approach, combining expertise in machine learning, backend development, mobile
            application design, and Ayurvedic knowledge systems, exemplifies modern research collaboration and has
            been crucial to the project's success.
          </p>
        </div>
      </div>
    </div>
  );
}
