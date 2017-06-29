
import { Selector } from 'testcafe';
import configs from '../config.json';

fixture `Basic`
  .page `${configs.url}`;

test('Basic Home Page loads', async actions => {
  await actions
    .expect(Selector("h1").visible).ok()
    .expect(Selector("nav").visible).ok()
    .expect(Selector("main").visible).ok()
    .expect(Selector("header h1 img").visible).ok;
});

test('About Page', async actions => {
  const mainLogin = Selector(".post-content p img");
  await actions
    .click("nav a[href*='about']")
    .expect(mainLogin.visible).ok()
    .expect(mainLogin.count).eql(1);
});

test('Basic Tags Check', async actions => {
  await actions
    .navigateTo(`${configs.url}tag/computer-science/`)
    .expect(Selector("header.tag-head > h2").visible).ok()
    .expect(Selector("main > article > header > h2 > a").visible).ok()
});