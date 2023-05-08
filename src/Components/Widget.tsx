export function Widget() {
    return (
      <div className="flex flex-col items-center animate-fade-in">
        <p className="text-vista-blue text-4xl md:text-7xl lg:text-9xl">Bence Kolonics</p>
        <p className="text-vista-blue text-3xl md:text-4xl lg:text-5xl animate-wiggle">
          Work in progress
        </p>
        <div className="flex gap-5 lg:gap-8 mt-3 lg:mt-5">
          <svg
            viewBox="0 0 100 100"
            className="fill-vista-blue h-4 lg:h-5 animate-[pulse_2s_infinite_1s]"
          >
            <circle cx="50" cy="50" r="50" />
          </svg>
          <svg
            viewBox="0 0 100 100"
            className="fill-vista-blue h-4 lg:h-5 animate-[pulse_2s_infinite_1500ms]"
          >
            <circle cx="50" cy="50" r="50" />
          </svg>
          <svg
            viewBox="0 0 100 100"
            className="fill-vista-blue h-4 lg:h-5 animate-[pulse_2s_infinite_2s]"
          >
            <circle cx="50" cy="50" r="50" />
          </svg>
        </div>
      </div>
    );
}