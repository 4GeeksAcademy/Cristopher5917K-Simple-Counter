import React from "react";

const SecondCounter = ({ numOne, numTwo, numThree, numFour, numFive, numSix }) => {
    return (
        <>


            <div className="bg-dark d-flex justify-content-center flex-wrap: nowrap">
                <i className="fa-regular fa-clock text-light d-flex p-3 m-3 fs-1 border border-dark-subtle rounded"></i>
                <h1 className="text-light d-flex p-3 m-3 fs-1 border border-dark-subtle rounded">{numSix % 10}</h1>
                <h1 className="text-light d-flex p-3 m-3 fs-1 border border-info-subtle rounded">{numFive % 10}</h1>
                <h1 className="text-light d-flex p-3 m-3 fs-1 border border-light-subtle rounded">{numFour % 10}</h1>
                <h1 className="text-light d-flex p-3 m-3 fs-1 border border-light-subtle rounded"> {numThree % 10}</h1>
                <h1 className="text-light d-flex p-3 m-3 fs-1 border border-light-subtle rounded">{numTwo % 10}</h1>
                <h1 className="text-light d-flex p-3 m-3 fs-1 border border-light-subtle rounded "> {numOne % 10}</h1>

            </div>
        </>
    )
}

export default SecondCounter