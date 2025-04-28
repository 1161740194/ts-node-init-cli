#!/usr/bin/env node

import { program } from "commander";
import { create } from "./action";

program.version("1.0.0");
function myCommander() {
    program.command('create <project> [other...]')
        .alias('c') // 别名
        .description('创建项目') // 描述
        .action(create);
}

myCommander();

program.parse(process.argv);
