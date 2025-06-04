import { useState, useRef } from 'react';
import Image from 'next/image';

const NewProjectButton = () => {
    const [showModal, setShowModal] = useState(false);
    const fileInputRef = useRef(null);

    const handleUploadClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const files = event.target.files;
        // Handle the files here (e.g., upload to a server)
        console.log("Selected files:", files);
    };

    return (
        <>
            <button
                onClick={() => setShowModal(true)}
                className="flex items-center gap-2 bg-zinc-900 text-white py-2 px-4 rounded-md text-sm border-none cursor-pointer hover:bg-zinc-700 transition-all duration-300  hover:grayscale-0"
            >
                <Image
                    src="/Project-icons/Magic.svg"
                    alt="Plus"
                    width={16}
                    height={16}
                    className=" hover:grayscale-0"
                />
                New project
            </button>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 min-w-[320px] relative">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-2 right-2 text-gray-400 hover:text-black"
                        >
                            ×
                        </button>
                        <h2 className="text-lg font-semibold mb-4">Create new project</h2>
                        <div className="w-full h-32 bg-gray-100 rounded mb-4">
                            {/* Placeholder for image preview */}
                        </div>
                        <input
                            type="file"
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                            multiple
                        />
                        <button
                            onClick={handleUploadClick}
                            className="bg-black text-white px-4 py-2 rounded hover:bg-zinc-700"
                        >
                            Upload
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default NewProjectButton;
