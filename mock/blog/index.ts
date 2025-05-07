export interface TableOfContentsItem {
  id: string;
  title: string;
  items?: TableOfContentsItem[];
}

export const mockTableOfContents: TableOfContentsItem[] = [
  {
    id: 'intro',
    title: '소개',
    items: [],
  },
  {
    id: 'getting-started',
    title: '시작하기',
    items: [
      {
        id: 'prerequisites',
        title: '사전 준비사항',
        items: [
          {
            id: 'node-installation',
            title: 'Node.js 설치',
          },
          {
            id: 'npm-setup',
            title: 'NPM 설정',
          },
        ],
      },
      {
        id: 'project-setup',
        title: '프로젝트 설정',
        items: [
          {
            id: 'create-project',
            title: '프로젝트 생성',
          },
          {
            id: 'folder-structure',
            title: '폴더 구조',
          },
        ],
      },
    ],
  },
  {
    id: 'shadcn-ui-setup',
    title: 'Shadcn UI 설정하기',
    items: [
      {
        id: 'installation',
        title: '설치 방법',
        items: [
          {
            id: 'cli-installation',
            title: 'CLI 도구 설치',
          },
          {
            id: 'component-setup',
            title: '컴포넌트 설정',
          },
        ],
      },
      {
        id: 'configuration',
        title: '환경 설정',
        items: [
          {
            id: 'theme-setup',
            title: '테마 설정',
          },
          {
            id: 'typography',
            title: '타이포그래피',
          },
        ],
      },
    ],
  },
];