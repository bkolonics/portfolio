interface TimelineProps {
    title: string;
    date: string;
    description: string;
}

function TimelineInput({title, date, description}: TimelineProps) {
    return (
      <>
        <div className="mb-3 text-xl text-Glaucous font-semibold">{title}</div>
        <div className="flex mb-3 text-Glaucous justify-end">
          <p>{date}</p>
        </div>
        <div className="mb-24 text-justify dark:text-Columbia-blue">
          <p>{description}</p>
        </div>
      </>
    );
}

export function Timeline() {
    return (
      <>
        <div className="flex flex-col lg:w-2/5 w-11/12">
          <h1
            className="flex text-2xl justify-center lg:text-4xl font-bold my-10 text-Glaucous"
            id="timeline"
          >
            Timeline
          </h1>
          <TimelineInput
            title="High School"
            date="2015-2019"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              faucibus, nunc nec aliquam placerat, diam quam mattis lorem, quis
              aliquet massa sapien sed nisl. Sed faucibus, nunc nec aliquam
              placerat, diam quam mattis lorem, quis aliquet massa sapien sed
              nisl."
          />
          <TimelineInput
            title="High School"
            date="2015-2019"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              faucibus, nunc nec aliquam placerat, diam quam mattis lorem, quis
              aliquet massa sapien sed nisl. Sed faucibus, nunc nec aliquam
              placerat, diam quam mattis lorem, quis aliquet massa sapien sed
              nisl."
          />
          <TimelineInput
            title="High School"
            date="2015-2019"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              faucibus, nunc nec aliquam placerat, diam quam mattis lorem, quis
              aliquet massa sapien sed nisl. Sed faucibus, nunc nec aliquam
              placerat, diam quam mattis lorem, quis aliquet massa sapien sed
              nisl."
          />
        </div>
      </>
    );
}