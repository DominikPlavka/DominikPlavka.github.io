const ProgressBar = (props) => {

    let {name, progression, link} = props;
    let width = "0";

    if (progression === "starting") {
        width = "1/4";
    } else if (progression === "halfway done") {
        width = "1/2"
    } else if (progression === "finalizing") {
        width = "3/4"
    } else if (progression === "done") {
        width = "full"
    }

    return (
        <div className="mt-5">
            <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-blue-700">{name}</span>
                <span className="text-sm font-medium text-blue-700">{progression}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
                <div className={`bg-blue-600 h-3 rounded-full w-${width} transition ease-in-out delay-150 bg-blue-500 hover:scale-110 hover:bg-indigo-500 duration-300`}></div>
            </div>
            { link &&
            <div>
                <p>Link to deployed project: pornhub</p>
            </div>}
        </div>
    );
};

export default ProgressBar;