export default function Stars() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute w-full h-full bg-black" />

            <div className="absolute top-20 left-20 w-1 h-1 bg-white rounded-full" />
            <div className="absolute top-40 left-1/3 w-1 h-1 bg-white rounded-full" />
            <div className="absolute top-72 right-1/4 w-1 h-1 bg-white rounded-full" />
            <div className="absolute bottom-32 right-20 w-1 h-1 bg-white rounded-full" />
        </div>
    );
}