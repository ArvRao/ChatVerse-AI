import { Categories } from "@/components/categories";
import { Characters } from "@/components/characters";
import SearchInput from "@/components/search-input";
import prismadb from "@/lib/prismadb";

interface RootPageParams {
    searchParams: {
        categoryId: string;
        name?: string;
    }
}

const Home = async ({
    searchParams
}: RootPageParams) => {
    const data = await prismadb.chatVerseCharacter.findMany({
        where: {
            categoryId: searchParams.categoryId,
        },
        orderBy: {
            createdAt: "desc",
        },
        include: {
            _count: {
                select: {
                    messages: true,
                }
            }
        }
    });
      
    const categories = await prismadb.category.findMany()

    return ( 
        <div className="pl-10 pt-2 text-4xl">
            Welcome to ChatVerse-AI homepage
            <div className="p-5 text-xl">
                <SearchInput /> <br />
                <Categories data={categories} />
                <Characters data={data}/>
                <br />
                Welcome to home page!
            </div>
        </div>
     );
}
 
export default Home;