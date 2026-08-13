import { Button } from "@/components/UI/button";
import { Container } from "@/components/UI/container";
import { Section } from "@/components/UI/section";
import { SectionHeader } from "@/components/UI/section-header";

export default function Home() {
  return (
    <Section>
      <Container>
        <SectionHeader
          title="Featured products"
          description="Explore some of our most popular products."
          action={<Button variant="ghost">View all</Button>}
        />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
          ...
        </div>
      </Container>
    </Section>
  );
}
