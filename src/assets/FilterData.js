export const filters = [

  // COLOR FILTER
  {
    id: "color",
    name: "Color",
    type: "checkbox",

    options: [
      {
        value: "white",
        label: "White",
      },

      {
        value: "black",
        label: "Black",
      },

      {
        value: "blue",
        label: "Blue",
      },

      {
        value: "red",
        label: "Red",
      },

      {
        value: "green",
        label: "Green",
      },

      {
        value: "yellow",
        label: "Yellow",
      },
    ],
  },



  // SIZE FILTER
  {
    id: "size",
    name: "Size",
    type: "checkbox",

    options: [
      {
        value: "S",
        label: "S",
      },

      {
        value: "M",
        label: "M",
      },

      {
        value: "L",
        label: "L",
      },

      {
        value: "XL",
        label: "XL",
      },
    ],
  },



  // BRAND FILTER
  {
    id: "brand",
    name: "Brand",
    type: "checkbox",

    options: [
      {
        value: "nike",
        label: "Nike",
      },

      {
        value: "adidas",
        label: "Adidas",
      },

      {
        value: "puma",
        label: "Puma",
      },

      {
        value: "offduty",
        label: "Offduty",
      },
    ],
  },



  // DISCOUNT FILTER
  {
    id: "discount",
    name: "Discount Range",
    type: "radio",

    options: [
      {
        value: "10",
        label: "10% and above",
      },

      {
        value: "20",
        label: "20% and above",
      },

      {
        value: "30",
        label: "30% and above",
      },

      {
        value: "40",
        label: "40% and above",
      },

      {
        value: "50",
        label: "50% and above",
      },
    ],
  },



  // AVAILABILITY FILTER
  {
    id: "availability",
    name: "Availability",
    type: "radio",

    options: [
      {
        value: "in_stock",
        label: "In Stock",
      },

      {
        value: "out_of_stock",
        label: "Out Of Stock",
      },
    ],
  },



  // PRICE FILTER
  {
    id: "price",
    name: "Price",
    type: "radio",

    options: [
      {
        value: "0-999",
        label: "Under ₹999",
      },

      {
        value: "1000-1999",
        label: "₹1000 - ₹1999",
      },

      {
        value: "2000-4999",
        label: "₹2000 - ₹4999",
      },

      {
        value: "5000+",
        label: "Above ₹5000",
      },
    ],
  },

];





export const singleFilters = [

  {
    id: "sort",
    name: "Sort",

    options: [
      {
        value: "price_low",
        label: "Price: Low to High",
      },

      {
        value: "price_high",
        label: "Price: High to Low",
      },

      {
        value: "newest",
        label: "Newest First",
      },

      {
        value: "discount",
        label: "Biggest Discount",
      },
    ],
  },

];