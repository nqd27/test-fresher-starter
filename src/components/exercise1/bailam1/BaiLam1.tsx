import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import React, { useState, useEffect } from 'react';
// import { useBreakpoint } from '@mantine/hooks';
import '/public/css/style1.scss'

export default function BaiLam1() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 985);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const styleWrap = {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '2.5%'
  };
  return (
    <>
      <div className='wrapper-exercise' style={styleWrap}>
        <Card shadow="sm" p="lg" radius="md" w={isMobile ? '97.5%' : '36.5%'} withBorder>
          <Card.Section>
            <Image
              src="/ImgA1.avif"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group position="apart" mt="md" mb="xs">
            <Text weight={500} size={isMobile ? 'xs' : 'xl'}>Son Doong Adventures</Text>
            <Badge color="green" variant="light">
              FEATURED
            </Badge>
          </Group>

          <Text size={
            isMobile ? 'xs' : 'sm'
          } color="dimmed">
          With Son Doong Tours you can explore more of the magical fjord landscapes with tours and activities on and around the Son Doong cave of Vietnam
          </Text>

          <Button variant="light" color="yellow" fullWidth mt="md" radius="md">
            Book classic tour now
          </Button>
        </Card>
      </div>
      <div>
      {isMobile ? <p>Mobile View</p> : <p>Desktop View</p>}
    </div>
    </>
  );
}