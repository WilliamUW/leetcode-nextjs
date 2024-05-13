"use client";

import CodeMirror from "@uiw/react-codemirror";
import { EditorView } from "@codemirror/view";
import SolutionTabs from "./SolutionTabs";
import { githubDark } from "@uiw/codemirror-theme-github";
import { python } from "@codemirror/lang-python";

function SolutionShowcase({ solutions, codeStub }) {
  return (
    <div className="w-full h-full overflow-x-hidden justify-items-start mb-10">
      <div className="font-bold text-left mb-2">Solutions</div>
      <div className="font-bold text-left mb-2">
        <div>
          {false && solutions && solutions.length > 0 ? (
            <SolutionTabs solutions={solutions} />
          ) : (
            <CodeMirror
              value={codeStub}
              extensions={[python({}), EditorView.lineWrapping]}
              theme={githubDark}
              readOnly={false} // Set readOnly to false to make it editable
              autoFocus={true}
              basicSetup={{
                lineWrapping: true,
                highlightActiveLineGutter: false,
                editable: true,
              }}
              className="indent-1"
            />
          )}
        </div>
      </div>
    </div>
  );
}
export default SolutionShowcase;
