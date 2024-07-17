import { getAuthors } from "@/api";
import Author from "@/components/Author";

export default async function Home() {
  const items = await getAuthors(false);
  return (
    <div className="flex justify-center items-center h-screen">
      {items.map((entry) => (
        <Author data={entry} key={entry?.sys?.id}/>
      ))}
    </div>
  );
}
