"use client";

import { Button } from "@material-tailwind/react";
import CodeMirror from "@uiw/react-codemirror";
import { EditorView } from "@codemirror/view";
import SolutionTabs from "./SolutionTabs";
import { githubDark } from "@uiw/codemirror-theme-github";
import { python } from "@codemirror/lang-python";

function SolutionShowcase({ solutions, codeStub, reward }) {
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
      <div>
        <Button
          onClick={() => {
            alert("Running code... " + codeStub);
          }}
        >
          Run Code
        </Button>

        <Button
          onClick={() => {
            alert(
              "Congrats on completing the challenge! You have received the reward: " +
                reward
            );
          }}
        >
          Submit
        </Button>
        <br />
      </div>
      <div>
        <div className="font-bold text-left mb-2">Reward</div>
        <div>{reward}</div>
        <br />
      </div>
    </div>
  );
}
export default SolutionShowcase;
