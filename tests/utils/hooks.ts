import { Page } from '@playwright/test';
import { buildUrl } from './uiUrlBuilder';
import BookPage from '../ui/pages/book-page';
import LoginPage from '../ui/pages/login-page';
import ProfilePage from '../ui/pages/profile-page';
import { BasePage } from '../ui/pages/BasePage';

type PageObjectConstructor<T extends BasePage> = new (page: Page) => T;


async function  beforeEach<T extends BasePage>(
  page: Page,
  // PageObjectParam: LoginPage|BookPage|ProfilePage,
  PageObjectParam: PageObjectConstructor<T>,
  targetPage: string,
  params?: Record<any, any>
) {
  await page.goto(buildUrl(targetPage, params));
  const pageObject = await new PageObjectParam(page);
  return pageObject;
}

export default { beforeEach };
