#!/usr/bin/env node
import { Command } from "commander";

const program = new Command();

program
  .name("fyk")
  .description("FindYourKing CLI tools")
  .version("0.0.0");

program
  .command("info")
  .description("Print monorepo info")
  .action(() => {
    console.log("FindYourKing Ultimate Monorepo — fyk CLI v0.0.0");
  });

program.parse();
