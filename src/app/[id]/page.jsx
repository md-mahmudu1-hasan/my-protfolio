import { Allprojects } from "../../data/projects";
import ProjectDetailsClient from "./ProjectDetailsClient";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return Allprojects.map((project) => ({
    id: project._id,
  }));
}

export function generateMetadata({ params }) {
  const project = Allprojects.find((p) => p._id === params.id);

  if (!project) {
    return {
      title: "Project Not Found | Md Mahmudul Hasan",
      description:
        "This project could not be found in the portfolio. Explore more web development and ERP projects by Md Mahmudul Hasan.",
    };
  }

  return {
    title: `${project.title} | Md Mahmudul Hasan Portfolio`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} | Md Mahmudul Hasan Portfolio`,
      description: project.shortDescription,
      url: `https://mdmahmudulhasan.me/${params.id}`,
      type: "website",
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Md Mahmudul Hasan Portfolio`,
      description: project.shortDescription,
      images: [project.image],
    },
  };
}

const ProjectDetails = ({ params }) => {
  const project = Allprojects.find((p) => p._id === params.id);

  if (!project) {
    notFound();
  }

  return <ProjectDetailsClient project={project} />;
};

export default ProjectDetails;
