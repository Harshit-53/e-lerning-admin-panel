
export default function Addcourse({closeAddcourse}){

    return(
        <>
            <div className="z-10 mx-auto my-auto w-[400px] h-[200px] bg-slate-400 rounded-xl">
                <span onClick={closeAddcourse}> close it</span>
            </div>
        </>
    );
}