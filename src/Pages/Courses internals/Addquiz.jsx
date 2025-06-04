import QuizQuestion from "./Quizquestion";
import AddQuestion from "./Addquestion";
import { useState } from "react";
export default function AddQuiz(){

    const [addqs, setAddqs] = useState(false);
    return(
        <>
            <div className="w-full flex-1 mb-3 bg-slate-200 rounded-xl flex gap-2 flex-col">
                <div className="w-full flex p-3">
                    <span className="font-semibold mr-2">Quiz Name: </span>
                    <input type="text" className="border-none outline-none rounded-md px-2 bg-slate-50 flex-1"/>
                </div>
                <span className="bg-[#3B82F6] text-white px-2 py-1 text-sm ml-3 w-fit rounded-xl hover:cursor-pointer"
                onClick={()=>setAddqs(true)}>
                Add questions</span>
                <div className="w-[95%] h-32 p-3 mx-auto gap-2 bg-slate-50 rounded-xl flex flex-wrap overflow-auto hide-scrollbar ">
                    <QuizQuestion Name={'Question 1'}></QuizQuestion>
                    <QuizQuestion Name={'Question 2'}></QuizQuestion>
                    <QuizQuestion Name={'Question 3'}></QuizQuestion>
                    <QuizQuestion Name={'Question 4'}></QuizQuestion>
                    <QuizQuestion Name={'Question 5'}></QuizQuestion>
                    <QuizQuestion Name={'Question 5'}></QuizQuestion>
                    <QuizQuestion Name={'Question 5'}></QuizQuestion>
                    <QuizQuestion Name={'Question 5'}></QuizQuestion>
                    <QuizQuestion Name={'Question 5'}></QuizQuestion>
                    <QuizQuestion Name={'Question 5'}></QuizQuestion>
                    <QuizQuestion Name={'Question 5'}></QuizQuestion>
                    <QuizQuestion Name={'Question 5'}></QuizQuestion>
                    <QuizQuestion Name={'Question 5'}></QuizQuestion>
                    <QuizQuestion Name={'Question 5'}></QuizQuestion>
                    <QuizQuestion Name={'Question 5'}></QuizQuestion>
                    <QuizQuestion Name={'Question 5'}></QuizQuestion>
                    <QuizQuestion Name={'Question 5'}></QuizQuestion>

                </div>
                <span className="self-center mt-auto mb-3 bg-black text-white rounded-md px-2 py-1 hover:cursor-pointer"
                >
                    Add this quiz
                </span>

                {addqs && <AddQuestion onClose={()=>setAddqs(false)}></AddQuestion>}
            </div>
        </>
    );
}