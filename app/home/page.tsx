import { Categories } from "@/components/categories";
import SearchInput from "@/components/search-input";
import prismadb from "@/lib/prismadb";

const Home = async () => {
    const categories = await prismadb.category.findMany()
    return ( 
        <div className="pl-10 pt-2 text-4xl">
            Welcome to ChatVerse-AI homepage
            <div className="p-5 text-xl">
                <SearchInput /> <br />
                <Categories data={categories} />
                <br />
                Welcome to home page!
            </div>
        </div>
     );
}
 
export default Home;