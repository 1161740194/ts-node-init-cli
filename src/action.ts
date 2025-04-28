import { ICreateArgs } from "./interface";
import download from "download-git-repo";

export const create = (args: string) => {
  console.log("create", args);
  download("direct:git@github.com:1161740194/ts-node-init.git", args, { clone: true }, (err: any) => {
    if (err) {
      console.error(err);
    }

    console.log("下载成功");
  });
};
