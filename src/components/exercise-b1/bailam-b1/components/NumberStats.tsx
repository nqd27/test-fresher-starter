import { Grid, Group, Paper, Text, ThemeIcon } from "@mantine/core";
import { IconChartRadar } from "@tabler/icons";
import { useNumbersFormContext } from "../formContext";
import { countChiaHetCho3, filterChiaHetCho7, hasNumber10, sum } from "./arrayHandlers";
import { Prism } from '@mantine/prism';

function Stat({ label, value }: { label: string; value: number | string; }) {
  return (
    <Paper withBorder radius="md" my="xl" p="md" maw={200}>
      <Group position="apart">

        <ThemeIcon size="xl" color="green" variant="light">
          <IconChartRadar />
        </ThemeIcon>

        <div>
          <Text color="dimmed" size="xs" transform="uppercase" weight={700} align="right">
            {label}
          </Text>
          <Text weight={700} size="xl" align="right">
            {value}
          </Text>
        </div>
      </Group>
    </Paper>
  );
}

export default function NumberStats() {
  const form = useNumbersFormContext();
  const numbers = form.values.numbers.map((item) => item.num);
  // console.log(numbers);

  return (
    <>
      <Grid mt="xl" gutter={50}>
        <Grid.Col span={12} md={3}>
          <Stat label="Length" value={numbers.length} />
        </Grid.Col>
        <Grid.Col span={12} md={3}>
          <Stat label="Chia Hết Cho 3" value={countChiaHetCho3(numbers)} />
        </Grid.Col>
        <Grid.Col span={12} md={3}>
          <Stat label="Tổng" value={sum(numbers)} />
        </Grid.Col>
        <Grid.Col span={12} md={3}>
          <Stat label="Tìm Số 10" value={hasNumber10(numbers) ? "Tìm Thấy" : "Ko Thấy"} />
        </Grid.Col>
        <Grid.Col span={12}>
          <Text>Danh Sách Chia Hết Cho 7</Text>
          <Prism language="json">
            {JSON.stringify(filterChiaHetCho7(numbers), null, 0)}
          </Prism>
        </Grid.Col>
      </Grid>
    </>
  );
}