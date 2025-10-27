import { FileText, Download, FolderOpen } from 'lucide-react';
import chater from '../assets/pp/chaater.pdf';
import check from '../assets/pp/chechlist document.pdf';
import proposal from '../assets/pp/proposal presentation.pdf';

interface Document {
  id: string;
  title: string;
  category: string;
  description: string;
  downloadLink: string;
}

export default function DocumentsPage() {
  const documents: Document[] = [
    {
      id: 'charter',
      title: 'Project Charter',
      category: 'Planning',
      description: 'Official project initiation document outlining scope, objectives, stakeholders, and high-level requirements.',
      downloadLink: `${chater}`,
    },
    {
      id: 'proposal',
      title: 'Project Proposal Document',
      category: 'Proposal',
      description: 'Comprehensive research proposal including literature review, research gap, problem statement, objectives, and methodology.',
      downloadLink: `${proposal}`,
    },
    {
      id: 'checklist',
      title: 'Project Checklist Documents',
      category: 'Management',
      description: 'Quality assurance checklists for various project phases ensuring adherence to academic standards and guidelines.',
      downloadLink: '#',
    },
    {
      id: 'report-main',
      title: 'Final Report - Main Version',
      category: 'Final Submission',
      description: 'Primary final research report documenting complete project implementation, results, and conclusions.',
      downloadLink: '#',
    },
    {
      id: 'report-member1',
      title: 'Final Report - Individual Contribution (Member 1)',
      category: 'Final Submission',
      description: 'Individual research contribution by Peiris. PHR focusing on tongue health diagnosis module.',
      downloadLink: '#',
    },
    {
      id: 'report-member2',
      title: 'Final Report - Individual Contribution (Member 2)',
      category: 'Final Submission',
      description: 'Individual research contribution by Fernando W.M.S.K focusing on skin health analysis module.',
      downloadLink: '#',
    },
    {
      id: 'report-member3',
      title: 'Final Report - Individual Contribution (Member 3)',
      category: 'Final Submission',
      description: 'Individual research contribution by Huznadh M.N.M focusing on emotion recognition module.',
      downloadLink: '#',
    },
    {
      id: 'report-member4',
      title: 'Final Report - Individual Contribution (Member 4)',
      category: 'Final Submission',
      description: 'Individual research contribution by Kaushalya H.G.B focusing on progress tracking and Ayurvedic recommendation engine.',
      downloadLink: '#',
    },
    {
      id: 'status-1',
      title: 'Status Document 1',
      category: 'Progress Reports',
      description: 'First progress status report detailing initial research findings and preliminary implementations.',
      downloadLink: `${check}`,
    },
    {
      id: 'status-2',
      title: 'Status Document 2',
      category: 'Progress Reports',
      description: 'Second progress status report showcasing advanced implementation and testing results.',
      downloadLink: `${check}`,
    },
  ];

  const categories = Array.from(new Set(documents.map((doc) => doc.category)));

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 px-4 py-2 rounded-full mb-4">
            <FolderOpen className="text-emerald-700" size={20} />
            <span className="text-emerald-700 font-medium">Project Documentation</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Documents</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Access all research documents, reports, and project deliverables
          </p>
        </div>

        <div className="space-y-8">
          {categories.map((category) => (
            <div key={category}>
              <div className="flex items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-800">{category}</h2>
                <div className="ml-4 flex-1 h-px bg-gray-300"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {documents
                  .filter((doc) => doc.category === category)
                  .map((doc) => (
                    <div
                      key={doc.id}
                      className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-200"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="bg-emerald-100 p-3 rounded-lg flex-shrink-0">
                          <FileText className="text-emerald-700" size={24} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            {doc.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4">
                            {doc.description}
                          </p>
                          <a
                            href={doc.downloadLink}
                            className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                          // onClick={(e) => {
                          //   e.preventDefault();
                          //   alert('Download link will be available soon');
                          // }}
                          >
                            <Download size={16} />
                            <span>Download PDF</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-8 border border-blue-200">
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <FileText className="text-blue-700" size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Document Access Information</h3>
              <p className="text-gray-700 mb-4">
                All documents are provided in PDF format for easy viewing and printing. Some documents may require
                academic credentials for access. For questions about document availability or access issues, please
                contact the project team through the Contact page.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-gray-800 mb-1">Last Updated</p>
                  <p className="text-gray-600">April 2025</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-gray-800 mb-1">Total Documents</p>
                  <p className="text-gray-600">{documents.length} files</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
