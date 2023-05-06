export function Widget() {
    return (
      <div className="flex flex-col items-center animate-fade-in">
        <p className="text-vista-blue text-9xl animate-[spin_10s_ease-in-out_infinite]">
          BK
        </p>
        <p className="text-vista-blue text-5xl">Work in progress</p>
        <div className="flex gap-8 mt-5 animate-bounce">
          <svg viewBox="0 0 100 100" className="fill-vista-blue h-5">
            <circle cx="50" cy="50" r="50" />
          </svg>
          <svg viewBox="0 0 100 100" className="fill-vista-blue h-5">
            <circle cx="50" cy="50" r="50" />
          </svg>
          <svg viewBox="0 0 100 100" className="fill-vista-blue h-5">
            <circle cx="50" cy="50" r="50" />
          </svg>
        </div>
      </div>
    );
}