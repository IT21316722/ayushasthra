import { BookOpen, Target, AlertCircle, CheckCircle, Cog } from 'lucide-react';

export default function DomainPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Research Domain</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive research framework integrating AI technology with traditional Ayurvedic medicine
          </p>
        </div>

        <div className="space-y-8">
          <section className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-600">
            <div className="flex items-start mb-6">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <BookOpen className="text-blue-600" size={28} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-800">Literature Survey</h2>
                <p className="text-gray-500 mt-1">Foundation and recent advancements in the field</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                Recent advancements in artificial intelligence (AI) and machine learning (ML) have significantly influenced
                the healthcare domain, particularly in the areas of medical image analysis, disease prediction, and personalized
                treatment recommendations. Traditional Ayurvedic medicine, with its holistic approach to wellness, emphasizes
                preventive care through the analysis of external indicators such as the tongue, skin, and emotional state.
                Integrating these Ayurvedic diagnostic techniques with modern AI technologies offers an opportunity to create
                intelligent systems that provide real-time health assessments and personalized herbal or nutritional guidance.
              </p>

              <p>
                In previous studies, tongue image analysis has been widely explored as a diagnostic tool in traditional and
                modern medicine. Researchers such as <strong>Zhang et al. (2021)</strong> and <strong>Lee et al. (2020)</strong> developed
                CNN-based tongue diagnostic systems capable of identifying diseases related to digestion, liver function, and
                metabolic disorders with over 90% accuracy. These studies demonstrated that tongue color, coating, and texture
                can be quantitatively analyzed using deep learning to infer internal organ health — a principle that aligns
                closely with Ayurvedic diagnostic practices.
              </p>

              <p>
                Similarly, skin disease classification using AI has gained substantial attention. Studies using InceptionV3,
                ResNet50, and EfficientNet architectures achieved high accuracy in identifying dermatological conditions such
                as melanoma, eczema, and atopic dermatitis from dermoscopic images. For example, <strong>Esteva et al. (2017)</strong> achieved
                dermatologist-level accuracy in skin lesion classification using a deep CNN model trained on over 120,000 images.
                These findings validate the potential of deep learning in early skin disease detection, which can be extended
                to Ayurvedic skin analysis focused on hydration, tone, and texture.
              </p>

              <p>
                The integration of emotion recognition in healthcare has also been explored to assess mental well-being. Models
                based on MobileNetV2 and VGGFace architectures have been used for facial emotion detection, achieving accuracies
                between 85–90% in classifying emotional states such as happiness, sadness, or stress. This has direct relevance
                to Ayurvedic well-being, where emotional balance is considered crucial for maintaining dosha harmony.
              </p>

              <p>
                Moreover, behavioral prediction and progress tracking have been enhanced through ensemble learning techniques
                like Random Forest and Gradient Boosting, which are effective in identifying behavioral patterns and predicting
                patient adherence. Combining such models with questionnaire data allows for personalized recommendations based
                on lifestyle and emotional indicators — a method well-suited for Ayurvedic assessment frameworks.
              </p>

              <p>
                Existing health monitoring applications, such as Ada Health, SkinVision, and Youper, leverage AI for disease
                prediction and emotional tracking but lack the integration of Ayurvedic knowledge and personalized herbal or
                dietary remedies. Recent literature emphasizes the need for AI-integrated traditional medicine systems, which
                bridge the gap between modern diagnostic precision and holistic healing traditions.
              </p>

              <p>
                Therefore, the Ayushasthra system builds upon these prior studies by combining deep learning–based tongue and
                skin health assessment, emotion recognition, and Ayurvedic recommendation mapping within a unified, real-time
                mobile platform. This integration not only enhances diagnostic accuracy but also provides users with culturally
                contextualized, natural, and preventive health management solutions.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-amber-600">
            <div className="flex items-start mb-6">
              <div className="bg-amber-100 p-3 rounded-lg mr-4">
                <AlertCircle className="text-amber-600" size={28} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-800">Research Gap</h2>
                <p className="text-gray-500 mt-1">Identified deficiencies in current approaches</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                While there has been significant progress in the application of artificial intelligence (AI) for medical
                diagnostics, a critical and multifaceted gap exists in the modern healthcare domain, particularly at the
                intersection of technology and holistic medicine. The primary issue is the lack of integrated, holistic
                platforms that can bridge the divide between cutting-edge diagnostic technology and the time-tested wisdom
                of traditional medical systems.
              </p>

              <p>
                Current digital health solutions are predominantly developed in isolation, existing as "siloed" applications
                that focus on a single, narrow aspect of health, such as calorie counting, fitness tracking, or specific
                symptom checking. This reductionist approach fails to provide a comprehensive, interconnected view of a
                person's physical, mental, and environmental well-being, which stands in stark contrast to the holistic
                philosophy of traditional systems like Ayurveda.
              </p>

              <p>
                A major research void lies in the development of a unified framework that not only diagnoses conditions but
                also provides personalized, preventive guidance based on a patient's entire profile, considering the intricate
                interplay of their various bodily systems and lifestyle factors. Furthermore, there is a notable absence of
                user-centric platforms that can seamlessly combine the diagnostic precision of AI, which excels at pattern
                recognition and data analysis, with the personalized, preventive wisdom of traditional knowledge systems that
                have been refined and passed down through centuries.
              </p>

              <p>
                These traditional systems, while rich in holistic insight, often lack the quantitative, data-driven validation
                that AI can provide, creating a significant opportunity for synergy. This research aims to fill this critical
                gap by developing a multi-modal health management application that synergizes advanced AI for diagnostics with
                a rich, structured knowledge base of Ayurvedic principles.
              </p>

              <p>
                The goal is to create a comprehensive, accessible, and ethically-grounded solution that goes beyond merely
                treating symptoms to proactively managing and improving overall wellness. By integrating diagnostic modules
                for the tongue, face, and skin, and correlating these findings with Ayurvedic recommendations, our project
                seeks to redefine the landscape of modern digital healthcare, offering a truly holistic and personalized
                approach to health and well-being.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-red-600">
            <div className="flex items-start mb-6">
              <div className="bg-red-100 p-3 rounded-lg mr-4">
                <Target className="text-red-600" size={28} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-800">Research Problem</h2>
                <p className="text-gray-500 mt-1">Core challenge addressed by this research</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                In an era of rapid technological advancement, modern healthcare is increasingly reliant on specialized,
                high-cost diagnostic tools and a reactive treatment paradigm that focuses on curing diseases after they
                manifest. This reactive approach, while highly effective for acute conditions and emergencies, often overlooks
                the interconnected nature of physical and mental health.
              </p>

              <p>
                The current system tends to treat symptoms in isolation, failing to recognize that a problem in one area of
                the body or mind can be a manifestation of an imbalance elsewhere. For instance, chronic stress can manifest
                not only as emotional distress but also as physical ailments like skin conditions, and long-term nutritional
                deficiencies can lead to noticeable changes in tongue morphology. This a la carte approach also limits the
                potential for preventative care, as the focus remains on post-diagnosis treatment rather than proactive wellness.
              </p>

              <p>
                Traditional medical systems, like Ayurveda, conversely, operate on a holistic, preventive philosophy that
                emphasizes maintaining a balance of mind, body, and spirit to sustain health and prevent disease. However,
                these traditional systems face significant barriers in the modern context. They are often perceived as
                inaccessible, requiring in-person consultations with a specialist, which can be time-consuming and costly.
                Moreover, they are frequently lacking in modern, data-driven validation, which can deter potential users
                accustomed to Western medicine.
              </p>

              <p>
                The central problem this project addresses is the significant barrier to accessible and effective preventative
                healthcare created by the current divide between these two powerful paradigms. There is a profound lack of a
                unified, user-friendly platform that can seamlessly combine the diagnostic power of AI, which can quickly and
                accurately analyze visual data from a user's own device, with the holistic principles of Ayurveda.
              </p>

              <p>
                This prevents individuals from easily and continuously monitoring their health in a comprehensive manner and
                receiving personalized, culturally relevant guidance. Our project directly addresses this problem by developing
                a solution that is not only technologically advanced but also philosophically aligned with a holistic view of
                human health, making preventative care both accessible and integrated.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-emerald-600">
            <div className="flex items-start mb-6">
              <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                <CheckCircle className="text-emerald-600" size={28} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-800">Research Objectives</h2>
                <p className="text-gray-500 mt-1">Specific goals and deliverables of the project</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="mb-6">
                This project is a direct response to the identified research problem, aiming to bridge the critical gap
                between conventional, reactive medicine and proactive, holistic wellness. The overarching goal is to develop
                a user-centric, non-invasive digital health tool that empowers individuals to take greater control of their
                well-being from the comfort of their homes.
              </p>

              <div className="space-y-6">
                <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                    <span className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">1</span>
                    Multi-Modal AI Diagnostic System
                  </h3>
                  <p className="text-gray-700 ml-11">
                    Design, implement, and rigorously validate a sophisticated multi-modal AI diagnostic system capable of
                    providing comprehensive health assessment. This involves developing three distinct CNN models specialized
                    for tongue, face, and skin analysis. The target is to achieve up to 95% accuracy for tongue diagnosis,
                    ensuring reliability and trustworthiness through iterative training, model optimization, and validation
                    against separate test sets.
                  </p>
                </div>

                <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                    <span className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">2</span>
                    Integration with Ayurvedic Principles
                  </h3>
                  <p className="text-gray-700 ml-11">
                    Establish a robust framework for translating AI-generated diagnostic outputs into personalized, actionable
                    Ayurvedic recommendations. This requires developing a comprehensive knowledge base that systematically links
                    AI findings to Ayurvedic principles and remedies, including herbal remedies, dietary plans, lifestyle
                    adjustments, and wellness practices. This fusion provides a truly holistic, integrated, and culturally
                    relevant wellness plan.
                  </p>
                </div>

                <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                    <span className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">3</span>
                    User-Centric Mobile Application
                  </h3>
                  <p className="text-gray-700 ml-11">
                    Create a user-friendly mobile application built on Flutter framework that seamlessly integrates all
                    diagnostic modules and the recommendation engine. The application will feature a clear, minimalist interface
                    ensuring ease of use for all technological literacy levels. Paramount importance will be given to upholding
                    highest ethical standards regarding user privacy and data security, with on-device processing where feasible
                    and strict policies ensuring sensitive data is handled securely.
                  </p>
                </div>

                <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                    <span className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">4</span>
                    Comprehensive System Validation
                  </h3>
                  <p className="text-gray-700 ml-11">
                    Validate the system's overall effectiveness through multi-faceted testing and evaluation including functional
                    and integration testing, rigorous performance evaluations, and user acceptance testing (UAT). A sample group
                    of users will provide qualitative feedback on usability, recommendation clarity, and overall satisfaction.
                    Final internal validation will verify that AI models consistently meet or exceed stated accuracy benchmarks
                    under various real-world conditions.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-purple-600">
            <div className="flex items-start mb-6">
              <div className="bg-purple-100 p-3 rounded-lg mr-4">
                <Cog className="text-purple-600" size={28} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-800">Methodology</h2>
                <p className="text-gray-500 mt-1">Technical approach and implementation strategy</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                The methodology of the proposed Ayushasthra system integrates artificial intelligence, machine learning, and
                Ayurvedic principles to provide personalized health insights and remedies. The process begins at the{' '}
                <strong>User Interface</strong>, where users upload tongue and skin images, complete Ayurvedic-based questionnaires,
                and provide activity and behavioral information.
              </p>

              <p>
                The collected data are processed through the <strong>Data Preprocessing Layer</strong>, which performs image
                resizing, normalization, and cleaning, while questionnaire responses are encoded and standardized for analysis.
                The preprocessed data then enter the <strong>AI and ML Module</strong>, which consists of several specialized models:
              </p>

              <ul className="space-y-2 my-4">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  <span><strong>Tongue Health Model:</strong> Built using a custom CNN to analyze tongue conditions and recovery stages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  <span><strong>Skin Health Model:</strong> Using Custom CNN and InceptionV3 to detect conditions such as melanoma and atopic dermatitis while assessing tone and hydration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  <span><strong>Emotion Recognition Model:</strong> Developed using MobileNetV2 CNN to identify emotional states from facial expressions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  <span><strong>Progress and Behavior Prediction Model:</strong> Employing Random Forest and CNN techniques to evaluate behavioral trends, recovery progress, and caregiver feedback</span>
                </li>
              </ul>

              <p>
                The insights generated from these models are utilized by the <strong>Recommendation Engine</strong>, which
                produces personalized Ayurvedic-based suggestions such as herbal remedies and nutrition plans. These outputs
                are stored and managed within the <strong>Database Layer</strong>, which maintains user profiles, images, and
                historical data for continuous learning.
              </p>

              <p>
                The results are further processed in the <strong>Analytics and Visualization Layer</strong>, where user progress,
                tongue and skin health trends, emotional state, and recovery analytics are visualized over time to provide a
                clear picture of overall wellness. Finally, the <strong>Notifications and Feedback System</strong> delivers
                timely alerts for severe conditions, reminders for medication and nutrition, and continuous feedback loops that
                enhance model performance and user adherence.
              </p>

              <p>
                This integrated framework ensures a holistic, data-driven approach to health management, combining modern AI
                methodologies with traditional Ayurvedic wisdom to promote physical and emotional well-being.
              </p>
            </div>
          </section>

          <section className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl shadow-lg p-8 border border-emerald-200">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Technologies Used</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-emerald-700 mb-4">Frontend Development</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                    Flutter & Dart for cross-platform mobile UI
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                    Material Design components
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">Backend Architecture</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Python with Flask/FastAPI
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    RESTful API architecture
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-purple-700 mb-4">AI & Machine Learning</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    TensorFlow, Keras, PyTorch
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Custom CNNs, InceptionV3, MobileNetV2
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Random Forest, Scikit-learn
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    TensorFlow Lite for on-device inference
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-amber-700 mb-4">Image Processing</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                    OpenCV for preprocessing
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                    MediaPipe for face detection
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-teal-700 mb-4">Database & Storage</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                    Firebase for user data
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                    MySQL for structured data
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-red-700 mb-4">Analytics & Visualization</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    Matplotlib, Plotly
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    Power BI for dashboards
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-indigo-700 mb-4">Cloud & Deployment</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                    Google Cloud Platform / Azure
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                    Docker containerization
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-green-700 mb-4">Security</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    AES encryption
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Firebase Authentication
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    HTTPS protocols
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
