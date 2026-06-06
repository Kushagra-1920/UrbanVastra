import { StarIcon } from "@heroicons/react/20/solid";
import { Grid, Box, Rating, Typography } from "@mui/material";
import ProductReview from "../components/productPageComponents/ProductReview";
import LinearProgress from '@mui/material/LinearProgress';
import { kurta } from "../assets/Kurta/kurta"
import ProductCard from "../components/productPageComponents/ProductCard";

const product = {
    name: "Basic Tee 6-Pack",
    price: "₹399",
    href: "#",
    breadcrumbs: [
        { id: 1, name: "Men", href: "#" },
        { id: 2, name: "Clothing", href: "#" },
    ],
    images: [
        {
            src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
            alt: "Two each of gray, white, and black shirts laying flat.",
        },
        {
            src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
            alt: "Model wearing plain black basic tee.",
        },
        {
            src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
            alt: "Model wearing plain gray basic tee.",
        },
        {
            src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
            alt: "Model wearing plain white basic tee.",
        },
    ],
    colors: [
        {
            id: "white",
            name: "White",
            classes: "bg-white checked:outline-gray-400",
        },
        {
            id: "gray",
            name: "Gray",
            classes: "bg-gray-200 checked:outline-gray-400",
        },
        {
            id: "black",
            name: "Black",
            classes: "bg-gray-900 checked:outline-gray-900",
        },
    ],
    sizes: [
        { name: "S", inStock: true },
        { name: "M", inStock: true },
        { name: "L", inStock: true },
        { name: "XL", inStock: false },
    ],
    description:
        'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
        "Hand cut and sewn locally",
        "Dyed with our proprietary colors",
        "Pre-washed & pre-shrunk",
        "Ultra-soft 100% cotton",
    ],
    details:
        'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const RatingRow = ({ label, value, color }) => {
    return (
        <div className="flex items-center gap-4 ">

            <div className="w-24 shrink-0">
                <span className="text-sm text-gray-700 whitespace-nowrap">
                    {label}
                </span>
            </div>

            <div className="flex-1">
                <LinearProgress
                    variant="determinate"
                    value={value}
                    sx={{
                        height: 8,
                        borderRadius: 5,
                        backgroundColor: "#E5E7EB",
                        "& .MuiLinearProgress-bar": {
                            backgroundColor: color,
                            borderRadius: 5,
                        },
                    }}
                />
            </div>

            <div className="w-10 text-xs text-gray-500 text-right">
                {value}%
            </div>
        </div>
    );
};

