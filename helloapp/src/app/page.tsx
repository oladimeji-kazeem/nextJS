import Link from "next/link";

export default function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <p>Your one-stop shop for all things awesome!</p>
            <Link href="/products">
                View All Products
            </Link>
        </div>
        

    )    
}