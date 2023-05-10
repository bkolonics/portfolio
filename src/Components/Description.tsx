import photo from '../assets/photo.jpg';

interface DescriptionProps {
    age: number;
}

function calculateMyAge() {
    const today = new Date();
    const birthDate = new Date(2001, 3, 11);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
    return age;
}

export function Description({age}: DescriptionProps) {

    age = calculateMyAge();
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
                I'm a <span className="text-Glaucous"> {age}</span> years
                old Developer
              </span>
            </h1>
          </div>
        </div>
      </>
    );
}