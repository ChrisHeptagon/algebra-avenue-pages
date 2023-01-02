import { use, useState } from "react"

export function MultipleChoice({quizLabel, choices, correctAns}){
    const [choice, changeChoice] = useState('')
    return (
        <div className="flex items-center justify-center">
        <div className="rounded-lg bg-[#f8be00] w-fit p-10">
            <h2 className="text-xl text-center grid">{quizLabel}</h2>
            <form className="flex items-center justify-center">
                <ul className="w-fit h-fit">
                    {choices.map((choice, key) =>(
                        <li id={key} className="w-full rounded-lg border border-gray-200">
                            <div className="flex items-center p-3 bg-[#04048f]">
                                <input id={key} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" type="radio" value={choice} name="list-radio" ></input>
                                <label className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300" >{choice}</label>
                            </div>
                        </li>
                    ))}
                </ul>
            </form>
        </div>
        </div>
    )
}

/* 
MultipleChoice quizLabel="Practice Example 1" choices={["y = -1/8 (x+2)^2 + 1", "y = -1/8 (x+2)^2 - 1", "y = - 1/8 (x-2)^2 + 1", "y = - 1/8 (x-2)^2 - 1"]} correctAns="y = - 1/8 (x-2)^2 - 1"/>                                                                              

*/

export function ShortResponse({quizLabel, regex}){
    const reg = new RegExp(regex)
    var answerResponse; 
    const [text, setText] = useState('');

    function handleChange(event){
        setText(event.target.value)
        console.log(text)
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log(text)
    }
    
    if (reg.test(text) === true) {
        answerResponse = <div className="p-4 mb-4 w-fit text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800">
            <span className="">Correct Answer!</span>
        </div>
        
    } else if (text === '')
        answerResponse = 
        <div>
            <span className="p-4 mb-4 w-fit text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800">
                Type Something
            </span>
        </div>

    return (
        <div className="flex items-center justify-center">
        <div className="rounded-lg bg-[#0aa583] w-fit p-10">
            <h2 className="text-[white] pb-10">{quizLabel}</h2>
            {answerResponse}
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" onChange={handleChange} name="answer_form" className="block py-2.5 w-full bg-transparent border-b-2 border-[#1302ff] appearance-none   dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Type Answer Here"/>
                </div>
                <div className="flex pt-5 items-start">
                <button type="submit" className=" bg-[#7e7eff] hover:bg-[#6d6dff] p-2 rounded-lg" >Submit</button>
                </div>
            </form>
        </div>
        </div>
    )
}
