import { Card, Skeleton, Box } from "@mui/material";

const TourSkeleton = () => {
  return (
    <Card sx={{ borderRadius: 3 }}>
      <Skeleton variant='rectangular' height={180} />
      <Box sx={{ p: 2 }}>
        <Skeleton width='80%' height={28} />
        <Skeleton width='60%' />
        <Skeleton width='40%' />
      </Box>
    </Card>
  );
};

export default TourSkeleton;
