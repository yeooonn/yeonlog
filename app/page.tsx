import { PostCard } from '@/components/features/blog/PostCard';
import { mockTags } from '@/mock/home';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { TagSection } from './_components/TagSection';
import { ProfileSection } from './_components/ProfileSection';
import Link from 'next/link';
import URL from '@/constants/Url';
import { getPublishedPosts } from '@/lib/notion';

export default async function Home() {
  const posts = await getPublishedPosts();
  return (
    <div className="container py-8">
      <div className="grid grid-cols-[200px_1fr_220px] gap-6">
        {/* 좌측 사이드바 */}
        <aside>
          <TagSection tags={mockTags} />
        </aside>

        <div className="space-y-8">
          {/* 섹션 제목, 정렬 방식 선택 */}
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">블로그 목록</h2>
            <Select defaultValue="latest">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="정렬 방식 선택" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">최신순</SelectItem>
                <SelectItem value="oldest">오래된순</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* 블로그 카드 그리드 */}
          <div className="grid gap-4">
            {posts.map((post) => (
              <Link href={URL.BLOG.getBlogPost(post.id)} key={post.id}>
                <PostCard post={post} />
              </Link>
            ))}
          </div>
        </div>

        {/* 우측 사이드바 */}
        <aside>
          <ProfileSection />
        </aside>
      </div>
    </div>
  );
}
