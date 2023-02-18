import MenuItem from "@mui/material/MenuItem";
import ParamsData from "../component/Params/ParamsData";

export const selectItems = [
  {
    value: "GET",
    tag: MenuItem,
  },
  {
    value: "POST",
    tag: MenuItem,
  },
  {
    value: "DELETE",
    tag: MenuItem,
  },
];

export const codeSnippetLanguage = [
  {
    value: "cURL",
    tag: MenuItem,
  },
  {
    value: "JavaScript Fetch",
    tag: MenuItem,
  },
  {
    value: "JavaScript Axios",
    tag: MenuItem,
  },
  {
    value: "JavaScript XHR",
    tag: MenuItem,
  },
  {
    value: "NodeJs Request",
    tag: MenuItem,
  },
  {
    value: "python Client",
    tag: MenuItem,
  },
  {
    value: "python Request",
    tag: MenuItem,
  },
];

export let paramsTableData: (() => JSX.Element)[] = [ParamsData];
