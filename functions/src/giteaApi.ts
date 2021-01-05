import { giteaClient } from './config';
export type Maybe<T> = T | null;

interface CommitItem {
  author?: {
    avatar_url: string;
    created: string;
    email: string;
    full_name: string;
    id: number;
    is_admin: boolean;
    language: string;
    last_login: string;
    login: string;
  };
  commit: {
    author: {
      date: string;
      email: string;
      name: string;
    };
    committer: {
      date: string;
      email: string;
      name: string;
    };
    message: string;
    tree: {
      created: string;
      sha: string;
      url: string;
    };
    url: string;
  };
  committer: {
    avatar_url: string;
    created: string;
    email: string;
    full_name: string;
    id: number;
    is_admin: boolean;
    language: string;
    last_login: string;
    login: string;
  };
  created: string;
  html_url: string;
  parents: [
    {
      created: string;
      sha: string;
      url: string;
    },
  ];
  sha: string;
  url: string;
}

export const fetchAllCommits = async (
  orgAndRepo: string,
): Promise<CommitItem[]> => {
  return fetchAllCommitsWithPages(orgAndRepo);
};

const fetchAllCommitsWithPages = async (
  orgAndRepo: string,
  page = 1,
): Promise<CommitItem[]> => {
  const currentPage = await giteaClient.get<CommitItem[]>(
    `/repos/${orgAndRepo}/commits`,
    {
      page,
    },
  );

  if (!currentPage.ok) {
    throw currentPage.originalError;
  }
  const { headers, data } = currentPage;

  if (!data) {
    throw new Error('No data found, weird...');
  }

  const parsedPageCount =
    typeof headers?.['x-pagecount'] === 'number'
      ? headers['x-pagecount']
      : parseInt(headers?.['x-pagecount'] ?? '0');
  const hasMore = parsedPageCount > page;

  if (hasMore) {
    const more = await fetchAllCommitsWithPages(orgAndRepo, page + 1);
    return [...data, ...more];
  }
  return data;
};

interface FileGetData {
  content: string;
  download_url: string;
  encoding: string;
  git_url: string;
  html_url: string;
  name: string;
  path: string;
  sha: string;
  size: number;
  submodule_git_url?: Maybe<string>;
  target?: Maybe<string>;
  type: string;
  url: string;
}

export const getFileFromGitea = async (
  orgAndRepo: string,
  filePath: string,
): Promise<FileGetData | null> => {
  const { ok, data } = await giteaClient.get<any>(
    `/repos/${orgAndRepo}/contents/${filePath}`,
  );
  if (!data || !ok) {
    return null;
  }
  return {
    content: data.content,
    download_url: data.download_url,
    encoding: data.encoding,
    git_url: data.git_url,
    html_url: data.html_url,
    name: data.name,
    path: data.path,
    sha: data.sha,
    size: data.size,
    submodule_git_url: data.submodule_git_url,
    target: data.target,
    type: data.type,
    url: data.url,
  };
};
