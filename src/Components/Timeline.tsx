interface TimelineProps {
    title: string;
    date: string;
    description: string;
}

function TimelineInput({title, date, description}: TimelineProps) {
    return (
      <>
        <div className="mb-3 text-Powder-blue">{title}</div>
        <div className="mb-3 text-Columbia-blue">
          <p>{date}</p>
        </div>
        <div className="mb-3">
          <p>{description}</p>
        </div>
      </>
    );
}

export function Timeline() {
    return (
      <>
        <div className="flex flex-col w-2/5">
          <h1 className="flex text-2xl justify-center lg:text-3xl font-semibold my-10 text-Glaucous">
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