import React, {} from 'react';
import Content from './Content';

function Projects(props) {
  return(
    <Content 
      title={'Projects'} hdrImage={require('../res/img/coder-moment.jpg')}
      content = {
        <>
          <h1>My Website</h1>
          <p>
            Website design gets hard the more you make it responsive and compatible to all devices. 
            It was hard but still, I learned a lot about web design and React, and I also made a lot 
            of mistakes that I can now keep an eye on not to repeat once more.
          </p>

          <h1><a href='https://github.com/SeijiDominic/sushi-place-api' target={'_blank'}>sushi-place-api</a></h1>
          
          <p>
            ***Copied from README.md***<br/><br/>
            A simple sushi restaurant api that can keep track of restaruant table, its order information, and products on runtime.<br/><br/>
            <div>
              <b>Things to do after cloning:</b>
              <ul>
                <li>Using psql: \ir &PROJECT_ROOT/src/db/schema.sql</li>
                <li>change username and password in &PROJECT_ROOT/src/db/index.ts</li>
              </ul>
            </div><br/>

            <div>
              <b>Main Flow:</b>
              <ul>
                <li>Occupy Table</li>
                <li>Customer subscribes and adds customer info and order items in table order.</li>
                <li>Customer place order.</li>
                <li>Checkout (can be payed per customer or all at once.)</li>
              </ul>
              ** Please refer to &PROJECT_ROOT/test.rest to test my api.
            </div><br/>

            <div>
              <b>Goals:</b>
              <ul>
                <li>Familiarize myself with technologies such as TypeScript, eslint, PostgreSQL and ExpressJS.</li>
                <li>Brush up my knowledge of OOP (Bad idea with TS).</li>
                <li>Find new ways to implement error handling.</li>
              </ul>
            </div><br/>

            <div>
              <b>Result:</b>
              <ul>
                <li>Got pretty confident with the basics of TypeScript and especially ExpressJS.</li>
                <li>TS does not support some OOP features such as constructor overloading so I don't think I will be using ts and js for OOP.</li>
                <li>I recently just learned about Rust's ownership rules and confused myself and forgot that JS uses object references. I'm good now.</li>
              </ul>
            </div><br/>

            <div>
              <b>Failed:</b>
              <ul>
                <li>Store Order information in DB.</li>
                <li>Use JWT to send tableId and custId but it's already 1st of April and I still have a lot of things I want to do other than this (Rust).</li>
              </ul>
            </div><br/>

            <div>
              <b>Message to furure self:</b>
              <ul>
                <li>Reorganize classes.</li>
                <li>Reject high coupling, embrace high cohesion.</li>
                <li>Stop overusing static methods.</li>
              </ul>
            </div>
          </p>
        </>
      } 
      
      footer={<div style={{textAlign: 'center', opacity: 0.5}}>More projects to come (???);</div>}/>
  );
}

export default Projects;