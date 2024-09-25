import { setWorldConstructor, World, IWorldOptions } from "@cucumber/cucumber";
import * as messages from "@cucumber/messages";
import { BrowserContext, Page, PlaywrightTestOptions, APIRequestContext } from "@playwright/test";

export interface CucumberWorldConstructorParams {
  parameters: { [key: string]: string };
}

export interface ICustomWorld extends World {
  debug: boolean;
  feature?: messages.Pickle;
  context?: BrowserContext;
  secondContext?: BrowserContext;
  page?: Page;
  newTab?: Page;
  thirdTab?: Page;
  secondPage?: Page;
  pagePromise?: Page;
  testName?: string;
  startTime?: Date;
  server?: APIRequestContext;
  newServer?: APIRequestContext;
  playwrightOptions?: PlaywrightTestOptions;
  projectNameFilter?: string;
  projectList?: string[];
  columnList?: string[];
  todoContent?: string;
  replyComment?: string;
  projectName?: string;
  taskLink?: string | null;
  isStepTakeScreenShot?: boolean;
  myFileName: string;
  solutionName?: string;
  serviceOfferingName?: string;
  solutionItem?: string;
  dateNow?: string;
  tempArray?: string[];
  popup?: Page;
  secondTab?: Page;
  bodyData?: any;
  userId?: string;
  commonAction?: any;
}

export class CustomWorld extends World implements ICustomWorld {
  constructor(options: IWorldOptions) {
    super(options);
  }
  debug = false;
  myFileName = "";
}

setWorldConstructor(CustomWorld);
