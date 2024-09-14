import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about")({
  component: About,
});

const Title = ({ text }) => {
  return <h1>{text}</h1>;
};
function About() {
  return (
    <div className="p-2">
      <Title text="About Page" />
    </div>
  );
}
