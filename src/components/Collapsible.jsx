import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const CollapsibleSection = ({ title, description, button, link }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="mb-6 bg-white dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden">
            <div
                className="flex justify-between items-center p-4 cursor-pointer"
                onClick={toggleExpansion}
            >
                <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">
                    {title}
                </h3>
                <div className="flex items-center space-x-4">
                    <a
                        href={link}
                        className="inline-flex font-mono items-center px-4 py-2 text-sm font-bold text-gray-900 bg-white border-2 border-gray-200 rounded-lg hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:ring-2 focus:outline-none focus:ring-gray-300 focus:text-green-700 dark:bg-zinc-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {button}
                    </a>
                    <button
                        className="text-white focus:outline-none transition-transform duration-300"
                        aria-label={isExpanded ? "Collapse" : "Expand"}
                    >
                        {isExpanded ? (
                            <ChevronUp className="w-6 h-6" />
                        ) : (
                            <ChevronDown className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-96' : 'max-h-0'
                    }`}
            >
                <div className="p-4 bg-gray-50 dark:bg-zinc-700">
                    <p className="text-sm text-zinc-600 dark:text-zinc-300">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CollapsibleSection;
