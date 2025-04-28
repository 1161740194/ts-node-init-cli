declare module "download-git-repo" {
  export default function(
    url: string,
    dest: string,
    options: { clone: boolean },
    callback: (err: any) => void
  ): void;
}