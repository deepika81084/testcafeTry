import { Selector } from 'testcafe';

const  nameInput = Selector('input#search');
const  hoverHome = Selector('a').withText('Home');
fixture `firstModule`
.page`https://www.youtube.com/`


test('MyFirstTest',async t =>{
await t
      .typeText(nameInput,'books',{speed:0.1})
      //.typeText(nameInput,'cars',{replace:true})
      //.selectText(nameInput,1,4)
      //.hover(hoverHome)
      //.click(hoverHome)
      //.navigateTo('https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwi724XD2LbqAhXa8XMBHcz4C3oQPAgH')
      //.takeScreenshot('screenCapture.png')
      //.expect(nameInput.value).eql('books')
      .expect(hoverHome.exists).ok()
      .maximizeWindow()
      .wait(3000);
      });

