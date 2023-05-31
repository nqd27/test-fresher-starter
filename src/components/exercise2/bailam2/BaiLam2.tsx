import { Grid, Divider, Button, SegmentedControl, Switch } from "@mantine/core";
import { useState } from "react";
type ButtonVariant = 'outline' | 'light' | 'filled' | 'subtle' | 'default' ;

export default function BaiLam2() {
  const [value, setValue] = useState<ButtonVariant>('outline');
  const [disabled, setDisabled] = useState(false);

  // Data
  let data = [
    { value: 'outline', label: 'Outline' },
    { value: 'light', label: 'Light' },
    { value: 'filled', label: 'Filled' },
    { value: 'subtle', label: 'Subtle' },
    { value: 'default', label: 'Default' },
  ]

  // Handle disbale of swtich
  const handleSwitch = (e: any) => {
    // console.log(e.target.checked);
    setDisabled(e.target.checked);
  }

  return (
    <>
      <Grid>
        {/* Column 1 */}
        <Grid.Col span={12} m={"xl"}>
          <Grid grow align="center" justify="space-between" gutter={5} >
            <Grid.Col span={12} sm={6} md={8} lg={7}>
              <Grid>
                <Grid.Col>
                  <SegmentedControl
                    value={value}
                    onChange={setValue}
                    data={data}
                    color="pink"
                  />
                </Grid.Col>
              </Grid>
            </Grid.Col>
            <Grid.Col style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }} span={12} sm={6} md={4} lg={5}>
              <Switch
                label="Disabled"
                onChange={handleSwitch}
              />
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
      <Divider size="xs" />
      <Grid align="center" justify="center">
        {/* Column 2 */}
        <Grid.Col span={3} m={"md"}>
              <Button variant={value} disabled={disabled}>The Button</Button>
        </Grid.Col>
      </Grid>
    </>
  );
}
