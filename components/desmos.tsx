import Script from "next/script";

export function DesmosGraph({ divID, equations }){
    return (
    <div className="flex items-center justify-center p-10">
        <div id={divID} className="w-[1024px] h-[512px] border border-[#0011f8]">
        <Script>{`
        var elt = document.getElementById('${divID}');
        var calculator = Desmos.GraphingCalculator(elt, { expressions: false });
        `}
        </Script>
        </div>
        {equations.map((equation: any) => (<Script>
            {`calculator.setExpression({latex: '${equation}' });`}</Script>))}
    </div>
        )
}

export function DesmosGraphCalc({ divID }){
    return (
        <div className="flex items-center justify-center p-10">
        <div id={divID} className="w-[1024px] h-[512px] border border-[#0011f8]">
        <Script>{`
        var elt = document.getElementById('${divID}');
        var calculator = Desmos.GraphingCalculator(elt);
        `}
        </Script>
        </div>
        </div>
    )
}

export function DesmosCalc({ divID }){
    return (
        <div className="flex items-center justify-center p-10">
        <div id={divID} className="w-[1024px] h-[512px] border border-[#0011f8]">
        <Script>{`
        var elt = document.getElementById('${divID}');
        var calculator = Desmos.ScientificCalculator(elt);
        `}</Script>
        </div>
        </div>
    )
}