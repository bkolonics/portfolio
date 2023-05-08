export function Widget() {
    return (
      <div className="flex flex-col items-center animate-fade-in">
        <p className="text-vista-blue text-9xl">
          BK
        </p>
        <p className="text-vista-blue text-5xl animate-wiggle">Work in progress</p>
        <div className="flex gap-8 mt-5">
          <svg
            viewBox="0 0 100 100"
            className="fill-vista-blue h-5 animate-[pulse_2s_infinite_1s]"
          >
            <circle cx="50" cy="50" r="50" />
          </svg>
          <svg
            viewBox="0 0 100 100"
            className="fill-vista-blue h-5 animate-[pulse_2s_infinite_1500ms]"
          >
            <circle cx="50" cy="50" r="50" />
          </svg>
          <svg
            viewBox="0 0 100 100"
            className="fill-vista-blue h-5 animate-[pulse_2s_infinite_2s]"
          >
            <circle cx="50" cy="50" r="50" />
          </svg>
        </div>
      </div>
    );
}