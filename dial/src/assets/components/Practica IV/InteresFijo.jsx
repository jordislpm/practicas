export default function InteresFijo (props){
    return (
        <div className=".container-sm text-center p-5">
            <p className=" h4 border border-primary text-center bg-dark text-light rounded">La cuota fija mensual sería de ${props.interesFijo}</p>
        </div>
    )
}