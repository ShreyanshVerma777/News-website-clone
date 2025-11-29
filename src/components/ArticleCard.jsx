import Link from "next/link";
import Image from "next/image";

export default function ArticleCard({ article, compact }) {
  return (
    <Link href={`/news/${article.slug}`}>
      <article className="news-card group">
        {!compact && (
          <div className="relative w-32 h-24 rounded overflow-hidden">
            {article.imageUrl ? (
              <Image
                src={article.imageUrl}
                alt={article.title}
                
                className="object-cover"
               width={400}
              height={300}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-200 text-xl">
                No Img
              </div>
            )}
          </div>
        )}

        <div className="flex flex-col w-full">
          <span className="text-[20px] uppercase text-red-600 font-bold">
            {article.category}
          </span>

          <h3 className="text-ls font-semibold line-clamp-2 group-hover:text-red-600">
            {article.title}
          </h3>

          <span className="text-[10px] text-gray-500 mt-auto">
            {new Date(article.date).toLocaleDateString("en-IN")}
          </span>
        </div>
      </article>
    </Link>
  );
}
