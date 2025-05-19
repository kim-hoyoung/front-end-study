const products = [
  {
    브랜드: "수아레",
    상품명: "케이블 카라 반팔 니트 - 6 Color",
    가격: 39900,
  },
  {
    브랜드: "커버낫",
    상품명: "에센셜 어쩌고",
    가격: 34300,
  },
];

const newProducts = products.map((product) => {
  return {
    ...product,
    가격: product.가격 * 0.8,
  };
});

console.log(newProducts);
