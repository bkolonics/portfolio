import photo from '../assets/photo.jpg';


export function Description() {
    return (
      <>
        <div className="flex">
          <div className="w-1/2">
            <img
              src={photo}
              alt="photo"
              className="rounded-full w-6/12 justify-center items-center block mx-auto"
            />
          </div>
          <div className="w-1/2">
            <h1 className="text-4xl font-bold text-center">
              Hi, I'm <span className="text-Glaucous">Bence</span> <br />
              <span className="text-3xl font-semibold text-center">
                I'm a <span className="text-Glaucous"> age </span> Developer
              </span>
            </h1>
          </div>
        </div>
      </>
    );
}