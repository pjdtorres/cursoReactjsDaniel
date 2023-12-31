import * as React from "react";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import NavHeader from "../../components/NavHeader";
import MyCards from "../../components/MyCards";
import Footer from "../../components/NavHeader/Footer";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const card = [
  {
    id: 1,
    image:
      "https://media.istockphoto.com/id/1389603578/pt/foto/laptop-blank-screen-on-wood-table-with-blurred-coffee-shop-cafe-interior-background-and.jpg?s=1024x1024&w=is&k=20&c=zXqQxfR6VdQHeTbjROSeyAT96lhKB0xGBJf2vwy-fNw=",
    title: "Notebook",
    description: "Notebook da pixabay",
  },
  {
    id: 2,
    image:
      "https://cdn.pixabay.com/photo/2019/12/12/11/40/engineer-4690505_1280.jpg",
    title: "Notebook e celular",
    description: "Notebook do celular",
  },
  {
    id: 3,
    image:
      "https://cdn.pixabay.com/photo/2013/12/20/03/07/car-engine-231213_1280.jpg",
    title: "VR",
    description: "Realidae virtual",
  },
  {
    id: 4,
    image:
      "https://media.istockphoto.com/id/1435220822/pt/foto/african-american-software-developer.jpg?s=1024x1024&w=is&k=20&c=MM2h3jPN_7M0_0QAvkrFN6CzqaWffyus2ZKQLL-JLPc=",
    title: "Androide",
    description: "Androide da pixabay",
  },
];

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <NavHeader />
      <CssBaseline />

      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Lista de Tecnologias
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Este é o nosso primeiro projeto.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Entrar</Button>
              <Button variant="outlined">Cancelar</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <MyCards data={card} />
        </Container>
      </main>

      {/* Footer */}
      <Footer />
      {/* End footer */}
    </ThemeProvider>
  );
}

export default App;
