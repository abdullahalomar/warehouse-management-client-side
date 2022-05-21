import React from 'react';
import { Accordion } from 'react-bootstrap';


const Blog = () => {
    
    return (
        <div>
            <h2 className='text-center my-4'>Question & Answer</h2>
            {/* <div class="container">
  <div class="row g-2">
    <div class="col-6 pb-5">
      <div class="p-3 border bg-light">
      <h6>Q 1. Difference between javascript and nodejs?
             <br />
             <br />
             Ans:
            </h6>
            <article>
            JavaScript হল একটি সাধারণ প্রোগ্রামিং ভাষা যা যেকোনো ব্রাউজারে JavaScript ইঞ্জিন চালায়। যেখানে নোড জেএস হল একটি জাভাস্ক্রিপ্ট প্রোগ্রামিং ভাষার জন্য একটি দোভাষী বা চলমান পরিবেশ যা অনেক বাড়াবাড়ি ধারণ করে, এটির জন্য লাইব্রেরি প্রয়োজন যা ভাল ব্যবহারের জন্য জাভাস্ক্রিপ্ট প্রোগ্রামিং থেকে সহজেই অ্যাক্সেস করা যেতে পারে।
         </article>          
      </div>
    </div>
    <div class="col-6">
      <div class="p-3 border bg-light">
      <h6>Q 2. Difference between javascript and nodejs?
             <br />
             <br />
             Ans:
            </h6>
            <article>
            Nodejs হল একটি জাভাস্ক্রিপ্ট ইঞ্জিন যা দিয়ে আপনি যেকোন অ্যাপ্লিকেশন লিখতে পারেন (জাভাস্ক্রিপ্ট ভাষায় প্রোগ্রামিং করে)। এটি আপনার জাভাস্ক্রিপ্ট কোড চালায়। সাধারণত, এটি এমন সার্ভার তৈরি করতে ব্যবহৃত হয় যা ওয়েব অনুরোধে সাড়া দিতে পারে, যদিও এটি অনেক অন্যান্য ধরণের কোডের জন্যও ব্যবহার করা যেতে পারে।
            <br />
            MongoDB একটি ডাটাবেস ইঞ্জিন। কিছু অ্যাপ্লিকেশন বা সার্ভারের মধ্যে কোড একটি ডাটাবেসে ডেটা সংরক্ষণ, অনুসন্ধান বা আপডেট করতে MongoDB ব্যবহার করে। নোডেজ দিয়ে তৈরি অনেক ওয়েব সার্ভার আছে যেগুলো ডাটা সংরক্ষণের জন্য MongoDB ব্যবহার করবে।
         </article>          
      </div>
    </div>
    <div class="col-6">
      <div class="p-3 border bg-light">
      <h6>Q 3. Difference between javascript and nodejs?
             <br />
             <br />
             Ans:
            </h6>
            <article>
            এসকিউএল ডাটাবেসগুলি উল্লম্বভাবে স্কেলযোগ্য, যখন নোএসকিউএল ডেটাবেসগুলি অনুভূমিকভাবে স্কেলযোগ্য। এসকিউএল ডাটাবেসগুলি টেবিল-ভিত্তিক, যখন নোএসকিউএল ডাটাবেসগুলি নথি, কী-মান, গ্রাফ, বা প্রশস্ত-কলাম স্টোর। এসকিউএল ডাটাবেসগুলি বহু-সারি লেনদেনের জন্য ভাল, যখন নথি বা JSON এর মতো অসংগঠিত ডেটার জন্য NoSQL ভাল।
         </article>          
      </div>
    </div>
    <div class="col-6">
      <div class="p-3 border bg-light">
      <h6>Q 4. Difference between javascript and nodejs?
             <br />
             <br />
             Ans:
            </h6>
            <article>
            JWT, বা JSON ওয়েব টোকেন, একটি উন্মুক্ত মান যা দুটি পক্ষের মধ্যে নিরাপত্তা তথ্য ভাগ করার জন্য ব্যবহৃত হয় - একটি ক্লায়েন্ট এবং একটি সার্ভার। প্রতিটি JWT-এ এনকোড করা JSON অবজেক্ট রয়েছে, যার মধ্যে দাবির সেট রয়েছে। টোকেন ইস্যু করার পরে দাবিগুলি পরিবর্তন করা যাবে না তা নিশ্চিত করার জন্য একটি ক্রিপ্টোগ্রাফিক অ্যালগরিদম ব্যবহার করে JWTs স্বাক্ষরিত হয়।
         </article>          
      </div>
    </div>
  </div>
</div> */}
            
            <div className='container'>
            <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Question-1 : Difference between javascript and nodejs?</Accordion.Header>
    <Accordion.Body>
    JavaScript হল একটি সাধারণ প্রোগ্রামিং ভাষা যা যেকোনো ব্রাউজারে JavaScript ইঞ্জিন চালায়। যেখানে নোড জেএস হল একটি জাভাস্ক্রিপ্ট প্রোগ্রামিং ভাষার জন্য একটি দোভাষী বা চলমান পরিবেশ যা অনেক বাড়াবাড়ি ধারণ করে, এটির জন্য লাইব্রেরি প্রয়োজন যা ভাল ব্যবহারের জন্য জাভাস্ক্রিপ্ট প্রোগ্রামিং থেকে সহজেই অ্যাক্সেস করা যেতে পারে।
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Question-2 : When should you use nodejs and when should you use mongodb?</Accordion.Header>
    <Accordion.Body>
    Nodejs হল একটি জাভাস্ক্রিপ্ট ইঞ্জিন যা দিয়ে আপনি যেকোন অ্যাপ্লিকেশন লিখতে পারেন (জাভাস্ক্রিপ্ট ভাষায় প্রোগ্রামিং করে)। এটি আপনার জাভাস্ক্রিপ্ট কোড চালায়। সাধারণত, এটি এমন সার্ভার তৈরি করতে ব্যবহৃত হয় যা ওয়েব অনুরোধে সাড়া দিতে পারে, যদিও এটি অনেক অন্যান্য ধরণের কোডের জন্যও ব্যবহার করা যেতে পারে।
    <br />
    MongoDB একটি ডাটাবেস ইঞ্জিন। কিছু অ্যাপ্লিকেশন বা সার্ভারের মধ্যে কোড একটি ডাটাবেসে ডেটা সংরক্ষণ, অনুসন্ধান বা আপডেট করতে MongoDB ব্যবহার করে। নোডেজ দিয়ে তৈরি অনেক ওয়েব সার্ভার আছে যেগুলো ডাটা সংরক্ষণের জন্য MongoDB ব্যবহার করবে।
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Question-3 : Differences between sql and nosql databases?</Accordion.Header>
    <Accordion.Body>
    এসকিউএল ডাটাবেসগুলি উল্লম্বভাবে স্কেলযোগ্য, যখন নোএসকিউএল ডেটাবেসগুলি অনুভূমিকভাবে স্কেলযোগ্য। এসকিউএল ডাটাবেসগুলি টেবিল-ভিত্তিক, যখন নোএসকিউএল ডাটাবেসগুলি নথি, কী-মান, গ্রাফ, বা প্রশস্ত-কলাম স্টোর। এসকিউএল ডাটাবেসগুলি বহু-সারি লেনদেনের জন্য ভাল, যখন নথি বা JSON এর মতো অসংগঠিত ডেটার জন্য NoSQL ভাল।
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>Question-4 : What is the purpose of jwt and how does it work?</Accordion.Header>
    <Accordion.Body>
    JWT, বা JSON ওয়েব টোকেন, একটি উন্মুক্ত মান যা দুটি পক্ষের মধ্যে নিরাপত্তা তথ্য ভাগ করার জন্য ব্যবহৃত হয় - একটি ক্লায়েন্ট এবং একটি সার্ভার। প্রতিটি JWT-এ এনকোড করা JSON অবজেক্ট রয়েছে, যার মধ্যে দাবির সেট রয়েছে। টোকেন ইস্যু করার পরে দাবিগুলি পরিবর্তন করা যাবে না তা নিশ্চিত করার জন্য একটি ক্রিপ্টোগ্রাফিক অ্যালগরিদম ব্যবহার করে JWTs স্বাক্ষরিত হয়।
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
            </div>
            
        </div>

        
        
    );
    };

export default Blog;