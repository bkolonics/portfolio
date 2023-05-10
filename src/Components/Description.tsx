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
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <img
              src={photo}
              alt="photo"
              className="rounded-full w-6/12 justify-center items-center block mx-auto border-8 border-Glaucous shadow-2xl"
            />
          </div>
          <div className="lg:w-1/2">
            <h1 className="text-3xl lg:text-4xl font-bold text-center">
              Hi, I'm <span className="text-Glaucous">Bence</span>
            </h1>
            <h1 className="text-justify md:m-20 m-5">
              <span className="text-2xl lg:text-3xl font-semibold text-center">
                I'm a <span className="text-Glaucous"> {age}</span> years old
                Developer. Molestiae tenetur ipsum voluptas qui rerum
                praesentium dolores. Omnis occaecati quod ea a. Veritatis animi
                laudantium delectus autem quia. Qui totam aut itaque et
                voluptatem eum illo odit. Voluptatem nostrum impedit
                reprehenderit. Nesciunt distinctio enim illo et.
              </span>
            </h1>
          </div>
        </div>
      </>
    );
}