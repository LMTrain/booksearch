const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/googlebooks"
);

const bookSeed = [
  {
    bookid: "kingStePhenks",
    title: "1922",
    authors: "Stephen King",
    link: "http://books.google.com/books?id=Dc9cxQEACAAJ&dq=Stephen+King&hl=&source=gbs_api",
    thumbnail: "http://books.google.com/books/content?id=Dc9cxQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    description:
      "A number-one national best seller about a man who wakes up from a five-year coma able to see people's futures and the terrible fate awaiting mankind in The Dead Zone - a \"compulsive page-turner\" (The Atlanta Journal-Constitution). Johnny Smith awakens from a five-year coma after his car accident and discovers that he can see people's futures and pasts when he touches them. Many consider his talent a gift; Johnny feels cursed. His fiancée married another man during his coma, and people clamor for him to solve their problems. When Johnny has a disturbing vision after he shakes the hand of an ambitious and amoral politician, he must decide if he should take drastic action to change the future. The Dead Zone is a \"faultlessly paced...continuously engrossing\" (Los Angeles Times) novel of second sight.",
    publisheddate: "2019-11-12",
    note: "This is Stephen King",
    date: new Date(Date.now())
  },
  {
    id: "tornCindytc",
    title: "Lord of the Flies",
    authors: "Cindy Torn",
    link: "http://books.google.com/books?id=zvm_wwEACAAJ&dq=lord+of+the+flies&hl=&source=gbs_api",
    thumbnail: "http://books.google.com/books/content?id=zvm_wwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    description:
      "World class targeted revision and practice, with lots of specific tips and tricks on how to excel in the exam.\"JohnDabell, Teach Secondary magazine New combined revision and practice books for Lord of theFliesto get you top marks in your GCSE English Literature essays.Introducing our study guides, specifically written to support your revision for the closed book AQA GCSE English Literature examination. Each study guide is written by experts in teaching English and uses an active, stepped approach to revision to maximise learning. This study guide covers the chronology of the text and focuses on key events, characters, themes, context, language and structure to help you demonstrate your knowledge and understanding and achieve higher marks. With loads exam-style practice questions (and answers) you can't go wrong! Books in this series cover the following: Paper 1 Section A - Shakespeare (Romeo and Juliet, Macbeth) Paper 1 Section B - Nineteenth-century novel (The Sign of Four, A Christmas Carol, The Strange Case of Dr Jekyll and Mr Hyde) Paper 2 Section A - Modern texts (Blood Brothers, An Inspector Calls,Animal Farm, Lord of the Flies) Paper 2 Sections B and C - Poetry (Love and Relationshipsanthology, Power and Conflictanthology and Unseen) The accompanying app uses cutting-edge technology to help you revise on-the-go to: Use the free, personalised digital revision planner and get stuck into the quick tests to check your understanding Download our free revision cards which you can save to your phone to help you revise on the go Implement 'active' revision techniques - giving you lots of tips and tricks to help the knowledge sink in Active revision is easy with the following features included throughout the study guides: Snap it!Read it, snap it on your phone, revise it...helps you retain key facts Nail it!Authoritative essential tips and guidance to help you understand what's required in the AQA exam Do it!Short activities to consolidate your knowledge and understanding of the text Stretch it!Support for the really tough stuff that will get you higher grades Define it!Definitions of unfamiliar language in the text and important subject terminology",
    publisheddate: "2019-07-13",
    note: "This is Cindy Torn",
    date: new Date(Date.now())
  },
  {
    id: "salingerJDsjd",
    title: "The Catcher in the Rye",
    authors: "J.D. Salinger",
    link: "http://books.google.com/books?id=Dc9cxQEACAAJ&dq=Stephen+King&hl=&source=gbs_api",
    thumbnail: "http://books.google.com/books/content?id=Dc9cxQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    description:
      "A number-one national best seller about a man who wakes up from a five-year coma able to see people's futures and the terrible fate awaiting mankind in The Dead Zone - a \"compulsive page-turner\" (The Atlanta Journal-Constitution). Johnny Smith awakens from a five-year coma after his car accident and discovers that he can see people's futures and pasts when he touches them. Many consider his talent a gift; Johnny feels cursed. His fiancée married another man during his coma, and people clamor for him to solve their problems. When Johnny has a disturbing vision after he shakes the hand of an ambitious and amoral politician, he must decide if he should take drastic action to change the future. The Dead Zone is a \"faultlessly paced...continuously engrossing\" (Los Angeles Times) novel of second sight.",
    publisheddate: "2019-11-12",
    note: "This is J.D. Salinger",
    date: new Date(Date.now())
  },  
  {
    id: "noahTrevornt",
    title: "Born a Crime: Stories from a South African Childhood",
    authors: "Trevor Noah",
    link: "http://books.google.com/books?id=Dc9cxQEACAAJ&dq=Stephen+King&hl=&source=gbs_api",
    thumbnail: "http://books.google.com/books/content?id=Dc9cxQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    description:
      "A number-one national best seller about a man who wakes up from a five-year coma able to see people's futures and the terrible fate awaiting mankind in The Dead Zone - a \"compulsive page-turner\" (The Atlanta Journal-Constitution). Johnny Smith awakens from a five-year coma after his car accident and discovers that he can see people's futures and pasts when he touches them. Many consider his talent a gift; Johnny feels cursed. His fiancée married another man during his coma, and people clamor for him to solve their problems. When Johnny has a disturbing vision after he shakes the hand of an ambitious and amoral politician, he must decide if he should take drastic action to change the future. The Dead Zone is a \"faultlessly paced...continuously engrossing\" (Los Angeles Times) novel of second sight.",
    publisheddate: "2019-11-12",
    note:"This is Trevor Noah",
    date: new Date(Date.now())
  }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
