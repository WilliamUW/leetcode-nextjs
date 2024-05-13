import { getQuestion, getSimilarQuestions, questions } from "@/utils/controllers";

import { QuestionBody } from "@/components/QuestionBody";
import QuestionNavigator from "@/components/QuestionNavigator";
import SolutionShowcase from "@/components/SolutionShowcase";
import isInteger from "@/utils/isInteger";
import { notFound } from "next/navigation";

isInteger;

export const revalidate = 2500;

export default async function QuestionsPage({ params: { qid } }) {
  if (!isInteger(qid)) notFound();

  // const { data } = await getQuestion(qid);
  const data = [questions[qid - 1]];
  console.log(qid, data);
  if (!data) notFound();
  const { data: similarQuestions } = await getSimilarQuestions(qid);
  return (
    <div className="flex-col w-full mx-auto">
      <QuestionNavigator qid={qid} />
      {data && (
        <div className="flex h-screen flex-col lg:flex-row justify-center overflow-y-hidden gap-10">
          <QuestionBody
            qid={data[0]["QID"]}
            title={data[0]["title"]}
            hints={data[0]["Hints"]}
            body={data[0]["Body"]}
            difficulty={data[0]["difficulty"]}
            similarQuestions={similarQuestions}
            topicTags={data[0]["topicTags"]}
            paidOnly={data[0]["paidOnly"]}
          />
          {/* <SolutionTabs /> */}
          {!data[0]["paidOnly"] && (
            <SolutionShowcase
              solutions={data[0].solutions}
              codeStub={data[0].Code}
            />
          )}
        </div>
      )}
    </div>
  );
}
