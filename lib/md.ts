import fs from "fs";
import path from "path";
import matter from "gray-matter"; // md解析のライブラリ
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), "md");

// mdのtop情報を取ってくる関数
export function getSortedPostsData() {
  // フォルダがあればエラー
  // /posts配下のファイル名を取得する
  const fileNames = fs.readdirSync(postsDirectory);

const allPostsData = fileNames.map((fileName) => {
  // id を取得するためにファイル名から ".md" を削除する
  const id = fileName.replace(/\.md$/, "");
  // マークダウンファイルを文字列として読み取る
  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  // 投稿のメタデータ部分を解析するために gray-matter を使う
  const matterResult = matter(fileContents);
  // console.log(matterResult)
    // データを id と合わせる
  return {
      id,
      ...(matterResult.data as {
        date: string;
        title: string;
        description: string;
        tag: string;
        author: string;
      }),
    };
  });
  // console.log(typeof allPostsData)
  // console.log(allPostsData)


  // 投稿を日付でソートする
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// 記事のhead一覧情報をobjectとして返す関数
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

// mdの内容を
export async function getPostData(id:string) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // 投稿のメタデータ部分を解析するために gray-matter を使う
  const matterResult = matter(fileContents)

  // マークダウンを HTML 文字列に変換するために remark を使う
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()
  // データを id および contentHtml と組み合わせる
  return {
    id,
    contentHtml,
    ...(matterResult.data as {
    date: string;
    title: string;
    description: string;
    tag: string;
    author: string;})
  }
}