export default function ProductDetailsPage() {
    return (
        <div className="bg-white ">
            <div className=" container pt-6 mx-auto  px-4 sm:px-6 lg:px-4">
                <nav aria-label="Breadcrumb">
                    <ol
                        role="list"
                        className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
                    >
                        {product.breadcrumbs.map((breadcrumb) => (
                            <li key={breadcrumb.id}>
                                <div className="flex items-center">
                                    <a
                                        href={breadcrumb.href}
                                        className="mr-2 text-sm font-medium text-gray-900"
                                    >
                                        {breadcrumb.name}
                                    </a>
                                    <svg
                                        fill="currentColor"
                                        width={16}
                                        height={20}
                                        viewBox="0 0 16 20"
                                        aria-hidden="true"
                                        className="h-5 w-4 text-gray-300"
                                    >
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                    </svg>
                                </div>
                            </li>
                        ))}
                        <li className="text-sm">
                            <a
                                href={product.href}
                                aria-current="page"
                                className="font-medium text-gray-500 hover:text-gray-600"
                            >
                                {product.name}
                            </a>
                        </li>
                    </ol>
                </nav>

                <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10 ">
                    {/* Image gallery */}
                    <div className="flex flex-col items-center">
                        <div className=" overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
                            <img
                                alt={product.images[0].alt}
                                src={product.images[0].src}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>

                        <div className="flex flex-wrap space-x-5 justify-center">
                            {product.images.map((item) => (
                                <div className="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4">
                                    <img
                                        alt={item.alt}
                                        src={item.src}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product info */}
                    <div className=" lg:col-span-1 mx-auto max-w-2xl px-4 pb-6 sm:px-6 lg:max-w-2xl lg:px-8 lg:pb-24">
                        <div className="lg:col-span-2 ">
                            <h1 className="text-lg  lg:text-2xl font-bold tracking-tight text-gray-900 ">
                                Universal Outfit
                            </h1>
                            <h1 className="text-lg lg:text-2xl font-bold  opacity-60  m-auto pt-1 text-gray-900 ">
                                Women Kurta and Pant Set Art Silk
                            </h1>
                        </div>

                        {/* Options */}
                        <div className="mt-4 lg:row-span-3 lg:mt-0">
                            <h2 className="sr-only">Product information</h2>

                            <div className="flex flex-wrap  text-l items-center space-x-2 mt-2 lg:text-xl">
                                <p className="font-semiboldbold "> ₹1999 </p>
                                <p className="  line-through opacity-50 "> ₹7996 </p>
                                <p className="  font-bold opacity-75 text-green-500">75% off</p>
                            </div>

                            {/* Reviews */}
                            <div className="mt-6">
                                <h3 className="sr-only">Reviews</h3>
                                <div className="flex items-center">
                                    <div className="flex items-center">
                                        {[0, 1, 2, 3, 4].map((rating) => (
                                            <StarIcon
                                                key={rating}
                                                aria-hidden="true"
                                                className={classNames(
                                                    reviews.average > rating
                                                        ? "text-amber-300"
                                                        : "text-gray-200",
                                                    "size-5 shrink-0",
                                                )}
                                            />
                                        ))}
                                    </div>
                                    <p className="sr-only">{reviews.average} out of 5 stars</p>
                                    <a
                                        href={reviews.href}
                                        className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                                    >
                                        {reviews.totalCount} reviews
                                    </a>
                                </div>
                            </div>

                            <form className="mt-10">
                                {/* Colors
                                <div>
                                    <h3 className="text-sm font-medium text-gray-900">Color</h3>

                                    <fieldset aria-label="Choose a color" className="mt-4">
                                        <div className="flex items-center gap-x-3">
                                            {product.colors.map((color) => (
                                                <div key={color.id} className="flex rounded-full outline -outline-offset-1 outline-black/10">
                                                    <input
                                                        defaultValue={color.id}
                                                        defaultChecked={color === product.colors[0]}
                                                        name="color"
                                                        type="radio"
                                                        aria-label={color.name}
                                                        className={classNames(
                                                            color.classes,
                                                            'size-8 appearance-none rounded-full forced-color-adjust-none checked:outline-2 checked:outline-offset-2 focus-visible:outline-3 focus-visible:outline-offset-3',
                                                        )}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </fieldset>
                                </div> */}

                                {/* Sizes */}
                                <div className="mt-10">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-medium text-gray-900">Size</h3>
                                    </div>

                                    <fieldset aria-label="Choose a size" className="mt-4">
                                        <div className="grid grid-cols-4 gap-3">
                                            {product.sizes.map((size) => (
                                                <label
                                                    key={size.id}
                                                    aria-label={size.name}
                                                    className="group relative flex items-center justify-center rounded-md border border-gray-300 bg-white p-3 has-checked:border-indigo-600 has-checked:bg-indigo-600 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600 has-disabled:border-gray-400 has-disabled:bg-gray-200 has-disabled:opacity-25"
                                                >
                                                    <input
                                                        defaultValue={size.id}
                                                        defaultChecked={size === product.sizes[2]}
                                                        name="size"
                                                        type="radio"
                                                        disabled={!size.inStock}
                                                        className="absolute inset-0 appearance-none focus:outline-none disabled:cursor-not-allowed"
                                                    />
                                                    <span className="text-sm font-medium text-gray-900 uppercase group-has-checked:text-white">
                                                        {size.name}
                                                    </span>
                                                </label>
                                            ))}
                                        </div>
                                    </fieldset>
                                </div>

                                <button
                                    type="submit"
                                    className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                                >
                                    Add to bag
                                </button>
                            </form>
                        </div>

                        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
                            {/* Description and details */}
                            <div>
                                <h3 className="sr-only">Description</h3>

                                <div className="space-y-6">
                                    <p className="text-base text-gray-900">
                                        {product.description}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h3 className="text-sm font-medium text-gray-900">
                                    Highlights
                                </h3>

                                <div className="mt-4">
                                    <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                        {product.highlights.map((highlight) => (
                                            <li key={highlight} className="text-gray-400">
                                                <span className="text-gray-600">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                                <div className="mt-4 space-y-6">
                                    <p className="text-sm text-gray-600">{product.details}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Rating and reviews */}
                
<section className="pt-10 px-4 sm:px-6 md:px-10 lg:px-20">
    <h1 className="font-semibold text-2xl pb-6 text-center">
        Rating and Reviews
    </h1>

    <div className="border border-gray-200 rounded-xl  bg-gray-100 p-16 m-3">
        
        {/* MAIN 2 COLUMN WRAPPER */}
        <Grid container spacing={50} >

            {/* LEFT SIDE - REVIEWS */}
            <Grid item xs={12} md={9}>
                <div className="space-y-4 mt-3">
                    {[1, 2, 3].map((_, index) => (
                        <ProductReview key={index} />
                    ))}
                </div>
            </Grid>

            {/* RIGHT SIDE - RATING */}
            <Grid item xs={12} md={3} >
                
                {/* HEADER */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold">
                        Product Rating
                    </h2>

                    <div className="flex items-center gap-2 mt-2">
                        <Rating value={4.5} precision={0.5} readOnly />
                        <span className="text-sm text-gray-600">
                            578 reviews
                        </span>
                    </div>
                </div>

                {/* BREAKDOWN */}
                <div className="space-y-4">

                    <RatingRow label="Excellent" value={80} color="#2E7D32" />
                    <RatingRow label="Very Good" value={65} color="#43A047" />
                    <RatingRow label="Good" value={55} color="#FACC15" />
                    <RatingRow label="Average" value={35} color="#F97316" />
                    <RatingRow label="Poor" value={5} color="#EF4444" />

                </div>

            </Grid>

        </Grid>
    </div>
</section>


                {/* Similar Products */}
                <div className="pt-8 m-5 w-[100]">
                    <h1 className=" font-semibold text-2xl text-center">
                        Similar Products
                    </h1>
                        <br />

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 m-auto">
                        {kurta.map((item) => (
                            <ProductCard key={item.id} product={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
