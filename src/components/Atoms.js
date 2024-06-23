
function SectionsSubHeaders({text}) {
    return(
        <div>
            <div className="flex flex-row items-center w-[80%] mx-auto gap-4">
                <p className="text-5xl text-green-500">{text}</p>
                <span className="bg-green-500 w-[70%] h-[2.5px] rounded-full mt-2"></span>
            </div>
        </div>
    );
}

function Skills() {
    return(
        <div>

        </div>
    );
}

const Atoms = { SectionsSubHeaders, Skills };
export default Atoms;