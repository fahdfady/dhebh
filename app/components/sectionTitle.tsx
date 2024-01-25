export default function SectionTitle({ text, containerClasses }:
    { text: string, containerClasses?: string }) {
    return (
        <div className={`flex items-center gap-6 text-center ${containerClasses}`}>
            <div className="h-[0.1875rem] w-full bg-green-900"></div>
            <h2 className=" md:max-w-[18rem] lg:max-w-sm text-header-5 text-blue-1000 md:text-header-3 lg:text-header-1 w-full max-w-[16rem] shrink-0 grow">{text}</h2>
            <div className="h-[0.1875rem] w-full bg-green-900"></div>
        </div >
    )
}