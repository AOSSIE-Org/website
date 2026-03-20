import { Container } from '@/components/shared/Container';

export default function NotFound() {
  return (
    <Container className="mt-32">
      <h1 className="text-center text-4xl font-bold font-mono">
        Idea not found
      </h1>
      <p className="text-center mt-4 font-mono">
        We couldn&apos;t find the GSOC idea you&apos;re looking for.
      </p>
    </Container>
  );
}
