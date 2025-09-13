import Image from "next/image";
import { IntegrationsType } from "../sections/Integrations";
import { twMerge } from "tailwind-merge";

const IntegrationsColumn = (props: {
  integrations: IntegrationsType;
  className?: string;
}) => {
  const { integrations, className } = props;

  return (
    <div className={twMerge("flex flex-col gap-4 pb-4", className)}>
      {integrations.map((integration) => (
        <div
          key={integration.name}
          className="rounded-3xl border-white/10 bg-neutral-900 p-6"
        >
          <div className="flex justify-center">
            <Image
              src={`/assets/images/${integration.icon}`}
              alt={`${integration.name} logo`}
              width={96}
              height={96}
              className="size-24"
            />
          </div>
          <h3 className="mt-6 text-center text-3xl">{integration.name}</h3>
          <p className="mt-2 text-center text-white/50">
            {integration.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default IntegrationsColumn;
