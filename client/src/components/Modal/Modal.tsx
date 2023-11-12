import React, { useState } from 'react';

interface ModalProps {
  courseDetails: any;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ courseDetails, onClose }) => {
  const [isSyllabusExpanded, setIsSyllabusExpanded] = useState(false);

  const handleSyllabusToggle = () => {
    setIsSyllabusExpanded(!isSyllabusExpanded);
  };

  return (
    <div className="fixed inset-0 overflow-y-auto z-50">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
        &#8203;
        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
          style={{ maxHeight: '80vh', overflowY: 'auto' }}
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Course Details</h3>
            <p><strong>Course Name:</strong> {courseDetails.name_of_course}</p>
                         <p><strong>Name of Instructor:</strong> {courseDetails.name_of_instructor}</p>
                         <p><strong>Description:</strong> {courseDetails.description}</p><br />
                         <p><strong>Enrollment status:</strong> {courseDetails.name_of_course}</p>
                         <p><strong>Course duration:</strong> {courseDetails.duration}</p>
                         <p><strong>Schedule:</strong> {courseDetails.schedule}</p>
                         <p><strong>Location:</strong> {courseDetails.location}</p>
                         <p><strong>Pre-requisites:</strong> {courseDetails.perequisites}</p>
            <p>
              <strong>Syllabus:</strong>
              <span
                className={`cursor-pointer text-blue-500 ${
                  isSyllabusExpanded ? 'underline' : ''
                }`}
                onClick={handleSyllabusToggle}
              >
                {isSyllabusExpanded ? 'Collapse' : 'Expand'}
              </span>
            </p>
            {isSyllabusExpanded && <p>{courseDetails.syllabus}</p>}
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

