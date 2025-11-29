import Image from "next/image"; // Note: Only necessary if Image is used inside ArticleCard/HeroArticle, not here.
import HeroArticle from "@/components/HeroArticle";
import ArticleCard from "@/components/ArticleCard";
import { getAllArticles, getTopStories } from "@/data/articles";

export default function Home() {
  let articles = [];
  let error = null;

  try {
    articles = getAllArticles(); // if this fails → error assigned
  } catch (err) {
    error = "Failed to load news!";
  }

  if (error) {
    return (
      <main className="max-w-7xl mx-auto w-full px-4 py-6">
        <p className="text-red-600 font-semibold text-center">{error}</p>
      </main>
    );
  }

  if (!articles || articles.length === 0) {
    return (
      <main className="max-w-7xl mx-auto w-full px-4 py-6">
        <p className="text-gray-600 text-center">No news available right now.</p>
      </main>
    );
  }

  const topStories = articles.filter(a => a.isTopStory);
  const hero = topStories.length ? topStories[0] : articles[0];
  const restTopStories = topStories.slice(1);

  return (
    <main className="max-w-7xl mx-auto w-full px-4 py-6">
      <div className="grid md:grid-cols-[2fr_1fr] gap-8">

        {/* LEFT — Hero + Latest */}
        <div className="flex flex-col gap-10">
          <HeroArticle article={hero} />

          <section>
            <h2 className="section-title">Latest News</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {articles.map((a) => (
                <ArticleCard key={a.id} article={a} />
              ))}
            </div>
          </section>
        </div>

        {/* RIGHT — Top + Trending */}
        <aside className="flex flex-col gap-6">
          <div className="sidebar-box">
            <h3 className="font-semibold pb-2 border-b">Top Stories</h3>
            {restTopStories.map(a => (
              <ArticleCard key={a.id} article={a} compact />
            ))}
          </div>

          <div className="sidebar-box">
            <h3 className="font-semibold pb-2 border-b">Trending</h3>
            <ul className="space-y-2 pl-4 list-disc">
              {articles.map((a) => (
                <li key={a.id} className="trending-item line-clamp-2">
                  {a.title}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
