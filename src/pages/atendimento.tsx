import { product } from "~/components/data";
import { ProductCard } from "~/components/ProductCard";
import { Stack, Typography } from "@mui/material";
import { PageContainer } from "~/containers/PageContainer";

export default function ServicesPage() {
  return (
    <>
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={(theme) => ({
          marginTop: theme.spacing(6),
        })}
      >
        <Typography variant="h5" fontWeight="bold">
          ATENDIMENTOS ORACULARES
        </Typography>
      </Stack>
      <Stack>
        <PageContainer>
          {product.map((product, index) => (
            <ProductCard
              key={index}
              price={product.price}
              image={product.image}
              product={product.product}
              description={product.description}
            />
          ))}
        </PageContainer>
      </Stack>
    </>
  );
}
