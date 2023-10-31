function parsePartCode(partCode) {
  let colonIndex = partCode.indexOf(":");
  let dashIndex = partCode.indexOf("-");

  let supplierCode = partCode.substring(0, colonIndex);
  let productNumber = partCode.substring(colonIndex + 1, dashIndex);
  let size = partCode.substring(dashIndex + 1);

  return {
    supplierCode,
    productNumber,
    size,
  };
}

// parsePartCode("XYZ:1234-L")
let partCode1 = "XYZ:1234-L";
let part1 = parsePartCode(partCode1);
console.log(
  "Supplier: " +
    part1.supplierCode +
    " Product Number: " +
    part1.productNumber +
    " Size: " +
    part1.size
);
