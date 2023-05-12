interface ProjectsProps {
    title: string;
    category: string;
    status: string;
    description: string;
}

function ProjectsInput({title, category, status, description}: ProjectsProps) {
    return (
      <>
        <div className="bg-Columbia-blue rounded-3xl p-3">
          <div className="flex mb-3 items-end justify-around text-Glaucous font-semibold">
            <div className="text-xl justify-start">{title}</div>
            <div className="text-sm justify-end">{category}</div>
          </div>
          <div className="text-Glaucous">Status: {status}</div>
          <div className="mb-24 text-justify">
            <p>{description}</p>
          </div>
        </div>
      </>
    );
}

export function Projects() {
    return (
        <>
        <div className="grid grid-cols-3 gap-4">
            <ProjectsInput
                title="High School"
                category="Category"
                status="On-going"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                faucibus, nunc nec aliquam placerat, diam quam mattis lorem, quis
                aliquet massa sapien sed nisl. Sed faucibus, nunc nec aliquam
                placerat, diam quam mattis lorem, quis aliquet massa sapien sed
                nisl."
            />
            <ProjectsInput
                title="High School"
                category="Category"
                status="On-going"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                faucibus, nunc nec aliquam placerat, diam quam mattis lorem, quis
                aliquet massa sapien sed nisl. Sed faucibus, nunc nec aliquam
                placerat, diam quam mattis lorem, quis aliquet massa sapien sed
                nisl."
            />
            <ProjectsInput
                title="High School"
                category="Category"
                status="On-going"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                faucibus, nunc nec aliquam placerat, diam quam mattis lorem, quis
                aliquet massa sapien sed nisl. Sed faucibus, nunc nec aliquam
                placerat, diam quam mattis lorem, quis aliquet massa sapien sed
                nisl."
            />
            <ProjectsInput
                title="High School"
                category="Category"
                status="On-going"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                faucibus, nunc nec aliquam placerat, diam quam mattis lorem, quis
                aliquet massa sapien sed nisl. Sed faucibus, nunc nec aliquam
                placerat, diam quam mattis lorem, quis aliquet massa sapien sed
                nisl."
            />
            <ProjectsInput
                title="High School"
                category="Category"
                status="On-going"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                faucibus, nunc nec aliquam placerat, diam quam mattis lorem, quis
                aliquet massa sapien sed nisl. Sed faucibus, nunc nec aliquam
                placerat, diam quam mattis lorem, quis aliquet massa sapien sed
                nisl."
            />
            <ProjectsInput
                title="High School"
                category="Category"
                status="On-going"
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