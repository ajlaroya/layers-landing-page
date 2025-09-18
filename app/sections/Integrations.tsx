import Tag from "../components/Tag";
import IntegrationsColumn from "../components/IntegrationsColumn";

const integrations = [
  {
    name: "Figma",
    icon: "figma-logo.svg",
    description: "Figma is a collaborative interface design tool.",
  },
  {
    name: "Notion",
    icon: "notion-logo.svg",
    description: "Notion is an all-in-one workspace for notes and docs.",
  },
  {
    name: "Slack",
    icon: "slack-logo.svg",
    description: "Slack is a powerful team communication platform.",
  },
  {
    name: "Relume",
    icon: "relume-logo.svg",
    description: "Relume is a no-code website builder and design system.",
  },
  {
    name: "Framer",
    icon: "framer-logo.svg",
    description: "Framer is a professional website prototyping tool.",
  },
  {
    name: "GitHub",
    icon: "github-logo.svg",
    description: "GitHub is the leading platform for code collaboration.",
  },
];

export type IntegrationsType = typeof integrations;

export default function Integrations() {
  return (
    <section className="overflow-hidden py-24">
      <div className="container mx-auto px-8">
        <div className="grid items-center lg:grid-cols-2 lg:gap-16">
          <div>
            <Tag>Integrations</Tag>
            <h2 className="mt-6 text-6xl font-medium">
              Plays well with <span className="text-lime-400">others</span>
            </h2>
            <p className="mt-4 text-lg text-white/40">
              Layers seamlessly connects with your favourite tools, making it
              easy to plug into any workflow and collaborate across platforms.
            </p>
          </div>
          <div className="mt-8 grid h-[400px] gap-4 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] md:grid-cols-2 lg:mt-0 lg:h-[800px]">
            <IntegrationsColumn integrations={integrations} />
            <IntegrationsColumn
              integrations={integrations.slice().reverse()}
              reverse
              className="hidden md:flex"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
