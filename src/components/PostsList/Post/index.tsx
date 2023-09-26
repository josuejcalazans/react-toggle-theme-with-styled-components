import { Container } from "./styles";
import { PostListProps } from "./types";

export function Post ({title, description}:PostListProps) {

  return (
    <Container>
      <h2>{title}</h2>
      <small>{description}</small>
    </Container>
  )
}