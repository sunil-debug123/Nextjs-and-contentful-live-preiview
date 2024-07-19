import { getAuthors } from "@/api";
import Author from "@/components/Author";

export default async function Home() {
  const items = await getAuthors(false);
  return (
    <div className="flex justify-center items-center h-screen">
        <Author data={items} />
    </div>
  );
}
