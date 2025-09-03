// import React from "react";
// import SectionHeading from "../../Helper/SectionHeading";
// import { projectData } from "@/app/Data/data";
// import Link from "next/link";

// const Project = () => {
//   return (
//     <div className="pt-16 pb-16 bg-[#a3cae6]">
//       <SectionHeading> My Project</SectionHeading>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-12 w-[80%] mx-auto items-center mt-20">
//         {projectData.map((project) => (
//           <div
//             key={project.id}
//             className="bg-blue-950 rounded-lg p-6 hover:scale-105 transition-all duration-300"
//           >
//             <Link href={project.url} target="_blank">
//               <img
//                 src={project.image}
//                 alt="project"
//                 width={300}
//                 height={200}
//                 className="w-full"
//               />
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Project;
