import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CollapsibleTable from "../Params/Params";

export default function ApiTags() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="Params" />
        <Tab value="two" label="Headers" />
        <Tab value="three" label="Body" />
        <Tab value="three" label="Authorization" />
        <CollapsibleTable />
      </Tabs>
    </Box>
  );
}
