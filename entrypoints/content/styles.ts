interface StyleMap {
  [key: string]: string[];
}

export const styles: StyleMap = {
  biggerFont: [
    "body { font-size: 18px !important; }",
    "body { font-size: 20px !important; }",
    "body { font-size: 26px !important; }",
  ],
  boldText: [
    "body * { font-weight: 500 !important; }",
    "body * { font-weight: 600 !important; }",
    "body * { font-weight: bold !important; }",
  ],
  lineHeight: [
    "body * { line-height: 1.5 !important; }",
    "body * { line-height: 1.8 !important; }",
    "body * { line-height: 2 !important; }",
    "body * { line-height: 2.5 !important; }", // Example of dynamic length
  ],
  highContrast: [
    "body img, div { filter: grayscale(10%) !important; }",
    "body img, div { filter: grayscale(50%) !important; }",
    "body img, div { filter: grayscale(100%) !important; }",
  ],
};
