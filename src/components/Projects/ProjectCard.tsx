import { Card, CardHeader, CardBody, CardFooter, Avatar } from "@nextui-org/react";
import { NeonGradientCard } from "../magicui/neon-gradient-card";

export default function ProjectCard({
  projectName,
  teamName,
  projectLogoUrl,
  projectDesc,
  teamMembers,
  techStack,
 
}: {
  id: string;
  projectName: string;
  teamName: string;
  projectLogoUrl: string;
  projectDesc: string;
  teamMembers: string;
  techStack: string;
  projectUrl: string;
}) {


  return (
    <NeonGradientCard>
      <Card className="max-w-[320px] sm:max-w-[400px] md:max-w-[500px] p-3 mx-2">
        <CardHeader className="justify-between">
          <div className="flex gap-5">
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="font-bold text-base sm:text-lg md:text-xl leading-none text-default-600">{projectName}</h4>
              <h5 className="text-sm sm:text-base tracking-tight text-default-400">BY {teamName}</h5>
            </div>
          </div>
          <Avatar isBordered radius="full" size="md" src={projectLogoUrl} />
        </CardHeader>

        <CardBody className="px-3 py-0 text-xs sm:text-sm text-default-400 overflow-y-hidden w-[100%] h-16 md:h-20">
          <p>{projectDesc}</p>
        </CardBody>

        <CardFooter className="justify-between mt-4">
          <div className="flex flex-col gap-1">
            <div className="font-semibold text-xs sm:text-sm w-40 sm:w-48 md:w-60 h-5 overflow-hidden text-gray-400">
              {teamMembers}
            </div>
            <p className="text-xs sm:text-sm text-default-400">TEAM MEMBERS</p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="font-semibold text-xs sm:text-sm w-28 sm:w-32 md:w-36 overflow-x-hidden text-gray-400">{techStack}</p>
            <p className="text-xs sm:text-sm text-default-400">TECH STACK</p>
          </div>
        </CardFooter>
      </Card>
    </NeonGradientCard>
  );
}
