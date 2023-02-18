import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import InputArea from "../component/inputArea/InputArea";
import CodeIcon from "@mui/icons-material/Code";
import { Stack, Typography } from "@mui/material";
import CodeSnippet from "../component/CodeSnippet/CodeSnippet";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: "center",
  color: theme.palette.text.secondary,
  // color: "white",
  marginLeft: "7px",
}));

export default function Main() {
  return (
    <div className="main">
      <Box
        sx={{
          flexGrow: 1,
          height: "100%",
          width: "100%",
        }}
      >
        <Grid container spacing={1} sx={{ height: "100%", width: "100%" }}>
          <Grid item xs={12} sm={6} md={7} sx={{ height: "100vh" }}>
            <Item
              sx={{ height: "45vh", marginBottom: "5px", overflow: "auto" }}
            >
              <InputArea />
            </Item>

            <Grid item xs={12} sm={12} md={12}>
              <Item sx={{ height: "45vh", marginTop: "5px" }}>
                <Stack height="30px" direction="row" sx={{ px: 2, my: 1 }}>
                  <CodeIcon />
                  <Typography variant="body2" sx={{ px: 1, fontSize: "" }}>
                    Code Snippet
                  </Typography>
                </Stack>
                <hr />
                <CodeSnippet />
              </Item>
            </Grid>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={5}
            sx={{
              marginTop: { xs: "13px", sm: 0, md: 0 },
              height: "100vh",
            }}
          >
            <Item sx={{ height: "94%" }}>xs=6 md=4 sm=12 </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
