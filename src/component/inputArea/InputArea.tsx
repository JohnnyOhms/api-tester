import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Stack, TextField } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { selectItems } from "../../utils/data";
import ApiTags from "../ApiTags/ApiTags";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: "5px" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function InputArea() {
  const [value, setValue] = React.useState(0);
  const [request, setRequest] = React.useState<string>("");

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleSelectChange = (event: SelectChangeEvent) => {
    setRequest(event.target.value as string);
  };

  const [tabValue, setTabValue] = React.useState("1");

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Stack direction="row" justifyContent="space-between" margin="5px">
          <Typography variant="body1">Untitled Request</Typography>
          <Button
            variant="contained"
            startIcon={<SaveIcon />}
            sx={{
              // p: 1,
              background: "grey",
            }}
          >
            Save
          </Button>
        </Stack>
        <Stack direction="row" marginTop="10px" sx={{ height: "40px" }}>
          <Box sx={{ minWidth: 110 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Req..</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={request}
                label="request"
                onChange={handleSelectChange}
              >
                {selectItems.map((item) => (
                  <item.tag key={item.value} value={item.value}>
                    {item.value}
                  </item.tag>
                ))}
              </Select>
            </FormControl>
          </Box>
          <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            sx={{ padding: "2px" }}
          />
          <Button variant="contained">Send</Button>
        </Stack>
        <br />
        <hr />
        <Box sx={{ width: "100%", typography: "body1" }}>
          <ApiTags />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}
