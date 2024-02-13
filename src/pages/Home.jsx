import Grid from "@mui/material/Unstable_Grid2";
import AllCards from "../components/AllCards";
import { useFetch } from "../hook/useFetch";
import Loader from "../components/Loader";
function Home() {
  const url = "https://api.escuelajs.co/api/v1/products";
  const { data, isPending, error } = useFetch(url);
  return (
    <main style={{ marginTop: "50px" }}>
      <div style={{ padding: "20px" }}>
        <Grid
          container
          spacing={5}
          disableEqualOverflow
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {isPending
            ? [1, 2, 3, 4, 5, 6].map((num) => (
                <Grid key={num} xs={6} md={4}>
                  <Loader />
                </Grid>
              ))
            : data &&
              data.map((product) => (
                <Grid key={product.id} xs={6} md={4}>
                  <AllCards {...product} />
                </Grid>
              ))}
        </Grid>
      </div>
    </main>
  );
}

export default Home;
