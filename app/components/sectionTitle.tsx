export default function SectionTitle({ text }:{ text: string }) {
    return (
        <div className="__className_a5ed60 flex items-center gap-6">
            <div className="h-[0.1875rem] w-full bg-green-900"></div>
            <h2 className="text-header-5 text-blue-1000 md:text-header-3 lg:text-header-1 whitespace-nowrap">{text}</h2>
            <div className="h-[0.1875rem] w-full bg-green-900"></div>
        </div>
    )
}