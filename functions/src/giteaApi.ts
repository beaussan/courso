import { giteaClient } from './config';
import { CommitItem } from './hasuraActions/types';
export type Maybe<T> = T | null;
/*
interface CommitItem {
  commit_message: string;
  commit_author_date: string;
  commit_author_email: string;
  commit_author_name: string;
  commit_committer_date: string;
  commit_committer_email: string;
  commit_committer_name: string;
  commit_tree_created: string;
  commit_tree_sha: string;
  commit_tree_url: string;
  commit_url: string;
  created: string;
  html_url: string;
  sha: string;
  url: string;
  parents: [
    {
      created: string;
      sha: string;
      url: string;
    },
  ];
}
*/
interface CommitItemFromApi {
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

const mapCommitItem = (item: CommitItemFromApi): CommitItem => {
  const commit = item?.commit;
  return {
    commit_author_date: commit?.author?.date,
    commit_author_email: commit?.author?.email,
    commit_author_name: commit?.author?.name,
    commit_committer_date: commit?.committer?.date,
    commit_committer_email: commit?.committer?.email,
    commit_committer_name: commit?.committer?.name,
    commit_message: commit.message,
    commit_url: commit.url,
    commit_tree_created: commit.tree.created,
    commit_tree_sha: commit.tree.sha,
    commit_tree_url: commit.tree.url,
    created: item.created,
    html_url: item.html_url,
    parents: JSON.stringify(item.parents),
    sha: item.sha,
    url: item.url,
  };
};

const fetchAllCommitsWithPages = async (
  orgAndRepo: string,
  page = 1,
): Promise<CommitItem[]> => {
  const currentPage = await giteaClient.get<CommitItemFromApi[]>(
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
  const mappedData = data.map(mapCommitItem);

  if (hasMore) {
    const more = await fetchAllCommitsWithPages(orgAndRepo, page + 1);
    return [...mappedData, ...more];
  }
  return mappedData;
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
