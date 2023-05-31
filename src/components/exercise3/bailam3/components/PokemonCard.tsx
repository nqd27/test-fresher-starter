import { PokemonData } from "../data/pokemon.data";
import { useClipboard } from "@mantine/hooks";
import data from "../data/pokemon.data";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import React, { useState, useEffect } from "react";

export default function PokemonCard({ pokemon }: { pokemon: PokemonData }) {
  const clipboard = useClipboard({ timeout: 500 });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 985);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(pokemon);
  return (
    <>
      <div className="wrapper-exercise">
        <Card shadow="sm" p="lg" radius="md" w={"100%"} withBorder>
          <Card.Section>
            <Image src={pokemon.image} height={160} alt="Norway" />
          </Card.Section>

          <Group position="apart" mt="md" mb="xs">
            <Text weight={500}>{pokemon.name}</Text>
          </Group>

          <Text size={"sm"} color="dimmed">
            {pokemon.description}
          </Text>

          <Button variant="light" color="yellow" onClick={() => {
            clipboard.copy(pokemon.description);
          }} fullWidth mt="md" radius="md">
            {clipboard.copied ? 'Copied' : 'Copy Pokemon Description'}
          </Button>
        </Card>
      </div>
    </>
  );
}
