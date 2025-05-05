import { Card, CardContent } from '@/components/ui/card';
import { Github, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function ProfileSection() {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="bg-muted rounded-full p-2">
              <div className="h-36 w-36 overflow-hidden rounded-full">
                <Image
                  src="/assets/images/profile.png"
                  alt="김연정"
                  width={144}
                  height={144}
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-bold">김연정</h3>
            <p className="text-primary text-sm">Frontend Developer</p>
          </div>

          <div>
            {/* Mail */}
            <div className="border-primary/20 mb-3 rounded border p-2 text-center text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4" />
                <p>Email</p>
              </div>
              <p className="text-[12px]">yeooonn0303@naver.com</p>
            </div>

            {/* Github */}
            <div className="border-primary/20 rounded border p-2 text-center text-sm">
              <div className="flex items-center gap-2">
                <Github className="w-4" />
                <p>Github</p>
              </div>
              <Link href={'https://github.com/yeooonn'} target="_blank" rel="noopener noreferrer">
                <p className="text-[12px]">https://github.com/yeooonn</p>
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
