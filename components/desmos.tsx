import Script from "next/script";

type DesmosProps = {
    divID: string;
    equations: any;
};

export function DesmosGraph(props: DesmosProps){
    const { divID, equations } = props;
    return (
    <div className="flex items-center justify-center p-10">
        <div id={divID} className="w-[1024px] h-[512px] border border-[#0011f8]">
        <Script id={divID}>{`
        var elt = document.getElementById('${divID}');
        var calculator = Desmos.GraphingCalculator(elt, { expressions: false });
        `}
        </Script>
        </div>
<<<<<<< HEAD
        {equations.map((equation:string) => (<Script key={equation} id={equation}>
=======
        {equations.map((equation: any) => (<Script key={divID} id={divID}>
>>>>>>> 12ef17d7dd47ccb860598ccb09232443d024a6f2
            {`calculator.setExpression({latex: '${equation}' });`}</Script>))}
    </div>
        )
}

export function DesmosGraphCalc(props: DesmosProps){
    const { divID } = props;
    return (
        <div className="flex items-center justify-center p-10">
        <div id={divID} className="w-[1024px] h-[512px] border border-[#0011f8]">
        <Script id={divID}>{`
        var elt = document.getElementById('${divID}');
        var calculator = Desmos.GraphingCalculator(elt);
        `}
        </Script>
        </div>
        </div>
    )
}

export function DesmosCalc(props: DesmosProps){
    const { divID } = props;
    return (
        <div className="flex items-center justify-center p-10">
        <div id={divID} className="w-[1024px] h-[512px] border border-[#0011f8]">
        <Script id={divID}>{`
        var elt = document.getElementById('${divID}');
        var calculator = Desmos.ScientificCalculator(elt);
        `}</Script>
        </div>
        </div>
    )
}