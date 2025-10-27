export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">Ayushasthra</h3>
            <p className="text-sm">
              Ayurvedic Medicine Identification and Health Management System
            </p>
            <p className="text-sm mt-2">
              Faculty of Computing, SLIIT
            </p>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-3">Module Details</h3>
            <p className="text-sm">IT4010 – Research Project</p>
            <p className="text-sm">2024/25 June Intake</p>
            <p className="text-sm mt-2">Supervisor: Dr. Jayantha Amararachchi</p>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-3">Contact</h3>
            <p className="text-sm">Faculty of Computing</p>
            <p className="text-sm">Sri Lanka Institute of Information Technology</p>
            <p className="text-sm mt-2">© 2024-2025 All Rights Reserved</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-sm">
          <p>Developed as part of academic research project at SLIIT</p>
        </div>
      </div>
    </footer>
  );
}
