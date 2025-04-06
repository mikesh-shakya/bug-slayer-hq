import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function ExpandableCard({ day, title, content }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border-2 border-zinc-700 rounded-l">
      <div
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between text-left p-4 bg-zinc-800 hover:bg-zinc-700 rounded-t-l transition"
      >
        <div className="flex space-x-2 items-center">
          <h3 className="text-lg font-semibold">
            Day {day}: {title}
          </h3>
        </div>
        <span className="text-l text-white rounded-l">
          {expanded ? <ChevronDown /> : <ChevronUp />}
        </span>
      </div>

      {expanded && (
        <div className="p-4 bg-zinc-900 border-zinc-700">
          <div className="bg-zinc-900 border-2 border-zinc-700 overflow-x-auto">
            <div className="grid grid-cols-4 font-semibold text-zinc-300 border-b border-zinc-700 text-center ps-8 p-4 text-l">
              <div>Topic</div>
              <div>Article</div>
              <div>YouTube</div>
              <div>Notes</div>
            </div>

            {content.map((topic, index) => (
              <div
                key={index}
                className="grid grid-cols-4 items-start text-m text-center text-zinc-200 px-8 py-4 border-b border-zinc-900"
              >
                <div>{topic.title}</div>
                <div>
                  {topic.article ? (
                    <a
                      href={topic.article}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400"
                    >
                      📄
                    </a>
                  ) : (
                    <span className="text-zinc-500">Coming soon</span>
                  )}
                </div>
                <div>
                  {topic.youtube ? (
                    <a
                      href={topic.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400"
                    >
                      📺 
                    </a>
                  ) : (
                    <span className="text-zinc-500">Coming soon</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
