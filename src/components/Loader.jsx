import { Skeleton } from "@mui/material";

function Loader() {
  return (
    <div>
      <Skeleton
        animation="wave"
        width={"100%"}
        height={140}
        variant="rounded"
      ></Skeleton>
      <Skeleton animation="wave" width={150} height={40}></Skeleton>
      <Skeleton animation="wave" height={90}></Skeleton>
      <Skeleton
        animation="wave"
        height={40}
        width={40}
        variant="circular"
      ></Skeleton>
    </div>
  );
}

export default Loader;
